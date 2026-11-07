import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as NetService from "@t3tools/shared/Net";
import * as DesktopBackendConfiguration from "../backend/DesktopBackendConfiguration.vibe";
import * as DesktopBackendPool from "../backend/DesktopBackendPool.vibe";
import * as DesktopServerExposure from "../backend/DesktopServerExposure.vibe";
import * as DesktopAppSettings from "../settings/DesktopAppSettings.vibe";
import * as DesktopWslEnvironment from "./DesktopWslEnvironment.vibe";
export declare const WSL_INSTANCE_ID_PREFIX = "wsl:";
declare const DesktopWslBackend_base: Context.ServiceClass<DesktopWslBackend, "@t3tools/desktop/wsl/DesktopWslBackend", {
    readonly reconcile: Effect.Effect<void>;
    readonly lastPreflightError: Effect.Effect<Option.Option<string>>;
}>;
export declare class DesktopWslBackend extends DesktopWslBackend_base {
}
export declare const layer: Layer.Layer<DesktopWslBackend, never, DesktopAppSettings.DesktopAppSettings | DesktopBackendConfiguration.DesktopBackendConfiguration | DesktopBackendPool.DesktopBackendPool | DesktopServerExposure.DesktopServerExposure | DesktopWslEnvironment.DesktopWslEnvironment | NetService.NetService>;
export {};
