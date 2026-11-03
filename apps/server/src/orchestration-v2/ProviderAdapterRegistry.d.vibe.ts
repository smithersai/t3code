import { ProviderInstanceId, type OrchestrationV2ProviderCapabilities, type ProviderInstanceConfigMap } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as Scope from "effect/Scope";
import * as ProviderInstanceRegistry from "../provider/ProviderInstanceRegistry.ts";
import { ProviderAdapterDriverCreateError, type AnyProviderAdapterDriver } from "@t3tools/provider-core/server/adapterDriver";
import * as ProviderAdapter from "@t3tools/provider-core/server/ProviderAdapter";
declare const ProviderAdapterRegistryLookupError_base: Schema.Class<ProviderAdapterRegistryLookupError, Schema.TaggedStruct<"ProviderAdapterRegistryLookupError", {
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
}>, import("effect/Cause").YieldableError>;
export declare class ProviderAdapterRegistryLookupError extends ProviderAdapterRegistryLookupError_base {
    get message(): string;
}
declare const ProviderAdapterRegistryMetadataError_base: Schema.Class<ProviderAdapterRegistryMetadataError, Schema.TaggedStruct<"ProviderAdapterRegistryMetadataError", {
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ProviderAdapterRegistryMetadataError extends ProviderAdapterRegistryMetadataError_base {
}
export declare const ProviderAdapterRegistryV2Error: Schema.Union<readonly [typeof ProviderAdapterRegistryLookupError, typeof ProviderAdapterRegistryMetadataError, typeof ProviderAdapterDriverCreateError]>;
export type ProviderAdapterRegistryV2Error = typeof ProviderAdapterRegistryV2Error.Type;
export interface ProviderAdapterRegistryV2Shape {
    readonly get: (instanceId: ProviderInstanceId) => Effect.Effect<ProviderAdapter.ProviderAdapterV2["Service"], ProviderAdapterRegistryV2Error>;
    readonly list: () => Effect.Effect<ReadonlyArray<ProviderInstanceId>>;
    readonly getMetadata?: (instanceId: ProviderInstanceId) => Effect.Effect<{
        readonly driver: ProviderAdapter.ProviderAdapterV2["Service"]["driver"];
        readonly continuationKey: string;
        readonly enabled: boolean;
        readonly capabilities: OrchestrationV2ProviderCapabilities;
    }, ProviderAdapterRegistryV2Error>;
}
declare const ProviderAdapterRegistryV2_base: Context.ServiceClass<ProviderAdapterRegistryV2, "t3/orchestration-v2/ProviderAdapterRegistry/ProviderAdapterRegistryV2", ProviderAdapterRegistryV2Shape>;
export declare class ProviderAdapterRegistryV2 extends ProviderAdapterRegistryV2_base {
}
export declare const layerFromProviderInstanceRegistry: Layer.Layer<ProviderAdapterRegistryV2, never, ProviderInstanceRegistry.ProviderInstanceRegistry>;
export declare const ProviderAdapterRegistryBuildError: Schema.Union<readonly [typeof ProviderAdapterDriverCreateError]>;
export type ProviderAdapterRegistryBuildError = typeof ProviderAdapterRegistryBuildError.Type;
export declare function layerFromAdapters(adapters: ReadonlyArray<ProviderAdapter.ProviderAdapterV2["Service"]>): Layer.Layer<ProviderAdapterRegistryV2>;
export declare function layerFromAdaptersEffect<R, E>(adapters: Effect.Effect<ReadonlyArray<ProviderAdapter.ProviderAdapterV2["Service"]>, E, R>): Layer.Layer<ProviderAdapterRegistryV2, E, R>;
export declare function layerSingle(adapter: ProviderAdapter.ProviderAdapterV2["Service"]): Layer.Layer<ProviderAdapterRegistryV2>;
export declare const makeRegistryFromConfigMap: <R>(input: {
    readonly drivers: ReadonlyArray<AnyProviderAdapterDriver<R>>;
    readonly configMap: ProviderInstanceConfigMap;
}) => Effect.Effect<ProviderAdapterRegistryV2Shape, ProviderAdapterRegistryBuildError, R | Scope.Scope>;
export declare function layerFromDrivers<R>(input: {
    readonly drivers: ReadonlyArray<AnyProviderAdapterDriver<R>>;
    readonly configMap: ProviderInstanceConfigMap;
}): Layer.Layer<ProviderAdapterRegistryV2, ProviderAdapterRegistryBuildError, R>;
export {};
