import * as Effect from "effect/Effect";

/** @throws {never} */
export const readProcessVersions = (): NodeJS.ProcessVersions => process.versions;

/** @throws {never} */
export const randomUuid = (): string =>
  // @effect-diagnostics-next-line cryptoRandomUUID:off -- Resources are built synchronously, outside any Effect.
  crypto.randomUUID();

/** @throws {never} */
export const utf8ByteLength = (text: string): number => Buffer.byteLength(text);

export const readPerformanceNow = Effect.sync(() => performance.now());
