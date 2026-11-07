import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Schema from "effect/Schema";
import * as DesktopEnvironment from "./DesktopEnvironment.vibe";
export interface DesktopIconPaths {
    readonly ico: Option.Option<string>;
    readonly icns: Option.Option<string>;
    readonly png: Option.Option<string>;
}
declare const DesktopAssetProbeError_base: Schema.Class<DesktopAssetProbeError, Schema.TaggedStruct<"DesktopAssetProbeError", {
    readonly fileName: Schema.String;
    readonly candidatePath: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopAssetProbeError extends DesktopAssetProbeError_base {
    get message(): string;
}
declare const DesktopAssets_base: Context.ServiceClass<DesktopAssets, "@t3tools/desktop/app/DesktopAssets", {
    readonly iconPaths: Effect.Effect<DesktopIconPaths>;
    readonly resolveResourcePath: (fileName: string) => Effect.Effect<Option.Option<string>, DesktopAssetProbeError>;
}>;
export declare class DesktopAssets extends DesktopAssets_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly iconPaths: Effect.Effect<DesktopIconPaths>;
    readonly resolveResourcePath: (fileName: string) => Effect.Effect<Option.Option<string>, DesktopAssetProbeError>;
}, DesktopAssetProbeError, DesktopEnvironment.DesktopEnvironment | FileSystem.FileSystem>;
export declare const layer: Layer.Layer<DesktopAssets, DesktopAssetProbeError, DesktopEnvironment.DesktopEnvironment | FileSystem.FileSystem>;
export {};
