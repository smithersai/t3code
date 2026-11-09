// @effect-diagnostics nodeBuiltinImport:off -- unit names and RAM size come from the host.
import * as NodeCrypto from "node:crypto";
import * as NodeOS from "node:os";

import * as Effect from "effect/Effect";

/** @throws {never} */
export function sha256Hex(text: string): string {
  return NodeCrypto.createHash("sha256").update(text).digest("hex");
}

export const readTotalMemory = Effect.sync(() => NodeOS.totalmem());

export const makeRandomUuid = Effect.sync(() => NodeCrypto.randomUUID());
