import { MCPRequest, MCPResponse } from "../models/types.ts";
import { ToolsService } from "./tools.service.ts";
import { Hono } from "hono";

/**
 * Service for handling MCP server operations
 */
export class MCPServerService {
  private toolsService: ToolsService;
  private serverName: string;
  private serverVersion: string;
  private port: number;

  /**
   * Creates a new MCPServerService
   * @param toolsService The tools service to use
   * @param serverName The name of the server
   * @param serverVersion The version of the server
   * @param port The HTTP server port (default: 8000)
   */
  constructor(
    toolsService: ToolsService, 
    serverName: string = "phonebook-mcp-server", 
    serverVersion: string = "1.0.0",
    port: number = 8000
  ) {
    this.toolsService = toolsService;
    this.serverName = serverName;
    this.serverVersion = serverVersion;
    this.port = port;
  }

  /**
   * Handles an MCP request
   * @param request The MCP request
   * @returns The MCP response
   */
  public handleRequest(request: MCPRequest): MCPResponse {
    try {
      switch (request.method) {
        case "tools/list":
          return this.createSuccessResponse(request.id, { 
            tools: this.toolsService.getTools() 
          });

        case "tools/call":
          const result = this.toolsService.handleToolCall(
            request.params.name, 
            request.params.arguments
          );
          
          return this.createSuccessResponse(request.id, { 
            content: [{ 
              type: "text", 
              text: JSON.stringify(result, null, 2) 
            }] 
          });

        case "initialize":
          return this.createSuccessResponse(request.id, {
            protocolVersion: "2024-11-05",
            capabilities: {
              tools: {}
            },
            serverInfo: {
              name: this.serverName,
              version: this.serverVersion
            }
          });

        default:
          throw new Error(`Unknown method: ${request.method}`);
      }
    } catch (error) {
      return this.createErrorResponse(request.id, (error as Error).message);
    }
  }

  /**
   * Creates a success response
   * @param id The request ID
   * @param result The result
   * @returns The MCP response
   */
  private createSuccessResponse(id: string | number, result: any): MCPResponse {
    return {
      jsonrpc: "2.0",
      id,
      result
    };
  }

  /**
   * Creates an error response
   * @param id The request ID
   * @param message The error message
   * @param code The error code
   * @returns The MCP response
   */
  private createErrorResponse(
    id: string | number, 
    message: string, 
    code: number = -32000
  ): MCPResponse {
    return {
      jsonrpc: "2.0",
      id,
      error: {
        code,
        message
      }
    };
  }

  /**
   * Creates a Hono app for handling HTTP requests
   * @returns The Hono app
   */
  private createHonoApp(): Hono {
    const app = new Hono();
    
    // Health check endpoint
    app.get("/health", (c) => c.text("OK"));
    
    // Handle MCP requests
    app.post("/", async (c) => {
      try {
        // Parse the request body as JSON
        const requestBody = await c.req.json();
        
        // Validate that it's a valid MCP request
        if (!requestBody.jsonrpc || !requestBody.method || !requestBody.id) {
          return c.json({
            jsonrpc: "2.0",
            id: null,
            error: {
              code: -32600,
              message: "Invalid Request"
            }
          }, 400);
        }

        // Handle the MCP request
        const mcpRequest = requestBody as MCPRequest;
        const mcpResponse = this.handleRequest(mcpRequest);

        // Return the response as JSON
        return c.json(mcpResponse);
      } catch (error) {
        console.error("Error processing HTTP request:", error);
        
        // Return a JSON-RPC error response
        return c.json({
          jsonrpc: "2.0",
          id: null,
          error: {
            code: -32603,
            message: "Internal error"
          }
        }, 500);
      }
    });
    
    // Handle method not allowed
    app.all("*", (c) => c.text("Method Not Allowed", 405));
    
    return app;
  }

  /**
   * Starts the MCP server in HTTP mode
   */
  private async startHttpMode(): Promise<void> {
    console.error(`${this.serverName} v${this.serverVersion} starting HTTP server on port ${this.port}...`);
    
    const app = this.createHonoApp();
    Deno.serve({
      port: this.port,
      hostname: '0.0.0.0'
    }, app.fetch);
  }

  /**
   * Starts the MCP server in HTTP mode
   */
  public async start(mode: "http" = "http"): Promise<void> {
    // Start in HTTP mode
    await this.startHttpMode();
  }
}