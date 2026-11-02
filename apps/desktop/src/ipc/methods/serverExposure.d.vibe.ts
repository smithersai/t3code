import * as Schema from "effect/Schema";
import * as DesktopLifecycle from "../../app/DesktopLifecycle.ts";
import * as DesktopServerExposure from "../../backend/DesktopServerExposure.ts";
import * as DesktopIpc from "../DesktopIpc.ts";
export declare const getServerExposureState: DesktopIpc.DesktopIpcMethod<Schema.SchemaError, DesktopServerExposure.DesktopServerExposure>;
export declare const setServerExposureMode: DesktopIpc.DesktopIpcMethod<DesktopServerExposure.DesktopServerExposureModePersistenceError | DesktopServerExposure.DesktopServerExposureNoNetworkAddressError | Schema.SchemaError, DesktopLifecycle.DesktopLifecycle | DesktopServerExposure.DesktopServerExposure | DesktopLifecycle.DesktopLifecycleRuntimeServices>;
export declare const setTailscaleServeEnabled: DesktopIpc.DesktopIpcMethod<DesktopServerExposure.DesktopTailscaleServePersistenceError | Schema.SchemaError, DesktopLifecycle.DesktopLifecycle | DesktopServerExposure.DesktopServerExposure | DesktopLifecycle.DesktopLifecycleRuntimeServices>;
export declare const getAdvertisedEndpoints: DesktopIpc.DesktopIpcMethod<Schema.SchemaError, DesktopServerExposure.DesktopServerExposure>;
