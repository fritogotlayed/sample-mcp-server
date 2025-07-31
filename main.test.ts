import { assertEquals, assertExists } from '@std/assert';
import { DatabaseService } from './src/services/database.service.ts';
import { MCPServerService } from './src/mcp-core/mcp-server.service.ts';
import { PersonNotFoundError } from './src/domain/errors.ts';
import {
  InitializeResult,
  MCPRequest,
  ToolsCallResult,
  ToolsListResult,
} from './src/mcp-core/interfaces/mcp-protocol.ts';

// Mock database for testing
const TEST_DB_PATH = './test_database.json';

// Helper function to create a test database
function createTestDatabase() {
  const db = {
    persons: [
      {
        id: '1',
        name: 'Test User',
        email: 'test@example.com',
        phone: '+1-555-123-4567',
      },
    ],
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
Deno.test('DatabaseService - CRUD operations', () => {
  try {
    // Setup
    createTestDatabase();
    const dbService = new DatabaseService(TEST_DB_PATH);

    // Test getAllPersons
    const allPersons = dbService.getAllPersons();
    assertEquals(allPersons.length, 1);
    assertEquals(allPersons[0].name, 'Test User');

    // Test getPersonById
    const person = dbService.getPersonById('1');
    assertEquals(person.email, 'test@example.com');

    // Test addPerson
    const newPerson = dbService.addPerson({
      name: 'New User',
      email: 'new@example.com',
      phone: '+1-555-987-6543',
    });
    assertExists(newPerson.id);
    assertEquals(newPerson.name, 'New User');

    // Test updatePerson
    const updatedPerson = dbService.updatePerson(newPerson.id, {
      name: 'Updated User',
    });
    assertEquals(updatedPerson.name, 'Updated User');
    assertEquals(updatedPerson.email, 'new@example.com');

    // Test searchPersons
    const searchResults = dbService.searchPersons('updated');
    assertEquals(searchResults.length, 1);
    assertEquals(searchResults[0].name, 'Updated User');

    // Test deletePerson
    const deletedPerson = dbService.deletePerson(newPerson.id);
    assertEquals(deletedPerson.name, 'Updated User');

    // Verify deletion
    try {
      dbService.getPersonById(newPerson.id);
      throw new Error('Person should have been deleted');
    } catch (error) {
      assertEquals(error instanceof PersonNotFoundError, true);
    }
  } finally {
    // Cleanup
    cleanupTestDatabase();
  }
});

// Test MCPServerService
Deno.test('MCPServerService - Request handling', async () => {
  try {
    // Setup
    createTestDatabase();
    const serverService = new MCPServerService(
      'test-server',
      '1.0.0',
    );
    serverService.registerServices({
      databaseService: new DatabaseService(TEST_DB_PATH),
    });

    // Test initialize request
    const initRequest: MCPRequest = {
      jsonrpc: '2.0',
      id: '1',
      method: 'initialize',
    };
    const initResponse = await serverService.handleRequest(initRequest);
    assertEquals(initResponse.jsonrpc, '2.0');
    assertEquals(initResponse.id, '1');
    assertEquals((initResponse.result as InitializeResult)?.serverInfo.name, 'test-server');

    // Test tools/list request
    const listRequest: MCPRequest = {
      jsonrpc: '2.0',
      id: '2',
      method: 'tools/list',
    };
    const listResponse = await serverService.handleRequest(listRequest);
    assertEquals((listResponse.result as ToolsListResult)?.tools.length, 6);

    // Test tools/call request
    const callRequest: MCPRequest = {
      jsonrpc: '2.0',
      id: '3',
      method: 'tools/call',
      params: {
        name: 'list_persons',
        arguments: {},
      },
    };
    const callResponse = await serverService.handleRequest(callRequest);
    assertEquals((callResponse.result as ToolsCallResult)?.content[0].type, 'text');

    // Test error handling
    const errorRequest: MCPRequest = {
      jsonrpc: '2.0',
      id: '4',
      method: 'unknown_method',
    };
    const errorResponse = await serverService.handleRequest(errorRequest);
    assertEquals(errorResponse.error?.code, -32000);
    assertEquals(
      errorResponse.error?.message,
      'Unknown method: unknown_method',
    );
  } finally {
    // Cleanup
    cleanupTestDatabase();
  }
});
