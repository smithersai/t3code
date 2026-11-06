import { type EnvironmentShellState, type EnvironmentShellStatus } from "@t3tools/client-runtime/state/shell";
import { type EnvironmentCatalogState } from "@t3tools/client-runtime/state/connections";
import type { EnvironmentId } from "@t3tools/contracts";
import { AsyncResult, Atom } from "effect/reactivity";
export declare const shellEnvironment: {
    openInEditor: {
        label: string;
        run: (registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
            readonly environmentId: EnvironmentId;
            readonly input: {
                readonly cwd: string;
                readonly editor: "antigravity" | "aqua" | "clion" | "cursor" | "datagrip" | "dataspell" | "file-manager" | "goland" | "idea" | "kiro" | "phpstorm" | "pycharm" | "rider" | "rubymine" | "rustrover" | "trae" | "vscode" | "vscode-insiders" | "vscodium" | "webstorm" | "zed";
                readonly reveal?: boolean | undefined;
            };
        }) => Promise<import("@t3tools/client-runtime/state/runtime").AtomCommandResult<void, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("@t3tools/client-runtime/connection").EnvironmentNotRegisteredError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | import("@t3tools/contracts").ExternalLauncherBrowserSpawnError | import("@t3tools/contracts").ExternalLauncherCommandNotFoundError | import("@t3tools/contracts").ExternalLauncherEditorSpawnError | import("@t3tools/contracts").ExternalLauncherUnknownEditorError | import("@t3tools/contracts").ExternalLauncherUnsupportedEditorError | import("@t3tools/contracts").ExternalLauncherUnsupportedTargetError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
        requiredScopes: (input?: unknown) => readonly ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "review:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
        permissionAtom: (environmentId: EnvironmentId | null, input?: unknown) => Atom.Atom<boolean>;
    };
};
export declare const environmentShell: {
    stateAtom: (arg: string & import("effect/Brand").Brand<"EnvironmentId">) => Atom.Atom<AsyncResult.AsyncResult<EnvironmentShellState, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("effect/Cause").NoSuchElementError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
    stateValueAtom: (arg: string & import("effect/Brand").Brand<"EnvironmentId">) => Atom.Atom<EnvironmentShellState>;
    statusAtom: (arg: string & import("effect/Brand").Brand<"EnvironmentId">) => Atom.Atom<EnvironmentShellStatus>;
    hasSnapshotAtom: (arg: string & import("effect/Brand").Brand<"EnvironmentId">) => Atom.Atom<boolean>;
};
export declare const environmentSnapshotAtom: (arg: string & import("effect/Brand").Brand<"EnvironmentId">) => Atom.Atom<{
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
    readonly projects: readonly {
        readonly id: string & import("effect/Brand").Brand<"ProjectId">;
        readonly title: string;
        readonly workspaceRoot: string;
        readonly repositoryIdentity?: {
            readonly canonicalKey: string;
            readonly locator: {
                readonly source: "git-remote";
                readonly remoteName: string;
                readonly remoteUrl: string;
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
                readonly id: string;
                readonly value: string | boolean;
            }[];
        } | null;
        readonly defaultThreadEnvMode?: "local" | "worktree" | null | undefined;
        readonly autoPull?: boolean | undefined;
        readonly faviconPath?: string | null | undefined;
        readonly projectIcon?: {
            readonly kind: "lucide";
            readonly name: string;
            readonly color: "amber" | "blue" | "cyan" | "emerald" | "fuchsia" | "gray" | "green" | "indigo" | "lime" | "orange" | "pink" | "purple" | "red" | "rose" | "sky" | "teal" | "violet" | "yellow";
        } | {
            readonly kind: "emoji";
            readonly emoji: string;
        } | {
            readonly kind: "monogram";
            readonly text: string;
            readonly color: "amber" | "blue" | "cyan" | "emerald" | "fuchsia" | "gray" | "green" | "indigo" | "lime" | "orange" | "pink" | "purple" | "red" | "rose" | "sky" | "teal" | "violet" | "yellow";
        } | null | undefined;
        readonly scripts: readonly {
            readonly id: string;
            readonly name: string;
            readonly command: string;
            readonly icon: "build" | "configure" | "debug" | "lint" | "play" | "test";
            readonly runOnWorktreeCreate: boolean;
            readonly runOnSettle?: boolean | undefined;
            readonly async?: boolean | undefined;
            readonly previewUrl?: string | undefined;
            readonly autoOpenPreview?: boolean | undefined;
        }[];
        readonly createdAt: string;
        readonly updatedAt: string;
    }[];
    readonly olderSettled?: {
        readonly before: string;
        readonly asOfSequence: number;
        readonly counts: readonly {
            readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
            readonly count: number;
        }[];
    };
} | null>;
export declare function useEnvironmentShellStatus(environmentId: EnvironmentId | null): EnvironmentShellStatus | null;
export declare function useEnvironmentShellHasSnapshot(environmentId: EnvironmentId | null): boolean;
/** Environments whose threads reflect the server now, not a cache or a resync in flight. */
export declare const liveShellEnvironmentIdsAtom: Atom.Atom<ReadonlySet<string & import("effect/Brand").Brand<"EnvironmentId">>>;
export declare const allEnvironmentShellsBootstrappedAtom: Atom.Atom<boolean>;
export declare function createAllEnvironmentProjectSnapshotsReadyAtom(input: {
    readonly catalogValueAtom: Atom.Atom<EnvironmentCatalogState>;
    readonly shellStateValueAtom: (environmentId: EnvironmentId) => Atom.Atom<EnvironmentShellState>;
    readonly requiresPrimaryEnvironment: boolean;
}): Atom.Atom<boolean>;
export declare const allEnvironmentProjectSnapshotsReadyAtom: Atom.Atom<boolean>;
export declare const allReachableShellsLiveAtom: Atom.Atom<boolean>;
