import * as Effect from "effect/Effect";

export const readProcessId = Effect.sync(() => process.pid);

export const readProcessEnv = Effect.sync(() => process.env);
