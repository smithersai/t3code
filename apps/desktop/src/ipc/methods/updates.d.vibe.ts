import * as Schema from "effect/Schema";
import * as DesktopUpdates from "../../updates/DesktopUpdates.js";
import * as DesktopIpc from "../DesktopIpc.js";
export declare const getUpdateState: DesktopIpc.DesktopIpcMethod<Schema.SchemaError, DesktopUpdates.DesktopUpdates>;
export declare const setUpdateChannel: DesktopIpc.DesktopIpcMethod<DesktopUpdates.DesktopUpdateActionInProgressError | DesktopUpdates.DesktopUpdateChannelPersistenceError | Schema.SchemaError, DesktopUpdates.DesktopUpdates>;
export declare const downloadUpdate: DesktopIpc.DesktopIpcMethod<Schema.SchemaError, DesktopUpdates.DesktopUpdates>;
export declare const installUpdate: DesktopIpc.DesktopIpcMethod<Schema.SchemaError, DesktopUpdates.DesktopUpdates>;
export declare const checkForUpdate: DesktopIpc.DesktopIpcMethod<Schema.SchemaError, DesktopUpdates.DesktopUpdates>;
