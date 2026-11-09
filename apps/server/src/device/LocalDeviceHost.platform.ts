// The platform code of LocalDeviceHost.vibe, which VibeLang code does not use directly (EK4402).
import * as Effect from "effect/Effect";

export const isProcessAlive = (pid: number) =>
  Effect.sync(() => {
    try {
      process.kill(pid, 0);
      return true;
    } catch {
      return false;
    }
  });

export const terminateProcess = (pid: number) =>
  Effect.sync(() => {
    try {
      process.kill(pid, "SIGTERM");
    } catch {}
  });
