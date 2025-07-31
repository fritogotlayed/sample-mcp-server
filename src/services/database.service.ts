import { readFileSync, writeFileSync } from 'node:fs';
import { Database, Person } from '../domain/types.ts';
import { DatabaseError, PersonNotFoundError } from '../domain/errors.ts';

/**
 * Service for handling database operations
 */
export class DatabaseService {
  private dbPath: string;

  /**
   * Creates a new DatabaseService
   * @param dbPath Path to the database file
   */
  constructor(dbPath: string = './database.json') {
    this.dbPath = dbPath;
  }

  /**
   * Loads the database from the file
   * @returns The database
   * @throws DatabaseError if the database cannot be loaded
   */
  public loadDatabase(): Database {
    try {
      const data = readFileSync(this.dbPath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      if (error instanceof SyntaxError) {
        throw new DatabaseError(`Invalid database format: ${error.message}`);
      }
      // If the file doesn't exist, return an empty database
      return { persons: [] };
    }
  }

  /**
   * Saves the database to the file
   * @param db The database to save
   * @throws DatabaseError if the database cannot be saved
   */
  public saveDatabase(db: Database): void {
    try {
      writeFileSync(this.dbPath, JSON.stringify(db, null, 2));
    } catch (error) {
      throw new DatabaseError(
        `Failed to save database: ${(error as Error).message}`,
      );
    }
  }

  /**
   * Gets all persons from the database
   * @returns Array of persons
   */
  public getAllPersons(): Person[] {
    const db = this.loadDatabase();
    return db.persons;
  }

  /**
   * Gets a person by ID
   * @param id The person ID
   * @returns The person
   * @throws PersonNotFoundError if the person is not found
   */
  public getPersonById(id: string): Person {
    const db = this.loadDatabase();
    const person = db.persons.find((p) => p.id === id);

    if (!person) {
      throw new PersonNotFoundError(id);
    }

    return person;
  }

  /**
   * Adds a new person to the database
   * @param personData The person data (without ID)
   * @returns The created person
   */
  public addPerson(personData: Omit<Person, 'id'>): Person {
    const db = this.loadDatabase();

    // Generate a new ID
    const newId = String(
      Math.max(0, ...db.persons.map((p) => parseInt(p.id))) + 1,
    );

    const newPerson: Person = {
      id: newId,
      ...personData,
    };

    db.persons.push(newPerson);
    this.saveDatabase(db);

    return newPerson;
  }

  /**
   * Updates a person in the database
   * @param id The person ID
   * @param personData The person data to update
   * @returns The updated person
   * @throws PersonNotFoundError if the person is not found
   */
  public updatePerson(
    id: string,
    personData: Partial<Omit<Person, 'id'>>,
  ): Person {
    const db = this.loadDatabase();
    const personIndex = db.persons.findIndex((p) => p.id === id);

    if (personIndex === -1) {
      throw new PersonNotFoundError(id);
    }

    const updatedPerson = { ...db.persons[personIndex], ...personData };
    db.persons[personIndex] = updatedPerson;

    this.saveDatabase(db);

    return updatedPerson;
  }

  /**
   * Deletes a person from the database
   * @param id The person ID
   * @returns The deleted person
   * @throws PersonNotFoundError if the person is not found
   */
  public deletePerson(id: string): Person {
    const db = this.loadDatabase();
    const personIndex = db.persons.findIndex((p) => p.id === id);

    if (personIndex === -1) {
      throw new PersonNotFoundError(id);
    }

    const deletedPerson = db.persons.splice(personIndex, 1)[0];
    this.saveDatabase(db);

    return deletedPerson;
  }

  /**
   * Searches for persons by name, email, or phone
   * @param query The search query
   * @returns Array of matching persons
   */
  public searchPersons(query: string): Person[] {
    const db = this.loadDatabase();

    // Split by AND operator
    const conditions = query.split(/\s+AND\s+/i);

    let filteredPersons = db.persons;

    for (const condition of conditions) {
      // Check if condition has field=value format
      if (condition.includes('=')) {
        const [field, value] = condition.split('=').map((s) => s.trim());
        const normalizedValue = value.toLowerCase();

        filteredPersons = filteredPersons.filter((person) => {
          if (field === 'name') {
            return this.matchWithWildcard(
              person.name.toLowerCase(),
              normalizedValue,
            );
          } else if (field === 'email') {
            return this.matchWithWildcard(
              person.email.toLowerCase(),
              normalizedValue,
            );
          } else if (field === 'phone') {
            // For phone, we need to check if the phone number contains the exact value
            // or matches the wildcard pattern
            if (value === '555') {
              return person.phone.includes('555');
            }
            return this.matchWithWildcard(
              person.phone.toLowerCase(),
              normalizedValue,
            );
          }
          return false;
        });
      } else {
        // Simple search without field specification
        const normalizedValue = condition.toLowerCase().trim();

        filteredPersons = filteredPersons.filter((person) =>
          this.matchWithWildcard(person.name.toLowerCase(), normalizedValue) ||
          this.matchWithWildcard(person.email.toLowerCase(), normalizedValue) ||
          this.matchWithWildcard(person.phone.toLowerCase(), normalizedValue)
        );
      }
    }

    return filteredPersons;
  }

  /**
   * Matches a string against a pattern that may contain wildcards
   * @param text The text to match
   * @param pattern The pattern that may contain wildcards
   * @returns True if the text matches the pattern
   */
  private matchWithWildcard(text: string, pattern: string): boolean {
    if (!pattern.includes('*')) {
      return text.includes(pattern);
    }

    // For simple patterns, use direct string operations
    if (pattern === '*') {
      // Match anything
      return true;
    } else if (
      pattern.startsWith('*') && pattern.endsWith('*') &&
      pattern.indexOf('*', 1) === pattern.length - 1
    ) {
      // *middle* - check if text contains the middle part
      const middle = pattern.slice(1, -1);
      return text.includes(middle);
    } else if (pattern.startsWith('*') && pattern.indexOf('*', 1) === -1) {
      // *suffix - check if text ends with the suffix
      const suffix = pattern.slice(1);
      return text.endsWith(suffix);
    } else if (
      pattern.endsWith('*') && pattern.indexOf('*') === pattern.length - 1
    ) {
      // prefix* - check if text starts with the prefix
      const prefix = pattern.slice(0, -1);
      return text.startsWith(prefix);
    }

    // For patterns like "j*n", we need to check if the text contains the parts in order
    if (pattern.split('*').length === 2) {
      const [prefix, suffix] = pattern.split('*');
      return text.includes(prefix) && text.includes(suffix) &&
        text.indexOf(prefix) < text.indexOf(suffix);
    }

    // For more complex patterns, convert to regex
    // Escape special regex characters except for *
    const regexPattern = pattern
      .replace(/[.+?^${}()|[\]\\]/g, '\\$&') // Escape special regex chars
      .replace(/\*/g, '.*'); // Replace * with .*

    const regex = new RegExp(regexPattern);
    return regex.test(text);
  }
}
