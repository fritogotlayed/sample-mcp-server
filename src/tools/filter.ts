import { z } from 'zod';
import { ToolDefinition } from '../mcp-core/ports/tool-registry.ts';
import { ToolHandlerCallback } from '../mcp-core/types.ts';
import { AppServices } from '../interfaces/app-services.ts';
import { handleZodValidationError } from '../domain/errors.ts';
import { zodToInputSchema } from '../domain/zod-to-input-schema.ts';

enum Operation {
  Equals = 'equals'
}

const FilterArgsSchema = z.object({
  data: z.array(z.unknown()).describe('A JSON array of objects that you wish to filter '),
  path: z.string().describe('A field name or dot notation to a field name that will be filtered upon. Ex "foo" for the root attribute of the object or "foo.bar" for the attribute bar of the object on attribute foo of the root object'),
  operation: z.enum(Operation).describe('The operation to apply upon the data at the specified path.'),
  value: z.union([z.string(), z.number(), z.boolean()]).optional().describe('The value to match against the value that resides in the path.'),
});

/**
 * Tool definition for adding a new person to the phone book
 */
export const tool: ToolDefinition = {
  name: 'filter',
  description: `Filters the input data set based on the provided criteria.

For example given the following request args: {
  "data":[{"foo":{"bar":1},"baz":1},{"foo":{"bar":2},"baz":2}],
  "path":"baz",
  "operation":"equals",
  "value":1
}
The response would be: [{"foo":{"bar":1},"baz":1}]

Given the example of the following request args: {
  "data":[{"foo":{"bar":1},"baz":1},{"foo":{"bar":2},"baz":2}],
  "path":"foo.bar",
  "operation":"equals",
  "value":2
}
The response would be: [{"foo":{"bar":2},"baz":2}]
`,
  inputSchema: zodToInputSchema(FilterArgsSchema),
};

/**
 * Handler for the filter tool
 * Applies the specified operation to each item in the provided data array at the given path
 * and returns the items that match. Currently supports the 'equals' operation.
 *
 * Args shape (validated by Zod):
 * - data: array of JSON objects to filter
 * - path: dot-notation path within each object (e.g., "foo" or "foo.bar")
 * - operation: currently only 'equals'
 * - value: string | number | boolean | undefined
 *
 * Notes:
 * - Dot-notation traversal returns undefined if any segment is missing or non-object.
 * - Value coercion: string "true"/"false" are treated as booleans; numeric strings (e.g., "1", "-2.3") are treated as numbers.
 * - Comparison aligns the target field value to the coerced value type for number/boolean when possible.
 * - If value is undefined, items are matched when the path value is also undefined.
 *
 * @param args The tool arguments matching FilterArgsSchema
 * @param _services The services available to the tool (unused)
 * @returns unknown[] The filtered results
 * @throws ValidationError if the input is invalid (Zod validation failure)
 */
export const handler: ToolHandlerCallback<AppServices> = (args, _services) => {
  try {
    const validatedArgs = FilterArgsSchema.parse(args);

    const { data, path, operation, value } = validatedArgs;

    // Helper to safely get a nested value using dot notation
    const getByPath = (obj: unknown, dotPath: string): unknown => {
      if (obj === null || obj === undefined) return undefined;
      const segments = dotPath.split('.');
      let current: any = obj;
      for (const seg of segments) {
        if (current == null || typeof current !== 'object') return undefined;
        if (!(seg in current)) return undefined;
        current = current[seg];
      }
      return current;
    };

    let results: unknown[] = [];

    // Coerce incoming value: "true"/"false" -> boolean, numeric strings -> number
    const coerce = (val: unknown): unknown => {
      if (typeof val !== 'string') return val;
      const trimmed = val.trim();
      const lower = trimmed.toLowerCase();
      if (lower === 'true') return true;
      if (lower === 'false') return false;
      if (trimmed !== '' && !isNaN(Number(trimmed))) {
        const num = Number(trimmed);
        if (!Number.isNaN(num)) return num;
      }
      return val;
    };
    const coercedValue = typeof value === 'undefined' ? undefined : coerce(value);

    // Helper to lightly coerce target value for symmetric comparison when needed
    const coerceForComparison = (val: unknown, targetType: string): unknown => {
      if (targetType === 'number') {
        if (typeof val === 'number') return val;
        if (typeof val === 'string' && val.trim() !== '' && !isNaN(Number(val))) return Number(val);
        return val;
      }
      if (targetType === 'boolean') {
        if (typeof val === 'boolean') return val;
        if (typeof val === 'string') {
          const l = val.trim().toLowerCase();
          if (l === 'true') return true;
          if (l === 'false') return false;
        }
        return val;
      }
      return val;
    };

    switch (operation) {
      case Operation.Equals: {
        results = data.filter((item) => {
          const vRaw = getByPath(item, path);
          // If input value is undefined, match only undefined
          if (typeof coercedValue === 'undefined') return typeof vRaw === 'undefined';

          // Try to loosely align types for comparison (number/boolean coercion from strings)
          const targetType = typeof coercedValue;
          const v = coerceForComparison(vRaw, targetType);

          if (targetType === 'string' && typeof v === 'string') return v === coercedValue;
          if (targetType === 'number' && typeof v === 'number') return v === coercedValue;
          if (targetType === 'boolean' && typeof v === 'boolean') return v === coercedValue;
          return false;
        });
        break;
      }
      default:
        // Future-proof: if unknown operation somehow passes type level, return empty
        results = [];
    }

    return results;
  } catch (error) {
    handleZodValidationError(error);
  }
};
