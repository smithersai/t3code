import * as Scope from "effect/Scope";
import * as Effect from "effect/Effect";
export interface KeyedCoalescingWorker<K, V> {
    readonly enqueue: (key: K, value: V) => Effect.Effect<void>;
    readonly drainKey: (key: K) => Effect.Effect<void>;
}
export declare const makeKeyedCoalescingWorker: <K, V, E, R>(options: {
    readonly merge: (current: V, next: V) => V;
    readonly process: (key: K, value: V) => Effect.Effect<void, E, R>;
}) => Effect.Effect<KeyedCoalescingWorker<K, V>, never, Scope.Scope | R>;
