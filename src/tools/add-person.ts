import { z } from 'zod';
import { ToolDefinition } from '../mcp-core/ports/tool-registry.ts';
import { ToolHandlerCallback } from '../mcp-core/types.ts';
import { AppServices } from '../interfaces/app-services.ts';
import { emailSchema, nameSchema, phoneSchema } from '../domain/schema-fragments.ts';
import { handleZodValidationError } from '../domain/errors.ts';
import { zodToInputSchema } from '../domain/zod-to-input-schema.ts';

const AddPersonArgsSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
});

/**
 * Tool definition for adding a new person to the phone book
 */
export const tool: ToolDefinition = {
  name: 'add_person',
  description: 'Add a new person to the phone book',
  inputSchema: zodToInputSchema(AddPersonArgsSchema),
};

/**
 * Handler for the add_person tool
 * @param args The tool arguments (must contain name, email, and phone)
 * @param services The services available to the tool
 * @returns Object containing the added person
 * @throws ValidationError if the input is invalid
 */
export const handler: ToolHandlerCallback<AppServices> = (args, services) => {
  try {
    const validatedArgs = AddPersonArgsSchema.parse(args);

    return {
      person: services.databaseService.addPerson({
        name: validatedArgs.name,
        email: validatedArgs.email,
        phone: validatedArgs.phone,
      }),
    };
  } catch (error) {
    handleZodValidationError(error);
  }
};
