/**
 * Represents a person in the phone book
 */
export interface Person {
  id: string;
  name: string;
  email: string;
  phone: string;
}

/**
 * Represents the database structure
 */
export interface Database {
  persons: Person[];
}
