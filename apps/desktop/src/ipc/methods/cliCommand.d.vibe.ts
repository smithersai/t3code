import * as Schema from "effect/Schema";
import * as DesktopCliCommand from "../../app/DesktopCliCommand.ts";
export declare const getCliCommandState: import("../DesktopIpc.ts").DesktopIpcMethod<Schema.SchemaError, DesktopCliCommand.DesktopCliCommand>;
export declare const installCliCommand: import("../DesktopIpc.ts").DesktopIpcMethod<DesktopCliCommand.DesktopCliCommandError | Schema.SchemaError, DesktopCliCommand.DesktopCliCommand>;
export declare const uninstallCliCommand: import("../DesktopIpc.ts").DesktopIpcMethod<DesktopCliCommand.DesktopCliCommandError | Schema.SchemaError, DesktopCliCommand.DesktopCliCommand>;
