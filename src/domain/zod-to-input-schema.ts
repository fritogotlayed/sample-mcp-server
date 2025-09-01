import { z } from 'zod';
import type { InputOutputSchema, ToolInputProperties } from '../mcp-core/ports/tool-registry.ts';

// Internal helper types to avoid explicit `any` when accessing Zod internals
// These reflect only what we need from Zod's private `_def` structure.
type ZodDefBase = {
  type?: string;
  typeName?: string;
  innerType?: z.ZodTypeAny;
  shape?: unknown;
};

type HasDef = { _def?: ZodDefBase };

function getDef(s: z.ZodTypeAny): ZodDefBase | undefined {
  return (s as unknown as HasDef)._def;
}

function getTypeName(s: z.ZodTypeAny): string | undefined {
  const def = getDef(s);
  return def?.type ?? def?.typeName;
}

function getInnerType(s: z.ZodTypeAny): z.ZodTypeAny | undefined {
  return getDef(s)?.innerType;
}

function getEnumValues(schema: z.ZodTypeAny): string[] | undefined {
  const def = getDef(schema) as any;
  
  // Zod enum stores values in _def.entries object
  if (def?.entries && typeof def.entries === 'object') {
    return Object.values(def.entries);
  }
  
  // Fallback: try _def.values array for other Zod versions
  if (def?.values && Array.isArray(def.values)) {
    return def.values;
  }
  
  // Try alternative locations where enum values might be stored
  if (def?.options && Array.isArray(def.options)) {
    return def.options;
  }
  
  return undefined;
}

// Minimal converter from Zod object schema to MCP InputOutputSchema
// Supports the subset we use in this project: objects with string fields, some optional
// This is based on the npm library zod-to-json-schema. The library was not used though
// because tools like mcp-inspector failed to parse their output.
export function zodToInputSchema(schema: z.ZodTypeAny): InputOutputSchema {
  // Ensure we have an object schema
  const obj = schema as z.ZodObject<z.ZodRawShape>;
  const def = (obj as unknown as HasDef)._def;

  // Zod v3 uses _def.shape() (function), Zod v4 exposes _def.shape (object)
  let shape: Record<string, unknown> | undefined;
  const rawShape = def?.shape;
  if (typeof rawShape === 'function') {
    shape = (rawShape as () => Record<string, unknown>)();
  } else if (rawShape && typeof rawShape === 'object') {
    shape = rawShape as Record<string, unknown>;
  }

  if (!shape || typeof shape !== 'object') {
    throw new Error('zodToInputSchema expects a ZodObject schema');
  }

  const properties: ToolInputProperties = {};
  const required: string[] = [];

  for (const [key, fieldSchema] of Object.entries(shape)) {
    const base = unwrap(fieldSchema as z.ZodTypeAny);

    // Currently support only strings; fall back to "string" if unknown
    const type = inferType(base);
    const propertyDef: { type: string; enum?: string[] } = { type: type ?? 'string' };
    
    // Handle enum types
    if (type === 'enum') {
      const enumValues = getEnumValues(base);
      if (enumValues && enumValues.length > 0) {
        propertyDef.enum = enumValues;
      }
    }
    
    properties[key] = propertyDef;

    // Required if field is not optional
    if (!isOptional(fieldSchema as z.ZodTypeAny)) {
      required.push(key);
    }
  }

  const inputSchema: InputOutputSchema = {
    type: 'object',
    properties,
  };
  if (required.length > 0) inputSchema.required = required;
  return inputSchema;
}

function unwrap(schema: z.ZodTypeAny): z.ZodTypeAny {
  let current: z.ZodTypeAny = schema;
  // Unwrap optional and default wrappers
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const typeName = getTypeName(current);
    if (typeName === 'optional' || typeName === 'default' || 
        typeName === 'ZodOptional' || typeName === 'ZodDefault') {
      const inner = getInnerType(current);
      if (!inner) break;
      current = inner;
      continue;
    }
    break;
  }
  return current;
}

function isOptional(schema: z.ZodTypeAny): boolean {
  const typeName = getTypeName(schema);
  if (typeName === 'optional') return true;
  if (typeName === 'default') return true; // default values are not required from user
  // Support legacy ZodTypeName format for backward compatibility
  if (typeName === 'ZodOptional') return true;
  if (typeName === 'ZodDefault') return true;
  return false;
}

function inferType(schema: z.ZodTypeAny): string | null {
  const typeName = getTypeName(schema);
  switch (typeName) {
    case 'string':
      return 'string';
    case 'number':
      return 'number';
    case 'boolean':
      return 'boolean';
    case 'array':
      return 'array';
    case 'object':
      return 'object';
    case 'enum':
      return 'enum';
    // Support legacy ZodTypeName format for backward compatibility
    case 'ZodString':
      return 'string';
    case 'ZodNumber':
      return 'number';
    case 'ZodBoolean':
      return 'boolean';
    case 'ZodArray':
      return 'array';
    case 'ZodObject':
      return 'object';
    case 'ZodEnum':
      return 'enum';
    default:
      return null;
  }
}
