import { getRandomValues } from 'node:crypto';

/**
 * Node version of Datadog RUM's utility for generating trace identifiers.
 * This is done to match how datadog-rum generates trace ids for network calls
 * from the browser.
 * @see https://github.com/DataDog/browser-sdk/blob/16efff71b42530ead10400eb23c096b54e83fad4/packages/rum-core/src/domain/tracing/tracer.ts#L201
 * @returns TraceIdentifier object
 */
export function createTraceIdentifier() {
  const buffer: Uint8Array = new Uint8Array(8);
  getRandomValues(buffer);
  buffer[0] = buffer[0] & 0x7f; // force 63-bit

  function readInt32(offset: number) {
    return (
      buffer[offset] * 16777216 +
      (buffer[offset + 1] << 16) +
      (buffer[offset + 2] << 8) +
      buffer[offset + 3]
    );
  }

  const toString = (radix: number) => {
    let high = readInt32(0);
    let low = readInt32(4);
    let str = '';

    do {
      const mod = (high % radix) * 4294967296 + low;
      high = Math.floor(high / radix);
      low = Math.floor(mod / radix);
      str = (mod % radix).toString(radix) + str;
    } while (high || low);

    return str;
  };

  return {
    toDecimalString: () => toString(10),
  };
}
