import type { ProjectionRecordField } from "../orchestration-v2/ProjectionStore.ts";
import { OrchestratorMcpFailure, type ProjectId, type ProviderInstanceId, type ProviderInteractionMode, type RuntimeMode, ThreadId, type OrchestrationV2ThreadShell } from "@t3tools/contracts";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import type { OrchestratorV2Error } from "../orchestration-v2/Orchestrator.ts";
import * as ThreadManagement from "../orchestration-v2/ThreadManagementService.ts";
import * as McpInvocationContext from "./McpInvocationContext.vibe";
/**
 * Threads an agent starts over MCP are `mcp:<uuid>`, and agents often paste the
 * bare uuid. The id is never rewritten, so permission checks keyed on it still
 * hold; the miss only names a live thread the caller could read by its full id.
 */
export declare const threadNotFound: (threads: Pick<ThreadManagement.ThreadManagementServiceShape, "getThreadShell">, threadId: ThreadId, message: string) => Effect.Effect<never, OrchestratorMcpFailure, never>;
/** @throws {never} */
export declare const unavailable: () => OrchestratorMcpFailure;
/** @throws {never} */
export declare const dispatchFailure: (error: OrchestratorV2Error | ThreadManagement.ThreadManagementProviderInstanceDisabledError) => OrchestratorMcpFailure;
export interface CallerLimits {
    readonly runtimeMode: RuntimeMode;
    readonly interactionMode: ProviderInteractionMode;
}
export interface Caller {
    readonly scope: McpInvocationContext.McpInvocationScope;
    readonly threads: ThreadManagement.ThreadManagementService["Service"];
    readonly caller: OrchestrationV2ThreadShell | undefined;
    readonly limits: CallerLimits;
}
export declare const readCaller: () => Effect.Effect<{
    scope: McpInvocationContext.McpInvocationScope;
    threads: ThreadManagement.ThreadManagementServiceShape;
    caller: undefined;
    limits: McpInvocationContext.ClientModes;
} | {
    scope: McpInvocationContext.McpInvocationScope;
    threads: ThreadManagement.ThreadManagementServiceShape;
    caller: {
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
    };
    limits: {
        runtimeMode: "approval-required" | "auto" | "auto-accept-edits" | "full-access";
        interactionMode: "default" | "plan";
    };
}, OrchestratorMcpFailure, McpInvocationContext.McpInvocationContext | ThreadManagement.ThreadManagementService>;
export declare const loadCaller: () => Effect.Effect<{
    scope: McpInvocationContext.McpInvocationScope;
    threads: ThreadManagement.ThreadManagementServiceShape;
    caller: undefined;
    limits: McpInvocationContext.ClientModes;
} | {
    scope: McpInvocationContext.McpInvocationScope;
    threads: ThreadManagement.ThreadManagementServiceShape;
    caller: {
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
    };
    limits: {
        runtimeMode: "approval-required" | "auto" | "auto-accept-edits" | "full-access";
        interactionMode: "default" | "plan";
    };
}, OrchestratorMcpFailure, McpInvocationContext.McpInvocationContext | ThreadManagement.ThreadManagementService>;
export declare const assertTargetWithinLimits: (limits: CallerLimits, target: {
    readonly runtimeMode: RuntimeMode;
    readonly interactionMode: ProviderInteractionMode;
}) => Effect.Effect<void, OrchestratorMcpFailure, never>;
/**
 * Background subagents retain credentials until provider exit; archived threads and other instances cannot act.
 * @throws {never}
 */
export declare const isLiveCallerShell: (shell: Pick<OrchestrationV2ThreadShell, "archivedAt" | "activeRunId" | "providerInstanceId" | "pendingBackgroundTasks"> | null, providerInstanceId: ProviderInstanceId | undefined) => boolean;
/** Thread callers need a live run or its background subagent in an unarchived thread. OAuth clients rely on their session and ceiling. */
export declare function assertLiveCaller({ caller, scope }: Caller): Effect.Effect<void, never, never> | Effect.Effect<never, OrchestratorMcpFailure, never>;
export declare const assertFullAccess: (context: Caller, message: string) => Effect.Effect<void, never, never> | Effect.Effect<never, OrchestratorMcpFailure, never>;
export declare const resolveProjectId: (context: Caller, projectId: ProjectId | undefined) => Effect.Effect<never, OrchestratorMcpFailure, never> | Effect.Effect<string & import("effect/Brand").Brand<"ProjectId">, never, never>;
export declare const readThread: <K extends ProjectionRecordField = never>(threadId?: (ThreadId) | undefined, fields?: readonly K[] | undefined) => Effect.Effect<{
    scope: McpInvocationContext.McpInvocationScope;
    threads: ThreadManagement.ThreadManagementServiceShape;
    caller: undefined;
    limits: McpInvocationContext.ClientModes;
    projection: import("../orchestration-v2/ProjectionStore.ts").ProjectionRecords<K>;
} | {
    scope: McpInvocationContext.McpInvocationScope;
    threads: ThreadManagement.ThreadManagementServiceShape;
    caller: {
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
    };
    limits: {
        runtimeMode: "approval-required" | "auto" | "auto-accept-edits" | "full-access";
        interactionMode: "default" | "plan";
    };
    projection: import("../orchestration-v2/ProjectionStore.ts").ProjectionRecords<K>;
}, OrchestratorMcpFailure, McpInvocationContext.McpInvocationContext | ThreadManagement.ThreadManagementService>;
export declare const newCommandId: () => Effect.Effect<string & import("effect/Brand").Brand<"CommandId">, never, Crypto.Crypto>;
