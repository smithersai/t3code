import * as Effect from "effect/Effect";
export declare const withWorkspaceLease: <A, E, R>(cwd: string, effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
