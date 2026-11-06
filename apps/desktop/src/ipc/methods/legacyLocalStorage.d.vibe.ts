import * as Schema from "effect/Schema";
import * as DesktopLegacyLocalStorage from "../../app/DesktopLegacyLocalStorage.ts";
export declare const takeLegacyLocalStorage: import("../DesktopIpc.vibe").DesktopSyncIpcMethod<Schema.SchemaError, DesktopLegacyLocalStorage.DesktopLegacyLocalStorage>;
export declare const completeLegacyLocalStorage: import("../DesktopIpc.vibe").DesktopIpcMethod<Schema.SchemaError, DesktopLegacyLocalStorage.DesktopLegacyLocalStorage>;
