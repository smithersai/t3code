import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Schema from "effect/Schema";
import * as FileSystem from "effect/FileSystem";
import { HttpClient } from "effect/http";
import { ChildProcessSpawner } from "effect/process";
import * as DesktopBackendConfiguration from "./DesktopBackendConfiguration.ts";
import * as DesktopBackendManager from "./DesktopBackendManager.ts";
import * as DesktopObservability from "../app/DesktopObservability.ts";
import * as DesktopState from "../app/DesktopState.vibe";
import * as DesktopAppSettings from "../settings/DesktopAppSettings.ts";
import * as DesktopTelemetryPublisher from "../telemetry/DesktopTelemetryPublisher.ts";
import * as DesktopBrowserHost from "../preview/DesktopBrowserHost.ts";
import * as DesktopWindow from "../window/DesktopWindow.vibe";
import * as DesktopWslEnvironment from "../wsl/DesktopWslEnvironment.ts";
import * as ElectronDialog from "../electron/ElectronDialog.vibe";
import * as ElectronApp from "../electron/ElectronApp.ts";
export type BackendInstanceId = DesktopBackendManager.BackendInstanceId;
export declare const BackendInstanceId: import("effect/Brand").Constructor<DesktopBackendManager.BackendInstanceId>;
export declare const PRIMARY_INSTANCE_ID: DesktopBackendManager.BackendInstanceId;
export type DesktopBackendInstance = DesktopBackendManager.DesktopBackendInstance;
export type BackendInstanceSpec = DesktopBackendManager.BackendInstanceSpec;
declare const DesktopBackendPoolInstanceAlreadyRegisteredError_base: Schema.Class<DesktopBackendPoolInstanceAlreadyRegisteredError, Schema.TaggedStruct<"DesktopBackendPoolInstanceAlreadyRegisteredError", {
    readonly id: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopBackendPoolInstanceAlreadyRegisteredError extends DesktopBackendPoolInstanceAlreadyRegisteredError_base {
    get message(): string;
}
declare const DesktopBackendPoolCannotUnregisterPrimaryError_base: Schema.Class<DesktopBackendPoolCannotUnregisterPrimaryError, Schema.TaggedStruct<"DesktopBackendPoolCannotUnregisterPrimaryError", {}>, import("effect/Cause").YieldableError>;
export declare class DesktopBackendPoolCannotUnregisterPrimaryError extends DesktopBackendPoolCannotUnregisterPrimaryError_base {
    get message(): string;
}
declare const DesktopBackendPool_base: Context.ServiceClass<DesktopBackendPool, "@t3tools/desktop/backend/DesktopBackendPool", {
    readonly get: (id: BackendInstanceId) => Effect.Effect<Option.Option<DesktopBackendInstance>>;
    readonly list: Effect.Effect<readonly DesktopBackendInstance[]>;
    readonly primary: Effect.Effect<DesktopBackendInstance>;
    readonly register: (spec: BackendInstanceSpec) => Effect.Effect<DesktopBackendInstance, DesktopBackendPoolInstanceAlreadyRegisteredError>;
    readonly unregister: (id: BackendInstanceId) => Effect.Effect<void, DesktopBackendPoolCannotUnregisterPrimaryError>;
}>;
export declare class DesktopBackendPool extends DesktopBackendPool_base {
}
export type BackendInstanceFactoryRequirements = FileSystem.FileSystem | ChildProcessSpawner.ChildProcessSpawner | HttpClient.HttpClient | DesktopObservability.DesktopBackendOutputLogFactory | DesktopTelemetryPublisher.DesktopTelemetryPublisher | DesktopBrowserHost.DesktopBrowserHost | DesktopWslEnvironment.DesktopWslEnvironment;
export declare const layer: Layer.Layer<DesktopBackendPool, never, DesktopAppSettings.DesktopAppSettings | DesktopBackendConfiguration.DesktopBackendConfiguration | DesktopState.DesktopState | DesktopWindow.DesktopWindow | ElectronApp.ElectronApp | ElectronDialog.ElectronDialog | BackendInstanceFactoryRequirements>;
export declare const layerTest: (instances: readonly DesktopBackendInstance[]) => Layer.Layer<DesktopBackendPool>;
export {};
