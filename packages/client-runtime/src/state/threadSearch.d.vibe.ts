import { EnvironmentId, type OrchestrationThreadSearchMatch, type OrchestrationV2SearchThreadsInput, type OrchestrationV2SearchThreadsResult, type OrchestrationV2ThreadFamily } from "@t3tools/contracts";
import * as Schema from "effect/Schema";
import { AsyncResult, Atom } from "effect/reactivity";
import { type ThreadSearchSubject } from "@t3tools/shared/paletteSearch";
import type { EnvironmentThreadShell } from "./models.vibe";
/**
 * Records that this client opened a thread, and says whether to send the open
 * to the server now.
 */
export declare function claimThreadOpen(environmentId: EnvironmentId, threadId: string, now: number): boolean;
export interface EnvironmentThreadSearchMatch extends OrchestrationThreadSearchMatch {
    readonly environmentId: EnvironmentId;
}
export interface ThreadSearchResultsState {
    readonly matches: ReadonlyArray<EnvironmentThreadSearchMatch>;
    readonly isLoading: boolean;
    /** Rows of matching older settled threads, which shells that omit them do not hold. */
    readonly rows: ReadonlyArray<{
        readonly environmentId: EnvironmentId;
        readonly read: OrchestrationV2ThreadFamily;
    }>;
}
/**
 * How a search reaches environments whose shells omit older settled threads (others ignore it):
 * the caller's project scope and its names for environments, which its own ranking matches, and
 * whether to skip message search.
 */
export declare const ThreadSearchScope: Schema.Struct<{
    readonly projectIds: Schema.optionalKey<Schema.$Array<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">>>;
    readonly environmentLabels: Schema.optionalKey<Schema.$Record<Schema.String, Schema.String>>;
    readonly titlesOnly: Schema.optionalKey<Schema.Boolean>;
}>;
export type ThreadSearchScope = typeof ThreadSearchScope.Type;
export declare function makeThreadSearchKey(environmentIds: ReadonlyArray<EnvironmentId>, query: string, scope?: ThreadSearchScope): string;
export declare function threadSearchMatchKey(match: Pick<EnvironmentThreadSearchMatch, "environmentId" | "threadId">): string;
/**
 * Message matches from every environment, plus, from environments whose shells omit older settled
 * threads (`olderSettledBefore` is set), the rows of the best older matches. Callers mount those
 * rows (`rows`) so their own ranking sees them, as it sees shell rows.
 */
export declare function createThreadSearchResultsAtomFamily<E>(options: {
    readonly getSearchAtom: (environmentId: EnvironmentId, input: OrchestrationV2SearchThreadsInput) => Atom.Atom<AsyncResult.AsyncResult<OrchestrationV2SearchThreadsResult, E>>;
    readonly olderSettledBefore?: (environmentId: EnvironmentId) => Atom.Atom<string | null>;
    readonly labelPrefix: string;
}): {
    results: (arg: string) => Atom.Atom<ThreadSearchResultsState>;
    /** One environment's older settled rows for a search key, for `mountRows`. */
    rows: (key: string, environmentId: EnvironmentId) => Atom.Atom<readonly {
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
        }[];
    }[]>;
};
export type ThreadSearchShell = Pick<EnvironmentThreadShell, "environmentId" | "id" | "title" | "branch" | "createdAt" | "updatedAt" | "latestUserMessageAt" | "latestUserAuthoredMessageAt" | "opens"> & Partial<Pick<EnvironmentThreadShell, "pullRequests" | "linkedPullRequest" | "branchPullRequest">>;
/**
 * What the web and mobile palettes rank a thread shell by. Pass the
 * environment label only when there are two or more environments.
 */
export declare function threadSearchSubject(thread: ThreadSearchShell, projectTitle: string | null | undefined, environmentLabel?: string | null): ThreadSearchSubject;
/** Message result keys in the order a search box last showed them for `query`. */
export interface ShownOrder {
    readonly query: string;
    readonly keys: ReadonlyArray<string>;
    /** How many of `keys` are on screen; only those hold their places. */
    readonly shown: number;
}
/**
 * Keep shown rows in place so late results cannot move the pointer or keyboard target.
 * Allow up to LATE_ROOM extra rows so late best matches remain visible.
 * Reuse `previous` when unchanged to avoid a React state update.
 */
export declare function nextShownOrder(previous: ShownOrder | null, query: string, ranked: ReadonlyArray<string>, limit: number): ShownOrder;
export interface SettledThreadSearch {
    readonly query: string;
    readonly matches: ReadonlyArray<EnvironmentThreadSearchMatch>;
}
/**
 * What a search box shows for `query`: its own results once they arrive
 * (`ready`), else the previous results if `query` refines or widens their
 * query, so result rows do not blink out and back on every keystroke.
 * Results for an unrelated query clear.
 */
export declare function visibleThreadSearch(query: string, ready: SettledThreadSearch | null, previous: SettledThreadSearch | null): SettledThreadSearch;
