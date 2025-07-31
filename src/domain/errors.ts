import { ZodError } from 'zod';

/**
 * Custom error class for invalid tool calls
 */
export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ToolError';
  }
}

/**
 * Custom error class for database operations
 */
export class DatabaseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DatabaseError';
  }
}

/**
 * Custom error class for when a person is not found
 */
export class PersonNotFoundError extends Error {
  constructor(id: string) {
    super(`Person with ID ${id} not found`);
    this.name = 'PersonNotFoundError';
  }
}

/**
 * Utility function to handle ZodError with proper typing
 * @param error The error to handle
 * @throws ValidationError with formatted message from ZodError issues
 */
export function handleZodValidationError(error: unknown): never {
  if (error instanceof ZodError) {
    const message = error.issues.map((issue) => issue.message).join('; ');
    throw new ValidationError(message);
  }
  throw error;
}
