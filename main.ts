#!/usr/bin/env -S deno run --allow-read --allow-write --allow-net --allow-env

import '@fritogotlayed/dotenv-enhanced/load-env'; // Load environment variables from .env files
import { MCPServerService } from './src/mcp-core/mcp-server.service.ts';
import { DatabaseService } from './src/services/database.service.ts';

/**
 * Configuration for the application
 */
interface AppConfig {
  dbPath: string;
  serverName: string;
  serverVersion: string;
  httpPort: number;
}

/**
 * Main entry point for the application
 */
function main() {
  // Load configuration with default values
  const config: AppConfig = {
    dbPath: './database.json',
    serverName: 'phonebook-mcp-server',
    serverVersion: '1.0.0',
    httpPort: Number(Deno.env.get('API_HTTP_PORT')) || 8000,
  };

  try {
    // Create services with dependency injection
    const serverService = new MCPServerService(
      config.serverName,
      config.serverVersion,
      config.httpPort,
    );

    // Register services
    serverService.registerServices({
      databaseService: new DatabaseService(config.dbPath),
    });

    // Start the server with the specified mode
    serverService.start();
  } catch (error) {
    console.error('Fatal error:', error);
    Deno.exit(1);
  }
}

// Run the application if this is the main module
if (import.meta.main) {
  console.log(
    'Environment variable TOKEN is: ' + (Deno.env.get('TOKEN') ?? 'Not set'),
  );
  main();
}

// Export for testing
export { main };
