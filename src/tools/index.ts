import { ToolDefinition } from '../mcp-core/ports/tool-registry.ts';
import { ToolHandlerCallback } from '../mcp-core/types.ts';

// Interface for dynamically imported tool modules
interface ToolModule {
  tool?: ToolDefinition;
  handler?: ToolHandlerCallback;
}

// Dynamically discover all tools in this directory (excluding index.ts)
const discoveredTools: ToolDefinition[] = [];
const discoveredHandlers: Record<
  string,
  ToolHandlerCallback
> = {};

const dirPathUrl = new URL('.', import.meta.url);
for await (const entry of Deno.readDir(dirPathUrl.pathname)) {
  if (!entry.isFile) continue;
  if (!entry.name.endsWith('.ts')) continue;
  if (entry.name === 'index.ts') continue;

  const moduleUrl = new URL(`./${entry.name}`, import.meta.url).href;
  const mod: ToolModule = await import(moduleUrl);

  // Expect each tool module to export `tool` and `handler`
  const tool: ToolDefinition | undefined = mod?.tool;
  const handler = mod?.handler;
  if (!tool || typeof handler !== 'function') continue;

  // Skip disabled tools
  if (tool.disabled === true) continue;

  discoveredTools.push(tool);
  discoveredHandlers[tool.name] = handler;
}

discoveredTools.sort((a, b) => {
  // Sort by name alphabetically
  return a.name.localeCompare(b.name);
});

export const tools: ToolDefinition[] = discoveredTools;
export const handlers: Record<string, ToolHandlerCallback> = discoveredHandlers;
