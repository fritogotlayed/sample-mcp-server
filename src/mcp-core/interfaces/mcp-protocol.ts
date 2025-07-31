/**
 * Represents MCP request parameters for tools/call method
 */
export interface ToolsCallParams {
  name: string;
  arguments: Record<string, unknown>;
}

/**
 * Represents MCP request parameters (can be undefined for most methods)
 */
export type MCPRequestParams = ToolsCallParams | Record<string, unknown> | undefined;

/**
 * Represents MCP response result for tools/list method
 */
export interface ToolsListResult {
  tools: Array<{
    name: string;
    description: string;
    inputSchema: {
      type: string;
      properties: Record<string, unknown>;
    };
  }>;
}

/**
 * Represents MCP response result for tools/call method
 */
export interface ToolsCallResult {
  content: Array<{
    type: string;
    text: string;
  }>;
}

/**
 * Represents MCP response result for initialize method
 */
export interface InitializeResult {
  protocolVersion: string;
  capabilities: {
    tools: Record<string, unknown>;
  };
  serverInfo: {
    name: string;
    version: string;
  };
}

/**
 * Represents MCP response result (can be various types depending on the method)
 */
export type MCPResponseResult =
  | ToolsListResult
  | ToolsCallResult
  | InitializeResult
  | Record<string, unknown>
  | undefined;

/**
 * Represents an MCP request
 */
export interface MCPRequest {
  jsonrpc: '2.0';
  id: string | number;
  method: string;
  params?: MCPRequestParams;
}

/**
 * Represents an MCP response
 */
export interface MCPResponse {
  jsonrpc: '2.0';
  id: string | number;
  result?: MCPResponseResult;
  error?: {
    code: number;
    message: string;
  };
}
