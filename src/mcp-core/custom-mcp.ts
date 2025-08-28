/**
 * Custom implementation of the MCP server to replace the @modelcontextprotocol/sdk dependency.
 *
 * This implementation provides a simplified version of the MCP server that supports:
 * - Tool registration and management
 * - Session ID management
 * - Server information and protocol version
 *
 * It implements the core functionality needed for the MCP server without requiring
 * the external dependency on @modelcontextprotocol/sdk. The implementation follows
 * the JSON-RPC 2.0 protocol for request/response handling.
 *
 * This custom implementation is designed to be a drop-in replacement for the SDK's
 * McpServer class, with the same interface but a simpler implementation.
 */

import { ToolInputProperties, ToolOutputProperties } from './ports/tool-registry.ts';

/**
 * Interface for a tool handler function
 */
export type ToolHandler = (args: Record<string, unknown>) => Promise<unknown> | unknown;

/**
 * Interface for a registered tool
 */
export interface RegisteredTool {
  name: string;
  description: string;
  inputProperties: ToolInputProperties;
  outputProperties: ToolOutputProperties;
  handler: ToolHandler;
}

/**
 * Configuration for the MCP server
 */
export interface McpServerConfig {
  name: string;
  version: string;
  protocolVersion: string;
}

/**
 * Custom implementation of the MCP server
 */
export class CustomMcpServer {
  private name: string;
  private version: string;
  private protocolVersion: string;
  private tools: Map<string, RegisteredTool> = new Map();
  private sessionId: string | null = null;

  /**
   * Creates a new CustomMcpServer
   * @param config The server configuration
   */
  constructor(config: McpServerConfig) {
    this.name = config.name;
    this.version = config.version;
    this.protocolVersion = config.protocolVersion;
  }

  /**
   * Registers a tool with the server
   * @param name The tool name
   * @param description The tool description
   * @param inputProperties The tool input properties
   * @param outputProperties The tool output properties
   * @param handler The tool handler function
   */
  public tool(
    name: string,
    description: string,
    inputProperties: ToolInputProperties,
    outputProperties: ToolOutputProperties,
    handler: ToolHandler,
  ): void {
    this.tools.set(name, {
      name,
      description,
      inputProperties,
      outputProperties,
      handler,
    });
  }

  /**
   * Gets all registered tools
   * @returns Array of registered tools
   */
  public getTools(): RegisteredTool[] {
    return Array.from(this.tools.values());
  }

  /**
   * Gets a tool by name
   * @param name The tool name
   * @returns The tool or undefined if not found
   */
  public getTool(name: string): RegisteredTool | undefined {
    return this.tools.get(name);
  }

  /**
   * Gets the server information
   * @returns The server information
   */
  public getServerInfo(): { name: string; version: string } {
    return {
      name: this.name,
      version: this.version,
    };
  }

  /**
   * Gets the protocol version
   * @returns The protocol version
   */
  public getProtocolVersion(): string {
    return this.protocolVersion;
  }

  /**
   * Sets the session ID
   * @param sessionId The session ID
   */
  public setSessionId(sessionId: string): void {
    this.sessionId = sessionId;
  }

  /**
   * Gets the session ID
   * @returns The session ID
   */
  public getSessionId(): string | null {
    return this.sessionId;
  }

  /**
   * Connects the server to a transport (no-op in this implementation)
   * @param _transport The transport (not used)
   */
  public connect(_transport: unknown): Promise<void> {
    // This is a no-op in our implementation
    // We're handling HTTP directly in the MCPServerService
    return Promise.resolve();
  }
}
