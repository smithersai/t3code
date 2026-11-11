import * as Effect from "effect/Effect";

export const readModuleDirname = Effect.sync(() => import.meta.dirname);
