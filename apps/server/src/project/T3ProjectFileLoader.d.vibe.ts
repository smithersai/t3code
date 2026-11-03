import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Path from "effect/Path";
import * as Schema from "effect/Schema";
import { type T3ProjectFile } from "@t3tools/contracts";
declare const T3ProjectFileLoadError_base: Schema.Class<T3ProjectFileLoadError, Schema.TaggedStruct<"T3ProjectFileLoadError", {
    readonly operation: Schema.Literals<readonly ["read", "decode"]>;
    readonly workspaceRoot: Schema.String;
    readonly filePath: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class T3ProjectFileLoadError extends T3ProjectFileLoadError_base {
    get message(): string;
}
declare const T3ProjectFileLoader_base: Context.ServiceClass<T3ProjectFileLoader, "t3/project/T3ProjectFileLoader", {
    /** Never fails; missing/unreadable/invalid files return none, with warnings for invalid files. */
    readonly load: (workspaceRoot: string) => Effect.Effect<Option.Option<T3ProjectFile>>;
}>;
export declare class T3ProjectFileLoader extends T3ProjectFileLoader_base {
}
/** @public */
export declare const make: Effect.Effect<{
    /** Never fails; missing/unreadable/invalid files return none, with warnings for invalid files. */
    readonly load: (workspaceRoot: string) => Effect.Effect<Option.Option<T3ProjectFile>>;
}, never, FileSystem.FileSystem | Path.Path>;
export declare const layer: Layer.Layer<T3ProjectFileLoader, never, FileSystem.FileSystem | Path.Path>;
export {};
