import * as Cause from "effect/Cause";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as EffectOutbox from "./EffectOutbox.ts";
import * as EventSink from "./EventSink.ts";
import * as IdAllocator from "@t3tools/provider-core/server/IdAllocator";
import * as ProjectionStore from "./ProjectionStore.ts";
import * as ServerSettings from "../serverSettings.ts";
declare const ProviderRuntimeRecoveryError_base: Schema.Class<ProviderRuntimeRecoveryError, Schema.TaggedStruct<"ProviderRuntimeRecoveryError", {
    readonly operation: Schema.Literals<readonly ["read-projections", "reconcile", "drain-outbox"]>;
    readonly threadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
    readonly cause: Schema.Defect;
}>, Cause.YieldableError>;
export declare class ProviderRuntimeRecoveryError extends ProviderRuntimeRecoveryError_base {
    get message(): string;
}
export interface ProviderRuntimeRecoverySummary {
    readonly terminalizedRuns: number;
    readonly stoppedSessions: number;
    readonly closedRequests: number;
    readonly retiredEffects: number;
    readonly requeuedEffects: number;
}
export interface ProviderRuntimeReconciliationSummary {
    readonly terminalizedRuns: number;
    readonly stoppedSessions: number;
    readonly closedRequests: number;
    readonly retiredEffects: number;
    readonly requeuedEffects: number;
}
declare const ProviderRuntimeRecoveryService_base: Context.ServiceClass<ProviderRuntimeRecoveryService, "t3/orchestration-v2/ProviderRuntimeRecoveryService", {
    readonly reconcile: (trigger: "startup" | "shutdown") => Effect.Effect<ProviderRuntimeReconciliationSummary, ProviderRuntimeRecoveryError>;
    readonly prepareForShutdown: Effect.Effect<void, ProviderRuntimeRecoveryError>;
    readonly recover: Effect.Effect<ProviderRuntimeRecoverySummary, ProviderRuntimeRecoveryError>;
}>;
export declare class ProviderRuntimeRecoveryService extends ProviderRuntimeRecoveryService_base {
}
export declare const make: Effect.Effect<{
    readonly reconcile: (trigger: "startup" | "shutdown") => Effect.Effect<ProviderRuntimeReconciliationSummary, ProviderRuntimeRecoveryError>;
    readonly prepareForShutdown: Effect.Effect<void, ProviderRuntimeRecoveryError>;
    readonly recover: Effect.Effect<ProviderRuntimeRecoverySummary, ProviderRuntimeRecoveryError>;
}, never, EffectOutbox.EffectOutboxV2 | EventSink.EventSinkV2 | IdAllocator.IdAllocatorV2 | ProjectionStore.ProjectionStoreV2 | ServerSettings.ServerSettingsService>;
export declare const layer: Layer.Layer<ProviderRuntimeRecoveryService, never, EffectOutbox.EffectOutboxV2 | EventSink.EventSinkV2 | IdAllocator.IdAllocatorV2 | ProjectionStore.ProjectionStoreV2 | ServerSettings.ServerSettingsService>;
export {};
