import type { ProviderUserInputAnswers, UserInputQuestion } from "@t3tools/contracts";
import * as Deferred from "effect/Deferred";
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import * as EffectAcpErrors from "effect-acp/errors";
import type * as EffectAcpSchema from "effect-acp/compat";
import type * as AcpSessionRuntime from "@t3tools/provider-acp/server/AcpSessionRuntime";
import type { AcpToolCallState } from "@t3tools/provider-acp/server/runtimeModel";
export declare const xAiRateLimitedErrorCode = -32003;
declare const XAiPromptCompleteNotification: Schema.Struct<{
    readonly sessionId: Schema.String;
    readonly promptId: Schema.optional<Schema.String>;
    readonly stopReason: Schema.optional<Schema.String>;
    readonly agentResult: Schema.optional<Schema.NullOr<Schema.Unknown>>;
}>;
type XAiPromptCompleteNotification = typeof XAiPromptCompleteNotification.Type;
declare const XAiSessionUpdateNotification: Schema.Struct<{
    readonly sessionId: Schema.String;
    readonly update: Schema.Struct<{
        readonly sessionUpdate: Schema.String;
        readonly prompt_id: Schema.optional<Schema.String>;
        readonly promptId: Schema.optional<Schema.String>;
        readonly stop_reason: Schema.optional<Schema.String>;
        readonly stopReason: Schema.optional<Schema.String>;
        readonly agent_result: Schema.optional<Schema.NullOr<Schema.Unknown>>;
        readonly child_session_id: Schema.optional<Schema.String>;
        readonly status: Schema.optional<Schema.String>;
        readonly output: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly error: Schema.optional<Schema.NullOr<Schema.String>>;
    }>;
    readonly _meta: Schema.optional<Schema.Unknown>;
}>;
type XAiSessionUpdateNotification = typeof XAiSessionUpdateNotification.Type;
/** @throws {never} */
export declare function xAiPromptCompleteFromSessionUpdate(notification: XAiSessionUpdateNotification): XAiPromptCompleteNotification | null;
/**
 * Background command wakes use their own task-completed-* prompt IDs.
 * @throws {never}
 */
export declare function isXAiTaskCompletedWakeNotification(notification: EffectAcpSchema.SessionNotification): boolean;
export interface XAiAcpSubagentUpdate {
    readonly nativeTaskId: string;
    readonly prompt: string;
    readonly title: string | null;
    readonly model: string | null;
    readonly status: "running" | "completed" | "failed";
    readonly childSessionId: string | null;
    readonly result: string | null;
    /** Defaults to true; false also projects a normal tool item for hydration. */
    readonly suppressNormalTool?: boolean;
}
export interface XAiAcpBackgroundToolMutation {
    readonly taskId: string;
    readonly status: "running" | "completed" | "failed";
    readonly appendOutput: string;
}
export interface XAiAcpSubagentEndNotice {
    readonly childSessionId: string;
    readonly status: "completed" | "failed";
}
/** @throws {never} */
export declare function isXAiMonitorTool(toolCall: AcpToolCallState): boolean;
/**
 * BackgroundTaskStarted completes the tool call while the shell process still runs.
 * The task ends on a completion notification or completed TaskOutput for its task id.
 * @throws {never}
 */
export declare function xAiBackgroundShellTaskId(toolCall: AcpToolCallState): string | undefined;
/** @throws {never} */
export declare function extractXAiMonitorTaskId(toolCall: AcpToolCallState): string | undefined;
/**
 * Persistent monitors must not hold root-turn deferred finalize.
 * @throws {never}
 */
export declare function isXAiPersistentMonitor(toolCall: AcpToolCallState): boolean;
/** @throws {never} */
export declare function extractXAiBackgroundTaskCompletion(toolCall: AcpToolCallState): ReadonlyArray<{
    readonly taskId: string;
    readonly status: "running" | "completed" | "failed";
    readonly appendOutput: string;
}>;
/**
 * A finished kill_command_or_subagent call is the genuine end signal for every
 * task id it names, even without a separate `x.ai/task_completed` notification.
 * A failed kill is not proof the target stopped, so leave the existing
 * task state unchanged until a genuine terminal signal arrives.
 * @throws {never}
 */
export declare function extractXAiKilledBackgroundTasks(toolCall: AcpToolCallState): ReadonlyArray<{
    readonly taskId: string;
    readonly status: "running" | "completed" | "failed";
    readonly appendOutput: string;
}>;
declare const XAiTaskLifecycleNotification: Schema.Struct<{
    readonly sessionId: Schema.String;
    readonly update: Schema.Struct<{
        readonly sessionUpdate: Schema.String;
        readonly task_id: Schema.optional<Schema.String>;
        readonly tool_call_id: Schema.optional<Schema.String>;
        readonly command: Schema.optional<Schema.String>;
        readonly description: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly monitor_description: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly task_snapshot: Schema.optional<Schema.Struct<{
            readonly task_id: Schema.optional<Schema.String>;
            readonly output: Schema.optional<Schema.String>;
            readonly exit_code: Schema.optional<Schema.NullOr<Schema.Number>>;
            readonly command: Schema.optional<Schema.String>;
            readonly display_command: Schema.optional<Schema.NullOr<Schema.String>>;
            readonly description: Schema.optional<Schema.NullOr<Schema.String>>;
            readonly kind: Schema.optional<Schema.String>;
        }>>;
    }>;
    readonly _meta: Schema.optional<Schema.Unknown>;
}>;
type XAiTaskLifecycleNotification = typeof XAiTaskLifecycleNotification.Type;
export interface XAiBackgroundTaskLifecycleMutation {
    readonly sessionId: string;
    readonly taskId: string;
    readonly status: "running" | "completed" | "failed";
    readonly output?: string;
    readonly report?: {
        readonly kind: "command";
        readonly label?: string;
        readonly exitCode?: number;
    } | {
        readonly kind: "monitor";
        readonly label?: string;
    };
}
/** @throws {never} */
export declare function xAiBackgroundTaskLifecycleMutation(notification: XAiTaskLifecycleNotification, status: "running" | "completed"): XAiBackgroundTaskLifecycleMutation | null;
/** Track both x.ai/task_* and legacy _x.ai/task_*; background tasks can survive cancellation. */
export declare const registerXAiBackgroundTaskTracking: (runtime: Pick<AcpSessionRuntime.AcpSessionRuntime["Service"], "handleExtNotification">, apply: (mutation: XAiBackgroundTaskLifecycleMutation) => Effect.Effect<void>) => Effect.Effect<void, EffectAcpErrors.AcpError>;
/** Sent on the parent session; will_wake means a subagent-completed-<id> turn follows. */
export interface XAiSubagentFinishedNotice {
    readonly sessionId: string;
    readonly childSessionId: string;
    readonly status: "completed" | "failed" | "cancelled";
    readonly result: string | null;
}
/** @throws {never} */
export declare function xAiSubagentFinishedNotice(notification: XAiSessionUpdateNotification): XAiSubagentFinishedNotice | null;
export declare const registerXAiSubagentFinished: (runtime: Pick<AcpSessionRuntime.AcpSessionRuntime["Service"], "handleExtNotification">, finish: (notice: XAiSubagentFinishedNotice) => Effect.Effect<void>) => Effect.Effect<void>;
/**
 * Grok 1.0.41 monitor ticks report exit_code 0 before ending via _x.ai/task_completed.
 * @throws {never}
 */
export declare function normalizeXAiAcpToolCallState(toolCall: AcpToolCallState): AcpToolCallState;
/** @throws {never} */
export declare function extractXAiAcpBackgroundToolMutation(text: string): ReadonlyArray<XAiAcpBackgroundToolMutation>;
/** @throws {never} */
export declare function extractXAiAcpSubagentEndNotice(text: string): XAiAcpSubagentEndNotice | undefined;
/**
 * Spawn ACKs return immediately; keep subagents running until a child or hydration terminal.
 * @throws {never}
 */
export declare function extractXAiAcpSubagentUpdate(toolCall: AcpToolCallState): XAiAcpSubagentUpdate | undefined;
export declare const XAiAskUserQuestionRequest: Schema.Union<readonly [Schema.Struct<{
    readonly sessionId: Schema.String;
    readonly toolCallId: Schema.String;
    readonly questions: Schema.$Array<Schema.Struct<{
        readonly id: Schema.optional<Schema.String>;
        readonly question: Schema.String;
        readonly options: Schema.$Array<Schema.Struct<{
            readonly label: Schema.String;
            readonly description: Schema.optional<Schema.String>;
            readonly preview: Schema.optional<Schema.String>;
            readonly id: Schema.optional<Schema.String>;
        }>>;
        readonly multiSelect: Schema.optional<Schema.NullOr<Schema.Boolean>>;
    }>>;
    readonly mode: Schema.Literals<readonly ["default", "plan"]>;
}>, Schema.Struct<{
    readonly method: Schema.Literals<readonly ["x.ai/ask_user_question", "_x.ai/ask_user_question"]>;
    readonly params: Schema.Struct<{
        readonly sessionId: Schema.String;
        readonly toolCallId: Schema.String;
        readonly questions: Schema.$Array<Schema.Struct<{
            readonly id: Schema.optional<Schema.String>;
            readonly question: Schema.String;
            readonly options: Schema.$Array<Schema.Struct<{
                readonly label: Schema.String;
                readonly description: Schema.optional<Schema.String>;
                readonly preview: Schema.optional<Schema.String>;
                readonly id: Schema.optional<Schema.String>;
            }>>;
            readonly multiSelect: Schema.optional<Schema.NullOr<Schema.Boolean>>;
        }>>;
        readonly mode: Schema.Literals<readonly ["default", "plan"]>;
    }>;
}>]>;
type XAiAskUserQuestionRequest = typeof XAiAskUserQuestionRequest.Type;
export declare const XAiExitPlanModeRequest: Schema.Union<readonly [Schema.Struct<{
    readonly sessionId: Schema.String;
    readonly toolCallId: Schema.String;
    readonly planContent: Schema.optional<Schema.NullOr<Schema.String>>;
}>, Schema.Struct<{
    readonly method: Schema.Literals<readonly ["x.ai/exit_plan_mode", "_x.ai/exit_plan_mode"]>;
    readonly params: Schema.Struct<{
        readonly sessionId: Schema.String;
        readonly toolCallId: Schema.String;
        readonly planContent: Schema.optional<Schema.NullOr<Schema.String>>;
    }>;
}>]>;
type XAiExitPlanModeRequest = typeof XAiExitPlanModeRequest.Type;
export declare const XAI_EMPTY_PLAN_MARKDOWN = "# No plan written yet\n\n(The agent exited plan mode without writing a plan.)";
/** @throws {never} */
export declare function extractXAiExitPlanMarkdown(params: XAiExitPlanModeRequest, fallback?: string | null): string;
export type XAiExitPlanModeOutcome = "approved" | "abandoned" | "request_changes";
export interface XAiExitPlanModeResponse {
    readonly outcome: XAiExitPlanModeOutcome;
    readonly feedback?: string;
}
/**
 * Abandon the native approval gate after T3 captures the plan; implementation uses T3 UI.
 * @throws {never}
 */
export declare function makeXAiExitPlanModeCapturedResponse(feedback?: string): XAiExitPlanModeResponse;
export interface GrokPlanPathHost {
    readonly platform: NodeJS.Platform;
    readonly environment: NodeJS.ProcessEnv;
    readonly homeDirectory: string;
}
/** @throws {never} */
export declare function isGrokPlanMarkdownPath(path: string | undefined | null, host: GrokPlanPathHost): boolean;
/** @throws {never} */
export declare function extractGrokPlanMarkdownFromToolCallData(data: Record<string, unknown> | undefined, host: GrokPlanPathHost): string | undefined;
/** @throws {never} */
export declare function extractXAiAskUserQuestions(params: XAiAskUserQuestionRequest): ReadonlyArray<UserInputQuestion>;
/** @throws {never} */
export declare function extractXAiAskUserQuestionIdentity(params: XAiAskUserQuestionRequest): {
    readonly sessionId: string;
    readonly toolCallId: string;
};
interface XAiAskUserQuestionAnnotation {
    readonly preview?: string;
    readonly notes?: string;
}
interface XAiAskUserQuestionAcceptedResponse {
    readonly outcome: "accepted";
    readonly answers: Record<string, ReadonlyArray<string>>;
    readonly annotations?: Record<string, XAiAskUserQuestionAnnotation>;
}
interface XAiAskUserQuestionCancelledResponse {
    readonly outcome: "cancelled";
}
/** @throws {never} */
export declare function makeXAiAskUserQuestionResponse(params: XAiAskUserQuestionRequest, answers: ProviderUserInputAnswers): XAiAskUserQuestionAcceptedResponse;
/** @throws {never} */
export declare function makeXAiAskUserQuestionCancelledResponse(): XAiAskUserQuestionCancelledResponse;
/** Keep unbounded provider text out of structured attributes; read only at presentation. */
export declare class XAiPromptFailureText extends Error {
}
export declare const makeXAiPromptCompletionRuntime: (runtime: AcpSessionRuntime.AcpSessionRuntime["Service"]) => Effect.Effect<{
    handleRequestPermission: import("effect-acp/client").AcpClient["Service"]["handleRequestPermission"];
    handleElicitation: import("effect-acp/client").AcpClient["Service"]["handleElicitation"];
    handleMcpConnect: import("effect-acp/client").AcpClient["Service"]["handleMcpConnect"];
    handleMcpMessage: import("effect-acp/client").AcpClient["Service"]["handleMcpMessage"];
    handleMcpDisconnect: import("effect-acp/client").AcpClient["Service"]["handleMcpDisconnect"];
    handleMcpNotification: import("effect-acp/client").AcpClient["Service"]["handleMcpNotification"];
    handleReadTextFile: import("effect-acp/client").AcpClient["Service"]["handleReadTextFile"];
    handleWriteTextFile: import("effect-acp/client").AcpClient["Service"]["handleWriteTextFile"];
    handleCreateTerminal: import("effect-acp/client").AcpClient["Service"]["handleCreateTerminal"];
    handleTerminalOutput: import("effect-acp/client").AcpClient["Service"]["handleTerminalOutput"];
    handleTerminalWaitForExit: import("effect-acp/client").AcpClient["Service"]["handleTerminalWaitForExit"];
    handleTerminalKill: import("effect-acp/client").AcpClient["Service"]["handleTerminalKill"];
    handleTerminalRelease: import("effect-acp/client").AcpClient["Service"]["handleTerminalRelease"];
    handleSessionUpdate: import("effect-acp/client").AcpClient["Service"]["handleSessionUpdate"];
    handleElicitationComplete: import("effect-acp/client").AcpClient["Service"]["handleElicitationComplete"];
    handleUnknownExtRequest: import("effect-acp/client").AcpClient["Service"]["handleUnknownExtRequest"];
    handleUnknownExtNotification: import("effect-acp/client").AcpClient["Service"]["handleUnknownExtNotification"];
    handleExtRequest: import("effect-acp/client").AcpClient["Service"]["handleExtRequest"];
    initialize: () => Effect.Effect<EffectAcpSchema.InitializeResponse, EffectAcpErrors.AcpError>;
    authenticate?: (methodId: string) => Effect.Effect<void, EffectAcpErrors.AcpError>;
    start: () => Effect.Effect<AcpSessionRuntime.AcpSessionRuntimeStartResult, EffectAcpErrors.AcpError>;
    getEvents: () => import("effect/Stream").Stream<AcpSessionRuntime.AcpSessionRuntimeEvent, never>;
    drainEvents: Effect.Effect<void>;
    getModeState: Effect.Effect<import("@t3tools/provider-acp/server/runtimeModel").AcpSessionModeState | undefined>;
    getConfigOptions: Effect.Effect<ReadonlyArray<EffectAcpSchema.SessionConfigOption>>;
    loadSession: (sessionId: string, options?: AcpSessionRuntime.AcpSessionActivationOptions) => Effect.Effect<AcpSessionRuntime.AcpSessionRuntimeStartResult, EffectAcpErrors.AcpError>;
    resumeSession: (sessionId: string, options?: AcpSessionRuntime.AcpSessionActivationOptions) => Effect.Effect<AcpSessionRuntime.AcpSessionRuntimeStartResult, EffectAcpErrors.AcpError>;
    forkSession: (sessionId: string, options?: AcpSessionRuntime.AcpSessionActivationOptions) => Effect.Effect<AcpSessionRuntime.AcpSessionRuntimeStartResult, EffectAcpErrors.AcpError>;
    listSessions: (cursor?: string) => Effect.Effect<EffectAcpSchema.ListSessionsResponse, EffectAcpErrors.AcpError>;
    closeSession: (sessionId?: string) => Effect.Effect<EffectAcpSchema.CloseSessionResponse, EffectAcpErrors.AcpError>;
    deleteSession: (sessionId: string) => Effect.Effect<EffectAcpSchema.DeleteSessionResponse, EffectAcpErrors.AcpError>;
    listProviders: Effect.Effect<EffectAcpSchema.ListProvidersResponse, EffectAcpErrors.AcpError>;
    setProvider: (provider: EffectAcpSchema.SetProviderRequest) => Effect.Effect<EffectAcpSchema.SetProviderResponse, EffectAcpErrors.AcpError>;
    disableProvider: (providerId: string) => Effect.Effect<EffectAcpSchema.DisableProviderResponse, EffectAcpErrors.AcpError>;
    logout: Effect.Effect<EffectAcpSchema.LogoutResponse, EffectAcpErrors.AcpError>;
    processContainment: "cgroup-v2" | "process-ledger-reduced-guarantee" | "process-group" | "none";
    terminateProcessGroup?: Effect.Effect<void, AcpSessionRuntime.AcpProcessGroupTerminationError>;
    setMode: (modeId: string) => Effect.Effect<EffectAcpSchema.SetSessionModeResponse, EffectAcpErrors.AcpError>;
    setSessionModel: (modelId: string, meta?: EffectAcpSchema.SetSessionModelRequest["_meta"]) => Effect.Effect<EffectAcpSchema.SetSessionModelResponse, EffectAcpErrors.AcpError>;
    setConfigOption: (configId: string, value: string | boolean, options?: {
        readonly allowUnlistedValue?: boolean;
    }) => Effect.Effect<EffectAcpSchema.SetSessionConfigOptionResponse, EffectAcpErrors.AcpError>;
    setModel: (model: string) => Effect.Effect<void, EffectAcpErrors.AcpError>;
    request: (method: string, payload: unknown) => Effect.Effect<unknown, EffectAcpErrors.AcpError>;
    notify: (method: string, payload: unknown) => Effect.Effect<void, EffectAcpErrors.AcpError>;
    handleExtNotification: <A, I>(method: string, payload: Schema.Codec<A, I, never, never>, handler: (payload: A) => Effect.Effect<void, EffectAcpErrors.AcpError>) => Effect.Effect<void, never, never>;
    prompt: (payload: Omit<EffectAcpSchema.PromptRequest, "sessionId">, promptOptions?: {
        readonly dispatched?: Deferred.Deferred<void>;
    } | undefined) => Effect.Effect<EffectAcpSchema.PromptResponse, EffectAcpErrors.AcpInputStreamEndedError | EffectAcpErrors.AcpProcessExitedError | EffectAcpErrors.AcpProtocolParseError | EffectAcpErrors.AcpRequestError | EffectAcpErrors.AcpSpawnError | EffectAcpErrors.AcpTransportError, never>;
    cancel: Effect.Effect<void, EffectAcpErrors.AcpInputStreamEndedError | EffectAcpErrors.AcpProcessExitedError | EffectAcpErrors.AcpProtocolParseError | EffectAcpErrors.AcpRequestError | EffectAcpErrors.AcpSpawnError | EffectAcpErrors.AcpTransportError, never>;
}, never, never>;
export {};
