// @effect-diagnostics nodeBuiltinImport:off - one sha256 over two strings; Effect.Crypto is async and the digest feeds a synchronous Output.map.
import * as NodeCrypto from "node:crypto";

/** @throws {never} */
export function sha256Hex(text: string): string {
  return NodeCrypto.createHash("sha256").update(text).digest("hex");
}
