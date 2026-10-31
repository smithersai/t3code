import type { EnvironmentId, MessageId, OrchestrationProjectShell, OrchestrationV2ProviderFailureClass, OrchestrationV2ProviderGoal, OrchestrationV2RunStatus, OrchestrationV2ThreadProjection, OrchestrationV2ThreadShell, PlanId, ProjectId, ProviderInstanceId, RunId, ThreadId, ThreadLinkedPullRequest } from "@t3tools/contracts";
export interface EnvironmentProject extends OrchestrationProjectShell {
    readonly environmentId: EnvironmentId;
    readonly isScratch?: true;
}
/**
 * The projection stays nested so the server projection and all structurally
 * shared collections retain their identities.
 */
export interface EnvironmentThread {
    readonly environmentId: EnvironmentId;
    readonly projection: OrchestrationV2ThreadProjection;
}
type ProjectionTurnItem = OrchestrationV2ThreadProjection["turnItems"][number];
type StreamedProjectionTurnItem = Extract<ProjectionTurnItem, {
    readonly type: "assistant_message" | "reasoning";
}>;
/** A turn item without the fields that move while it streams. */
export type ThreadStructureTurnItem = Exclude<ProjectionTurnItem, StreamedProjectionTurnItem> | Omit<Extract<ProjectionTurnItem, {
    readonly type: "assistant_message";
}>, "text" | "updatedAt"> | Omit<Extract<ProjectionTurnItem, {
    readonly type: "reasoning";
}>, "text" | "updatedAt">;
export type ThreadStructureVisibleTurnItem = Omit<OrchestrationV2ThreadProjection["visibleTurnItems"][number], "item"> & {
    readonly item: ThreadStructureTurnItem;
};
/**
 * A thread projection without the fields that move while a reply streams, so a
 * reader of the quiet thread cannot depend on them and go stale. A full
 * projection is assignable to it.
 */
export type ThreadStructureThread = Omit<OrchestrationV2ThreadProjection["thread"], "updatedAt" | "lastVisitedAt">;
export type ThreadStructure = Omit<OrchestrationV2ThreadProjection, "thread" | "turnItems" | "visibleTurnItems" | "updatedAt"> & {
    readonly thread: ThreadStructureThread;
    readonly turnItems: ReadonlyArray<ThreadStructureTurnItem>;
    readonly visibleTurnItems: ReadonlyArray<ThreadStructureVisibleTurnItem>;
};
export interface EnvironmentThreadStructure {
    readonly environmentId: EnvironmentId;
    readonly projection: ThreadStructure;
}
export interface ThreadRunSummary {
    readonly runId: RunId;
    readonly status: OrchestrationV2RunStatus;
    readonly requestedAt: string | null;
    readonly startedAt: string | null;
    readonly completedAt: string | null;
    readonly assistantMessageId: MessageId | null;
    /**
     * The run is still open, but its provider turn already ended, so nothing is
     * generating while the server settles it.
     */
    readonly turnEnded?: boolean;
    readonly sourcePlanRef?: {
        readonly threadId: ThreadId;
        readonly planId: PlanId;
    };
}
export interface ThreadRuntimeSummary {
    readonly status: OrchestrationV2RunStatus | "idle";
    readonly activeRunId: RunId | null;
    readonly activityStartedAt?: string | null | undefined;
    readonly providerInstanceId: ProviderInstanceId;
    readonly providerName: string | null;
    readonly lastError: string | null;
    readonly lastErrorClass?: OrchestrationV2ProviderFailureClass | null;
    readonly lastErrorCode?: string | null;
    readonly usageLimitResetAt?: string | null;
    readonly updatedAt: string;
}
/** The runtime summary a thread's structure determines; see ThreadStructure. */
export type ThreadStructureRuntime = Omit<ThreadRuntimeSummary, "updatedAt">;
export declare function threadRuntimeIsActive(runtime: ThreadStructureRuntime | null | undefined): boolean;
export declare function threadRuntimeCanArchive(runtime: ThreadRuntimeSummary | null | undefined): boolean;
export interface EnvironmentThreadShell {
    readonly environmentId: EnvironmentId;
    readonly id: ThreadId;
    readonly projectId: ProjectId;
    readonly title: string;
    readonly providerInstanceId: ProviderInstanceId;
    readonly modelSelection: OrchestrationV2ThreadShell["modelSelection"];
    readonly runtimeMode: OrchestrationV2ThreadShell["runtimeMode"];
    readonly interactionMode: OrchestrationV2ThreadShell["interactionMode"];
    readonly branch: string | null;
    readonly worktreePath: string | null;
    readonly lineage: OrchestrationV2ThreadShell["lineage"];
    readonly forkedFrom: OrchestrationV2ThreadShell["forkedFrom"];
    readonly linkOrigin: OrchestrationV2ThreadShell["linkOrigin"] | null;
    /** The thread in a linked environment that delegated this one, if one did. */
    readonly delegatedFrom: OrchestrationV2ThreadShell["delegatedFrom"] | null;
    readonly activeProviderThreadId: OrchestrationV2ThreadShell["activeProviderThreadId"];
    readonly latestRun: ThreadRunSummary | null;
    readonly runtime: ThreadRuntimeSummary | null;
    readonly blockedOnThreadWait?: boolean;
    readonly latestUserMessageAt: string | null;
    readonly latestUserAuthoredMessageAt?: string | null;
    readonly hasPendingApprovals: boolean;
    readonly hasPendingUserInput: boolean;
    readonly pendingSubagentRequest?: PendingSubagentRequest | null;
    /** Guest messages waiting for the owner to send or dismiss. */
    readonly pendingGuestMessageCount?: number;
    readonly hasActionableProposedPlan: boolean;
    readonly pendingBackgroundTasks: ReadonlyArray<NonNullable<OrchestrationV2ThreadShell["pendingBackgroundTasks"]>[number]>;
    readonly providerInstanceHistory: ReadonlyArray<ProviderInstanceId>;
    readonly goal: OrchestrationV2ProviderGoal | null;
    readonly itemCount: number;
    readonly visibleItemCount: number;
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly archivedAt: string | null;
    readonly settledOverride: "settled" | "active" | null;
    readonly settledAt: string | null;
    readonly unsettledAt: string | null;
    readonly snoozedUntil: string | null;
    readonly snoozedAt: string | null;
    readonly limitRecovery?: import("@t3tools/contracts").OrchestrationV2LimitRecovery | null;
    readonly pinnedAt: string | null;
    readonly autoSettleDisabledAt?: string | null;
    readonly pinOrderKey: string | null;
    readonly activeOrderKey: string | null;
    readonly pullRequests: ReadonlyArray<import("@t3tools/contracts").ThreadPullRequestLink>;
    readonly linkedPullRequest?: ThreadLinkedPullRequest | null;
    readonly branchPullRequest?: ThreadLinkedPullRequest | null;
    /**
     * Server-tracked visited watermark. `undefined` means the environment's
     * server predates visited tracking and clients should fall back to any
     * local visited state they keep.
     */
    readonly lastVisitedAt?: string | null;
    /** Server-tracked open history for search ranking. */
    readonly opens?: import("@t3tools/contracts").OrchestrationV2ThreadOpens | null;
    readonly titleRegeneration?: {
        readonly requestId: string;
        readonly startedAt: string;
    } | null;
    readonly deletedAt: string | null;
    readonly source: OrchestrationV2ThreadShell;
}
export declare function scopeProject(environmentId: EnvironmentId, project: OrchestrationProjectShell): EnvironmentProject;
export type PendingSubagentRequest = "approval" | "user_input";
export declare function presentThreadShell(environmentId: EnvironmentId, thread: OrchestrationV2ThreadShell, pendingSubagentRequest?: PendingSubagentRequest | null): EnvironmentThreadShell;
export declare function scopeThreadShell(environmentId: EnvironmentId, thread: OrchestrationV2ThreadShell): EnvironmentThreadShell;
export declare function resolveThreadProviderStack(thread: Pick<EnvironmentThreadShell, "providerInstanceHistory" | "modelSelection" | "runtime">): ReadonlyArray<ProviderInstanceId>;
/**
 * Both shell and detail timers count from the activity-owning run's work
 * start, never last activity. A wake keeps the start of the work it continues.
 */
export declare function resolveThreadWorkingStartedAt(input: {
    readonly latestRun: Pick<ThreadRunSummary, "runId" | "startedAt" | "requestedAt" | "completedAt"> | null;
    readonly runtime: Pick<ThreadRuntimeSummary, "activeRunId" | "activityStartedAt"> | null;
}): string | null;
export declare function formatWorkingDurationLabel(elapsedMs: number): string;
export {};
