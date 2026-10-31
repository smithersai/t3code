import type { EventId, MessageId, ModelSelection, NodeId, OrchestrationV2Actor, OrchestrationV2AppThread, OrchestrationV2ConversationMessage, OrchestrationV2CreationSource, OrchestrationV2DomainEvent, OrchestrationV2ProviderRef, OrchestrationV2Run, OrchestrationV2ThreadProjection, OrchestrationV2TurnItem, ProviderInstanceId, ProviderThreadId, ProviderTurnId, ThreadId, TurnItemId } from "@t3tools/contracts";
import * as DateTime from "effect/DateTime";
import * as Effect from "effect/Effect";
export declare function subagentThreadTitle(input: {
    readonly parentTitle: string;
    readonly title?: string | null;
    readonly prompt: string;
    readonly ordinal: number;
}): string;
export declare function makeSubagentChildThread(input: {
    readonly parentThread: OrchestrationV2AppThread;
    readonly childThreadId: ThreadId;
    readonly parentNodeId: NodeId;
    readonly activeProviderThreadId: ProviderThreadId | null;
    readonly providerInstanceId: ProviderInstanceId;
    readonly modelSelection: ModelSelection;
    readonly title: string;
    readonly now: DateTime.Utc;
    readonly createdBy: OrchestrationV2Actor;
    readonly creationSource: OrchestrationV2CreationSource;
}): OrchestrationV2AppThread;
export declare function makeSubagentConversationArtifacts(input: {
    readonly messageId: MessageId;
    readonly senderThreadId?: ThreadId;
    readonly turnItemId: TurnItemId;
    readonly threadId: ThreadId;
    readonly rootNodeId: NodeId;
    readonly providerThreadId: ProviderThreadId | null;
    readonly providerTurnId: ProviderTurnId | null;
    readonly nativeItemRef: OrchestrationV2ProviderRef | null;
    readonly role: "user" | "assistant";
    readonly text: string;
    readonly workflowScript?: boolean;
    readonly ordinal: number;
    readonly now: DateTime.Utc;
}): {
    readonly message: OrchestrationV2ConversationMessage;
    readonly turnItem: OrchestrationV2TurnItem;
};
export declare function subagentResultForRun(projection: Pick<OrchestrationV2ThreadProjection, "messages" | "turnItems">, run: OrchestrationV2Run): {
    readonly text: string;
    readonly messageId: OrchestrationV2ConversationMessage["id"] | null;
    readonly turnItemId: OrchestrationV2TurnItem["id"] | null;
};
export declare function delegatedTaskProgress(projection: {
    readonly runs: OrchestrationV2ThreadProjection["runs"];
    readonly messages: ReadonlyArray<Pick<OrchestrationV2ConversationMessage, "runId" | "notification">>;
    readonly subagents: ReadonlyArray<Pick<OrchestrationV2ThreadProjection["subagents"][number], "status" | "completionDelivery">>;
    readonly providerThreads: ReadonlyArray<Pick<OrchestrationV2ThreadProjection["providerThreads"][number], "pendingBackgroundTasks">>;
}): {
    state: "result_available" | "waiting_for_children" | "working";
    resultRun: {
        readonly id: string & import("effect/Brand").Brand<"RunId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly ordinal: number;
        readonly providerInstanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly modelSelection: {
            readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
            readonly model: string;
            readonly options?: readonly {
                readonly id: string;
                readonly value: string | boolean;
            }[];
        };
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly userMessageId: string & import("effect/Brand").Brand<"MessageId">;
        readonly rootNodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly activeAttemptId: (string & import("effect/Brand").Brand<"RunAttemptId">) | null;
        readonly status: "cancelled" | "completed" | "failed" | "interrupted" | "preparing" | "queued" | "rolled_back" | "running" | "starting" | "waiting";
        readonly queuePosition?: number | null | undefined;
        readonly queueHeld?: boolean | undefined;
        readonly requestedAt: DateTime.Utc;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly checkpointId: (string & import("effect/Brand").Brand<"CheckpointId">) | null;
        readonly contextHandoffId: (string & import("effect/Brand").Brand<"ContextHandoffId">) | null;
        readonly restartContinuationOfRunId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
        readonly delegatedTaskId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
        readonly workStartedAt?: DateTime.Utc | undefined;
        readonly restartCancelledBackgroundWork?: readonly {
            readonly kind: "monitor" | "shell" | "subagent" | "task";
            readonly label: string;
            readonly id?: string | undefined;
            readonly awaited?: true | undefined;
        }[] | undefined;
        readonly sourcePlanRef?: {
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly planId: string & import("effect/Brand").Brand<"PlanId">;
        } | undefined;
        readonly delegatedCompletion?: {
            readonly disposition: "disposed" | "open" | "stopped";
            readonly nextGeneration: number;
            readonly delivery: {
                readonly generation: number;
                readonly messageId: string & import("effect/Brand").Brand<"MessageId">;
                readonly taskIds: readonly (string & import("effect/Brand").Brand<"NodeId">)[];
            } | null;
        } | undefined;
        readonly workspacePreparation?: {
            readonly type: "root";
            readonly branch?: string | undefined;
        } | {
            readonly type: "existing_worktree";
            readonly worktreePath: string;
            readonly branch?: string | undefined;
        } | {
            readonly type: "worktree";
            readonly baseRef: string;
            readonly branch?: string | undefined;
            readonly startFromOrigin?: boolean | undefined;
        } | undefined;
    } | undefined;
};
export declare const endOrphanedNativeSubagent: <E>(input: {
    readonly projection: Pick<OrchestrationV2ThreadProjection, "nodes" | "subagents" | "turnItems">;
    readonly subagentId: NodeId;
    readonly status: "completed" | "failed" | "interrupted" | "cancelled";
    readonly completedAt?: DateTime.Utc;
    readonly result?: string | null;
    readonly now: DateTime.Utc;
    readonly emitted: ReadonlyArray<OrchestrationV2DomainEvent>;
    readonly allocateEventId: () => Effect.Effect<EventId, E>;
}) => Effect.Effect<({
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "thread.created";
    readonly payload: {
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
        readonly createdAt: DateTime.Utc;
        readonly updatedAt: DateTime.Utc;
        readonly archivedAt: DateTime.Utc | null;
        readonly settledOverride: "active" | "settled" | null;
        readonly settledAt: DateTime.Utc | null;
        readonly unsettledAt?: DateTime.Utc | null | undefined;
        readonly snoozedUntil?: DateTime.Utc | null | undefined;
        readonly snoozedAt?: DateTime.Utc | null | undefined;
        readonly lastSnoozeWakeAt?: DateTime.Utc | null | undefined;
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
        readonly pinnedAt?: DateTime.Utc | null | undefined;
        readonly autoSettleDisabledAt?: DateTime.Utc | null | undefined;
        readonly pinOrderKey?: string | null | undefined;
        readonly activeOrderKey?: string | null | undefined;
        readonly lastVisitedAt: DateTime.Utc | null;
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
        readonly rollbackRequestId?: (string & import("effect/Brand").Brand<"CommandId">) | undefined;
        readonly rollbackFailure?: {
            readonly requestId: string & import("effect/Brand").Brand<"CommandId">;
            readonly message: string;
        } | null | undefined;
        readonly deletedAt: DateTime.Utc | null;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "thread.active-reordered" | "thread.archived" | "thread.auto-settle-set" | "thread.deleted" | "thread.guest-share-updated" | "thread.interaction-mode-updated" | "thread.marked-unread" | "thread.metadata-updated" | "thread.model-selection-updated" | "thread.pin-reordered" | "thread.pinned" | "thread.provider-switched" | "thread.pull-request-synced" | "thread.runtime-mode-updated" | "thread.settled" | "thread.snoozed" | "thread.unarchived" | "thread.unpinned" | "thread.unsettled" | "thread.unsnoozed" | "thread.visited";
    readonly payload: {
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
        readonly createdAt: DateTime.Utc;
        readonly updatedAt: DateTime.Utc;
        readonly archivedAt: DateTime.Utc | null;
        readonly settledOverride: "active" | "settled" | null;
        readonly settledAt: DateTime.Utc | null;
        readonly unsettledAt?: DateTime.Utc | null | undefined;
        readonly snoozedUntil?: DateTime.Utc | null | undefined;
        readonly snoozedAt?: DateTime.Utc | null | undefined;
        readonly lastSnoozeWakeAt?: DateTime.Utc | null | undefined;
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
        readonly pinnedAt?: DateTime.Utc | null | undefined;
        readonly autoSettleDisabledAt?: DateTime.Utc | null | undefined;
        readonly pinOrderKey?: string | null | undefined;
        readonly activeOrderKey?: string | null | undefined;
        readonly lastVisitedAt: DateTime.Utc | null;
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
        readonly rollbackRequestId?: (string & import("effect/Brand").Brand<"CommandId">) | undefined;
        readonly rollbackFailure?: {
            readonly requestId: string & import("effect/Brand").Brand<"CommandId">;
            readonly message: string;
        } | null | undefined;
        readonly deletedAt: DateTime.Utc | null;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "thread.pull-request-link-updated";
    readonly payload: {
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
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "run.created";
    readonly payload: {
        readonly id: string & import("effect/Brand").Brand<"RunId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly ordinal: number;
        readonly providerInstanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly modelSelection: {
            readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
            readonly model: string;
            readonly options?: readonly {
                readonly id: string;
                readonly value: string | boolean;
            }[];
        };
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly userMessageId: string & import("effect/Brand").Brand<"MessageId">;
        readonly rootNodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly activeAttemptId: (string & import("effect/Brand").Brand<"RunAttemptId">) | null;
        readonly status: "cancelled" | "completed" | "failed" | "interrupted" | "preparing" | "queued" | "rolled_back" | "running" | "starting" | "waiting";
        readonly queuePosition?: number | null | undefined;
        readonly queueHeld?: boolean | undefined;
        readonly requestedAt: DateTime.Utc;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly checkpointId: (string & import("effect/Brand").Brand<"CheckpointId">) | null;
        readonly contextHandoffId: (string & import("effect/Brand").Brand<"ContextHandoffId">) | null;
        readonly restartContinuationOfRunId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
        readonly delegatedTaskId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
        readonly workStartedAt?: DateTime.Utc | undefined;
        readonly restartCancelledBackgroundWork?: readonly {
            readonly kind: "monitor" | "shell" | "subagent" | "task";
            readonly label: string;
            readonly id?: string | undefined;
            readonly awaited?: true | undefined;
        }[] | undefined;
        readonly sourcePlanRef?: {
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly planId: string & import("effect/Brand").Brand<"PlanId">;
        } | undefined;
        readonly delegatedCompletion?: {
            readonly disposition: "disposed" | "open" | "stopped";
            readonly nextGeneration: number;
            readonly delivery: {
                readonly generation: number;
                readonly messageId: string & import("effect/Brand").Brand<"MessageId">;
                readonly taskIds: readonly (string & import("effect/Brand").Brand<"NodeId">)[];
            } | null;
        } | undefined;
        readonly workspacePreparation?: {
            readonly type: "root";
            readonly branch?: string | undefined;
        } | {
            readonly type: "existing_worktree";
            readonly worktreePath: string;
            readonly branch?: string | undefined;
        } | {
            readonly type: "worktree";
            readonly baseRef: string;
            readonly branch?: string | undefined;
            readonly startFromOrigin?: boolean | undefined;
        } | undefined;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "run.updated";
    readonly payload: {
        readonly id: string & import("effect/Brand").Brand<"RunId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly ordinal: number;
        readonly providerInstanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly modelSelection: {
            readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
            readonly model: string;
            readonly options?: readonly {
                readonly id: string;
                readonly value: string | boolean;
            }[];
        };
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly userMessageId: string & import("effect/Brand").Brand<"MessageId">;
        readonly rootNodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly activeAttemptId: (string & import("effect/Brand").Brand<"RunAttemptId">) | null;
        readonly status: "cancelled" | "completed" | "failed" | "interrupted" | "preparing" | "queued" | "rolled_back" | "running" | "starting" | "waiting";
        readonly queuePosition?: number | null | undefined;
        readonly queueHeld?: boolean | undefined;
        readonly requestedAt: DateTime.Utc;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly checkpointId: (string & import("effect/Brand").Brand<"CheckpointId">) | null;
        readonly contextHandoffId: (string & import("effect/Brand").Brand<"ContextHandoffId">) | null;
        readonly restartContinuationOfRunId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
        readonly delegatedTaskId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
        readonly workStartedAt?: DateTime.Utc | undefined;
        readonly restartCancelledBackgroundWork?: readonly {
            readonly kind: "monitor" | "shell" | "subagent" | "task";
            readonly label: string;
            readonly id?: string | undefined;
            readonly awaited?: true | undefined;
        }[] | undefined;
        readonly sourcePlanRef?: {
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly planId: string & import("effect/Brand").Brand<"PlanId">;
        } | undefined;
        readonly delegatedCompletion?: {
            readonly disposition: "disposed" | "open" | "stopped";
            readonly nextGeneration: number;
            readonly delivery: {
                readonly generation: number;
                readonly messageId: string & import("effect/Brand").Brand<"MessageId">;
                readonly taskIds: readonly (string & import("effect/Brand").Brand<"NodeId">)[];
            } | null;
        } | undefined;
        readonly workspacePreparation?: {
            readonly type: "root";
            readonly branch?: string | undefined;
        } | {
            readonly type: "existing_worktree";
            readonly worktreePath: string;
            readonly branch?: string | undefined;
        } | {
            readonly type: "worktree";
            readonly baseRef: string;
            readonly branch?: string | undefined;
            readonly startFromOrigin?: boolean | undefined;
        } | undefined;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "run.background-work-cancelled";
    readonly payload: {
        readonly runId: string & import("effect/Brand").Brand<"RunId">;
        readonly restartCancelledBackgroundWork: readonly {
            readonly kind: "monitor" | "shell" | "subagent" | "task";
            readonly label: string;
            readonly id?: string | undefined;
            readonly awaited?: true | undefined;
        }[];
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "run-attempt.created";
    readonly payload: {
        readonly id: string & import("effect/Brand").Brand<"RunAttemptId">;
        readonly nativeThreadId?: string | undefined;
        readonly runId: string & import("effect/Brand").Brand<"RunId">;
        readonly attemptOrdinal: number;
        readonly rootNodeId: string & import("effect/Brand").Brand<"NodeId">;
        readonly providerInstanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly providerThreadId: string & import("effect/Brand").Brand<"ProviderThreadId">;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly reason: "initial" | "provider_recovery" | "retry" | "steering_restart";
        readonly status: "cancelled" | "completed" | "failed" | "interrupted" | "pending" | "running" | "superseded";
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "run-attempt.updated";
    readonly payload: {
        readonly id: string & import("effect/Brand").Brand<"RunAttemptId">;
        readonly nativeThreadId?: string | undefined;
        readonly runId: string & import("effect/Brand").Brand<"RunId">;
        readonly attemptOrdinal: number;
        readonly rootNodeId: string & import("effect/Brand").Brand<"NodeId">;
        readonly providerInstanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly providerThreadId: string & import("effect/Brand").Brand<"ProviderThreadId">;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly reason: "initial" | "provider_recovery" | "retry" | "steering_restart";
        readonly status: "cancelled" | "completed" | "failed" | "interrupted" | "pending" | "running" | "superseded";
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "node.updated";
    readonly payload: {
        readonly id: string & import("effect/Brand").Brand<"NodeId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly parentNodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly rootNodeId: string & import("effect/Brand").Brand<"NodeId">;
        readonly kind: "approval_request" | "assistant_message" | "hook" | "plan" | "reasoning" | "root_turn" | "subagent" | "system" | "todo_list" | "tool_call" | "user_input_request";
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "rolled_back" | "running" | "waiting";
        readonly countsForRun: boolean;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly runtimeRequestId: (string & import("effect/Brand").Brand<"RuntimeRequestId">) | null;
        readonly checkpointScopeId: (string & import("effect/Brand").Brand<"CheckpointScopeId">) | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "subagent.updated";
    readonly payload: {
        readonly id: string & import("effect/Brand").Brand<"NodeId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly parentNodeId: string & import("effect/Brand").Brand<"NodeId">;
        readonly origin: "app_owned" | "provider_native";
        readonly createdBy: "agent" | "system" | "user";
        readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
        readonly providerInstanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly childThreadId: (string & import("effect/Brand").Brand<"ThreadId">) | null;
        readonly remoteChild?: {
            readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly label: string;
            readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
            readonly stoppedThere?: boolean | undefined;
            readonly stopCount?: number | undefined;
        } | undefined;
        readonly nativeTaskRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly prompt: string;
        readonly title: string | null;
        readonly model: string | null;
        readonly modelSelection?: {
            readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
            readonly model: string;
            readonly options?: readonly {
                readonly id: string;
                readonly value: string | boolean;
            }[];
        } | undefined;
        readonly completionWake?: "always" | "settled_only" | undefined;
        readonly completionDelivery?: {
            readonly state: "acknowledged" | "claimed" | "delivered" | "disposed" | "pending";
            readonly observedByRunId: (string & import("effect/Brand").Brand<"RunId">) | null;
        } | undefined;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly progress?: string | undefined;
        readonly workflow?: {
            readonly name?: string | undefined;
            readonly runHandles?: {
                readonly runId?: string | undefined;
                readonly transcriptDir?: string | undefined;
                readonly scriptPath?: string | undefined;
            } | undefined;
            readonly phases: readonly {
                readonly index: number;
                readonly title: string;
            }[];
            readonly agents: readonly {
                readonly index: number;
                readonly label: string;
                readonly agentId?: string | undefined;
                readonly childThreadId?: (string & import("effect/Brand").Brand<"ThreadId">) | undefined;
                readonly state: "completed" | "failed" | "queued" | "running";
                readonly phaseIndex?: number | undefined;
                readonly phaseTitle?: string | undefined;
                readonly model?: string | undefined;
                readonly attempt?: number | undefined;
                readonly totalTokens?: number | undefined;
                readonly toolCalls?: number | undefined;
                readonly durationMs?: number | undefined;
                readonly queuedAt?: number | undefined;
                readonly startedAt?: number | undefined;
                readonly completedAt?: number | undefined;
                readonly prompt?: string | undefined;
                readonly result?: string | undefined;
            }[];
            readonly totalTokens?: number | undefined;
            readonly toolCalls?: number | undefined;
            readonly durationMs?: number | undefined;
        } | undefined;
        readonly result: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly promptOmitted?: true;
        readonly resultOmitted?: true;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "provider-session.attached" | "provider-session.updated";
    readonly payload: {
        readonly id: string & import("effect/Brand").Brand<"ProviderSessionId">;
        readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
        readonly providerInstanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly status: "error" | "ready" | "running" | "starting" | "stopped" | "waiting";
        readonly cwd: string;
        readonly model: string | null;
        readonly capabilities: {
            readonly sessions: {
                readonly supportsMultipleProviderThreadsPerSession: boolean;
                readonly supportsModelSwitchInSession: boolean;
                readonly supportsProviderSwitchingViaHandoff: boolean;
                readonly supportsRuntimeModeSwitchInSession: boolean;
                readonly pendingRequestsSurviveRestart: boolean;
            };
            readonly threads: {
                readonly canCreateEmptyThread: boolean;
                readonly canReadThreadSnapshot: boolean;
                readonly canRollbackThread: boolean;
                readonly canForkThread: boolean;
                readonly canForkFromTurn: boolean;
                readonly canForkFromSubagentThread: boolean;
                readonly exposesNativeThreadId: boolean;
            };
            readonly turns: {
                readonly exposesNativeTurnId: boolean;
                readonly emitsTurnStarted: boolean;
                readonly emitsTurnCompleted: boolean;
                readonly supportsInterrupt: boolean;
                readonly supportsActiveSteering: boolean;
                readonly activeSteeringInterruptsTools?: boolean | undefined;
                readonly supportsSteeringByInterruptRestart: boolean;
                readonly supportsQueuedMessages: boolean;
                readonly terminalStatusQuality: "none" | "strong" | "weak";
            };
            readonly streaming: {
                readonly streamsAssistantText: boolean;
                readonly streamsReasoning: boolean;
                readonly streamsToolOutput: boolean;
                readonly streamsPlanText: boolean;
                readonly emitsMessageCompleted: boolean;
            };
            readonly tools: {
                readonly exposesToolItemIds: boolean;
                readonly emitsToolStarted: boolean;
                readonly emitsToolCompleted: boolean;
                readonly emitsToolOutput: boolean;
                readonly supportsMcpTools: boolean;
                readonly supportsDynamicToolCallbacks: boolean;
            };
            readonly approvals: {
                readonly supportsCommandApproval: boolean;
                readonly supportsFileReadApproval: boolean;
                readonly supportsFileChangeApproval: boolean;
                readonly supportsApplyPatchApproval: boolean;
                readonly approvalsHaveNativeRequestIds: boolean;
                readonly approvalCallbacksAreLiveOnly: boolean;
                readonly approvalsCanOriginateFromSubagents: boolean;
            };
            readonly planning: {
                readonly emitsPlanUpdated: boolean;
                readonly emitsTodoList: boolean;
                readonly emitsProposedPlan: boolean;
                readonly supportsStructuredQuestions: boolean;
                readonly planDeltasHaveItemIds: boolean;
            };
            readonly subagents: {
                readonly supportsSubagents: boolean;
                readonly exposesSubagentThreadIds: boolean;
                readonly emitsSubagentLifecycle: boolean;
                readonly canWaitForSubagents: boolean;
                readonly canCloseSubagents: boolean;
                readonly canForkSubagentThread: boolean;
            };
            readonly context: {
                readonly acceptsSystemContext: boolean;
                readonly acceptsDeveloperContext: boolean;
                readonly acceptsSyntheticUserContext: boolean;
                readonly canGenerateSummaries: boolean;
                readonly canConsumeHandoffSummaries: boolean;
                readonly supportsDeltaHandoff: boolean;
                readonly supportsFullThreadHandoff: boolean;
                readonly maxRecommendedHandoffChars: number | null;
            };
            readonly checkpointing: {
                readonly appCanCheckpointFilesystem: boolean;
                readonly supportsNestedCheckpointScopes: boolean;
                readonly providerCanRollbackConversation: boolean;
                readonly providerRollbackReturnsSnapshot: boolean;
                readonly providerCanReadConversationSnapshot: boolean;
            };
            readonly identity: {
                readonly nativeThreadIds: "none" | "strong" | "weak";
                readonly nativeTurnIds: "none" | "strong" | "weak";
                readonly nativeItemIds: "none" | "strong" | "weak";
                readonly nativeRequestIds: "none" | "strong" | "weak";
            };
            readonly runtimePolicy: {
                readonly enforcement: "client-boundary" | "native";
            };
        };
        readonly createdAt: DateTime.Utc;
        readonly updatedAt: DateTime.Utc;
        readonly lastError: string | null;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "provider-session.detached";
    readonly payload: {
        readonly providerSessionId: string & import("effect/Brand").Brand<"ProviderSessionId">;
        readonly detachedAt: DateTime.Utc;
        readonly reason?: string | undefined;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "provider-thread.updated";
    readonly payload: {
        readonly id: string & import("effect/Brand").Brand<"ProviderThreadId">;
        readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
        readonly providerInstanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly providerSessionId: (string & import("effect/Brand").Brand<"ProviderSessionId">) | null;
        readonly appThreadId: (string & import("effect/Brand").Brand<"ThreadId">) | null;
        readonly ownerNodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly nativeThreadRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly nativeConversationHeadRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly status: "active" | "archived" | "closed" | "error" | "idle" | "not_loaded";
        readonly firstRunOrdinal: number | null;
        readonly lastRunOrdinal: number | null;
        readonly handoffIds: readonly (string & import("effect/Brand").Brand<"ContextHandoffId">)[];
        readonly forkedFrom: {
            readonly providerThreadId: string & import("effect/Brand").Brand<"ProviderThreadId">;
            readonly providerTurnId?: (string & import("effect/Brand").Brand<"ProviderTurnId">) | undefined;
            readonly checkpointId?: (string & import("effect/Brand").Brand<"CheckpointId">) | undefined;
        } | null;
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
        readonly contextUsage?: {
            readonly usedTokens: number;
            readonly totalProcessedTokens?: number | undefined;
            readonly maxTokens?: number | undefined;
            readonly inputTokens?: number | undefined;
            readonly cachedInputTokens?: number | undefined;
            readonly outputTokens?: number | undefined;
            readonly reasoningOutputTokens?: number | undefined;
            readonly lastUsedTokens?: number | undefined;
            readonly lastInputTokens?: number | undefined;
            readonly lastCachedInputTokens?: number | undefined;
            readonly lastOutputTokens?: number | undefined;
            readonly lastReasoningOutputTokens?: number | undefined;
            readonly toolUses?: number | undefined;
            readonly durationMs?: number | undefined;
            readonly compactsAutomatically?: boolean | undefined;
            readonly autoCompactThreshold?: number | undefined;
            readonly cost?: {
                readonly amount: number;
                readonly currency: string;
            } | undefined;
        } | null | undefined;
        readonly nativeMetadata?: {
            readonly modelSelection?: {
                readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
                readonly model: string;
                readonly options?: readonly {
                    readonly id: string;
                    readonly value: string | boolean;
                }[];
            } | undefined;
            readonly title?: string | null | undefined;
            readonly updatedAt?: string | null | undefined;
            readonly itemIdentityVersion?: 2 | undefined;
            readonly forkHeadMessageId?: string | undefined;
            readonly claudeAttachmentBudget?: {
                readonly bytesUsed: number;
                readonly pagesUsed: number;
            } | undefined;
        } | null | undefined;
        readonly goal?: {
            readonly objective: string;
            readonly status: "active" | "blocked" | "budget_limited" | "complete" | "paused" | "usage_limited";
            readonly tokensUsed?: number | undefined;
            readonly tokenBudget?: number | null | undefined;
            readonly timeUsedSeconds?: number | undefined;
            readonly checks?: number | undefined;
            readonly lastCheck?: string | undefined;
        } | null | undefined;
        readonly createdAt: DateTime.Utc;
        readonly updatedAt: DateTime.Utc;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "provider-turn.updated";
    readonly payload: {
        readonly id: string & import("effect/Brand").Brand<"ProviderTurnId">;
        readonly providerThreadId: string & import("effect/Brand").Brand<"ProviderThreadId">;
        readonly nodeId: string & import("effect/Brand").Brand<"NodeId">;
        readonly runAttemptId: (string & import("effect/Brand").Brand<"RunAttemptId">) | null;
        readonly nativeTurnRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "interrupted" | "pending" | "running";
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly tokenUsage?: {
            readonly usedTokens: number;
            readonly maxTokens?: number | null | undefined;
            readonly inputTokens?: number | undefined;
            readonly cachedInputTokens?: number | undefined;
            readonly outputTokens?: number | undefined;
            readonly reasoningOutputTokens?: number | undefined;
            readonly promptCacheTtlMs?: number | undefined;
            readonly autoCompactThreshold?: number | undefined;
            readonly promptCacheExpiresAt?: string | undefined;
            readonly updatedAt: string;
        } | undefined;
        readonly turnTokenUsage?: {
            readonly usageScope: "main_agent";
            readonly cachedInputTokens?: number | undefined;
            readonly cacheCreationTokens?: number | undefined;
            readonly reasoningTokens?: number | undefined;
            readonly hasSubagents: boolean;
            readonly usageStatus: "complete";
            readonly inputTokens: number;
            readonly outputTokens: number;
        } | {
            readonly usageScope: "main_agent";
            readonly cachedInputTokens?: number | undefined;
            readonly cacheCreationTokens?: number | undefined;
            readonly reasoningTokens?: number | undefined;
            readonly hasSubagents: boolean;
            readonly usageStatus: "partial" | "unavailable";
            readonly inputTokens?: number | undefined;
            readonly outputTokens?: number | undefined;
        } | undefined;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "runtime-request.updated";
    readonly payload: {
        readonly id: string & import("effect/Brand").Brand<"RuntimeRequestId">;
        readonly nodeId: string & import("effect/Brand").Brand<"NodeId">;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeRequestRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly kind: "auth_refresh" | "command" | "dynamic_tool_call" | "file-change" | "file-read" | "mcp-elicitation" | "permission" | "user_input";
        readonly status: "cancelled" | "expired" | "pending" | "resolved";
        readonly responseCapability: {
            readonly type: "message";
        } | {
            readonly type: "not_resumable";
            readonly reason: string;
        } | {
            readonly type: "live";
            readonly providerSessionId: string & import("effect/Brand").Brand<"ProviderSessionId">;
            readonly supportsFeedback?: boolean | undefined;
        };
        readonly createdAt: DateTime.Utc;
        readonly resolvedAt: DateTime.Utc | null;
        readonly decision?: "accept" | "acceptAlways" | "acceptForSession" | "cancel" | "decline" | undefined;
        readonly feedback?: string | undefined;
        readonly answers?: {
            readonly [x: string]: unknown;
        } | undefined;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "message.updated";
    readonly payload: {
        readonly createdBy: "agent" | "system" | "user";
        readonly creationSource: "mcp" | "mobile" | "provider" | "server" | "web";
        readonly notification?: {
            readonly source: {
                readonly kind: "command";
            } | {
                readonly kind: "command";
            } | {
                readonly kind: "monitor";
            } | {
                readonly kind: "background_task";
            } | {
                readonly kind: "system";
            } | {
                readonly kind: "subagent";
                readonly childThreadId?: (string & import("effect/Brand").Brand<"ThreadId">) | undefined;
            } | {
                readonly kind: "delegated_task";
                readonly taskIds: readonly (string & import("effect/Brand").Brand<"NodeId">)[];
                readonly childThreadId?: (string & import("effect/Brand").Brand<"ThreadId">) | undefined;
            };
            readonly outcome: "cancelled" | "completed" | "failed" | "unknown" | "updated";
            readonly summary: string;
            readonly detail?: string | undefined;
        } | undefined;
        readonly scheduledTaskId?: (string & import("effect/Brand").Brand<"ScheduledTaskId">) | undefined;
        readonly senderThreadId?: (string & import("effect/Brand").Brand<"ThreadId">) | undefined;
        readonly idleCompaction?: "beforeCacheExpires" | "onReturn" | undefined;
        readonly workflowScript?: boolean | undefined;
        readonly id: string & import("effect/Brand").Brand<"MessageId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly role: "assistant" | "system" | "user";
        readonly text: string;
        readonly context?: {
            readonly version: 1;
            readonly guest?: {
                readonly guestMessageId: string & import("effect/Brand").Brand<"GuestMessageId">;
                readonly name: string;
                readonly text: string;
                readonly shareId?: (string & import("effect/Brand").Brand<"GuestShareId">) | undefined;
            } | undefined;
            readonly records: readonly ({
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly attachmentId: string;
                readonly name: string;
                readonly mimeType: string;
                readonly sizeBytes: number;
                readonly kind: "image";
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly attachmentId: string;
                readonly name: string;
                readonly mimeType: string;
                readonly sizeBytes: number;
                readonly kind: "file";
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "terminal";
                readonly terminalId: string;
                readonly terminalLabel: string;
                readonly lineStart: number;
                readonly lineEnd: number;
                readonly text: string;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly pageUrl: string;
                readonly pageTitle: string | null;
                readonly tagName: string;
                readonly selector: string | null;
                readonly htmlPreview: string;
                readonly componentName: string | null;
                readonly source: {
                    readonly functionName: string | null;
                    readonly fileName: string | null;
                    readonly lineNumber: number | null;
                    readonly columnNumber: number | null;
                } | null;
                readonly styles: string;
                readonly kind: "element";
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "mention";
                readonly path: string;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "skill";
                readonly name: string;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "thread";
                readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly title: string;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "environment";
                readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: string;
                readonly payload: unknown;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "preview-annotation";
                readonly annotationId: string;
                readonly pageUrl: string;
                readonly pageTitle: string | null;
                readonly comment: string;
                readonly targetSummary: string;
                readonly styleChanges: readonly string[];
                readonly elements?: readonly {
                    readonly pageUrl: string;
                    readonly pageTitle: string | null;
                    readonly tagName: string;
                    readonly selector: string | null;
                    readonly htmlPreview: string;
                    readonly componentName: string | null;
                    readonly source: {
                        readonly functionName: string | null;
                        readonly fileName: string | null;
                        readonly lineNumber: number | null;
                        readonly columnNumber: number | null;
                    } | null;
                    readonly styles: string;
                }[];
                readonly elementIds?: readonly string[];
                readonly regionCount?: number;
                readonly strokeCount?: number;
                readonly styleChangeDetails?: readonly {
                    readonly targetId: string;
                    readonly selector: string | null;
                    readonly property: string;
                    readonly previousValue: string;
                    readonly value: string;
                }[];
                readonly screenshotContextId?: string & import("effect/Brand").Brand<"ComposerContextId">;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "review-comment";
                readonly sectionId: string;
                readonly sectionTitle: string;
                readonly filePath: string;
                readonly startIndex: number;
                readonly endIndex: number;
                readonly rangeLabel: string;
                readonly text: string;
                readonly diff: string;
                readonly fenceLanguage?: string;
                readonly pullRequest?: {
                    readonly number: number;
                    readonly title: string;
                    readonly url: string;
                    readonly headBranch: string;
                    readonly baseBranch: string;
                    readonly state: "closed" | "merged" | "open";
                    readonly isDraft: boolean;
                };
            })[];
        } | undefined;
        readonly attachments: readonly ({
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
        })[];
        readonly streaming: boolean;
        readonly createdAt: DateTime.Utc;
        readonly updatedAt: DateTime.Utc;
        readonly delegatedCompletion?: {
            readonly parentRunId: string & import("effect/Brand").Brand<"RunId">;
            readonly generation: number;
            readonly taskIds: readonly (string & import("effect/Brand").Brand<"NodeId">)[];
        } | undefined;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "turn-item.updated";
    readonly payload: {
        readonly source: {
            readonly kind: "command";
        } | {
            readonly kind: "command";
        } | {
            readonly kind: "monitor";
        } | {
            readonly kind: "background_task";
        } | {
            readonly kind: "system";
        } | {
            readonly kind: "subagent";
            readonly childThreadId?: (string & import("effect/Brand").Brand<"ThreadId">) | undefined;
        } | {
            readonly kind: "delegated_task";
            readonly taskIds: readonly (string & import("effect/Brand").Brand<"NodeId">)[];
            readonly childThreadId?: (string & import("effect/Brand").Brand<"ThreadId">) | undefined;
        };
        readonly outcome: "cancelled" | "completed" | "failed" | "unknown" | "updated";
        readonly summary: string;
        readonly detail?: string | undefined;
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "notification";
    } | {
        readonly createdBy: "agent" | "system" | "user";
        readonly creationSource: "mcp" | "mobile" | "provider" | "server" | "web";
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "user_message";
        readonly messageId: string & import("effect/Brand").Brand<"MessageId">;
        readonly scheduledTaskId?: (string & import("effect/Brand").Brand<"ScheduledTaskId">) | undefined;
        readonly senderThreadId?: (string & import("effect/Brand").Brand<"ThreadId">) | undefined;
        readonly idleCompaction?: "beforeCacheExpires" | "onReturn" | undefined;
        readonly workflowScript?: boolean | undefined;
        readonly inputIntent: "promoted_queued_to_steer" | "queued_turn" | "steer" | "turn_start";
        readonly text: string;
        readonly textOmitted?: true;
        readonly context?: {
            readonly version: 1;
            readonly guest?: {
                readonly guestMessageId: string & import("effect/Brand").Brand<"GuestMessageId">;
                readonly name: string;
                readonly text: string;
                readonly shareId?: (string & import("effect/Brand").Brand<"GuestShareId">) | undefined;
            } | undefined;
            readonly records: readonly ({
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly attachmentId: string;
                readonly name: string;
                readonly mimeType: string;
                readonly sizeBytes: number;
                readonly kind: "image";
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly attachmentId: string;
                readonly name: string;
                readonly mimeType: string;
                readonly sizeBytes: number;
                readonly kind: "file";
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "terminal";
                readonly terminalId: string;
                readonly terminalLabel: string;
                readonly lineStart: number;
                readonly lineEnd: number;
                readonly text: string;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly pageUrl: string;
                readonly pageTitle: string | null;
                readonly tagName: string;
                readonly selector: string | null;
                readonly htmlPreview: string;
                readonly componentName: string | null;
                readonly source: {
                    readonly functionName: string | null;
                    readonly fileName: string | null;
                    readonly lineNumber: number | null;
                    readonly columnNumber: number | null;
                } | null;
                readonly styles: string;
                readonly kind: "element";
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "mention";
                readonly path: string;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "skill";
                readonly name: string;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "thread";
                readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly title: string;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "environment";
                readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: string;
                readonly payload: unknown;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "preview-annotation";
                readonly annotationId: string;
                readonly pageUrl: string;
                readonly pageTitle: string | null;
                readonly comment: string;
                readonly targetSummary: string;
                readonly styleChanges: readonly string[];
                readonly elements?: readonly {
                    readonly pageUrl: string;
                    readonly pageTitle: string | null;
                    readonly tagName: string;
                    readonly selector: string | null;
                    readonly htmlPreview: string;
                    readonly componentName: string | null;
                    readonly source: {
                        readonly functionName: string | null;
                        readonly fileName: string | null;
                        readonly lineNumber: number | null;
                        readonly columnNumber: number | null;
                    } | null;
                    readonly styles: string;
                }[];
                readonly elementIds?: readonly string[];
                readonly regionCount?: number;
                readonly strokeCount?: number;
                readonly styleChangeDetails?: readonly {
                    readonly targetId: string;
                    readonly selector: string | null;
                    readonly property: string;
                    readonly previousValue: string;
                    readonly value: string;
                }[];
                readonly screenshotContextId?: string & import("effect/Brand").Brand<"ComposerContextId">;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "review-comment";
                readonly sectionId: string;
                readonly sectionTitle: string;
                readonly filePath: string;
                readonly startIndex: number;
                readonly endIndex: number;
                readonly rangeLabel: string;
                readonly text: string;
                readonly diff: string;
                readonly fenceLanguage?: string;
                readonly pullRequest?: {
                    readonly number: number;
                    readonly title: string;
                    readonly url: string;
                    readonly headBranch: string;
                    readonly baseBranch: string;
                    readonly state: "closed" | "merged" | "open";
                    readonly isDraft: boolean;
                };
            })[];
        } | undefined;
        readonly attachments: readonly ({
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
        })[];
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "assistant_message";
        readonly messageId: string & import("effect/Brand").Brand<"MessageId">;
        readonly text: string;
        readonly textOmitted?: true;
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
        readonly streaming: boolean;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "reasoning";
        readonly text: string;
        readonly streaming: boolean;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "proposed_plan";
        readonly planId: string & import("effect/Brand").Brand<"PlanId">;
        readonly markdown: string;
        readonly streaming: boolean;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "todo_list";
        readonly planId: string & import("effect/Brand").Brand<"PlanId">;
        readonly steps: readonly {
            readonly id: string;
            readonly text: string;
            readonly status: "completed" | "pending" | "running";
            readonly durationAnchorAt?: string | undefined;
            readonly durationMs?: number | undefined;
        }[];
        readonly explanation?: string | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "user_input_request";
        readonly requestId: string & import("effect/Brand").Brand<"RuntimeRequestId">;
        readonly questions: readonly {
            readonly id: string;
            readonly header: string;
            readonly question: string;
            readonly options: readonly {
                readonly label: string;
                readonly description: string;
                readonly value?: string | undefined;
                readonly preview?: string | undefined;
            }[];
            readonly multiSelect?: boolean | undefined;
            readonly allowCustomAnswer?: boolean | undefined;
            readonly initialAnswer?: string | undefined;
            readonly required?: boolean | undefined;
        }[];
        readonly questionAnswer?: {
            readonly requestId: string;
            readonly questionTextById?: {
                readonly [x: string]: string;
            } | undefined;
            readonly answers: {
                readonly [x: string]: unknown;
            };
            readonly attachmentsByQuestionId: {
                readonly [x: string]: readonly ({
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
                })[];
            };
        } | undefined;
        readonly responseMode?: "message" | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "file_change";
        readonly fileName: string;
        readonly additions?: number | undefined;
        readonly deletions?: number | undefined;
        readonly diffStr?: string | undefined;
        readonly oldStr?: string | undefined;
        readonly newStr?: string | undefined;
        readonly changes?: readonly {
            readonly operation: string;
            readonly path: string;
            readonly oldPath?: string | undefined;
            readonly fileType?: string | undefined;
            readonly mimeType?: string | undefined;
        }[] | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "command_execution";
        readonly input: string;
        readonly output?: string | undefined;
        readonly outputOmitted?: boolean | undefined;
        readonly outputIndicatesFailure?: boolean | undefined;
        readonly exitCode?: number | undefined;
        readonly monitor?: boolean | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "file_search";
        readonly pattern?: string | undefined;
        readonly results?: readonly {
            readonly fileName: string;
            readonly line?: number | undefined;
            readonly column?: number | undefined;
            readonly preview?: string | undefined;
        }[] | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "web_search";
        readonly patterns?: readonly string[] | undefined;
        readonly results?: readonly {
            readonly title?: string | undefined;
            readonly url?: string | undefined;
            readonly snippet?: string | undefined;
        }[] | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "approval_request";
        readonly requestId: string & import("effect/Brand").Brand<"RuntimeRequestId">;
        readonly requestKind: "command" | "file-change" | "file-read" | "mcp-elicitation" | "permission";
        readonly prompt?: string | undefined;
        readonly reason?: string | undefined;
        readonly fullAccessOverride?: "ask_rule" | "provider_check" | undefined;
        readonly appName?: string | undefined;
        readonly options?: readonly {
            readonly decision: "accept" | "acceptAlways" | "acceptForSession" | "cancel" | "decline";
            readonly label: string;
            readonly warning?: string | undefined;
        }[] | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "checkpoint";
        readonly checkpointId: string & import("effect/Brand").Brand<"CheckpointId">;
        readonly scopeId: string & import("effect/Brand").Brand<"CheckpointScopeId">;
        readonly files: readonly {
            readonly path: string;
            readonly kind: string;
            readonly additions: number;
            readonly deletions: number;
        }[];
        readonly filesOmitted?: true;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "run_interrupt_request";
        readonly message: string;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "run_interrupt_result";
        readonly message: string;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "system_notice";
        readonly message: string;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "error";
        readonly failure: {
            readonly class: "permission_error" | "provider_error" | "transport_error" | "unknown" | "usage_limit" | "validation_error";
            readonly message: string;
            readonly code: string | null;
            readonly retryable: boolean | null;
            readonly resetAt?: string | null | undefined;
        };
        readonly retry?: {
            readonly attempt: number;
            readonly maxAttempts: number | null;
            readonly retryDelayMs: number | null;
        } | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "compaction";
        readonly driver: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | null;
        readonly summary?: string | undefined;
        readonly beforeTokenCount?: number | undefined;
        readonly afterTokenCount?: number | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "handoff";
        readonly contextHandoffId: string & import("effect/Brand").Brand<"ContextHandoffId">;
        readonly fromProviderThreadIds: readonly (string & import("effect/Brand").Brand<"ProviderThreadId">)[];
        readonly toProviderThreadId: string & import("effect/Brand").Brand<"ProviderThreadId">;
        readonly fromProviderInstanceIds: readonly (string & import("effect/Brand").Brand<"ProviderInstanceId">)[];
        readonly toProviderInstanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly fromModelSelections?: readonly {
            readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
            readonly model: string;
            readonly options?: readonly {
                readonly id: string;
                readonly value: string | boolean;
            }[];
        }[] | undefined;
        readonly toModel?: string | undefined;
        readonly strategy: "checkpoint_summary" | "delta_since_target_last_seen" | "fork_delta_summary" | "full_thread_summary" | "manual_context";
        readonly summary?: string | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "fork";
        readonly source: {
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
        };
        readonly targetThreadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly providerThreadId?: (string & import("effect/Brand").Brand<"ProviderThreadId">) | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "thread_created";
        readonly targetThreadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly targetRunId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly targetProviderInstanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly targetModel: string;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "secret_request";
        readonly label: string;
        readonly reason: string;
        readonly placeholder?: string | undefined;
        readonly delivery?: "file" | undefined;
        readonly secretStatus: "cancelled" | "declined" | "pending" | "saved";
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "link_request";
        readonly url?: string | undefined;
        readonly reason: string;
        readonly environmentId?: (string & import("effect/Brand").Brand<"EnvironmentId">) | undefined;
        readonly label?: string | undefined;
        readonly hint?: string | undefined;
        readonly requestedAccess?: "approval-required" | "auto" | "auto-accept-edits" | "full-access" | "read-only" | undefined;
        readonly linkStatus: "cancelled" | "declined" | "failed" | "linked" | "pending";
        readonly linkedEnvironmentId?: (string & import("effect/Brand").Brand<"EnvironmentId">) | undefined;
        readonly linkedLabel?: string | undefined;
        readonly linkedAccess?: "approval-required" | "auto" | "auto-accept-edits" | "full-access" | "read-only" | undefined;
        readonly failure?: string | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "subagent";
        readonly subagentId: string & import("effect/Brand").Brand<"NodeId">;
        readonly origin: "app_owned" | "provider_native";
        readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
        readonly providerInstanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly childThreadId: (string & import("effect/Brand").Brand<"ThreadId">) | null;
        readonly remoteChild?: {
            readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly label: string;
            readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
            readonly stoppedThere?: boolean | undefined;
            readonly stopCount?: number | undefined;
        } | undefined;
        readonly prompt: string;
        readonly progress?: string | undefined;
        readonly result: string | null;
        readonly promptOmitted?: true;
        readonly resultOmitted?: true;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "dynamic_tool";
        readonly toolName: string | null;
        readonly viewedImagePath?: string | undefined;
        readonly input: unknown;
        readonly output?: unknown;
        readonly outputOmitted?: boolean | undefined;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "plan.updated";
    readonly payload: {
        readonly id: string & import("effect/Brand").Brand<"PlanId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: string & import("effect/Brand").Brand<"NodeId">;
        readonly status: "active" | "completed" | "draft" | "superseded";
        readonly detailInTurnItem?: true | undefined;
        readonly kind: "proposed_plan";
        readonly markdown: string;
    } | {
        readonly id: string & import("effect/Brand").Brand<"PlanId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: string & import("effect/Brand").Brand<"NodeId">;
        readonly status: "active" | "completed" | "draft" | "superseded";
        readonly detailInTurnItem?: true | undefined;
        readonly kind: "todo_list";
        readonly steps: readonly {
            readonly id: string;
            readonly text: string;
            readonly status: "completed" | "pending" | "running";
            readonly durationAnchorAt?: string | undefined;
            readonly durationMs?: number | undefined;
        }[];
        readonly explanation?: string | undefined;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "checkpoint-scope.created";
    readonly payload: {
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
        readonly createdAt: DateTime.Utc;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "checkpoint.captured";
    readonly payload: {
        readonly id: string & import("effect/Brand").Brand<"CheckpointId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly scopeId: string & import("effect/Brand").Brand<"CheckpointScopeId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: string & import("effect/Brand").Brand<"NodeId">;
        readonly parentCheckpointId: (string & import("effect/Brand").Brand<"CheckpointId">) | null;
        readonly ordinalWithinScope: number;
        readonly appRunOrdinal: number | null;
        readonly ref: string & import("effect/Brand").Brand<"CheckpointRef">;
        readonly status: "error" | "missing" | "ready" | "stale";
        readonly files: readonly {
            readonly path: string;
            readonly kind: string;
            readonly additions: number;
            readonly deletions: number;
        }[];
        readonly capturedAt: DateTime.Utc;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "checkpoint.rollback-requested";
    readonly payload: {
        readonly scopeId: string & import("effect/Brand").Brand<"CheckpointScopeId">;
        readonly checkpointId: string & import("effect/Brand").Brand<"CheckpointId">;
        readonly requestedAt: DateTime.Utc;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "context-handoff.updated";
    readonly payload: {
        readonly id: string & import("effect/Brand").Brand<"ContextHandoffId">;
        readonly transferId?: (string & import("effect/Brand").Brand<"ContextTransferId">) | null | undefined;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly targetRunId: string & import("effect/Brand").Brand<"RunId">;
        readonly fromProviderThreadIds: readonly (string & import("effect/Brand").Brand<"ProviderThreadId">)[];
        readonly toProviderThreadId: string & import("effect/Brand").Brand<"ProviderThreadId">;
        readonly coveredRunOrdinals: {
            readonly from: number;
            readonly to: number;
        };
        readonly strategy: "checkpoint_summary" | "delta_since_target_last_seen" | "fork_delta_summary" | "full_thread_summary" | "manual_context";
        readonly status: "failed" | "pending" | "ready" | "superseded";
        readonly summaryMessageId: (string & import("effect/Brand").Brand<"MessageId">) | null;
        readonly summaryText: string;
        readonly history?: {
            readonly messages: readonly {
                readonly role: "assistant" | "user";
                readonly text: string;
                readonly runStatus?: string | undefined;
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
                readonly itemId: string & import("effect/Brand").Brand<"TurnItemId">;
                readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
                readonly status: string;
                readonly kind: string;
            }[];
            readonly coverage: string;
            readonly omittedItems: number;
            readonly omittedItemIds?: readonly (string & import("effect/Brand").Brand<"TurnItemId">)[] | undefined;
        } | undefined;
        readonly delivery?: {
            readonly nativeThreadId: string;
            readonly status: "injected" | "inline" | "pending";
            readonly itemIds: readonly (string & import("effect/Brand").Brand<"TurnItemId">)[];
            readonly omittedItemIds?: readonly (string & import("effect/Brand").Brand<"TurnItemId">)[] | undefined;
        } | undefined;
        readonly detailInTurnItem?: true | undefined;
        readonly createdByProviderInstanceId: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | null;
        readonly createdAt: DateTime.Utc;
        readonly updatedAt: DateTime.Utc;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "context-transfer.created";
    readonly payload: {
        readonly id: string & import("effect/Brand").Brand<"ContextTransferId">;
        readonly type: "fork" | "merge_back" | "provider_handoff" | "subagent_result" | "subagent_spawn";
        readonly sourceThreadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly targetThreadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly sourcePoint: {
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
            readonly checkpointId?: (string & import("effect/Brand").Brand<"CheckpointId">) | undefined;
            readonly turnItemId?: (string & import("effect/Brand").Brand<"TurnItemId">) | undefined;
            readonly providerThreadRef?: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | undefined;
            readonly providerTurnRef?: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | undefined;
        };
        readonly basePoint: {
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
            readonly checkpointId?: (string & import("effect/Brand").Brand<"CheckpointId">) | undefined;
            readonly turnItemId?: (string & import("effect/Brand").Brand<"TurnItemId">) | undefined;
            readonly providerThreadRef?: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | undefined;
            readonly providerTurnRef?: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | undefined;
        } | null;
        readonly sourceProviderInstanceId: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | null;
        readonly sourceTokenUsage?: {
            readonly usedTokens: number;
            readonly maxTokens?: number | null | undefined;
            readonly inputTokens?: number | undefined;
            readonly cachedInputTokens?: number | undefined;
            readonly outputTokens?: number | undefined;
            readonly reasoningOutputTokens?: number | undefined;
            readonly promptCacheTtlMs?: number | undefined;
            readonly autoCompactThreshold?: number | undefined;
            readonly promptCacheExpiresAt?: string | undefined;
            readonly updatedAt: string;
        } | undefined;
        readonly targetProviderInstanceId: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | null;
        readonly targetRunId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly status: "consumed" | "failed" | "pending" | "resolved_native" | "resolved_portable" | "superseded";
        readonly resolution: {
            readonly strategy: "native_fork";
            readonly providerThreadRef: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            };
        } | {
            readonly strategy: "portable_context";
            readonly contextHandoffId: string & import("effect/Brand").Brand<"ContextHandoffId">;
        } | {
            readonly strategy: "delta_context";
            readonly contextHandoffId: string & import("effect/Brand").Brand<"ContextHandoffId">;
        } | {
            readonly strategy: "fork_delta_context";
            readonly contextHandoffId: string & import("effect/Brand").Brand<"ContextHandoffId">;
        } | {
            readonly strategy: "checkpoint_context";
            readonly contextHandoffId: string & import("effect/Brand").Brand<"ContextHandoffId">;
        } | null;
        readonly createdBy: "agent" | "system" | "user";
        readonly error: string | null;
        readonly createdAt: DateTime.Utc;
        readonly updatedAt: DateTime.Utc;
        readonly consumedAt: DateTime.Utc | null;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "context-transfer.updated";
    readonly payload: {
        readonly id: string & import("effect/Brand").Brand<"ContextTransferId">;
        readonly type: "fork" | "merge_back" | "provider_handoff" | "subagent_result" | "subagent_spawn";
        readonly sourceThreadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly targetThreadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly sourcePoint: {
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
            readonly checkpointId?: (string & import("effect/Brand").Brand<"CheckpointId">) | undefined;
            readonly turnItemId?: (string & import("effect/Brand").Brand<"TurnItemId">) | undefined;
            readonly providerThreadRef?: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | undefined;
            readonly providerTurnRef?: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | undefined;
        };
        readonly basePoint: {
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
            readonly checkpointId?: (string & import("effect/Brand").Brand<"CheckpointId">) | undefined;
            readonly turnItemId?: (string & import("effect/Brand").Brand<"TurnItemId">) | undefined;
            readonly providerThreadRef?: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | undefined;
            readonly providerTurnRef?: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | undefined;
        } | null;
        readonly sourceProviderInstanceId: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | null;
        readonly sourceTokenUsage?: {
            readonly usedTokens: number;
            readonly maxTokens?: number | null | undefined;
            readonly inputTokens?: number | undefined;
            readonly cachedInputTokens?: number | undefined;
            readonly outputTokens?: number | undefined;
            readonly reasoningOutputTokens?: number | undefined;
            readonly promptCacheTtlMs?: number | undefined;
            readonly autoCompactThreshold?: number | undefined;
            readonly promptCacheExpiresAt?: string | undefined;
            readonly updatedAt: string;
        } | undefined;
        readonly targetProviderInstanceId: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | null;
        readonly targetRunId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly status: "consumed" | "failed" | "pending" | "resolved_native" | "resolved_portable" | "superseded";
        readonly resolution: {
            readonly strategy: "native_fork";
            readonly providerThreadRef: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            };
        } | {
            readonly strategy: "portable_context";
            readonly contextHandoffId: string & import("effect/Brand").Brand<"ContextHandoffId">;
        } | {
            readonly strategy: "delta_context";
            readonly contextHandoffId: string & import("effect/Brand").Brand<"ContextHandoffId">;
        } | {
            readonly strategy: "fork_delta_context";
            readonly contextHandoffId: string & import("effect/Brand").Brand<"ContextHandoffId">;
        } | {
            readonly strategy: "checkpoint_context";
            readonly contextHandoffId: string & import("effect/Brand").Brand<"ContextHandoffId">;
        } | null;
        readonly createdBy: "agent" | "system" | "user";
        readonly error: string | null;
        readonly createdAt: DateTime.Utc;
        readonly updatedAt: DateTime.Utc;
        readonly consumedAt: DateTime.Utc | null;
    };
})[], E, never>;
export declare const endRunlessRootTurns: <E>(input: {
    readonly threadId: ThreadId;
    readonly providerInstanceId: ProviderInstanceId;
    readonly projection: Pick<OrchestrationV2ThreadProjection, "nodes" | "providerTurns" | "turnItems">;
    readonly status: "completed" | "failed" | "interrupted" | "cancelled";
    readonly completedAt?: DateTime.Utc;
    readonly now: DateTime.Utc;
    readonly emitted: ReadonlyArray<OrchestrationV2DomainEvent>;
    readonly allocateEventId: () => Effect.Effect<EventId, E>;
}) => Effect.Effect<({
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "thread.created";
    readonly payload: {
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
        readonly createdAt: DateTime.Utc;
        readonly updatedAt: DateTime.Utc;
        readonly archivedAt: DateTime.Utc | null;
        readonly settledOverride: "active" | "settled" | null;
        readonly settledAt: DateTime.Utc | null;
        readonly unsettledAt?: DateTime.Utc | null | undefined;
        readonly snoozedUntil?: DateTime.Utc | null | undefined;
        readonly snoozedAt?: DateTime.Utc | null | undefined;
        readonly lastSnoozeWakeAt?: DateTime.Utc | null | undefined;
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
        readonly pinnedAt?: DateTime.Utc | null | undefined;
        readonly autoSettleDisabledAt?: DateTime.Utc | null | undefined;
        readonly pinOrderKey?: string | null | undefined;
        readonly activeOrderKey?: string | null | undefined;
        readonly lastVisitedAt: DateTime.Utc | null;
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
        readonly rollbackRequestId?: (string & import("effect/Brand").Brand<"CommandId">) | undefined;
        readonly rollbackFailure?: {
            readonly requestId: string & import("effect/Brand").Brand<"CommandId">;
            readonly message: string;
        } | null | undefined;
        readonly deletedAt: DateTime.Utc | null;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "thread.active-reordered" | "thread.archived" | "thread.auto-settle-set" | "thread.deleted" | "thread.guest-share-updated" | "thread.interaction-mode-updated" | "thread.marked-unread" | "thread.metadata-updated" | "thread.model-selection-updated" | "thread.pin-reordered" | "thread.pinned" | "thread.provider-switched" | "thread.pull-request-synced" | "thread.runtime-mode-updated" | "thread.settled" | "thread.snoozed" | "thread.unarchived" | "thread.unpinned" | "thread.unsettled" | "thread.unsnoozed" | "thread.visited";
    readonly payload: {
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
        readonly createdAt: DateTime.Utc;
        readonly updatedAt: DateTime.Utc;
        readonly archivedAt: DateTime.Utc | null;
        readonly settledOverride: "active" | "settled" | null;
        readonly settledAt: DateTime.Utc | null;
        readonly unsettledAt?: DateTime.Utc | null | undefined;
        readonly snoozedUntil?: DateTime.Utc | null | undefined;
        readonly snoozedAt?: DateTime.Utc | null | undefined;
        readonly lastSnoozeWakeAt?: DateTime.Utc | null | undefined;
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
        readonly pinnedAt?: DateTime.Utc | null | undefined;
        readonly autoSettleDisabledAt?: DateTime.Utc | null | undefined;
        readonly pinOrderKey?: string | null | undefined;
        readonly activeOrderKey?: string | null | undefined;
        readonly lastVisitedAt: DateTime.Utc | null;
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
        readonly rollbackRequestId?: (string & import("effect/Brand").Brand<"CommandId">) | undefined;
        readonly rollbackFailure?: {
            readonly requestId: string & import("effect/Brand").Brand<"CommandId">;
            readonly message: string;
        } | null | undefined;
        readonly deletedAt: DateTime.Utc | null;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "thread.pull-request-link-updated";
    readonly payload: {
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
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "run.created";
    readonly payload: {
        readonly id: string & import("effect/Brand").Brand<"RunId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly ordinal: number;
        readonly providerInstanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly modelSelection: {
            readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
            readonly model: string;
            readonly options?: readonly {
                readonly id: string;
                readonly value: string | boolean;
            }[];
        };
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly userMessageId: string & import("effect/Brand").Brand<"MessageId">;
        readonly rootNodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly activeAttemptId: (string & import("effect/Brand").Brand<"RunAttemptId">) | null;
        readonly status: "cancelled" | "completed" | "failed" | "interrupted" | "preparing" | "queued" | "rolled_back" | "running" | "starting" | "waiting";
        readonly queuePosition?: number | null | undefined;
        readonly queueHeld?: boolean | undefined;
        readonly requestedAt: DateTime.Utc;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly checkpointId: (string & import("effect/Brand").Brand<"CheckpointId">) | null;
        readonly contextHandoffId: (string & import("effect/Brand").Brand<"ContextHandoffId">) | null;
        readonly restartContinuationOfRunId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
        readonly delegatedTaskId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
        readonly workStartedAt?: DateTime.Utc | undefined;
        readonly restartCancelledBackgroundWork?: readonly {
            readonly kind: "monitor" | "shell" | "subagent" | "task";
            readonly label: string;
            readonly id?: string | undefined;
            readonly awaited?: true | undefined;
        }[] | undefined;
        readonly sourcePlanRef?: {
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly planId: string & import("effect/Brand").Brand<"PlanId">;
        } | undefined;
        readonly delegatedCompletion?: {
            readonly disposition: "disposed" | "open" | "stopped";
            readonly nextGeneration: number;
            readonly delivery: {
                readonly generation: number;
                readonly messageId: string & import("effect/Brand").Brand<"MessageId">;
                readonly taskIds: readonly (string & import("effect/Brand").Brand<"NodeId">)[];
            } | null;
        } | undefined;
        readonly workspacePreparation?: {
            readonly type: "root";
            readonly branch?: string | undefined;
        } | {
            readonly type: "existing_worktree";
            readonly worktreePath: string;
            readonly branch?: string | undefined;
        } | {
            readonly type: "worktree";
            readonly baseRef: string;
            readonly branch?: string | undefined;
            readonly startFromOrigin?: boolean | undefined;
        } | undefined;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "run.updated";
    readonly payload: {
        readonly id: string & import("effect/Brand").Brand<"RunId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly ordinal: number;
        readonly providerInstanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly modelSelection: {
            readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
            readonly model: string;
            readonly options?: readonly {
                readonly id: string;
                readonly value: string | boolean;
            }[];
        };
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly userMessageId: string & import("effect/Brand").Brand<"MessageId">;
        readonly rootNodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly activeAttemptId: (string & import("effect/Brand").Brand<"RunAttemptId">) | null;
        readonly status: "cancelled" | "completed" | "failed" | "interrupted" | "preparing" | "queued" | "rolled_back" | "running" | "starting" | "waiting";
        readonly queuePosition?: number | null | undefined;
        readonly queueHeld?: boolean | undefined;
        readonly requestedAt: DateTime.Utc;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly checkpointId: (string & import("effect/Brand").Brand<"CheckpointId">) | null;
        readonly contextHandoffId: (string & import("effect/Brand").Brand<"ContextHandoffId">) | null;
        readonly restartContinuationOfRunId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
        readonly delegatedTaskId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
        readonly workStartedAt?: DateTime.Utc | undefined;
        readonly restartCancelledBackgroundWork?: readonly {
            readonly kind: "monitor" | "shell" | "subagent" | "task";
            readonly label: string;
            readonly id?: string | undefined;
            readonly awaited?: true | undefined;
        }[] | undefined;
        readonly sourcePlanRef?: {
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly planId: string & import("effect/Brand").Brand<"PlanId">;
        } | undefined;
        readonly delegatedCompletion?: {
            readonly disposition: "disposed" | "open" | "stopped";
            readonly nextGeneration: number;
            readonly delivery: {
                readonly generation: number;
                readonly messageId: string & import("effect/Brand").Brand<"MessageId">;
                readonly taskIds: readonly (string & import("effect/Brand").Brand<"NodeId">)[];
            } | null;
        } | undefined;
        readonly workspacePreparation?: {
            readonly type: "root";
            readonly branch?: string | undefined;
        } | {
            readonly type: "existing_worktree";
            readonly worktreePath: string;
            readonly branch?: string | undefined;
        } | {
            readonly type: "worktree";
            readonly baseRef: string;
            readonly branch?: string | undefined;
            readonly startFromOrigin?: boolean | undefined;
        } | undefined;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "run.background-work-cancelled";
    readonly payload: {
        readonly runId: string & import("effect/Brand").Brand<"RunId">;
        readonly restartCancelledBackgroundWork: readonly {
            readonly kind: "monitor" | "shell" | "subagent" | "task";
            readonly label: string;
            readonly id?: string | undefined;
            readonly awaited?: true | undefined;
        }[];
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "run-attempt.created";
    readonly payload: {
        readonly id: string & import("effect/Brand").Brand<"RunAttemptId">;
        readonly nativeThreadId?: string | undefined;
        readonly runId: string & import("effect/Brand").Brand<"RunId">;
        readonly attemptOrdinal: number;
        readonly rootNodeId: string & import("effect/Brand").Brand<"NodeId">;
        readonly providerInstanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly providerThreadId: string & import("effect/Brand").Brand<"ProviderThreadId">;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly reason: "initial" | "provider_recovery" | "retry" | "steering_restart";
        readonly status: "cancelled" | "completed" | "failed" | "interrupted" | "pending" | "running" | "superseded";
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "run-attempt.updated";
    readonly payload: {
        readonly id: string & import("effect/Brand").Brand<"RunAttemptId">;
        readonly nativeThreadId?: string | undefined;
        readonly runId: string & import("effect/Brand").Brand<"RunId">;
        readonly attemptOrdinal: number;
        readonly rootNodeId: string & import("effect/Brand").Brand<"NodeId">;
        readonly providerInstanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly providerThreadId: string & import("effect/Brand").Brand<"ProviderThreadId">;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly reason: "initial" | "provider_recovery" | "retry" | "steering_restart";
        readonly status: "cancelled" | "completed" | "failed" | "interrupted" | "pending" | "running" | "superseded";
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "node.updated";
    readonly payload: {
        readonly id: string & import("effect/Brand").Brand<"NodeId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly parentNodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly rootNodeId: string & import("effect/Brand").Brand<"NodeId">;
        readonly kind: "approval_request" | "assistant_message" | "hook" | "plan" | "reasoning" | "root_turn" | "subagent" | "system" | "todo_list" | "tool_call" | "user_input_request";
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "rolled_back" | "running" | "waiting";
        readonly countsForRun: boolean;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly runtimeRequestId: (string & import("effect/Brand").Brand<"RuntimeRequestId">) | null;
        readonly checkpointScopeId: (string & import("effect/Brand").Brand<"CheckpointScopeId">) | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "subagent.updated";
    readonly payload: {
        readonly id: string & import("effect/Brand").Brand<"NodeId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly parentNodeId: string & import("effect/Brand").Brand<"NodeId">;
        readonly origin: "app_owned" | "provider_native";
        readonly createdBy: "agent" | "system" | "user";
        readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
        readonly providerInstanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly childThreadId: (string & import("effect/Brand").Brand<"ThreadId">) | null;
        readonly remoteChild?: {
            readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly label: string;
            readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
            readonly stoppedThere?: boolean | undefined;
            readonly stopCount?: number | undefined;
        } | undefined;
        readonly nativeTaskRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly prompt: string;
        readonly title: string | null;
        readonly model: string | null;
        readonly modelSelection?: {
            readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
            readonly model: string;
            readonly options?: readonly {
                readonly id: string;
                readonly value: string | boolean;
            }[];
        } | undefined;
        readonly completionWake?: "always" | "settled_only" | undefined;
        readonly completionDelivery?: {
            readonly state: "acknowledged" | "claimed" | "delivered" | "disposed" | "pending";
            readonly observedByRunId: (string & import("effect/Brand").Brand<"RunId">) | null;
        } | undefined;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly progress?: string | undefined;
        readonly workflow?: {
            readonly name?: string | undefined;
            readonly runHandles?: {
                readonly runId?: string | undefined;
                readonly transcriptDir?: string | undefined;
                readonly scriptPath?: string | undefined;
            } | undefined;
            readonly phases: readonly {
                readonly index: number;
                readonly title: string;
            }[];
            readonly agents: readonly {
                readonly index: number;
                readonly label: string;
                readonly agentId?: string | undefined;
                readonly childThreadId?: (string & import("effect/Brand").Brand<"ThreadId">) | undefined;
                readonly state: "completed" | "failed" | "queued" | "running";
                readonly phaseIndex?: number | undefined;
                readonly phaseTitle?: string | undefined;
                readonly model?: string | undefined;
                readonly attempt?: number | undefined;
                readonly totalTokens?: number | undefined;
                readonly toolCalls?: number | undefined;
                readonly durationMs?: number | undefined;
                readonly queuedAt?: number | undefined;
                readonly startedAt?: number | undefined;
                readonly completedAt?: number | undefined;
                readonly prompt?: string | undefined;
                readonly result?: string | undefined;
            }[];
            readonly totalTokens?: number | undefined;
            readonly toolCalls?: number | undefined;
            readonly durationMs?: number | undefined;
        } | undefined;
        readonly result: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly promptOmitted?: true;
        readonly resultOmitted?: true;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "provider-session.attached" | "provider-session.updated";
    readonly payload: {
        readonly id: string & import("effect/Brand").Brand<"ProviderSessionId">;
        readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
        readonly providerInstanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly status: "error" | "ready" | "running" | "starting" | "stopped" | "waiting";
        readonly cwd: string;
        readonly model: string | null;
        readonly capabilities: {
            readonly sessions: {
                readonly supportsMultipleProviderThreadsPerSession: boolean;
                readonly supportsModelSwitchInSession: boolean;
                readonly supportsProviderSwitchingViaHandoff: boolean;
                readonly supportsRuntimeModeSwitchInSession: boolean;
                readonly pendingRequestsSurviveRestart: boolean;
            };
            readonly threads: {
                readonly canCreateEmptyThread: boolean;
                readonly canReadThreadSnapshot: boolean;
                readonly canRollbackThread: boolean;
                readonly canForkThread: boolean;
                readonly canForkFromTurn: boolean;
                readonly canForkFromSubagentThread: boolean;
                readonly exposesNativeThreadId: boolean;
            };
            readonly turns: {
                readonly exposesNativeTurnId: boolean;
                readonly emitsTurnStarted: boolean;
                readonly emitsTurnCompleted: boolean;
                readonly supportsInterrupt: boolean;
                readonly supportsActiveSteering: boolean;
                readonly activeSteeringInterruptsTools?: boolean | undefined;
                readonly supportsSteeringByInterruptRestart: boolean;
                readonly supportsQueuedMessages: boolean;
                readonly terminalStatusQuality: "none" | "strong" | "weak";
            };
            readonly streaming: {
                readonly streamsAssistantText: boolean;
                readonly streamsReasoning: boolean;
                readonly streamsToolOutput: boolean;
                readonly streamsPlanText: boolean;
                readonly emitsMessageCompleted: boolean;
            };
            readonly tools: {
                readonly exposesToolItemIds: boolean;
                readonly emitsToolStarted: boolean;
                readonly emitsToolCompleted: boolean;
                readonly emitsToolOutput: boolean;
                readonly supportsMcpTools: boolean;
                readonly supportsDynamicToolCallbacks: boolean;
            };
            readonly approvals: {
                readonly supportsCommandApproval: boolean;
                readonly supportsFileReadApproval: boolean;
                readonly supportsFileChangeApproval: boolean;
                readonly supportsApplyPatchApproval: boolean;
                readonly approvalsHaveNativeRequestIds: boolean;
                readonly approvalCallbacksAreLiveOnly: boolean;
                readonly approvalsCanOriginateFromSubagents: boolean;
            };
            readonly planning: {
                readonly emitsPlanUpdated: boolean;
                readonly emitsTodoList: boolean;
                readonly emitsProposedPlan: boolean;
                readonly supportsStructuredQuestions: boolean;
                readonly planDeltasHaveItemIds: boolean;
            };
            readonly subagents: {
                readonly supportsSubagents: boolean;
                readonly exposesSubagentThreadIds: boolean;
                readonly emitsSubagentLifecycle: boolean;
                readonly canWaitForSubagents: boolean;
                readonly canCloseSubagents: boolean;
                readonly canForkSubagentThread: boolean;
            };
            readonly context: {
                readonly acceptsSystemContext: boolean;
                readonly acceptsDeveloperContext: boolean;
                readonly acceptsSyntheticUserContext: boolean;
                readonly canGenerateSummaries: boolean;
                readonly canConsumeHandoffSummaries: boolean;
                readonly supportsDeltaHandoff: boolean;
                readonly supportsFullThreadHandoff: boolean;
                readonly maxRecommendedHandoffChars: number | null;
            };
            readonly checkpointing: {
                readonly appCanCheckpointFilesystem: boolean;
                readonly supportsNestedCheckpointScopes: boolean;
                readonly providerCanRollbackConversation: boolean;
                readonly providerRollbackReturnsSnapshot: boolean;
                readonly providerCanReadConversationSnapshot: boolean;
            };
            readonly identity: {
                readonly nativeThreadIds: "none" | "strong" | "weak";
                readonly nativeTurnIds: "none" | "strong" | "weak";
                readonly nativeItemIds: "none" | "strong" | "weak";
                readonly nativeRequestIds: "none" | "strong" | "weak";
            };
            readonly runtimePolicy: {
                readonly enforcement: "client-boundary" | "native";
            };
        };
        readonly createdAt: DateTime.Utc;
        readonly updatedAt: DateTime.Utc;
        readonly lastError: string | null;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "provider-session.detached";
    readonly payload: {
        readonly providerSessionId: string & import("effect/Brand").Brand<"ProviderSessionId">;
        readonly detachedAt: DateTime.Utc;
        readonly reason?: string | undefined;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "provider-thread.updated";
    readonly payload: {
        readonly id: string & import("effect/Brand").Brand<"ProviderThreadId">;
        readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
        readonly providerInstanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly providerSessionId: (string & import("effect/Brand").Brand<"ProviderSessionId">) | null;
        readonly appThreadId: (string & import("effect/Brand").Brand<"ThreadId">) | null;
        readonly ownerNodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly nativeThreadRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly nativeConversationHeadRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly status: "active" | "archived" | "closed" | "error" | "idle" | "not_loaded";
        readonly firstRunOrdinal: number | null;
        readonly lastRunOrdinal: number | null;
        readonly handoffIds: readonly (string & import("effect/Brand").Brand<"ContextHandoffId">)[];
        readonly forkedFrom: {
            readonly providerThreadId: string & import("effect/Brand").Brand<"ProviderThreadId">;
            readonly providerTurnId?: (string & import("effect/Brand").Brand<"ProviderTurnId">) | undefined;
            readonly checkpointId?: (string & import("effect/Brand").Brand<"CheckpointId">) | undefined;
        } | null;
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
        readonly contextUsage?: {
            readonly usedTokens: number;
            readonly totalProcessedTokens?: number | undefined;
            readonly maxTokens?: number | undefined;
            readonly inputTokens?: number | undefined;
            readonly cachedInputTokens?: number | undefined;
            readonly outputTokens?: number | undefined;
            readonly reasoningOutputTokens?: number | undefined;
            readonly lastUsedTokens?: number | undefined;
            readonly lastInputTokens?: number | undefined;
            readonly lastCachedInputTokens?: number | undefined;
            readonly lastOutputTokens?: number | undefined;
            readonly lastReasoningOutputTokens?: number | undefined;
            readonly toolUses?: number | undefined;
            readonly durationMs?: number | undefined;
            readonly compactsAutomatically?: boolean | undefined;
            readonly autoCompactThreshold?: number | undefined;
            readonly cost?: {
                readonly amount: number;
                readonly currency: string;
            } | undefined;
        } | null | undefined;
        readonly nativeMetadata?: {
            readonly modelSelection?: {
                readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
                readonly model: string;
                readonly options?: readonly {
                    readonly id: string;
                    readonly value: string | boolean;
                }[];
            } | undefined;
            readonly title?: string | null | undefined;
            readonly updatedAt?: string | null | undefined;
            readonly itemIdentityVersion?: 2 | undefined;
            readonly forkHeadMessageId?: string | undefined;
            readonly claudeAttachmentBudget?: {
                readonly bytesUsed: number;
                readonly pagesUsed: number;
            } | undefined;
        } | null | undefined;
        readonly goal?: {
            readonly objective: string;
            readonly status: "active" | "blocked" | "budget_limited" | "complete" | "paused" | "usage_limited";
            readonly tokensUsed?: number | undefined;
            readonly tokenBudget?: number | null | undefined;
            readonly timeUsedSeconds?: number | undefined;
            readonly checks?: number | undefined;
            readonly lastCheck?: string | undefined;
        } | null | undefined;
        readonly createdAt: DateTime.Utc;
        readonly updatedAt: DateTime.Utc;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "provider-turn.updated";
    readonly payload: {
        readonly id: string & import("effect/Brand").Brand<"ProviderTurnId">;
        readonly providerThreadId: string & import("effect/Brand").Brand<"ProviderThreadId">;
        readonly nodeId: string & import("effect/Brand").Brand<"NodeId">;
        readonly runAttemptId: (string & import("effect/Brand").Brand<"RunAttemptId">) | null;
        readonly nativeTurnRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "interrupted" | "pending" | "running";
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly tokenUsage?: {
            readonly usedTokens: number;
            readonly maxTokens?: number | null | undefined;
            readonly inputTokens?: number | undefined;
            readonly cachedInputTokens?: number | undefined;
            readonly outputTokens?: number | undefined;
            readonly reasoningOutputTokens?: number | undefined;
            readonly promptCacheTtlMs?: number | undefined;
            readonly autoCompactThreshold?: number | undefined;
            readonly promptCacheExpiresAt?: string | undefined;
            readonly updatedAt: string;
        } | undefined;
        readonly turnTokenUsage?: {
            readonly usageScope: "main_agent";
            readonly cachedInputTokens?: number | undefined;
            readonly cacheCreationTokens?: number | undefined;
            readonly reasoningTokens?: number | undefined;
            readonly hasSubagents: boolean;
            readonly usageStatus: "complete";
            readonly inputTokens: number;
            readonly outputTokens: number;
        } | {
            readonly usageScope: "main_agent";
            readonly cachedInputTokens?: number | undefined;
            readonly cacheCreationTokens?: number | undefined;
            readonly reasoningTokens?: number | undefined;
            readonly hasSubagents: boolean;
            readonly usageStatus: "partial" | "unavailable";
            readonly inputTokens?: number | undefined;
            readonly outputTokens?: number | undefined;
        } | undefined;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "runtime-request.updated";
    readonly payload: {
        readonly id: string & import("effect/Brand").Brand<"RuntimeRequestId">;
        readonly nodeId: string & import("effect/Brand").Brand<"NodeId">;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeRequestRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly kind: "auth_refresh" | "command" | "dynamic_tool_call" | "file-change" | "file-read" | "mcp-elicitation" | "permission" | "user_input";
        readonly status: "cancelled" | "expired" | "pending" | "resolved";
        readonly responseCapability: {
            readonly type: "message";
        } | {
            readonly type: "not_resumable";
            readonly reason: string;
        } | {
            readonly type: "live";
            readonly providerSessionId: string & import("effect/Brand").Brand<"ProviderSessionId">;
            readonly supportsFeedback?: boolean | undefined;
        };
        readonly createdAt: DateTime.Utc;
        readonly resolvedAt: DateTime.Utc | null;
        readonly decision?: "accept" | "acceptAlways" | "acceptForSession" | "cancel" | "decline" | undefined;
        readonly feedback?: string | undefined;
        readonly answers?: {
            readonly [x: string]: unknown;
        } | undefined;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "message.updated";
    readonly payload: {
        readonly createdBy: "agent" | "system" | "user";
        readonly creationSource: "mcp" | "mobile" | "provider" | "server" | "web";
        readonly notification?: {
            readonly source: {
                readonly kind: "command";
            } | {
                readonly kind: "command";
            } | {
                readonly kind: "monitor";
            } | {
                readonly kind: "background_task";
            } | {
                readonly kind: "system";
            } | {
                readonly kind: "subagent";
                readonly childThreadId?: (string & import("effect/Brand").Brand<"ThreadId">) | undefined;
            } | {
                readonly kind: "delegated_task";
                readonly taskIds: readonly (string & import("effect/Brand").Brand<"NodeId">)[];
                readonly childThreadId?: (string & import("effect/Brand").Brand<"ThreadId">) | undefined;
            };
            readonly outcome: "cancelled" | "completed" | "failed" | "unknown" | "updated";
            readonly summary: string;
            readonly detail?: string | undefined;
        } | undefined;
        readonly scheduledTaskId?: (string & import("effect/Brand").Brand<"ScheduledTaskId">) | undefined;
        readonly senderThreadId?: (string & import("effect/Brand").Brand<"ThreadId">) | undefined;
        readonly idleCompaction?: "beforeCacheExpires" | "onReturn" | undefined;
        readonly workflowScript?: boolean | undefined;
        readonly id: string & import("effect/Brand").Brand<"MessageId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly role: "assistant" | "system" | "user";
        readonly text: string;
        readonly context?: {
            readonly version: 1;
            readonly guest?: {
                readonly guestMessageId: string & import("effect/Brand").Brand<"GuestMessageId">;
                readonly name: string;
                readonly text: string;
                readonly shareId?: (string & import("effect/Brand").Brand<"GuestShareId">) | undefined;
            } | undefined;
            readonly records: readonly ({
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly attachmentId: string;
                readonly name: string;
                readonly mimeType: string;
                readonly sizeBytes: number;
                readonly kind: "image";
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly attachmentId: string;
                readonly name: string;
                readonly mimeType: string;
                readonly sizeBytes: number;
                readonly kind: "file";
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "terminal";
                readonly terminalId: string;
                readonly terminalLabel: string;
                readonly lineStart: number;
                readonly lineEnd: number;
                readonly text: string;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly pageUrl: string;
                readonly pageTitle: string | null;
                readonly tagName: string;
                readonly selector: string | null;
                readonly htmlPreview: string;
                readonly componentName: string | null;
                readonly source: {
                    readonly functionName: string | null;
                    readonly fileName: string | null;
                    readonly lineNumber: number | null;
                    readonly columnNumber: number | null;
                } | null;
                readonly styles: string;
                readonly kind: "element";
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "mention";
                readonly path: string;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "skill";
                readonly name: string;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "thread";
                readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly title: string;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "environment";
                readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: string;
                readonly payload: unknown;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "preview-annotation";
                readonly annotationId: string;
                readonly pageUrl: string;
                readonly pageTitle: string | null;
                readonly comment: string;
                readonly targetSummary: string;
                readonly styleChanges: readonly string[];
                readonly elements?: readonly {
                    readonly pageUrl: string;
                    readonly pageTitle: string | null;
                    readonly tagName: string;
                    readonly selector: string | null;
                    readonly htmlPreview: string;
                    readonly componentName: string | null;
                    readonly source: {
                        readonly functionName: string | null;
                        readonly fileName: string | null;
                        readonly lineNumber: number | null;
                        readonly columnNumber: number | null;
                    } | null;
                    readonly styles: string;
                }[];
                readonly elementIds?: readonly string[];
                readonly regionCount?: number;
                readonly strokeCount?: number;
                readonly styleChangeDetails?: readonly {
                    readonly targetId: string;
                    readonly selector: string | null;
                    readonly property: string;
                    readonly previousValue: string;
                    readonly value: string;
                }[];
                readonly screenshotContextId?: string & import("effect/Brand").Brand<"ComposerContextId">;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "review-comment";
                readonly sectionId: string;
                readonly sectionTitle: string;
                readonly filePath: string;
                readonly startIndex: number;
                readonly endIndex: number;
                readonly rangeLabel: string;
                readonly text: string;
                readonly diff: string;
                readonly fenceLanguage?: string;
                readonly pullRequest?: {
                    readonly number: number;
                    readonly title: string;
                    readonly url: string;
                    readonly headBranch: string;
                    readonly baseBranch: string;
                    readonly state: "closed" | "merged" | "open";
                    readonly isDraft: boolean;
                };
            })[];
        } | undefined;
        readonly attachments: readonly ({
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
        })[];
        readonly streaming: boolean;
        readonly createdAt: DateTime.Utc;
        readonly updatedAt: DateTime.Utc;
        readonly delegatedCompletion?: {
            readonly parentRunId: string & import("effect/Brand").Brand<"RunId">;
            readonly generation: number;
            readonly taskIds: readonly (string & import("effect/Brand").Brand<"NodeId">)[];
        } | undefined;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "turn-item.updated";
    readonly payload: {
        readonly source: {
            readonly kind: "command";
        } | {
            readonly kind: "command";
        } | {
            readonly kind: "monitor";
        } | {
            readonly kind: "background_task";
        } | {
            readonly kind: "system";
        } | {
            readonly kind: "subagent";
            readonly childThreadId?: (string & import("effect/Brand").Brand<"ThreadId">) | undefined;
        } | {
            readonly kind: "delegated_task";
            readonly taskIds: readonly (string & import("effect/Brand").Brand<"NodeId">)[];
            readonly childThreadId?: (string & import("effect/Brand").Brand<"ThreadId">) | undefined;
        };
        readonly outcome: "cancelled" | "completed" | "failed" | "unknown" | "updated";
        readonly summary: string;
        readonly detail?: string | undefined;
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "notification";
    } | {
        readonly createdBy: "agent" | "system" | "user";
        readonly creationSource: "mcp" | "mobile" | "provider" | "server" | "web";
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "user_message";
        readonly messageId: string & import("effect/Brand").Brand<"MessageId">;
        readonly scheduledTaskId?: (string & import("effect/Brand").Brand<"ScheduledTaskId">) | undefined;
        readonly senderThreadId?: (string & import("effect/Brand").Brand<"ThreadId">) | undefined;
        readonly idleCompaction?: "beforeCacheExpires" | "onReturn" | undefined;
        readonly workflowScript?: boolean | undefined;
        readonly inputIntent: "promoted_queued_to_steer" | "queued_turn" | "steer" | "turn_start";
        readonly text: string;
        readonly textOmitted?: true;
        readonly context?: {
            readonly version: 1;
            readonly guest?: {
                readonly guestMessageId: string & import("effect/Brand").Brand<"GuestMessageId">;
                readonly name: string;
                readonly text: string;
                readonly shareId?: (string & import("effect/Brand").Brand<"GuestShareId">) | undefined;
            } | undefined;
            readonly records: readonly ({
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly attachmentId: string;
                readonly name: string;
                readonly mimeType: string;
                readonly sizeBytes: number;
                readonly kind: "image";
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly attachmentId: string;
                readonly name: string;
                readonly mimeType: string;
                readonly sizeBytes: number;
                readonly kind: "file";
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "terminal";
                readonly terminalId: string;
                readonly terminalLabel: string;
                readonly lineStart: number;
                readonly lineEnd: number;
                readonly text: string;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly pageUrl: string;
                readonly pageTitle: string | null;
                readonly tagName: string;
                readonly selector: string | null;
                readonly htmlPreview: string;
                readonly componentName: string | null;
                readonly source: {
                    readonly functionName: string | null;
                    readonly fileName: string | null;
                    readonly lineNumber: number | null;
                    readonly columnNumber: number | null;
                } | null;
                readonly styles: string;
                readonly kind: "element";
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "mention";
                readonly path: string;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "skill";
                readonly name: string;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "thread";
                readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly title: string;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "environment";
                readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: string;
                readonly payload: unknown;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "preview-annotation";
                readonly annotationId: string;
                readonly pageUrl: string;
                readonly pageTitle: string | null;
                readonly comment: string;
                readonly targetSummary: string;
                readonly styleChanges: readonly string[];
                readonly elements?: readonly {
                    readonly pageUrl: string;
                    readonly pageTitle: string | null;
                    readonly tagName: string;
                    readonly selector: string | null;
                    readonly htmlPreview: string;
                    readonly componentName: string | null;
                    readonly source: {
                        readonly functionName: string | null;
                        readonly fileName: string | null;
                        readonly lineNumber: number | null;
                        readonly columnNumber: number | null;
                    } | null;
                    readonly styles: string;
                }[];
                readonly elementIds?: readonly string[];
                readonly regionCount?: number;
                readonly strokeCount?: number;
                readonly styleChangeDetails?: readonly {
                    readonly targetId: string;
                    readonly selector: string | null;
                    readonly property: string;
                    readonly previousValue: string;
                    readonly value: string;
                }[];
                readonly screenshotContextId?: string & import("effect/Brand").Brand<"ComposerContextId">;
            } | {
                readonly version: 1;
                readonly contextId: string & import("effect/Brand").Brand<"ComposerContextId">;
                readonly label: string;
                readonly kind: "review-comment";
                readonly sectionId: string;
                readonly sectionTitle: string;
                readonly filePath: string;
                readonly startIndex: number;
                readonly endIndex: number;
                readonly rangeLabel: string;
                readonly text: string;
                readonly diff: string;
                readonly fenceLanguage?: string;
                readonly pullRequest?: {
                    readonly number: number;
                    readonly title: string;
                    readonly url: string;
                    readonly headBranch: string;
                    readonly baseBranch: string;
                    readonly state: "closed" | "merged" | "open";
                    readonly isDraft: boolean;
                };
            })[];
        } | undefined;
        readonly attachments: readonly ({
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
        })[];
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "assistant_message";
        readonly messageId: string & import("effect/Brand").Brand<"MessageId">;
        readonly text: string;
        readonly textOmitted?: true;
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
        readonly streaming: boolean;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "reasoning";
        readonly text: string;
        readonly streaming: boolean;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "proposed_plan";
        readonly planId: string & import("effect/Brand").Brand<"PlanId">;
        readonly markdown: string;
        readonly streaming: boolean;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "todo_list";
        readonly planId: string & import("effect/Brand").Brand<"PlanId">;
        readonly steps: readonly {
            readonly id: string;
            readonly text: string;
            readonly status: "completed" | "pending" | "running";
            readonly durationAnchorAt?: string | undefined;
            readonly durationMs?: number | undefined;
        }[];
        readonly explanation?: string | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "user_input_request";
        readonly requestId: string & import("effect/Brand").Brand<"RuntimeRequestId">;
        readonly questions: readonly {
            readonly id: string;
            readonly header: string;
            readonly question: string;
            readonly options: readonly {
                readonly label: string;
                readonly description: string;
                readonly value?: string | undefined;
                readonly preview?: string | undefined;
            }[];
            readonly multiSelect?: boolean | undefined;
            readonly allowCustomAnswer?: boolean | undefined;
            readonly initialAnswer?: string | undefined;
            readonly required?: boolean | undefined;
        }[];
        readonly questionAnswer?: {
            readonly requestId: string;
            readonly questionTextById?: {
                readonly [x: string]: string;
            } | undefined;
            readonly answers: {
                readonly [x: string]: unknown;
            };
            readonly attachmentsByQuestionId: {
                readonly [x: string]: readonly ({
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
                })[];
            };
        } | undefined;
        readonly responseMode?: "message" | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "file_change";
        readonly fileName: string;
        readonly additions?: number | undefined;
        readonly deletions?: number | undefined;
        readonly diffStr?: string | undefined;
        readonly oldStr?: string | undefined;
        readonly newStr?: string | undefined;
        readonly changes?: readonly {
            readonly operation: string;
            readonly path: string;
            readonly oldPath?: string | undefined;
            readonly fileType?: string | undefined;
            readonly mimeType?: string | undefined;
        }[] | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "command_execution";
        readonly input: string;
        readonly output?: string | undefined;
        readonly outputOmitted?: boolean | undefined;
        readonly outputIndicatesFailure?: boolean | undefined;
        readonly exitCode?: number | undefined;
        readonly monitor?: boolean | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "file_search";
        readonly pattern?: string | undefined;
        readonly results?: readonly {
            readonly fileName: string;
            readonly line?: number | undefined;
            readonly column?: number | undefined;
            readonly preview?: string | undefined;
        }[] | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "web_search";
        readonly patterns?: readonly string[] | undefined;
        readonly results?: readonly {
            readonly title?: string | undefined;
            readonly url?: string | undefined;
            readonly snippet?: string | undefined;
        }[] | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "approval_request";
        readonly requestId: string & import("effect/Brand").Brand<"RuntimeRequestId">;
        readonly requestKind: "command" | "file-change" | "file-read" | "mcp-elicitation" | "permission";
        readonly prompt?: string | undefined;
        readonly reason?: string | undefined;
        readonly fullAccessOverride?: "ask_rule" | "provider_check" | undefined;
        readonly appName?: string | undefined;
        readonly options?: readonly {
            readonly decision: "accept" | "acceptAlways" | "acceptForSession" | "cancel" | "decline";
            readonly label: string;
            readonly warning?: string | undefined;
        }[] | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "checkpoint";
        readonly checkpointId: string & import("effect/Brand").Brand<"CheckpointId">;
        readonly scopeId: string & import("effect/Brand").Brand<"CheckpointScopeId">;
        readonly files: readonly {
            readonly path: string;
            readonly kind: string;
            readonly additions: number;
            readonly deletions: number;
        }[];
        readonly filesOmitted?: true;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "run_interrupt_request";
        readonly message: string;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "run_interrupt_result";
        readonly message: string;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "system_notice";
        readonly message: string;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "error";
        readonly failure: {
            readonly class: "permission_error" | "provider_error" | "transport_error" | "unknown" | "usage_limit" | "validation_error";
            readonly message: string;
            readonly code: string | null;
            readonly retryable: boolean | null;
            readonly resetAt?: string | null | undefined;
        };
        readonly retry?: {
            readonly attempt: number;
            readonly maxAttempts: number | null;
            readonly retryDelayMs: number | null;
        } | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "compaction";
        readonly driver: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | null;
        readonly summary?: string | undefined;
        readonly beforeTokenCount?: number | undefined;
        readonly afterTokenCount?: number | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "handoff";
        readonly contextHandoffId: string & import("effect/Brand").Brand<"ContextHandoffId">;
        readonly fromProviderThreadIds: readonly (string & import("effect/Brand").Brand<"ProviderThreadId">)[];
        readonly toProviderThreadId: string & import("effect/Brand").Brand<"ProviderThreadId">;
        readonly fromProviderInstanceIds: readonly (string & import("effect/Brand").Brand<"ProviderInstanceId">)[];
        readonly toProviderInstanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly fromModelSelections?: readonly {
            readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
            readonly model: string;
            readonly options?: readonly {
                readonly id: string;
                readonly value: string | boolean;
            }[];
        }[] | undefined;
        readonly toModel?: string | undefined;
        readonly strategy: "checkpoint_summary" | "delta_since_target_last_seen" | "fork_delta_summary" | "full_thread_summary" | "manual_context";
        readonly summary?: string | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "fork";
        readonly source: {
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
        };
        readonly targetThreadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly providerThreadId?: (string & import("effect/Brand").Brand<"ProviderThreadId">) | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "thread_created";
        readonly targetThreadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly targetRunId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly targetProviderInstanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly targetModel: string;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "secret_request";
        readonly label: string;
        readonly reason: string;
        readonly placeholder?: string | undefined;
        readonly delivery?: "file" | undefined;
        readonly secretStatus: "cancelled" | "declined" | "pending" | "saved";
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "link_request";
        readonly url?: string | undefined;
        readonly reason: string;
        readonly environmentId?: (string & import("effect/Brand").Brand<"EnvironmentId">) | undefined;
        readonly label?: string | undefined;
        readonly hint?: string | undefined;
        readonly requestedAccess?: "approval-required" | "auto" | "auto-accept-edits" | "full-access" | "read-only" | undefined;
        readonly linkStatus: "cancelled" | "declined" | "failed" | "linked" | "pending";
        readonly linkedEnvironmentId?: (string & import("effect/Brand").Brand<"EnvironmentId">) | undefined;
        readonly linkedLabel?: string | undefined;
        readonly linkedAccess?: "approval-required" | "auto" | "auto-accept-edits" | "full-access" | "read-only" | undefined;
        readonly failure?: string | undefined;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "subagent";
        readonly subagentId: string & import("effect/Brand").Brand<"NodeId">;
        readonly origin: "app_owned" | "provider_native";
        readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
        readonly providerInstanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly childThreadId: (string & import("effect/Brand").Brand<"ThreadId">) | null;
        readonly remoteChild?: {
            readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly label: string;
            readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
            readonly stoppedThere?: boolean | undefined;
            readonly stopCount?: number | undefined;
        } | undefined;
        readonly prompt: string;
        readonly progress?: string | undefined;
        readonly result: string | null;
        readonly promptOmitted?: true;
        readonly resultOmitted?: true;
    } | {
        readonly toolNonExecutionKind?: string | undefined;
        readonly toolSurface?: "browser" | "computer" | undefined;
        readonly toolIcon?: {
            readonly _tag: "native-app";
            readonly app: {
                readonly _tag: "app-id";
                readonly appId: string;
            } | {
                readonly _tag: "display-name";
                readonly displayName: string;
            };
        } | {
            readonly _tag: "themed-logo";
            readonly logoUrl: string;
            readonly logoUrlDark?: string | undefined;
        } | {
            readonly _tag: "website";
            readonly pageUrl: string;
            readonly faviconUrl?: string | undefined;
            readonly faviconUrlDark?: string | undefined;
        } | undefined;
        readonly toolSource?: {
            readonly key: string;
            readonly name: string;
            readonly kind: "browser" | "computer" | "integration";
            readonly icon?: {
                readonly _tag: "native-app";
                readonly app: {
                    readonly _tag: "app-id";
                    readonly appId: string;
                } | {
                    readonly _tag: "display-name";
                    readonly displayName: string;
                };
            } | {
                readonly _tag: "themed-logo";
                readonly logoUrl: string;
                readonly logoUrlDark?: string | undefined;
            } | {
                readonly _tag: "website";
                readonly pageUrl: string;
                readonly faviconUrl?: string | undefined;
                readonly faviconUrlDark?: string | undefined;
            } | undefined;
        } | undefined;
        readonly id: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: (string & import("effect/Brand").Brand<"NodeId">) | null;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly providerTurnId: (string & import("effect/Brand").Brand<"ProviderTurnId">) | null;
        readonly nativeItemRef: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly nativeId: string | null;
            readonly strength: "none" | "strong" | "weak";
            readonly fingerprint?: string | undefined;
            readonly ordinal?: number | undefined;
        } | null;
        readonly parentItemId: (string & import("effect/Brand").Brand<"TurnItemId">) | null;
        readonly ordinal: number;
        readonly status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "pending" | "running" | "waiting";
        readonly title: string | null;
        readonly startedAt: DateTime.Utc | null;
        readonly completedAt: DateTime.Utc | null;
        readonly updatedAt: DateTime.Utc;
        readonly type: "dynamic_tool";
        readonly toolName: string | null;
        readonly viewedImagePath?: string | undefined;
        readonly input: unknown;
        readonly output?: unknown;
        readonly outputOmitted?: boolean | undefined;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "plan.updated";
    readonly payload: {
        readonly id: string & import("effect/Brand").Brand<"PlanId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: string & import("effect/Brand").Brand<"NodeId">;
        readonly status: "active" | "completed" | "draft" | "superseded";
        readonly detailInTurnItem?: true | undefined;
        readonly kind: "proposed_plan";
        readonly markdown: string;
    } | {
        readonly id: string & import("effect/Brand").Brand<"PlanId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: string & import("effect/Brand").Brand<"NodeId">;
        readonly status: "active" | "completed" | "draft" | "superseded";
        readonly detailInTurnItem?: true | undefined;
        readonly kind: "todo_list";
        readonly steps: readonly {
            readonly id: string;
            readonly text: string;
            readonly status: "completed" | "pending" | "running";
            readonly durationAnchorAt?: string | undefined;
            readonly durationMs?: number | undefined;
        }[];
        readonly explanation?: string | undefined;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "checkpoint-scope.created";
    readonly payload: {
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
        readonly createdAt: DateTime.Utc;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "checkpoint.captured";
    readonly payload: {
        readonly id: string & import("effect/Brand").Brand<"CheckpointId">;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly scopeId: string & import("effect/Brand").Brand<"CheckpointScopeId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly nodeId: string & import("effect/Brand").Brand<"NodeId">;
        readonly parentCheckpointId: (string & import("effect/Brand").Brand<"CheckpointId">) | null;
        readonly ordinalWithinScope: number;
        readonly appRunOrdinal: number | null;
        readonly ref: string & import("effect/Brand").Brand<"CheckpointRef">;
        readonly status: "error" | "missing" | "ready" | "stale";
        readonly files: readonly {
            readonly path: string;
            readonly kind: string;
            readonly additions: number;
            readonly deletions: number;
        }[];
        readonly capturedAt: DateTime.Utc;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "checkpoint.rollback-requested";
    readonly payload: {
        readonly scopeId: string & import("effect/Brand").Brand<"CheckpointScopeId">;
        readonly checkpointId: string & import("effect/Brand").Brand<"CheckpointId">;
        readonly requestedAt: DateTime.Utc;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "context-handoff.updated";
    readonly payload: {
        readonly id: string & import("effect/Brand").Brand<"ContextHandoffId">;
        readonly transferId?: (string & import("effect/Brand").Brand<"ContextTransferId">) | null | undefined;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly targetRunId: string & import("effect/Brand").Brand<"RunId">;
        readonly fromProviderThreadIds: readonly (string & import("effect/Brand").Brand<"ProviderThreadId">)[];
        readonly toProviderThreadId: string & import("effect/Brand").Brand<"ProviderThreadId">;
        readonly coveredRunOrdinals: {
            readonly from: number;
            readonly to: number;
        };
        readonly strategy: "checkpoint_summary" | "delta_since_target_last_seen" | "fork_delta_summary" | "full_thread_summary" | "manual_context";
        readonly status: "failed" | "pending" | "ready" | "superseded";
        readonly summaryMessageId: (string & import("effect/Brand").Brand<"MessageId">) | null;
        readonly summaryText: string;
        readonly history?: {
            readonly messages: readonly {
                readonly role: "assistant" | "user";
                readonly text: string;
                readonly runStatus?: string | undefined;
                readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
                readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
                readonly itemId: string & import("effect/Brand").Brand<"TurnItemId">;
                readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
                readonly status: string;
                readonly kind: string;
            }[];
            readonly coverage: string;
            readonly omittedItems: number;
            readonly omittedItemIds?: readonly (string & import("effect/Brand").Brand<"TurnItemId">)[] | undefined;
        } | undefined;
        readonly delivery?: {
            readonly nativeThreadId: string;
            readonly status: "injected" | "inline" | "pending";
            readonly itemIds: readonly (string & import("effect/Brand").Brand<"TurnItemId">)[];
            readonly omittedItemIds?: readonly (string & import("effect/Brand").Brand<"TurnItemId">)[] | undefined;
        } | undefined;
        readonly detailInTurnItem?: true | undefined;
        readonly createdByProviderInstanceId: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | null;
        readonly createdAt: DateTime.Utc;
        readonly updatedAt: DateTime.Utc;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "context-transfer.created";
    readonly payload: {
        readonly id: string & import("effect/Brand").Brand<"ContextTransferId">;
        readonly type: "fork" | "merge_back" | "provider_handoff" | "subagent_result" | "subagent_spawn";
        readonly sourceThreadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly targetThreadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly sourcePoint: {
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
            readonly checkpointId?: (string & import("effect/Brand").Brand<"CheckpointId">) | undefined;
            readonly turnItemId?: (string & import("effect/Brand").Brand<"TurnItemId">) | undefined;
            readonly providerThreadRef?: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | undefined;
            readonly providerTurnRef?: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | undefined;
        };
        readonly basePoint: {
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
            readonly checkpointId?: (string & import("effect/Brand").Brand<"CheckpointId">) | undefined;
            readonly turnItemId?: (string & import("effect/Brand").Brand<"TurnItemId">) | undefined;
            readonly providerThreadRef?: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | undefined;
            readonly providerTurnRef?: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | undefined;
        } | null;
        readonly sourceProviderInstanceId: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | null;
        readonly sourceTokenUsage?: {
            readonly usedTokens: number;
            readonly maxTokens?: number | null | undefined;
            readonly inputTokens?: number | undefined;
            readonly cachedInputTokens?: number | undefined;
            readonly outputTokens?: number | undefined;
            readonly reasoningOutputTokens?: number | undefined;
            readonly promptCacheTtlMs?: number | undefined;
            readonly autoCompactThreshold?: number | undefined;
            readonly promptCacheExpiresAt?: string | undefined;
            readonly updatedAt: string;
        } | undefined;
        readonly targetProviderInstanceId: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | null;
        readonly targetRunId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly status: "consumed" | "failed" | "pending" | "resolved_native" | "resolved_portable" | "superseded";
        readonly resolution: {
            readonly strategy: "native_fork";
            readonly providerThreadRef: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            };
        } | {
            readonly strategy: "portable_context";
            readonly contextHandoffId: string & import("effect/Brand").Brand<"ContextHandoffId">;
        } | {
            readonly strategy: "delta_context";
            readonly contextHandoffId: string & import("effect/Brand").Brand<"ContextHandoffId">;
        } | {
            readonly strategy: "fork_delta_context";
            readonly contextHandoffId: string & import("effect/Brand").Brand<"ContextHandoffId">;
        } | {
            readonly strategy: "checkpoint_context";
            readonly contextHandoffId: string & import("effect/Brand").Brand<"ContextHandoffId">;
        } | null;
        readonly createdBy: "agent" | "system" | "user";
        readonly error: string | null;
        readonly createdAt: DateTime.Utc;
        readonly updatedAt: DateTime.Utc;
        readonly consumedAt: DateTime.Utc | null;
    };
} | {
    readonly id: string & import("effect/Brand").Brand<"EventId">;
    readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
    readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
    readonly nodeId?: (string & import("effect/Brand").Brand<"NodeId">) | undefined;
    readonly driver?: (string & import("effect/Brand").Brand<"ProviderDriverKind">) | undefined;
    readonly providerInstanceId?: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | undefined;
    readonly rawEventId?: (string & import("effect/Brand").Brand<"RawEventId">) | undefined;
    readonly occurredAt: DateTime.Utc;
    readonly type: "context-transfer.updated";
    readonly payload: {
        readonly id: string & import("effect/Brand").Brand<"ContextTransferId">;
        readonly type: "fork" | "merge_back" | "provider_handoff" | "subagent_result" | "subagent_spawn";
        readonly sourceThreadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly targetThreadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly sourcePoint: {
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
            readonly checkpointId?: (string & import("effect/Brand").Brand<"CheckpointId">) | undefined;
            readonly turnItemId?: (string & import("effect/Brand").Brand<"TurnItemId">) | undefined;
            readonly providerThreadRef?: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | undefined;
            readonly providerTurnRef?: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | undefined;
        };
        readonly basePoint: {
            readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
            readonly runId?: (string & import("effect/Brand").Brand<"RunId">) | undefined;
            readonly checkpointId?: (string & import("effect/Brand").Brand<"CheckpointId">) | undefined;
            readonly turnItemId?: (string & import("effect/Brand").Brand<"TurnItemId">) | undefined;
            readonly providerThreadRef?: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | undefined;
            readonly providerTurnRef?: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            } | undefined;
        } | null;
        readonly sourceProviderInstanceId: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | null;
        readonly sourceTokenUsage?: {
            readonly usedTokens: number;
            readonly maxTokens?: number | null | undefined;
            readonly inputTokens?: number | undefined;
            readonly cachedInputTokens?: number | undefined;
            readonly outputTokens?: number | undefined;
            readonly reasoningOutputTokens?: number | undefined;
            readonly promptCacheTtlMs?: number | undefined;
            readonly autoCompactThreshold?: number | undefined;
            readonly promptCacheExpiresAt?: string | undefined;
            readonly updatedAt: string;
        } | undefined;
        readonly targetProviderInstanceId: (string & import("effect/Brand").Brand<"ProviderInstanceId">) | null;
        readonly targetRunId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly status: "consumed" | "failed" | "pending" | "resolved_native" | "resolved_portable" | "superseded";
        readonly resolution: {
            readonly strategy: "native_fork";
            readonly providerThreadRef: {
                readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
                readonly nativeId: string | null;
                readonly strength: "none" | "strong" | "weak";
                readonly fingerprint?: string | undefined;
                readonly ordinal?: number | undefined;
            };
        } | {
            readonly strategy: "portable_context";
            readonly contextHandoffId: string & import("effect/Brand").Brand<"ContextHandoffId">;
        } | {
            readonly strategy: "delta_context";
            readonly contextHandoffId: string & import("effect/Brand").Brand<"ContextHandoffId">;
        } | {
            readonly strategy: "fork_delta_context";
            readonly contextHandoffId: string & import("effect/Brand").Brand<"ContextHandoffId">;
        } | {
            readonly strategy: "checkpoint_context";
            readonly contextHandoffId: string & import("effect/Brand").Brand<"ContextHandoffId">;
        } | null;
        readonly createdBy: "agent" | "system" | "user";
        readonly error: string | null;
        readonly createdAt: DateTime.Utc;
        readonly updatedAt: DateTime.Utc;
        readonly consumedAt: DateTime.Utc | null;
    };
})[], E, never>;
