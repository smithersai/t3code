import * as NodeModule from "node:module";

import * as Effect from "effect/Effect";

// fff-node's native library stays external; single-executables require disk packages instead of importing them.
const requireForFff = NodeModule.createRequire(import.meta.url);
export const { FileFinder } = requireForFff(
  "@ff-labs/fff-node",
) as typeof import("@ff-labs/fff-node");

/** @throws {never} */
export function utf8Bytes(text: string): Buffer {
  return Buffer.from(text);
}

export const readPerformanceNow = Effect.sync(() => performance.now());
