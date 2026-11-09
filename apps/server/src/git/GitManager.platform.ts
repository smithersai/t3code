import * as Effect from "effect/Effect";

export const readProcessId = Effect.sync(() => process.pid);

export const readTempDirectory = Effect.sync(
  () => process.env.TMPDIR ?? process.env.TEMP ?? process.env.TMP ?? "/tmp",
);
