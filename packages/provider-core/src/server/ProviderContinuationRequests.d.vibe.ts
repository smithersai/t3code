import { MessageId, type OrchestrationV2Notification, ProviderDriverKind, ProviderThreadId, RunId, ThreadId } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
export interface ProviderContinuationRequest {
    readonly threadId: ThreadId;
    readonly providerThreadId: ProviderThreadId;
    readonly driver: ProviderDriverKind;
    readonly detail: string | null;
    readonly notification?: OrchestrationV2Notification;
    readonly delegatedCompletion?: {
        readonly parentRunId: RunId;
        readonly generation: number;
        readonly messageId: MessageId;
    };
    /** adapter_buffered (default) ingests existing CLI output; message_text delivers app-owned wake text. */
    readonly delivery?: "adapter_buffered" | "message_text";
    readonly messageId?: MessageId;
    readonly dispatchIfCurrent?: <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<Option.Option<A>, E, R>;
    readonly clearIfCurrent?: () => Effect.Effect<void>;
}
declare const ProviderContinuationRequests_base: Context.Reference<{
    readonly offer: (request: ProviderContinuationRequest) => Effect.Effect<void>;
    readonly take: Effect.Effect<ProviderContinuationRequest>;
}>;
/** The default drops requests; share the live layer with the worker that drains them. */
export declare class ProviderContinuationRequests extends ProviderContinuationRequests_base {
}
export declare const layer: Layer.Layer<never, never, never>;
export {};
