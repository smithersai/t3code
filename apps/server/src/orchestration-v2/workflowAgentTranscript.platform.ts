// @effect-diagnostics nodeBuiltinImport:off
import * as NodePath from "node:path";
import * as Effect from "effect/Effect";

/** @throws never */
export const readPathJoin = (...args: Parameters<typeof NodePath.join>) =>
  Effect.sync(() => NodePath.join(...args));
