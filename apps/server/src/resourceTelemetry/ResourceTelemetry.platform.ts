import * as Effect from "effect/Effect";

export const readServerPid = Effect.sync(() => process.pid);
