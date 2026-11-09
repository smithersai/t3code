// @effect-diagnostics-next-line nodeBuiltinImport:off -- Effect's Crypto digest is effectful; a sync hash keeps historyPath a plain function.
import * as NodeCrypto from "node:crypto";
import * as Effect from "effect/Effect";

/** @throws {never} */
export function detachUtf16(value: string): string {
  return Buffer.from(value, "utf16le").toString("utf16le");
}

/** @throws {never} */
export function utf8ByteLength(value: string): number {
  return Buffer.byteLength(value);
}

/** @throws {never} */
export function terminalHistoryDigest(id: string): string {
  return NodeCrypto.createHash("sha256").update(id).digest("base64url");
}

export const readProcessEnvironment = Effect.sync(() => process.env);
