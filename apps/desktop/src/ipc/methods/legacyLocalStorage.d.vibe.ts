import * as Schema from "effect/Schema";
import * as DesktopLegacyLocalStorage from "../../app/DesktopLegacyLocalStorage.ts";
export declare const takeLegacyLocalStorage: import("../DesktopIpc.ts").DesktopSyncIpcMethod<Schema.SchemaError, DesktopLegacyLocalStorage.DesktopLegacyLocalStorage>;
export declare const completeLegacyLocalStorage: import("../DesktopIpc.ts").DesktopIpcMethod<Schema.SchemaError, DesktopLegacyLocalStorage.DesktopLegacyLocalStorage>;
