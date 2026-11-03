import { ModelSelection, OrchestrationV2AppThread } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as ProviderInstanceRegistry from "../provider/ProviderInstanceRegistry.ts";
import * as ProviderAdapter from "@t3tools/provider-core/server/ProviderAdapter";
import * as ProjectStore from "./ProjectStore.ts";
declare const RuntimePolicyResolveError_base: Schema.Class<RuntimePolicyResolveError, Schema.TaggedStruct<"RuntimePolicyResolveError", {
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class RuntimePolicyResolveError extends RuntimePolicyResolveError_base {
    get message(): string;
}
export declare const RuntimePolicyV2Error: Schema.Union<readonly [typeof RuntimePolicyResolveError]>;
export type RuntimePolicyV2Error = typeof RuntimePolicyV2Error.Type;
export declare const RuntimePolicyV2Override: Schema.Struct<{
    readonly cwd: Schema.optional<Schema.String>;
    readonly approvalPolicy: Schema.optional<Schema.Unknown>;
    readonly sandboxPolicy: Schema.optional<Schema.Unknown>;
    readonly reasoningEffort: Schema.optional<Schema.String>;
}>;
export type RuntimePolicyV2Override = typeof RuntimePolicyV2Override.Type;
export interface RuntimePolicyV2Shape {
    readonly resolve: (input: {
        readonly thread: OrchestrationV2AppThread;
        readonly modelSelection: ModelSelection;
    }) => Effect.Effect<ProviderAdapter.ProviderAdapterV2RuntimePolicy, RuntimePolicyV2Error>;
}
declare const RuntimePolicyV2_base: Context.ServiceClass<RuntimePolicyV2, "t3/orchestration-v2/RuntimePolicy/RuntimePolicyV2", RuntimePolicyV2Shape>;
export declare class RuntimePolicyV2 extends RuntimePolicyV2_base {
}
export declare const layer: Layer.Layer<RuntimePolicyV2>;
export declare const layerFromProjectStore: Layer.Layer<RuntimePolicyV2, never, ProjectStore.ProjectStoreV2 | ProviderInstanceRegistry.ProviderInstanceRegistry>;
export declare function layerWithOverride(override: RuntimePolicyV2Override): Layer.Layer<RuntimePolicyV2, never, RuntimePolicyV2>;
export {};
