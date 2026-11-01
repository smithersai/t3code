import * as Schema from "effect/Schema";
import * as DesktopLifecycle from "../../app/DesktopLifecycle.js";
import * as DesktopServerExposure from "../../backend/DesktopServerExposure.js";
import * as DesktopIpc from "../DesktopIpc.js";
export declare const getServerExposureState: DesktopIpc.DesktopIpcMethod<Schema.SchemaError, DesktopServerExposure.DesktopServerExposure>;
export declare const setServerExposureMode: DesktopIpc.DesktopIpcMethod<DesktopServerExposure.DesktopServerExposureModePersistenceError | DesktopServerExposure.DesktopServerExposureNoNetworkAddressError | Schema.SchemaError, DesktopLifecycle.DesktopLifecycle | DesktopServerExposure.DesktopServerExposure | DesktopLifecycle.DesktopLifecycleRuntimeServices>;
export declare const setTailscaleServeEnabled: DesktopIpc.DesktopIpcMethod<DesktopServerExposure.DesktopTailscaleServePersistenceError | Schema.SchemaError, DesktopLifecycle.DesktopLifecycle | DesktopServerExposure.DesktopServerExposure | DesktopLifecycle.DesktopLifecycleRuntimeServices>;
export declare const getAdvertisedEndpoints: DesktopIpc.DesktopIpcMethod<Schema.SchemaError, DesktopServerExposure.DesktopServerExposure>;
