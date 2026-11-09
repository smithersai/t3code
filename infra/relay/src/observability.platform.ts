// @effect-diagnostics nodeBuiltinImport:off - one sha256 inside a synchronous Output.map.
import * as NodeCrypto from "node:crypto";

/** @throws {never} */
export function sha256Hex(text: string): string {
  return NodeCrypto.createHash("sha256").update(text).digest("hex");
}
