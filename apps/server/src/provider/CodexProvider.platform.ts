import * as Effect from "effect/Effect";

export const readProcessEnv = Effect.sync(() => process.env);

export const readProcessCwd = Effect.sync(() => process.cwd());
