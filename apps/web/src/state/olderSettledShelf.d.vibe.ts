import type { EnvironmentThreadShell } from "@t3tools/client-runtime/state/models";
import { type OlderSettledScope } from "@t3tools/client-runtime/state/threads";
import type { EnvironmentId, ProjectId } from "@t3tools/contracts";
/**
 * The Settled shelf for one scope when shells leave older settled threads out: which rows it may
 * list, how many threads it holds in all, and the pages read below each environment's cut, whose
 * rows merge into the thread list. `useOlderSettledShelfGrowth` reads the next pages.
 */
export declare function useOlderSettledShelf(input: {
    readonly scopes: ReadonlyArray<OlderSettledScope>;
    /** A collapsed shelf mounts no pages, so a reconnect reads none; expanding restores them. */
    readonly expanded: boolean;
    /** Rows the shelf shows; pages are read until it lists that many. */
    readonly visibleCount: number;
}): {
    environments: ReadonlyMap<string & import("effect/Brand").Brand<"EnvironmentId">, import("@t3tools/client-runtime/state/threads").OlderSettledShelfEnvironment>;
    visibleCount: number;
    pages: ReadonlyMap<string & import("effect/Brand").Brand<"EnvironmentId">, number>;
    grow: (next: ReadonlyMap<EnvironmentId, number>) => void;
    isListed: (thread: EnvironmentThreadShell) => boolean;
    /** Older settled threads in scope that are not local; add it to the local Settled rows. */
    unloadedCount: (threads: ReadonlyArray<EnvironmentThreadShell>) => number;
    loading: boolean;
    failed: boolean;
    retry: () => void;
};
/** Reads the next pages while the shelf lists fewer rows than it shows. */
export declare function useOlderSettledShelfGrowth(shelf: ReturnType<typeof useOlderSettledShelf>, listedSettledThreads: ReadonlyArray<EnvironmentThreadShell>): void;
/**
 * Threads of these projects that this client does not hold (older settled threads), for counts
 * shown outside the shelf, such as a removal confirm.
 */
export declare function readUnloadedThreadCount(members: ReadonlyArray<{
    readonly environmentId: EnvironmentId;
    readonly id: ProjectId;
}>, threads: ReadonlyArray<EnvironmentThreadShell>): number;
