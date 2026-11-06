import type { EnvironmentId, OrchestrationGetTurnDiffResult, ThreadId } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import { Atom, type AtomRegistry } from "effect/reactivity";
export declare function lastReviewTurnDiffsAtom(environmentId: EnvironmentId, threadId: ThreadId): Atom.Writable<Readonly<Readonly<Record<number, string>>>, Readonly<Readonly<Record<number, string>>>>;
export declare const recordReviewTurnDiffAnswer: (target: {
    readonly environmentId: EnvironmentId;
    readonly input: {
        readonly ignoreWhitespace?: boolean;
    };
}, value: OrchestrationGetTurnDiffResult, registry: AtomRegistry.AtomRegistry) => Effect.Effect<void, never, never>;
