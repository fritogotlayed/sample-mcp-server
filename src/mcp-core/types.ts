import { DefaultServices, MCPServices } from './interfaces/services.ts';

export type ToolHandlerCallback<
  TServices extends MCPServices = DefaultServices,
> = (
  args: Record<string, unknown>,
  services: TServices,
) => unknown;

/**
 * Custom error class for invalid tool calls
 */
export class ToolError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ToolError';
  }
}
