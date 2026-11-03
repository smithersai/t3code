import * as Effect from "effect/Effect";
/**
 * Wrap a `Cache.get` so its lookup fiber inherits a materialized stack. The lazy
 * caller frame would otherwise retain the caller's request snapshot for the TTL.
 * Stay untraced so this helper does not introduce another lazy frame to retain.
 */
export declare const detachStackFrame: <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, Exclude<R, never>>;
