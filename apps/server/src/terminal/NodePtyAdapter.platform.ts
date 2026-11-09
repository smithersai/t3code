import * as NodeModule from "node:module";
import * as NodeNet from "node:net";

import * as Effect from "effect/Effect";

// node-pty's native addon stays external; single-executables need require to resolve disk modules and spawn helpers.
const requireForNodePty = NodeModule.createRequire(import.meta.url);

export const requireNodePty = () => requireForNodePty("node-pty") as typeof import("node-pty");

export const resolveNodePtyPackageJsonPath = Effect.sync(() =>
  requireForNodePty.resolve("node-pty/package.json"),
);

/** @throws {never} */
export function isNetSocket(value: unknown): value is NodeNet.Socket {
  return value instanceof NodeNet.Socket;
}
