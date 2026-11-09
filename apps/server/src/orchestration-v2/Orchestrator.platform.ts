import * as Effect from "effect/Effect";

/** @throws {never} */
export function utf8ByteLength(value: string): number {
  return Buffer.byteLength(value);
}

export const currentWorkingDirectory = Effect.sync(() => process.cwd());
