// @effect-diagnostics-next-line nodeBuiltinImport:off -- Keys need a deterministic digest, not random bytes.
import * as NodeCrypto from "node:crypto";

/** @throws {never} */
export function sha256Hex(text: string): string {
  return NodeCrypto.createHash("sha256").update(text).digest("hex");
}
