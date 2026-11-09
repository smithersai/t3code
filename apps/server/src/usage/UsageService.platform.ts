import * as NodeOS from "node:os";
import * as Effect from "effect/Effect";

export const readOSHostname = Effect.sync(() => NodeOS.hostname());
