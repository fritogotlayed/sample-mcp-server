import { assertEquals, assertExists } from "@std/assert";
import { DatabaseService } from "./src/services/database.service.ts";
import { ToolsService } from "./src/services/tools.service.ts";
import { MCPServerService } from "./src/services/mcp-server.service.ts";
import {MCPRequest, PersonNotFoundError} from "./src/models/types.ts";

// Mock database for testing
const TEST_DB_PATH = "./test_database.json";

// Helper function to create a test database
function createTestDatabase() {
  const db = {
    persons: [
      {
        id: "1",
        name: "Test User",
        email: "test@example.com",
        phone: "+1-555-123-4567"
      }
    ]
  };
  
  Deno.writeTextFileSync(TEST_DB_PATH, JSON.stringify(db, null, 2));
  return db;
}

// Helper function to clean up test database
function cleanupTestDatabase() {
  try {
    Deno.removeSync(TEST_DB_PATH);
  } catch {
    // Ignore if file doesn't exist
  }
}

// Test DatabaseService
Deno.test("DatabaseService - CRUD operations", () => {
  try {
    // Setup
    createTestDatabase();
    const dbService = new DatabaseService(TEST_DB_PATH);
    
    // Test getAllPersons
    const allPersons = dbService.getAllPersons();
    assertEquals(allPersons.length, 1);
    assertEquals(allPersons[0].name, "Test User");
    
    // Test getPersonById
    const person = dbService.getPersonById("1");
    assertEquals(person.email, "test@example.com");
    
    // Test addPerson
    const newPerson = dbService.addPerson({
      name: "New User",
      email: "new@example.com",
      phone: "+1-555-987-6543"
    });
    assertExists(newPerson.id);
    assertEquals(newPerson.name, "New User");
    
    // Test updatePerson
    const updatedPerson = dbService.updatePerson(newPerson.id, {
      name: "Updated User"
    });
    assertEquals(updatedPerson.name, "Updated User");
    assertEquals(updatedPerson.email, "new@example.com");
    
    // Test searchPersons
    const searchResults = dbService.searchPersons("updated");
    assertEquals(searchResults.length, 1);
    assertEquals(searchResults[0].name, "Updated User");
    
    // Test deletePerson
    const deletedPerson = dbService.deletePerson(newPerson.id);
    assertEquals(deletedPerson.name, "Updated User");
    
    // Verify deletion
    try {
      dbService.getPersonById(newPerson.id);
      throw new Error("Person should have been deleted");
    } catch (error) {
      assertEquals(error instanceof PersonNotFoundError, true);
    }
  } finally {
    // Cleanup
    cleanupTestDatabase();
  }
});

// Test ToolsService
Deno.test("ToolsService - Tool operations", () => {
  try {
    // Setup
    createTestDatabase();
    const dbService = new DatabaseService(TEST_DB_PATH);
    const toolsService = new ToolsService(dbService);
    
    // Test getTools
    const tools = toolsService.getTools();
    assertEquals(tools.length, 6);
    assertEquals(tools[0].name, "list_persons");
    
    // Test handleToolCall - list_persons
    const listResult = toolsService.handleToolCall("list_persons", {});
    assertEquals(listResult.persons.length, 1);
    
    // Test handleToolCall - get_person
    const getResult = toolsService.handleToolCall("get_person", { id: "1" });
    assertEquals(getResult.person.name, "Test User");
    
    // Test handleToolCall - add_person
    const addResult = toolsService.handleToolCall("add_person", {
      name: "Tool User",
      email: "tool@example.com",
      phone: "+1-555-111-2222"
    });
    assertExists(addResult.person.id);
    assertEquals(addResult.person.name, "Tool User");
    
    // Test handleToolCall - search_persons
    const searchResult = toolsService.handleToolCall("search_persons", { query: "tool" });
    assertEquals(searchResult.persons.length, 1);
    assertEquals(searchResult.persons[0].email, "tool@example.com");
  } finally {
    // Cleanup
    cleanupTestDatabase();
  }
});

// Test MCPServerService
Deno.test("MCPServerService - Request handling", () => {
  try {
    // Setup
    createTestDatabase();
    const dbService = new DatabaseService(TEST_DB_PATH);
    const toolsService = new ToolsService(dbService);
    const serverService = new MCPServerService(toolsService, "test-server", "1.0.0");
    
    // Test initialize request
    const initRequest: MCPRequest = {
      jsonrpc: "2.0",
      id: "1",
      method: "initialize"
    };
    const initResponse = serverService.handleRequest(initRequest);
    assertEquals(initResponse.jsonrpc, "2.0");
    assertEquals(initResponse.id, "1");
    assertEquals(initResponse.result?.serverInfo.name, "test-server");
    
    // Test tools/list request
    const listRequest: MCPRequest = {
      jsonrpc: "2.0",
      id: "2",
      method: "tools/list"
    };
    const listResponse = serverService.handleRequest(listRequest);
    assertEquals(listResponse.result?.tools.length, 6);
    
    // Test tools/call request
    const callRequest: MCPRequest = {
      jsonrpc: "2.0",
      id: "3",
      method: "tools/call",
      params: {
        name: "list_persons",
        arguments: {}
      }
    };
    const callResponse = serverService.handleRequest(callRequest);
    assertEquals(callResponse.result?.content[0].type, "text");
    
    // Test error handling
    const errorRequest: MCPRequest = {
      jsonrpc: "2.0",
      id: "4",
      method: "unknown_method"
    };
    const errorResponse = serverService.handleRequest(errorRequest);
    assertEquals(errorResponse.error?.code, -32000);
    assertEquals(errorResponse.error?.message, "Unknown method: unknown_method");
  } finally {
    // Cleanup
    cleanupTestDatabase();
  }
});