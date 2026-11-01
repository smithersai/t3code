import * as Schema from "effect/Schema";
import * as DesktopLifecycle from "../../app/DesktopLifecycle.js";
import * as DesktopAppSettings from "../../settings/DesktopAppSettings.js";
export declare const getLocalEnvironmentEnabled: import("../DesktopIpc.js").DesktopSyncIpcMethod<Schema.SchemaError, DesktopAppSettings.DesktopAppSettings>;
export declare const setLocalEnvironmentEnabled: import("../DesktopIpc.js").DesktopIpcMethod<DesktopAppSettings.DesktopSettingsWriteError | Schema.SchemaError, DesktopAppSettings.DesktopAppSettings | DesktopLifecycle.DesktopLifecycle | DesktopLifecycle.DesktopLifecycleRuntimeServices>;
