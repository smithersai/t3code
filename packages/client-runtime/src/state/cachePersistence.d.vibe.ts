import * as Effect from "effect/Effect";
import * as Queue from "effect/Queue";
export declare const runCachePersistence: <A, E, R>(queue: Queue.Queue<A, never>, persist: (value: A) => Effect.Effect<void, E, R>) => Effect.Effect<never, E, Exclude<R, import("effect/Tracer").ParentSpan>>;
