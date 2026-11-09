import * as NodeBuffer from "node:buffer";

import * as Effect from "effect/Effect";

/** @throws {never} */
export function utf8ByteLength(text: string): number {
  return Buffer.byteLength(text);
}

/** The process working directory; throws when it no longer exists. */
export function readProcessCwd(): string {
  return globalThis.process.cwd();
}

export const readProcessEnv = Effect.sync(() => process.env);

/**
 * Decodes a skipped `ls-files -v` record after its two-byte tag, or undefined when the name
 * is not valid UTF-8.
 * @throws {never}
 */
export function decodeSkippedRecordName(record: ReadonlyArray<number>): string | undefined {
  const name = Buffer.from(record).subarray(2);
  if (!NodeBuffer.isUtf8(name)) return undefined;
  return name.toString("utf8");
}
