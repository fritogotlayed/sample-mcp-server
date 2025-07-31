export interface ToolInputProperties {
  [key: string]: {
    type: string;
    description?: string;
    enum?: string[];
    items?: Record<string, unknown>;
    properties?: Record<string, unknown>;
    required?: string[];
  };
}

export interface ToolOutputProperties {
  [key: string]: unknown;
}

export interface InputOutputSchema {
  type: 'object';
  properties: ToolInputProperties;
  required?: string[];
}

/*
 * Reference: https://modelcontextprotocol.io/specification/2025-06-18/schema#tool
 */
export interface ToolDefinition {
  _meta?: { [key: string]: unknown };
  annotations?: {
    destructiveHint?: boolean;
    idempotentHint?: boolean;
    openWorldHint?: boolean;
    readOnlyHint?: boolean;
    title?: string;
  };
  description: string;
  disabled?: boolean;
  inputSchema: InputOutputSchema;
  name: string;
  outputSchema?: InputOutputSchema;
  title?: string;
}

export interface ToolRegistry {
  listTools(): ToolDefinition[];
  callTool(
    name: string,
    args: Record<string, unknown>,
  ): Promise<unknown> | unknown;
}
