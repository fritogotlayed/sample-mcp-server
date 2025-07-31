import { z } from 'zod';
import { ToolDefinition } from '../mcp-core/ports/tool-registry.ts';
import { ToolHandlerCallback } from '../mcp-core/types.ts';
import { AppServices } from '../interfaces/app-services.ts';
import { idSchema } from '../domain/schema-fragments.ts';
import { handleZodValidationError } from '../domain/errors.ts';
import { zodToInputSchema } from '../domain/zod-to-input-schema.ts';

const GetPersonArgsSchema = z.object({
  id: idSchema,
});

/**
 * Tool definition for getting a specific person by ID
 */
export const tool: ToolDefinition = {
  name: 'get_person',
  description: 'Get a specific person by ID',
  inputSchema: zodToInputSchema(GetPersonArgsSchema),
};

/**
 * Handler for the get_person tool
 * @param args The tool arguments (must contain id)
 * @param services The services available to the tool
 * @returns Object containing the person
 * @throws ValidationError if the input is invalid
 */
export const handler: ToolHandlerCallback<AppServices> = (args, services) => {
  try {
    const validatedArgs = GetPersonArgsSchema.parse(args);
    return { person: services.databaseService.getPersonById(validatedArgs.id) };
  } catch (error) {
    handleZodValidationError(error);
  }
};
