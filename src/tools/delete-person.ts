import { z } from 'zod';
import { ToolDefinition } from '../mcp-core/ports/tool-registry.ts';
import { ToolHandlerCallback } from '../mcp-core/types.ts';
import { AppServices } from '../interfaces/app-services.ts';
import { idSchema } from '../domain/schema-fragments.ts';
import { handleZodValidationError } from '../domain/errors.ts';
import { zodToInputSchema } from '../domain/zod-to-input-schema.ts';

const DeletePersonArgsSchema = z.object({
  id: idSchema,
});

/**
 * Tool definition for deleting a person from the phone book
 */
export const tool: ToolDefinition = {
  name: 'delete_person',
  description: 'Delete a person from the phone book',
  inputSchema: zodToInputSchema(DeletePersonArgsSchema),
};

/**
 * Handler for the delete_person tool
 * @param args The tool arguments (must contain id)
 * @param services The services available to the tool
 * @returns Object containing the deleted person
 * @throws ValidationError if the input is invalid
 */
export const handler: ToolHandlerCallback<AppServices> = (args, services) => {
  try {
    const validatedArgs = DeletePersonArgsSchema.parse(args);
    return { person: services.databaseService.deletePerson(validatedArgs.id) };
  } catch (error) {
    handleZodValidationError(error);
  }
};
