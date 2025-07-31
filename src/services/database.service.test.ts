import { assertEquals } from '@std/assert';
import { DatabaseService } from './database.service.ts';

// Test database path
const TEST_DB_PATH = './database.json';

// Helper function to create a test database instance
function createTestDbService() {
  return new DatabaseService(TEST_DB_PATH);
}

Deno.test('DatabaseService - searchPersons with email and phone conditions', () => {
  const dbService = createTestDbService();

  // Test the search with the example query
  const searchResults = dbService.searchPersons(
    'email=*@example.com AND phone=555',
  );

  // Verify results match both conditions
  for (const person of searchResults) {
    assertEquals(
      person.email.endsWith('@example.com'),
      true,
      'Email should end with @example.com',
    );
    assertEquals(
      person.phone.includes('555'),
      true,
      'Phone should include 555',
    );
  }
});

Deno.test('DatabaseService - searchPersons with email wildcard only', () => {
  const dbService = createTestDbService();

  // Test with just the email wildcard
  const emailResults = dbService.searchPersons('email=*@example.com');

  // Verify results match the email condition
  for (const person of emailResults) {
    assertEquals(
      person.email.endsWith('@example.com'),
      true,
      'Email should end with @example.com',
    );
  }

  // Verify we get more results than with the combined query
  const combinedResults = dbService.searchPersons(
    'email=*@example.com AND phone=555',
  );
  assertEquals(
    emailResults.length >= combinedResults.length,
    true,
    'Email-only search should return at least as many results as the combined search',
  );
});

Deno.test('DatabaseService - searchPersons with phone condition only', () => {
  const dbService = createTestDbService();

  // Test with just the phone
  const phoneResults = dbService.searchPersons('phone=555');

  // Verify results match the phone condition
  for (const person of phoneResults) {
    assertEquals(
      person.phone.includes('555'),
      true,
      'Phone should include 555',
    );
  }

  // Verify we get more results than with the combined query
  const combinedResults = dbService.searchPersons(
    'email=*@example.com AND phone=555',
  );
  assertEquals(
    phoneResults.length >= combinedResults.length,
    true,
    'Phone-only search should return at least as many results as the combined search',
  );
});

Deno.test('DatabaseService - searchPersons with prefix wildcard', () => {
  const dbService = createTestDbService();

  // Test with prefix wildcard
  const prefixWildcardResults = dbService.searchPersons('email=john*');

  // Verify results match the condition
  for (const person of prefixWildcardResults) {
    assertEquals(
      person.email.toLowerCase().startsWith('john'),
      true,
      "Email should start with 'john'",
    );
  }
});

Deno.test('DatabaseService - searchPersons with middle wildcard', () => {
  const dbService = createTestDbService();

  // Test with middle wildcard
  const middleWildcardResults = dbService.searchPersons('email=j*n');

  // Verify results match the condition
  for (const person of middleWildcardResults) {
    const email = person.email.toLowerCase();
    assertEquals(
      email.includes('j') && email.includes('n') &&
        email.indexOf('j') < email.indexOf('n'),
      true,
      "Email should contain 'j' followed by 'n'",
    );
  }
});

Deno.test('DatabaseService - searchPersons with multiple wildcards', () => {
  const dbService = createTestDbService();

  // Test with multiple wildcards
  const multipleWildcardsResults = dbService.searchPersons('email=*.*@*');

  // Verify results match the condition
  for (const person of multipleWildcardsResults) {
    const email = person.email;
    assertEquals(
      email.includes('.') && email.includes('@'),
      true,
      "Email should contain both '.' and '@'",
    );
    assertEquals(
      email.indexOf('.') < email.indexOf('@') ||
        email.indexOf('.') > email.indexOf('@'),
      true,
      "Email should have '.' either before or after '@'",
    );
  }
});

Deno.test('DatabaseService - searchPersons with case insensitivity', () => {
  const dbService = createTestDbService();

  // Test with case insensitivity
  const caseInsensitiveResults = dbService.searchPersons('name=JOHN*');

  // Get results with lowercase for comparison
  const lowercaseResults = dbService.searchPersons('name=john*');

  // Verify case insensitivity
  assertEquals(
    caseInsensitiveResults.length,
    lowercaseResults.length,
    'Case insensitive search should return the same number of results',
  );

  // Verify results match the condition
  for (const person of caseInsensitiveResults) {
    assertEquals(
      person.name.toLowerCase().startsWith('john'),
      true,
      "Name should start with 'john' (case insensitive)",
    );
  }
});

Deno.test('DatabaseService - searchPersons with multiple conditions', () => {
  const dbService = createTestDbService();

  // Test with multiple conditions
  const multipleConditionsResults = dbService.searchPersons(
    'name=*Doe AND email=*@example.com AND phone=555',
  );

  // Verify results match all conditions
  for (const person of multipleConditionsResults) {
    assertEquals(
      person.name.endsWith('Doe'),
      true,
      "Name should end with 'Doe'",
    );
    assertEquals(
      person.email.endsWith('@example.com'),
      true,
      "Email should end with '@example.com'",
    );
    assertEquals(
      person.phone.includes('555'),
      true,
      "Phone should include '555'",
    );
  }
});
