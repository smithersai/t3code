import * as Effect from "effect/Effect";

export const readProcessExecPath = Effect.sync(() => process.execPath);
export const readProcessEnv = Effect.sync(() => process.env);
