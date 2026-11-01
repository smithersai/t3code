import * as Schema from "effect/Schema";
import * as DesktopCliCommand from "../../app/DesktopCliCommand.js";
export declare const getCliCommandState: import("../DesktopIpc.js").DesktopIpcMethod<Schema.SchemaError, DesktopCliCommand.DesktopCliCommand>;
export declare const installCliCommand: import("../DesktopIpc.js").DesktopIpcMethod<DesktopCliCommand.DesktopCliCommandError | Schema.SchemaError, DesktopCliCommand.DesktopCliCommand>;
export declare const uninstallCliCommand: import("../DesktopIpc.js").DesktopIpcMethod<DesktopCliCommand.DesktopCliCommandError | Schema.SchemaError, DesktopCliCommand.DesktopCliCommand>;
