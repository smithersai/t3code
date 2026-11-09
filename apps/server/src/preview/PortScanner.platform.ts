import * as Effect from "effect/Effect";

export const readProcessPid = Effect.sync(() => process.pid);
