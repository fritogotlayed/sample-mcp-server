import { z } from 'zod';
import { ToolDefinition } from '../mcp-core/ports/tool-registry.ts';
import { ToolHandlerCallback } from '../mcp-core/types.ts';
import { AppServices } from '../interfaces/app-services.ts';
import { handleZodValidationError } from '../domain/errors.ts';
import { zodToInputSchema } from '../domain/zod-to-input-schema.ts';

const SearchListingsArgsSchema = z.object({
  needsAttention: z.optional(z.boolean()),
});

/**
 * Tool definition for getting a specific person by ID
 */
export const tool: ToolDefinition = {
  name: 'search_listings',
  description: 'Search listings',
  inputSchema: zodToInputSchema(SearchListingsArgsSchema),
};

/**
 * Handler for the search_listings tool
 * @param args The tool arguments
 * @param services The services available to the tool
 * @returns Object containing the person
 * @throws ValidationError if the input is invalid
 */
export const handler: ToolHandlerCallback<AppServices> = async (args, services) => {
  try {
    const validatedArgs = SearchListingsArgsSchema.parse(args);
    const { data, error } = await services.txmService.GET('/listings', {
      params: { query: { needsAttention: validatedArgs.needsAttention, includeContacts: true, limit: 100 } },
    });
    if (error) {
      throw error;
    }
    return { listings: data.results };
  } catch (error) {
    handleZodValidationError(error);
  }
};
