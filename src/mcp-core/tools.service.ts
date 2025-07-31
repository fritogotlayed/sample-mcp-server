import { DefaultServices, MCPServices } from './interfaces/services.ts';
import { ToolError } from './types.ts';
import { handlers, tools } from '../tools/index.ts';
import { ToolDefinition, ToolRegistry } from './ports/tool-registry.ts';

export class ToolsService<TServices extends MCPServices = DefaultServices> implements ToolRegistry {
  private readonly services: TServices;

  /**
   * Creates a new ToolsService
   * @param services The services object to pass to handlers
   */
  constructor(services: TServices = {} as TServices) {
    this.services = services;
  }

  public listTools(): ToolDefinition[] {
    return tools;
  }

  public callTool(name: string, args: Record<string, unknown>): Promise<unknown> | unknown {
    const handler = handlers[name];

    if (!handler) {
      throw new ToolError(`Unknown tool: ${name}`);
    }

    try {
      // Cast to unknown first, then to the expected service type for handlers
      return handler(args, this.services as unknown as DefaultServices);
    } catch (error) {
      const err = error as Error;
      // Re-throw certain errors "as is"
      if (['PersonNotFoundError'].includes(err.name)) {
        throw error;
      }

      // Wrap other errors
      throw new ToolError(`Error executing tool ${name}: ${err.message}`);
    }
  }
}
