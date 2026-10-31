import * as Scope from "effect/Scope";
import * as Effect from "effect/Effect";
export interface DrainableWorker<A> {
    readonly enqueue: (item: A) => Effect.Effect<void>;
    readonly drain: Effect.Effect<void>;
}
/**
 * A finalizer shuts down the queue and drops queued items, so `drain` resolves after the scope
 * closes instead of waiting on them. An item that fails or dies is logged and skipped; the worker
 * keeps processing later items and `drain` still resolves.
 */
export declare const makeDrainableWorker: <A, E, R>(process: (item: A) => Effect.Effect<void, E, R>) => Effect.Effect<DrainableWorker<A>, never, Scope.Scope | R>;
