import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import * as Schema from "effect/Schema";
import { Command } from "effect/cli";
import * as ChildProcessSpawner from "effect/process/ChildProcessSpawner";
declare const BrowserSetupStepError_base: Schema.Class<BrowserSetupStepError, Schema.TaggedStruct<"BrowserSetupStepError", {
    readonly step: Schema.String;
    readonly detail: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class BrowserSetupStepError extends BrowserSetupStepError_base {
    get message(): string;
}
export declare const browserCommand: Command.Command<"browser", {}, {}, BrowserSetupStepError, ChildProcessSpawner.ChildProcessSpawner | FileSystem.FileSystem | Path.Path>;
export {};
