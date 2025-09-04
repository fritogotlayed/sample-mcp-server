import { assertEquals, assertRejects, assertThrows } from "@std/assert";
import { handler as filterHandler } from "./filter.ts";
import { ValidationError } from "../domain/errors.ts";

// Minimal fake services since handler ignores services
const services: any = {};

Deno.test("equals matches on root field with same type", () => {
  const data = [{ a: 1 }, { a: 2 }, { a: 1 }];
  const result = filterHandler({ data, path: "a", operation: "equals", value: 1 }, services);
  assertEquals(result, [{ a: 1 }, { a: 1 }]);
});

Deno.test("equals matches nested dot path", () => {
  const data = [{ foo: { bar: 1 } }, { foo: { bar: 2 } }];
  const result = filterHandler({ data, path: "foo.bar", operation: "equals", value: 2 }, services);
  assertEquals(result, [{ foo: { bar: 2 } }]);
});

Deno.test("equals coerces numeric string to number and target string to number", () => {
  const data = [{ a: "1" }, { a: "2" }, { a: 1 }];
  const result = filterHandler({ data, path: "a", operation: "equals", value: "1" }, services);
  // should match both "1" and 1
  assertEquals(result, [{ a: "1" }, { a: 1 }]);
});

Deno.test("equals coerces boolean string and target string to boolean", () => {
  const data = [{ a: true }, { a: false }, { a: "true" }, { a: "false" }, { a: "TRUE" }];
  const resultTrue = filterHandler({ data, path: "a", operation: "equals", value: "true" }, services);
  assertEquals(resultTrue, [{ a: true }, { a: "true" }, { a: "TRUE" }]);
  const resultFalse = filterHandler({ data, path: "a", operation: "equals", value: "false" }, services);
  assertEquals(resultFalse, [{ a: false }, { a: "false" }]);
});

Deno.test("startsWith matches strings only and is strict about types", () => {
  const data = [
    { s: "hello" },
    { s: "Hello" },
    { s: "hell" },
    { s: 123 },
    { s: true },
    { s: "world" },
  ];
  const result = filterHandler({ data, path: "s", operation: "startsWith", value: "hell" }, services);
  assertEquals(result, [{ s: "hello" }, { s: "hell" }]);
});

Deno.test("startsWith ignores non-string value (number/boolean) and returns empty", () => {
  const data = [{ s: "123" }, { s: "1a" }];
  const r1 = filterHandler({ data, path: "s", operation: "startsWith", value: 1 }, services);
  assertEquals(r1, []);
  const r2 = filterHandler({ data, path: "s", operation: "startsWith", value: true }, services);
  assertEquals(r2, []);
});

Deno.test("endsWith matches strings only and is strict about types", () => {
  const data = [
    { s: "hello" },
    { s: "jello" },
    { s: "LO" },
    { s: 10 },
  ];
  const result = filterHandler({ data, path: "s", operation: "endsWith", value: "lo" }, services);
  assertEquals(result, [{ s: "hello" }, { s: "jello" }]);
});

Deno.test("validation error: missing required fields or wrong types", () => {
  assertThrows(
    () => filterHandler({ path: "a", operation: "equals", value: 1 } as any, services),
    ValidationError,
  );
  assertThrows(
    () => filterHandler({ data: [], path: "a", operation: "badop" } as any, services),
    ValidationError,
  );
  assertThrows(
    () => filterHandler({ data: {}, path: "a", operation: "equals" } as any, services),
    ValidationError,
  );
});
