import type { ApplicationStoredEvent, OrchestrationProjectShell, OrchestrationV2ArchivedShellStreamItem, OrchestrationV2OlderSettledCount, OrchestrationV2OlderSettledThreads, OrchestrationV2ShellSnapshot, OrchestrationV2ThreadShell, OrchestrationV2ThreadShellSnapshot, OrchestrationV2ShellStreamItem, OrchestrationV2StoredEvent, ThreadId } from "@t3tools/contracts";
import type * as Cause from "effect/Cause";
import * as DateTime from "effect/DateTime";
import * as Effect from "effect/Effect";
import type * as SqlClient from "effect/sql/SqlClient";
import * as Stream from "effect/Stream";
type ShellDelta = Extract<OrchestrationV2ShellStreamItem, {
    readonly sequence: number;
}>;
/** Snapshots, synchronization, and enrichment markers must bypass full-state coalescing. */
export declare const bufferShellLiveStream: <E, R>(source: Stream.Stream<ShellDelta, E, R>, limits?: {
    readonly maxItems?: number;
    readonly maxSerializedBytes?: number;
}) => Stream.Stream<ShellDelta, import("./LiveStreamBudget.ts").LiveStreamBufferError | Exclude<Exclude<E, Cause.Done<any>>, Cause.Done<any>>, Exclude<R, import("effect/Scope").Scope>>;
export declare function buildActiveShellSnapshot(input: {
    readonly projects: ReadonlyArray<OrchestrationProjectShell>;
    readonly threads: OrchestrationV2ThreadShellSnapshot;
    readonly snapshotSequence: number;
}): OrchestrationV2ShellSnapshot;
/**
 * Idle subagent children have no sidebar row, so clients that opt in read them from their thread
 * family instead. A child stays while it is live or the parent of another child, so the request
 * and working walks over shell rows never meet a gap in a nested chain.
 */
export declare function omitIdleSubagentShells(threads: ReadonlyArray<OrchestrationV2ThreadShell>): ReadonlyArray<OrchestrationV2ThreadShell>;
/**
 * The active rows a shell subscriber gets, and the subagent ids whose transcript events its stream
 * drops. The ids come from every row, so an omitted child that wakes keeps that filter.
 */
export declare function activeShellRowsForSubscriber(threads: ReadonlyArray<OrchestrationV2ThreadShell>, omitIdleSubagents: boolean): {
    readonly threads: ReadonlyArray<OrchestrationV2ThreadShell>;
    readonly subagentThreadIds: Set<string>;
};
/**
 * Opted-in snapshots keep the 25 newest settled top-level threads (and ties) and count the rest per
 * project in `olderSettled`; clients page them with `getOlderSettledThreads`. Older rows stay while
 * pinned, snoozed, live, or above a kept subagent, so walks over shell rows still find them.
 */
export declare function omitOlderSettledShells(input: {
    readonly threads: ReadonlyArray<OrchestrationV2ThreadShell>;
    readonly snapshotSequence: number;
    readonly now: DateTime.Utc;
}): {
    readonly threads: ReadonlyArray<OrchestrationV2ThreadShell>;
    readonly olderSettled: OrchestrationV2OlderSettledThreads;
};
/**
 * The snapshot a shell subscriber gets for its opt-ins, and the subagent ids whose transcript
 * events its stream drops (from every row, so an omitted child that wakes keeps that filter).
 */
export declare function shellSnapshotForSubscriber(base: OrchestrationV2ShellSnapshot, options: {
    readonly omitIdleSubagents: boolean;
    readonly omitOlderSettled: boolean;
    readonly now: DateTime.Utc;
}): {
    readonly snapshot: OrchestrationV2ShellSnapshot;
    readonly subagentThreadIds: Set<string>;
};
/**
 * One transaction covers the reads so they agree; the threads are decoded after it commits,
 * because the server shares one SQLite connection and decoding a large shell takes longer than
 * reading it.
 */
export declare const loadShellSnapshotParts: <E1, E2, E3, E4>(input: {
    readonly sql: SqlClient.SqlClient;
    readonly readThreads: Effect.Effect<Effect.Effect<OrchestrationV2ThreadShellSnapshot, E2>, E1>;
    readonly listProjects: Effect.Effect<ReadonlyArray<OrchestrationProjectShell>, E3>;
    readonly latestSequence: Effect.Effect<number, E4>;
}) => Effect.Effect<{
    projects: readonly {
        readonly id: string & import("effect/Brand").Brand<"ProjectId">;
        readonly title: string;
        readonly workspaceRoot: string;
        readonly repositoryIdentity?: {
            readonly canonicalKey: string;
            readonly locator: {
                source: "git-remote";
                remoteName: string;
                remoteUrl: string;
            };
            readonly webUrl?: string;
            readonly rootPath?: string;
            readonly displayName?: string;
            readonly provider?: string & import("effect/Brand").Brand<"SourceControlProviderKind">;
            readonly owner?: string;
            readonly name?: string;
            readonly origin?: {
                readonly canonicalKey: string;
                readonly remoteUrl?: string;
                readonly displayName?: string;
            };
        } | null | undefined;
        readonly defaultModelSelection: {
            readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
            readonly model: string;
            readonly options?: readonly {
                id: string;
                value: string | boolean;
            }[];
        } | null;
        readonly defaultThreadEnvMode?: "local" | "worktree" | null | undefined;
        readonly autoPull?: boolean | undefined;
        readonly faviconPath?: string | null | undefined;
        readonly projectIcon?: {
            kind: "lucide";
            name: string;
            color: "amber" | "blue" | "cyan" | "emerald" | "fuchsia" | "gray" | "green" | "indigo" | "lime" | "orange" | "pink" | "purple" | "red" | "rose" | "sky" | "teal" | "violet" | "yellow";
        } | {
            kind: "emoji";
            emoji: string;
        } | {
            kind: "monogram";
            text: string;
            color: "amber" | "blue" | "cyan" | "emerald" | "fuchsia" | "gray" | "green" | "indigo" | "lime" | "orange" | "pink" | "purple" | "red" | "rose" | "sky" | "teal" | "violet" | "yellow";
        } | null | undefined;
        readonly scripts: readonly {
            id: string;
            name: string;
            command: string;
            icon: "build" | "configure" | "debug" | "lint" | "play" | "test";
            runOnWorktreeCreate: boolean;
            runOnSettle?: boolean | undefined;
            async?: boolean | undefined;
            previewUrl?: string | undefined;
            autoOpenPreview?: boolean | undefined;
        }[];
        readonly createdAt: string;
        readonly updatedAt: string;
    }[];
    threads: {
        readonly schemaVersion: number;
        readonly snapshotSequence: number;
        readonly threads: readonly {
            readonly createdBy: "agent" | "system" | "user";
            readonly creationSource: "mcp" | "mobile" | "provider" | "server" | "web";
            readonly id: string & import("effect/Brand").Brand<"ThreadId">;
            readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
            readonly title: string;
            readonly providerInstanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
            readonly modelSelection: {
                readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
                readonly model: string;
                readonly options?: readonly {
                    id: string;
                    value: string | boolean;
                }[];
            };
            readonly runtimeMode: "approval-required" | "auto" | "auto-accept-edits" | "full-access";
            readonly interactionMode: "default" | "plan";
            readonly branch: string | null;
            readonly worktreePath: string | null;
            readonly linkedPullRequest?: {
                projectId: string & import("effect/Brand").Brand<"ProjectId">;
                repository: string;
                number: number;
                url: string;
            } | null | undefined;
            readonly pullRequests?: readonly {
                host: string;
                repository: string;
                number: number;
                readonly url: string;
                readonly repositoryWebUrl?: string | undefined;
                readonly source: "agent" | "created" | "manual" | "stack" | "stack-dismissed";
                readonly linkedAt: string;
                readonly snapshot: {
                    readonly state: "closed" | "merged" | "open";
                    readonly title: string;
                    readonly headBranch: string;
                    readonly baseBranch: string;
                    readonly isDraft: boolean;
                    readonly updatedAt: string | null;
                    readonly syncedAt: string;
                    readonly closedAt?: string | null | undefined;
                    readonly mergedAt?: string | null | undefined;
                    readonly author?: {
                        readonly isBot?: boolean | undefined;
                        readonly login: string;
                        readonly name: string | null;
                        readonly avatarUrl: string | null;
                    } | null | undefined;
                    readonly additions?: number | undefined;
                    readonly deletions?: number | undefined;
                    readonly changedFiles?: number | undefined;
                    readonly reviewDecision?: "approved" | "changes-requested" | "review-required" | null | undefined;
                    readonly checksState?: "failing" | "passing" | "pending" | null | undefined;
                    readonly mergeability?: "conflicting" | "mergeable" | "unknown" | undefined;
                } | null;
                readonly stack: {
                    kind: "native";
                    id: string;
                    number: number;
                    url: string;
                    base: string;
                    layers: readonly {
                        number: number;
                        headBranch: string;
                        state: "closed" | "merged" | "open";
                    }[];
                } | null;
                readonly watch?: {
                    readonly startedAt: string;
                    readonly headSha: string | null;
                    readonly failedChecks: readonly string[];
                    readonly passed: boolean;
                    readonly passedChecks: readonly string[];
                    readonly owedChecks?: readonly string[] | undefined;
                    readonly remarksThrough: string;
                    readonly remarkIds: readonly string[];
                    readonly conflicting: boolean;
                    readonly wakes: number;
                    readonly checksAwaitedSince?: string | null | undefined;
                } | undefined;
                readonly endedWatch?: {
                    readonly startedAt: string;
                    readonly headSha: string | null;
                    readonly failedChecks: readonly string[];
                    readonly passed: boolean;
                    readonly passedChecks: readonly string[];
                    readonly owedChecks?: readonly string[] | undefined;
                    readonly remarksThrough: string;
                    readonly remarkIds: readonly string[];
                    readonly conflicting: boolean;
                    readonly wakes: number;
                    readonly checksAwaitedSince?: string | null | undefined;
                } | undefined;
            }[] | undefined;
            readonly branchPullRequest?: {
                projectId: string & import("effect/Brand").Brand<"ProjectId">;
                repository: string;
                number: number;
                url: string;
            } | null | undefined;
            readonly lineage: {
                readonly parentThreadId: (string & import("effect/Brand").Brand<"ThreadId">) | null;
                readonly relationshipToParent: "fork" | "subagent" | null;
                readonly rootThreadId: string & import("effect/Brand").Brand<"ThreadId">;
            };
            readonly forkedFrom: {
                readonly type: "run";
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly runId: string & import("effect/Brand").Brand<"RunId">;
            } | {
                readonly type: "node";
                readonly nodeId: string & import("effect/Brand").Brand<"NodeId">;
            } | {
                readonly type: "provider_thread";
                readonly providerThreadId: string & import("effect/Brand").Brand<"ProviderThreadId">;
                readonly providerTurnId?: (string & import("effect/Brand").Brand<"ProviderTurnId">) | undefined;
            } | null;
            readonly activeProviderThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
            readonly historyOrigin?: "native" | "v1_import" | undefined;
            readonly linkOrigin?: {
                readonly sessionId: string;
                readonly label: string;
                readonly access?: "approval-required" | "auto" | "auto-accept-edits" | "full-access" | "read-only" | undefined;
            } | undefined;
            readonly delegatedFrom?: {
                readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly title: string;
            } | undefined;
            readonly latestRunId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly latestRunRequestedAt?: DateTime.Utc | null | undefined;
            readonly latestRunStartedAt?: DateTime.Utc | null | undefined;
            readonly latestRunCompletedAt?: DateTime.Utc | null | undefined;
            readonly latestRunStopRequested?: boolean | undefined;
            readonly activeRunId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly activityRunStartedAt?: DateTime.Utc | null | undefined;
            readonly activityRunStatus?: "preparing" | "running" | "starting" | "waiting" | null | undefined;
            readonly blockedOnThreadWait?: boolean | undefined;
            readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "preparing" | "queued" | "rolled_back" | "running" | "starting" | "waiting";
            readonly lastError?: string | null | undefined;
            readonly lastErrorClass?: "permission_error" | "provider_error" | "transport_error" | "unknown" | "usage_limit" | "validation_error" | null | undefined;
            readonly lastErrorCode?: string | null | undefined;
            readonly usageLimitResetAt?: string | null | undefined;
            readonly pendingRuntimeRequest: {
                readonly id: string & import("effect/Brand").Brand<"RuntimeRequestId">;
                readonly kind: "auth_refresh" | "command" | "dynamic_tool_call" | "file-change" | "file-read" | "mcp-elicitation" | "permission" | "user_input";
                readonly createdAt: DateTime.Utc;
                readonly blocking?: boolean | undefined;
            } | null;
            readonly pendingGuestMessageCount?: number | undefined;
            readonly latestVisibleMessage: {
                readonly id: string & import("effect/Brand").Brand<"MessageId">;
                readonly role: "assistant" | "system" | "user";
                readonly text: string;
                readonly updatedAt: DateTime.Utc;
            } | null;
            readonly latestUserMessageAt: DateTime.Utc | null;
            readonly latestUserAuthoredMessageAt?: DateTime.Utc | null | undefined;
            readonly hasActionableProposedPlan: boolean;
            readonly pendingBackgroundTasks?: readonly ({
                readonly taskId: string;
                readonly description?: string | undefined;
                readonly parentTaskId?: string | undefined;
                readonly awaited?: true | undefined;
                readonly kind: "subagent";
                readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
                readonly childThreadId?: (string & import("effect/Brand").Brand<"ThreadId">) | undefined;
            } | {
                readonly taskId: string;
                readonly description?: string | undefined;
                readonly parentTaskId?: string | undefined;
                readonly awaited?: true | undefined;
                readonly kind: "command";
            } | {
                readonly taskId: string;
                readonly description?: string | undefined;
                readonly parentTaskId?: string | undefined;
                readonly awaited?: true | undefined;
                readonly kind: "monitor";
            } | {
                readonly taskId: string;
                readonly description?: string | undefined;
                readonly parentTaskId?: string | undefined;
                readonly awaited?: true | undefined;
                readonly kind: "background_task";
            })[] | undefined;
            readonly providerInstanceHistory?: readonly (string & import("effect/Brand").Brand<"ProviderInstanceId">)[] | undefined;
            readonly goal?: {
                readonly objective: string;
                readonly status: "active" | "blocked" | "budget_limited" | "complete" | "paused" | "usage_limited";
                readonly tokensUsed?: number | undefined;
                readonly tokenBudget?: number | null | undefined;
                readonly timeUsedSeconds?: number | undefined;
                readonly checks?: number | undefined;
                readonly lastCheck?: string | undefined;
            } | null | undefined;
            readonly itemCount: number;
            readonly visibleItemCount: number;
            readonly createdAt: DateTime.Utc;
            readonly updatedAt: DateTime.Utc;
            readonly archivedAt: DateTime.Utc | null;
            readonly settledOverride: "active" | "settled" | null;
            readonly settledAt: DateTime.Utc | null;
            readonly unsettledAt?: DateTime.Utc | null | undefined;
            readonly snoozedUntil?: DateTime.Utc | null | undefined;
            readonly snoozedAt?: DateTime.Utc | null | undefined;
            readonly limitRecovery?: {
                readonly requestId?: (string & import("effect/Brand").Brand<"CommandId">) | undefined;
                readonly runId: string & import("effect/Brand").Brand<"RunId">;
                readonly resetAt: string;
                readonly autoResume: boolean;
                readonly snooze?: boolean | undefined;
            } | null | undefined;
            readonly pinnedAt?: DateTime.Utc | null | undefined;
            readonly autoSettleDisabledAt?: DateTime.Utc | null | undefined;
            readonly pinOrderKey?: string | null | undefined;
            readonly activeOrderKey?: string | null | undefined;
            readonly lastVisitedAt?: DateTime.Utc | null | undefined;
            readonly opens?: {
                readonly openedAt: number;
                readonly score: number;
                readonly picks: readonly {
                    readonly query: string;
                    readonly at: number;
                }[];
            } | null | undefined;
            readonly titleRegeneration?: {
                readonly requestId: string & import("effect/Brand").Brand<"CommandId">;
                readonly startedAt: DateTime.Utc;
            } | null | undefined;
            readonly deletedAt: DateTime.Utc | null;
        }[];
        readonly archivedThreads: readonly {
            readonly createdBy: "agent" | "system" | "user";
            readonly creationSource: "mcp" | "mobile" | "provider" | "server" | "web";
            readonly id: string & import("effect/Brand").Brand<"ThreadId">;
            readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
            readonly title: string;
            readonly providerInstanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
            readonly modelSelection: {
                readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
                readonly model: string;
                readonly options?: readonly {
                    id: string;
                    value: string | boolean;
                }[];
            };
            readonly runtimeMode: "approval-required" | "auto" | "auto-accept-edits" | "full-access";
            readonly interactionMode: "default" | "plan";
            readonly branch: string | null;
            readonly worktreePath: string | null;
            readonly linkedPullRequest?: {
                projectId: string & import("effect/Brand").Brand<"ProjectId">;
                repository: string;
                number: number;
                url: string;
            } | null | undefined;
            readonly pullRequests?: readonly {
                host: string;
                repository: string;
                number: number;
                readonly url: string;
                readonly repositoryWebUrl?: string | undefined;
                readonly source: "agent" | "created" | "manual" | "stack" | "stack-dismissed";
                readonly linkedAt: string;
                readonly snapshot: {
                    readonly state: "closed" | "merged" | "open";
                    readonly title: string;
                    readonly headBranch: string;
                    readonly baseBranch: string;
                    readonly isDraft: boolean;
                    readonly updatedAt: string | null;
                    readonly syncedAt: string;
                    readonly closedAt?: string | null | undefined;
                    readonly mergedAt?: string | null | undefined;
                    readonly author?: {
                        readonly isBot?: boolean | undefined;
                        readonly login: string;
                        readonly name: string | null;
                        readonly avatarUrl: string | null;
                    } | null | undefined;
                    readonly additions?: number | undefined;
                    readonly deletions?: number | undefined;
                    readonly changedFiles?: number | undefined;
                    readonly reviewDecision?: "approved" | "changes-requested" | "review-required" | null | undefined;
                    readonly checksState?: "failing" | "passing" | "pending" | null | undefined;
                    readonly mergeability?: "conflicting" | "mergeable" | "unknown" | undefined;
                } | null;
                readonly stack: {
                    kind: "native";
                    id: string;
                    number: number;
                    url: string;
                    base: string;
                    layers: readonly {
                        number: number;
                        headBranch: string;
                        state: "closed" | "merged" | "open";
                    }[];
                } | null;
                readonly watch?: {
                    readonly startedAt: string;
                    readonly headSha: string | null;
                    readonly failedChecks: readonly string[];
                    readonly passed: boolean;
                    readonly passedChecks: readonly string[];
                    readonly owedChecks?: readonly string[] | undefined;
                    readonly remarksThrough: string;
                    readonly remarkIds: readonly string[];
                    readonly conflicting: boolean;
                    readonly wakes: number;
                    readonly checksAwaitedSince?: string | null | undefined;
                } | undefined;
                readonly endedWatch?: {
                    readonly startedAt: string;
                    readonly headSha: string | null;
                    readonly failedChecks: readonly string[];
                    readonly passed: boolean;
                    readonly passedChecks: readonly string[];
                    readonly owedChecks?: readonly string[] | undefined;
                    readonly remarksThrough: string;
                    readonly remarkIds: readonly string[];
                    readonly conflicting: boolean;
                    readonly wakes: number;
                    readonly checksAwaitedSince?: string | null | undefined;
                } | undefined;
            }[] | undefined;
            readonly branchPullRequest?: {
                projectId: string & import("effect/Brand").Brand<"ProjectId">;
                repository: string;
                number: number;
                url: string;
            } | null | undefined;
            readonly lineage: {
                readonly parentThreadId: (string & import("effect/Brand").Brand<"ThreadId">) | null;
                readonly relationshipToParent: "fork" | "subagent" | null;
                readonly rootThreadId: string & import("effect/Brand").Brand<"ThreadId">;
            };
            readonly forkedFrom: {
                readonly type: "run";
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly runId: string & import("effect/Brand").Brand<"RunId">;
            } | {
                readonly type: "node";
                readonly nodeId: string & import("effect/Brand").Brand<"NodeId">;
            } | {
                readonly type: "provider_thread";
                readonly providerThreadId: string & import("effect/Brand").Brand<"ProviderThreadId">;
                readonly providerTurnId?: (string & import("effect/Brand").Brand<"ProviderTurnId">) | undefined;
            } | null;
            readonly activeProviderThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
            readonly historyOrigin?: "native" | "v1_import" | undefined;
            readonly linkOrigin?: {
                readonly sessionId: string;
                readonly label: string;
                readonly access?: "approval-required" | "auto" | "auto-accept-edits" | "full-access" | "read-only" | undefined;
            } | undefined;
            readonly delegatedFrom?: {
                readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly title: string;
            } | undefined;
            readonly latestRunId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly latestRunRequestedAt?: DateTime.Utc | null | undefined;
            readonly latestRunStartedAt?: DateTime.Utc | null | undefined;
            readonly latestRunCompletedAt?: DateTime.Utc | null | undefined;
            readonly latestRunStopRequested?: boolean | undefined;
            readonly activeRunId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly activityRunStartedAt?: DateTime.Utc | null | undefined;
            readonly activityRunStatus?: "preparing" | "running" | "starting" | "waiting" | null | undefined;
            readonly blockedOnThreadWait?: boolean | undefined;
            readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "preparing" | "queued" | "rolled_back" | "running" | "starting" | "waiting";
            readonly lastError?: string | null | undefined;
            readonly lastErrorClass?: "permission_error" | "provider_error" | "transport_error" | "unknown" | "usage_limit" | "validation_error" | null | undefined;
            readonly lastErrorCode?: string | null | undefined;
            readonly usageLimitResetAt?: string | null | undefined;
            readonly pendingRuntimeRequest: {
                readonly id: string & import("effect/Brand").Brand<"RuntimeRequestId">;
                readonly kind: "auth_refresh" | "command" | "dynamic_tool_call" | "file-change" | "file-read" | "mcp-elicitation" | "permission" | "user_input";
                readonly createdAt: DateTime.Utc;
                readonly blocking?: boolean | undefined;
            } | null;
            readonly pendingGuestMessageCount?: number | undefined;
            readonly latestVisibleMessage: {
                readonly id: string & import("effect/Brand").Brand<"MessageId">;
                readonly role: "assistant" | "system" | "user";
                readonly text: string;
                readonly updatedAt: DateTime.Utc;
            } | null;
            readonly latestUserMessageAt: DateTime.Utc | null;
            readonly latestUserAuthoredMessageAt?: DateTime.Utc | null | undefined;
            readonly hasActionableProposedPlan: boolean;
            readonly pendingBackgroundTasks?: readonly ({
                readonly taskId: string;
                readonly description?: string | undefined;
                readonly parentTaskId?: string | undefined;
                readonly awaited?: true | undefined;
                readonly kind: "subagent";
                readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
                readonly childThreadId?: (string & import("effect/Brand").Brand<"ThreadId">) | undefined;
            } | {
                readonly taskId: string;
                readonly description?: string | undefined;
                readonly parentTaskId?: string | undefined;
                readonly awaited?: true | undefined;
                readonly kind: "command";
            } | {
                readonly taskId: string;
                readonly description?: string | undefined;
                readonly parentTaskId?: string | undefined;
                readonly awaited?: true | undefined;
                readonly kind: "monitor";
            } | {
                readonly taskId: string;
                readonly description?: string | undefined;
                readonly parentTaskId?: string | undefined;
                readonly awaited?: true | undefined;
                readonly kind: "background_task";
            })[] | undefined;
            readonly providerInstanceHistory?: readonly (string & import("effect/Brand").Brand<"ProviderInstanceId">)[] | undefined;
            readonly goal?: {
                readonly objective: string;
                readonly status: "active" | "blocked" | "budget_limited" | "complete" | "paused" | "usage_limited";
                readonly tokensUsed?: number | undefined;
                readonly tokenBudget?: number | null | undefined;
                readonly timeUsedSeconds?: number | undefined;
                readonly checks?: number | undefined;
                readonly lastCheck?: string | undefined;
            } | null | undefined;
            readonly itemCount: number;
            readonly visibleItemCount: number;
            readonly createdAt: DateTime.Utc;
            readonly updatedAt: DateTime.Utc;
            readonly archivedAt: DateTime.Utc | null;
            readonly settledOverride: "active" | "settled" | null;
            readonly settledAt: DateTime.Utc | null;
            readonly unsettledAt?: DateTime.Utc | null | undefined;
            readonly snoozedUntil?: DateTime.Utc | null | undefined;
            readonly snoozedAt?: DateTime.Utc | null | undefined;
            readonly limitRecovery?: {
                readonly requestId?: (string & import("effect/Brand").Brand<"CommandId">) | undefined;
                readonly runId: string & import("effect/Brand").Brand<"RunId">;
                readonly resetAt: string;
                readonly autoResume: boolean;
                readonly snooze?: boolean | undefined;
            } | null | undefined;
            readonly pinnedAt?: DateTime.Utc | null | undefined;
            readonly autoSettleDisabledAt?: DateTime.Utc | null | undefined;
            readonly pinOrderKey?: string | null | undefined;
            readonly activeOrderKey?: string | null | undefined;
            readonly lastVisitedAt?: DateTime.Utc | null | undefined;
            readonly opens?: {
                readonly openedAt: number;
                readonly score: number;
                readonly picks: readonly {
                    readonly query: string;
                    readonly at: number;
                }[];
            } | null | undefined;
            readonly titleRegeneration?: {
                readonly requestId: string & import("effect/Brand").Brand<"CommandId">;
                readonly startedAt: DateTime.Utc;
            } | null | undefined;
            readonly deletedAt: DateTime.Utc | null;
        }[];
    };
    snapshotSequence: number;
}, E1 | E2 | E3 | E4 | import("effect/sql/SqlError").SqlError, never>;
/** A page of older settled threads, read and decoded like `loadShellSnapshotParts`. */
export declare const loadOlderSettledThreadsPage: <E1, E2, E3, E4>(input: {
    readonly sql: SqlClient.SqlClient;
    readonly listThreads: Effect.Effect<{
        readonly threadIds: ReadonlyArray<ThreadId>;
        readonly counts: ReadonlyArray<OrchestrationV2OlderSettledCount>;
    }, E1>;
    readonly readThreads: (threadIds: ReadonlyArray<ThreadId>) => Effect.Effect<Effect.Effect<OrchestrationV2ThreadShellSnapshot, E3>, E2>;
    readonly latestSequence: Effect.Effect<number, E4>;
}) => Effect.Effect<{
    snapshotSequence: number;
    threads: {
        readonly createdBy: "agent" | "system" | "user";
        readonly creationSource: "mcp" | "mobile" | "provider" | "server" | "web";
        readonly id: string & import("effect/Brand").Brand<"ThreadId">;
        readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
        readonly title: string;
        readonly providerInstanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly modelSelection: {
            readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
            readonly model: string;
            readonly options?: readonly {
                id: string;
                value: string | boolean;
            }[];
        };
        readonly runtimeMode: "approval-required" | "auto" | "auto-accept-edits" | "full-access";
        readonly interactionMode: "default" | "plan";
        readonly branch: string | null;
        readonly worktreePath: string | null;
        readonly linkedPullRequest?: {
            projectId: string & import("effect/Brand").Brand<"ProjectId">;
            repository: string;
            number: number;
            url: string;
        } | null | undefined;
        readonly pullRequests?: readonly {
            host: string;
            repository: string;
            number: number;
            readonly url: string;
            readonly repositoryWebUrl?: string | undefined;
            readonly source: "agent" | "created" | "manual" | "stack" | "stack-dismissed";
            readonly linkedAt: string;
            readonly snapshot: {
                readonly state: "closed" | "merged" | "open";
                readonly title: string;
                readonly headBranch: string;
                readonly baseBranch: string;
                readonly isDraft: boolean;
                readonly updatedAt: string | null;
                readonly syncedAt: string;
                readonly closedAt?: string | null | undefined;
                readonly mergedAt?: string | null | undefined;
                readonly author?: {
                    readonly isBot?: boolean | undefined;
                    readonly login: string;
                    readonly name: string | null;
                    readonly avatarUrl: string | null;
                } | null | undefined;
                readonly additions?: number | undefined;
                readonly deletions?: number | undefined;
                readonly changedFiles?: number | undefined;
                readonly reviewDecision?: "approved" | "changes-requested" | "review-required" | null | undefined;
                readonly checksState?: "failing" | "passing" | "pending" | null | undefined;
                readonly mergeability?: "conflicting" | "mergeable" | "unknown" | undefined;
            } | null;
            readonly stack: {
                kind: "native";
                id: string;
                number: number;
                url: string;
                base: string;
                layers: readonly {
                    number: number;
                    headBranch: string;
                    state: "closed" | "merged" | "open";
                }[];
            } | null;
            readonly watch?: {
                readonly startedAt: string;
                readonly headSha: string | null;
                readonly failedChecks: readonly string[];
                readonly passed: boolean;
                readonly passedChecks: readonly string[];
                readonly owedChecks?: readonly string[] | undefined;
                readonly remarksThrough: string;
                readonly remarkIds: readonly string[];
                readonly conflicting: boolean;
                readonly wakes: number;
                readonly checksAwaitedSince?: string | null | undefined;
            } | undefined;
            readonly endedWatch?: {
                readonly startedAt: string;
                readonly headSha: string | null;
                readonly failedChecks: readonly string[];
                readonly passed: boolean;
                readonly passedChecks: readonly string[];
                readonly owedChecks?: readonly string[] | undefined;
                readonly remarksThrough: string;
                readonly remarkIds: readonly string[];
                readonly conflicting: boolean;
                readonly wakes: number;
                readonly checksAwaitedSince?: string | null | undefined;
            } | undefined;
        }[] | undefined;
        readonly branchPullRequest?: {
            projectId: string & import("effect/Brand").Brand<"ProjectId">;
            repository: string;
            number: number;
            url: string;
        } | null | undefined;
        readonly lineage: {
            readonly parentThreadId: (string & import("effect/Brand").Brand<"ThreadId">) | null;
            readonly relationshipToParent: "fork" | "subagent" | null;
            readonly rootThreadId: string & import("effect/Brand").Brand<"ThreadId">;
        };
        readonly forkedFrom: {
            readonly type: "run";
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId: string & import("effect/Brand").Brand<"RunId">;
        } | {
            readonly type: "node";
            readonly nodeId: string & import("effect/Brand").Brand<"NodeId">;
        } | {
            readonly type: "provider_thread";
            readonly providerThreadId: string & import("effect/Brand").Brand<"ProviderThreadId">;
            readonly providerTurnId?: (string & import("effect/Brand").Brand<"ProviderTurnId">) | undefined;
        } | null;
        readonly activeProviderThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly historyOrigin?: "native" | "v1_import" | undefined;
        readonly linkOrigin?: {
            readonly sessionId: string;
            readonly label: string;
            readonly access?: "approval-required" | "auto" | "auto-accept-edits" | "full-access" | "read-only" | undefined;
        } | undefined;
        readonly delegatedFrom?: {
            readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly title: string;
        } | undefined;
        readonly latestRunId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly latestRunRequestedAt?: DateTime.Utc | null | undefined;
        readonly latestRunStartedAt?: DateTime.Utc | null | undefined;
        readonly latestRunCompletedAt?: DateTime.Utc | null | undefined;
        readonly latestRunStopRequested?: boolean | undefined;
        readonly activeRunId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly activityRunStartedAt?: DateTime.Utc | null | undefined;
        readonly activityRunStatus?: "preparing" | "running" | "starting" | "waiting" | null | undefined;
        readonly blockedOnThreadWait?: boolean | undefined;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "preparing" | "queued" | "rolled_back" | "running" | "starting" | "waiting";
        readonly lastError?: string | null | undefined;
        readonly lastErrorClass?: "permission_error" | "provider_error" | "transport_error" | "unknown" | "usage_limit" | "validation_error" | null | undefined;
        readonly lastErrorCode?: string | null | undefined;
        readonly usageLimitResetAt?: string | null | undefined;
        readonly pendingRuntimeRequest: {
            readonly id: string & import("effect/Brand").Brand<"RuntimeRequestId">;
            readonly kind: "auth_refresh" | "command" | "dynamic_tool_call" | "file-change" | "file-read" | "mcp-elicitation" | "permission" | "user_input";
            readonly createdAt: DateTime.Utc;
            readonly blocking?: boolean | undefined;
        } | null;
        readonly pendingGuestMessageCount?: number | undefined;
        readonly latestVisibleMessage: {
            readonly id: string & import("effect/Brand").Brand<"MessageId">;
            readonly role: "assistant" | "system" | "user";
            readonly text: string;
            readonly updatedAt: DateTime.Utc;
        } | null;
        readonly latestUserMessageAt: DateTime.Utc | null;
        readonly latestUserAuthoredMessageAt?: DateTime.Utc | null | undefined;
        readonly hasActionableProposedPlan: boolean;
        readonly pendingBackgroundTasks?: readonly ({
            readonly taskId: string;
            readonly description?: string | undefined;
            readonly parentTaskId?: string | undefined;
            readonly awaited?: true | undefined;
            readonly kind: "subagent";
            readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
            readonly childThreadId?: (string & import("effect/Brand").Brand<"ThreadId">) | undefined;
        } | {
            readonly taskId: string;
            readonly description?: string | undefined;
            readonly parentTaskId?: string | undefined;
            readonly awaited?: true | undefined;
            readonly kind: "command";
        } | {
            readonly taskId: string;
            readonly description?: string | undefined;
            readonly parentTaskId?: string | undefined;
            readonly awaited?: true | undefined;
            readonly kind: "monitor";
        } | {
            readonly taskId: string;
            readonly description?: string | undefined;
            readonly parentTaskId?: string | undefined;
            readonly awaited?: true | undefined;
            readonly kind: "background_task";
        })[] | undefined;
        readonly providerInstanceHistory?: readonly (string & import("effect/Brand").Brand<"ProviderInstanceId">)[] | undefined;
        readonly goal?: {
            readonly objective: string;
            readonly status: "active" | "blocked" | "budget_limited" | "complete" | "paused" | "usage_limited";
            readonly tokensUsed?: number | undefined;
            readonly tokenBudget?: number | null | undefined;
            readonly timeUsedSeconds?: number | undefined;
            readonly checks?: number | undefined;
            readonly lastCheck?: string | undefined;
        } | null | undefined;
        readonly itemCount: number;
        readonly visibleItemCount: number;
        readonly createdAt: DateTime.Utc;
        readonly updatedAt: DateTime.Utc;
        readonly archivedAt: DateTime.Utc | null;
        readonly settledOverride: "active" | "settled" | null;
        readonly settledAt: DateTime.Utc | null;
        readonly unsettledAt?: DateTime.Utc | null | undefined;
        readonly snoozedUntil?: DateTime.Utc | null | undefined;
        readonly snoozedAt?: DateTime.Utc | null | undefined;
        readonly limitRecovery?: {
            readonly requestId?: (string & import("effect/Brand").Brand<"CommandId">) | undefined;
            readonly runId: string & import("effect/Brand").Brand<"RunId">;
            readonly resetAt: string;
            readonly autoResume: boolean;
            readonly snooze?: boolean | undefined;
        } | null | undefined;
        readonly pinnedAt?: DateTime.Utc | null | undefined;
        readonly autoSettleDisabledAt?: DateTime.Utc | null | undefined;
        readonly pinOrderKey?: string | null | undefined;
        readonly activeOrderKey?: string | null | undefined;
        readonly lastVisitedAt?: DateTime.Utc | null | undefined;
        readonly opens?: {
            readonly openedAt: number;
            readonly score: number;
            readonly picks: readonly {
                readonly query: string;
                readonly at: number;
            }[];
        } | null | undefined;
        readonly titleRegeneration?: {
            readonly requestId: string & import("effect/Brand").Brand<"CommandId">;
            readonly startedAt: DateTime.Utc;
        } | null | undefined;
        readonly deletedAt: DateTime.Utc | null;
    }[];
    counts: readonly {
        readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
        readonly count: number;
    }[];
}, E1 | E2 | E3 | E4 | import("effect/sql/SqlError").SqlError, never>;
export type ShellApplicationEvent = Pick<Extract<ApplicationStoredEvent, {
    readonly aggregateKind: "project";
}>, "aggregateKind" | "aggregateId" | "type" | "sequence"> | {
    readonly sequence: number;
    readonly event: Pick<OrchestrationV2StoredEvent["event"], "threadId">;
};
/** Focused subagents receive these updates through their thread subscription. */
export declare function shouldPublishShellApplicationEvent(stored: ApplicationStoredEvent, subagentThreadIds: Set<string>): boolean;
/** Shell updates refetch an aggregate; drop transcript bodies before retaining an event. */
export declare function toShellApplicationEvent(stored: ApplicationStoredEvent): ShellApplicationEvent;
export declare function coalesceShellApplicationEvents<A extends ShellApplicationEvent>(events: ReadonlyArray<A>): ReadonlyArray<A>;
/** Emit the authoritative initial snapshot before marked enrichment. */
export declare function composeShellStreamWithEnrichment<A, E, R, A2, E2, R2, A3, E3, R3>(input: {
    readonly initial: Stream.Stream<A, E, R>;
    readonly tail: Stream.Stream<A2, E2, R2>;
    readonly enrichment: Stream.Stream<A3, E3, R3>;
}): Stream.Stream<A | A2 | A3, E | E2 | E3, R | R2 | R3>;
export declare function dedupeShellEnrichment<E, R>(stream: Stream.Stream<OrchestrationV2ShellStreamItem, E, R>): Stream.Stream<OrchestrationV2ShellStreamItem, E, R>;
export declare function shellStreamItemFromEnrichmentRefresh(input: {
    readonly snapshot: OrchestrationV2ShellSnapshot;
    readonly changes: ReadonlyArray<{
        readonly workspaceRoot: string;
    }>;
}): Extract<OrchestrationV2ShellStreamItem, {
    readonly kind: "snapshot";
}>;
export declare function shellStreamItemsFromInitialSnapshot(input: {
    readonly snapshot: OrchestrationV2ShellSnapshot;
    readonly resolvedRepositoryIdentityRoots: ReadonlyArray<string>;
}): ReadonlyArray<Extract<OrchestrationV2ShellStreamItem, {
    readonly kind: "snapshot";
}>>;
export declare function shellStreamItemsFromResumeSnapshot(input: {
    readonly snapshot: OrchestrationV2ShellSnapshot;
    readonly resolvedRepositoryIdentityRoots: ReadonlyArray<string>;
}): ReadonlyArray<Extract<OrchestrationV2ShellStreamItem, {
    readonly kind: "snapshot";
}>>;
/** Resend unchanged shells after UNCHANGED_THREAD_SHELL_RESEND_MS so skipped deltas cannot leave resume cursors behind. */
export declare function skipUnchangedThreadShells<A extends OrchestrationV2ShellStreamItem, E, R>(stream: Stream.Stream<A, E, R>): Stream.Stream<A, E, R>;
export declare function coalesceStoredThreadEvents(events: ReadonlyArray<OrchestrationV2StoredEvent>): ReadonlyArray<OrchestrationV2StoredEvent>;
export declare function shellStreamItemFromThreadShell(input: {
    readonly stored: Extract<ShellApplicationEvent, {
        readonly event: unknown;
    }>;
    readonly shell: OrchestrationV2ThreadShell | null;
}): Extract<OrchestrationV2ShellStreamItem, {
    readonly kind: "thread.updated" | "thread.removed";
}>;
export declare function archivedShellStreamItemFromThreadShell(input: {
    readonly stored: OrchestrationV2StoredEvent;
    readonly shell: OrchestrationV2ThreadShell | null;
}): Exclude<OrchestrationV2ArchivedShellStreamItem, {
    readonly kind: "snapshot";
}> | null;
export {};
