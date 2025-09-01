import { z } from 'zod';
import { ToolDefinition } from '../mcp-core/ports/tool-registry.ts';
import { ToolHandlerCallback } from '../mcp-core/types.ts';
import { AppServices } from '../interfaces/app-services.ts';
import { querySchema } from '../domain/schema-fragments.ts';
import { handleZodValidationError } from '../domain/errors.ts';
import { zodToInputSchema } from '../domain/zod-to-input-schema.ts';

const SearchPersonsArgsSchema = z.object({
  query: querySchema,
});

/**
 * Tool definition for searching persons by name, email, or phone
 */
export const tool: ToolDefinition = {
  name: 'search_persons',
  disabled: true,
  description:
    "Search persons by name, email, or phone. Use 'email=*@foo.com AND phone=123' format for searching multiple items.",
  inputSchema: zodToInputSchema(SearchPersonsArgsSchema),
};

/**
 * Handler for the search_persons tool
 * @param args The tool arguments (must contain query)
 * @param services The services available to the tool
 * @returns Object containing the matching persons
 * @throws ValidationError if the input is invalid
 */
export const handler: ToolHandlerCallback<AppServices> = (args, services) => {
  try {
    const validatedArgs = SearchPersonsArgsSchema.parse(args);
    return { persons: services.databaseService.searchPersons(validatedArgs.query) };
  } catch (error) {
    handleZodValidationError(error);
  }
};
