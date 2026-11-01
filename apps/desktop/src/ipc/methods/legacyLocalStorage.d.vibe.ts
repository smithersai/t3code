import * as Schema from "effect/Schema";
import * as DesktopLegacyLocalStorage from "../../app/DesktopLegacyLocalStorage.js";
export declare const takeLegacyLocalStorage: import("../DesktopIpc.js").DesktopSyncIpcMethod<Schema.SchemaError, DesktopLegacyLocalStorage.DesktopLegacyLocalStorage>;
export declare const completeLegacyLocalStorage: import("../DesktopIpc.js").DesktopIpcMethod<Schema.SchemaError, DesktopLegacyLocalStorage.DesktopLegacyLocalStorage>;
