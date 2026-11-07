import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import * as Option from "effect/Option";
import * as Ref from "effect/Ref";
import * as EffectAcpSchema from "effect-acp/compat";
import type { OrchestrationV2ProviderThreadNativeMetadata, ThreadTokenUsageSnapshot } from "@t3tools/contracts";
export { applyAcpAgentTerminalUpdate } from "./runtimeModel.vibe.platform.js";
export type { AcpAgentTerminalState } from "./runtimeModel.vibe.platform.js";
export interface AcpSessionMode {
    readonly id: string;
    readonly name: string;
    readonly description?: string;
}
export interface AcpSessionModeState {
    readonly currentModeId: string;
    readonly availableModes: ReadonlyArray<AcpSessionMode>;
}
export interface AcpToolCallState {
    readonly toolCallId: string;
    readonly kind?: string;
    readonly title?: string;
    readonly status?: "pending" | "inProgress" | "requiresAction" | "completed" | "failed";
    readonly command?: string;
    readonly detail?: string;
    readonly data: Record<string, unknown>;
}
export type AcpPlanUpdate = {
    readonly nativePlanId: string;
    readonly kind: "items";
    readonly explanation?: string | null;
    readonly plan: ReadonlyArray<{
        readonly step: string;
        readonly status: "pending" | "inProgress" | "completed";
    }>;
} | {
    readonly nativePlanId: string;
    readonly kind: "markdown";
    readonly markdown: string;
} | {
    readonly nativePlanId: string;
    readonly kind: "file";
    readonly uri: string;
} | {
    readonly nativePlanId: string;
    readonly kind: "unknown";
    readonly contentType: string;
} | {
    readonly nativePlanId: string;
    readonly kind: "removed";
};
export interface AcpPermissionRequest {
    readonly kind: string | "unknown";
    readonly detail?: string;
    readonly toolCall?: AcpToolCallState;
}
export type AcpParsedSessionEvent = {
    readonly _tag: "ModeChanged";
    readonly modeId: string;
} | {
    readonly _tag: "AvailableCommandsUpdated";
    readonly availableCommands: ReadonlyArray<EffectAcpSchema.AvailableCommand>;
    readonly rawPayload: unknown;
} | {
    readonly _tag: "ConfigOptionsUpdated";
    readonly configOptions: ReadonlyArray<EffectAcpSchema.SessionConfigOption>;
    readonly rawPayload: unknown;
} | {
    readonly _tag: "AssistantItemStarted";
    readonly itemId: string;
} | {
    readonly _tag: "AssistantItemCompleted";
    readonly itemId: string;
} | {
    readonly _tag: "PlanUpdated";
    readonly payload: AcpPlanUpdate;
    readonly rawPayload: unknown;
} | {
    readonly _tag: "ToolCallUpdated";
    readonly toolCall: AcpToolCallState;
    readonly rawPayload: unknown;
} | {
    readonly _tag: "ContentDelta";
    readonly itemId?: string;
    readonly messageId?: string;
    readonly text: string;
    readonly rawPayload: unknown;
} | {
    readonly _tag: "ThoughtDelta";
    readonly text: string;
    readonly rawPayload: unknown;
} | {
    readonly _tag: "UsageUpdated";
    readonly usage: ThreadTokenUsageSnapshot;
    readonly rawPayload: unknown;
} | {
    readonly _tag: "SessionInfoUpdated";
    readonly metadata: OrchestrationV2ProviderThreadNativeMetadata;
    readonly rawPayload: unknown;
} | {
    readonly _tag: "NoticeReceived";
    readonly severity: string;
    readonly title: string;
    readonly description?: string;
    readonly rawPayload: unknown;
} | {
    readonly _tag: "UnknownUpdate";
    readonly updateType: string;
    readonly rawPayload: unknown;
};
/** @throws {never} */
export declare function acpContentBlockDisplayText(content: EffectAcpSchema.ContentBlock): string | undefined;
type AcpSessionSetupResponse = EffectAcpSchema.ForkSessionResponse | EffectAcpSchema.LoadSessionResponse | EffectAcpSchema.NewSessionResponse | EffectAcpSchema.ResumeSessionResponse;
type AcpSelectConfigOption = Extract<EffectAcpSchema.SessionConfigOption, {
    readonly type: "select";
}>;
/** @throws {never} */
export declare function findModelConfigOption(configOptions: ReadonlyArray<EffectAcpSchema.SessionConfigOption> | null | undefined): AcpSelectConfigOption | undefined;
/** @throws {never} */
export declare function extractModelConfigId(sessionResponse: AcpSessionSetupResponse): string | undefined;
/** @throws {never} */
export declare function findSessionConfigOption(configOptions: ReadonlyArray<EffectAcpSchema.SessionConfigOption> | null | undefined, configId: string): EffectAcpSchema.SessionConfigOption | undefined;
/** @throws {never} */
export declare function collectSessionConfigOptionValues(configOption: EffectAcpSchema.SessionConfigOption): ReadonlyArray<string>;
/** @throws {never} */
export declare function parseSessionModeState(sessionResponse: AcpSessionSetupResponse): AcpSessionModeState | undefined;
/** @throws {never} */
export declare function mergeToolCallState(previous: AcpToolCallState | undefined, next: AcpToolCallState): AcpToolCallState;
export interface AcpToolCallEmitDecisionInput {
    readonly previous: AcpToolCallState | undefined;
    readonly next: AcpToolCallState;
    readonly lastEmittedDetailLength: number | undefined;
    readonly skippedSinceEmit: number;
}
export interface AcpToolCallEmitDecision {
    readonly emit: boolean;
    readonly skippedSinceEmit: number;
}
/** @throws {never} */
export declare function toolCallProgressLength(state: AcpToolCallState): number;
/** @throws {never} */
export declare function toolCallVisibleOutputChanged(previous: AcpToolCallState, next: AcpToolCallState): boolean;
/** @throws {never} */
export declare function decideToolCallUpdateEmission(input: AcpToolCallEmitDecisionInput): AcpToolCallEmitDecision;
export interface AcpMcpToolCallIdentity {
    readonly server: string;
    readonly tool: string;
    readonly input?: Record<string, unknown>;
}
/**
 * ACP lacks typed MCP calls; recognize provider metadata and terminal fallback commands.
 * @throws {never}
 */
export declare function extractMcpToolCallIdentity(toolCall: AcpToolCallState, options?: {
    readonly embeddedTerminalCommands?: ReadonlyArray<string>;
}): AcpMcpToolCallIdentity | undefined;
/**
 * Capture IDs before resolveEmbeddedTerminalContent replaces them with text, to recover commands later.
 * @throws {never}
 */
export declare function embeddedTerminalIdsFromSessionUpdate(notification: EffectAcpSchema.SessionNotification): {
    readonly toolCallId: string;
    readonly terminalIds: ReadonlyArray<string>;
} | undefined;
/** @throws {never} */
export declare function parsePermissionRequest(params: EffectAcpSchema.RequestPermissionRequest): AcpPermissionRequest;
/** @throws {never} */
export declare function sessionUpdateIsReplay(params: EffectAcpSchema.SessionNotification): boolean;
/** @throws {never} */
export declare function sessionUpdateCountsAsLoadReplayActivity(params: EffectAcpSchema.SessionNotification, gatedSessionId?: string): boolean;
export interface SessionLoadGate {
    readonly active: boolean;
    readonly sessionId: string;
    readonly lastActivityAtMillis: number | undefined;
    readonly idleGap: Duration.Duration;
    readonly initializeResult: EffectAcpSchema.InitializeResponse;
    readonly candidateConfigOptions?: ReadonlyArray<EffectAcpSchema.SessionConfigOption>;
}
export declare const waitForSessionLoadReplayIdle: (input: {
    readonly gateRef: Ref.Ref<Option.Option<SessionLoadGate>>;
}) => Effect.Effect<EffectAcpSchema.LoadSessionResponse, never>;
/** @throws {never} */
export declare function sessionModelStateFromInitialize(initializeResult: EffectAcpSchema.InitializeResponse): EffectAcpSchema.SessionModelState | undefined;
/** @throws {never} */
export declare function syntheticLoadSessionResponseFromInitialize(initializeResult: EffectAcpSchema.InitializeResponse): EffectAcpSchema.LoadSessionResponse;
/** @throws {never} */
export declare function parseSessionUpdateEvent(params: EffectAcpSchema.SessionNotification): {
    readonly modeId?: string;
    readonly events: ReadonlyArray<AcpParsedSessionEvent>;
};
