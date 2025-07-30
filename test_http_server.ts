#!/usr/bin/env -S deno run --allow-net

/**
 * Simple test script to verify the HTTP server implementation
 * 
 * Usage:
 *   deno run --allow-net test_http_server.ts [port]
 * 
 * The port defaults to 8000 if not specified.
 */

// Parse command line arguments
const port = Deno.args[0] ? parseInt(Deno.args[0]) : 8000;

// Base URL for the HTTP server
const baseUrl = `http://localhost:${port}`;

/**
 * Sends an MCP request to the HTTP server
 * @param method The MCP method to call
 * @param params The parameters for the method
 * @returns The MCP response
 */
async function sendRequest(method: string, params: any = {}): Promise<any> {
  const request = {
    jsonrpc: "2.0",
    id: Date.now(),
    method,
    params
  };

  console.log(`Sending request: ${JSON.stringify(request, null, 2)}`);

  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(request)
  });

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
  }

  const result = await response.json();
  console.log(`Received response: ${JSON.stringify(result, null, 2)}`);
  return result;
}

/**
 * Runs all tests
 */
async function runTests() {
  try {
    console.log(`Testing HTTP server at ${baseUrl}...`);

    // Test 1: Initialize
    console.log("\nTest 1: Initialize");
    const initResponse = await sendRequest("initialize");
    console.assert(initResponse.result.serverInfo.name, "Server name should be present");
    console.assert(initResponse.result.protocolVersion, "Protocol version should be present");

    // Test 2: List tools
    console.log("\nTest 2: List tools");
    const toolsResponse = await sendRequest("tools/list");
    console.assert(Array.isArray(toolsResponse.result.tools), "Tools should be an array");
    console.assert(toolsResponse.result.tools.length > 0, "There should be at least one tool");

    // Test 3: Call a tool (list_persons)
    console.log("\nTest 3: Call tool (list_persons)");
    const listResponse = await sendRequest("tools/call", {
      name: "list_persons",
      arguments: {}
    });
    console.assert(listResponse.result.content, "Content should be present");

    // Test 4: Call a tool (add_person)
    console.log("\nTest 4: Call tool (add_person)");
    const addResponse = await sendRequest("tools/call", {
      name: "add_person",
      arguments: {
        name: "Test Person",
        email: "test@example.com",
        phone: "123-456-7890"
      }
    });
    console.assert(addResponse.result.content, "Content should be present");

    // Test 5: Invalid method
    console.log("\nTest 5: Invalid method");
    const invalidResponse = await sendRequest("invalid_method");
    console.assert(invalidResponse.error, "Response should contain an error");
    console.assert(invalidResponse.error.code === -32000, "Error code should be -32000");
    console.assert(invalidResponse.error.message.includes("Unknown method"), "Error message should mention unknown method");
    console.log("Test passed: Received proper error response for invalid method");

    console.log("\nAll tests completed successfully!");
  } catch (error) {
    console.error("Test failed:", error);
  }
}

// Run the tests
await runTests();