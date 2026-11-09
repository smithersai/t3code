// @effect-diagnostics nodeBuiltinImport:off
import * as NodeOS from "node:os";
import * as Effect from "effect/Effect";

export const readOSRelease = Effect.sync(() => NodeOS.release());
export const readProcessVersion = Effect.sync(() => process.version);
