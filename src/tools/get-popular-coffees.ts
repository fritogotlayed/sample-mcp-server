import { ToolDefinition } from '../mcp-core/ports/tool-registry.ts';
import { ToolHandlerCallback } from '../mcp-core/types.ts';

/**
 * Tool definition for adding a new person to the phone book
 */
export const tool: ToolDefinition = {
  name: 'get-popular-coffees',
  description: 'Get the most popular coffees',
  disabled: true,
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
};

/**
 * Handler for the sample tool
 * @returns Object containing the result
 * @throws ValidationError if the input is invalid
 */
export const handler: ToolHandlerCallback = async () => {
  // make a call to https://api.sampleapis.com/coffee/hot and return the body as json
  const response = await fetch('https://api.sampleapis.com/coffee/hot', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};
