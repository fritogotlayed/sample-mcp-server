// TODO: Move all this file to a module. Make this similar to https://jsr.io/@std/dotenv/0.225.5/load.ts
/**
 * A module to load environment variables from a .env file in a overrideable way. Typically, the ".env" file will be
 * loaded first, followed by any .env.[NODE_ENV] files. Environment variables that are set externally will override
 * the values in the .env and .env.[NODE_ENV] files.
 */
import { parse } from 'jsr:@std/dotenv';

const SET_VARIABLES = new Set<string>();

const parseFileSync = (
  filepath: string | URL,
): Record<string, string> => {
  try {
    return parse(Deno.readTextFileSync(filepath));
  } catch (e) {
    if (e instanceof Deno.errors.NotFound) return {};
    throw e;
  }
};

const parseFile = async (
  filepath: string | URL,
): Promise<Record<string, string>> => {
  try {
    return parse(await Deno.readTextFile(filepath));
  } catch (e) {
    if (e instanceof Deno.errors.NotFound) return {};
    throw e;
  }
};

/**
 * Load environment variables from a .env file (synchronous)
 *
 * @param options Options for loading the environment variables
 * @param options.envPath Path to the .env file (default: '.env')
 * @param options.export Whether to export the environment variables (default: false)
 */
export const loadEnvFileSync = (options: { envPath?: string; export?: boolean } = {}) => {
  const {
    envPath = '.env',
    export: _export = false,
  } = options;
  const conf = envPath ? parseFileSync(envPath) : {};

  if (_export) {
    for (const [key, value] of Object.entries(conf)) {
      if (SET_VARIABLES.has(key) || !Deno.env.get(key)) {
        Deno.env.set(key, value);
        SET_VARIABLES.add(key);
      }
    }
  }
};

/**
 * Load environment variables from a .env file (asynchronous)
 *
 * @param options Options for loading the environment variables
 * @param options.envPath Path to the .env file (default: '.env')
 * @param options.export Whether to export the environment variables (default: false)
 */
export const loadEnvFile = async (options: { envPath?: string; export?: boolean } = {}) => {
  const {
    envPath = '.env',
    export: _export = false,
  } = options;
  const conf = envPath ? await parseFile(envPath) : {};

  if (_export) {
    for (const [key, value] of Object.entries(conf)) {
      if (SET_VARIABLES.has(key) || !Deno.env.get(key)) {
        Deno.env.set(key, value);
        SET_VARIABLES.add(key);
      }
    }
  }
};

/**
 * Load environment variables from a `.env` file and optionally from a `.env.[NODE_ENV]` file. If `NODE_ENV` is not set,
 * only the `.env` file will be loaded. If `NODE_ENV` is set, both `.env` and `.env.[NODE_ENV]` files will be loaded.
 * `[NODE_ENV]` is the value of the NODE_ENV environment variable. (synchronous)
 */
export const loadEnvSync = () => {
  const nodeEnv = Deno.env.get('NODE_ENV');
  loadEnvFileSync({ export: true });
  if (nodeEnv) {
    loadEnvFileSync({ envPath: `.env.${nodeEnv}`, export: true });
  }
  console.log(`Hydrated environment variables: ${Array.from(SET_VARIABLES).join(', ')}`);
};

/**
 * Load environment variables from a `.env` file and optionally from a `.env.[NODE_ENV]` file. If `NODE_ENV` is not set,
 * only the `.env` file will be loaded. If `NODE_ENV` is set, both `.env` and `.env.[NODE_ENV]` files will be loaded.
 * `[NODE_ENV]` is the value of the NODE_ENV environment variable. (asynchronous)
 */
export const loadEnv = async () => {
  const nodeEnv = Deno.env.get('NODE_ENV');
  await loadEnvFile({ export: true });
  if (nodeEnv) {
    await loadEnvFile({ envPath: `.env.${nodeEnv}`, export: true });
  }
  console.log(`Hydrated environment variables: ${Array.from(SET_VARIABLES).join(', ')}`);
};
