import type { AgentMessage, AgentOptions, InteractionUpdate, RunResult, SDKUserMessage, SendOptions } from "@cursor/sdk";
import { type OrchestrationV2ProviderSession, type ThreadId } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as CursorSdk from "./CursorSdk.ts";
import * as ProviderEventLoggers from "@t3tools/provider-core/server/ProviderEventLoggers";
export declare const CURSOR_AGENT_SDK_PROTOCOL: "cursor-agent-sdk.local";
export declare const CURSOR_PROVIDER: string & import("effect/Brand").Brand<"ProviderDriverKind">;
declare const CursorAgentSdkRunnerError_base: Schema.Class<CursorAgentSdkRunnerError, Schema.TaggedStruct<"CursorAgentSdkRunnerError", {
    readonly method: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class CursorAgentSdkRunnerError extends CursorAgentSdkRunnerError_base {
    get message(): string;
}
/** @throws {never} */
export declare function cursorSdkFailureMessage(error: CursorAgentSdkRunnerError): string;
export declare const isCursorAgentSdkRunnerError: <I>(input: I) => input is I & CursorAgentSdkRunnerError;
export interface CursorAgentSdkOpenInput {
    readonly operation: "create" | "resume";
    readonly agentId?: string;
    readonly options: AgentOptions;
    readonly threadId: ThreadId;
    readonly providerSessionId: OrchestrationV2ProviderSession["id"];
}
export interface CursorAgentSdkSendInput<Error> {
    readonly message: string | SDKUserMessage;
    readonly options?: Omit<SendOptions, "onDelta">;
    readonly onDelta?: (update: InteractionUpdate) => Effect.Effect<void, Error>;
}
export interface CursorAgentSdkRun {
    readonly runId: string;
    readonly agentId: string;
    readonly wait: Effect.Effect<RunResult, CursorAgentSdkRunnerError>;
    readonly cancel: Effect.Effect<void, CursorAgentSdkRunnerError>;
}
export interface CursorAgentSdkSession {
    readonly agentId: string;
    readonly send: <Error>(input: CursorAgentSdkSendInput<Error>) => Effect.Effect<CursorAgentSdkRun, CursorAgentSdkRunnerError>;
    readonly listMessages: Effect.Effect<ReadonlyArray<AgentMessage>, CursorAgentSdkRunnerError>;
    readonly close: Effect.Effect<void, CursorAgentSdkRunnerError>;
}
declare const CursorAgentSdkRunner_base: Context.ServiceClass<CursorAgentSdkRunner, "@t3tools/provider-cursor/server/CursorAgentSdk/CursorAgentSdkRunner", {
    readonly open: (input: CursorAgentSdkOpenInput) => Effect.Effect<CursorAgentSdkSession, CursorAgentSdkRunnerError>;
    readonly assertComplete: Effect.Effect<void, CursorAgentSdkRunnerError>;
}>;
export declare class CursorAgentSdkRunner extends CursorAgentSdkRunner_base {
}
export interface CursorAgentSdkLoggedAgentOptions {
    readonly model?: AgentOptions["model"];
    readonly hasName?: boolean;
    readonly mode?: AgentOptions["mode"];
    readonly local?: {
        readonly hasCwd?: boolean;
        readonly autoReview?: boolean;
        readonly settingSources?: AgentOptions["local"] extends infer Local ? Local extends {
            readonly settingSources?: infer Sources;
        } ? Sources : never : never;
        readonly sandboxEnabled?: boolean;
        readonly enableAgentRetries?: boolean;
        readonly hasCustomTools?: boolean;
    };
    readonly agents?: ReadonlyArray<string>;
}
export interface CursorAgentSdkLoggedSendOptions {
    readonly model?: SendOptions["model"];
    readonly mode?: SendOptions["mode"];
    readonly local?: {
        readonly force?: boolean;
        readonly hasCustomTools?: boolean;
    };
    readonly idempotencyKey?: string;
}
export type CursorAgentSdkProtocolLogEvent = {
    readonly direction: "outgoing";
    readonly stage: "decoded";
    readonly payload: {
        readonly type: "agent.open";
        readonly operation: CursorAgentSdkOpenInput["operation"];
        readonly agentId?: string;
        readonly options: CursorAgentSdkLoggedAgentOptions;
    };
} | {
    readonly direction: "incoming";
    readonly stage: "decoded";
    readonly payload: {
        readonly type: "agent.opened";
        readonly agentId: string;
    };
} | {
    readonly direction: "outgoing";
    readonly stage: "decoded";
    readonly payload: {
        readonly type: "run.start";
        readonly message: string | SDKUserMessage;
        readonly options: CursorAgentSdkLoggedSendOptions;
    };
} | {
    readonly direction: "incoming";
    readonly stage: "decoded";
    readonly payload: {
        readonly type: "run.started";
        readonly runId: string;
        readonly agentId: string;
    };
} | {
    readonly direction: "incoming";
    readonly stage: "decoded";
    readonly payload: {
        readonly type: "interaction.update";
        readonly runId: string;
        readonly update: InteractionUpdate;
    };
} | {
    readonly direction: "incoming";
    readonly stage: "decoded";
    readonly payload: {
        readonly type: "run.completed";
        readonly result: RunResult;
    };
} | {
    readonly direction: "outgoing";
    readonly stage: "decoded";
    readonly payload: {
        readonly type: "run.cancel";
        readonly runId: string;
    };
} | {
    readonly direction: "outgoing";
    readonly stage: "decoded";
    readonly payload: {
        readonly type: "agent.messages.list";
        readonly agentId: string;
    };
} | {
    readonly direction: "incoming";
    readonly stage: "decoded";
    readonly payload: {
        readonly type: "agent.messages";
        readonly agentId: string;
        readonly messages: ReadonlyArray<AgentMessage>;
    };
} | {
    readonly direction: "outgoing";
    readonly stage: "decoded";
    readonly payload: {
        readonly type: "agent.close";
        readonly agentId: string;
    };
};
export type CursorAgentSdkProtocolLogger = (event: CursorAgentSdkProtocolLogEvent) => Effect.Effect<void>;
/** @throws {never} */
export declare function isCursorCancellationError(cause: unknown): boolean;
/** @throws {never} */
export declare function loggedCursorAgentOptions(options: AgentOptions): CursorAgentSdkLoggedAgentOptions;
/** @throws {never} */
export declare function loggedCursorSendOptions(options: Omit<SendOptions, "onDelta"> | undefined): CursorAgentSdkLoggedSendOptions;
export declare const makeCursorAgentSdkRunner: (protocolLoggerFor: 
/** @throws {never} */
(input: CursorAgentSdkOpenInput) => CursorAgentSdkProtocolLogger | undefined) => Effect.Effect<{
    readonly open: (input: CursorAgentSdkOpenInput) => Effect.Effect<CursorAgentSdkSession, CursorAgentSdkRunnerError>;
    readonly assertComplete: Effect.Effect<void, CursorAgentSdkRunnerError>;
}, never, CursorSdk.CursorSdk>;
export declare const layer: Layer.Layer<CursorAgentSdkRunner, never, CursorSdk.CursorSdk | ProviderEventLoggers.ProviderEventLoggers>;
export {};
