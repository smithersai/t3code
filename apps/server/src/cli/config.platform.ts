import * as Effect from "effect/Effect";

export const readProcessCwd = Effect.sync(() => process.cwd());

export const readProcessId = Effect.sync(() => process.pid);
