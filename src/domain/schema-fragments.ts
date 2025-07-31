import { z } from 'zod';

// Common validation patterns to use in other validators
export const nameSchema = z.string().min(1, 'Name is required').regex(
  /^[a-zA-Z ]+$/,
  'Name must contain only letters and spaces',
);
export const emailSchema = z.email('Email must be a valid email address').min(1, 'Email is required');
export const phoneSchema = z.string().min(1, 'Phone is required').regex(
  /^[0-9\-\s()+]+$/,
  'Phone must contain only digits, spaces, hyphens, parentheses, and plus signs',
);
export const idSchema = z.string().min(1, 'ID is required');
export const querySchema = z.string().min(1, 'Search query is required');
