import type { OrchestrationV2PendingBackgroundTask, OrchestrationV2ProviderThread, OrchestrationV2Run, OrchestrationV2TurnItem, ThreadId, ThreadPullRequestLink } from "@t3tools/contracts";
export type PendingBackgroundWorkTask = OrchestrationV2PendingBackgroundTask;
export declare function turnItemUpdateCanEndBackgroundWork(item: Pick<OrchestrationV2TurnItem, "type" | "status">): boolean;
export declare function deriveBlockedOnThreadWait(input: {
    readonly activeRun: Pick<OrchestrationV2Run, "id" | "status"> | null;
    readonly turnItems: ReadonlyArray<OrchestrationV2TurnItem>;
}): boolean;
export declare function backgroundWorkHoldsCompletion(tasks: ReadonlyArray<Pick<PendingBackgroundWorkTask, "kind" | "awaited">>): boolean;
type PendingBackgroundWorkRun = Pick<OrchestrationV2Run, "id" | "ordinal" | "status">;
type PendingBackgroundWorkPullRequest = Pick<ThreadPullRequestLink, "host" | "repository" | "number" | "url" | "source" | "watch">;
type PendingBackgroundWorkProviderThread = Pick<OrchestrationV2ProviderThread, "id" | "pendingBackgroundTasks"> & {
    readonly providerInstanceId?: OrchestrationV2ProviderThread["providerInstanceId"];
};
type PendingBackgroundWorkTurnItem = {
    readonly id: OrchestrationV2TurnItem["id"] | string;
    readonly type: OrchestrationV2TurnItem["type"];
    readonly status: OrchestrationV2TurnItem["status"];
    readonly title: string | null;
    /** Shell readers join the owner, even when its provider thread belongs to a child app thread. */
    readonly owningProviderInstanceId?: OrchestrationV2ProviderThread["providerInstanceId"];
    readonly runId?: OrchestrationV2Run["id"] | string | null;
    readonly nativeItemRef?: {
        readonly nativeId: string | null;
    } | null;
    readonly input?: unknown;
    readonly monitor?: boolean | undefined;
    readonly prompt?: string | undefined;
    readonly childThreadId?: ThreadId | null;
};
/** Items Stop ends, without the pending list's settled-run gate. */
export declare function pendingBackgroundTurnItems<Item extends PendingBackgroundWorkTurnItem>(input: {
    readonly turnItems: ReadonlyArray<Item>;
    readonly runs?: ReadonlyArray<PendingBackgroundWorkRun>;
}): ReadonlyArray<Item>;
export declare function derivePendingBackgroundWork(input: {
    readonly latestRun: PendingBackgroundWorkRun | null | undefined;
    readonly providerThreads: ReadonlyArray<PendingBackgroundWorkProviderThread>;
    readonly turnItems: ReadonlyArray<PendingBackgroundWorkTurnItem>;
    readonly activeProviderThreadId?: string | null;
    readonly hasActiveRun?: boolean;
    /** Excludes rolled-back runs; optional only when the caller already filtered them, as SQL shell reads do. */
    readonly runs?: ReadonlyArray<PendingBackgroundWorkRun>;
    readonly pullRequests?: ReadonlyArray<PendingBackgroundWorkPullRequest> | undefined;
}): ReadonlyArray<PendingBackgroundWorkTask>;
export {};
