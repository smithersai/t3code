import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import * as Schema from "effect/Schema";
import { ChildProcessSpawner } from "effect/process";
export { assertLinuxArm64PageCompatibility } from "./linux-arm64-sea.vibe.platform.js";
declare const LinuxArm64SeaError_base: Schema.Class<LinuxArm64SeaError, Schema.TaggedStruct<"LinuxArm64SeaError", {
    readonly message: Schema.String;
}>, import("effect/Cause").YieldableError>;
declare class LinuxArm64SeaError extends LinuxArm64SeaError_base {
}
export declare const injectLinuxArm64Sea: (input: {
    bundlePath: string;
    outputPath: string;
    nodeVersion: string;
    verbose: boolean;
}) => Effect.Effect<undefined, LinuxArm64SeaError | import("effect/PlatformError").PlatformError | Schema.SchemaError, ChildProcessSpawner.ChildProcessSpawner | FileSystem.FileSystem | Path.Path>;
