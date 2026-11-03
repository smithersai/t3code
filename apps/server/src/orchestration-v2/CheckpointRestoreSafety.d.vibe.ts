import * as Effect from "effect/Effect";
import type * as FileSystem from "effect/FileSystem";
import type * as Path from "effect/Path";
import type { ProjectionStoreV2 } from "./ProjectionStore.ts";
import type * as ProjectStore from "./ProjectStore.ts";
export declare const SHARED_WORKSPACE_RESTORE_MESSAGE = "File restore requires an isolated worktree. This workspace may contain changes from another thread. Rewind the conversation without restoring files instead.";
export declare const isCheckpointRestoreIsolated: (thread: Pick<{
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
    readonly createdAt: import("effect/DateTime").Utc;
    readonly updatedAt: import("effect/DateTime").Utc;
    readonly archivedAt: import("effect/DateTime").Utc | null;
    readonly settledOverride: "active" | "settled" | null;
    readonly settledAt: import("effect/DateTime").Utc | null;
    readonly unsettledAt?: import("effect/DateTime").Utc | null | undefined;
    readonly snoozedUntil?: import("effect/DateTime").Utc | null | undefined;
    readonly snoozedAt?: import("effect/DateTime").Utc | null | undefined;
    readonly lastSnoozeWakeAt?: import("effect/DateTime").Utc | null | undefined;
    readonly limitRecovery?: {
        readonly requestId?: (string & import("effect/Brand").Brand<"CommandId">) | undefined;
        readonly runId: string & import("effect/Brand").Brand<"RunId">;
        readonly resetAt: string;
        readonly autoResume: boolean;
        readonly snooze?: boolean | undefined;
    } | null | undefined;
    readonly guestShare?: {
        readonly id: string & import("effect/Brand").Brand<"GuestShareId">;
        readonly host: string;
        readonly createdAt: string;
        readonly expiresAt: string;
        readonly guestName: string | null;
        readonly messages: readonly {
            readonly id: string & import("effect/Brand").Brand<"GuestMessageId">;
            readonly text: string;
            readonly status: "dismissed" | "pending" | "sent";
            readonly submittedAt: string;
            readonly attachments?: readonly ({
                readonly type: string;
                readonly id: string;
                readonly name: string;
                readonly mimeType: string;
                readonly sizeBytes: number;
            } | {
                readonly type: "image";
                readonly id: string;
                readonly name: string;
                readonly mimeType: string;
                readonly sizeBytes: number;
                readonly source?: {
                    readonly kind: "snap-shot";
                    readonly capturedAt: string;
                    readonly appName: string;
                    readonly windowTitle: string;
                    readonly accessibleText?: string | undefined;
                    readonly accessibility?: {
                        readonly format: "flat-text";
                        readonly text: string;
                        readonly truncated: boolean;
                    } | {
                        readonly format: "element-tree";
                        readonly coordinateSpace: "captured-image";
                        readonly imageSize: {
                            readonly width: number;
                            readonly height: number;
                        };
                        readonly truncated: boolean;
                        readonly root: import("@t3tools/contracts").SnapShotAccessibilityNode;
                    } | undefined;
                    readonly appIdentifier?: string | undefined;
                    readonly appIconDataUrl?: string | undefined;
                } | undefined;
            } | {
                readonly type: "file";
                readonly id: string;
                readonly name: string;
                readonly mimeType: string;
                readonly sizeBytes: number;
                readonly source?: {
                    readonly _tag: "pasted-text";
                } | undefined;
            })[] | undefined;
        }[];
    } | null | undefined;
    readonly pinnedAt?: import("effect/DateTime").Utc | null | undefined;
    readonly autoSettleDisabledAt?: import("effect/DateTime").Utc | null | undefined;
    readonly pinOrderKey?: string | null | undefined;
    readonly activeOrderKey?: string | null | undefined;
    readonly lastVisitedAt: import("effect/DateTime").Utc | null;
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
    readonly rollbackRequestId?: (string & import("effect/Brand").Brand<"CommandId">) | undefined;
    readonly rollbackFailure?: {
        readonly requestId: string & import("effect/Brand").Brand<"CommandId">;
        readonly message: string;
    } | null | undefined;
    readonly deletedAt: import("effect/DateTime").Utc | null;
}, "id" | "worktreePath">, scope: Pick<{
    readonly id: string & import("effect/Brand").Brand<"CheckpointScopeId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
    readonly nodeId: string & import("effect/Brand").Brand<"NodeId">;
    readonly parentScopeId: (string & import("effect/Brand").Brand<"CheckpointScopeId">) | null;
    readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
    readonly kind: "manual" | "provider_thread" | "root_run" | "subagent" | "tool";
    readonly ordinalWithinParent: number;
    readonly advancesAppRunCount: boolean;
    readonly cwd: string;
    readonly createdAt: import("effect/DateTime").Utc;
}, "cwd">, dependencies: {
    readonly fileSystem: FileSystem.FileSystem;
    readonly projections: ProjectionStoreV2["Service"];
    readonly projects: ProjectStore.ProjectStoreV2["Service"];
    readonly path: Path.Path;
}) => Effect.Effect<boolean, import("effect/PlatformError").PlatformError | ProjectStore.ProjectStoreV2Error | import("./ProjectionStore.ts").ProjectionStoreApplyEventError | import("./ProjectionStore.ts").ProjectionStoreReadError | import("./ProjectionStore.ts").ProjectionStoreSetupError | import("./ProjectionStore.ts").ProjectionStoreThreadNotFoundError, never>;
