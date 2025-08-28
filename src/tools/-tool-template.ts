import { z } from 'zod';
import { ToolDefinition } from '../mcp-core/ports/tool-registry.ts';
import { ToolHandlerCallback } from '../mcp-core/types.ts';
import { nameSchema } from '../domain/schema-fragments.ts';
import { zodToInputSchema } from '../domain/zod-to-input-schema.ts';

/*
 * The args object schema object that will be consumed by the handler
 */
const ArgsSchema = z.object({
  name: nameSchema,
});

/**
 * Tool definition for adding a new person to the phone book
 */
export const tool: ToolDefinition = {
  name: 'tool-template',
  description: 'TODO: Update this description',
  disabled: true, // NOTE: Remove or set this false to enable the tool
  inputSchema: zodToInputSchema(ArgsSchema),
};

/**
 * Handler for the sample tool
 * @param args The tool arguments (must contain name)
 * @returns Object containing the result
 * @throws ValidationError if the input is invalid
 */
export const handler: ToolHandlerCallback = (args) => {
  const typedArgs = ArgsSchema.parse(args);

  return {
    example: 'output',
    name: typedArgs.name,
  };
};
