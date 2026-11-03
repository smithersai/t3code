import * as Effect from "effect/Effect";
import * as Scope from "effect/Scope";
export interface ProviderTextDeltaUpdate {
    readonly turnId: string;
    readonly itemId: string;
    readonly text: string;
    readonly completed: boolean;
}
export interface ProviderTextDeltaCoalescer {
    readonly append: (input: {
        readonly turnId: string;
        readonly itemId: string;
        readonly delta: string;
    }) => Effect.Effect<void>;
    readonly complete: (input: {
        readonly turnId: string;
        readonly itemId: string;
        readonly finalText?: string;
        readonly emitEmpty?: boolean;
    }) => Effect.Effect<string>;
    readonly flushTurn: (turnId: string) => Effect.Effect<void>;
}
export declare const makeProviderTextDeltaCoalescer: (input: {
    readonly flushIntervalMs: number;
    readonly emit: (update: ProviderTextDeltaUpdate) => Effect.Effect<void>;
}) => Effect.Effect<ProviderTextDeltaCoalescer, never, Scope.Scope>;
