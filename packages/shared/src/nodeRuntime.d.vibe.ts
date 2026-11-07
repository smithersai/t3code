import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import * as Schema from "effect/Schema";
declare const NodeRuntimeFeature: Schema.Literals<readonly ["Local device support", "Device automation", "Antigravity", "Antigravity sign-in"]>;
/** @throws {never} */
export declare const nodeRuntimeUnavailableMessage: (feature: typeof NodeRuntimeFeature.Type) => string;
declare const NodeRuntimeUnavailableError_base: Schema.Class<NodeRuntimeUnavailableError, Schema.TaggedStruct<"NodeRuntimeUnavailableError", {
    readonly feature: Schema.Literals<readonly ["Local device support", "Device automation", "Antigravity", "Antigravity sign-in"]>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class NodeRuntimeUnavailableError extends NodeRuntimeUnavailableError_base {
    get message(): string;
}
export interface SelfInvocation {
    readonly command: string;
    /** Absolute script entrypoint; undefined for packaged binaries, which dispatch subcommands from argv[2]. */
    readonly entrypoint: string | undefined;
}
/** Packaged binaries repeat the binary at argv[1]; callers must not assemble execPath/argv[1] themselves. */
export declare const resolveSelfInvocation: () => Effect.Effect<{
    command: string;
    entrypoint: string | undefined;
}, never, Path.Path>;
/** @throws {never} */
export declare const selfInvocationArgs: (invocation: SelfInvocation, args: ReadonlyArray<string>) => ReadonlyArray<string>;
export declare const resolveNodeExecutable: (feature: "Antigravity" | "Antigravity sign-in" | "Device automation" | "Local device support", environment?: NodeJS.ProcessEnv | undefined) => Effect.Effect<string, NodeRuntimeUnavailableError, FileSystem.FileSystem | Path.Path>;
export {};
