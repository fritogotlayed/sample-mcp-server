import { MCPRequest, MCPResponse, MCPResponseResult, ToolsCallParams } from './interfaces/mcp-protocol.ts';
import { DefaultServices, MCPServices } from './interfaces/services.ts';
import { CustomMcpServer } from './custom-mcp.ts';
import { randomUUID } from 'node:crypto';
import { ToolsService } from './tools.service.ts';

const logMessage = (...msg: string[]) => {
  if (Deno.env.get('MCP_VERBOSE_LOGGING')) {
    console.log(...msg);
  }
};

/**
 * Service for handling MCP server operations
 */
export class MCPServerService<TServices extends MCPServices = DefaultServices> {
  private registry?: ToolsService<TServices>;
  private serverName: string;
  private serverVersion: string;
  private port: number;
  private mcpServer: CustomMcpServer;
  private services?: TServices;

  /**
   * Creates a new MCPServerService
   * @param serverName The name of the server
   * @param serverVersion The version of the server
   * @param port The HTTP server port (default: 8000)
   */
  constructor(
    serverName: string = 'sample-mcp-server',
    serverVersion: string = '1.0.0',
    port: number = 8000,
  ) {
    this.serverName = serverName;
    this.serverVersion = serverVersion;
    this.port = port;

    // Create the MCP server
    this.mcpServer = new CustomMcpServer({
      name: this.serverName,
      version: this.serverVersion,
      protocolVersion: '2024-11-05',
    });
  }

  private isPromise<T = unknown>(value: unknown): value is Promise<T> {
    return !!value && typeof (value as Record<string, unknown>)?.then === 'function';
  }

  private isToolsCallParams(params: unknown): params is ToolsCallParams {
    return !!params &&
      typeof params === 'object' &&
      'name' in params &&
      'arguments' in params &&
      typeof (params as ToolsCallParams).name === 'string' &&
      typeof (params as ToolsCallParams).arguments === 'object';
  }

  public registerServices(services: TServices): void {
    this.services = { ...this.services, ...services } as TServices;

    if (!this.registry && Object.keys(this.services).length > 0) {
      this.registry = new ToolsService<TServices>(this.services);
      this.registerTools();
    }
  }

  /**
   * Registers all tools with the MCP server
   */
  private registerTools(): void {
    if (!this.registry) {
      throw new Error('Tool registry not initialized');
    }
    const tools = this.registry.listTools();

    for (const tool of tools) {
      this.mcpServer.tool(
        tool.name,
        tool.description,
        tool.inputSchema.properties ?? {},
        tool.outputSchema?.properties ?? {},
        async (args: Record<string, unknown>) => {
          if (!this.registry) {
            throw new Error('Tool registry not initialized');
          }

          try {
            const result = this.registry.callTool(tool.name, args);
            const realizedResult = this.isPromise(result) ? await result : result;
            return {
              content: [{
                type: 'text',
                text: JSON.stringify(realizedResult, null, 2),
              }],
            };
          } catch (error) {
            throw new Error((error as Error).message);
          }
        },
      );
    }
  }

  /**
   * Handles an MCP request (for testing purposes only)
   * @param request The MCP request
   * @returns The MCP response
   * @remarks This method is public for testing purposes only. End users should not call it directly.
   */
  protected async handleRequest(request: MCPRequest): Promise<MCPResponse> {
    if (!this.registry) {
      throw new Error('Tool registry not initialized');
    }

    try {
      switch (request.method) {
        case 'tools/list': {
          logMessage('Handling tools/list request...');
          return this.createSuccessResponse(request.id, {
            tools: this.registry.listTools(),
          });
        }

        case 'tools/call': {
          logMessage('Handling tools/call request...');
          if (!request.params || !this.isToolsCallParams(request.params)) {
            return this.createErrorResponse(request.id, 'Invalid or missing parameters for tools/call');
          }
          const toolsParams = request.params as ToolsCallParams;
          const result = this.registry.callTool(
            toolsParams.name,
            toolsParams.arguments,
          );
          const realizedResult = this.isPromise(result) ? await result : result;

          return this.createSuccessResponse(request.id, {
            content: [{
              type: 'text',
              text: JSON.stringify(realizedResult, null, 2),
            }],
          });
        }

        case 'initialize': {
          logMessage('Handling initialize request...');
          return this.createSuccessResponse(request.id, {
            protocolVersion: '2024-11-05',
            capabilities: {
              tools: {},
            },
            serverInfo: {
              name: this.serverName,
              version: this.serverVersion,
            },
          });
        }

        case 'notifications/initialized': {
          return this.createSuccessResponse(request.id, {});
        }

        case 'ping': {
          logMessage('Handling ping request...');
          return this.createSuccessResponse(request.id, {});
        }

        default: {
          logMessage('Unknown method:', request.method);
          return this.createErrorResponse(request.id, 'Unknown method');
        }
      }
    } catch (error) {
      return this.createErrorResponse(request.id, (error as Error).message);
    }
  }

  /**
   * Creates a success response (for testing purposes only)
   * @param id The request ID
   * @param result The result
   * @returns The MCP response
   */
  private createSuccessResponse(id: string | number, result: MCPResponseResult): MCPResponse {
    return {
      jsonrpc: '2.0',
      id,
      result,
    };
  }

  /**
   * Creates an error response (for testing purposes only)
   * @param id The request ID
   * @param message The error message
   * @param code The error code
   * @returns The MCP response
   */
  private createErrorResponse(
    id: string | number,
    message: string,
    code: number = -32000,
  ): MCPResponse {
    return {
      jsonrpc: '2.0',
      id,
      error: {
        code,
        message,
      },
    };
  }

  /**
   * Starts the MCP server in HTTP mode
   */
  private startHttpMode(): void {
    console.error(
      `${this.serverName} v${this.serverVersion} starting HTTP server on port ${this.port}...`,
    );

    // Generate a session ID for this server instance
    const sessionId = randomUUID();
    this.mcpServer.setSessionId(sessionId);

    // Start the HTTP server
    Deno.serve({
      port: this.port,
      hostname: '0.0.0.0',
      handler: async (request: Request) => {
        logMessage(`Handling HTTP request: ${request.method} ${request.url}`);

        // Handle health check endpoint
        if (
          request.method === 'GET' &&
          new URL(request.url).pathname === '/health'
        ) {
          return new Response('OK', { status: 200 });
        }

        // For MCP requests
        if (
          request.method === 'POST' && new URL(request.url).pathname === '/'
        ) {
          logMessage(`IN POST HANDLER: ${request.method} ${request.url}`);
          try {
            const requestBody = await request.json();
            logMessage(
              `Request Body: ${JSON.stringify(requestBody, null, 2)}`,
            );

            // Validate the request
            if (!requestBody.jsonrpc || !requestBody.method) {
              logMessage('Invalid request found');
              return new Response(
                JSON.stringify({
                  jsonrpc: '2.0',
                  id: null,
                  error: {
                    code: -32600,
                    message: 'Invalid Request',
                  },
                }),
                {
                  status: 400,
                  headers: { 'Content-Type': 'application/json' },
                },
              );
            }

            // Handle the request
            logMessage('Handling request...');
            const mcpRequest = requestBody as MCPRequest;
            const mcpResponse = await this.handleRequest(mcpRequest);

            // Add session ID to the response headers
            const headers = new Headers({ 'Content-Type': 'application/json' });
            if (sessionId) {
              headers.set('mcp-session-id', sessionId);
            }

            // Return the response
            return new Response(JSON.stringify(mcpResponse), {
              status: 200,
              headers,
            });
          } catch (error) {
            console.error('Error processing HTTP request:', error);

            return new Response(
              JSON.stringify({
                jsonrpc: '2.0',
                id: null,
                error: {
                  code: -32603,
                  message: 'Internal error',
                },
              }),
              {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
              },
            );
          }
        }

        if (
          request.method === 'DELETE' && new URL(request.url).pathname === '/'
        ) {
          logMessage(`IN DELETE HANDLER: ${request.method} ${request.url}`);
          try {
            const sessionId = request.headers.get('mcp-session-id');
            logMessage(
              `Session ID: ${sessionId ?? 'No session ID found'}`,
            );
          } catch (error) {
            console.error('Error processing HTTP request:', error);
          }

          // Return the response
          const headers = new Headers({ 'Content-Type': 'application/json' });
          return new Response(JSON.stringify({}), {
            status: 200,
            headers,
          });
        }

        // Handle method not allowed
        console.error('Method not allowed:', request.method, request.url);
        return new Response('Method Not Allowed', { status: 405 });
      },
    });
  }

  /**
   * Starts the MCP server in the specified mode
   */
  public start(): void {
    if (!this.registry) {
      this.registry = new ToolsService<TServices>(this.services);
      this.registerTools();
    }

    // List discovered (enabled) tools before starting the server
    const discovered = this.registry.listTools();
    const names = discovered.map((t) => t.name);
    console.log(`Discovered tools (${names.length}): ${names.join(', ')}`);

    // Start in the specified mode
    this.startHttpMode();
  }
}
