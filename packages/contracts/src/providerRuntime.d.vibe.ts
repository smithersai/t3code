import * as Schema from "effect/Schema";
declare const RuntimeEventRawSource: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
export type RuntimeEventRawSource = typeof RuntimeEventRawSource.Type;
export declare const RuntimeEventRaw: Schema.Struct<{
    readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
    readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly payload: Schema.Unknown;
}>;
export type RuntimeEventRaw = typeof RuntimeEventRaw.Type;
declare const ProviderRequestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
export type ProviderRequestId = typeof ProviderRequestId.Type;
declare const ProviderRefs: Schema.Struct<{
    readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
    readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type ProviderRefs = typeof ProviderRefs.Type;
declare const RuntimeSessionState: Schema.Literals<readonly ["starting", "ready", "running", "waiting", "stopped", "error"]>;
export type RuntimeSessionState = typeof RuntimeSessionState.Type;
declare const RuntimeThreadState: Schema.Literals<readonly ["active", "idle", "archived", "closed", "compacted", "error"]>;
export type RuntimeThreadState = typeof RuntimeThreadState.Type;
declare const RuntimeTurnState: Schema.Literals<readonly ["completed", "failed", "interrupted", "cancelled"]>;
export type RuntimeTurnState = typeof RuntimeTurnState.Type;
declare const RuntimePlanStepStatus: Schema.Literals<readonly ["pending", "inProgress", "completed"]>;
export type RuntimePlanStepStatus = typeof RuntimePlanStepStatus.Type;
declare const RuntimeItemStatus: Schema.Literals<readonly ["inProgress", "completed", "failed", "declined"]>;
export type RuntimeItemStatus = typeof RuntimeItemStatus.Type;
declare const RuntimeContentStreamKind: Schema.Literals<readonly ["assistant_text", "reasoning_text", "reasoning_summary_text", "plan_text", "command_output", "file_change_output", "unknown"]>;
export type RuntimeContentStreamKind = typeof RuntimeContentStreamKind.Type;
declare const RuntimeSessionExitKind: Schema.Literals<readonly ["graceful", "error"]>;
export type RuntimeSessionExitKind = typeof RuntimeSessionExitKind.Type;
declare const RuntimeErrorClass: Schema.Literals<readonly ["provider_error", "transport_error", "permission_error", "validation_error", "unknown"]>;
export type RuntimeErrorClass = typeof RuntimeErrorClass.Type;
export declare const ToolLifecycleItemType: Schema.Literals<readonly ["command_execution", "file_change", "mcp_tool_call", "dynamic_tool_call", "collab_agent_tool_call", "web_search", "image_view"]>;
export type ToolLifecycleItemType = typeof ToolLifecycleItemType.Type;
export declare function isToolLifecycleItemType(value: string): value is ToolLifecycleItemType;
export declare const CanonicalItemType: Schema.Literals<readonly ["user_message", "assistant_message", "reasoning", "plan", "command_execution", "file_change", "mcp_tool_call", "dynamic_tool_call", "collab_agent_tool_call", "web_search", "image_view", "review_entered", "review_exited", "context_compaction", "error", "unknown"]>;
export type CanonicalItemType = typeof CanonicalItemType.Type;
export declare const CanonicalRequestType: Schema.Literals<readonly ["command_execution_approval", "file_read_approval", "file_change_approval", "apply_patch_approval", "exec_command_approval", "mcp_elicitation_approval", "permission_approval", "tool_user_input", "dynamic_tool_call", "auth_tokens_refresh", "unknown"]>;
export type CanonicalRequestType = typeof CanonicalRequestType.Type;
declare const ProviderRuntimeEventBase: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
}>;
export type ProviderRuntimeEventBase = typeof ProviderRuntimeEventBase.Type;
declare const SessionStartedPayload: Schema.Struct<{
    readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly resume: Schema.optional<Schema.Unknown>;
}>;
export type SessionStartedPayload = typeof SessionStartedPayload.Type;
declare const SessionConfiguredPayload: Schema.Struct<{
    readonly config: Schema.$Record<Schema.String, Schema.Unknown>;
}>;
export type SessionConfiguredPayload = typeof SessionConfiguredPayload.Type;
declare const SessionStateChangedPayload: Schema.Struct<{
    readonly state: Schema.Literals<readonly ["starting", "ready", "running", "waiting", "stopped", "error"]>;
    readonly reason: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly detail: Schema.optional<Schema.Unknown>;
}>;
export type SessionStateChangedPayload = typeof SessionStateChangedPayload.Type;
declare const SessionExitedPayload: Schema.Struct<{
    readonly reason: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly recoverable: Schema.optional<Schema.Boolean>;
    readonly exitKind: Schema.optional<Schema.Literals<readonly ["graceful", "error"]>>;
}>;
export type SessionExitedPayload = typeof SessionExitedPayload.Type;
declare const ThreadStartedPayload: Schema.Struct<{
    readonly providerThreadId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type ThreadStartedPayload = typeof ThreadStartedPayload.Type;
declare const ThreadStateChangedPayload: Schema.Struct<{
    readonly state: Schema.Literals<readonly ["active", "idle", "archived", "closed", "compacted", "error"]>;
    readonly beforeTokens: Schema.optional<Schema.Int>;
    readonly afterTokens: Schema.optional<Schema.Int>;
    readonly detail: Schema.optional<Schema.Unknown>;
}>;
export type ThreadStateChangedPayload = typeof ThreadStateChangedPayload.Type;
declare const ThreadMetadataUpdatedPayload: Schema.Struct<{
    readonly name: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly metadata: Schema.optional<Schema.$Record<Schema.String, Schema.Unknown>>;
}>;
export type ThreadMetadataUpdatedPayload = typeof ThreadMetadataUpdatedPayload.Type;
export declare const ThreadTokenUsageSnapshot: Schema.Struct<{
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
}>;
export type ThreadTokenUsageSnapshot = typeof ThreadTokenUsageSnapshot.Type;
declare const ThreadTokenUsageUpdatedPayload: Schema.Struct<{
    readonly usage: Schema.Struct<{
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
    }>;
}>;
export type ThreadTokenUsageUpdatedPayload = typeof ThreadTokenUsageUpdatedPayload.Type;
declare const ThreadRealtimeStartedPayload: Schema.Struct<{
    readonly realtimeSessionId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type ThreadRealtimeStartedPayload = typeof ThreadRealtimeStartedPayload.Type;
declare const ThreadRealtimeItemAddedPayload: Schema.Struct<{
    readonly item: Schema.Unknown;
}>;
export type ThreadRealtimeItemAddedPayload = typeof ThreadRealtimeItemAddedPayload.Type;
declare const ThreadRealtimeAudioDeltaPayload: Schema.Struct<{
    readonly audio: Schema.Unknown;
}>;
export type ThreadRealtimeAudioDeltaPayload = typeof ThreadRealtimeAudioDeltaPayload.Type;
declare const ThreadRealtimeErrorPayload: Schema.Struct<{
    readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type ThreadRealtimeErrorPayload = typeof ThreadRealtimeErrorPayload.Type;
declare const ThreadRealtimeClosedPayload: Schema.Struct<{
    readonly reason: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type ThreadRealtimeClosedPayload = typeof ThreadRealtimeClosedPayload.Type;
declare const TurnStartedPayload: Schema.Struct<{
    readonly model: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly effort: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type TurnStartedPayload = typeof TurnStartedPayload.Type;
export declare const TurnTokenUsage: Schema.Union<readonly [Schema.Struct<{
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
}>]>;
export type TurnTokenUsage = typeof TurnTokenUsage.Type;
declare const TurnCompletedPayload: Schema.Struct<{
    readonly state: Schema.Literals<readonly ["completed", "failed", "interrupted", "cancelled"]>;
    readonly stopReason: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    readonly usage: Schema.optional<Schema.Unknown>;
    readonly modelUsage: Schema.optional<Schema.$Record<Schema.String, Schema.Unknown>>;
    readonly totalCostUsd: Schema.optional<Schema.Number>;
    readonly errorMessage: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly tokenUsage: Schema.optional<Schema.Union<readonly [Schema.Struct<{
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
export type TurnCompletedPayload = typeof TurnCompletedPayload.Type;
declare const TurnAbortedPayload: Schema.Struct<{
    readonly reason: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly tokenUsage: Schema.optional<Schema.Union<readonly [Schema.Struct<{
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
export type TurnAbortedPayload = typeof TurnAbortedPayload.Type;
declare const RuntimePlanStep: Schema.Struct<{
    readonly step: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly status: Schema.Literals<readonly ["pending", "inProgress", "completed"]>;
}>;
export type RuntimePlanStep = typeof RuntimePlanStep.Type;
declare const TurnPlanUpdatedPayload: Schema.Struct<{
    readonly explanation: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    readonly plan: Schema.$Array<Schema.Struct<{
        readonly step: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly status: Schema.Literals<readonly ["pending", "inProgress", "completed"]>;
    }>>;
}>;
export type TurnPlanUpdatedPayload = typeof TurnPlanUpdatedPayload.Type;
declare const TurnProposedDeltaPayload: Schema.Struct<{
    readonly delta: Schema.String;
}>;
export type TurnProposedDeltaPayload = typeof TurnProposedDeltaPayload.Type;
declare const TurnProposedCompletedPayload: Schema.Struct<{
    readonly planMarkdown: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type TurnProposedCompletedPayload = typeof TurnProposedCompletedPayload.Type;
declare const TurnDiffUpdatedPayload: Schema.Struct<{
    readonly unifiedDiff: Schema.String;
}>;
export type TurnDiffUpdatedPayload = typeof TurnDiffUpdatedPayload.Type;
export declare const ToolActivitySurface: Schema.Literals<readonly ["browser", "computer"]>;
export type ToolActivitySurface = typeof ToolActivitySurface.Type;
export declare const ToolActivityNativeAppReference: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, Schema.TaggedStruct<"display-name", {
    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>]>;
export type ToolActivityNativeAppReference = typeof ToolActivityNativeAppReference.Type;
export declare const ToolActivityIcon: Schema.Union<readonly [Schema.TaggedStruct<"website", {
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
}>]>;
export type ToolActivityIcon = typeof ToolActivityIcon.Type;
export declare const ToolActivitySource: Schema.Struct<{
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
}>;
export type ToolActivitySource = typeof ToolActivitySource.Type;
export declare const ItemLifecyclePayload: Schema.Struct<{
    readonly itemType: Schema.Literals<readonly ["user_message", "assistant_message", "reasoning", "plan", "command_execution", "file_change", "mcp_tool_call", "dynamic_tool_call", "collab_agent_tool_call", "web_search", "image_view", "review_entered", "review_exited", "context_compaction", "error", "unknown"]>;
    readonly status: Schema.optional<Schema.Literals<readonly ["inProgress", "completed", "failed", "declined"]>>;
    readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly detail: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
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
    readonly data: Schema.optional<Schema.Unknown>;
    readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly parentToolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type ItemLifecyclePayload = typeof ItemLifecyclePayload.Type;
declare const ContentDeltaPayload: Schema.Struct<{
    readonly streamKind: Schema.Literals<readonly ["assistant_text", "reasoning_text", "reasoning_summary_text", "plan_text", "command_output", "file_change_output", "unknown"]>;
    readonly delta: Schema.String;
    readonly contentIndex: Schema.optional<Schema.Int>;
    readonly summaryIndex: Schema.optional<Schema.Int>;
}>;
export type ContentDeltaPayload = typeof ContentDeltaPayload.Type;
declare const RequestOpenedPayload: Schema.Struct<{
    readonly requestType: Schema.Literals<readonly ["command_execution_approval", "file_read_approval", "file_change_approval", "apply_patch_approval", "exec_command_approval", "mcp_elicitation_approval", "permission_approval", "tool_user_input", "dynamic_tool_call", "auth_tokens_refresh", "unknown"]>;
    readonly detail: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly appName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly options: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly decision: Schema.Literals<readonly ["accept", "acceptForSession", "acceptAlways", "decline", "cancel"]>;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly warning: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>>;
    readonly args: Schema.optional<Schema.Unknown>;
}>;
export type RequestOpenedPayload = typeof RequestOpenedPayload.Type;
declare const RequestResolvedPayload: Schema.Struct<{
    readonly requestType: Schema.Literals<readonly ["command_execution_approval", "file_read_approval", "file_change_approval", "apply_patch_approval", "exec_command_approval", "mcp_elicitation_approval", "permission_approval", "tool_user_input", "dynamic_tool_call", "auth_tokens_refresh", "unknown"]>;
    readonly decision: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly resolution: Schema.optional<Schema.Unknown>;
}>;
export type RequestResolvedPayload = typeof RequestResolvedPayload.Type;
declare const UserInputQuestionOption: Schema.Struct<{
    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly description: Schema.String;
    readonly value: Schema.optional<Schema.String>;
}>;
export type UserInputQuestionOption = typeof UserInputQuestionOption.Type;
export declare const UserInputQuestion: Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly header: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly question: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly options: Schema.$Array<Schema.Struct<{
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly description: Schema.String;
        readonly value: Schema.optional<Schema.String>;
    }>>;
    readonly allowCustomAnswer: Schema.optional<Schema.Boolean>;
    readonly initialAnswer: Schema.optional<Schema.String>;
    readonly multiSelect: Schema.withConstructorDefault<Schema.optional<Schema.Boolean>>;
}>;
export type UserInputQuestion = typeof UserInputQuestion.Type;
export declare const UserInputRequestedPayload: Schema.Struct<{
    readonly questions: Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly header: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly question: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly options: Schema.$Array<Schema.Struct<{
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.String;
            readonly value: Schema.optional<Schema.String>;
        }>>;
        readonly allowCustomAnswer: Schema.optional<Schema.Boolean>;
        readonly initialAnswer: Schema.optional<Schema.String>;
        readonly multiSelect: Schema.withConstructorDefault<Schema.optional<Schema.Boolean>>;
    }>>;
    readonly responseMode: Schema.optional<Schema.Literal<"message">>;
}>;
export type UserInputRequestedPayload = typeof UserInputRequestedPayload.Type;
declare const UserInputResolvedPayload: Schema.Struct<{
    readonly answers: Schema.$Record<Schema.String, Schema.Unknown>;
}>;
export type UserInputResolvedPayload = typeof UserInputResolvedPayload.Type;
/** Claude reports activation deltas; Codex reports cumulative totals. Merge per provider in client-runtime. */
export declare const RuntimeTaskUsage: Schema.Struct<{
    readonly totalTokens: Schema.Int;
    readonly inputTokens: Schema.optional<Schema.Int>;
    readonly cachedInputTokens: Schema.optional<Schema.Int>;
    readonly outputTokens: Schema.optional<Schema.Int>;
    readonly reasoningOutputTokens: Schema.optional<Schema.Int>;
    readonly toolUses: Schema.optional<Schema.Int>;
    readonly durationMs: Schema.optional<Schema.Int>;
}>;
export type RuntimeTaskUsage = typeof RuntimeTaskUsage.Type;
export declare const TaskWorkflowPhase: Schema.Struct<{
    readonly index: Schema.Int;
    readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type TaskWorkflowPhase = typeof TaskWorkflowPhase.Type;
export declare const TaskRunHandles: Schema.Struct<{
    readonly runId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly scriptPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly transcriptDir: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    /** Only http/https URLs, sanitized by the adapter. */
    readonly sessionUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type TaskRunHandles = typeof TaskRunHandles.Type;
export declare const TaskAgentLinkage: Schema.Struct<{
    readonly taskType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly agentKind: Schema.optional<Schema.Literals<readonly ["agent", "background"]>>;
    readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly role: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly model: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly effort: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly toolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly parentAgentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly workflowName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly agentIndex: Schema.optional<Schema.Int>;
    readonly phaseIndex: Schema.optional<Schema.Int>;
    readonly phaseTitle: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly phases: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly index: Schema.Int;
        readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>>;
    readonly attempt: Schema.optional<Schema.Int>;
    readonly runHandles: Schema.optional<Schema.Struct<{
        readonly runId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly scriptPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly transcriptDir: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Only http/https URLs, sanitized by the adapter. */
        readonly sessionUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly outputFile: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly agentPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    /** Provider-synthesized child events belong in Agents, never the parent timeline. */
    readonly timelineBypass: Schema.optional<Schema.Boolean>;
}>;
export type TaskAgentLinkage = typeof TaskAgentLinkage.Type;
declare const TaskStartedPayload: Schema.Struct<{
    readonly taskType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly agentKind: Schema.optional<Schema.Literals<readonly ["agent", "background"]>>;
    readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly role: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly model: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly effort: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly toolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly parentAgentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly workflowName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly agentIndex: Schema.optional<Schema.Int>;
    readonly phaseIndex: Schema.optional<Schema.Int>;
    readonly phaseTitle: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly phases: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly index: Schema.Int;
        readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>>;
    readonly attempt: Schema.optional<Schema.Int>;
    readonly runHandles: Schema.optional<Schema.Struct<{
        readonly runId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly scriptPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly transcriptDir: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Only http/https URLs, sanitized by the adapter. */
        readonly sessionUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly outputFile: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly agentPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    /** Provider-synthesized child events belong in Agents, never the parent timeline. */
    readonly timelineBypass: Schema.optional<Schema.Boolean>;
    readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeTaskId">;
    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type TaskStartedPayload = typeof TaskStartedPayload.Type;
export declare const RuntimeTaskStatus: Schema.Literals<readonly ["pending", "running", "waiting", "idle", "completed", "failed", "cancelled", "interrupted"]>;
export type RuntimeTaskStatus = typeof RuntimeTaskStatus.Type;
declare const TaskProgressPayload: Schema.Struct<{
    readonly taskType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly agentKind: Schema.optional<Schema.Literals<readonly ["agent", "background"]>>;
    readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly role: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly model: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly effort: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly toolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly parentAgentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly workflowName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly agentIndex: Schema.optional<Schema.Int>;
    readonly phaseIndex: Schema.optional<Schema.Int>;
    readonly phaseTitle: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly phases: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly index: Schema.Int;
        readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>>;
    readonly attempt: Schema.optional<Schema.Int>;
    readonly runHandles: Schema.optional<Schema.Struct<{
        readonly runId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly scriptPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly transcriptDir: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Only http/https URLs, sanitized by the adapter. */
        readonly sessionUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly outputFile: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly agentPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    /** Provider-synthesized child events belong in Agents, never the parent timeline. */
    readonly timelineBypass: Schema.optional<Schema.Boolean>;
    readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeTaskId">;
    readonly description: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly summary: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly usage: Schema.optional<Schema.Unknown>;
    readonly typedUsage: Schema.optional<Schema.Struct<{
        readonly totalTokens: Schema.Int;
        readonly inputTokens: Schema.optional<Schema.Int>;
        readonly cachedInputTokens: Schema.optional<Schema.Int>;
        readonly outputTokens: Schema.optional<Schema.Int>;
        readonly reasoningOutputTokens: Schema.optional<Schema.Int>;
        readonly toolUses: Schema.optional<Schema.Int>;
        readonly durationMs: Schema.optional<Schema.Int>;
    }>>;
    readonly lastToolName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly status: Schema.optional<Schema.Literals<readonly ["pending", "running", "waiting", "idle", "completed", "failed", "cancelled", "interrupted"]>>;
    readonly error: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type TaskProgressPayload = typeof TaskProgressPayload.Type;
declare const TaskUpdatedPayload: Schema.Struct<{
    readonly taskType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly agentKind: Schema.optional<Schema.Literals<readonly ["agent", "background"]>>;
    readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly role: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly model: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly effort: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly toolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly parentAgentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly workflowName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly agentIndex: Schema.optional<Schema.Int>;
    readonly phaseIndex: Schema.optional<Schema.Int>;
    readonly phaseTitle: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly phases: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly index: Schema.Int;
        readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>>;
    readonly attempt: Schema.optional<Schema.Int>;
    readonly runHandles: Schema.optional<Schema.Struct<{
        readonly runId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly scriptPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly transcriptDir: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Only http/https URLs, sanitized by the adapter. */
        readonly sessionUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly outputFile: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly agentPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    /** Provider-synthesized child events belong in Agents, never the parent timeline. */
    readonly timelineBypass: Schema.optional<Schema.Boolean>;
    readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeTaskId">;
    readonly status: Schema.optional<Schema.Literals<readonly ["pending", "running", "waiting", "idle", "completed", "failed", "cancelled", "interrupted"]>>;
    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly error: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly endedAt: Schema.optional<Schema.String>;
    readonly isBackgrounded: Schema.optional<Schema.Boolean>;
}>;
export type TaskUpdatedPayload = typeof TaskUpdatedPayload.Type;
declare const TaskCompletedPayload: Schema.Struct<{
    readonly taskType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly agentKind: Schema.optional<Schema.Literals<readonly ["agent", "background"]>>;
    readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly role: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly model: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly effort: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly toolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly parentAgentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly workflowName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly agentIndex: Schema.optional<Schema.Int>;
    readonly phaseIndex: Schema.optional<Schema.Int>;
    readonly phaseTitle: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly phases: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly index: Schema.Int;
        readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>>;
    readonly attempt: Schema.optional<Schema.Int>;
    readonly runHandles: Schema.optional<Schema.Struct<{
        readonly runId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly scriptPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly transcriptDir: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Only http/https URLs, sanitized by the adapter. */
        readonly sessionUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly outputFile: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly agentPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    /** Provider-synthesized child events belong in Agents, never the parent timeline. */
    readonly timelineBypass: Schema.optional<Schema.Boolean>;
    readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeTaskId">;
    readonly status: Schema.Literals<readonly ["completed", "failed", "stopped"]>;
    readonly summary: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly usage: Schema.optional<Schema.Unknown>;
    readonly typedUsage: Schema.optional<Schema.Struct<{
        readonly totalTokens: Schema.Int;
        readonly inputTokens: Schema.optional<Schema.Int>;
        readonly cachedInputTokens: Schema.optional<Schema.Int>;
        readonly outputTokens: Schema.optional<Schema.Int>;
        readonly reasoningOutputTokens: Schema.optional<Schema.Int>;
        readonly toolUses: Schema.optional<Schema.Int>;
        readonly durationMs: Schema.optional<Schema.Int>;
    }>>;
}>;
export type TaskCompletedPayload = typeof TaskCompletedPayload.Type;
declare const HookStartedPayload: Schema.Struct<{
    readonly hookId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly hookName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly hookEvent: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type HookStartedPayload = typeof HookStartedPayload.Type;
declare const HookProgressPayload: Schema.Struct<{
    readonly hookId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly output: Schema.optional<Schema.String>;
    readonly stdout: Schema.optional<Schema.String>;
    readonly stderr: Schema.optional<Schema.String>;
}>;
export type HookProgressPayload = typeof HookProgressPayload.Type;
declare const HookCompletedPayload: Schema.Struct<{
    readonly hookId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly outcome: Schema.Literals<readonly ["success", "error", "cancelled"]>;
    readonly output: Schema.optional<Schema.String>;
    readonly stdout: Schema.optional<Schema.String>;
    readonly stderr: Schema.optional<Schema.String>;
    readonly exitCode: Schema.optional<Schema.Int>;
}>;
export type HookCompletedPayload = typeof HookCompletedPayload.Type;
declare const ToolProgressPayload: Schema.Struct<{
    readonly toolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly toolName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly summary: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly elapsedSeconds: Schema.optional<Schema.Number>;
    readonly taskId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeTaskId">>;
    readonly parentToolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type ToolProgressPayload = typeof ToolProgressPayload.Type;
declare const ToolSummaryPayload: Schema.Struct<{
    readonly summary: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly precedingToolUseIds: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
}>;
export type ToolSummaryPayload = typeof ToolSummaryPayload.Type;
declare const AuthStatusPayload: Schema.Struct<{
    readonly isAuthenticating: Schema.optional<Schema.Boolean>;
    readonly output: Schema.optional<Schema.$Array<Schema.String>>;
    readonly error: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type AuthStatusPayload = typeof AuthStatusPayload.Type;
declare const AccountUpdatedPayload: Schema.Struct<{
    readonly account: Schema.Unknown;
}>;
export type AccountUpdatedPayload = typeof AccountUpdatedPayload.Type;
declare const AccountRateLimitsUpdatedPayload: Schema.Struct<{
    readonly limits: Schema.Struct<{
        readonly windows: Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly kind: Schema.Literals<readonly ["session", "weekly", "monthly", "other"]>;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly usedPercent: Schema.Number;
            readonly resetsAt: Schema.optional<Schema.String>;
            readonly windowDurationMins: Schema.optional<Schema.Int>;
        }>>;
    }>;
}>;
export type AccountRateLimitsUpdatedPayload = typeof AccountRateLimitsUpdatedPayload.Type;
declare const McpStatusUpdatedPayload: Schema.Struct<{
    readonly status: Schema.Unknown;
}>;
export type McpStatusUpdatedPayload = typeof McpStatusUpdatedPayload.Type;
declare const McpOauthCompletedPayload: Schema.Struct<{
    readonly success: Schema.Boolean;
    readonly name: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly error: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type McpOauthCompletedPayload = typeof McpOauthCompletedPayload.Type;
declare const ModelReroutedPayload: Schema.Struct<{
    readonly fromModel: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly toModel: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly reason: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type ModelReroutedPayload = typeof ModelReroutedPayload.Type;
declare const ConfigWarningPayload: Schema.Struct<{
    readonly summary: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly details: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly path: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly range: Schema.optional<Schema.Unknown>;
}>;
export type ConfigWarningPayload = typeof ConfigWarningPayload.Type;
declare const DeprecationNoticePayload: Schema.Struct<{
    readonly summary: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly details: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type DeprecationNoticePayload = typeof DeprecationNoticePayload.Type;
declare const FilesPersistedPayload: Schema.Struct<{
    readonly files: Schema.$Array<Schema.Struct<{
        readonly filename: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly fileId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
    readonly failed: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly filename: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly error: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>>;
}>;
export type FilesPersistedPayload = typeof FilesPersistedPayload.Type;
declare const ToolDeniedPayload: Schema.Struct<{
    readonly toolName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly toolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly reason: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type ToolDeniedPayload = typeof ToolDeniedPayload.Type;
declare const RuntimeWarningPayload: Schema.Struct<{
    readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly detail: Schema.optional<Schema.Unknown>;
}>;
export type RuntimeWarningPayload = typeof RuntimeWarningPayload.Type;
declare const RuntimeErrorPayload: Schema.Struct<{
    readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly code: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly class: Schema.optional<Schema.Literals<readonly ["provider_error", "transport_error", "permission_error", "validation_error", "unknown"]>>;
    readonly detail: Schema.optional<Schema.Unknown>;
}>;
export type RuntimeErrorPayload = typeof RuntimeErrorPayload.Type;
declare const ProviderRuntimeSessionStartedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"session.started">;
    readonly payload: Schema.Struct<{
        readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly resume: Schema.optional<Schema.Unknown>;
    }>;
}>;
export type ProviderRuntimeSessionStartedEvent = typeof ProviderRuntimeSessionStartedEvent.Type;
declare const ProviderRuntimeSessionConfiguredEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"session.configured">;
    readonly payload: Schema.Struct<{
        readonly config: Schema.$Record<Schema.String, Schema.Unknown>;
    }>;
}>;
export type ProviderRuntimeSessionConfiguredEvent = typeof ProviderRuntimeSessionConfiguredEvent.Type;
declare const ProviderRuntimeSessionStateChangedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"session.state.changed">;
    readonly payload: Schema.Struct<{
        readonly state: Schema.Literals<readonly ["starting", "ready", "running", "waiting", "stopped", "error"]>;
        readonly reason: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly detail: Schema.optional<Schema.Unknown>;
    }>;
}>;
export type ProviderRuntimeSessionStateChangedEvent = typeof ProviderRuntimeSessionStateChangedEvent.Type;
declare const ProviderRuntimeSessionExitedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"session.exited">;
    readonly payload: Schema.Struct<{
        readonly reason: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly recoverable: Schema.optional<Schema.Boolean>;
        readonly exitKind: Schema.optional<Schema.Literals<readonly ["graceful", "error"]>>;
    }>;
}>;
export type ProviderRuntimeSessionExitedEvent = typeof ProviderRuntimeSessionExitedEvent.Type;
declare const ProviderRuntimeThreadStartedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"thread.started">;
    readonly payload: Schema.Struct<{
        readonly providerThreadId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>;
export type ProviderRuntimeThreadStartedEvent = typeof ProviderRuntimeThreadStartedEvent.Type;
declare const ProviderRuntimeThreadStateChangedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"thread.state.changed">;
    readonly payload: Schema.Struct<{
        readonly state: Schema.Literals<readonly ["active", "idle", "archived", "closed", "compacted", "error"]>;
        readonly beforeTokens: Schema.optional<Schema.Int>;
        readonly afterTokens: Schema.optional<Schema.Int>;
        readonly detail: Schema.optional<Schema.Unknown>;
    }>;
}>;
export type ProviderRuntimeThreadStateChangedEvent = typeof ProviderRuntimeThreadStateChangedEvent.Type;
declare const ProviderRuntimeThreadMetadataUpdatedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"thread.metadata.updated">;
    readonly payload: Schema.Struct<{
        readonly name: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly metadata: Schema.optional<Schema.$Record<Schema.String, Schema.Unknown>>;
    }>;
}>;
export type ProviderRuntimeThreadMetadataUpdatedEvent = typeof ProviderRuntimeThreadMetadataUpdatedEvent.Type;
declare const ProviderRuntimeThreadTokenUsageUpdatedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"thread.token-usage.updated">;
    readonly payload: Schema.Struct<{
        readonly usage: Schema.Struct<{
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
        }>;
    }>;
}>;
export type ProviderRuntimeThreadTokenUsageUpdatedEvent = typeof ProviderRuntimeThreadTokenUsageUpdatedEvent.Type;
declare const ProviderRuntimeThreadRealtimeStartedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"thread.realtime.started">;
    readonly payload: Schema.Struct<{
        readonly realtimeSessionId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>;
export type ProviderRuntimeThreadRealtimeStartedEvent = typeof ProviderRuntimeThreadRealtimeStartedEvent.Type;
declare const ProviderRuntimeThreadRealtimeItemAddedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"thread.realtime.item-added">;
    readonly payload: Schema.Struct<{
        readonly item: Schema.Unknown;
    }>;
}>;
export type ProviderRuntimeThreadRealtimeItemAddedEvent = typeof ProviderRuntimeThreadRealtimeItemAddedEvent.Type;
declare const ProviderRuntimeThreadRealtimeAudioDeltaEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"thread.realtime.audio.delta">;
    readonly payload: Schema.Struct<{
        readonly audio: Schema.Unknown;
    }>;
}>;
export type ProviderRuntimeThreadRealtimeAudioDeltaEvent = typeof ProviderRuntimeThreadRealtimeAudioDeltaEvent.Type;
declare const ProviderRuntimeThreadRealtimeErrorEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"thread.realtime.error">;
    readonly payload: Schema.Struct<{
        readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>;
}>;
export type ProviderRuntimeThreadRealtimeErrorEvent = typeof ProviderRuntimeThreadRealtimeErrorEvent.Type;
declare const ProviderRuntimeThreadRealtimeClosedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"thread.realtime.closed">;
    readonly payload: Schema.Struct<{
        readonly reason: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>;
export type ProviderRuntimeThreadRealtimeClosedEvent = typeof ProviderRuntimeThreadRealtimeClosedEvent.Type;
declare const ProviderRuntimeTurnStartedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"turn.started">;
    readonly payload: Schema.Struct<{
        readonly model: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly effort: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>;
export type ProviderRuntimeTurnStartedEvent = typeof ProviderRuntimeTurnStartedEvent.Type;
declare const ProviderRuntimeTurnCompletedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"turn.completed">;
    readonly payload: Schema.Struct<{
        readonly state: Schema.Literals<readonly ["completed", "failed", "interrupted", "cancelled"]>;
        readonly stopReason: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        readonly usage: Schema.optional<Schema.Unknown>;
        readonly modelUsage: Schema.optional<Schema.$Record<Schema.String, Schema.Unknown>>;
        readonly totalCostUsd: Schema.optional<Schema.Number>;
        readonly errorMessage: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly tokenUsage: Schema.optional<Schema.Union<readonly [Schema.Struct<{
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
}>;
export type ProviderRuntimeTurnCompletedEvent = typeof ProviderRuntimeTurnCompletedEvent.Type;
declare const ProviderRuntimeTurnAbortedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"turn.aborted">;
    readonly payload: Schema.Struct<{
        readonly reason: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly tokenUsage: Schema.optional<Schema.Union<readonly [Schema.Struct<{
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
}>;
export type ProviderRuntimeTurnAbortedEvent = typeof ProviderRuntimeTurnAbortedEvent.Type;
declare const ProviderRuntimeTurnPlanUpdatedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"turn.plan.updated">;
    readonly payload: Schema.Struct<{
        readonly explanation: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        readonly plan: Schema.$Array<Schema.Struct<{
            readonly step: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly status: Schema.Literals<readonly ["pending", "inProgress", "completed"]>;
        }>>;
    }>;
}>;
export type ProviderRuntimeTurnPlanUpdatedEvent = typeof ProviderRuntimeTurnPlanUpdatedEvent.Type;
declare const ProviderRuntimeTurnProposedDeltaEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"turn.proposed.delta">;
    readonly payload: Schema.Struct<{
        readonly delta: Schema.String;
    }>;
}>;
export type ProviderRuntimeTurnProposedDeltaEvent = typeof ProviderRuntimeTurnProposedDeltaEvent.Type;
declare const ProviderRuntimeTurnProposedCompletedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"turn.proposed.completed">;
    readonly payload: Schema.Struct<{
        readonly planMarkdown: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>;
}>;
export type ProviderRuntimeTurnProposedCompletedEvent = typeof ProviderRuntimeTurnProposedCompletedEvent.Type;
declare const ProviderRuntimeTurnDiffUpdatedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"turn.diff.updated">;
    readonly payload: Schema.Struct<{
        readonly unifiedDiff: Schema.String;
    }>;
}>;
export type ProviderRuntimeTurnDiffUpdatedEvent = typeof ProviderRuntimeTurnDiffUpdatedEvent.Type;
declare const ProviderRuntimeItemStartedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"item.started">;
    readonly payload: Schema.Struct<{
        readonly itemType: Schema.Literals<readonly ["user_message", "assistant_message", "reasoning", "plan", "command_execution", "file_change", "mcp_tool_call", "dynamic_tool_call", "collab_agent_tool_call", "web_search", "image_view", "review_entered", "review_exited", "context_compaction", "error", "unknown"]>;
        readonly status: Schema.optional<Schema.Literals<readonly ["inProgress", "completed", "failed", "declined"]>>;
        readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly detail: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
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
        readonly data: Schema.optional<Schema.Unknown>;
        readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly parentToolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>;
export type ProviderRuntimeItemStartedEvent = typeof ProviderRuntimeItemStartedEvent.Type;
declare const ProviderRuntimeItemUpdatedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"item.updated">;
    readonly payload: Schema.Struct<{
        readonly itemType: Schema.Literals<readonly ["user_message", "assistant_message", "reasoning", "plan", "command_execution", "file_change", "mcp_tool_call", "dynamic_tool_call", "collab_agent_tool_call", "web_search", "image_view", "review_entered", "review_exited", "context_compaction", "error", "unknown"]>;
        readonly status: Schema.optional<Schema.Literals<readonly ["inProgress", "completed", "failed", "declined"]>>;
        readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly detail: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
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
        readonly data: Schema.optional<Schema.Unknown>;
        readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly parentToolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>;
export type ProviderRuntimeItemUpdatedEvent = typeof ProviderRuntimeItemUpdatedEvent.Type;
declare const ProviderRuntimeItemCompletedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"item.completed">;
    readonly payload: Schema.Struct<{
        readonly itemType: Schema.Literals<readonly ["user_message", "assistant_message", "reasoning", "plan", "command_execution", "file_change", "mcp_tool_call", "dynamic_tool_call", "collab_agent_tool_call", "web_search", "image_view", "review_entered", "review_exited", "context_compaction", "error", "unknown"]>;
        readonly status: Schema.optional<Schema.Literals<readonly ["inProgress", "completed", "failed", "declined"]>>;
        readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly detail: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
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
        readonly data: Schema.optional<Schema.Unknown>;
        readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly parentToolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>;
export type ProviderRuntimeItemCompletedEvent = typeof ProviderRuntimeItemCompletedEvent.Type;
declare const ProviderRuntimeContentDeltaEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"content.delta">;
    readonly payload: Schema.Struct<{
        readonly streamKind: Schema.Literals<readonly ["assistant_text", "reasoning_text", "reasoning_summary_text", "plan_text", "command_output", "file_change_output", "unknown"]>;
        readonly delta: Schema.String;
        readonly contentIndex: Schema.optional<Schema.Int>;
        readonly summaryIndex: Schema.optional<Schema.Int>;
    }>;
}>;
export type ProviderRuntimeContentDeltaEvent = typeof ProviderRuntimeContentDeltaEvent.Type;
declare const ProviderRuntimeRequestOpenedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"request.opened">;
    readonly payload: Schema.Struct<{
        readonly requestType: Schema.Literals<readonly ["command_execution_approval", "file_read_approval", "file_change_approval", "apply_patch_approval", "exec_command_approval", "mcp_elicitation_approval", "permission_approval", "tool_user_input", "dynamic_tool_call", "auth_tokens_refresh", "unknown"]>;
        readonly detail: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly appName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly options: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly decision: Schema.Literals<readonly ["accept", "acceptForSession", "acceptAlways", "decline", "cancel"]>;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly warning: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>>;
        readonly args: Schema.optional<Schema.Unknown>;
    }>;
}>;
export type ProviderRuntimeRequestOpenedEvent = typeof ProviderRuntimeRequestOpenedEvent.Type;
declare const ProviderRuntimeRequestResolvedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"request.resolved">;
    readonly payload: Schema.Struct<{
        readonly requestType: Schema.Literals<readonly ["command_execution_approval", "file_read_approval", "file_change_approval", "apply_patch_approval", "exec_command_approval", "mcp_elicitation_approval", "permission_approval", "tool_user_input", "dynamic_tool_call", "auth_tokens_refresh", "unknown"]>;
        readonly decision: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly resolution: Schema.optional<Schema.Unknown>;
    }>;
}>;
export type ProviderRuntimeRequestResolvedEvent = typeof ProviderRuntimeRequestResolvedEvent.Type;
declare const ProviderRuntimeUserInputRequestedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"user-input.requested">;
    readonly payload: Schema.Struct<{
        readonly questions: Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly header: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly question: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly options: Schema.$Array<Schema.Struct<{
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.String;
                readonly value: Schema.optional<Schema.String>;
            }>>;
            readonly allowCustomAnswer: Schema.optional<Schema.Boolean>;
            readonly initialAnswer: Schema.optional<Schema.String>;
            readonly multiSelect: Schema.withConstructorDefault<Schema.optional<Schema.Boolean>>;
        }>>;
        readonly responseMode: Schema.optional<Schema.Literal<"message">>;
    }>;
}>;
export type ProviderRuntimeUserInputRequestedEvent = typeof ProviderRuntimeUserInputRequestedEvent.Type;
declare const ProviderRuntimeUserInputResolvedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"user-input.resolved">;
    readonly payload: Schema.Struct<{
        readonly answers: Schema.$Record<Schema.String, Schema.Unknown>;
    }>;
}>;
export type ProviderRuntimeUserInputResolvedEvent = typeof ProviderRuntimeUserInputResolvedEvent.Type;
declare const ProviderRuntimeTaskStartedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"task.started">;
    readonly payload: Schema.Struct<{
        readonly taskType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentKind: Schema.optional<Schema.Literals<readonly ["agent", "background"]>>;
        readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly role: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly model: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly effort: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly toolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly parentAgentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly workflowName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentIndex: Schema.optional<Schema.Int>;
        readonly phaseIndex: Schema.optional<Schema.Int>;
        readonly phaseTitle: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly phases: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly index: Schema.Int;
            readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>>;
        readonly attempt: Schema.optional<Schema.Int>;
        readonly runHandles: Schema.optional<Schema.Struct<{
            readonly runId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly scriptPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly transcriptDir: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            /** Only http/https URLs, sanitized by the adapter. */
            readonly sessionUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
        readonly outputFile: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Provider-synthesized child events belong in Agents, never the parent timeline. */
        readonly timelineBypass: Schema.optional<Schema.Boolean>;
        readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeTaskId">;
        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>;
export type ProviderRuntimeTaskStartedEvent = typeof ProviderRuntimeTaskStartedEvent.Type;
declare const ProviderRuntimeTaskProgressEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"task.progress">;
    readonly payload: Schema.Struct<{
        readonly taskType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentKind: Schema.optional<Schema.Literals<readonly ["agent", "background"]>>;
        readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly role: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly model: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly effort: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly toolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly parentAgentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly workflowName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentIndex: Schema.optional<Schema.Int>;
        readonly phaseIndex: Schema.optional<Schema.Int>;
        readonly phaseTitle: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly phases: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly index: Schema.Int;
            readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>>;
        readonly attempt: Schema.optional<Schema.Int>;
        readonly runHandles: Schema.optional<Schema.Struct<{
            readonly runId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly scriptPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly transcriptDir: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            /** Only http/https URLs, sanitized by the adapter. */
            readonly sessionUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
        readonly outputFile: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Provider-synthesized child events belong in Agents, never the parent timeline. */
        readonly timelineBypass: Schema.optional<Schema.Boolean>;
        readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeTaskId">;
        readonly description: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly summary: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly usage: Schema.optional<Schema.Unknown>;
        readonly typedUsage: Schema.optional<Schema.Struct<{
            readonly totalTokens: Schema.Int;
            readonly inputTokens: Schema.optional<Schema.Int>;
            readonly cachedInputTokens: Schema.optional<Schema.Int>;
            readonly outputTokens: Schema.optional<Schema.Int>;
            readonly reasoningOutputTokens: Schema.optional<Schema.Int>;
            readonly toolUses: Schema.optional<Schema.Int>;
            readonly durationMs: Schema.optional<Schema.Int>;
        }>>;
        readonly lastToolName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly status: Schema.optional<Schema.Literals<readonly ["pending", "running", "waiting", "idle", "completed", "failed", "cancelled", "interrupted"]>>;
        readonly error: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>;
export type ProviderRuntimeTaskProgressEvent = typeof ProviderRuntimeTaskProgressEvent.Type;
declare const ProviderRuntimeTaskUpdatedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"task.updated">;
    readonly payload: Schema.Struct<{
        readonly taskType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentKind: Schema.optional<Schema.Literals<readonly ["agent", "background"]>>;
        readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly role: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly model: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly effort: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly toolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly parentAgentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly workflowName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentIndex: Schema.optional<Schema.Int>;
        readonly phaseIndex: Schema.optional<Schema.Int>;
        readonly phaseTitle: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly phases: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly index: Schema.Int;
            readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>>;
        readonly attempt: Schema.optional<Schema.Int>;
        readonly runHandles: Schema.optional<Schema.Struct<{
            readonly runId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly scriptPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly transcriptDir: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            /** Only http/https URLs, sanitized by the adapter. */
            readonly sessionUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
        readonly outputFile: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Provider-synthesized child events belong in Agents, never the parent timeline. */
        readonly timelineBypass: Schema.optional<Schema.Boolean>;
        readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeTaskId">;
        readonly status: Schema.optional<Schema.Literals<readonly ["pending", "running", "waiting", "idle", "completed", "failed", "cancelled", "interrupted"]>>;
        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly error: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly endedAt: Schema.optional<Schema.String>;
        readonly isBackgrounded: Schema.optional<Schema.Boolean>;
    }>;
}>;
export type ProviderRuntimeTaskUpdatedEvent = typeof ProviderRuntimeTaskUpdatedEvent.Type;
declare const ProviderRuntimeTaskCompletedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"task.completed">;
    readonly payload: Schema.Struct<{
        readonly taskType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentKind: Schema.optional<Schema.Literals<readonly ["agent", "background"]>>;
        readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly role: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly model: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly effort: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly toolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly parentAgentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly workflowName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentIndex: Schema.optional<Schema.Int>;
        readonly phaseIndex: Schema.optional<Schema.Int>;
        readonly phaseTitle: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly phases: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly index: Schema.Int;
            readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>>;
        readonly attempt: Schema.optional<Schema.Int>;
        readonly runHandles: Schema.optional<Schema.Struct<{
            readonly runId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly scriptPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly transcriptDir: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            /** Only http/https URLs, sanitized by the adapter. */
            readonly sessionUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
        readonly outputFile: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Provider-synthesized child events belong in Agents, never the parent timeline. */
        readonly timelineBypass: Schema.optional<Schema.Boolean>;
        readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeTaskId">;
        readonly status: Schema.Literals<readonly ["completed", "failed", "stopped"]>;
        readonly summary: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly usage: Schema.optional<Schema.Unknown>;
        readonly typedUsage: Schema.optional<Schema.Struct<{
            readonly totalTokens: Schema.Int;
            readonly inputTokens: Schema.optional<Schema.Int>;
            readonly cachedInputTokens: Schema.optional<Schema.Int>;
            readonly outputTokens: Schema.optional<Schema.Int>;
            readonly reasoningOutputTokens: Schema.optional<Schema.Int>;
            readonly toolUses: Schema.optional<Schema.Int>;
            readonly durationMs: Schema.optional<Schema.Int>;
        }>>;
    }>;
}>;
export type ProviderRuntimeTaskCompletedEvent = typeof ProviderRuntimeTaskCompletedEvent.Type;
declare const ProviderRuntimeHookStartedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"hook.started">;
    readonly payload: Schema.Struct<{
        readonly hookId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly hookName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly hookEvent: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>;
}>;
export type ProviderRuntimeHookStartedEvent = typeof ProviderRuntimeHookStartedEvent.Type;
declare const ProviderRuntimeHookProgressEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"hook.progress">;
    readonly payload: Schema.Struct<{
        readonly hookId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly output: Schema.optional<Schema.String>;
        readonly stdout: Schema.optional<Schema.String>;
        readonly stderr: Schema.optional<Schema.String>;
    }>;
}>;
export type ProviderRuntimeHookProgressEvent = typeof ProviderRuntimeHookProgressEvent.Type;
declare const ProviderRuntimeHookCompletedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"hook.completed">;
    readonly payload: Schema.Struct<{
        readonly hookId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly outcome: Schema.Literals<readonly ["success", "error", "cancelled"]>;
        readonly output: Schema.optional<Schema.String>;
        readonly stdout: Schema.optional<Schema.String>;
        readonly stderr: Schema.optional<Schema.String>;
        readonly exitCode: Schema.optional<Schema.Int>;
    }>;
}>;
export type ProviderRuntimeHookCompletedEvent = typeof ProviderRuntimeHookCompletedEvent.Type;
declare const ProviderRuntimeToolProgressEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"tool.progress">;
    readonly payload: Schema.Struct<{
        readonly toolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly toolName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly summary: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly elapsedSeconds: Schema.optional<Schema.Number>;
        readonly taskId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeTaskId">>;
        readonly parentToolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>;
export type ProviderRuntimeToolProgressEvent = typeof ProviderRuntimeToolProgressEvent.Type;
declare const ProviderRuntimeToolSummaryEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"tool.summary">;
    readonly payload: Schema.Struct<{
        readonly summary: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly precedingToolUseIds: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    }>;
}>;
export type ProviderRuntimeToolSummaryEvent = typeof ProviderRuntimeToolSummaryEvent.Type;
declare const ProviderRuntimeAuthStatusEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"auth.status">;
    readonly payload: Schema.Struct<{
        readonly isAuthenticating: Schema.optional<Schema.Boolean>;
        readonly output: Schema.optional<Schema.$Array<Schema.String>>;
        readonly error: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>;
export type ProviderRuntimeAuthStatusEvent = typeof ProviderRuntimeAuthStatusEvent.Type;
declare const ProviderRuntimeAccountUpdatedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"account.updated">;
    readonly payload: Schema.Struct<{
        readonly account: Schema.Unknown;
    }>;
}>;
export type ProviderRuntimeAccountUpdatedEvent = typeof ProviderRuntimeAccountUpdatedEvent.Type;
declare const ProviderRuntimeAccountRateLimitsUpdatedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"account.rate-limits.updated">;
    readonly payload: Schema.Struct<{
        readonly limits: Schema.Struct<{
            readonly windows: Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly kind: Schema.Literals<readonly ["session", "weekly", "monthly", "other"]>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly usedPercent: Schema.Number;
                readonly resetsAt: Schema.optional<Schema.String>;
                readonly windowDurationMins: Schema.optional<Schema.Int>;
            }>>;
        }>;
    }>;
}>;
export type ProviderRuntimeAccountRateLimitsUpdatedEvent = typeof ProviderRuntimeAccountRateLimitsUpdatedEvent.Type;
declare const ProviderRuntimeMcpStatusUpdatedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"mcp.status.updated">;
    readonly payload: Schema.Struct<{
        readonly status: Schema.Unknown;
    }>;
}>;
export type ProviderRuntimeMcpStatusUpdatedEvent = typeof ProviderRuntimeMcpStatusUpdatedEvent.Type;
declare const ProviderRuntimeMcpOauthCompletedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"mcp.oauth.completed">;
    readonly payload: Schema.Struct<{
        readonly success: Schema.Boolean;
        readonly name: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly error: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>;
export type ProviderRuntimeMcpOauthCompletedEvent = typeof ProviderRuntimeMcpOauthCompletedEvent.Type;
declare const ProviderRuntimeModelReroutedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"model.rerouted">;
    readonly payload: Schema.Struct<{
        readonly fromModel: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly toModel: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly reason: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>;
}>;
export type ProviderRuntimeModelReroutedEvent = typeof ProviderRuntimeModelReroutedEvent.Type;
declare const ProviderRuntimeConfigWarningEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"config.warning">;
    readonly payload: Schema.Struct<{
        readonly summary: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly details: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly path: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly range: Schema.optional<Schema.Unknown>;
    }>;
}>;
export type ProviderRuntimeConfigWarningEvent = typeof ProviderRuntimeConfigWarningEvent.Type;
declare const ProviderRuntimeDeprecationNoticeEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"deprecation.notice">;
    readonly payload: Schema.Struct<{
        readonly summary: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly details: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>;
export type ProviderRuntimeDeprecationNoticeEvent = typeof ProviderRuntimeDeprecationNoticeEvent.Type;
declare const ProviderRuntimeFilesPersistedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"files.persisted">;
    readonly payload: Schema.Struct<{
        readonly files: Schema.$Array<Schema.Struct<{
            readonly filename: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly fileId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>;
        readonly failed: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly filename: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly error: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>>;
    }>;
}>;
export type ProviderRuntimeFilesPersistedEvent = typeof ProviderRuntimeFilesPersistedEvent.Type;
declare const ProviderRuntimeToolDeniedEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"tool.denied">;
    readonly payload: Schema.Struct<{
        readonly toolName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly toolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly reason: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>;
export type ProviderRuntimeToolDeniedEvent = typeof ProviderRuntimeToolDeniedEvent.Type;
declare const ProviderRuntimeWarningEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"runtime.warning">;
    readonly payload: Schema.Struct<{
        readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly detail: Schema.optional<Schema.Unknown>;
    }>;
}>;
export type ProviderRuntimeWarningEvent = typeof ProviderRuntimeWarningEvent.Type;
declare const ProviderRuntimeErrorEvent: Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"runtime.error">;
    readonly payload: Schema.Struct<{
        readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly code: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly class: Schema.optional<Schema.Literals<readonly ["provider_error", "transport_error", "permission_error", "validation_error", "unknown"]>>;
        readonly detail: Schema.optional<Schema.Unknown>;
    }>;
}>;
export type ProviderRuntimeErrorEvent = typeof ProviderRuntimeErrorEvent.Type;
export declare const ProviderRuntimeEventV2: Schema.Union<readonly [Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"session.started">;
    readonly payload: Schema.Struct<{
        readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly resume: Schema.optional<Schema.Unknown>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"session.configured">;
    readonly payload: Schema.Struct<{
        readonly config: Schema.$Record<Schema.String, Schema.Unknown>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"session.state.changed">;
    readonly payload: Schema.Struct<{
        readonly state: Schema.Literals<readonly ["starting", "ready", "running", "waiting", "stopped", "error"]>;
        readonly reason: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly detail: Schema.optional<Schema.Unknown>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"session.exited">;
    readonly payload: Schema.Struct<{
        readonly reason: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly recoverable: Schema.optional<Schema.Boolean>;
        readonly exitKind: Schema.optional<Schema.Literals<readonly ["graceful", "error"]>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"thread.started">;
    readonly payload: Schema.Struct<{
        readonly providerThreadId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"thread.state.changed">;
    readonly payload: Schema.Struct<{
        readonly state: Schema.Literals<readonly ["active", "idle", "archived", "closed", "compacted", "error"]>;
        readonly beforeTokens: Schema.optional<Schema.Int>;
        readonly afterTokens: Schema.optional<Schema.Int>;
        readonly detail: Schema.optional<Schema.Unknown>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"thread.metadata.updated">;
    readonly payload: Schema.Struct<{
        readonly name: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly metadata: Schema.optional<Schema.$Record<Schema.String, Schema.Unknown>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"thread.token-usage.updated">;
    readonly payload: Schema.Struct<{
        readonly usage: Schema.Struct<{
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
        }>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"thread.realtime.started">;
    readonly payload: Schema.Struct<{
        readonly realtimeSessionId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"thread.realtime.item-added">;
    readonly payload: Schema.Struct<{
        readonly item: Schema.Unknown;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"thread.realtime.audio.delta">;
    readonly payload: Schema.Struct<{
        readonly audio: Schema.Unknown;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"thread.realtime.error">;
    readonly payload: Schema.Struct<{
        readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"thread.realtime.closed">;
    readonly payload: Schema.Struct<{
        readonly reason: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"turn.started">;
    readonly payload: Schema.Struct<{
        readonly model: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly effort: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"turn.completed">;
    readonly payload: Schema.Struct<{
        readonly state: Schema.Literals<readonly ["completed", "failed", "interrupted", "cancelled"]>;
        readonly stopReason: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        readonly usage: Schema.optional<Schema.Unknown>;
        readonly modelUsage: Schema.optional<Schema.$Record<Schema.String, Schema.Unknown>>;
        readonly totalCostUsd: Schema.optional<Schema.Number>;
        readonly errorMessage: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly tokenUsage: Schema.optional<Schema.Union<readonly [Schema.Struct<{
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
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"turn.aborted">;
    readonly payload: Schema.Struct<{
        readonly reason: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly tokenUsage: Schema.optional<Schema.Union<readonly [Schema.Struct<{
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
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"turn.plan.updated">;
    readonly payload: Schema.Struct<{
        readonly explanation: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        readonly plan: Schema.$Array<Schema.Struct<{
            readonly step: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly status: Schema.Literals<readonly ["pending", "inProgress", "completed"]>;
        }>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"turn.proposed.delta">;
    readonly payload: Schema.Struct<{
        readonly delta: Schema.String;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"turn.proposed.completed">;
    readonly payload: Schema.Struct<{
        readonly planMarkdown: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"turn.diff.updated">;
    readonly payload: Schema.Struct<{
        readonly unifiedDiff: Schema.String;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"item.started">;
    readonly payload: Schema.Struct<{
        readonly itemType: Schema.Literals<readonly ["user_message", "assistant_message", "reasoning", "plan", "command_execution", "file_change", "mcp_tool_call", "dynamic_tool_call", "collab_agent_tool_call", "web_search", "image_view", "review_entered", "review_exited", "context_compaction", "error", "unknown"]>;
        readonly status: Schema.optional<Schema.Literals<readonly ["inProgress", "completed", "failed", "declined"]>>;
        readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly detail: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
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
        readonly data: Schema.optional<Schema.Unknown>;
        readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly parentToolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"item.updated">;
    readonly payload: Schema.Struct<{
        readonly itemType: Schema.Literals<readonly ["user_message", "assistant_message", "reasoning", "plan", "command_execution", "file_change", "mcp_tool_call", "dynamic_tool_call", "collab_agent_tool_call", "web_search", "image_view", "review_entered", "review_exited", "context_compaction", "error", "unknown"]>;
        readonly status: Schema.optional<Schema.Literals<readonly ["inProgress", "completed", "failed", "declined"]>>;
        readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly detail: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
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
        readonly data: Schema.optional<Schema.Unknown>;
        readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly parentToolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"item.completed">;
    readonly payload: Schema.Struct<{
        readonly itemType: Schema.Literals<readonly ["user_message", "assistant_message", "reasoning", "plan", "command_execution", "file_change", "mcp_tool_call", "dynamic_tool_call", "collab_agent_tool_call", "web_search", "image_view", "review_entered", "review_exited", "context_compaction", "error", "unknown"]>;
        readonly status: Schema.optional<Schema.Literals<readonly ["inProgress", "completed", "failed", "declined"]>>;
        readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly detail: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
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
        readonly data: Schema.optional<Schema.Unknown>;
        readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly parentToolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"content.delta">;
    readonly payload: Schema.Struct<{
        readonly streamKind: Schema.Literals<readonly ["assistant_text", "reasoning_text", "reasoning_summary_text", "plan_text", "command_output", "file_change_output", "unknown"]>;
        readonly delta: Schema.String;
        readonly contentIndex: Schema.optional<Schema.Int>;
        readonly summaryIndex: Schema.optional<Schema.Int>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"request.opened">;
    readonly payload: Schema.Struct<{
        readonly requestType: Schema.Literals<readonly ["command_execution_approval", "file_read_approval", "file_change_approval", "apply_patch_approval", "exec_command_approval", "mcp_elicitation_approval", "permission_approval", "tool_user_input", "dynamic_tool_call", "auth_tokens_refresh", "unknown"]>;
        readonly detail: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly appName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly options: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly decision: Schema.Literals<readonly ["accept", "acceptForSession", "acceptAlways", "decline", "cancel"]>;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly warning: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>>;
        readonly args: Schema.optional<Schema.Unknown>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"request.resolved">;
    readonly payload: Schema.Struct<{
        readonly requestType: Schema.Literals<readonly ["command_execution_approval", "file_read_approval", "file_change_approval", "apply_patch_approval", "exec_command_approval", "mcp_elicitation_approval", "permission_approval", "tool_user_input", "dynamic_tool_call", "auth_tokens_refresh", "unknown"]>;
        readonly decision: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly resolution: Schema.optional<Schema.Unknown>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"user-input.requested">;
    readonly payload: Schema.Struct<{
        readonly questions: Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly header: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly question: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly options: Schema.$Array<Schema.Struct<{
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.String;
                readonly value: Schema.optional<Schema.String>;
            }>>;
            readonly allowCustomAnswer: Schema.optional<Schema.Boolean>;
            readonly initialAnswer: Schema.optional<Schema.String>;
            readonly multiSelect: Schema.withConstructorDefault<Schema.optional<Schema.Boolean>>;
        }>>;
        readonly responseMode: Schema.optional<Schema.Literal<"message">>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"user-input.resolved">;
    readonly payload: Schema.Struct<{
        readonly answers: Schema.$Record<Schema.String, Schema.Unknown>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"task.started">;
    readonly payload: Schema.Struct<{
        readonly taskType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentKind: Schema.optional<Schema.Literals<readonly ["agent", "background"]>>;
        readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly role: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly model: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly effort: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly toolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly parentAgentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly workflowName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentIndex: Schema.optional<Schema.Int>;
        readonly phaseIndex: Schema.optional<Schema.Int>;
        readonly phaseTitle: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly phases: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly index: Schema.Int;
            readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>>;
        readonly attempt: Schema.optional<Schema.Int>;
        readonly runHandles: Schema.optional<Schema.Struct<{
            readonly runId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly scriptPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly transcriptDir: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            /** Only http/https URLs, sanitized by the adapter. */
            readonly sessionUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
        readonly outputFile: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Provider-synthesized child events belong in Agents, never the parent timeline. */
        readonly timelineBypass: Schema.optional<Schema.Boolean>;
        readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeTaskId">;
        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"task.progress">;
    readonly payload: Schema.Struct<{
        readonly taskType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentKind: Schema.optional<Schema.Literals<readonly ["agent", "background"]>>;
        readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly role: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly model: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly effort: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly toolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly parentAgentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly workflowName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentIndex: Schema.optional<Schema.Int>;
        readonly phaseIndex: Schema.optional<Schema.Int>;
        readonly phaseTitle: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly phases: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly index: Schema.Int;
            readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>>;
        readonly attempt: Schema.optional<Schema.Int>;
        readonly runHandles: Schema.optional<Schema.Struct<{
            readonly runId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly scriptPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly transcriptDir: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            /** Only http/https URLs, sanitized by the adapter. */
            readonly sessionUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
        readonly outputFile: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Provider-synthesized child events belong in Agents, never the parent timeline. */
        readonly timelineBypass: Schema.optional<Schema.Boolean>;
        readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeTaskId">;
        readonly description: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly summary: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly usage: Schema.optional<Schema.Unknown>;
        readonly typedUsage: Schema.optional<Schema.Struct<{
            readonly totalTokens: Schema.Int;
            readonly inputTokens: Schema.optional<Schema.Int>;
            readonly cachedInputTokens: Schema.optional<Schema.Int>;
            readonly outputTokens: Schema.optional<Schema.Int>;
            readonly reasoningOutputTokens: Schema.optional<Schema.Int>;
            readonly toolUses: Schema.optional<Schema.Int>;
            readonly durationMs: Schema.optional<Schema.Int>;
        }>>;
        readonly lastToolName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly status: Schema.optional<Schema.Literals<readonly ["pending", "running", "waiting", "idle", "completed", "failed", "cancelled", "interrupted"]>>;
        readonly error: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"task.updated">;
    readonly payload: Schema.Struct<{
        readonly taskType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentKind: Schema.optional<Schema.Literals<readonly ["agent", "background"]>>;
        readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly role: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly model: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly effort: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly toolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly parentAgentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly workflowName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentIndex: Schema.optional<Schema.Int>;
        readonly phaseIndex: Schema.optional<Schema.Int>;
        readonly phaseTitle: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly phases: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly index: Schema.Int;
            readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>>;
        readonly attempt: Schema.optional<Schema.Int>;
        readonly runHandles: Schema.optional<Schema.Struct<{
            readonly runId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly scriptPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly transcriptDir: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            /** Only http/https URLs, sanitized by the adapter. */
            readonly sessionUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
        readonly outputFile: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Provider-synthesized child events belong in Agents, never the parent timeline. */
        readonly timelineBypass: Schema.optional<Schema.Boolean>;
        readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeTaskId">;
        readonly status: Schema.optional<Schema.Literals<readonly ["pending", "running", "waiting", "idle", "completed", "failed", "cancelled", "interrupted"]>>;
        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly error: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly endedAt: Schema.optional<Schema.String>;
        readonly isBackgrounded: Schema.optional<Schema.Boolean>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"task.completed">;
    readonly payload: Schema.Struct<{
        readonly taskType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentKind: Schema.optional<Schema.Literals<readonly ["agent", "background"]>>;
        readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly role: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly model: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly effort: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly toolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly parentAgentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly workflowName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentIndex: Schema.optional<Schema.Int>;
        readonly phaseIndex: Schema.optional<Schema.Int>;
        readonly phaseTitle: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly phases: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly index: Schema.Int;
            readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>>;
        readonly attempt: Schema.optional<Schema.Int>;
        readonly runHandles: Schema.optional<Schema.Struct<{
            readonly runId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly scriptPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly transcriptDir: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            /** Only http/https URLs, sanitized by the adapter. */
            readonly sessionUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
        readonly outputFile: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Provider-synthesized child events belong in Agents, never the parent timeline. */
        readonly timelineBypass: Schema.optional<Schema.Boolean>;
        readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeTaskId">;
        readonly status: Schema.Literals<readonly ["completed", "failed", "stopped"]>;
        readonly summary: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly usage: Schema.optional<Schema.Unknown>;
        readonly typedUsage: Schema.optional<Schema.Struct<{
            readonly totalTokens: Schema.Int;
            readonly inputTokens: Schema.optional<Schema.Int>;
            readonly cachedInputTokens: Schema.optional<Schema.Int>;
            readonly outputTokens: Schema.optional<Schema.Int>;
            readonly reasoningOutputTokens: Schema.optional<Schema.Int>;
            readonly toolUses: Schema.optional<Schema.Int>;
            readonly durationMs: Schema.optional<Schema.Int>;
        }>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"hook.started">;
    readonly payload: Schema.Struct<{
        readonly hookId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly hookName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly hookEvent: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"hook.progress">;
    readonly payload: Schema.Struct<{
        readonly hookId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly output: Schema.optional<Schema.String>;
        readonly stdout: Schema.optional<Schema.String>;
        readonly stderr: Schema.optional<Schema.String>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"hook.completed">;
    readonly payload: Schema.Struct<{
        readonly hookId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly outcome: Schema.Literals<readonly ["success", "error", "cancelled"]>;
        readonly output: Schema.optional<Schema.String>;
        readonly stdout: Schema.optional<Schema.String>;
        readonly stderr: Schema.optional<Schema.String>;
        readonly exitCode: Schema.optional<Schema.Int>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"tool.progress">;
    readonly payload: Schema.Struct<{
        readonly toolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly toolName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly summary: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly elapsedSeconds: Schema.optional<Schema.Number>;
        readonly taskId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeTaskId">>;
        readonly parentToolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"tool.summary">;
    readonly payload: Schema.Struct<{
        readonly summary: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly precedingToolUseIds: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"auth.status">;
    readonly payload: Schema.Struct<{
        readonly isAuthenticating: Schema.optional<Schema.Boolean>;
        readonly output: Schema.optional<Schema.$Array<Schema.String>>;
        readonly error: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"account.updated">;
    readonly payload: Schema.Struct<{
        readonly account: Schema.Unknown;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"account.rate-limits.updated">;
    readonly payload: Schema.Struct<{
        readonly limits: Schema.Struct<{
            readonly windows: Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly kind: Schema.Literals<readonly ["session", "weekly", "monthly", "other"]>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly usedPercent: Schema.Number;
                readonly resetsAt: Schema.optional<Schema.String>;
                readonly windowDurationMins: Schema.optional<Schema.Int>;
            }>>;
        }>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"mcp.status.updated">;
    readonly payload: Schema.Struct<{
        readonly status: Schema.Unknown;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"mcp.oauth.completed">;
    readonly payload: Schema.Struct<{
        readonly success: Schema.Boolean;
        readonly name: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly error: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"model.rerouted">;
    readonly payload: Schema.Struct<{
        readonly fromModel: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly toModel: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly reason: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"config.warning">;
    readonly payload: Schema.Struct<{
        readonly summary: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly details: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly path: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly range: Schema.optional<Schema.Unknown>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"deprecation.notice">;
    readonly payload: Schema.Struct<{
        readonly summary: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly details: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"files.persisted">;
    readonly payload: Schema.Struct<{
        readonly files: Schema.$Array<Schema.Struct<{
            readonly filename: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly fileId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>;
        readonly failed: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly filename: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly error: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"tool.denied">;
    readonly payload: Schema.Struct<{
        readonly toolName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly toolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly reason: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"runtime.warning">;
    readonly payload: Schema.Struct<{
        readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly detail: Schema.optional<Schema.Unknown>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"runtime.error">;
    readonly payload: Schema.Struct<{
        readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly code: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly class: Schema.optional<Schema.Literals<readonly ["provider_error", "transport_error", "permission_error", "validation_error", "unknown"]>>;
        readonly detail: Schema.optional<Schema.Unknown>;
    }>;
}>]>;
export type ProviderRuntimeEventV2 = typeof ProviderRuntimeEventV2.Type;
export declare const ProviderRuntimeEvent: Schema.Union<readonly [Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"session.started">;
    readonly payload: Schema.Struct<{
        readonly message: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly resume: Schema.optional<Schema.Unknown>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"session.configured">;
    readonly payload: Schema.Struct<{
        readonly config: Schema.$Record<Schema.String, Schema.Unknown>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"session.state.changed">;
    readonly payload: Schema.Struct<{
        readonly state: Schema.Literals<readonly ["starting", "ready", "running", "waiting", "stopped", "error"]>;
        readonly reason: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly detail: Schema.optional<Schema.Unknown>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"session.exited">;
    readonly payload: Schema.Struct<{
        readonly reason: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly recoverable: Schema.optional<Schema.Boolean>;
        readonly exitKind: Schema.optional<Schema.Literals<readonly ["graceful", "error"]>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"thread.started">;
    readonly payload: Schema.Struct<{
        readonly providerThreadId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"thread.state.changed">;
    readonly payload: Schema.Struct<{
        readonly state: Schema.Literals<readonly ["active", "idle", "archived", "closed", "compacted", "error"]>;
        readonly beforeTokens: Schema.optional<Schema.Int>;
        readonly afterTokens: Schema.optional<Schema.Int>;
        readonly detail: Schema.optional<Schema.Unknown>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"thread.metadata.updated">;
    readonly payload: Schema.Struct<{
        readonly name: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly metadata: Schema.optional<Schema.$Record<Schema.String, Schema.Unknown>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"thread.token-usage.updated">;
    readonly payload: Schema.Struct<{
        readonly usage: Schema.Struct<{
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
        }>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"thread.realtime.started">;
    readonly payload: Schema.Struct<{
        readonly realtimeSessionId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"thread.realtime.item-added">;
    readonly payload: Schema.Struct<{
        readonly item: Schema.Unknown;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"thread.realtime.audio.delta">;
    readonly payload: Schema.Struct<{
        readonly audio: Schema.Unknown;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"thread.realtime.error">;
    readonly payload: Schema.Struct<{
        readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"thread.realtime.closed">;
    readonly payload: Schema.Struct<{
        readonly reason: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"turn.started">;
    readonly payload: Schema.Struct<{
        readonly model: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly effort: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"turn.completed">;
    readonly payload: Schema.Struct<{
        readonly state: Schema.Literals<readonly ["completed", "failed", "interrupted", "cancelled"]>;
        readonly stopReason: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        readonly usage: Schema.optional<Schema.Unknown>;
        readonly modelUsage: Schema.optional<Schema.$Record<Schema.String, Schema.Unknown>>;
        readonly totalCostUsd: Schema.optional<Schema.Number>;
        readonly errorMessage: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly tokenUsage: Schema.optional<Schema.Union<readonly [Schema.Struct<{
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
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"turn.aborted">;
    readonly payload: Schema.Struct<{
        readonly reason: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly tokenUsage: Schema.optional<Schema.Union<readonly [Schema.Struct<{
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
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"turn.plan.updated">;
    readonly payload: Schema.Struct<{
        readonly explanation: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        readonly plan: Schema.$Array<Schema.Struct<{
            readonly step: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly status: Schema.Literals<readonly ["pending", "inProgress", "completed"]>;
        }>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"turn.proposed.delta">;
    readonly payload: Schema.Struct<{
        readonly delta: Schema.String;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"turn.proposed.completed">;
    readonly payload: Schema.Struct<{
        readonly planMarkdown: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"turn.diff.updated">;
    readonly payload: Schema.Struct<{
        readonly unifiedDiff: Schema.String;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"item.started">;
    readonly payload: Schema.Struct<{
        readonly itemType: Schema.Literals<readonly ["user_message", "assistant_message", "reasoning", "plan", "command_execution", "file_change", "mcp_tool_call", "dynamic_tool_call", "collab_agent_tool_call", "web_search", "image_view", "review_entered", "review_exited", "context_compaction", "error", "unknown"]>;
        readonly status: Schema.optional<Schema.Literals<readonly ["inProgress", "completed", "failed", "declined"]>>;
        readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly detail: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
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
        readonly data: Schema.optional<Schema.Unknown>;
        readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly parentToolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"item.updated">;
    readonly payload: Schema.Struct<{
        readonly itemType: Schema.Literals<readonly ["user_message", "assistant_message", "reasoning", "plan", "command_execution", "file_change", "mcp_tool_call", "dynamic_tool_call", "collab_agent_tool_call", "web_search", "image_view", "review_entered", "review_exited", "context_compaction", "error", "unknown"]>;
        readonly status: Schema.optional<Schema.Literals<readonly ["inProgress", "completed", "failed", "declined"]>>;
        readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly detail: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
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
        readonly data: Schema.optional<Schema.Unknown>;
        readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly parentToolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"item.completed">;
    readonly payload: Schema.Struct<{
        readonly itemType: Schema.Literals<readonly ["user_message", "assistant_message", "reasoning", "plan", "command_execution", "file_change", "mcp_tool_call", "dynamic_tool_call", "collab_agent_tool_call", "web_search", "image_view", "review_entered", "review_exited", "context_compaction", "error", "unknown"]>;
        readonly status: Schema.optional<Schema.Literals<readonly ["inProgress", "completed", "failed", "declined"]>>;
        readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly detail: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
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
        readonly data: Schema.optional<Schema.Unknown>;
        readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly parentToolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"content.delta">;
    readonly payload: Schema.Struct<{
        readonly streamKind: Schema.Literals<readonly ["assistant_text", "reasoning_text", "reasoning_summary_text", "plan_text", "command_output", "file_change_output", "unknown"]>;
        readonly delta: Schema.String;
        readonly contentIndex: Schema.optional<Schema.Int>;
        readonly summaryIndex: Schema.optional<Schema.Int>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"request.opened">;
    readonly payload: Schema.Struct<{
        readonly requestType: Schema.Literals<readonly ["command_execution_approval", "file_read_approval", "file_change_approval", "apply_patch_approval", "exec_command_approval", "mcp_elicitation_approval", "permission_approval", "tool_user_input", "dynamic_tool_call", "auth_tokens_refresh", "unknown"]>;
        readonly detail: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly appName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly options: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly decision: Schema.Literals<readonly ["accept", "acceptForSession", "acceptAlways", "decline", "cancel"]>;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly warning: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>>;
        readonly args: Schema.optional<Schema.Unknown>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"request.resolved">;
    readonly payload: Schema.Struct<{
        readonly requestType: Schema.Literals<readonly ["command_execution_approval", "file_read_approval", "file_change_approval", "apply_patch_approval", "exec_command_approval", "mcp_elicitation_approval", "permission_approval", "tool_user_input", "dynamic_tool_call", "auth_tokens_refresh", "unknown"]>;
        readonly decision: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly resolution: Schema.optional<Schema.Unknown>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"user-input.requested">;
    readonly payload: Schema.Struct<{
        readonly questions: Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly header: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly question: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly options: Schema.$Array<Schema.Struct<{
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.String;
                readonly value: Schema.optional<Schema.String>;
            }>>;
            readonly allowCustomAnswer: Schema.optional<Schema.Boolean>;
            readonly initialAnswer: Schema.optional<Schema.String>;
            readonly multiSelect: Schema.withConstructorDefault<Schema.optional<Schema.Boolean>>;
        }>>;
        readonly responseMode: Schema.optional<Schema.Literal<"message">>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"user-input.resolved">;
    readonly payload: Schema.Struct<{
        readonly answers: Schema.$Record<Schema.String, Schema.Unknown>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"task.started">;
    readonly payload: Schema.Struct<{
        readonly taskType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentKind: Schema.optional<Schema.Literals<readonly ["agent", "background"]>>;
        readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly role: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly model: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly effort: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly toolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly parentAgentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly workflowName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentIndex: Schema.optional<Schema.Int>;
        readonly phaseIndex: Schema.optional<Schema.Int>;
        readonly phaseTitle: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly phases: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly index: Schema.Int;
            readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>>;
        readonly attempt: Schema.optional<Schema.Int>;
        readonly runHandles: Schema.optional<Schema.Struct<{
            readonly runId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly scriptPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly transcriptDir: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            /** Only http/https URLs, sanitized by the adapter. */
            readonly sessionUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
        readonly outputFile: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Provider-synthesized child events belong in Agents, never the parent timeline. */
        readonly timelineBypass: Schema.optional<Schema.Boolean>;
        readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeTaskId">;
        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"task.progress">;
    readonly payload: Schema.Struct<{
        readonly taskType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentKind: Schema.optional<Schema.Literals<readonly ["agent", "background"]>>;
        readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly role: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly model: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly effort: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly toolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly parentAgentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly workflowName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentIndex: Schema.optional<Schema.Int>;
        readonly phaseIndex: Schema.optional<Schema.Int>;
        readonly phaseTitle: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly phases: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly index: Schema.Int;
            readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>>;
        readonly attempt: Schema.optional<Schema.Int>;
        readonly runHandles: Schema.optional<Schema.Struct<{
            readonly runId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly scriptPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly transcriptDir: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            /** Only http/https URLs, sanitized by the adapter. */
            readonly sessionUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
        readonly outputFile: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Provider-synthesized child events belong in Agents, never the parent timeline. */
        readonly timelineBypass: Schema.optional<Schema.Boolean>;
        readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeTaskId">;
        readonly description: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly summary: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly usage: Schema.optional<Schema.Unknown>;
        readonly typedUsage: Schema.optional<Schema.Struct<{
            readonly totalTokens: Schema.Int;
            readonly inputTokens: Schema.optional<Schema.Int>;
            readonly cachedInputTokens: Schema.optional<Schema.Int>;
            readonly outputTokens: Schema.optional<Schema.Int>;
            readonly reasoningOutputTokens: Schema.optional<Schema.Int>;
            readonly toolUses: Schema.optional<Schema.Int>;
            readonly durationMs: Schema.optional<Schema.Int>;
        }>>;
        readonly lastToolName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly status: Schema.optional<Schema.Literals<readonly ["pending", "running", "waiting", "idle", "completed", "failed", "cancelled", "interrupted"]>>;
        readonly error: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"task.updated">;
    readonly payload: Schema.Struct<{
        readonly taskType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentKind: Schema.optional<Schema.Literals<readonly ["agent", "background"]>>;
        readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly role: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly model: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly effort: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly toolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly parentAgentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly workflowName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentIndex: Schema.optional<Schema.Int>;
        readonly phaseIndex: Schema.optional<Schema.Int>;
        readonly phaseTitle: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly phases: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly index: Schema.Int;
            readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>>;
        readonly attempt: Schema.optional<Schema.Int>;
        readonly runHandles: Schema.optional<Schema.Struct<{
            readonly runId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly scriptPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly transcriptDir: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            /** Only http/https URLs, sanitized by the adapter. */
            readonly sessionUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
        readonly outputFile: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Provider-synthesized child events belong in Agents, never the parent timeline. */
        readonly timelineBypass: Schema.optional<Schema.Boolean>;
        readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeTaskId">;
        readonly status: Schema.optional<Schema.Literals<readonly ["pending", "running", "waiting", "idle", "completed", "failed", "cancelled", "interrupted"]>>;
        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly error: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly endedAt: Schema.optional<Schema.String>;
        readonly isBackgrounded: Schema.optional<Schema.Boolean>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"task.completed">;
    readonly payload: Schema.Struct<{
        readonly taskType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentKind: Schema.optional<Schema.Literals<readonly ["agent", "background"]>>;
        readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly title: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly role: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly model: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly effort: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly toolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly parentAgentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly workflowName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentIndex: Schema.optional<Schema.Int>;
        readonly phaseIndex: Schema.optional<Schema.Int>;
        readonly phaseTitle: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly phases: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly index: Schema.Int;
            readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>>;
        readonly attempt: Schema.optional<Schema.Int>;
        readonly runHandles: Schema.optional<Schema.Struct<{
            readonly runId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly scriptPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly transcriptDir: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            /** Only http/https URLs, sanitized by the adapter. */
            readonly sessionUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
        readonly outputFile: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentPath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Provider-synthesized child events belong in Agents, never the parent timeline. */
        readonly timelineBypass: Schema.optional<Schema.Boolean>;
        readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeTaskId">;
        readonly status: Schema.Literals<readonly ["completed", "failed", "stopped"]>;
        readonly summary: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly usage: Schema.optional<Schema.Unknown>;
        readonly typedUsage: Schema.optional<Schema.Struct<{
            readonly totalTokens: Schema.Int;
            readonly inputTokens: Schema.optional<Schema.Int>;
            readonly cachedInputTokens: Schema.optional<Schema.Int>;
            readonly outputTokens: Schema.optional<Schema.Int>;
            readonly reasoningOutputTokens: Schema.optional<Schema.Int>;
            readonly toolUses: Schema.optional<Schema.Int>;
            readonly durationMs: Schema.optional<Schema.Int>;
        }>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"hook.started">;
    readonly payload: Schema.Struct<{
        readonly hookId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly hookName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly hookEvent: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"hook.progress">;
    readonly payload: Schema.Struct<{
        readonly hookId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly output: Schema.optional<Schema.String>;
        readonly stdout: Schema.optional<Schema.String>;
        readonly stderr: Schema.optional<Schema.String>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"hook.completed">;
    readonly payload: Schema.Struct<{
        readonly hookId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly outcome: Schema.Literals<readonly ["success", "error", "cancelled"]>;
        readonly output: Schema.optional<Schema.String>;
        readonly stdout: Schema.optional<Schema.String>;
        readonly stderr: Schema.optional<Schema.String>;
        readonly exitCode: Schema.optional<Schema.Int>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"tool.progress">;
    readonly payload: Schema.Struct<{
        readonly toolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly toolName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly summary: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly elapsedSeconds: Schema.optional<Schema.Number>;
        readonly taskId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeTaskId">>;
        readonly parentToolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"tool.summary">;
    readonly payload: Schema.Struct<{
        readonly summary: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly precedingToolUseIds: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"auth.status">;
    readonly payload: Schema.Struct<{
        readonly isAuthenticating: Schema.optional<Schema.Boolean>;
        readonly output: Schema.optional<Schema.$Array<Schema.String>>;
        readonly error: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"account.updated">;
    readonly payload: Schema.Struct<{
        readonly account: Schema.Unknown;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"account.rate-limits.updated">;
    readonly payload: Schema.Struct<{
        readonly limits: Schema.Struct<{
            readonly windows: Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly kind: Schema.Literals<readonly ["session", "weekly", "monthly", "other"]>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly usedPercent: Schema.Number;
                readonly resetsAt: Schema.optional<Schema.String>;
                readonly windowDurationMins: Schema.optional<Schema.Int>;
            }>>;
        }>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"mcp.status.updated">;
    readonly payload: Schema.Struct<{
        readonly status: Schema.Unknown;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"mcp.oauth.completed">;
    readonly payload: Schema.Struct<{
        readonly success: Schema.Boolean;
        readonly name: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly error: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"model.rerouted">;
    readonly payload: Schema.Struct<{
        readonly fromModel: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly toModel: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly reason: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"config.warning">;
    readonly payload: Schema.Struct<{
        readonly summary: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly details: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly path: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly range: Schema.optional<Schema.Unknown>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"deprecation.notice">;
    readonly payload: Schema.Struct<{
        readonly summary: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly details: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"files.persisted">;
    readonly payload: Schema.Struct<{
        readonly files: Schema.$Array<Schema.Struct<{
            readonly filename: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly fileId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>;
        readonly failed: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly filename: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly error: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"tool.denied">;
    readonly payload: Schema.Struct<{
        readonly toolName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly toolUseId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly reason: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly agentId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"runtime.warning">;
    readonly payload: Schema.Struct<{
        readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly detail: Schema.optional<Schema.Unknown>;
    }>;
}>, Schema.Struct<{
    readonly eventId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EventId">;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly createdAt: Schema.String;
    readonly turnId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnId">>;
    readonly itemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeItemId">>;
    readonly requestId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">>;
    readonly providerRefs: Schema.optional<Schema.Struct<{
        readonly providerTurnId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly providerItemId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderItemId">>;
        readonly providerRequestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly raw: Schema.optional<Schema.Struct<{
        readonly source: Schema.Union<readonly [Schema.Literal<"codex.app-server.notification">, Schema.Literal<"codex.app-server.request">, Schema.Literal<"codex.eventmsg">, Schema.Literal<"claude.sdk.message">, Schema.Literal<"claude.sdk.permission">, Schema.Literal<"codex.sdk.thread-event">, Schema.Literal<"opencode.sdk.event">, Schema.Literal<"acp.jsonrpc">, Schema.TemplateLiteral<readonly ["acp.", Schema.String, ".extension"]>]>;
        readonly method: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly messageType: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly payload: Schema.Unknown;
    }>>;
    readonly type: Schema.Literal<"runtime.error">;
    readonly payload: Schema.Struct<{
        readonly message: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly code: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly class: Schema.optional<Schema.Literals<readonly ["provider_error", "transport_error", "permission_error", "validation_error", "unknown"]>>;
        readonly detail: Schema.optional<Schema.Unknown>;
    }>;
}>]>;
export type ProviderRuntimeEvent = ProviderRuntimeEventV2;
export declare const ProviderRuntimeTurnStatus: Schema.Literals<readonly ["completed", "failed", "interrupted", "cancelled"]>;
export type ProviderRuntimeTurnStatus = RuntimeTurnState;
export {};
