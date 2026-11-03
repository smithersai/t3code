import { ProviderApprovalDecision, ProviderSessionId, ProviderUserInputAnswers, RuntimeRequestId, ThreadId } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as ProjectionStore from "./ProjectionStore.ts";
import * as ProviderSessionManager from "./ProviderSessionManager.ts";
declare const RuntimeRequestResponseExecutionError_base: Schema.Class<RuntimeRequestResponseExecutionError, Schema.TaggedStruct<"RuntimeRequestResponseExecutionError", {
    readonly reason: Schema.Literals<readonly ["request-missing", "request-not-ready", "request-not-resumable", "provider-session-not-active", "unexpected-failure"]>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly providerSessionId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderSessionId">;
    readonly requestId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "RuntimeRequestId">;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class RuntimeRequestResponseExecutionError extends RuntimeRequestResponseExecutionError_base {
    get message(): string;
}
export interface RuntimeRequestServiceV2Shape {
    readonly respond: (input: {
        readonly threadId: ThreadId;
        readonly providerSessionId: ProviderSessionId;
        readonly requestId: RuntimeRequestId;
        readonly decision?: ProviderApprovalDecision;
        readonly feedback?: string;
        readonly answers?: ProviderUserInputAnswers;
    }) => Effect.Effect<void, RuntimeRequestResponseExecutionError>;
}
declare const RuntimeRequestServiceV2_base: Context.ServiceClass<RuntimeRequestServiceV2, "t3/orchestration-v2/RuntimeRequestService/RuntimeRequestServiceV2", RuntimeRequestServiceV2Shape>;
export declare class RuntimeRequestServiceV2 extends RuntimeRequestServiceV2_base {
}
export declare const layer: Layer.Layer<RuntimeRequestServiceV2, never, ProjectionStore.ProjectionStoreV2 | ProviderSessionManager.ProviderSessionManagerV2>;
export {};
