import * as Schema from "effect/Schema";
import * as DesktopClientSettings from "../../settings/DesktopClientSettings.js";
import * as DesktopSnapShot from "../../snapShot/DesktopSnapShot.js";
import * as DesktopIpc from "../DesktopIpc.js";
export declare const getClientSettings: DesktopIpc.DesktopIpcMethod<DesktopClientSettings.DesktopClientSettingsReadError | Schema.SchemaError, DesktopClientSettings.DesktopClientSettings>;
export declare const setClientSettings: DesktopIpc.DesktopIpcMethod<DesktopClientSettings.DesktopClientSettingsWriteError | Schema.SchemaError, DesktopClientSettings.DesktopClientSettings | DesktopSnapShot.DesktopSnapShot>;
