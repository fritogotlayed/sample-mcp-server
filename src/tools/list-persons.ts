import { ToolDefinition } from '../mcp-core/ports/tool-registry.ts';
import { ToolHandlerCallback } from '../mcp-core/types.ts';
import { AppServices } from '../interfaces/app-services.ts';
import { handleZodValidationError } from '../domain/errors.ts';

/**
 * Tool definition for listing all persons in the phone book
 */
export const tool: ToolDefinition = {
  name: 'list_persons',
  description: 'List all persons in the phone book',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

/**
 * Handler for the list_persons tool
 * @param _args The tool arguments (empty for this tool)
 * @param services The services available to the tool
 * @returns Object containing the list of persons
 * @throws ValidationError if the input is invalid
 */
export const handler: ToolHandlerCallback<AppServices> = (_args, services) => {
  try {
    return { persons: services.databaseService.getAllPersons() };
  } catch (error) {
    handleZodValidationError(error);
  }
};
