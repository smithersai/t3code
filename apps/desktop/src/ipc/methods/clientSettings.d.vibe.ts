import * as Schema from "effect/Schema";
import * as DesktopClientSettings from "../../settings/DesktopClientSettings.ts";
import * as DesktopSnapShot from "../../snapShot/DesktopSnapShot.ts";
import * as DesktopIpc from "../DesktopIpc.vibe";
export declare const getClientSettings: DesktopIpc.DesktopIpcMethod<DesktopClientSettings.DesktopClientSettingsReadError | Schema.SchemaError, DesktopClientSettings.DesktopClientSettings>;
export declare const setClientSettings: DesktopIpc.DesktopIpcMethod<DesktopClientSettings.DesktopClientSettingsWriteError | Schema.SchemaError, DesktopClientSettings.DesktopClientSettings | DesktopSnapShot.DesktopSnapShot>;
