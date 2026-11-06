import * as Schema from "effect/Schema";
import * as DesktopCliCommand from "../../app/DesktopCliCommand.ts";
export declare const getCliCommandState: import("../DesktopIpc.vibe").DesktopIpcMethod<Schema.SchemaError, DesktopCliCommand.DesktopCliCommand>;
export declare const installCliCommand: import("../DesktopIpc.vibe").DesktopIpcMethod<DesktopCliCommand.DesktopCliCommandError | Schema.SchemaError, DesktopCliCommand.DesktopCliCommand>;
export declare const uninstallCliCommand: import("../DesktopIpc.vibe").DesktopIpcMethod<DesktopCliCommand.DesktopCliCommandError | Schema.SchemaError, DesktopCliCommand.DesktopCliCommand>;
