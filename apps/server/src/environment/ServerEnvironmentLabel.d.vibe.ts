import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Schema from "effect/Schema";
import * as ProcessRunner from "../processRunner.ts";
interface ResolveServerEnvironmentLabelInput {
    readonly cwdBaseName: string;
}
declare const ServerEnvironmentLabelFileError_base: Schema.Class<ServerEnvironmentLabelFileError, Schema.TaggedStruct<"ServerEnvironmentLabelFileError", {
    readonly operation: Schema.Literals<readonly ["inspect", "read"]>;
    readonly path: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ServerEnvironmentLabelFileError extends ServerEnvironmentLabelFileError_base {
    get message(): string;
}
declare const ServerEnvironmentLabelCommandError_base: Schema.Class<ServerEnvironmentLabelCommandError, Schema.TaggedStruct<"ServerEnvironmentLabelCommandError", {
    readonly probe: Schema.Literals<readonly ["macos-computer-name", "linux-pretty-hostname"]>;
    readonly executable: Schema.String;
    readonly argumentCount: Schema.Number;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ServerEnvironmentLabelCommandError extends ServerEnvironmentLabelCommandError_base {
    get message(): string;
}
export declare const resolveServerEnvironmentLabel: (input: ResolveServerEnvironmentLabelInput) => Effect.Effect<string, never, FileSystem.FileSystem | ProcessRunner.ProcessRunner>;
export {};
