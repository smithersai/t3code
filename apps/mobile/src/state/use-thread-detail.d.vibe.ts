import type { PendingThreadRequests } from "@t3tools/client-runtime/state/thread-requests";
import type { EnvironmentThreadStructure } from "@t3tools/client-runtime/state/models";
import type { EnvironmentThread } from "@t3tools/client-runtime/state/shell";
import type { EnvironmentId, OrchestrationV2ThreadProjection, ScopedThreadRef, ThreadId } from "@t3tools/contracts";
export interface ThreadDetailTarget {
    readonly environmentId: EnvironmentId | null;
    readonly threadId: ThreadId | null;
}
export declare function useThreadDetail(target: ThreadDetailTarget): import("@t3tools/client-runtime/state/threads").EnvironmentThreadState;
export declare function useSelectedThreadDetailState(): import("@t3tools/client-runtime/state/threads").EnvironmentThreadState;
export declare function useThreadProjection(target: ThreadDetailTarget): EnvironmentThread | null;
/** Keeps its value through streamed text; runs, sessions, and item status still update. */
export declare function useQuietThreadStructure(ref: ScopedThreadRef | null): EnvironmentThreadStructure | null;
export declare function useSelectedThreadProjection(): EnvironmentThread | null;
export declare function useThreadVisibleTurnItems(target: ThreadDetailTarget): OrchestrationV2ThreadProjection["visibleTurnItems"];
export declare function useSelectedThreadVisibleTurnItems(): OrchestrationV2ThreadProjection["visibleTurnItems"];
export declare function useThreadWorktreePath(ref: ScopedThreadRef | null): string | null;
export declare function useSelectedThreadWorktreePath(): string | null;
export declare function useSelectedThreadPendingRequests(): PendingThreadRequests | null;
