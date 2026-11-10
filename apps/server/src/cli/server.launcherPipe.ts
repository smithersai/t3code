import * as Effect from "effect/Effect";

// The desktop launcher reads this process's stdout and stderr. Once it is gone,
// every log write fails, and Node turns an unhandled stream error into a crash
// that skips shutdown and leaves the ownership lock and runtime record behind.
function ignoreClosedLauncherPipe(error: NodeJS.ErrnoException): void {
  if (error.code !== "EPIPE" && error.code !== "ERR_STREAM_DESTROYED") throw error;
}

export const ignoreClosedLauncherPipes = Effect.sync(() => {
  process.stdout.on("error", ignoreClosedLauncherPipe);
  process.stderr.on("error", ignoreClosedLauncherPipe);
});
