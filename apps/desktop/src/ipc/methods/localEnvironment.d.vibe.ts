import * as Schema from "effect/Schema";
import * as DesktopLifecycle from "../../app/DesktopLifecycle.vibe";
import * as DesktopAppSettings from "../../settings/DesktopAppSettings.vibe";
export declare const getLocalEnvironmentEnabled: import("../DesktopIpc.vibe").DesktopSyncIpcMethod<Schema.SchemaError, DesktopAppSettings.DesktopAppSettings>;
export declare const setLocalEnvironmentEnabled: import("../DesktopIpc.vibe").DesktopIpcMethod<DesktopAppSettings.DesktopSettingsWriteError | Schema.SchemaError, DesktopAppSettings.DesktopAppSettings | DesktopLifecycle.DesktopLifecycle | DesktopLifecycle.DesktopLifecycleRuntimeServices>;
