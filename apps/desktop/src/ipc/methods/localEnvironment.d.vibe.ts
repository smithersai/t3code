import * as Schema from "effect/Schema";
import * as DesktopLifecycle from "../../app/DesktopLifecycle.ts";
import * as DesktopAppSettings from "../../settings/DesktopAppSettings.ts";
export declare const getLocalEnvironmentEnabled: import("../DesktopIpc.ts").DesktopSyncIpcMethod<Schema.SchemaError, DesktopAppSettings.DesktopAppSettings>;
export declare const setLocalEnvironmentEnabled: import("../DesktopIpc.ts").DesktopIpcMethod<DesktopAppSettings.DesktopSettingsWriteError | Schema.SchemaError, DesktopAppSettings.DesktopAppSettings | DesktopLifecycle.DesktopLifecycle | DesktopLifecycle.DesktopLifecycleRuntimeServices>;
