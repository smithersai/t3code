import * as Deferred from "effect/Deferred";
import * as Effect from "effect/Effect";
export interface ReplayRecorderDeferredRegistry {
    readonly getOrCreate: (key: string) => Effect.Effect<Deferred.Deferred<void>>;
    readonly succeed: (key: string) => Effect.Effect<void>;
}
export declare const makeReplayRecorderDeferredRegistry: () => Effect.Effect<{
    getOrCreate: (key: string) => Effect.Effect<Deferred.Deferred<void, never>, never, never>;
    succeed: (key: string) => Effect.Effect<void, never, never>;
}, never, never>;
