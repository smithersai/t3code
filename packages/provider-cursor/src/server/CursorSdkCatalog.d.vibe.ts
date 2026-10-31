import type { SDKModel, SDKUser } from "@cursor/sdk";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
export interface CursorSdkCatalogSnapshot {
    readonly user: SDKUser;
    readonly models: ReadonlyArray<SDKModel>;
}
declare const CursorSdkCatalogError_base: Schema.Class<CursorSdkCatalogError, Schema.TaggedStruct<"CursorSdkCatalogError", {
    readonly authenticationFailure: Schema.Boolean;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class CursorSdkCatalogError extends CursorSdkCatalogError_base {
    get message(): string;
    get planRequired(): boolean;
}
declare const CursorSdkCatalog_base: Context.ServiceClass<CursorSdkCatalog, "@t3tools/provider-cursor/server/CursorSdkCatalog", {
    readonly read: (apiKey: string) => Effect.Effect<CursorSdkCatalogSnapshot, CursorSdkCatalogError>;
}>;
export declare class CursorSdkCatalog extends CursorSdkCatalog_base {
}
export interface CursorSdkCatalogProbes {
    readonly readUser: (apiKey: string) => Effect.Effect<SDKUser, CursorSdkCatalogError>;
    readonly readModels: (apiKey: string) => Effect.Effect<ReadonlyArray<SDKModel>, CursorSdkCatalogError>;
}
export declare const makeCursorSdkCatalog: (probes?: CursorSdkCatalogProbes | undefined) => Effect.Effect<{
    readonly read: (apiKey: string) => Effect.Effect<CursorSdkCatalogSnapshot, CursorSdkCatalogError>;
}, never, never>;
export declare const layer: Layer.Layer<CursorSdkCatalog, never, never>;
export declare function layerTest(read: CursorSdkCatalog["Service"]["read"]): Layer.Layer<CursorSdkCatalog>;
export {};
