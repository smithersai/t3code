import * as FileSystem from "effect/FileSystem";
import * as McpProviderSessions from "@t3tools/provider-core/server/McpProviderSessions";
import * as IdAllocator from "@t3tools/provider-core/server/IdAllocator";
export { ACP_PROTOCOL, acpCompletedTurnShouldTerminalizeTool, acpPostSettleContinuationOfferEvidence, acpPostSettleWakeEvidence, acpScopedNativeId, acpToolCallDiffPatch, makeAcpAdapterV2, } from "./adapter.vibe.platform.js";
export type { AcpAdapterV2ExtensionContext, AcpAdapterV2Flavor, AcpAdapterV2NativeLogging, AcpAdapterV2Options, AcpAdapterV2RuntimeInput, AcpAdapterV2SubagentUpdate, AcpAdapterV2UserInputRequest, AcpSubagentSessionEvent, } from "./adapter.vibe.platform.js";
export declare const AcpProviderCapabilitiesV2: {
    sessions: {
        supportsMultipleProviderThreadsPerSession: false;
        supportsModelSwitchInSession: false;
        supportsProviderSwitchingViaHandoff: true;
        supportsRuntimeModeSwitchInSession: false;
        pendingRequestsSurviveRestart: false;
    };
    threads: {
        canCreateEmptyThread: true;
        canReadThreadSnapshot: false;
        canRollbackThread: true;
        canForkThread: false;
        canForkFromTurn: false;
        canForkFromSubagentThread: false;
        exposesNativeThreadId: true;
    };
    turns: {
        exposesNativeTurnId: false;
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
        streamsPlanText: false;
        emitsMessageCompleted: true;
    };
    tools: {
        exposesToolItemIds: true;
        emitsToolStarted: true;
        emitsToolCompleted: true;
        emitsToolOutput: true;
        supportsMcpTools: false;
        supportsDynamicToolCallbacks: false;
    };
    approvals: {
        supportsCommandApproval: true;
        supportsFileReadApproval: true;
        supportsFileChangeApproval: true;
        supportsApplyPatchApproval: false;
        approvalsHaveNativeRequestIds: false;
        approvalCallbacksAreLiveOnly: true;
        approvalsCanOriginateFromSubagents: false;
    };
    planning: {
        emitsPlanUpdated: true;
        emitsTodoList: true;
        emitsProposedPlan: false;
        supportsStructuredQuestions: true;
        planDeltasHaveItemIds: false;
    };
    subagents: {
        supportsSubagents: false;
        exposesSubagentThreadIds: false;
        emitsSubagentLifecycle: false;
        canWaitForSubagents: false;
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
        providerCanRollbackConversation: true;
        providerRollbackReturnsSnapshot: true;
        providerCanReadConversationSnapshot: false;
    };
    identity: {
        nativeThreadIds: "strong";
        nativeTurnIds: "weak";
        nativeItemIds: "weak";
        nativeRequestIds: "weak";
    };
    runtimePolicy: {
        enforcement: "client-boundary";
    };
};
export type AcpAdapterV2Env = FileSystem.FileSystem | IdAllocator.IdAllocatorV2 | McpProviderSessions.McpProviderSessions;
