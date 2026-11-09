import * as Effect from "effect/Effect";

export const readProcessEnv = Effect.sync(() => process.env);
