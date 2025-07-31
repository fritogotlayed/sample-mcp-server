import { MCPServices } from '../mcp-core/interfaces/services.ts';
import { DatabaseService } from '../services/database.service.ts';

/**
 * Application-specific services interface
 */
export interface AppServices extends MCPServices {
  databaseService: DatabaseService;
}
