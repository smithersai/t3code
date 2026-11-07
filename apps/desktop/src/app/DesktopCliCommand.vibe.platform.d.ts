import type { DesktopCliCommandState } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Schema from "effect/Schema";
import * as ChildProcessSpawner from "effect/process/ChildProcessSpawner";
import * as DesktopEnvironment from "./DesktopEnvironment.vibe";
declare const DesktopCliCommandError_base: Schema.Class<DesktopCliCommandError, Schema.TaggedStruct<"DesktopCliCommandError", {
    readonly message: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopCliCommandError extends DesktopCliCommandError_base {
}
declare const DesktopCliCommand_base: Context.ServiceClass<DesktopCliCommand, "@t3tools/desktop/app/DesktopCliCommand", {
    readonly state: Effect.Effect<DesktopCliCommandState>;
    readonly install: Effect.Effect<DesktopCliCommandState, DesktopCliCommandError>;
    readonly uninstall: Effect.Effect<DesktopCliCommandState, DesktopCliCommandError>;
}>;
export declare class DesktopCliCommand extends DesktopCliCommand_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly state: Effect.Effect<DesktopCliCommandState>;
    readonly install: Effect.Effect<DesktopCliCommandState, DesktopCliCommandError>;
    readonly uninstall: Effect.Effect<DesktopCliCommandState, DesktopCliCommandError>;
}, never, ChildProcessSpawner.ChildProcessSpawner | DesktopEnvironment.DesktopEnvironment | FileSystem.FileSystem>;
export {};
