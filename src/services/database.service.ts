import { readFileSync, writeFileSync } from "node:fs";
import { Database, Person, DatabaseError, PersonNotFoundError } from "../models/types.ts";

/**
 * Service for handling database operations
 */
export class DatabaseService {
  private dbPath: string;

  /**
   * Creates a new DatabaseService
   * @param dbPath Path to the database file
   */
  constructor(dbPath: string = "./database.json") {
    this.dbPath = dbPath;
  }

  /**
   * Loads the database from the file
   * @returns The database
   * @throws DatabaseError if the database cannot be loaded
   */
  public loadDatabase(): Database {
    try {
      const data = readFileSync(this.dbPath, "utf-8");
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
      throw new DatabaseError(`Failed to save database: ${(error as Error).message}`);
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
    const person = db.persons.find(p => p.id === id);
    
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
  public addPerson(personData: Omit<Person, "id">): Person {
    const db = this.loadDatabase();
    
    // Generate a new ID
    const newId = String(Math.max(0, ...db.persons.map(p => parseInt(p.id))) + 1);
    
    const newPerson: Person = {
      id: newId,
      ...personData
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
  public updatePerson(id: string, personData: Partial<Omit<Person, "id">>): Person {
    const db = this.loadDatabase();
    const personIndex = db.persons.findIndex(p => p.id === id);
    
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
    const personIndex = db.persons.findIndex(p => p.id === id);
    
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
    const lowercaseQuery = query.toLowerCase();
    
    return db.persons.filter(p => 
      p.name.toLowerCase().includes(lowercaseQuery) ||
      p.email.toLowerCase().includes(lowercaseQuery) ||
      p.phone.includes(lowercaseQuery)
    );
  }
}