/**
 * Represents a person in the phone book
 */
export interface Person {
  id: string;
  name: string;
  email: string;
  phone: string;
}

/**
 * Represents the database structure
 */
export interface Database {
  persons: Person[];
}

/**
 * Represents a tool that can be used by the MCP server
 */
export interface Tool {
  name: string;
  description: string;
  inputSchema: {
    type: "object";
    properties: Record<string, any>;
    required?: string[];
  };
}

/**
 * Represents an MCP request
 */
export interface MCPRequest {
  jsonrpc: "2.0";
  id: string | number;
  method: string;
  params?: any;
}

/**
 * Represents an MCP response
 */
export interface MCPResponse {
  jsonrpc: "2.0";
  id: string | number;
  result?: any;
  error?: {
    code: number;
    message: string;
  };
}

/**
 * Custom error class for database operations
 */
export class DatabaseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DatabaseError";
  }
}

/**
 * Custom error class for when a person is not found
 */
export class PersonNotFoundError extends Error {
  constructor(id: string) {
    super(`Person with ID ${id} not found`);
    this.name = "PersonNotFoundError";
  }
}

/**
 * Custom error class for invalid tool calls
 */
export class ToolError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ToolError";
  }
}