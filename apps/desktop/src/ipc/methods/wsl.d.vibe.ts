import * as Schema from "effect/Schema";
import * as DesktopLifecycle from "../../app/DesktopLifecycle.ts";
import * as DesktopAppSettings from "../../settings/DesktopAppSettings.ts";
import * as DesktopWslBackend from "../../wsl/DesktopWslBackend.ts";
import * as DesktopWslEnvironment from "../../wsl/DesktopWslEnvironment.ts";
export declare const getWslState: import("../DesktopIpc.ts").DesktopIpcMethod<Schema.SchemaError, DesktopAppSettings.DesktopAppSettings | DesktopWslBackend.DesktopWslBackend | DesktopWslEnvironment.DesktopWslEnvironment>;
export declare const setWslBackendEnabled: import("../DesktopIpc.ts").DesktopIpcMethod<DesktopAppSettings.DesktopSettingsWriteError | Schema.SchemaError, DesktopAppSettings.DesktopAppSettings | DesktopLifecycle.DesktopLifecycle | DesktopWslBackend.DesktopWslBackend | DesktopWslEnvironment.DesktopWslEnvironment | DesktopLifecycle.DesktopLifecycleRuntimeServices>;
export declare const setWslDistro: import("../DesktopIpc.ts").DesktopIpcMethod<DesktopAppSettings.DesktopSettingsWriteError | Schema.SchemaError, DesktopAppSettings.DesktopAppSettings | DesktopLifecycle.DesktopLifecycle | DesktopWslBackend.DesktopWslBackend | DesktopWslEnvironment.DesktopWslEnvironment | DesktopLifecycle.DesktopLifecycleRuntimeServices>;
export declare const setWslOnly: import("../DesktopIpc.ts").DesktopIpcMethod<DesktopAppSettings.DesktopSettingsWriteError | Schema.SchemaError, DesktopAppSettings.DesktopAppSettings | DesktopLifecycle.DesktopLifecycle | DesktopWslBackend.DesktopWslBackend | DesktopWslEnvironment.DesktopWslEnvironment | DesktopLifecycle.DesktopLifecycleRuntimeServices>;
