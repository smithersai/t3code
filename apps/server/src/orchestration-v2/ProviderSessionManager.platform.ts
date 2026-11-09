import * as Effect from "effect/Effect";

/** Marks group shutdown signals while the provider session layer is open. */
export const watchShutdownSignals = (onShutdownSignal: () => void) =>
  Effect.acquireRelease(
    Effect.sync(() => {
      process.on("SIGINT", onShutdownSignal);
      process.on("SIGTERM", onShutdownSignal);
    }),
    () =>
      Effect.sync(() => {
        process.off("SIGINT", onShutdownSignal);
        process.off("SIGTERM", onShutdownSignal);
      }),
  );
