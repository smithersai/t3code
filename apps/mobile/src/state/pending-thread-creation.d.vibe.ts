import { type EnvironmentThreadShell } from "@t3tools/client-runtime/state/shell";
import type { LocalThreadMessage } from "../lib/threadActivity.vibe";
import { Atom } from "effect/reactivity";
import type { QueuedThreadMessage } from "./thread-outbox-model.vibe";
export type PendingThreadCreationOutcome = {
    readonly kind: "delivered";
    readonly message: QueuedThreadMessage;
} | {
    readonly kind: "failed";
    readonly message: QueuedThreadMessage;
    readonly reason: string;
};
export type PendingThreadCreation = {
    readonly message: QueuedThreadMessage;
    readonly outcome: PendingThreadCreationOutcome | null;
};
export declare function selectThreadCreationDetail<Ref>(input: {
    readonly threadRef: Ref | null;
    readonly threadKey: string | null;
    readonly queuedMessagesByThreadKey: Readonly<Record<string, ReadonlyArray<QueuedThreadMessage> | undefined>>;
    readonly outcomes: Readonly<Record<string, PendingThreadCreationOutcome | undefined>>;
}): {
    readonly pendingCreation: PendingThreadCreation | null;
    readonly detailRef: Ref | null;
};
export declare function resolvePendingThreadCreation(input: {
    readonly threadKey: string | null;
    readonly pending: PendingThreadCreation | null;
    readonly previous: PendingThreadCreation | null;
    readonly detail: {
        readonly messages: ReadonlyArray<{
            readonly id: string;
        }>;
        readonly runs?: ReadonlyArray<{
            readonly status: string;
        }>;
        readonly latestTurn?: {
            readonly turnId: string;
        } | null;
        readonly session?: {
            readonly status: string;
        } | null;
    } | null;
}): PendingThreadCreation | null;
export declare const pendingThreadCreationOutcomesAtom: Atom.Writable<Readonly<Record<string, PendingThreadCreationOutcome>>, Readonly<Record<string, PendingThreadCreationOutcome>>>;
export declare function recordPendingThreadCreationOutcome(outcome: PendingThreadCreationOutcome): void;
export declare function clearPendingThreadCreationOutcome(threadKey: string): void;
/** Thread shell and empty detail precede the prompt: worktree setup runs between creation and turn start. */
export declare function isPendingThreadCreationVisible(input: {
    readonly creationMessageId: string;
    readonly loadedMessageIds: ReadonlyArray<string> | null;
}): boolean;
export declare function pendingThreadCreationMessage(message: QueuedThreadMessage): LocalThreadMessage;
export declare function pendingThreadCreationShell(message: QueuedThreadMessage): EnvironmentThreadShell | null;
