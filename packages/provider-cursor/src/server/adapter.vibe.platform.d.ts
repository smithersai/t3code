import type { AgentMessage, AgentOptions, McpServerConfig, ToolCall } from "@cursor/sdk";
import { type ModelSelection, type OrchestrationV2ExecutionNode, type OrchestrationV2PlanStep, type OrchestrationV2ProviderCapabilities, type OrchestrationV2ProviderSession, type OrchestrationV2ProviderThread, type OrchestrationV2ProviderTurn, type OrchestrationV2Subagent, type OrchestrationV2TurnItem, type ProviderInstanceId, type ServerProviderModel, type ThreadId } from "@t3tools/contracts";
import { CursorSettings } from "../settings.vibe";
import * as DateTime from "effect/DateTime";
import * as Deferred from "effect/Deferred";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import * as Schema from "effect/Schema";
import * as ProviderHost from "@t3tools/provider-core/server/ProviderHost";
import * as McpProviderSessions from "@t3tools/provider-core/server/McpProviderSessions";
import * as McpProviderSession from "@t3tools/provider-core/server/mcpSession";
import { CursorTransportFailure } from "./transportFailure.ts";
import * as IdAllocator from "@t3tools/provider-core/server/IdAllocator";
import * as ProviderAdapter from "@t3tools/provider-core/server/ProviderAdapter";
import * as CursorAgentSdk from "./CursorAgentSdk.vibe";
export declare const CursorProviderCapabilitiesV2: {
    sessions: {
        supportsMultipleProviderThreadsPerSession: false;
        supportsModelSwitchInSession: true;
        supportsProviderSwitchingViaHandoff: true;
        supportsRuntimeModeSwitchInSession: false;
        pendingRequestsSurviveRestart: false;
    };
    threads: {
        canCreateEmptyThread: true;
        canReadThreadSnapshot: true;
        canRollbackThread: false;
        canForkThread: false;
        canForkFromTurn: false;
        canForkFromSubagentThread: false;
        exposesNativeThreadId: true;
    };
    turns: {
        exposesNativeTurnId: true;
        emitsTurnStarted: true;
        emitsTurnCompleted: true;
        supportsInterrupt: true;
        supportsActiveSteering: false;
        supportsSteeringByInterruptRestart: true;
        supportsQueuedMessages: true;
        terminalStatusQuality: "strong";
    };
    streaming: {
        streamsAssistantText: true;
        streamsReasoning: true;
        streamsToolOutput: true;
        streamsPlanText: true;
        emitsMessageCompleted: true;
    };
    tools: {
        exposesToolItemIds: true;
        emitsToolStarted: true;
        emitsToolCompleted: true;
        emitsToolOutput: true;
        supportsMcpTools: true;
        supportsDynamicToolCallbacks: false;
    };
    approvals: {
        supportsCommandApproval: false;
        supportsFileReadApproval: false;
        supportsFileChangeApproval: false;
        supportsApplyPatchApproval: false;
        approvalsHaveNativeRequestIds: false;
        approvalCallbacksAreLiveOnly: false;
        approvalsCanOriginateFromSubagents: false;
    };
    planning: {
        emitsPlanUpdated: true;
        emitsTodoList: true;
        emitsProposedPlan: true;
        supportsStructuredQuestions: false;
        planDeltasHaveItemIds: true;
    };
    subagents: {
        supportsSubagents: true;
        exposesSubagentThreadIds: false;
        emitsSubagentLifecycle: true;
        canWaitForSubagents: true;
        canCloseSubagents: false;
        canForkSubagentThread: false;
    };
    context: {
        acceptsSystemContext: false;
        acceptsDeveloperContext: false;
        acceptsSyntheticUserContext: true;
        canGenerateSummaries: true;
        canConsumeHandoffSummaries: true;
        supportsDeltaHandoff: true;
        supportsFullThreadHandoff: true;
        maxRecommendedHandoffChars: null;
    };
    checkpointing: {
        appCanCheckpointFilesystem: true;
        supportsNestedCheckpointScopes: true;
        providerCanRollbackConversation: false;
        providerRollbackReturnsSnapshot: false;
        providerCanReadConversationSnapshot: true;
    };
    identity: {
        nativeThreadIds: "strong";
        nativeTurnIds: "strong";
        nativeItemIds: "weak";
        nativeRequestIds: "none";
    };
    runtimePolicy: {
        enforcement: "native";
    };
};
export interface CursorRuntimeAgentPolicy {
    readonly autoReview: boolean;
    readonly sandboxEnabled: boolean;
}
export declare function cursorRuntimeAgentPolicy(runtimePolicy: ProviderAdapter.ProviderAdapterV2RuntimePolicy, platform: NodeJS.Platform): CursorRuntimeAgentPolicy;
export declare function cursorMcpServers(session: McpProviderSession.McpProviderSessionConfig | undefined): Record<string, McpServerConfig> | undefined;
export declare function providerSession(input: {
    readonly providerSessionId: OrchestrationV2ProviderSession["id"];
    readonly providerInstanceId: ProviderInstanceId;
    readonly cwd: string | null;
    readonly model: string;
    readonly now: DateTime.Utc;
}): OrchestrationV2ProviderSession;
export declare function makeProviderThread(input: {
    readonly idAllocator: IdAllocator.IdAllocatorV2["Service"];
    readonly providerInstanceId: ProviderInstanceId;
    readonly appThreadId: OrchestrationV2ProviderThread["appThreadId"];
    readonly providerSessionId: OrchestrationV2ProviderThread["providerSessionId"];
    readonly nativeThreadId: string;
    readonly ownerNodeId?: OrchestrationV2ProviderThread["ownerNodeId"];
    readonly forkedFrom?: OrchestrationV2ProviderThread["forkedFrom"];
    readonly now: DateTime.Utc;
}): OrchestrationV2ProviderThread;
export declare function nativeThreadId(providerThread: OrchestrationV2ProviderThread): string;
export declare function makeCursorAgentOptions(input: {
    readonly apiKey?: string;
    readonly modelSelection: ModelSelection;
    readonly runtimePolicy: ProviderAdapter.ProviderAdapterV2RuntimePolicy;
    readonly threadId: ThreadId;
    readonly mcpSession: McpProviderSession.McpProviderSessionConfig | undefined;
    readonly platform: NodeJS.Platform;
}): AgentOptions;
declare const CursorModelUnavailableError_base: Schema.Class<CursorModelUnavailableError, Schema.TaggedStruct<"CursorModelUnavailableError", {
    readonly model: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class CursorModelUnavailableError extends CursorModelUnavailableError_base {
    get message(): string;
}
export declare function stableJson(value: unknown): string;
export declare function unknownRecord(value: unknown): Record<string, unknown> | undefined;
export declare function nestedString(value: unknown, keys: ReadonlyArray<string>): string | undefined;
export declare function cursorToolFailed(toolCall: ToolCall): boolean;
export declare function cursorToolOutput(toolCall: ToolCall): unknown;
export declare function cursorToolOutputText(toolCall: ToolCall): string;
export declare function cursorToolName(toolCall: ToolCall): string;
export declare function cursorToolFileName(toolCall: ToolCall): string;
export declare function cursorToolSearchPattern(toolCall: ToolCall): string | undefined;
export type CursorLsDirectoryNode = Extract<Extract<ToolCall, {
    readonly type: "ls";
}>["result"], {
    readonly status: "success";
}>["value"]["directoryTreeRoot"];
export declare function cursorLsSearchResults(node: CursorLsDirectoryNode, path: Path.Path): ReadonlyArray<{
    readonly fileName: string;
}>;
export declare function cursorToolSearchResults(toolCall: ToolCall, path: Path.Path): ReadonlyArray<{
    readonly fileName: string;
    readonly line?: number;
    readonly column?: number;
    readonly preview?: string;
}>;
export declare function cursorTodoSteps(toolCall: Extract<ToolCall, {
    readonly type: "updateTodos";
}>): ReadonlyArray<OrchestrationV2PlanStep>;
export declare function assistantTextsFromConversationSteps(steps: ReadonlyArray<unknown>): ReadonlyArray<string>;
export declare function nestedToolResult<Value = Record<string, unknown>>(rawResult: unknown, mapSuccess?: (success: Record<string, unknown>) => Value): {
    readonly status: "success";
    readonly value: Value;
} | {
    readonly status: "error";
    readonly error: unknown;
} | undefined;
export declare function nestedGrepWorkspaceResults(success: Record<string, unknown>): Record<string, unknown>;
export declare function nestedToolCallFromEnvelope(envelope: Record<string, unknown>): {
    readonly callId: string;
    readonly toolCall: ToolCall;
} | undefined;
export declare function toolCallsFromConversationSteps(steps: ReadonlyArray<unknown>): ReadonlyArray<{
    readonly callId: string;
    readonly toolCall: ToolCall;
}>;
export declare function textFromAgentMessage(message: AgentMessage): string;
export interface CursorProjectionTarget {
    readonly threadId: ThreadId;
    readonly runId: ProviderAdapter.ProviderAdapterV2TurnInput["runId"] | null;
    readonly rootNodeId: OrchestrationV2ExecutionNode["rootNodeId"];
    readonly parentNodeId: OrchestrationV2ExecutionNode["id"];
    readonly providerThreadId: OrchestrationV2ProviderThread["id"] | null;
    readonly providerTurnId: OrchestrationV2ProviderTurn["id"] | null;
}
export interface ActiveCursorToolCall {
    readonly callId: string;
    toolCall: ToolCall;
    readonly target: CursorProjectionTarget;
    readonly ordinal: number;
    readonly startedAt: DateTime.Utc;
    streamedOutput: string;
}
export interface ActiveCursorSubagent {
    task: OrchestrationV2Subagent;
    toolCall: Extract<ToolCall, {
        readonly type: "task";
    }>;
    readonly callId: string;
    readonly childThreadId: ThreadId;
    readonly childRootNodeId: OrchestrationV2ExecutionNode["id"];
    readonly turnItemId: OrchestrationV2TurnItem["id"];
    readonly turnItemOrdinal: number;
    nextChildOrdinal: number;
    resultProjected: boolean;
}
export interface ActiveCursorTextSegment {
    readonly nativeItemId: string;
    readonly startedAt: DateTime.Utc;
    text: string;
}
export interface ActiveCursorTextStream {
    current: ActiveCursorTextSegment | null;
    nextSegment: number;
}
export interface ActiveCursorTurn {
    readonly input: ProviderAdapter.ProviderAdapterV2TurnInput;
    readonly run: CursorAgentSdk.CursorAgentSdkRun;
    readonly providerTurnId: OrchestrationV2ProviderTurn["id"];
    readonly startedAt: DateTime.Utc;
    readonly completed: Deferred.Deferred<void, never>;
    readonly itemOrdinals: Map<string, number>;
    readonly tools: Map<string, ActiveCursorToolCall>;
    readonly subagents: Map<string, ActiveCursorSubagent>;
    readonly assistant: ActiveCursorTextStream;
    assistantReply: CursorTransportFailure;
    readonly reasoning: ActiveCursorTextStream;
    interrupted: boolean;
    finalized: boolean;
    /** The agent's latest turn ended and no new work has started since. */
    turnEnded: boolean;
}
export interface CursorLiveAgent {
    readonly nativeThreadId: string;
    readonly session: CursorAgentSdk.CursorAgentSdkSession;
}
export interface CursorAdapterV2Options {
    readonly instanceId: ProviderInstanceId;
    readonly settings: CursorSettings;
    readonly environment: NodeJS.ProcessEnv;
    readonly getModels?: () => ReadonlyArray<ServerProviderModel>;
}
export declare const makeCursorAdapterV2: (options: CursorAdapterV2Options) => Effect.Effect<{
    readonly instanceId: ProviderInstanceId;
    readonly driver: import("@t3tools/contracts").ProviderDriverKind;
    readonly getCapabilities: () => Effect.Effect<OrchestrationV2ProviderCapabilities, ProviderAdapter.ProviderAdapterV2Error>;
    readonly planSelectionTransition: (input: import("@t3tools/provider-core/server/selectionTransition").ProviderSelectionTransitionInput) => Effect.Effect<import("@t3tools/provider-core/server/selectionTransition").ProviderSelectionTransitionPlan, ProviderAdapter.ProviderAdapterV2Error>;
    readonly openSession: (input: ProviderAdapter.ProviderAdapterV2OpenSessionInput) => Effect.Effect<ProviderAdapter.ProviderAdapterV2SessionRuntime, ProviderAdapter.ProviderAdapterV2Error, import("effect/Scope").Scope>;
}, never, CursorAgentSdk.CursorAgentSdkRunner | FileSystem.FileSystem | IdAllocator.IdAllocatorV2 | McpProviderSessions.McpProviderSessions | Path.Path | ProviderHost.ProviderHost>;
export {};
