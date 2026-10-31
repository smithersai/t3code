import * as Effect from "effect/Effect";
export interface KeyedLock<Key> {
    readonly withLock: <A, E, R>(key: Key, effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
    readonly activeKeys: Effect.Effect<ReadonlyArray<Key>>;
}
/**
 * Not reentrant: taking a key while already holding it deadlocks.
 */
export declare const make: <Key>() => Effect.Effect<KeyedLock<Key>, never, never>;
