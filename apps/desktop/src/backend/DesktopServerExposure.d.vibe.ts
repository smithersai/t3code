import { type AdvertisedEndpoint, type DesktopServerExposureMode, type DesktopServerExposureState } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as HttpClient from "effect/http/HttpClient";
import * as ChildProcessSpawner from "effect/process/ChildProcessSpawner";
import * as DesktopAppSettings from "../settings/DesktopAppSettings.ts";
import * as DesktopNetworkInterfaces from "./DesktopNetworkInterfaces.ts";
declare const DesktopServerExposureNoNetworkAddressError_base: Schema.Class<DesktopServerExposureNoNetworkAddressError, Schema.TaggedStruct<"DesktopServerExposureNoNetworkAddressError", {
    readonly port: Schema.Number;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopServerExposureNoNetworkAddressError extends DesktopServerExposureNoNetworkAddressError_base {
    get message(): string;
}
declare const DesktopServerExposureModePersistenceError_base: Schema.Class<DesktopServerExposureModePersistenceError, Schema.TaggedStruct<"DesktopServerExposureModePersistenceError", {
    readonly mode: Schema.Literals<readonly ["local-only", "network-accessible"]>;
    readonly cause: Schema.instanceOf<DesktopAppSettings.DesktopSettingsWriteError, unknown>;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopServerExposureModePersistenceError extends DesktopServerExposureModePersistenceError_base {
    get message(): string;
}
declare const DesktopTailscaleServePersistenceError_base: Schema.Class<DesktopTailscaleServePersistenceError, Schema.TaggedStruct<"DesktopTailscaleServePersistenceError", {
    readonly enabled: Schema.Boolean;
    readonly port: Schema.NullOr<Schema.Number>;
    readonly cause: Schema.instanceOf<DesktopAppSettings.DesktopSettingsWriteError, unknown>;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopTailscaleServePersistenceError extends DesktopTailscaleServePersistenceError_base {
    get message(): string;
}
export declare const DesktopServerExposureSetModeError: Schema.Union<readonly [typeof DesktopServerExposureNoNetworkAddressError, typeof DesktopServerExposureModePersistenceError]>;
export type DesktopServerExposureSetModeError = typeof DesktopServerExposureSetModeError.Type;
export declare const DesktopServerExposureError: Schema.Union<readonly [typeof DesktopServerExposureNoNetworkAddressError, typeof DesktopServerExposureModePersistenceError, typeof DesktopTailscaleServePersistenceError]>;
export type DesktopServerExposureError = typeof DesktopServerExposureError.Type;
export interface DesktopServerExposureBackendConfig {
    readonly port: number;
    readonly bindHost: string;
    readonly httpBaseUrl: URL;
    readonly tailscaleServeEnabled: boolean;
    readonly tailscaleServePort: number;
}
export interface DesktopServerExposureChange {
    readonly state: DesktopServerExposureState;
    readonly requiresRelaunch: boolean;
}
declare const DesktopServerExposure_base: Context.ServiceClass<DesktopServerExposure, "@t3tools/desktop/backend/DesktopServerExposure", {
    readonly getState: Effect.Effect<DesktopServerExposureState>;
    readonly backendConfig: Effect.Effect<DesktopServerExposureBackendConfig>;
    readonly configureFromSettings: (input: {
        readonly port: number;
    }) => Effect.Effect<DesktopServerExposureState>;
    readonly setMode: (mode: DesktopServerExposureMode) => Effect.Effect<DesktopServerExposureChange, DesktopServerExposureSetModeError>;
    readonly setTailscaleServeEnabled: (input: {
        readonly enabled: boolean;
        readonly port?: number;
    }) => Effect.Effect<DesktopServerExposureChange, DesktopTailscaleServePersistenceError>;
    readonly getAdvertisedEndpoints: Effect.Effect<readonly AdvertisedEndpoint[]>;
}>;
export declare class DesktopServerExposure extends DesktopServerExposure_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly getState: Effect.Effect<DesktopServerExposureState>;
    readonly backendConfig: Effect.Effect<DesktopServerExposureBackendConfig>;
    readonly configureFromSettings: (input: {
        readonly port: number;
    }) => Effect.Effect<DesktopServerExposureState>;
    readonly setMode: (mode: DesktopServerExposureMode) => Effect.Effect<DesktopServerExposureChange, DesktopServerExposureSetModeError>;
    readonly setTailscaleServeEnabled: (input: {
        readonly enabled: boolean;
        readonly port?: number;
    }) => Effect.Effect<DesktopServerExposureChange, DesktopTailscaleServePersistenceError>;
    readonly getAdvertisedEndpoints: Effect.Effect<readonly AdvertisedEndpoint[]>;
}, import("effect/Config").ConfigError, ChildProcessSpawner.ChildProcessSpawner | DesktopAppSettings.DesktopAppSettings | DesktopNetworkInterfaces.DesktopNetworkInterfaces | HttpClient.HttpClient>;
export declare const layer: Layer.Layer<DesktopServerExposure, import("effect/Config").ConfigError, ChildProcessSpawner.ChildProcessSpawner | DesktopAppSettings.DesktopAppSettings | DesktopNetworkInterfaces.DesktopNetworkInterfaces | HttpClient.HttpClient>;
export {};
