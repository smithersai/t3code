/**
 * A queued-message edit ends on save, cancel, or when its run leaves the queue.
 * The store owns one watcher per edit, so "run left the queue" is handled exactly
 * once, when the projection reports it, wherever the user is in the app. It also
 * owns the edit's save, because a save outlives the view that started it.
 */
import type { RunId } from "@t3tools/contracts";
import { Atom, type AtomRegistry } from "effect/reactivity";
export interface QueuedRunStatus {
    readonly id: RunId;
    readonly status: string;
}
/** The thread's runs, or null while they are unknown (detail not loaded yet). */
export type QueuedRunsAtom = Atom.Atom<ReadonlyArray<QueuedRunStatus> | null>;
interface ShellThreadPresence {
    readonly id: string;
    readonly deletedAt: unknown;
}
/**
 * The edited thread's runs. A deleted thread (shell `deletedAt` or detail status
 * `deleted`) reads as no runs, so its edit ends. Absence from the shell is not
 * deletion: archived threads are dropped there but keep an editable queue, so
 * everything else reads the detail's runs, unknown until it loads.
 */
export declare function makeQueuedRunsAtom(input: {
    readonly threadId: string;
    readonly snapshot: Atom.Atom<{
        readonly threads: ReadonlyArray<ShellThreadPresence>;
    } | null>;
    readonly detailStatus: Atom.Atom<string>;
    readonly runs: Atom.Atom<ReadonlyArray<QueuedRunStatus> | null>;
}): QueuedRunsAtom;
/**
 * What happens to an open edit when its run leaves the queue: an unchanged
 * edit just closes; a changed one moves into the thread's own draft when that
 * draft is empty, and is dropped otherwise so it never overwrites the user's
 * other work.
 */
export declare function resolveQueuedEditExit(input: {
    readonly editChanged: boolean;
    readonly threadDraftEmpty: boolean;
}): "kept" | "discarded" | "clean";
/**
 * Why a queued message can't be opened in the composer now, or null when it
 * can. An open question takes the composer over for its answer, so an edit
 * begun then would happen out of sight and could be sent before it is seen.
 */
export declare function queuedRunEditBlockedReason(input: {
    readonly openQuestionCount: number;
}): string | null;
/**
 * Settles a save from `startSave`. False, changing nothing, when the edit was
 * ended or begun again meanwhile. Success ends the edit; failure resumes its
 * exit watch and returns whether the edit survived it.
 */
export type FinishQueuedRunEditSave = (succeeded: boolean) => boolean;
export declare function makeQueuedRunEditStore<E extends {
    readonly runId: RunId;
}>(options: {
    readonly registry: AtomRegistry.AtomRegistry;
    readonly label: string;
}): {
    atom: Atom.Writable<Readonly<Record<string, E>>, Readonly<Record<string, E>>>;
    /** Thread keys whose edit has a save in flight. */
    savingAtom: Atom.Writable<Readonly<Record<string, true>>, Readonly<Record<string, true>>>;
    get: (threadKey: string | null) => E | null;
    /**
     * Starts an edit, replacing any edit already open on the thread. When the
     * run leaves the queue the edit is removed and `onRunLeftQueue` receives
     * it; if the run already left, that happens immediately.
     */
    begin(threadKey: string, edit: E, watch: {
        readonly runs: QueuedRunsAtom;
        readonly onRunLeftQueue: (threadKey: string, edit: E) => void;
    }): void;
    update(threadKey: string, f: (edit: E) => E): void;
    end(threadKey: string): void;
    /**
     * Claims the open edit for a save, or returns null when there is no edit
     * or a save is in flight. The exit watch pauses so the save's result decides
     * the edit's fate. The claim outlives the edit: the server orders saves by
     * arrival, so an overlapping older save could overwrite a newer one.
     */
    startSave(threadKey: string): FinishQueuedRunEditSave | null;
};
export {};
