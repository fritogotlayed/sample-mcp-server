import { z } from 'zod';
import { ToolDefinition } from '../mcp-core/ports/tool-registry.ts';
import { ToolHandlerCallback } from '../mcp-core/types.ts';
import { AppServices } from '../interfaces/app-services.ts';
import { emailSchema, idSchema, nameSchema, phoneSchema } from '../domain/schema-fragments.ts';
import { handleZodValidationError } from '../domain/errors.ts';
import { zodToInputSchema } from '../domain/zod-to-input-schema.ts';

const UpdatePersonArgsSchema = z.object({
  id: idSchema,
  name: nameSchema.optional(),
  email: emailSchema.optional(),
  phone: phoneSchema.optional(),
});

/**
 * Tool definition for updating an existing person
 */
export const tool: ToolDefinition = {
  name: 'update_person',
  description: 'Update an existing person',
  inputSchema: zodToInputSchema(UpdatePersonArgsSchema),
};

/**
 * Handler for the update_person tool
 * @param args The tool arguments (must contain id, and optionally name, email, and phone)
 * @param services The services available to the tool
 * @returns Object containing the updated person
 * @throws ValidationError if the input is invalid
 */
export const handler: ToolHandlerCallback<AppServices> = (args, services) => {
  try {
    const validatedArgs = UpdatePersonArgsSchema.parse(args);

    return {
      person: services.databaseService.updatePerson(validatedArgs.id, {
        name: validatedArgs.name,
        email: validatedArgs.email,
        phone: validatedArgs.phone,
      }),
    };
  } catch (error) {
    handleZodValidationError(error);
  }
};
