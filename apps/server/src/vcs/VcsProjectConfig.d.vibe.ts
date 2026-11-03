import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Path from "effect/Path";
import * as Schema from "effect/Schema";
import { type VcsDriverKind as VcsDriverKindType } from "@t3tools/contracts";
export interface VcsProjectConfigResolveInput {
    readonly cwd: string;
    readonly requestedKind?: VcsDriverKindType | "auto";
}
declare const VcsProjectConfigError_base: Schema.Class<VcsProjectConfigError, Schema.TaggedStruct<"VcsProjectConfigError", {
    readonly operation: Schema.Literals<readonly ["inspect", "read", "decode"]>;
    readonly cwd: Schema.String;
    readonly configPath: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class VcsProjectConfigError extends VcsProjectConfigError_base {
    get message(): string;
}
declare const VcsProjectConfig_base: Context.ServiceClass<VcsProjectConfig, "t3/vcs/VcsProjectConfig", {
    readonly resolveKind: (input: VcsProjectConfigResolveInput) => Effect.Effect<VcsDriverKindType | "auto">;
}>;
export declare class VcsProjectConfig extends VcsProjectConfig_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly resolveKind: (input: VcsProjectConfigResolveInput) => Effect.Effect<VcsDriverKindType | "auto">;
}, never, FileSystem.FileSystem | Path.Path>;
export declare const layer: Layer.Layer<VcsProjectConfig, never, FileSystem.FileSystem | Path.Path>;
export {};
