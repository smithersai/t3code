// The platform code of pinnedRuntime.vibe, which VibeLang code does not use directly (EK4402).
import * as Effect from "effect/Effect";

export const readProcessEnv = Effect.sync(() => process.env);

export const digestSha256 = (data: Parameters<typeof crypto.subtle.digest>[1]) =>
  crypto.subtle.digest("SHA-256", data);
