#!/usr/bin/env -S deno run --allow-net

// This script tests the MCP server by sending requests to it
// Run the server first with: deno run --allow-read --allow-write --allow-net main.ts
// Then run this script in another terminal: deno run --allow-net test_hono_server.ts

const SERVER_URL = "http://localhost:8000";

/**
 * Sends a request to the server
 * @param method The method to call
 * @param params The parameters to send
 * @returns The response
 */
async function sendRequest(method: string, params: any = {}): Promise<any> {
  const response = await fetch(SERVER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: Date.now(),
      method,
      params,
    }),
  });

  return await response.json();
}

/**
 * Tests the health endpoint
 */
async function testHealth(): Promise<void> {
  try {
    const response = await fetch(`${SERVER_URL}/health`);
    const text = await response.text();
    
    console.log("Health check:", response.status, text);
  } catch (error) {
    console.error("Health check failed:", error);
  }
}

/**
 * Tests the initialize method
 */
async function testInitialize(): Promise<void> {
  try {
    const response = await sendRequest("initialize");
    console.log("Initialize response:", JSON.stringify(response, null, 2));
  } catch (error) {
    console.error("Initialize failed:", error);
  }
}

/**
 * Tests the tools/list method
 */
async function testToolsList(): Promise<void> {
  try {
    const response = await sendRequest("tools/list");
    console.log("Tools list response:", JSON.stringify(response, null, 2));
  } catch (error) {
    console.error("Tools list failed:", error);
  }
}

/**
 * Main function
 */
async function main(): Promise<void> {
  console.log("Testing MCP server...");
  
  // Test health endpoint
  await testHealth();
  
  // Test initialize method
  await testInitialize();
  
  // Test tools/list method
  await testToolsList();
  
  console.log("Tests completed.");
}

// Run the tests
await main();