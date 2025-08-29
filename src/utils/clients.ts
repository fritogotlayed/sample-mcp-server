import createClient, { Middleware } from 'openapi-fetch';
import type { CoreSchema } from './generated/index.ts';

import { createTraceIdentifier } from './createTraceIdentifier.ts';

const authMiddleware: Middleware = {
  /**
   * openapi-fetch middleware for adding Authorization
   * header to requests. Access token generated via
   * @side/next-auth getServerSession
   */
  onRequest({ request }) {
    const authToken = Deno.env.get('AUTH_TOKEN')
    if (!authToken) {
      throw new Error('AUTH_TOKEN environment variable is not set');
    }
    // Set auth header
    request.headers.set(
      'Authorization',
      `Bearer ${authToken}`,
    );

    // Set trace id header
    const traceId = createTraceIdentifier().toDecimalString();
    request.headers.set('X-Datadog-Trace-Id', traceId);

    return request;
  },
}

/**
 * Typesafe fetch client for interacting with core-service
 * @see https://core-service-pilbcz7fiq-uc.a.run.app/openapi
 * @example
 * ```typescript
 * import { txmApi } from 'src/shared/api-clients/clients';
 * 
 * const { data, error } = await txmApi.GET('/users/{id}', {
 *   params: { path: { id: userId } }
 * });
 * if (error) {
 *   throw error;
 * }
 * return data;
 * ```
 */
const txmApi = createClient<CoreSchema.paths>({
  baseUrl: Deno.env.get('CORE_SERVICE_URL') || 'https://core-service-pilbcz7fiq-uc.a.run.app',
});

/**
 * @see https://identity-service-pilbcz7fiq-uc.a.run.app/openapi
 * @example
 * ```typescript
 * import { txmApi } from 'src/shared/api-clients/clients';
 * 
 * const { data, error } = await txmApi.GET('/users/{id}', {
 *   params: { path: { id: userId } }
 * });
 * if (error) {
 *   throw error;
 * }
 * return data;
 * ```
 */
const identityApi = createClient<CoreSchema.paths>({
  baseUrl: Deno.env.get('CORE_SERVICE_URL') || 'https://identity-service-pilbcz7fiq-uc.a.run.app',
});


txmApi.use(authMiddleware)
identityApi.use(authMiddleware)

export { txmApi, identityApi }