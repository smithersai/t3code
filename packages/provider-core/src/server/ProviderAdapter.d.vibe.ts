import type { OrchestrationV2HistoricalMessage } from "@t3tools/contracts";
import { CheckpointId, ModelSelection, NodeId, OrchestrationV2AppThread, OrchestrationV2ConversationMessage, OrchestrationV2ProviderSession, OrchestrationV2ProviderCapabilities, OrchestrationV2ProviderThread, OrchestrationV2ProviderTurn, OrchestrationV2RuntimeRequest, OrchestrationV2Subagent, ProviderApprovalDecision, ProviderDriverKind, ProviderInstanceId, ProviderUserInputAnswers, ProviderSessionId, ProviderTurnId, RuntimeRequestId, RunAttemptId, RunId, ThreadId } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Schema from "effect/Schema";
import type * as Effect from "effect/Effect";
import type * as Scope from "effect/Scope";
import type * as Stream from "effect/Stream";
import type { ProviderSelectionTransitionInput, ProviderSelectionTransitionPlan } from "./selectionTransition.ts";
export declare const ProviderAdapterV2RuntimePolicy: Schema.Struct<{
    readonly runtimeMode: Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>;
    readonly interactionMode: Schema.Literals<readonly ["default", "plan"]>;
    readonly cwd: Schema.NullOr<Schema.String>;
    readonly approvalPolicy: Schema.optional<Schema.Unknown>;
    readonly sandboxPolicy: Schema.optional<Schema.Unknown>;
    readonly reasoningEffort: Schema.optional<Schema.String>;
}>;
export type ProviderAdapterV2RuntimePolicy = typeof ProviderAdapterV2RuntimePolicy.Type;
export declare const ProviderAdapterV2TurnMessage: Schema.Struct<{
    readonly messageId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "MessageId">;
    readonly text: Schema.String;
    readonly attachments: Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"image">;
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly sizeBytes: Schema.Int;
        readonly source: Schema.optional<Schema.Struct<{
            readonly kind: Schema.Literal<"snap-shot">;
            readonly capturedAt: Schema.String;
            readonly appName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly windowTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly accessibleText: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly accessibility: Schema.optional<Schema.Union<readonly [Schema.Struct<{
                readonly format: Schema.Literal<"flat-text">;
                readonly text: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly truncated: Schema.Boolean;
            }>, Schema.Struct<{
                readonly format: Schema.Literal<"element-tree">;
                readonly coordinateSpace: Schema.Literal<"captured-image">;
                readonly imageSize: Schema.Struct<{
                    readonly width: Schema.Int;
                    readonly height: Schema.Int;
                }>;
                readonly truncated: Schema.Boolean;
                readonly root: Schema.Codec<import("@t3tools/contracts").SnapShotAccessibilityNode, import("@t3tools/contracts").SnapShotAccessibilityNode, never, never>;
            }>]>>;
            readonly appIdentifier: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly appIconDataUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"file">;
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly sizeBytes: Schema.Int;
        readonly source: Schema.optional<Schema.TaggedStruct<"pasted-text", {}>>;
    }>, Schema.Struct<{
        readonly type: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly sizeBytes: Schema.Int;
    }>]>>;
    readonly createdBy: Schema.Literals<readonly ["user", "agent", "system"]>;
    readonly creationSource: Schema.Literals<readonly ["web", "mobile", "mcp", "provider", "server"]>;
    readonly scheduledTaskId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">>;
    readonly senderThreadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
}>;
export type ProviderAdapterV2TurnMessage = typeof ProviderAdapterV2TurnMessage.Type;
export declare const ProviderAdapterV2SessionStatus: Schema.Literals<readonly ["starting", "ready", "running", "waiting", "stopped", "error"]>;
export type ProviderAdapterV2SessionStatus = typeof ProviderAdapterV2SessionStatus.Type;
export declare const ProviderAdapterV2Event: Schema.Union<readonly [Schema.Struct<{
    readonly type: Schema.Literal<"app_thread.created">;
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly appThread: Schema.Struct<{
        readonly createdBy: Schema.Literals<readonly ["user", "agent", "system"]>;
        readonly creationSource: Schema.Literals<readonly ["web", "mobile", "mcp", "provider", "server"]>;
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
        readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly modelSelection: Schema.decodeTo<Schema.Struct<{
            readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
            readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
            }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
            }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
        }>, Schema.Struct<{
            readonly provider: Schema.optional<Schema.Unknown>;
            readonly instanceId: Schema.optional<Schema.Unknown>;
            readonly model: Schema.Unknown;
            readonly options: Schema.optional<Schema.Unknown>;
        }>, never, never>;
        readonly runtimeMode: Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>;
        readonly interactionMode: Schema.Literals<readonly ["default", "plan"]>;
        readonly branch: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly worktreePath: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly linkedPullRequest: Schema.optional<Schema.NullOr<Schema.Struct<{
            readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
            readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly number: Schema.Int;
            readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>>;
        readonly pullRequests: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly host: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly number: Schema.Int;
            readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly repositoryWebUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly source: Schema.Literals<readonly ["manual", "created", "agent", "stack", "stack-dismissed"]>;
            readonly linkedAt: Schema.String;
            readonly snapshot: Schema.NullOr<Schema.Struct<{
                readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
                readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly headBranch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly baseBranch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly isDraft: Schema.Boolean;
                readonly updatedAt: Schema.NullOr<Schema.String>;
                readonly syncedAt: Schema.String;
                readonly closedAt: Schema.optional<Schema.NullOr<Schema.String>>;
                readonly mergedAt: Schema.optional<Schema.NullOr<Schema.String>>;
                readonly author: Schema.optional<Schema.NullOr<Schema.Struct<{
                    readonly isBot: Schema.optional<Schema.Boolean>;
                    readonly login: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly name: Schema.NullOr<Schema.String>;
                    readonly avatarUrl: Schema.NullOr<Schema.String>;
                }>>>;
                readonly additions: Schema.optional<Schema.Int>;
                readonly deletions: Schema.optional<Schema.Int>;
                readonly changedFiles: Schema.optional<Schema.Int>;
                readonly reviewDecision: Schema.optional<Schema.NullOr<Schema.Literals<readonly ["approved", "changes-requested", "review-required"]>>>;
                readonly checksState: Schema.optional<Schema.NullOr<Schema.Literals<readonly ["passing", "failing", "pending"]>>>;
                readonly mergeability: Schema.optional<Schema.Literals<readonly ["mergeable", "conflicting", "unknown"]>>;
            }>>;
            readonly stack: Schema.NullOr<Schema.Struct<{
                readonly kind: Schema.Literal<"native">;
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly number: Schema.Int;
                readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly base: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly layers: Schema.$Array<Schema.Struct<{
                    readonly number: Schema.Int;
                    readonly headBranch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
                }>>;
            }>>;
            readonly watch: Schema.optional<Schema.Struct<{
                readonly startedAt: Schema.String;
                readonly headSha: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly failedChecks: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly passed: Schema.Boolean;
                readonly passedChecks: Schema.withDecodingDefault<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>, never>;
                readonly owedChecks: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
                readonly remarksThrough: Schema.String;
                readonly remarkIds: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly conflicting: Schema.Boolean;
                readonly wakes: Schema.Int;
                readonly checksAwaitedSince: Schema.optional<Schema.NullOr<Schema.String>>;
            }>>;
            readonly endedWatch: Schema.optional<Schema.Struct<{
                readonly startedAt: Schema.String;
                readonly headSha: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly failedChecks: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly passed: Schema.Boolean;
                readonly passedChecks: Schema.withDecodingDefault<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>, never>;
                readonly owedChecks: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
                readonly remarksThrough: Schema.String;
                readonly remarkIds: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly conflicting: Schema.Boolean;
                readonly wakes: Schema.Int;
                readonly checksAwaitedSince: Schema.optional<Schema.NullOr<Schema.String>>;
            }>>;
        }>>>;
        readonly branchPullRequest: Schema.optional<Schema.NullOr<Schema.Struct<{
            readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
            readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly number: Schema.Int;
            readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>>;
        readonly activeProviderThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">>;
        readonly historyOrigin: Schema.optional<Schema.Literals<readonly ["native", "v1_import"]>>;
        readonly linkOrigin: Schema.optional<Schema.Struct<{
            readonly sessionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly label: Schema.String;
            readonly access: Schema.optional<Schema.Literals<readonly ["read-only", "approval-required", "auto-accept-edits", "auto", "full-access"]>>;
        }>>;
        readonly delegatedFrom: Schema.optional<Schema.Struct<{
            readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
            readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
            readonly title: Schema.String;
        }>>;
        readonly lineage: Schema.Struct<{
            readonly parentThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
            readonly relationshipToParent: Schema.NullOr<Schema.Literals<readonly ["fork", "subagent"]>>;
            readonly rootThreadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        }>;
        readonly forkedFrom: Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
            readonly type: Schema.Literal<"run">;
            readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
            readonly runId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"node">;
            readonly nodeId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"provider_thread">;
            readonly providerThreadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">;
            readonly providerTurnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">>;
        }>]>>;
        readonly createdAt: Schema.DateTimeUtc;
        readonly updatedAt: Schema.DateTimeUtc;
        readonly archivedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly settledOverride: Schema.withDecodingDefault<Schema.NullOr<Schema.Literals<readonly ["settled", "active"]>>, never>;
        readonly settledAt: Schema.withDecodingDefault<Schema.NullOr<Schema.DateTimeUtc>, never>;
        readonly unsettledAt: Schema.optional<Schema.NullOr<Schema.DateTimeUtc>>;
        readonly snoozedUntil: Schema.optional<Schema.NullOr<Schema.DateTimeUtc>>;
        readonly snoozedAt: Schema.optional<Schema.NullOr<Schema.DateTimeUtc>>;
        readonly lastSnoozeWakeAt: Schema.optional<Schema.NullOr<Schema.DateTimeUtc>>;
        readonly limitRecovery: Schema.optional<Schema.NullOr<Schema.Struct<{
            readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "CommandId">>;
            readonly runId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">;
            readonly resetAt: Schema.String;
            readonly autoResume: Schema.Boolean;
            readonly snooze: Schema.optional<Schema.Boolean>;
        }>>>;
        readonly guestShare: Schema.optional<Schema.NullOr<Schema.Struct<{
            readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "GuestShareId">;
            readonly host: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly createdAt: Schema.String;
            readonly expiresAt: Schema.String;
            readonly guestName: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly messages: Schema.$Array<Schema.Struct<{
                readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "GuestMessageId">;
                readonly text: Schema.String;
                readonly status: Schema.Literals<readonly ["pending", "sent", "dismissed"]>;
                readonly submittedAt: Schema.String;
                readonly attachments: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                    readonly type: Schema.Literal<"image">;
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly sizeBytes: Schema.Int;
                    readonly source: Schema.optional<Schema.Struct<{
                        readonly kind: Schema.Literal<"snap-shot">;
                        readonly capturedAt: Schema.String;
                        readonly appName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly windowTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly accessibleText: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                        readonly accessibility: Schema.optional<Schema.Union<readonly [Schema.Struct<{
                            readonly format: Schema.Literal<"flat-text">;
                            readonly text: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                            readonly truncated: Schema.Boolean;
                        }>, Schema.Struct<{
                            readonly format: Schema.Literal<"element-tree">;
                            readonly coordinateSpace: Schema.Literal<"captured-image">;
                            readonly imageSize: Schema.Struct<{
                                readonly width: Schema.Int;
                                readonly height: Schema.Int;
                            }>;
                            readonly truncated: Schema.Boolean;
                            readonly root: Schema.Codec<import("@t3tools/contracts").SnapShotAccessibilityNode, import("@t3tools/contracts").SnapShotAccessibilityNode, never, never>;
                        }>]>>;
                        readonly appIdentifier: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                        readonly appIconDataUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    }>>;
                }>, Schema.Struct<{
                    readonly type: Schema.Literal<"file">;
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly sizeBytes: Schema.Int;
                    readonly source: Schema.optional<Schema.TaggedStruct<"pasted-text", {}>>;
                }>, Schema.Struct<{
                    readonly type: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly sizeBytes: Schema.Int;
                }>]>>>;
            }>>;
        }>>>;
        readonly pinnedAt: Schema.optional<Schema.NullOr<Schema.DateTimeUtc>>;
        readonly autoSettleDisabledAt: Schema.optional<Schema.NullOr<Schema.DateTimeUtc>>;
        readonly pinOrderKey: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        readonly activeOrderKey: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        readonly lastVisitedAt: Schema.withDecodingDefault<Schema.NullOr<Schema.DateTimeUtc>, never>;
        readonly opens: Schema.optional<Schema.middlewareDecoding<Schema.NullOr<Schema.Struct<{
            readonly openedAt: Schema.Finite;
            readonly score: Schema.Finite;
            readonly picks: Schema.$Array<Schema.Struct<{
                readonly query: Schema.String;
                readonly at: Schema.Finite;
            }>>;
        }>>, never>>;
        readonly titleRegeneration: Schema.optional<Schema.NullOr<Schema.Struct<{
            readonly requestId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "CommandId">;
            readonly startedAt: Schema.DateTimeUtc;
        }>>>;
        readonly rollbackRequestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "CommandId">>;
        readonly rollbackFailure: Schema.optional<Schema.NullOr<Schema.Struct<{
            readonly requestId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "CommandId">;
            readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>>;
        readonly deletedAt: Schema.NullOr<Schema.DateTimeUtc>;
    }>;
    readonly createOnly: Schema.optional<Schema.Boolean>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"provider_session.updated">;
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerSession: Schema.Struct<{
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderSessionId">;
        readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
        readonly providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly status: Schema.Literals<readonly ["starting", "ready", "running", "waiting", "stopped", "error"]>;
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly model: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly capabilities: Schema.Struct<{
            readonly sessions: Schema.Struct<{
                readonly supportsMultipleProviderThreadsPerSession: Schema.Boolean;
                readonly supportsModelSwitchInSession: Schema.Boolean;
                readonly supportsProviderSwitchingViaHandoff: Schema.Boolean;
                readonly supportsRuntimeModeSwitchInSession: Schema.Boolean;
                readonly pendingRequestsSurviveRestart: Schema.Boolean;
            }>;
            readonly threads: Schema.Struct<{
                readonly canCreateEmptyThread: Schema.Boolean;
                readonly canReadThreadSnapshot: Schema.Boolean;
                readonly canRollbackThread: Schema.Boolean;
                readonly canForkThread: Schema.Boolean;
                readonly canForkFromTurn: Schema.Boolean;
                readonly canForkFromSubagentThread: Schema.Boolean;
                readonly exposesNativeThreadId: Schema.Boolean;
            }>;
            readonly turns: Schema.Struct<{
                readonly exposesNativeTurnId: Schema.Boolean;
                readonly emitsTurnStarted: Schema.Boolean;
                readonly emitsTurnCompleted: Schema.Boolean;
                readonly supportsInterrupt: Schema.Boolean;
                readonly supportsActiveSteering: Schema.Boolean;
                readonly activeSteeringInterruptsTools: Schema.optional<Schema.Boolean>;
                readonly supportsSteeringByInterruptRestart: Schema.Boolean;
                readonly supportsQueuedMessages: Schema.Boolean;
                readonly terminalStatusQuality: Schema.Literals<readonly ["strong", "weak", "none"]>;
            }>;
            readonly streaming: Schema.Struct<{
                readonly streamsAssistantText: Schema.Boolean;
                readonly streamsReasoning: Schema.Boolean;
                readonly streamsToolOutput: Schema.Boolean;
                readonly streamsPlanText: Schema.Boolean;
                readonly emitsMessageCompleted: Schema.Boolean;
            }>;
            readonly tools: Schema.Struct<{
                readonly exposesToolItemIds: Schema.Boolean;
                readonly emitsToolStarted: Schema.Boolean;
                readonly emitsToolCompleted: Schema.Boolean;
                readonly emitsToolOutput: Schema.Boolean;
                readonly supportsMcpTools: Schema.Boolean;
                readonly supportsDynamicToolCallbacks: Schema.Boolean;
            }>;
            readonly approvals: Schema.Struct<{
                readonly supportsCommandApproval: Schema.Boolean;
                readonly supportsFileReadApproval: Schema.Boolean;
                readonly supportsFileChangeApproval: Schema.Boolean;
                readonly supportsApplyPatchApproval: Schema.Boolean;
                readonly approvalsHaveNativeRequestIds: Schema.Boolean;
                readonly approvalCallbacksAreLiveOnly: Schema.Boolean;
                readonly approvalsCanOriginateFromSubagents: Schema.Boolean;
            }>;
            readonly planning: Schema.Struct<{
                readonly emitsPlanUpdated: Schema.Boolean;
                readonly emitsTodoList: Schema.Boolean;
                readonly emitsProposedPlan: Schema.Boolean;
                readonly supportsStructuredQuestions: Schema.Boolean;
                readonly planDeltasHaveItemIds: Schema.Boolean;
            }>;
            readonly subagents: Schema.Struct<{
                readonly supportsSubagents: Schema.Boolean;
                readonly exposesSubagentThreadIds: Schema.Boolean;
                readonly emitsSubagentLifecycle: Schema.Boolean;
                readonly canWaitForSubagents: Schema.Boolean;
                readonly canCloseSubagents: Schema.Boolean;
                readonly canForkSubagentThread: Schema.Boolean;
            }>;
            readonly context: Schema.Struct<{
                readonly acceptsSystemContext: Schema.Boolean;
                readonly acceptsDeveloperContext: Schema.Boolean;
                readonly acceptsSyntheticUserContext: Schema.Boolean;
                readonly canGenerateSummaries: Schema.Boolean;
                readonly canConsumeHandoffSummaries: Schema.Boolean;
                readonly supportsDeltaHandoff: Schema.Boolean;
                readonly supportsFullThreadHandoff: Schema.Boolean;
                readonly maxRecommendedHandoffChars: Schema.NullOr<Schema.Int>;
            }>;
            readonly checkpointing: Schema.Struct<{
                readonly appCanCheckpointFilesystem: Schema.Boolean;
                readonly supportsNestedCheckpointScopes: Schema.Boolean;
                readonly providerCanRollbackConversation: Schema.Boolean;
                readonly providerRollbackReturnsSnapshot: Schema.Boolean;
                readonly providerCanReadConversationSnapshot: Schema.Boolean;
            }>;
            readonly identity: Schema.Struct<{
                readonly nativeThreadIds: Schema.Literals<readonly ["strong", "weak", "none"]>;
                readonly nativeTurnIds: Schema.Literals<readonly ["strong", "weak", "none"]>;
                readonly nativeItemIds: Schema.Literals<readonly ["strong", "weak", "none"]>;
                readonly nativeRequestIds: Schema.Literals<readonly ["strong", "weak", "none"]>;
            }>;
            readonly runtimePolicy: Schema.withDecodingDefault<Schema.Struct<{
                readonly enforcement: Schema.Literals<readonly ["native", "client-boundary"]>;
            }>, never>;
        }>;
        readonly createdAt: Schema.DateTimeUtc;
        readonly updatedAt: Schema.DateTimeUtc;
        readonly lastError: Schema.NullOr<Schema.String>;
    }>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"provider_thread.updated">;
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerThread: Schema.Struct<{
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">;
        readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
        readonly providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly providerSessionId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderSessionId">>;
        readonly appThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
        readonly ownerNodeId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
        readonly nativeThreadRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly nativeConversationHeadRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly status: Schema.Literals<readonly ["not_loaded", "idle", "active", "archived", "closed", "error"]>;
        readonly firstRunOrdinal: Schema.NullOr<Schema.Int>;
        readonly lastRunOrdinal: Schema.NullOr<Schema.Int>;
        readonly handoffIds: Schema.$Array<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ContextHandoffId">>;
        readonly forkedFrom: Schema.NullOr<Schema.Struct<{
            readonly providerThreadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">;
            readonly providerTurnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">>;
            readonly checkpointId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "CheckpointId">>;
        }>>;
        readonly pendingBackgroundTasks: Schema.withDecodingDefault<Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
            readonly taskId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly parentTaskId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly awaited: Schema.optional<Schema.Literal<true>>;
            readonly kind: Schema.Literal<"subagent">;
            readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
            readonly childThreadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
        }>, Schema.Struct<{
            readonly taskId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly parentTaskId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly awaited: Schema.optional<Schema.Literal<true>>;
            readonly kind: Schema.Literal<"command">;
        }>, Schema.Struct<{
            readonly taskId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly parentTaskId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly awaited: Schema.optional<Schema.Literal<true>>;
            readonly kind: Schema.Literal<"monitor">;
        }>, Schema.Struct<{
            readonly taskId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly parentTaskId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly awaited: Schema.optional<Schema.Literal<true>>;
            readonly kind: Schema.Literal<"background_task">;
        }>, Schema.decodeTo<Schema.Union<readonly [Schema.Struct<{
            readonly taskId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly parentTaskId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly awaited: Schema.optional<Schema.Literal<true>>;
            readonly kind: Schema.Literal<"subagent">;
            readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
            readonly childThreadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
        }>, Schema.Struct<{
            readonly taskId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly parentTaskId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly awaited: Schema.optional<Schema.Literal<true>>;
            readonly kind: Schema.Literal<"command">;
        }>, Schema.Struct<{
            readonly taskId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly parentTaskId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly awaited: Schema.optional<Schema.Literal<true>>;
            readonly kind: Schema.Literal<"monitor">;
        }>, Schema.Struct<{
            readonly taskId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly parentTaskId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly awaited: Schema.optional<Schema.Literal<true>>;
            readonly kind: Schema.Literal<"background_task">;
        }>]>, Schema.Struct<{
            readonly taskId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly parentTaskId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly awaited: Schema.optional<Schema.Literal<true>>;
            readonly kind: Schema.optional<Schema.String>;
        }>, never, never>]>>>, never>;
        readonly contextUsage: Schema.withDecodingDefault<Schema.optional<Schema.NullOr<Schema.Struct<{
            readonly usedTokens: Schema.Int;
            readonly totalProcessedTokens: Schema.optional<Schema.Int>;
            readonly maxTokens: Schema.optional<Schema.Int>;
            readonly inputTokens: Schema.optional<Schema.Int>;
            readonly cachedInputTokens: Schema.optional<Schema.Int>;
            readonly outputTokens: Schema.optional<Schema.Int>;
            readonly reasoningOutputTokens: Schema.optional<Schema.Int>;
            readonly lastUsedTokens: Schema.optional<Schema.Int>;
            readonly lastInputTokens: Schema.optional<Schema.Int>;
            readonly lastCachedInputTokens: Schema.optional<Schema.Int>;
            readonly lastOutputTokens: Schema.optional<Schema.Int>;
            readonly lastReasoningOutputTokens: Schema.optional<Schema.Int>;
            readonly toolUses: Schema.optional<Schema.Int>;
            readonly durationMs: Schema.optional<Schema.Int>;
            readonly compactsAutomatically: Schema.optional<Schema.Boolean>;
            readonly autoCompactThreshold: Schema.optional<Schema.Int>;
            readonly cost: Schema.optional<Schema.Struct<{
                readonly amount: Schema.Number;
                readonly currency: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>>;
        }>>>, never>;
        readonly nativeMetadata: Schema.withDecodingDefault<Schema.optional<Schema.NullOr<Schema.Struct<{
            readonly modelSelection: Schema.optional<Schema.decodeTo<Schema.Struct<{
                readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
                readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
                }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
                }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
            }>, Schema.Struct<{
                readonly provider: Schema.optional<Schema.Unknown>;
                readonly instanceId: Schema.optional<Schema.Unknown>;
                readonly model: Schema.Unknown;
                readonly options: Schema.optional<Schema.Unknown>;
            }>, never, never>>;
            readonly title: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            readonly updatedAt: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            readonly itemIdentityVersion: Schema.optional<Schema.Literal<2>>;
            readonly forkHeadMessageId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly claudeAttachmentBudget: Schema.optional<Schema.Struct<{
                readonly bytesUsed: Schema.Int;
                readonly pagesUsed: Schema.Int;
            }>>;
        }>>>, never>;
        readonly goal: Schema.withDecodingDefault<Schema.optional<Schema.NullOr<Schema.Struct<{
            readonly objective: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly status: Schema.Literals<readonly ["active", "paused", "blocked", "usage_limited", "budget_limited", "complete"]>;
            readonly tokensUsed: Schema.optional<Schema.Int>;
            readonly tokenBudget: Schema.optional<Schema.NullOr<Schema.Int>>;
            readonly timeUsedSeconds: Schema.optional<Schema.Int>;
            readonly checks: Schema.optional<Schema.Int>;
            readonly lastCheck: Schema.optional<Schema.String>;
        }>>>, never>;
        readonly createdAt: Schema.DateTimeUtc;
        readonly updatedAt: Schema.DateTimeUtc;
    }>;
    readonly retainedNativeTurnIds: Schema.optional<Schema.$Array<Schema.String>>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"provider_turn.updated">;
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly threadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
    readonly providerTurn: Schema.Struct<{
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">;
        readonly providerThreadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">;
        readonly nodeId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">;
        readonly runAttemptId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunAttemptId">>;
        readonly nativeTurnRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly ordinal: Schema.Int;
        readonly status: Schema.Literals<readonly ["pending", "running", "completed", "interrupted", "failed", "cancelled"]>;
        readonly startedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly completedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly tokenUsage: Schema.optional<Schema.Struct<{
            readonly usedTokens: Schema.Int;
            readonly maxTokens: Schema.optional<Schema.NullOr<Schema.Int>>;
            readonly inputTokens: Schema.optional<Schema.Int>;
            readonly cachedInputTokens: Schema.optional<Schema.Int>;
            readonly outputTokens: Schema.optional<Schema.Int>;
            readonly reasoningOutputTokens: Schema.optional<Schema.Int>;
            readonly promptCacheTtlMs: Schema.optional<Schema.Int>;
            readonly autoCompactThreshold: Schema.optional<Schema.Int>;
            readonly promptCacheExpiresAt: Schema.optional<Schema.String>;
            readonly updatedAt: Schema.String;
        }>>;
        readonly turnTokenUsage: Schema.optional<Schema.Union<readonly [Schema.Struct<{
            readonly usageScope: Schema.Literal<"main_agent">;
            readonly cachedInputTokens: Schema.optional<Schema.Int>;
            readonly cacheCreationTokens: Schema.optional<Schema.Int>;
            readonly reasoningTokens: Schema.optional<Schema.Int>;
            readonly hasSubagents: Schema.Boolean;
            readonly usageStatus: Schema.Literal<"complete">;
            readonly inputTokens: Schema.Int;
            readonly outputTokens: Schema.Int;
        }>, Schema.Struct<{
            readonly usageScope: Schema.Literal<"main_agent">;
            readonly cachedInputTokens: Schema.optional<Schema.Int>;
            readonly cacheCreationTokens: Schema.optional<Schema.Int>;
            readonly reasoningTokens: Schema.optional<Schema.Int>;
            readonly hasSubagents: Schema.Boolean;
            readonly usageStatus: Schema.Literals<readonly ["partial", "unavailable"]>;
            readonly inputTokens: Schema.optional<Schema.Int>;
            readonly outputTokens: Schema.optional<Schema.Int>;
        }>]>>;
    }>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"node.updated">;
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly node: Schema.Struct<{
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly parentNodeId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
        readonly rootNodeId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">;
        readonly kind: Schema.Literals<readonly ["root_turn", "assistant_message", "reasoning", "plan", "todo_list", "tool_call", "approval_request", "user_input_request", "subagent", "hook", "system"]>;
        readonly status: Schema.Literals<readonly ["idle", "pending", "running", "waiting", "completed", "interrupted", "failed", "cancelled", "rolled_back"]>;
        readonly countsForRun: Schema.Boolean;
        readonly providerThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">>;
        readonly providerTurnId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">>;
        readonly nativeItemRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly runtimeRequestId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
        readonly checkpointScopeId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "CheckpointScopeId">>;
        readonly startedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly completedAt: Schema.NullOr<Schema.DateTimeUtc>;
    }>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"subagent.updated">;
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly subagent: Schema.Struct<{
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly parentNodeId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">;
        readonly origin: Schema.Literals<readonly ["provider_native", "app_owned"]>;
        readonly createdBy: Schema.Literals<readonly ["user", "agent", "system"]>;
        readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
        readonly providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly providerThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">>;
        readonly childThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
        readonly remoteChild: Schema.optional<Schema.Struct<{
            readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
            readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
            readonly label: Schema.String;
            readonly runId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
            readonly stoppedThere: Schema.optional<Schema.Boolean>;
            readonly stopCount: Schema.optional<Schema.Int>;
        }>>;
        readonly nativeTaskRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly prompt: Schema.String;
        readonly title: Schema.NullOr<Schema.String>;
        readonly model: Schema.NullOr<Schema.String>;
        readonly modelSelection: Schema.optional<Schema.decodeTo<Schema.Struct<{
            readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
            readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
            }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
            }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
        }>, Schema.Struct<{
            readonly provider: Schema.optional<Schema.Unknown>;
            readonly instanceId: Schema.optional<Schema.Unknown>;
            readonly model: Schema.Unknown;
            readonly options: Schema.optional<Schema.Unknown>;
        }>, never, never>>;
        readonly completionWake: Schema.optional<Schema.Literals<readonly ["always", "settled_only"]>>;
        readonly completionDelivery: Schema.optional<Schema.Struct<{
            readonly state: Schema.Literals<readonly ["pending", "claimed", "acknowledged", "delivered", "disposed"]>;
            readonly observedByRunId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        }>>;
        readonly status: Schema.Literals<readonly ["idle", "pending", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
        readonly progress: Schema.optional<Schema.String>;
        readonly workflow: Schema.optional<Schema.Struct<{
            readonly name: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly runHandles: Schema.optional<Schema.Struct<{
                readonly runId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly transcriptDir: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly scriptPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>;
            readonly phases: Schema.$Array<Schema.Struct<{
                readonly index: Schema.Int;
                readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>>;
            readonly agents: Schema.$Array<Schema.Struct<{
                readonly index: Schema.Int;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly childThreadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
                readonly state: Schema.Literals<readonly ["queued", "running", "completed", "failed"]>;
                readonly phaseIndex: Schema.optional<Schema.Int>;
                readonly phaseTitle: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly model: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly attempt: Schema.optional<Schema.Int>;
                readonly totalTokens: Schema.optional<Schema.Int>;
                readonly toolCalls: Schema.optional<Schema.Int>;
                readonly durationMs: Schema.optional<Schema.Int>;
                readonly queuedAt: Schema.optional<Schema.Int>;
                readonly startedAt: Schema.optional<Schema.Int>;
                readonly completedAt: Schema.optional<Schema.Int>;
                readonly prompt: Schema.optional<Schema.NonEmptyString>;
                readonly result: Schema.optional<Schema.NonEmptyString>;
            }>>;
            readonly totalTokens: Schema.optional<Schema.Int>;
            readonly toolCalls: Schema.optional<Schema.Int>;
            readonly durationMs: Schema.optional<Schema.Int>;
        }>>;
        readonly result: Schema.NullOr<Schema.String>;
        readonly startedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly completedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly updatedAt: Schema.DateTimeUtc;
        readonly promptOmitted: Schema.optionalKey<Schema.Literal<true>>;
        readonly resultOmitted: Schema.optionalKey<Schema.Literal<true>>;
    }>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"message.updated">;
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly message: Schema.Struct<{
        readonly createdBy: Schema.Literals<readonly ["user", "agent", "system"]>;
        readonly creationSource: Schema.Literals<readonly ["web", "mobile", "mcp", "provider", "server"]>;
        readonly notification: Schema.optional<Schema.Struct<{
            readonly source: Schema.Union<readonly [Schema.Struct<{
                readonly kind: Schema.Literal<"delegated_task">;
                readonly taskIds: Schema.$Array<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
                readonly childThreadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
            }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
                readonly kind: Schema.Literal<"subagent">;
                readonly childThreadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
            }>>, Schema.Struct<{
                readonly kind: Schema.Literal<"background_task">;
                readonly work: Schema.Literal<"subagent">;
                readonly childThreadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
            }>, never, never>, Schema.Struct<{
                readonly kind: Schema.decodeTo<Schema.Literal<"command">, Schema.Literal<"background_command">, never, never>;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"subagent">;
                readonly childThreadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"command">;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"monitor">;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"background_task">;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"system">;
            }>, Schema.decodeTo<Schema.Union<readonly [Schema.Struct<{
                readonly kind: Schema.Literal<"delegated_task">;
                readonly taskIds: Schema.$Array<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
                readonly childThreadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
            }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
                readonly kind: Schema.Literal<"subagent">;
                readonly childThreadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
            }>>, Schema.Struct<{
                readonly kind: Schema.Literal<"background_task">;
                readonly work: Schema.Literal<"subagent">;
                readonly childThreadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
            }>, never, never>, Schema.Struct<{
                readonly kind: Schema.decodeTo<Schema.Literal<"command">, Schema.Literal<"background_command">, never, never>;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"subagent">;
                readonly childThreadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"command">;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"monitor">;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"background_task">;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"system">;
            }>]>, Schema.Struct<{
                readonly kind: Schema.optional<Schema.String>;
            }>, never, never>]>;
            readonly outcome: Schema.Literals<readonly ["completed", "failed", "cancelled", "updated", "unknown"]>;
            readonly summary: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly detail: Schema.optional<Schema.String>;
        }>>;
        readonly scheduledTaskId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">>;
        readonly senderThreadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
        readonly idleCompaction: Schema.optional<Schema.Literals<readonly ["beforeCacheExpires", "onReturn"]>>;
        readonly workflowScript: Schema.optional<Schema.Boolean>;
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "MessageId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly nodeId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
        readonly role: Schema.Literals<readonly ["user", "assistant", "system"]>;
        readonly text: Schema.String;
        readonly context: Schema.optional<Schema.Struct<{
            readonly version: Schema.Literal<1>;
            readonly guest: Schema.optional<Schema.Struct<{
                readonly guestMessageId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "GuestMessageId">;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly text: Schema.String;
                readonly shareId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "GuestShareId">>;
            }>>;
            readonly records: Schema.decodeTo<import("@t3tools/contracts").ForwardCompatibleArray<Schema.Union<readonly [Schema.Struct<{
                readonly version: Schema.Literal<1>;
                readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
                readonly label: Schema.String;
                readonly attachmentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly sizeBytes: Schema.Int;
                readonly kind: Schema.Literal<"image">;
            }>, Schema.Struct<{
                readonly version: Schema.Literal<1>;
                readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
                readonly label: Schema.String;
                readonly attachmentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly sizeBytes: Schema.Int;
                readonly kind: Schema.Literal<"file">;
            }>, Schema.Struct<{
                readonly version: Schema.Literal<1>;
                readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
                readonly label: Schema.String;
                readonly kind: Schema.Literal<"terminal">;
                readonly terminalId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly terminalLabel: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly lineStart: Schema.Int;
                readonly lineEnd: Schema.Int;
                readonly text: Schema.String;
            }>, Schema.Struct<{
                readonly version: Schema.Literal<1>;
                readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
                readonly label: Schema.String;
                readonly pageUrl: Schema.String;
                readonly pageTitle: Schema.NullOr<Schema.String>;
                readonly tagName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly selector: Schema.NullOr<Schema.String>;
                readonly htmlPreview: Schema.String;
                readonly componentName: Schema.NullOr<Schema.String>;
                readonly source: Schema.NullOr<Schema.Struct<{
                    readonly functionName: Schema.NullOr<Schema.String>;
                    readonly fileName: Schema.NullOr<Schema.String>;
                    readonly lineNumber: Schema.NullOr<Schema.Int>;
                    readonly columnNumber: Schema.NullOr<Schema.Int>;
                }>>;
                readonly styles: Schema.String;
                readonly kind: Schema.Literal<"element">;
            }>, Schema.Struct<{
                readonly version: Schema.Literal<1>;
                readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
                readonly label: Schema.String;
                readonly kind: Schema.Literal<"preview-annotation">;
                readonly annotationId: Schema.String;
                readonly pageUrl: Schema.String;
                readonly pageTitle: Schema.NullOr<Schema.String>;
                readonly comment: Schema.String;
                readonly targetSummary: Schema.String;
                readonly styleChanges: Schema.$Array<Schema.String>;
                readonly elements: Schema.optionalKey<Schema.$Array<Schema.Struct<{
                    readonly pageUrl: Schema.String;
                    readonly pageTitle: Schema.NullOr<Schema.String>;
                    readonly tagName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly selector: Schema.NullOr<Schema.String>;
                    readonly htmlPreview: Schema.String;
                    readonly componentName: Schema.NullOr<Schema.String>;
                    readonly source: Schema.NullOr<Schema.Struct<{
                        readonly functionName: Schema.NullOr<Schema.String>;
                        readonly fileName: Schema.NullOr<Schema.String>;
                        readonly lineNumber: Schema.NullOr<Schema.Int>;
                        readonly columnNumber: Schema.NullOr<Schema.Int>;
                    }>>;
                    readonly styles: Schema.String;
                }>>>;
                readonly elementIds: Schema.optionalKey<Schema.$Array<Schema.String>>;
                readonly regionCount: Schema.optionalKey<Schema.Int>;
                readonly strokeCount: Schema.optionalKey<Schema.Int>;
                readonly styleChangeDetails: Schema.optionalKey<Schema.$Array<Schema.Struct<{
                    readonly targetId: Schema.String;
                    readonly selector: Schema.NullOr<Schema.String>;
                    readonly property: Schema.String;
                    readonly previousValue: Schema.String;
                    readonly value: Schema.String;
                }>>>;
                readonly screenshotContextId: Schema.optionalKey<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">>;
            }>, Schema.Struct<{
                readonly version: Schema.Literal<1>;
                readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
                readonly label: Schema.String;
                readonly kind: Schema.Literal<"review-comment">;
                readonly sectionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly sectionTitle: Schema.String;
                readonly filePath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly startIndex: Schema.Int;
                readonly endIndex: Schema.Int;
                readonly rangeLabel: Schema.String;
                readonly text: Schema.String;
                readonly diff: Schema.String;
                readonly fenceLanguage: Schema.optionalKey<Schema.String>;
                readonly pullRequest: Schema.optionalKey<Schema.Struct<{
                    readonly number: Schema.Int;
                    readonly title: Schema.String;
                    readonly url: Schema.String;
                    readonly headBranch: Schema.String;
                    readonly baseBranch: Schema.String;
                    readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
                    readonly isDraft: Schema.Boolean;
                }>>;
            }>, Schema.Struct<{
                readonly version: Schema.Literal<1>;
                readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
                readonly label: Schema.String;
                readonly kind: Schema.Literal<"mention">;
                readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>, Schema.Struct<{
                readonly version: Schema.Literal<1>;
                readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
                readonly label: Schema.String;
                readonly kind: Schema.Literal<"skill">;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>, Schema.Struct<{
                readonly version: Schema.Literal<1>;
                readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
                readonly label: Schema.String;
                readonly kind: Schema.Literal<"thread">;
                readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
                readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
                readonly title: Schema.String;
            }>, Schema.Struct<{
                readonly version: Schema.Literal<1>;
                readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
                readonly label: Schema.String;
                readonly kind: Schema.Literal<"environment">;
                readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
            }>, Schema.Struct<{
                readonly version: Schema.Literal<1>;
                readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
                readonly label: Schema.String;
                readonly kind: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly payload: Schema.Unknown;
            }>]>>, Schema.$Array<Schema.Unknown>, never, never>;
        }>>;
        readonly attachments: Schema.$Array<Schema.Union<readonly [Schema.Struct<{
            readonly type: Schema.Literal<"image">;
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly sizeBytes: Schema.Int;
            readonly source: Schema.optional<Schema.Struct<{
                readonly kind: Schema.Literal<"snap-shot">;
                readonly capturedAt: Schema.String;
                readonly appName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly windowTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly accessibleText: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly accessibility: Schema.optional<Schema.Union<readonly [Schema.Struct<{
                    readonly format: Schema.Literal<"flat-text">;
                    readonly text: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly truncated: Schema.Boolean;
                }>, Schema.Struct<{
                    readonly format: Schema.Literal<"element-tree">;
                    readonly coordinateSpace: Schema.Literal<"captured-image">;
                    readonly imageSize: Schema.Struct<{
                        readonly width: Schema.Int;
                        readonly height: Schema.Int;
                    }>;
                    readonly truncated: Schema.Boolean;
                    readonly root: Schema.Codec<import("@t3tools/contracts").SnapShotAccessibilityNode, import("@t3tools/contracts").SnapShotAccessibilityNode, never, never>;
                }>]>>;
                readonly appIdentifier: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly appIconDataUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"file">;
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly sizeBytes: Schema.Int;
            readonly source: Schema.optional<Schema.TaggedStruct<"pasted-text", {}>>;
        }>, Schema.Struct<{
            readonly type: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly sizeBytes: Schema.Int;
        }>]>>;
        readonly streaming: Schema.Boolean;
        readonly createdAt: Schema.DateTimeUtc;
        readonly updatedAt: Schema.DateTimeUtc;
        readonly delegatedCompletion: Schema.optional<Schema.Struct<{
            readonly parentRunId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">;
            readonly generation: Schema.Int;
            readonly taskIds: Schema.$Array<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
        }>>;
    }>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"turn_item.updated">;
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly turnItem: Schema.Union<readonly [Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Struct<{
            readonly kind: Schema.Literal<"delegated_task">;
            readonly taskIds: Schema.$Array<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
            readonly childThreadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
        }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
            readonly kind: Schema.Literal<"subagent">;
            readonly childThreadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
        }>>, Schema.Struct<{
            readonly kind: Schema.Literal<"background_task">;
            readonly work: Schema.Literal<"subagent">;
            readonly childThreadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
        }>, never, never>, Schema.Struct<{
            readonly kind: Schema.decodeTo<Schema.Literal<"command">, Schema.Literal<"background_command">, never, never>;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"subagent">;
            readonly childThreadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"command">;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"monitor">;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"background_task">;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"system">;
        }>, Schema.decodeTo<Schema.Union<readonly [Schema.Struct<{
            readonly kind: Schema.Literal<"delegated_task">;
            readonly taskIds: Schema.$Array<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
            readonly childThreadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
        }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
            readonly kind: Schema.Literal<"subagent">;
            readonly childThreadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
        }>>, Schema.Struct<{
            readonly kind: Schema.Literal<"background_task">;
            readonly work: Schema.Literal<"subagent">;
            readonly childThreadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
        }>, never, never>, Schema.Struct<{
            readonly kind: Schema.decodeTo<Schema.Literal<"command">, Schema.Literal<"background_command">, never, never>;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"subagent">;
            readonly childThreadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"command">;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"monitor">;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"background_task">;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"system">;
        }>]>, Schema.Struct<{
            readonly kind: Schema.optional<Schema.String>;
        }>, never, never>]>;
        readonly outcome: Schema.Literals<readonly ["completed", "failed", "cancelled", "updated", "unknown"]>;
        readonly summary: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly detail: Schema.optional<Schema.String>;
        readonly toolNonExecutionKind: Schema.optional<Schema.String>;
        readonly toolSurface: Schema.optional<Schema.Literals<readonly ["browser", "computer"]>>;
        readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
            readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.TaggedStruct<"native-app", {
            readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>, Schema.TaggedStruct<"display-name", {
                readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>;
        }>, Schema.TaggedStruct<"themed-logo", {
            readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>]>>;
        readonly toolSource: Schema.optional<Schema.Struct<{
            readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly kind: Schema.Literals<readonly ["browser", "computer", "integration"]>;
            readonly icon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>>;
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly nodeId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
        readonly providerThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">>;
        readonly providerTurnId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">>;
        readonly nativeItemRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly parentItemId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">>;
        readonly ordinal: Schema.Int;
        readonly status: Schema.Literals<readonly ["idle", "pending", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
        readonly title: Schema.NullOr<Schema.String>;
        readonly startedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly completedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly updatedAt: Schema.DateTimeUtc;
        readonly type: Schema.Literal<"notification">;
    }>, Schema.Struct<{
        readonly createdBy: Schema.Literals<readonly ["user", "agent", "system"]>;
        readonly creationSource: Schema.Literals<readonly ["web", "mobile", "mcp", "provider", "server"]>;
        readonly toolNonExecutionKind: Schema.optional<Schema.String>;
        readonly toolSurface: Schema.optional<Schema.Literals<readonly ["browser", "computer"]>>;
        readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
            readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.TaggedStruct<"native-app", {
            readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>, Schema.TaggedStruct<"display-name", {
                readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>;
        }>, Schema.TaggedStruct<"themed-logo", {
            readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>]>>;
        readonly toolSource: Schema.optional<Schema.Struct<{
            readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly kind: Schema.Literals<readonly ["browser", "computer", "integration"]>;
            readonly icon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>>;
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly nodeId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
        readonly providerThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">>;
        readonly providerTurnId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">>;
        readonly nativeItemRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly parentItemId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">>;
        readonly ordinal: Schema.Int;
        readonly status: Schema.Literals<readonly ["idle", "pending", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
        readonly title: Schema.NullOr<Schema.String>;
        readonly startedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly completedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly updatedAt: Schema.DateTimeUtc;
        readonly type: Schema.Literal<"user_message">;
        readonly messageId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "MessageId">;
        readonly scheduledTaskId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">>;
        readonly senderThreadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
        readonly idleCompaction: Schema.optional<Schema.Literals<readonly ["beforeCacheExpires", "onReturn"]>>;
        readonly workflowScript: Schema.optional<Schema.Boolean>;
        readonly inputIntent: Schema.Literals<readonly ["turn_start", "queued_turn", "steer", "promoted_queued_to_steer"]>;
        readonly text: Schema.String;
        readonly textOmitted: Schema.optionalKey<Schema.Literal<true>>;
        readonly context: Schema.optional<Schema.Struct<{
            readonly version: Schema.Literal<1>;
            readonly guest: Schema.optional<Schema.Struct<{
                readonly guestMessageId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "GuestMessageId">;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly text: Schema.String;
                readonly shareId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "GuestShareId">>;
            }>>;
            readonly records: Schema.decodeTo<import("@t3tools/contracts").ForwardCompatibleArray<Schema.Union<readonly [Schema.Struct<{
                readonly version: Schema.Literal<1>;
                readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
                readonly label: Schema.String;
                readonly attachmentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly sizeBytes: Schema.Int;
                readonly kind: Schema.Literal<"image">;
            }>, Schema.Struct<{
                readonly version: Schema.Literal<1>;
                readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
                readonly label: Schema.String;
                readonly attachmentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly sizeBytes: Schema.Int;
                readonly kind: Schema.Literal<"file">;
            }>, Schema.Struct<{
                readonly version: Schema.Literal<1>;
                readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
                readonly label: Schema.String;
                readonly kind: Schema.Literal<"terminal">;
                readonly terminalId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly terminalLabel: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly lineStart: Schema.Int;
                readonly lineEnd: Schema.Int;
                readonly text: Schema.String;
            }>, Schema.Struct<{
                readonly version: Schema.Literal<1>;
                readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
                readonly label: Schema.String;
                readonly pageUrl: Schema.String;
                readonly pageTitle: Schema.NullOr<Schema.String>;
                readonly tagName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly selector: Schema.NullOr<Schema.String>;
                readonly htmlPreview: Schema.String;
                readonly componentName: Schema.NullOr<Schema.String>;
                readonly source: Schema.NullOr<Schema.Struct<{
                    readonly functionName: Schema.NullOr<Schema.String>;
                    readonly fileName: Schema.NullOr<Schema.String>;
                    readonly lineNumber: Schema.NullOr<Schema.Int>;
                    readonly columnNumber: Schema.NullOr<Schema.Int>;
                }>>;
                readonly styles: Schema.String;
                readonly kind: Schema.Literal<"element">;
            }>, Schema.Struct<{
                readonly version: Schema.Literal<1>;
                readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
                readonly label: Schema.String;
                readonly kind: Schema.Literal<"preview-annotation">;
                readonly annotationId: Schema.String;
                readonly pageUrl: Schema.String;
                readonly pageTitle: Schema.NullOr<Schema.String>;
                readonly comment: Schema.String;
                readonly targetSummary: Schema.String;
                readonly styleChanges: Schema.$Array<Schema.String>;
                readonly elements: Schema.optionalKey<Schema.$Array<Schema.Struct<{
                    readonly pageUrl: Schema.String;
                    readonly pageTitle: Schema.NullOr<Schema.String>;
                    readonly tagName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly selector: Schema.NullOr<Schema.String>;
                    readonly htmlPreview: Schema.String;
                    readonly componentName: Schema.NullOr<Schema.String>;
                    readonly source: Schema.NullOr<Schema.Struct<{
                        readonly functionName: Schema.NullOr<Schema.String>;
                        readonly fileName: Schema.NullOr<Schema.String>;
                        readonly lineNumber: Schema.NullOr<Schema.Int>;
                        readonly columnNumber: Schema.NullOr<Schema.Int>;
                    }>>;
                    readonly styles: Schema.String;
                }>>>;
                readonly elementIds: Schema.optionalKey<Schema.$Array<Schema.String>>;
                readonly regionCount: Schema.optionalKey<Schema.Int>;
                readonly strokeCount: Schema.optionalKey<Schema.Int>;
                readonly styleChangeDetails: Schema.optionalKey<Schema.$Array<Schema.Struct<{
                    readonly targetId: Schema.String;
                    readonly selector: Schema.NullOr<Schema.String>;
                    readonly property: Schema.String;
                    readonly previousValue: Schema.String;
                    readonly value: Schema.String;
                }>>>;
                readonly screenshotContextId: Schema.optionalKey<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">>;
            }>, Schema.Struct<{
                readonly version: Schema.Literal<1>;
                readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
                readonly label: Schema.String;
                readonly kind: Schema.Literal<"review-comment">;
                readonly sectionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly sectionTitle: Schema.String;
                readonly filePath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly startIndex: Schema.Int;
                readonly endIndex: Schema.Int;
                readonly rangeLabel: Schema.String;
                readonly text: Schema.String;
                readonly diff: Schema.String;
                readonly fenceLanguage: Schema.optionalKey<Schema.String>;
                readonly pullRequest: Schema.optionalKey<Schema.Struct<{
                    readonly number: Schema.Int;
                    readonly title: Schema.String;
                    readonly url: Schema.String;
                    readonly headBranch: Schema.String;
                    readonly baseBranch: Schema.String;
                    readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
                    readonly isDraft: Schema.Boolean;
                }>>;
            }>, Schema.Struct<{
                readonly version: Schema.Literal<1>;
                readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
                readonly label: Schema.String;
                readonly kind: Schema.Literal<"mention">;
                readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>, Schema.Struct<{
                readonly version: Schema.Literal<1>;
                readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
                readonly label: Schema.String;
                readonly kind: Schema.Literal<"skill">;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>, Schema.Struct<{
                readonly version: Schema.Literal<1>;
                readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
                readonly label: Schema.String;
                readonly kind: Schema.Literal<"thread">;
                readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
                readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
                readonly title: Schema.String;
            }>, Schema.Struct<{
                readonly version: Schema.Literal<1>;
                readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
                readonly label: Schema.String;
                readonly kind: Schema.Literal<"environment">;
                readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
            }>, Schema.Struct<{
                readonly version: Schema.Literal<1>;
                readonly contextId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ComposerContextId">;
                readonly label: Schema.String;
                readonly kind: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly payload: Schema.Unknown;
            }>]>>, Schema.$Array<Schema.Unknown>, never, never>;
        }>>;
        readonly attachments: Schema.$Array<Schema.Union<readonly [Schema.Struct<{
            readonly type: Schema.Literal<"image">;
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly sizeBytes: Schema.Int;
            readonly source: Schema.optional<Schema.Struct<{
                readonly kind: Schema.Literal<"snap-shot">;
                readonly capturedAt: Schema.String;
                readonly appName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly windowTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly accessibleText: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly accessibility: Schema.optional<Schema.Union<readonly [Schema.Struct<{
                    readonly format: Schema.Literal<"flat-text">;
                    readonly text: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly truncated: Schema.Boolean;
                }>, Schema.Struct<{
                    readonly format: Schema.Literal<"element-tree">;
                    readonly coordinateSpace: Schema.Literal<"captured-image">;
                    readonly imageSize: Schema.Struct<{
                        readonly width: Schema.Int;
                        readonly height: Schema.Int;
                    }>;
                    readonly truncated: Schema.Boolean;
                    readonly root: Schema.Codec<import("@t3tools/contracts").SnapShotAccessibilityNode, import("@t3tools/contracts").SnapShotAccessibilityNode, never, never>;
                }>]>>;
                readonly appIdentifier: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly appIconDataUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"file">;
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly sizeBytes: Schema.Int;
            readonly source: Schema.optional<Schema.TaggedStruct<"pasted-text", {}>>;
        }>, Schema.Struct<{
            readonly type: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly sizeBytes: Schema.Int;
        }>]>>;
    }>, Schema.Struct<{
        readonly toolNonExecutionKind: Schema.optional<Schema.String>;
        readonly toolSurface: Schema.optional<Schema.Literals<readonly ["browser", "computer"]>>;
        readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
            readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.TaggedStruct<"native-app", {
            readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>, Schema.TaggedStruct<"display-name", {
                readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>;
        }>, Schema.TaggedStruct<"themed-logo", {
            readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>]>>;
        readonly toolSource: Schema.optional<Schema.Struct<{
            readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly kind: Schema.Literals<readonly ["browser", "computer", "integration"]>;
            readonly icon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>>;
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly nodeId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
        readonly providerThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">>;
        readonly providerTurnId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">>;
        readonly nativeItemRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly parentItemId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">>;
        readonly ordinal: Schema.Int;
        readonly status: Schema.Literals<readonly ["idle", "pending", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
        readonly title: Schema.NullOr<Schema.String>;
        readonly startedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly completedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly updatedAt: Schema.DateTimeUtc;
        readonly type: Schema.Literal<"assistant_message">;
        readonly messageId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "MessageId">;
        readonly text: Schema.String;
        readonly textOmitted: Schema.optionalKey<Schema.Literal<true>>;
        readonly attachments: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
            readonly type: Schema.Literal<"image">;
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly sizeBytes: Schema.Int;
            readonly source: Schema.optional<Schema.Struct<{
                readonly kind: Schema.Literal<"snap-shot">;
                readonly capturedAt: Schema.String;
                readonly appName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly windowTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly accessibleText: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly accessibility: Schema.optional<Schema.Union<readonly [Schema.Struct<{
                    readonly format: Schema.Literal<"flat-text">;
                    readonly text: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly truncated: Schema.Boolean;
                }>, Schema.Struct<{
                    readonly format: Schema.Literal<"element-tree">;
                    readonly coordinateSpace: Schema.Literal<"captured-image">;
                    readonly imageSize: Schema.Struct<{
                        readonly width: Schema.Int;
                        readonly height: Schema.Int;
                    }>;
                    readonly truncated: Schema.Boolean;
                    readonly root: Schema.Codec<import("@t3tools/contracts").SnapShotAccessibilityNode, import("@t3tools/contracts").SnapShotAccessibilityNode, never, never>;
                }>]>>;
                readonly appIdentifier: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly appIconDataUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"file">;
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly sizeBytes: Schema.Int;
            readonly source: Schema.optional<Schema.TaggedStruct<"pasted-text", {}>>;
        }>, Schema.Struct<{
            readonly type: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly sizeBytes: Schema.Int;
        }>]>>>;
        readonly streaming: Schema.Boolean;
    }>, Schema.Struct<{
        readonly toolNonExecutionKind: Schema.optional<Schema.String>;
        readonly toolSurface: Schema.optional<Schema.Literals<readonly ["browser", "computer"]>>;
        readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
            readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.TaggedStruct<"native-app", {
            readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>, Schema.TaggedStruct<"display-name", {
                readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>;
        }>, Schema.TaggedStruct<"themed-logo", {
            readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>]>>;
        readonly toolSource: Schema.optional<Schema.Struct<{
            readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly kind: Schema.Literals<readonly ["browser", "computer", "integration"]>;
            readonly icon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>>;
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly nodeId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
        readonly providerThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">>;
        readonly providerTurnId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">>;
        readonly nativeItemRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly parentItemId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">>;
        readonly ordinal: Schema.Int;
        readonly status: Schema.Literals<readonly ["idle", "pending", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
        readonly title: Schema.NullOr<Schema.String>;
        readonly startedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly completedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly updatedAt: Schema.DateTimeUtc;
        readonly type: Schema.Literal<"reasoning">;
        readonly text: Schema.String;
        readonly streaming: Schema.Boolean;
    }>, Schema.Struct<{
        readonly toolNonExecutionKind: Schema.optional<Schema.String>;
        readonly toolSurface: Schema.optional<Schema.Literals<readonly ["browser", "computer"]>>;
        readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
            readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.TaggedStruct<"native-app", {
            readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>, Schema.TaggedStruct<"display-name", {
                readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>;
        }>, Schema.TaggedStruct<"themed-logo", {
            readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>]>>;
        readonly toolSource: Schema.optional<Schema.Struct<{
            readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly kind: Schema.Literals<readonly ["browser", "computer", "integration"]>;
            readonly icon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>>;
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly nodeId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
        readonly providerThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">>;
        readonly providerTurnId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">>;
        readonly nativeItemRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly parentItemId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">>;
        readonly ordinal: Schema.Int;
        readonly status: Schema.Literals<readonly ["idle", "pending", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
        readonly title: Schema.NullOr<Schema.String>;
        readonly startedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly completedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly updatedAt: Schema.DateTimeUtc;
        readonly type: Schema.Literal<"proposed_plan">;
        readonly planId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "PlanId">;
        readonly markdown: Schema.String;
        readonly streaming: Schema.Boolean;
    }>, Schema.Struct<{
        readonly toolNonExecutionKind: Schema.optional<Schema.String>;
        readonly toolSurface: Schema.optional<Schema.Literals<readonly ["browser", "computer"]>>;
        readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
            readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.TaggedStruct<"native-app", {
            readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>, Schema.TaggedStruct<"display-name", {
                readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>;
        }>, Schema.TaggedStruct<"themed-logo", {
            readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>]>>;
        readonly toolSource: Schema.optional<Schema.Struct<{
            readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly kind: Schema.Literals<readonly ["browser", "computer", "integration"]>;
            readonly icon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>>;
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly nodeId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
        readonly providerThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">>;
        readonly providerTurnId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">>;
        readonly nativeItemRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly parentItemId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">>;
        readonly ordinal: Schema.Int;
        readonly status: Schema.Literals<readonly ["idle", "pending", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
        readonly title: Schema.NullOr<Schema.String>;
        readonly startedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly completedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly updatedAt: Schema.DateTimeUtc;
        readonly type: Schema.Literal<"todo_list">;
        readonly planId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "PlanId">;
        readonly steps: Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly text: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly status: Schema.Literals<readonly ["pending", "running", "completed"]>;
            readonly durationAnchorAt: Schema.optional<Schema.String>;
            readonly durationMs: Schema.optional<Schema.Int>;
        }>>;
        readonly explanation: Schema.optional<Schema.String>;
    }>, Schema.Struct<{
        readonly toolNonExecutionKind: Schema.optional<Schema.String>;
        readonly toolSurface: Schema.optional<Schema.Literals<readonly ["browser", "computer"]>>;
        readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
            readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.TaggedStruct<"native-app", {
            readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>, Schema.TaggedStruct<"display-name", {
                readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>;
        }>, Schema.TaggedStruct<"themed-logo", {
            readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>]>>;
        readonly toolSource: Schema.optional<Schema.Struct<{
            readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly kind: Schema.Literals<readonly ["browser", "computer", "integration"]>;
            readonly icon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>>;
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly nodeId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
        readonly providerThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">>;
        readonly providerTurnId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">>;
        readonly nativeItemRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly parentItemId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">>;
        readonly ordinal: Schema.Int;
        readonly status: Schema.Literals<readonly ["idle", "pending", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
        readonly title: Schema.NullOr<Schema.String>;
        readonly startedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly completedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly updatedAt: Schema.DateTimeUtc;
        readonly type: Schema.Literal<"user_input_request">;
        readonly requestId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">;
        readonly questions: Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly header: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly question: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly options: Schema.$Array<Schema.Struct<{
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.optional<Schema.String>;
                readonly preview: Schema.optional<Schema.String>;
            }>>;
            readonly multiSelect: Schema.optional<Schema.Boolean>;
            readonly allowCustomAnswer: Schema.optional<Schema.Boolean>;
            readonly initialAnswer: Schema.optional<Schema.String>;
            readonly required: Schema.optional<Schema.Boolean>;
        }>>;
        readonly questionAnswer: Schema.optional<Schema.Struct<{
            readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly questionTextById: Schema.optional<Schema.$Record<Schema.String, Schema.String>>;
            readonly answers: Schema.$Record<Schema.String, Schema.Unknown>;
            readonly attachmentsByQuestionId: Schema.$Record<Schema.String, Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                readonly type: Schema.Literal<"image">;
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly sizeBytes: Schema.Int;
                readonly source: Schema.optional<Schema.Struct<{
                    readonly kind: Schema.Literal<"snap-shot">;
                    readonly capturedAt: Schema.String;
                    readonly appName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly windowTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly accessibleText: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly accessibility: Schema.optional<Schema.Union<readonly [Schema.Struct<{
                        readonly format: Schema.Literal<"flat-text">;
                        readonly text: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly truncated: Schema.Boolean;
                    }>, Schema.Struct<{
                        readonly format: Schema.Literal<"element-tree">;
                        readonly coordinateSpace: Schema.Literal<"captured-image">;
                        readonly imageSize: Schema.Struct<{
                            readonly width: Schema.Int;
                            readonly height: Schema.Int;
                        }>;
                        readonly truncated: Schema.Boolean;
                        readonly root: Schema.Codec<import("@t3tools/contracts").SnapShotAccessibilityNode, import("@t3tools/contracts").SnapShotAccessibilityNode, never, never>;
                    }>]>>;
                    readonly appIdentifier: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly appIconDataUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                }>>;
            }>, Schema.Struct<{
                readonly type: Schema.Literal<"file">;
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly mimeType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly sizeBytes: Schema.Int;
                readonly source: Schema.optional<Schema.TaggedStruct<"pasted-text", {}>>;
            }>]>>>;
        }>>;
        readonly responseMode: Schema.optional<Schema.Literal<"message">>;
    }>, Schema.Struct<{
        readonly toolNonExecutionKind: Schema.optional<Schema.String>;
        readonly toolSurface: Schema.optional<Schema.Literals<readonly ["browser", "computer"]>>;
        readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
            readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.TaggedStruct<"native-app", {
            readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>, Schema.TaggedStruct<"display-name", {
                readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>;
        }>, Schema.TaggedStruct<"themed-logo", {
            readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>]>>;
        readonly toolSource: Schema.optional<Schema.Struct<{
            readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly kind: Schema.Literals<readonly ["browser", "computer", "integration"]>;
            readonly icon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>>;
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly nodeId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
        readonly providerThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">>;
        readonly providerTurnId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">>;
        readonly nativeItemRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly parentItemId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">>;
        readonly ordinal: Schema.Int;
        readonly status: Schema.Literals<readonly ["idle", "pending", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
        readonly title: Schema.NullOr<Schema.String>;
        readonly startedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly completedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly updatedAt: Schema.DateTimeUtc;
        readonly type: Schema.Literal<"file_change">;
        readonly fileName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly additions: Schema.optional<Schema.Int>;
        readonly deletions: Schema.optional<Schema.Int>;
        readonly diffStr: Schema.optional<Schema.String>;
        readonly oldStr: Schema.optional<Schema.String>;
        readonly newStr: Schema.optional<Schema.String>;
        readonly changes: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly operation: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly oldPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly fileType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly mimeType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>>;
    }>, Schema.Struct<{
        readonly toolNonExecutionKind: Schema.optional<Schema.String>;
        readonly toolSurface: Schema.optional<Schema.Literals<readonly ["browser", "computer"]>>;
        readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
            readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.TaggedStruct<"native-app", {
            readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>, Schema.TaggedStruct<"display-name", {
                readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>;
        }>, Schema.TaggedStruct<"themed-logo", {
            readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>]>>;
        readonly toolSource: Schema.optional<Schema.Struct<{
            readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly kind: Schema.Literals<readonly ["browser", "computer", "integration"]>;
            readonly icon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>>;
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly nodeId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
        readonly providerThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">>;
        readonly providerTurnId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">>;
        readonly nativeItemRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly parentItemId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">>;
        readonly ordinal: Schema.Int;
        readonly status: Schema.Literals<readonly ["idle", "pending", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
        readonly title: Schema.NullOr<Schema.String>;
        readonly startedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly completedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly updatedAt: Schema.DateTimeUtc;
        readonly type: Schema.Literal<"command_execution">;
        readonly input: Schema.String;
        readonly output: Schema.optional<Schema.String>;
        readonly outputOmitted: Schema.optional<Schema.Boolean>;
        readonly outputIndicatesFailure: Schema.optional<Schema.Boolean>;
        readonly exitCode: Schema.optional<Schema.Int>;
        readonly monitor: Schema.optional<Schema.Boolean>;
    }>, Schema.Struct<{
        readonly toolNonExecutionKind: Schema.optional<Schema.String>;
        readonly toolSurface: Schema.optional<Schema.Literals<readonly ["browser", "computer"]>>;
        readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
            readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.TaggedStruct<"native-app", {
            readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>, Schema.TaggedStruct<"display-name", {
                readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>;
        }>, Schema.TaggedStruct<"themed-logo", {
            readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>]>>;
        readonly toolSource: Schema.optional<Schema.Struct<{
            readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly kind: Schema.Literals<readonly ["browser", "computer", "integration"]>;
            readonly icon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>>;
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly nodeId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
        readonly providerThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">>;
        readonly providerTurnId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">>;
        readonly nativeItemRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly parentItemId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">>;
        readonly ordinal: Schema.Int;
        readonly status: Schema.Literals<readonly ["idle", "pending", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
        readonly title: Schema.NullOr<Schema.String>;
        readonly startedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly completedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly updatedAt: Schema.DateTimeUtc;
        readonly type: Schema.Literal<"file_search">;
        readonly pattern: Schema.optional<Schema.String>;
        readonly results: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly fileName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly line: Schema.optional<Schema.Int>;
            readonly column: Schema.optional<Schema.Int>;
            readonly preview: Schema.optional<Schema.String>;
        }>>>;
    }>, Schema.Struct<{
        readonly toolNonExecutionKind: Schema.optional<Schema.String>;
        readonly toolSurface: Schema.optional<Schema.Literals<readonly ["browser", "computer"]>>;
        readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
            readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.TaggedStruct<"native-app", {
            readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>, Schema.TaggedStruct<"display-name", {
                readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>;
        }>, Schema.TaggedStruct<"themed-logo", {
            readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>]>>;
        readonly toolSource: Schema.optional<Schema.Struct<{
            readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly kind: Schema.Literals<readonly ["browser", "computer", "integration"]>;
            readonly icon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>>;
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly nodeId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
        readonly providerThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">>;
        readonly providerTurnId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">>;
        readonly nativeItemRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly parentItemId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">>;
        readonly ordinal: Schema.Int;
        readonly status: Schema.Literals<readonly ["idle", "pending", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
        readonly title: Schema.NullOr<Schema.String>;
        readonly startedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly completedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly updatedAt: Schema.DateTimeUtc;
        readonly type: Schema.Literal<"web_search">;
        readonly patterns: Schema.optional<Schema.$Array<Schema.String>>;
        readonly results: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly title: Schema.optional<Schema.String>;
            readonly url: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly snippet: Schema.optional<Schema.String>;
        }>>>;
    }>, Schema.Struct<{
        readonly toolNonExecutionKind: Schema.optional<Schema.String>;
        readonly toolSurface: Schema.optional<Schema.Literals<readonly ["browser", "computer"]>>;
        readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
            readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.TaggedStruct<"native-app", {
            readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>, Schema.TaggedStruct<"display-name", {
                readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>;
        }>, Schema.TaggedStruct<"themed-logo", {
            readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>]>>;
        readonly toolSource: Schema.optional<Schema.Struct<{
            readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly kind: Schema.Literals<readonly ["browser", "computer", "integration"]>;
            readonly icon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>>;
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly nodeId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
        readonly providerThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">>;
        readonly providerTurnId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">>;
        readonly nativeItemRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly parentItemId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">>;
        readonly ordinal: Schema.Int;
        readonly status: Schema.Literals<readonly ["idle", "pending", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
        readonly title: Schema.NullOr<Schema.String>;
        readonly startedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly completedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly updatedAt: Schema.DateTimeUtc;
        readonly type: Schema.Literal<"approval_request">;
        readonly requestId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">;
        readonly requestKind: Schema.Literals<readonly ["command", "file-read", "file-change", "mcp-elicitation", "permission"]>;
        readonly prompt: Schema.optional<Schema.String>;
        readonly reason: Schema.optional<Schema.String>;
        readonly fullAccessOverride: Schema.optional<Schema.Literals<readonly ["ask_rule", "provider_check"]>>;
        readonly appName: Schema.optional<Schema.String>;
        readonly options: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly decision: Schema.Literals<readonly ["accept", "acceptForSession", "acceptAlways", "decline", "cancel"]>;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly warning: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>>;
    }>, Schema.Struct<{
        readonly toolNonExecutionKind: Schema.optional<Schema.String>;
        readonly toolSurface: Schema.optional<Schema.Literals<readonly ["browser", "computer"]>>;
        readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
            readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.TaggedStruct<"native-app", {
            readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>, Schema.TaggedStruct<"display-name", {
                readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>;
        }>, Schema.TaggedStruct<"themed-logo", {
            readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>]>>;
        readonly toolSource: Schema.optional<Schema.Struct<{
            readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly kind: Schema.Literals<readonly ["browser", "computer", "integration"]>;
            readonly icon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>>;
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly nodeId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
        readonly providerThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">>;
        readonly providerTurnId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">>;
        readonly nativeItemRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly parentItemId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">>;
        readonly ordinal: Schema.Int;
        readonly status: Schema.Literals<readonly ["idle", "pending", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
        readonly title: Schema.NullOr<Schema.String>;
        readonly startedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly completedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly updatedAt: Schema.DateTimeUtc;
        readonly type: Schema.Literal<"checkpoint">;
        readonly checkpointId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "CheckpointId">;
        readonly scopeId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "CheckpointScopeId">;
        readonly files: Schema.$Array<Schema.Struct<{
            readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly kind: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly additions: Schema.Int;
            readonly deletions: Schema.Int;
        }>>;
        readonly filesOmitted: Schema.optionalKey<Schema.Literal<true>>;
    }>, Schema.Struct<{
        readonly toolNonExecutionKind: Schema.optional<Schema.String>;
        readonly toolSurface: Schema.optional<Schema.Literals<readonly ["browser", "computer"]>>;
        readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
            readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.TaggedStruct<"native-app", {
            readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>, Schema.TaggedStruct<"display-name", {
                readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>;
        }>, Schema.TaggedStruct<"themed-logo", {
            readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>]>>;
        readonly toolSource: Schema.optional<Schema.Struct<{
            readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly kind: Schema.Literals<readonly ["browser", "computer", "integration"]>;
            readonly icon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>>;
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly nodeId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
        readonly providerThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">>;
        readonly providerTurnId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">>;
        readonly nativeItemRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly parentItemId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">>;
        readonly ordinal: Schema.Int;
        readonly status: Schema.Literals<readonly ["idle", "pending", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
        readonly title: Schema.NullOr<Schema.String>;
        readonly startedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly completedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly updatedAt: Schema.DateTimeUtc;
        readonly type: Schema.Literal<"run_interrupt_request">;
        readonly message: Schema.String;
    }>, Schema.Struct<{
        readonly toolNonExecutionKind: Schema.optional<Schema.String>;
        readonly toolSurface: Schema.optional<Schema.Literals<readonly ["browser", "computer"]>>;
        readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
            readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.TaggedStruct<"native-app", {
            readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>, Schema.TaggedStruct<"display-name", {
                readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>;
        }>, Schema.TaggedStruct<"themed-logo", {
            readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>]>>;
        readonly toolSource: Schema.optional<Schema.Struct<{
            readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly kind: Schema.Literals<readonly ["browser", "computer", "integration"]>;
            readonly icon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>>;
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly nodeId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
        readonly providerThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">>;
        readonly providerTurnId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">>;
        readonly nativeItemRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly parentItemId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">>;
        readonly ordinal: Schema.Int;
        readonly status: Schema.Literals<readonly ["idle", "pending", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
        readonly title: Schema.NullOr<Schema.String>;
        readonly startedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly completedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly updatedAt: Schema.DateTimeUtc;
        readonly type: Schema.Literal<"run_interrupt_result">;
        readonly message: Schema.String;
    }>, Schema.Struct<{
        readonly toolNonExecutionKind: Schema.optional<Schema.String>;
        readonly toolSurface: Schema.optional<Schema.Literals<readonly ["browser", "computer"]>>;
        readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
            readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.TaggedStruct<"native-app", {
            readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>, Schema.TaggedStruct<"display-name", {
                readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>;
        }>, Schema.TaggedStruct<"themed-logo", {
            readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>]>>;
        readonly toolSource: Schema.optional<Schema.Struct<{
            readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly kind: Schema.Literals<readonly ["browser", "computer", "integration"]>;
            readonly icon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>>;
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly nodeId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
        readonly providerThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">>;
        readonly providerTurnId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">>;
        readonly nativeItemRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly parentItemId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">>;
        readonly ordinal: Schema.Int;
        readonly status: Schema.Literals<readonly ["idle", "pending", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
        readonly title: Schema.NullOr<Schema.String>;
        readonly startedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly completedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly updatedAt: Schema.DateTimeUtc;
        readonly type: Schema.Literal<"system_notice">;
        readonly message: Schema.String;
    }>, Schema.Struct<{
        readonly toolNonExecutionKind: Schema.optional<Schema.String>;
        readonly toolSurface: Schema.optional<Schema.Literals<readonly ["browser", "computer"]>>;
        readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
            readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.TaggedStruct<"native-app", {
            readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>, Schema.TaggedStruct<"display-name", {
                readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>;
        }>, Schema.TaggedStruct<"themed-logo", {
            readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>]>>;
        readonly toolSource: Schema.optional<Schema.Struct<{
            readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly kind: Schema.Literals<readonly ["browser", "computer", "integration"]>;
            readonly icon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>>;
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly nodeId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
        readonly providerThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">>;
        readonly providerTurnId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">>;
        readonly nativeItemRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly parentItemId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">>;
        readonly ordinal: Schema.Int;
        readonly status: Schema.Literals<readonly ["idle", "pending", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
        readonly title: Schema.NullOr<Schema.String>;
        readonly startedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly completedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly updatedAt: Schema.DateTimeUtc;
        readonly type: Schema.Literal<"error">;
        readonly failure: Schema.Struct<{
            readonly class: Schema.Literals<readonly ["usage_limit", "provider_error", "transport_error", "permission_error", "validation_error", "unknown"]>;
            readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly code: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly retryable: Schema.NullOr<Schema.Boolean>;
            readonly resetAt: Schema.optional<Schema.NullOr<Schema.String>>;
        }>;
        readonly retry: Schema.optional<Schema.Struct<{
            readonly attempt: Schema.Int;
            readonly maxAttempts: Schema.NullOr<Schema.Int>;
            readonly retryDelayMs: Schema.NullOr<Schema.Int>;
        }>>;
    }>, Schema.Struct<{
        readonly toolNonExecutionKind: Schema.optional<Schema.String>;
        readonly toolSurface: Schema.optional<Schema.Literals<readonly ["browser", "computer"]>>;
        readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
            readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.TaggedStruct<"native-app", {
            readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>, Schema.TaggedStruct<"display-name", {
                readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>;
        }>, Schema.TaggedStruct<"themed-logo", {
            readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>]>>;
        readonly toolSource: Schema.optional<Schema.Struct<{
            readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly kind: Schema.Literals<readonly ["browser", "computer", "integration"]>;
            readonly icon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>>;
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly nodeId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
        readonly providerThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">>;
        readonly providerTurnId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">>;
        readonly nativeItemRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly parentItemId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">>;
        readonly ordinal: Schema.Int;
        readonly status: Schema.Literals<readonly ["idle", "pending", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
        readonly title: Schema.NullOr<Schema.String>;
        readonly startedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly completedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly updatedAt: Schema.DateTimeUtc;
        readonly type: Schema.Literal<"compaction">;
        readonly driver: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">>;
        readonly summary: Schema.optional<Schema.String>;
        readonly beforeTokenCount: Schema.optional<Schema.Int>;
        readonly afterTokenCount: Schema.optional<Schema.Int>;
    }>, Schema.Struct<{
        readonly toolNonExecutionKind: Schema.optional<Schema.String>;
        readonly toolSurface: Schema.optional<Schema.Literals<readonly ["browser", "computer"]>>;
        readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
            readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.TaggedStruct<"native-app", {
            readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>, Schema.TaggedStruct<"display-name", {
                readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>;
        }>, Schema.TaggedStruct<"themed-logo", {
            readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>]>>;
        readonly toolSource: Schema.optional<Schema.Struct<{
            readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly kind: Schema.Literals<readonly ["browser", "computer", "integration"]>;
            readonly icon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>>;
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly nodeId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
        readonly providerThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">>;
        readonly providerTurnId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">>;
        readonly nativeItemRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly parentItemId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">>;
        readonly ordinal: Schema.Int;
        readonly status: Schema.Literals<readonly ["idle", "pending", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
        readonly title: Schema.NullOr<Schema.String>;
        readonly startedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly completedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly updatedAt: Schema.DateTimeUtc;
        readonly type: Schema.Literal<"handoff">;
        readonly contextHandoffId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ContextHandoffId">;
        readonly fromProviderThreadIds: Schema.$Array<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">>;
        readonly toProviderThreadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">;
        readonly fromProviderInstanceIds: Schema.$Array<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
        readonly toProviderInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly fromModelSelections: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.Struct<{
            readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
            readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
            }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
            }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
        }>, Schema.Struct<{
            readonly provider: Schema.optional<Schema.Unknown>;
            readonly instanceId: Schema.optional<Schema.Unknown>;
            readonly model: Schema.Unknown;
            readonly options: Schema.optional<Schema.Unknown>;
        }>, never, never>>>;
        readonly toModel: Schema.optional<Schema.String>;
        readonly strategy: Schema.Literals<readonly ["delta_since_target_last_seen", "fork_delta_summary", "full_thread_summary", "checkpoint_summary", "manual_context"]>;
        readonly summary: Schema.optional<Schema.String>;
    }>, Schema.Struct<{
        readonly toolNonExecutionKind: Schema.optional<Schema.String>;
        readonly toolSurface: Schema.optional<Schema.Literals<readonly ["browser", "computer"]>>;
        readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
            readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.TaggedStruct<"native-app", {
            readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>, Schema.TaggedStruct<"display-name", {
                readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>;
        }>, Schema.TaggedStruct<"themed-logo", {
            readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>]>>;
        readonly toolSource: Schema.optional<Schema.Struct<{
            readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly kind: Schema.Literals<readonly ["browser", "computer", "integration"]>;
            readonly icon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>>;
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly nodeId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
        readonly providerTurnId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">>;
        readonly nativeItemRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly parentItemId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">>;
        readonly ordinal: Schema.Int;
        readonly status: Schema.Literals<readonly ["idle", "pending", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
        readonly title: Schema.NullOr<Schema.String>;
        readonly startedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly completedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly updatedAt: Schema.DateTimeUtc;
        readonly type: Schema.Literal<"fork">;
        readonly source: Schema.Union<readonly [Schema.Struct<{
            readonly type: Schema.Literal<"run">;
            readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
            readonly runId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"node">;
            readonly nodeId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"provider_thread">;
            readonly providerThreadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">;
            readonly providerTurnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">>;
        }>]>;
        readonly targetThreadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly providerThreadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">>;
    }>, Schema.Struct<{
        readonly toolNonExecutionKind: Schema.optional<Schema.String>;
        readonly toolSurface: Schema.optional<Schema.Literals<readonly ["browser", "computer"]>>;
        readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
            readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.TaggedStruct<"native-app", {
            readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>, Schema.TaggedStruct<"display-name", {
                readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>;
        }>, Schema.TaggedStruct<"themed-logo", {
            readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>]>>;
        readonly toolSource: Schema.optional<Schema.Struct<{
            readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly kind: Schema.Literals<readonly ["browser", "computer", "integration"]>;
            readonly icon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>>;
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly nodeId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
        readonly providerThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">>;
        readonly providerTurnId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">>;
        readonly nativeItemRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly parentItemId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">>;
        readonly ordinal: Schema.Int;
        readonly status: Schema.Literals<readonly ["idle", "pending", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
        readonly title: Schema.NullOr<Schema.String>;
        readonly startedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly completedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly updatedAt: Schema.DateTimeUtc;
        readonly type: Schema.Literal<"thread_created">;
        readonly targetThreadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly targetRunId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly targetProviderInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly targetModel: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.Struct<{
        readonly toolNonExecutionKind: Schema.optional<Schema.String>;
        readonly toolSurface: Schema.optional<Schema.Literals<readonly ["browser", "computer"]>>;
        readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
            readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.TaggedStruct<"native-app", {
            readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>, Schema.TaggedStruct<"display-name", {
                readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>;
        }>, Schema.TaggedStruct<"themed-logo", {
            readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>]>>;
        readonly toolSource: Schema.optional<Schema.Struct<{
            readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly kind: Schema.Literals<readonly ["browser", "computer", "integration"]>;
            readonly icon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>>;
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly nodeId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
        readonly providerThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">>;
        readonly providerTurnId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">>;
        readonly nativeItemRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly parentItemId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">>;
        readonly ordinal: Schema.Int;
        readonly status: Schema.Literals<readonly ["idle", "pending", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
        readonly title: Schema.NullOr<Schema.String>;
        readonly startedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly completedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly updatedAt: Schema.DateTimeUtc;
        readonly type: Schema.Literal<"secret_request">;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly reason: Schema.String;
        readonly placeholder: Schema.optional<Schema.String>;
        readonly delivery: Schema.optional<Schema.Literal<"file">>;
        readonly secretStatus: Schema.Literals<readonly ["pending", "saved", "declined", "cancelled"]>;
    }>, Schema.Struct<{
        readonly toolNonExecutionKind: Schema.optional<Schema.String>;
        readonly toolSurface: Schema.optional<Schema.Literals<readonly ["browser", "computer"]>>;
        readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
            readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.TaggedStruct<"native-app", {
            readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>, Schema.TaggedStruct<"display-name", {
                readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>;
        }>, Schema.TaggedStruct<"themed-logo", {
            readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>]>>;
        readonly toolSource: Schema.optional<Schema.Struct<{
            readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly kind: Schema.Literals<readonly ["browser", "computer", "integration"]>;
            readonly icon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>>;
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly nodeId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
        readonly providerThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">>;
        readonly providerTurnId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">>;
        readonly nativeItemRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly parentItemId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">>;
        readonly ordinal: Schema.Int;
        readonly status: Schema.Literals<readonly ["idle", "pending", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
        readonly title: Schema.NullOr<Schema.String>;
        readonly startedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly completedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly updatedAt: Schema.DateTimeUtc;
        readonly type: Schema.Literal<"link_request">;
        readonly url: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly reason: Schema.String;
        readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
        readonly label: Schema.optional<Schema.String>;
        readonly hint: Schema.optional<Schema.String>;
        readonly requestedAccess: Schema.optional<Schema.Literals<readonly ["read-only", "approval-required", "auto-accept-edits", "auto", "full-access"]>>;
        readonly linkStatus: Schema.Literals<readonly ["pending", "linked", "declined", "cancelled", "failed"]>;
        readonly linkedEnvironmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
        readonly linkedLabel: Schema.optional<Schema.String>;
        readonly linkedAccess: Schema.optional<Schema.Literals<readonly ["read-only", "approval-required", "auto-accept-edits", "auto", "full-access"]>>;
        readonly failure: Schema.optional<Schema.String>;
    }>, Schema.Struct<{
        readonly toolNonExecutionKind: Schema.optional<Schema.String>;
        readonly toolSurface: Schema.optional<Schema.Literals<readonly ["browser", "computer"]>>;
        readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
            readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.TaggedStruct<"native-app", {
            readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>, Schema.TaggedStruct<"display-name", {
                readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>;
        }>, Schema.TaggedStruct<"themed-logo", {
            readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>]>>;
        readonly toolSource: Schema.optional<Schema.Struct<{
            readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly kind: Schema.Literals<readonly ["browser", "computer", "integration"]>;
            readonly icon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>>;
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly nodeId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
        readonly providerThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">>;
        readonly providerTurnId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">>;
        readonly nativeItemRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly parentItemId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">>;
        readonly ordinal: Schema.Int;
        readonly status: Schema.Literals<readonly ["idle", "pending", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
        readonly title: Schema.NullOr<Schema.String>;
        readonly startedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly completedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly updatedAt: Schema.DateTimeUtc;
        readonly type: Schema.Literal<"subagent">;
        readonly subagentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">;
        readonly origin: Schema.Literals<readonly ["provider_native", "app_owned"]>;
        readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
        readonly providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly childThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
        readonly remoteChild: Schema.optional<Schema.Struct<{
            readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
            readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
            readonly label: Schema.String;
            readonly runId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
            readonly stoppedThere: Schema.optional<Schema.Boolean>;
            readonly stopCount: Schema.optional<Schema.Int>;
        }>>;
        readonly prompt: Schema.String;
        readonly progress: Schema.optional<Schema.String>;
        readonly result: Schema.NullOr<Schema.String>;
        readonly promptOmitted: Schema.optionalKey<Schema.Literal<true>>;
        readonly resultOmitted: Schema.optionalKey<Schema.Literal<true>>;
    }>, Schema.Struct<{
        readonly toolNonExecutionKind: Schema.optional<Schema.String>;
        readonly toolSurface: Schema.optional<Schema.Literals<readonly ["browser", "computer"]>>;
        readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
            readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.TaggedStruct<"native-app", {
            readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>, Schema.TaggedStruct<"display-name", {
                readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>;
        }>, Schema.TaggedStruct<"themed-logo", {
            readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>]>>;
        readonly toolSource: Schema.optional<Schema.Struct<{
            readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly kind: Schema.Literals<readonly ["browser", "computer", "integration"]>;
            readonly icon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>>;
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly nodeId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">>;
        readonly providerThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">>;
        readonly providerTurnId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">>;
        readonly nativeItemRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly parentItemId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">>;
        readonly ordinal: Schema.Int;
        readonly status: Schema.Literals<readonly ["idle", "pending", "running", "waiting", "completed", "failed", "cancelled", "interrupted"]>;
        readonly title: Schema.NullOr<Schema.String>;
        readonly startedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly completedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly updatedAt: Schema.DateTimeUtc;
        readonly type: Schema.Literal<"dynamic_tool">;
        readonly toolName: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly viewedImagePath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly input: Schema.Unknown;
        readonly output: Schema.optional<Schema.Unknown>;
        readonly outputOmitted: Schema.optional<Schema.Boolean>;
    }>]>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"command_output.delta">;
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly itemId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
    readonly chunk: Schema.String;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"runtime_request.updated">;
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly threadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
    readonly runtimeRequest: Schema.Struct<{
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">;
        readonly nodeId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">;
        readonly providerTurnId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">>;
        readonly nativeRequestRef: Schema.NullOr<Schema.Struct<{
            readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
            readonly nativeId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly strength: Schema.Literals<readonly ["strong", "weak", "none"]>;
            readonly fingerprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly ordinal: Schema.optional<Schema.Int>;
        }>>;
        readonly kind: Schema.Union<readonly [Schema.Literals<readonly ["command", "file-read", "file-change", "mcp-elicitation", "permission"]>, Schema.Literals<readonly ["dynamic_tool_call", "user_input", "auth_refresh"]>]>;
        readonly status: Schema.Literals<readonly ["pending", "resolved", "expired", "cancelled"]>;
        readonly responseCapability: Schema.Union<readonly [Schema.Struct<{
            readonly type: Schema.Literal<"live">;
            readonly providerSessionId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderSessionId">;
            readonly supportsFeedback: Schema.optional<Schema.Boolean>;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"message">;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"not_resumable">;
            readonly reason: Schema.String;
        }>]>;
        readonly createdAt: Schema.DateTimeUtc;
        readonly resolvedAt: Schema.NullOr<Schema.DateTimeUtc>;
        readonly decision: Schema.optional<Schema.Literals<readonly ["accept", "acceptForSession", "acceptAlways", "decline", "cancel"]>>;
        readonly feedback: Schema.optional<Schema.String>;
        readonly answers: Schema.optional<Schema.$Record<Schema.String, Schema.Unknown>>;
    }>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"plan.updated">;
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly plan: Schema.Union<readonly [Schema.Struct<{
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "PlanId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly nodeId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">;
        readonly status: Schema.Literals<readonly ["draft", "active", "completed", "superseded"]>;
        readonly detailInTurnItem: Schema.optional<Schema.Literal<true>>;
        readonly kind: Schema.Literal<"proposed_plan">;
        readonly markdown: Schema.String;
    }>, Schema.Struct<{
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "PlanId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly runId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">>;
        readonly nodeId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "NodeId">;
        readonly status: Schema.Literals<readonly ["draft", "active", "completed", "superseded"]>;
        readonly detailInTurnItem: Schema.optional<Schema.Literal<true>>;
        readonly kind: Schema.Literal<"todo_list">;
        readonly steps: Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly text: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly status: Schema.Literals<readonly ["pending", "running", "completed"]>;
            readonly durationAnchorAt: Schema.optional<Schema.String>;
            readonly durationMs: Schema.optional<Schema.Int>;
        }>>;
        readonly explanation: Schema.optional<Schema.String>;
    }>]>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"turn.terminal">;
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerThreadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">;
    readonly providerTurnId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">;
    readonly runOrdinal: Schema.Int;
    readonly status: Schema.Literals<readonly ["completed", "interrupted", "cancelled"]>;
    readonly failure: Schema.Null;
    readonly threadDisposition: Schema.Literals<readonly ["reusable", "broken"]>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"turn.terminal">;
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerThreadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">;
    readonly providerTurnId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">;
    readonly runOrdinal: Schema.Int;
    readonly failureItemOrdinal: Schema.Int;
    readonly status: Schema.Literal<"failed">;
    readonly failure: Schema.Struct<{
        readonly class: Schema.Literals<readonly ["usage_limit", "provider_error", "transport_error", "permission_error", "validation_error", "unknown"]>;
        readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly code: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly retryable: Schema.NullOr<Schema.Boolean>;
        readonly resetAt: Schema.optional<Schema.NullOr<Schema.String>>;
    }>;
    readonly retry: Schema.optional<Schema.Struct<{
        readonly attempt: Schema.Int;
        readonly maxAttempts: Schema.NullOr<Schema.Int>;
        readonly retryDelayMs: Schema.NullOr<Schema.Int>;
    }>>;
    readonly retryStartedAt: Schema.optional<Schema.DateTimeUtc>;
    readonly threadDisposition: Schema.Literals<readonly ["reusable", "broken"]>;
    /** Child turns outlive root failure and report their own terminals; otherwise open children settle. */
    readonly childTurnsContinue: Schema.optional<Schema.Literal<true>>;
}>]>;
export type ProviderAdapterV2Event = typeof ProviderAdapterV2Event.Type;
declare const ProviderAdapterCapabilitiesError_base: Schema.Class<ProviderAdapterCapabilitiesError, Schema.TaggedStruct<"ProviderAdapterCapabilitiesError", {
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ProviderAdapterCapabilitiesError extends ProviderAdapterCapabilitiesError_base {
    get message(): string;
}
declare const ProviderAdapterOpenSessionError_base: Schema.Class<ProviderAdapterOpenSessionError, Schema.TaggedStruct<"ProviderAdapterOpenSessionError", {
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerSessionId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderSessionId">;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ProviderAdapterOpenSessionError extends ProviderAdapterOpenSessionError_base {
    get message(): string;
}
declare const ProviderAdapterCloseSessionError_base: Schema.Class<ProviderAdapterCloseSessionError, Schema.TaggedStruct<"ProviderAdapterCloseSessionError", {
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerSessionId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderSessionId">;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ProviderAdapterCloseSessionError extends ProviderAdapterCloseSessionError_base {
    get message(): string;
}
declare const ProviderAdapterResumeThreadError_base: Schema.Class<ProviderAdapterResumeThreadError, Schema.TaggedStruct<"ProviderAdapterResumeThreadError", {
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerSessionId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderSessionId">;
    readonly providerThreadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ProviderAdapterResumeThreadError extends ProviderAdapterResumeThreadError_base {
    get message(): string;
}
declare const ProviderAdapterEnsureThreadError_base: Schema.Class<ProviderAdapterEnsureThreadError, Schema.TaggedStruct<"ProviderAdapterEnsureThreadError", {
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ProviderAdapterEnsureThreadError extends ProviderAdapterEnsureThreadError_base {
    get message(): string;
}
declare const ProviderAdapterReadThreadSnapshotError_base: Schema.Class<ProviderAdapterReadThreadSnapshotError, Schema.TaggedStruct<"ProviderAdapterReadThreadSnapshotError", {
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerThreadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ProviderAdapterReadThreadSnapshotError extends ProviderAdapterReadThreadSnapshotError_base {
    get message(): string;
}
declare const ProviderAdapterRollbackThreadError_base: Schema.Class<ProviderAdapterRollbackThreadError, Schema.TaggedStruct<"ProviderAdapterRollbackThreadError", {
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerThreadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">;
    readonly checkpointId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "CheckpointId">>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ProviderAdapterRollbackThreadError extends ProviderAdapterRollbackThreadError_base {
    get message(): string;
}
declare const ProviderAdapterForkThreadError_base: Schema.Class<ProviderAdapterForkThreadError, Schema.TaggedStruct<"ProviderAdapterForkThreadError", {
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerThreadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ProviderAdapterForkThreadError extends ProviderAdapterForkThreadError_base {
    get message(): string;
}
declare const ProviderAdapterTurnStartError_base: Schema.Class<ProviderAdapterTurnStartError, Schema.TaggedStruct<"ProviderAdapterTurnStartError", {
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly providerThreadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">;
    readonly runId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RunId">;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ProviderAdapterTurnStartError extends ProviderAdapterTurnStartError_base {
    get message(): string;
}
declare const ProviderAdapterSteerRunUnsupportedError_base: Schema.Class<ProviderAdapterSteerRunUnsupportedError, Schema.TaggedStruct<"ProviderAdapterSteerRunUnsupportedError", {
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerThreadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">;
}>, import("effect/Cause").YieldableError>;
export declare class ProviderAdapterSteerRunUnsupportedError extends ProviderAdapterSteerRunUnsupportedError_base {
    get message(): string;
}
declare const ProviderAdapterSteerRunError_base: Schema.Class<ProviderAdapterSteerRunError, Schema.TaggedStruct<"ProviderAdapterSteerRunError", {
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerThreadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">;
    readonly providerTurnId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ProviderAdapterSteerRunError extends ProviderAdapterSteerRunError_base {
    get message(): string;
}
declare const ProviderAdapterInterruptError_base: Schema.Class<ProviderAdapterInterruptError, Schema.TaggedStruct<"ProviderAdapterInterruptError", {
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerThreadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderThreadId">;
    readonly providerTurnId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderTurnId">;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ProviderAdapterInterruptError extends ProviderAdapterInterruptError_base {
    get message(): string;
}
declare const ProviderAdapterRuntimeRequestResponseError_base: Schema.Class<ProviderAdapterRuntimeRequestResponseError, Schema.TaggedStruct<"ProviderAdapterRuntimeRequestResponseError", {
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly requestId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ProviderAdapterRuntimeRequestResponseError extends ProviderAdapterRuntimeRequestResponseError_base {
    get message(): string;
}
declare const ProviderAdapterEventStreamError_base: Schema.Class<ProviderAdapterEventStreamError, Schema.TaggedStruct<"ProviderAdapterEventStreamError", {
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerSessionId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderSessionId">;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ProviderAdapterEventStreamError extends ProviderAdapterEventStreamError_base {
    get message(): string;
}
declare const ProviderAdapterFailureReason: Schema.Literals<readonly ["previous_turn_active", "attachment_unreadable"]>;
export type ProviderAdapterFailureReason = typeof ProviderAdapterFailureReason.Type;
declare const ProviderAdapterProtocolError_base: Schema.Class<ProviderAdapterProtocolError, Schema.TaggedStruct<"ProviderAdapterProtocolError", {
    readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly detail: Schema.String;
    readonly reason: Schema.optional<Schema.Literals<readonly ["previous_turn_active", "attachment_unreadable"]>>;
    readonly cause: Schema.optional<Schema.Defect>;
    readonly payload: Schema.optional<Schema.Unknown>;
}>, import("effect/Cause").YieldableError>;
export declare class ProviderAdapterProtocolError extends ProviderAdapterProtocolError_base {
    get message(): string;
}
export declare const ProviderAdapterV2Error: Schema.Union<readonly [typeof ProviderAdapterCapabilitiesError, typeof ProviderAdapterOpenSessionError, typeof ProviderAdapterCloseSessionError, typeof ProviderAdapterResumeThreadError, typeof ProviderAdapterEnsureThreadError, typeof ProviderAdapterReadThreadSnapshotError, typeof ProviderAdapterRollbackThreadError, typeof ProviderAdapterForkThreadError, typeof ProviderAdapterTurnStartError, typeof ProviderAdapterSteerRunUnsupportedError, typeof ProviderAdapterSteerRunError, typeof ProviderAdapterInterruptError, typeof ProviderAdapterRuntimeRequestResponseError, typeof ProviderAdapterEventStreamError, typeof ProviderAdapterProtocolError]>;
export type ProviderAdapterV2Error = typeof ProviderAdapterV2Error.Type;
export interface ProviderAdapterV2OpenSessionInput {
    readonly threadId: ThreadId;
    readonly providerSessionId: ProviderSessionId;
    readonly modelSelection: ModelSelection;
    readonly runtimePolicy: ProviderAdapterV2RuntimePolicy;
    readonly resumeFromSession?: OrchestrationV2ProviderSession;
    readonly initialNativeThreadId?: string;
    readonly initialProviderItemIdentityVersion?: 2;
}
export interface ProviderAdapterV2EnsureThreadInput {
    readonly threadId: ThreadId;
    readonly title?: string;
    readonly modelSelection: ModelSelection;
    readonly runtimePolicy: ProviderAdapterV2RuntimePolicy;
    readonly providerSessionId?: ProviderSessionId;
    readonly existingProviderThread?: OrchestrationV2ProviderThread;
    readonly forceNewNativeThread?: boolean;
}
export interface ProviderAdapterV2TurnInput {
    readonly appThread: OrchestrationV2AppThread;
    readonly threadId: ThreadId;
    readonly runId: RunId;
    readonly runOrdinal: number;
    readonly nativeThreadHasTurns?: boolean;
    readonly providerTurnOrdinal: number;
    readonly restartContinuationOfRunId?: RunId;
    readonly attemptId: RunAttemptId;
    readonly rootNodeId: NodeId;
    readonly providerThread: OrchestrationV2ProviderThread;
    readonly message: ProviderAdapterV2TurnMessage;
    readonly modelSelection: ModelSelection;
    readonly runtimePolicy: ProviderAdapterV2RuntimePolicy;
    readonly appContext?: ReadonlyArray<{
        readonly key: string;
        readonly text: string;
    }>;
}
export interface ProviderAdapterV2SteerInput {
    readonly threadId: ThreadId;
    readonly runId: RunId;
    readonly providerThread: OrchestrationV2ProviderThread;
    readonly providerTurnId: ProviderTurnId;
    readonly message: ProviderAdapterV2TurnMessage;
}
export interface ProviderAdapterV2InterruptInput {
    readonly providerThread: OrchestrationV2ProviderThread;
    readonly providerTurnId: ProviderTurnId;
    readonly requestRuntimeRestart?: boolean;
}
export interface ProviderAdapterV2RuntimeRequestResponseInput {
    readonly requestId: RuntimeRequestId;
    readonly decision?: ProviderApprovalDecision;
    readonly feedback?: string;
    readonly answers?: ProviderUserInputAnswers;
    readonly response?: unknown;
}
export interface ProviderAdapterV2ThreadSnapshot {
    readonly providerThread: OrchestrationV2ProviderThread;
    readonly providerTurns: ReadonlyArray<OrchestrationV2ProviderTurn>;
    readonly messages: ReadonlyArray<OrchestrationV2ConversationMessage>;
    readonly runtimeRequests: ReadonlyArray<OrchestrationV2RuntimeRequest>;
    readonly providerPayload?: unknown;
}
export interface ProviderAdapterV2ReadThreadSnapshotInput {
    readonly providerThread: OrchestrationV2ProviderThread;
}
export type ProviderAdapterV2RollbackTarget = {
    readonly type: "thread_start";
    readonly checkpointId: CheckpointId;
    readonly appRunOrdinal: 0;
} | {
    readonly type: "provider_turn";
    readonly checkpointId: CheckpointId;
    readonly appRunOrdinal: number;
    readonly providerTurn: OrchestrationV2ProviderTurn;
};
export interface ProviderAdapterV2RollbackThreadInput {
    readonly providerThread: OrchestrationV2ProviderThread;
    readonly target: ProviderAdapterV2RollbackTarget;
    readonly providerThreadTurns: ReadonlyArray<OrchestrationV2ProviderTurn>;
}
export interface ProviderAdapterV2ForkThreadInput {
    readonly sourceProviderThread: OrchestrationV2ProviderThread;
    readonly sourceProviderTurns?: ReadonlyArray<OrchestrationV2ProviderTurn>;
    readonly providerTurnId?: ProviderTurnId;
    readonly targetThreadId: ThreadId;
    readonly ownerNodeId?: NodeId;
    readonly modelSelection?: ModelSelection;
    readonly runtimePolicy?: ProviderAdapterV2RuntimePolicy;
}
export interface ProviderAdapterV2EventSubscription {
    readonly events: Stream.Stream<ProviderAdapterV2Event, ProviderAdapterV2Error>;
    readonly close: Effect.Effect<void>;
}
export interface ProviderAdapterV2HistoricalContext {
    readonly messages: ReadonlyArray<OrchestrationV2HistoricalMessage>;
    readonly context: string;
}
export interface ProviderAdapterV2McpTool {
    readonly name: string;
    readonly _meta?: unknown;
    readonly annotations?: unknown;
}
export interface ProviderAdapterV2McpCallToolResult {
    readonly content: ReadonlyArray<unknown>;
    readonly structuredContent?: unknown;
    readonly isError?: boolean;
    readonly _meta?: unknown;
}
export interface ProviderAdapterV2McpApps {
    readonly listTools: (input: {
        readonly providerThread: OrchestrationV2ProviderThread;
        readonly server: string;
    }) => Effect.Effect<ReadonlyArray<ProviderAdapterV2McpTool>, ProviderAdapterV2Error>;
    readonly callTool: (input: {
        readonly providerThread: OrchestrationV2ProviderThread;
        readonly server: string;
        readonly tool: string;
        readonly arguments: Record<string, unknown>;
    }) => Effect.Effect<ProviderAdapterV2McpCallToolResult, ProviderAdapterV2Error>;
    readonly readResource: (input: {
        readonly providerThread: OrchestrationV2ProviderThread;
        readonly server: string;
        readonly uri: string;
    }) => Effect.Effect<{
        readonly contents: ReadonlyArray<unknown>;
    }, ProviderAdapterV2Error>;
}
export type ProviderAdapterV2SubagentOutcome = {
    readonly status: "completed" | "failed" | "cancelled";
    readonly completedAt: NonNullable<OrchestrationV2Subagent["completedAt"]>;
    readonly result: OrchestrationV2Subagent["result"];
};
export interface ProviderAdapterV2SessionRuntime {
    readonly instanceId: ProviderInstanceId;
    readonly driver: ProviderDriverKind;
    readonly providerSessionId: ProviderSessionId;
    readonly providerSession: OrchestrationV2ProviderSession;
    readonly events: Stream.Stream<ProviderAdapterV2Event, ProviderAdapterV2Error>;
    /** Manager runtimes broadcast independent subscriptions; adapters may expose only a single-consumer stream. */
    readonly subscribeEvents?: Effect.Effect<ProviderAdapterV2EventSubscription>;
    readonly hasPendingBackgroundWork?: Effect.Effect<boolean>;
    /** Root-subscription probe; replacement checks opt in to subagents owned by the live process. */
    readonly hasPendingBackgroundWorkForThread?: (providerThread: OrchestrationV2ProviderThread, options?: {
        readonly includeSubagents?: boolean;
    }) => Effect.Effect<boolean>;
    /** Set only if all session background tasks end with its process; otherwise threads must keep Waiting. */
    readonly backgroundTasksEndWithProcess?: true;
    /** @throws {never} */
    readonly getModelContextWindow?: (modelSelection: ModelSelection, cwd?: string | null) => number | undefined;
    /** @throws {never} */
    readonly canReuseContextUsage?: (previous: ModelSelection, next: ModelSelection) => boolean;
    readonly ensureThread: (input: ProviderAdapterV2EnsureThreadInput) => Effect.Effect<OrchestrationV2ProviderThread, ProviderAdapterV2Error>;
    readonly resumeThread: (input: {
        readonly providerThread: OrchestrationV2ProviderThread;
        readonly threadId?: ThreadId;
        readonly modelSelection?: ModelSelection;
        readonly runtimePolicy?: ProviderAdapterV2RuntimePolicy;
    }) => Effect.Effect<OrchestrationV2ProviderThread, ProviderAdapterV2Error>;
    /** False means the native protocol explicitly does not support history injection. */
    readonly injectHistory?: (input: ProviderAdapterV2HistoricalContext & {
        readonly providerThread: OrchestrationV2ProviderThread;
    }) => Effect.Effect<boolean, ProviderAdapterV2Error>;
    readonly startTurn: (input: ProviderAdapterV2TurnInput) => Effect.Effect<void, ProviderAdapterV2Error>;
    readonly compactThread?: (input: ProviderAdapterV2TurnInput) => Effect.Effect<void, ProviderAdapterV2Error>;
    readonly steerTurn: (input: ProviderAdapterV2SteerInput) => Effect.Effect<void, ProviderAdapterV2Error>;
    readonly stopTask?: (input: {
        readonly providerThread: OrchestrationV2ProviderThread;
        readonly taskId: string;
    }) => Effect.Effect<void, ProviderAdapterV2Error>;
    /**
     * Marks or unmarks background tasks the agent will resume from, using the ids the agent saw.
     * Ids not running on this provider thread come back unmatched and change nothing.
     */
    readonly awaitBackgroundTasks?: (input: {
        readonly providerThread: OrchestrationV2ProviderThread;
        readonly taskIds: ReadonlyArray<string>;
        readonly awaited: boolean;
    }) => Effect.Effect<{
        readonly matched: ReadonlyArray<string>;
    }, ProviderAdapterV2Error>;
    readonly interruptTurn: (input: ProviderAdapterV2InterruptInput) => Effect.Effect<void, ProviderAdapterV2Error>;
    readonly stopSubagent?: (input: {
        readonly providerThread: OrchestrationV2ProviderThread;
        readonly nativeTaskId: string;
        /** A delayed Stop must not interrupt a task resumed after this request. */
        readonly requestedAt?: NonNullable<OrchestrationV2Subagent["startedAt"]>;
    }) => Effect.Effect<void | ProviderAdapterV2SubagentOutcome, ProviderAdapterV2Error>;
    readonly unloadThread?: (input: {
        readonly providerThread: OrchestrationV2ProviderThread;
    }) => Effect.Effect<void, ProviderAdapterV2Error>;
    readonly respondToRuntimeRequest: (input: ProviderAdapterV2RuntimeRequestResponseInput) => Effect.Effect<void, ProviderAdapterV2Error>;
    readonly readThreadSnapshot: (input: ProviderAdapterV2ReadThreadSnapshotInput) => Effect.Effect<ProviderAdapterV2ThreadSnapshot, ProviderAdapterV2Error>;
    readonly uploadFeedback?: (input: {
        readonly providerThread: OrchestrationV2ProviderThread;
        readonly reason?: string;
    }) => Effect.Effect<{
        readonly feedbackId: string;
    }, ProviderAdapterV2Error>;
    /** Absent means non-interactive apps with plain tool rows. */
    readonly mcpApps?: ProviderAdapterV2McpApps;
    readonly rollbackThread: (input: ProviderAdapterV2RollbackThreadInput) => Effect.Effect<ProviderAdapterV2ThreadSnapshot, ProviderAdapterV2Error>;
    readonly forkThread: (input: ProviderAdapterV2ForkThreadInput) => Effect.Effect<OrchestrationV2ProviderThread, ProviderAdapterV2Error>;
}
declare const ProviderAdapterV2_base: Context.ServiceClass<ProviderAdapterV2, "@t3tools/provider-core/server/ProviderAdapter/ProviderAdapterV2", {
    readonly instanceId: ProviderInstanceId;
    readonly driver: ProviderDriverKind;
    readonly getCapabilities: () => Effect.Effect<OrchestrationV2ProviderCapabilities, ProviderAdapterV2Error>;
    readonly planSelectionTransition: (input: ProviderSelectionTransitionInput) => Effect.Effect<ProviderSelectionTransitionPlan, ProviderAdapterV2Error>;
    readonly openSession: (input: ProviderAdapterV2OpenSessionInput) => Effect.Effect<ProviderAdapterV2SessionRuntime, ProviderAdapterV2Error, Scope.Scope>;
}>;
export declare class ProviderAdapterV2 extends ProviderAdapterV2_base {
}
export {};
