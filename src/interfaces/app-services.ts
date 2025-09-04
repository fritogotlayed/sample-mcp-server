import { MCPServices } from '../mcp-core/interfaces/services.ts';
import { DatabaseService } from '../services/database.service.ts';
import { txmApi, identityApi } from '../utils/clients.ts'

/**
 * Application-specific services interface
 */
export interface AppServices extends MCPServices {
  databaseService: DatabaseService;
  txmService: typeof txmApi;
  identityService: typeof identityApi;
}
