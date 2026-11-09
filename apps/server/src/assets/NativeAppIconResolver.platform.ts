// The platform code of NativeAppIconResolver.vibe, which VibeLang code does not use directly (EK4402).
import * as Effect from "effect/Effect";

export const readProcessPid = Effect.sync(() => process.pid);
