import { Tool, ToolError } from "../models/types.ts";
import { DatabaseService } from "./database.service.ts";

/**
 * Service for handling tool operations
 */
export class ToolsService {
  private databaseService: DatabaseService;

  /**
   * Creates a new ToolsService
   * @param databaseService The database service to use
   */
  constructor(databaseService: DatabaseService) {
    this.databaseService = databaseService;
  }

  /**
   * Gets all available tools
   * @returns Array of tools
   */
  public getTools(): Tool[] {
    return [
      {
        name: "list_persons",
        description: "List all persons in the phone book",
        inputSchema: {
          type: "object",
          properties: {}
        }
      },
      {
        name: "get_person",
        description: "Get a specific person by ID",
        inputSchema: {
          type: "object",
          properties: {
            id: { type: "string", description: "Person ID" }
          },
          required: ["id"]
        }
      },
      {
        name: "add_person",
        description: "Add a new person to the phone book",
        inputSchema: {
          type: "object",
          properties: {
            name: { type: "string", description: "Person's name" },
            email: { type: "string", description: "Person's email" },
            phone: { type: "string", description: "Person's phone number" }
          },
          required: ["name", "email", "phone"]
        }
      },
      {
        name: "update_person",
        description: "Update an existing person",
        inputSchema: {
          type: "object",
          properties: {
            id: { type: "string", description: "Person ID" },
            name: { type: "string", description: "Person's name" },
            email: { type: "string", description: "Person's email" },
            phone: { type: "string", description: "Person's phone number" }
          },
          required: ["id"]
        }
      },
      {
        name: "delete_person",
        description: "Delete a person from the phone book",
        inputSchema: {
          type: "object",
          properties: {
            id: { type: "string", description: "Person ID" }
          },
          required: ["id"]
        }
      },
      {
        name: "search_persons",
        description: "Search persons by name, email, or phone",
        inputSchema: {
          type: "object",
          properties: {
            query: { type: "string", description: "Search query" }
          },
          required: ["query"]
        }
      }
    ];
  }

  /**
   * Handles a tool call
   * @param name The tool name
   * @param args The tool arguments
   * @returns The result of the tool call
   * @throws ToolError if the tool is unknown
   */
  public handleToolCall(name: string, args: any): any {
    try {
      switch (name) {
        case "list_persons":
          return { persons: this.databaseService.getAllPersons() };

        case "get_person":
          return { person: this.databaseService.getPersonById(args.id) };

        case "add_person":
          return { 
            person: this.databaseService.addPerson({
              name: args.name,
              email: args.email,
              phone: args.phone
            }) 
          };

        case "update_person":
          return { 
            person: this.databaseService.updatePerson(args.id, {
              name: args.name,
              email: args.email,
              phone: args.phone
            }) 
          };

        case "delete_person":
          return { person: this.databaseService.deletePerson(args.id) };

        case "search_persons":
          return { persons: this.databaseService.searchPersons(args.query) };

        default:
          throw new ToolError(`Unknown tool: ${name}`);
      }
    } catch (error) {
      const err = error as Error;
      // Re-throw ToolError and PersonNotFoundError as is
      if (err.name === "ToolError" || err.name === "PersonNotFoundError") {
        throw error;
      }
      
      // Wrap other errors
      throw new ToolError(`Error executing tool ${name}: ${err.message}`);
    }
  }
}