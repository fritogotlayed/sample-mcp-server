import { assertEquals, assertThrows } from '@std/assert';
import { z } from 'zod';
import { zodToInputSchema } from './zod-to-input-schema.ts';
import type { InputOutputSchema } from '../mcp-core/ports/tool-registry.ts';

Deno.test('zodToInputSchema - basic string schema', () => {
  const schema = z.object({
    name: z.string(),
  });

  const result = zodToInputSchema(schema);

  const expected: InputOutputSchema = {
    type: 'object',
    properties: {
      name: { type: 'string' },
    },
    required: ['name'],
  };

  assertEquals(result, expected);
});

Deno.test('zodToInputSchema - basic enum schema', () => {
  enum Mode {
    Mode1 = 'mode1',
    Mode2 = 'mode2',
  }
  const schema = z.object({
    mode: z.enum(Mode),
  });

  const result = zodToInputSchema(schema);

  const expected: InputOutputSchema = {
    type: 'object',
    properties: {
      mode: {
        type: 'enum',
        enum: ['mode1', 'mode2'],
      },
    },
    required: ['mode'],
  };

  assertEquals(result, expected);
});

Deno.test('zodToInputSchema - multiple field types', () => {
  const schema = z.object({
    name: z.string(),
    age: z.number(),
    isActive: z.boolean(),
    tags: z.array(z.string()),
    metadata: z.object({ key: z.string() }),
  });

  const result = zodToInputSchema(schema);

  const expected: InputOutputSchema = {
    type: 'object',
    properties: {
      name: { type: 'string' },
      age: { type: 'number' },
      isActive: { type: 'boolean' },
      tags: { type: 'array' },
      metadata: { type: 'object' },
    },
    required: ['name', 'age', 'isActive', 'tags', 'metadata'],
  };

  assertEquals(result, expected);
});

Deno.test('zodToInputSchema - optional fields', () => {
  const schema = z.object({
    name: z.string(),
    email: z.string().optional(),
    phone: z.string().optional(),
  });

  const result = zodToInputSchema(schema);

  const expected: InputOutputSchema = {
    type: 'object',
    properties: {
      name: { type: 'string' },
      email: { type: 'string' },
      phone: { type: 'string' },
    },
    required: ['name'],
  };

  assertEquals(result, expected);
});

Deno.test('zodToInputSchema - default values', () => {
  const schema = z.object({
    name: z.string(),
    count: z.number().default(0),
    enabled: z.boolean().default(true),
  });

  const result = zodToInputSchema(schema);

  const expected: InputOutputSchema = {
    type: 'object',
    properties: {
      name: { type: 'string' },
      count: { type: 'number' },
      enabled: { type: 'boolean' },
    },
    required: ['name'],
  };

  assertEquals(result, expected);
});

Deno.test('zodToInputSchema - nested optional and default', () => {
  const schema = z.object({
    name: z.string(),
    email: z.string().default('test@example.com').optional(),
    age: z.number().optional().default(18),
  });

  const result = zodToInputSchema(schema);

  // email: default().optional() - outermost is optional, so it's optional
  // age: optional().default() - outermost is default, so it's optional (not required from user)
  const expected: InputOutputSchema = {
    type: 'object',
    properties: {
      name: { type: 'string' },
      email: { type: 'string' },
      age: { type: 'number' },
    },
    required: ['name'], // only name is required; email and age both have defaults/optional
  };

  assertEquals(result, expected);
});

Deno.test('zodToInputSchema - all optional fields', () => {
  const schema = z.object({
    email: z.string().optional(),
    phone: z.string().optional(),
  });

  const result = zodToInputSchema(schema);

  const expected: InputOutputSchema = {
    type: 'object',
    properties: {
      email: { type: 'string' },
      phone: { type: 'string' },
    },
  };

  assertEquals(result, expected);
});

Deno.test('zodToInputSchema - unknown type fallback', () => {
  const schema = z.object({
    name: z.string(),
    // Using a type that's not explicitly handled
    custom: z.any(),
  });

  const result = zodToInputSchema(schema);

  const expected: InputOutputSchema = {
    type: 'object',
    properties: {
      name: { type: 'string' },
      custom: { type: 'string' }, // Falls back to string
    },
    required: ['name', 'custom'],
  };

  assertEquals(result, expected);
});

Deno.test('zodToInputSchema - empty object', () => {
  const schema = z.object({});

  const result = zodToInputSchema(schema);

  const expected: InputOutputSchema = {
    type: 'object',
    properties: {},
  };

  assertEquals(result, expected);
});

Deno.test('zodToInputSchema - throws on non-object schema', () => {
  const stringSchema = z.string();

  assertThrows(
    () => zodToInputSchema(stringSchema),
    Error,
    'zodToInputSchema expects a ZodObject schema',
  );
});

Deno.test('zodToInputSchema - throws on array schema', () => {
  const arraySchema = z.array(z.string());

  assertThrows(
    () => zodToInputSchema(arraySchema),
    Error,
    'zodToInputSchema expects a ZodObject schema',
  );
});

Deno.test('zodToInputSchema - complex nested optional chains', () => {
  const schema = z.object({
    name: z.string(),
    profile: z.object({
      email: z.string(),
    }).optional(),
    settings: z.object({
      theme: z.string().default('dark'),
    }).default({ theme: 'dark' }),
  });

  const result = zodToInputSchema(schema);

  const expected: InputOutputSchema = {
    type: 'object',
    properties: {
      name: { type: 'string' },
      profile: { type: 'object' },
      settings: { type: 'object' },
    },
    required: ['name'], // only name is required; profile is optional, settings has default
  };

  assertEquals(result, expected);
});

// Test helper functions directly (these are not exported, so we'll test through the main function)
Deno.test('zodToInputSchema - unwrap functionality through main function', () => {
  const schema = z.object({
    // Test multiple layers of wrapping
    doubleNested: z.string().optional().default('test').optional(),
    simpleOptional: z.number().optional(),
    simpleDefault: z.boolean().default(false),
  });

  const result = zodToInputSchema(schema);

  const expected: InputOutputSchema = {
    type: 'object',
    properties: {
      doubleNested: { type: 'string' },
      simpleOptional: { type: 'number' },
      simpleDefault: { type: 'boolean' },
    },
    // No fields are required: doubleNested and simpleOptional are optional, simpleDefault has default
  };

  assertEquals(result, expected);
});

Deno.test('zodToInputSchema - type inference edge cases', () => {
  const schema = z.object({
    stringField: z.string(),
    numberField: z.number(),
    booleanField: z.boolean(),
    arrayField: z.array(z.string()),
    objectField: z.object({ nested: z.string() }),
    // Test that null inference returns string fallback
    literalField: z.literal('test'),
  });

  const result = zodToInputSchema(schema);

  const expected: InputOutputSchema = {
    type: 'object',
    properties: {
      stringField: { type: 'string' },
      numberField: { type: 'number' },
      booleanField: { type: 'boolean' },
      arrayField: { type: 'array' },
      objectField: { type: 'object' },
      literalField: { type: 'string' }, // Falls back to string
    },
    required: ['stringField', 'numberField', 'booleanField', 'arrayField', 'objectField', 'literalField'],
  };

  assertEquals(result, expected);
});
