#!/usr/bin/env -S deno run --allow-read --allow-write --allow-net

import { DatabaseService } from "./src/services/database.service.ts";
import { ToolsService } from "./src/services/tools.service.ts";
import { MCPServerService } from "./src/services/mcp-server.service.ts";

/**
 * Configuration for the application
 */
interface AppConfig {
  dbPath: string;
  serverName: string;
  serverVersion: string;
  serverMode: "http";
  httpPort: number;
}

/**
 * Main entry point for the application
 */
async function main() {
  // Load configuration with default values
  const config: AppConfig = {
    dbPath: "./database.json",
    serverName: "phonebook-mcp-server",
    serverVersion: "1.0.0",
    serverMode: "http",
    httpPort: 8000
  };

  try {
    // Create services with dependency injection
    const databaseService = new DatabaseService(config.dbPath);
    const toolsService = new ToolsService(databaseService);
    const serverService = new MCPServerService(
      toolsService,
      config.serverName,
      config.serverVersion,
      config.httpPort
    );

    console.log(`Starting server in HTTP mode...`);
    console.log(`HTTP server will listen on port ${config.httpPort}`);

    // Start the server
    await serverService.start();
  } catch (error) {
    console.error("Fatal error:", error);
    Deno.exit(1);
  }
}

// Run the application if this is the main module
if (import.meta.main) {
  await main();
}

// Export for testing
export { main };