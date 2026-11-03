import { PreviewTabId, type PreviewAutomationError, type PreviewAutomationOperation, type PreviewAutomationHost, type PreviewAutomationHostFocus, type PreviewAutomationResponse, type PreviewAutomationStreamEvent } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Stream from "effect/Stream";
import * as McpInvocationContext from "./McpInvocationContext.vibe";
export interface PreviewAutomationInvokeInput {
    readonly scope: McpInvocationContext.McpThreadInvocationScope;
    readonly operation: PreviewAutomationOperation;
    readonly input: unknown;
    readonly tabId?: PreviewTabId;
    readonly timeoutMs?: number;
    /** Background metadata reads must not change the agent's current tab. */
    readonly updateCurrentTab?: boolean;
    readonly onTargetTab?: (tabId: PreviewTabId | undefined) => void;
}
export interface PreviewAutomationConnectOptions {
    readonly preferred?: boolean;
}
declare const PreviewAutomationBroker_base: Context.ServiceClass<PreviewAutomationBroker, "t3/mcp/PreviewAutomationBroker", {
    readonly connect: (host: PreviewAutomationHost, options?: PreviewAutomationConnectOptions) => Effect.Effect<Stream.Stream<PreviewAutomationStreamEvent>>;
    readonly focusHost: (host: PreviewAutomationHostFocus) => Effect.Effect<void>;
    readonly respond: (response: PreviewAutomationResponse) => Effect.Effect<void, PreviewAutomationError>;
    readonly invoke: <A = unknown>(request: PreviewAutomationInvokeInput) => Effect.Effect<A, PreviewAutomationError>;
}>;
export declare class PreviewAutomationBroker extends PreviewAutomationBroker_base {
}
export declare const make: Effect.Effect<{
    readonly connect: (host: PreviewAutomationHost, options?: PreviewAutomationConnectOptions) => Effect.Effect<Stream.Stream<PreviewAutomationStreamEvent>>;
    readonly focusHost: (host: PreviewAutomationHostFocus) => Effect.Effect<void>;
    readonly respond: (response: PreviewAutomationResponse) => Effect.Effect<void, PreviewAutomationError>;
    readonly invoke: <A = unknown>(request: PreviewAutomationInvokeInput) => Effect.Effect<A, PreviewAutomationError>;
}, never, Crypto.Crypto>;
export declare const layer: Layer.Layer<PreviewAutomationBroker, never, Crypto.Crypto>;
export {};
