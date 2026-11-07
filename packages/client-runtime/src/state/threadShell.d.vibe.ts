import type { EnvironmentId, OrchestrationV2ShellSnapshot, ScopedProjectRef, ScopedThreadRef } from "@t3tools/contracts";
import { OrchestrationV2ThreadShell } from "@t3tools/contracts";
import { Atom } from "effect/reactivity";
import type { EnvironmentThreadShell, PendingSubagentRequest } from "./models.vibe";
import { type EnvironmentCatalogState } from "./connections.vibe";
/**
 * Whether a thread shows under its parent rather than in thread lists: a
 * subagent, or a task a linked environment delegated here whose parent the
 * client lists (`delegatedUnderParent`, by thread key). A task whose parent
 * the client cannot list stays in the lists, so its work is never out of reach.
 * @throws {never}
 */
export declare function isShownUnderParent(ref: ScopedThreadRef, lineage: OrchestrationV2ThreadShell["lineage"], delegatedUnderParent: ReadonlySet<string>): boolean;
/** @throws {never} */
export declare function childThreadInputsTitle(children: ReadonlyArray<Pick<EnvironmentThreadShell, "hasPendingApprovals">>): string;
/** @throws {never} */
export declare function createEnvironmentThreadShellAtoms(input: {
    readonly catalogValueAtom: Atom.Atom<EnvironmentCatalogState>;
    /** @throws {never} */
    readonly snapshotAtom: (environmentId: EnvironmentId) => Atom.Atom<OrchestrationV2ShellSnapshot | null>;
}): {
    environmentThreadsAtom: (arg: string & import("effect/Brand").Brand<"EnvironmentId">) => Atom.Atom<readonly {
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
                readonly id: string;
                readonly value: string | boolean;
            }[];
        };
        readonly runtimeMode: "approval-required" | "auto" | "auto-accept-edits" | "full-access";
        readonly interactionMode: "default" | "plan";
        readonly branch: string | null;
        readonly worktreePath: string | null;
        readonly linkedPullRequest?: {
            readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
            readonly repository: string;
            readonly number: number;
            readonly url: string;
        } | null | undefined;
        readonly pullRequests?: readonly {
            readonly host: string;
            readonly repository: string;
            readonly number: number;
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
                readonly kind: "native";
                readonly id: string;
                readonly number: number;
                readonly url: string;
                readonly base: string;
                readonly layers: readonly {
                    readonly number: number;
                    readonly headBranch: string;
                    readonly state: "closed" | "merged" | "open";
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
            readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
            readonly repository: string;
            readonly number: number;
            readonly url: string;
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
        readonly latestRunRequestedAt?: import("effect/DateTime").Utc | null | undefined;
        readonly latestRunStartedAt?: import("effect/DateTime").Utc | null | undefined;
        readonly latestRunCompletedAt?: import("effect/DateTime").Utc | null | undefined;
        readonly latestRunStopRequested?: boolean | undefined;
        readonly activeRunId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly activityRunStartedAt?: import("effect/DateTime").Utc | null | undefined;
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
            readonly createdAt: import("effect/DateTime").Utc;
            readonly blocking?: boolean | undefined;
        } | null;
        readonly pendingGuestMessageCount?: number | undefined;
        readonly latestVisibleMessage: {
            readonly id: string & import("effect/Brand").Brand<"MessageId">;
            readonly role: "assistant" | "system" | "user";
            readonly text: string;
            readonly updatedAt: import("effect/DateTime").Utc;
        } | null;
        readonly latestUserMessageAt: import("effect/DateTime").Utc | null;
        readonly latestUserAuthoredMessageAt?: import("effect/DateTime").Utc | null | undefined;
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
        readonly createdAt: import("effect/DateTime").Utc;
        readonly updatedAt: import("effect/DateTime").Utc;
        readonly archivedAt: import("effect/DateTime").Utc | null;
        readonly settledOverride: "active" | "settled" | null;
        readonly settledAt: import("effect/DateTime").Utc | null;
        readonly unsettledAt?: import("effect/DateTime").Utc | null | undefined;
        readonly snoozedUntil?: import("effect/DateTime").Utc | null | undefined;
        readonly snoozedAt?: import("effect/DateTime").Utc | null | undefined;
        readonly limitRecovery?: {
            readonly requestId?: (string & import("effect/Brand").Brand<"CommandId">) | undefined;
            readonly runId: string & import("effect/Brand").Brand<"RunId">;
            readonly resetAt: string;
            readonly autoResume: boolean;
            readonly snooze?: boolean | undefined;
        } | null | undefined;
        readonly pinnedAt?: import("effect/DateTime").Utc | null | undefined;
        readonly autoSettleDisabledAt?: import("effect/DateTime").Utc | null | undefined;
        readonly pinOrderKey?: string | null | undefined;
        readonly activeOrderKey?: string | null | undefined;
        readonly lastVisitedAt?: import("effect/DateTime").Utc | null | undefined;
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
            readonly startedAt: import("effect/DateTime").Utc;
        } | null | undefined;
        readonly deletedAt: import("effect/DateTime").Utc | null;
    }[]>;
    environmentThreadIndexAtom: (arg: string & import("effect/Brand").Brand<"EnvironmentId">) => Atom.Atom<ReadonlyMap<string & import("effect/Brand").Brand<"ThreadId">, {
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
                readonly id: string;
                readonly value: string | boolean;
            }[];
        };
        readonly runtimeMode: "approval-required" | "auto" | "auto-accept-edits" | "full-access";
        readonly interactionMode: "default" | "plan";
        readonly branch: string | null;
        readonly worktreePath: string | null;
        readonly linkedPullRequest?: {
            readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
            readonly repository: string;
            readonly number: number;
            readonly url: string;
        } | null | undefined;
        readonly pullRequests?: readonly {
            readonly host: string;
            readonly repository: string;
            readonly number: number;
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
                readonly kind: "native";
                readonly id: string;
                readonly number: number;
                readonly url: string;
                readonly base: string;
                readonly layers: readonly {
                    readonly number: number;
                    readonly headBranch: string;
                    readonly state: "closed" | "merged" | "open";
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
            readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
            readonly repository: string;
            readonly number: number;
            readonly url: string;
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
        readonly latestRunRequestedAt?: import("effect/DateTime").Utc | null | undefined;
        readonly latestRunStartedAt?: import("effect/DateTime").Utc | null | undefined;
        readonly latestRunCompletedAt?: import("effect/DateTime").Utc | null | undefined;
        readonly latestRunStopRequested?: boolean | undefined;
        readonly activeRunId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly activityRunStartedAt?: import("effect/DateTime").Utc | null | undefined;
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
            readonly createdAt: import("effect/DateTime").Utc;
            readonly blocking?: boolean | undefined;
        } | null;
        readonly pendingGuestMessageCount?: number | undefined;
        readonly latestVisibleMessage: {
            readonly id: string & import("effect/Brand").Brand<"MessageId">;
            readonly role: "assistant" | "system" | "user";
            readonly text: string;
            readonly updatedAt: import("effect/DateTime").Utc;
        } | null;
        readonly latestUserMessageAt: import("effect/DateTime").Utc | null;
        readonly latestUserAuthoredMessageAt?: import("effect/DateTime").Utc | null | undefined;
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
        readonly createdAt: import("effect/DateTime").Utc;
        readonly updatedAt: import("effect/DateTime").Utc;
        readonly archivedAt: import("effect/DateTime").Utc | null;
        readonly settledOverride: "active" | "settled" | null;
        readonly settledAt: import("effect/DateTime").Utc | null;
        readonly unsettledAt?: import("effect/DateTime").Utc | null | undefined;
        readonly snoozedUntil?: import("effect/DateTime").Utc | null | undefined;
        readonly snoozedAt?: import("effect/DateTime").Utc | null | undefined;
        readonly limitRecovery?: {
            readonly requestId?: (string & import("effect/Brand").Brand<"CommandId">) | undefined;
            readonly runId: string & import("effect/Brand").Brand<"RunId">;
            readonly resetAt: string;
            readonly autoResume: boolean;
            readonly snooze?: boolean | undefined;
        } | null | undefined;
        readonly pinnedAt?: import("effect/DateTime").Utc | null | undefined;
        readonly autoSettleDisabledAt?: import("effect/DateTime").Utc | null | undefined;
        readonly pinOrderKey?: string | null | undefined;
        readonly activeOrderKey?: string | null | undefined;
        readonly lastVisitedAt?: import("effect/DateTime").Utc | null | undefined;
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
            readonly startedAt: import("effect/DateTime").Utc;
        } | null | undefined;
        readonly deletedAt: import("effect/DateTime").Utc | null;
    }>>;
    environmentThreadRefsAtom: (arg: string & import("effect/Brand").Brand<"EnvironmentId">) => Atom.Atom<readonly {
        readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    }[]>;
    environmentThreadRefsByProjectAtom: (arg: string & import("effect/Brand").Brand<"EnvironmentId">) => Atom.Atom<ReadonlyMap<string & import("effect/Brand").Brand<"ProjectId">, readonly {
        readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    }[]>>;
    threadRefsAtom: Atom.Atom<readonly {
        readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    }[]>;
    threadShellsAtom: Atom.Atom<readonly EnvironmentThreadShell[]>;
    quietThreadShellsAtom: Atom.Atom<readonly EnvironmentThreadShell[]>;
    navigationThreadShellsAtom: Atom.Atom<readonly EnvironmentThreadShell[]>;
    delegatedUnderParentAtom: Atom.Atom<ReadonlySet<string>>;
    pendingSubagentRequestsAtom: (arg: string & import("effect/Brand").Brand<"EnvironmentId">) => Atom.Atom<ReadonlyMap<string & import("effect/Brand").Brand<"ThreadId">, PendingSubagentRequest>>;
    /** @throws {never} */
    threadShellsForProjectRefsAtom: (refs: ReadonlyArray<ScopedProjectRef>) => Atom.Atom<readonly EnvironmentThreadShell[]>;
    /** @throws {never} */
    threadShellAtom: (ref: ScopedThreadRef) => Atom.Atom<EnvironmentThreadShell | null>;
    /** @throws {never} */
    quietThreadShellAtom: (ref: ScopedThreadRef) => Atom.Atom<EnvironmentThreadShell | null>;
    /** @throws {never} */
    childThreadInputsAtom: (ref: ScopedThreadRef) => Atom.Atom<readonly EnvironmentThreadShell[]>;
};
