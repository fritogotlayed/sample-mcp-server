/**
 * Base interface that consuming applications must implement
 * to define their available services
 */
// deno-lint-ignore no-empty-interface
export interface MCPServices {
  // This will be extended by consuming applications
}

/**
 * Default services interface - can be extended by applications
 */
export interface DefaultServices extends MCPServices {
  [key: string]: unknown;
}
