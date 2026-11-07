import * as Schema from "effect/Schema";
import * as DesktopLifecycle from "../../app/DesktopLifecycle.vibe";
import * as DesktopAppSettings from "../../settings/DesktopAppSettings.vibe";
import * as DesktopWslBackend from "../../wsl/DesktopWslBackend.vibe";
import * as DesktopWslEnvironment from "../../wsl/DesktopWslEnvironment.ts";
export declare const getWslState: import("../DesktopIpc.vibe").DesktopIpcMethod<Schema.SchemaError, DesktopAppSettings.DesktopAppSettings | DesktopWslBackend.DesktopWslBackend | DesktopWslEnvironment.DesktopWslEnvironment>;
export declare const setWslBackendEnabled: import("../DesktopIpc.vibe").DesktopIpcMethod<DesktopAppSettings.DesktopSettingsWriteError | Schema.SchemaError, DesktopAppSettings.DesktopAppSettings | DesktopLifecycle.DesktopLifecycle | DesktopWslBackend.DesktopWslBackend | DesktopWslEnvironment.DesktopWslEnvironment | DesktopLifecycle.DesktopLifecycleRuntimeServices>;
export declare const setWslDistro: import("../DesktopIpc.vibe").DesktopIpcMethod<DesktopAppSettings.DesktopSettingsWriteError | Schema.SchemaError, DesktopAppSettings.DesktopAppSettings | DesktopLifecycle.DesktopLifecycle | DesktopWslBackend.DesktopWslBackend | DesktopWslEnvironment.DesktopWslEnvironment | DesktopLifecycle.DesktopLifecycleRuntimeServices>;
export declare const setWslOnly: import("../DesktopIpc.vibe").DesktopIpcMethod<DesktopAppSettings.DesktopSettingsWriteError | Schema.SchemaError, DesktopAppSettings.DesktopAppSettings | DesktopLifecycle.DesktopLifecycle | DesktopWslBackend.DesktopWslBackend | DesktopWslEnvironment.DesktopWslEnvironment | DesktopLifecycle.DesktopLifecycleRuntimeServices>;
