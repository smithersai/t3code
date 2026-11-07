import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as RelayDb from "../db.vibe";
declare const CloudflareApiPause_base: Context.ServiceClass<CloudflareApiPause, "t3code-relay/environments/CloudflareApiPause", {
    /** Epoch milliseconds until which calls are paused, or 0. */
    readonly pausedUntilMillis: Effect.Effect<number>;
    readonly pauseUntil: (untilMillis: number) => Effect.Effect<void>;
}>;
/**
 * Cloudflare's account-wide 429 pause is shared across isolates and must fail open.
 * Run outside provisioning transactions: rollback would lose a recorded pause,
 * and a failed pause read would abort provisioning's own statements.
 */
export declare class CloudflareApiPause extends CloudflareApiPause_base {
}
export declare const make: Effect.Effect<{
    /** Epoch milliseconds until which calls are paused, or 0. */
    readonly pausedUntilMillis: Effect.Effect<number>;
    readonly pauseUntil: (untilMillis: number) => Effect.Effect<void>;
}, never, RelayDb.RelayDb>;
export declare const layer: Layer.Layer<CloudflareApiPause, never, RelayDb.RelayDb>;
export {};
