import * as Context from "effect/Context";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as PlatformError from "effect/PlatformError";
import * as Schema from "effect/Schema";
import * as DesktopBackendManager from "./DesktopBackendManager.vibe";
import * as DesktopEnvironment from "../app/DesktopEnvironment.vibe";
import * as DesktopServerExposure from "./DesktopServerExposure.vibe";
import * as DesktopShellEnvironment from "../shell/DesktopShellEnvironment.vibe";
import * as DesktopAppSettings from "../settings/DesktopAppSettings.vibe";
import * as DesktopWslEnvironment from "../wsl/DesktopWslEnvironment.vibe";
import * as DesktopWslServerTree from "../wsl/DesktopWslServerTree.vibe";
declare const DesktopBackendObservabilitySettingsReadError_base: Schema.Class<DesktopBackendObservabilitySettingsReadError, Schema.TaggedStruct<"DesktopBackendObservabilitySettingsReadError", {
    readonly settingsPath: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopBackendObservabilitySettingsReadError extends DesktopBackendObservabilitySettingsReadError_base {
    get message(): string;
}
declare const DesktopBackendConfiguration_base: Context.ServiceClass<DesktopBackendConfiguration, "@t3tools/desktop/backend/DesktopBackendConfiguration", {
    readonly resolvePrimary: Effect.Effect<DesktopBackendManager.DesktopBackendStartConfig, PlatformError.PlatformError>;
    readonly resolveWsl: (input: {
        readonly port: number;
        readonly distro: string | null;
    }) => Effect.Effect<DesktopBackendManager.DesktopBackendStartConfig, PlatformError.PlatformError>;
    readonly resolvePrimaryLabel: Effect.Effect<string>;
    readonly currentBootstrapToken: Effect.Effect<string, PlatformError.PlatformError>;
}>;
export declare class DesktopBackendConfiguration extends DesktopBackendConfiguration_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly resolvePrimary: Effect.Effect<DesktopBackendManager.DesktopBackendStartConfig, PlatformError.PlatformError>;
    readonly resolveWsl: (input: {
        readonly port: number;
        readonly distro: string | null;
    }) => Effect.Effect<DesktopBackendManager.DesktopBackendStartConfig, PlatformError.PlatformError>;
    readonly resolvePrimaryLabel: Effect.Effect<string>;
    readonly currentBootstrapToken: Effect.Effect<string, PlatformError.PlatformError>;
}, never, Crypto.Crypto | DesktopAppSettings.DesktopAppSettings | DesktopEnvironment.DesktopEnvironment | DesktopServerExposure.DesktopServerExposure | DesktopShellEnvironment.DesktopShellEnvironment | DesktopWslEnvironment.DesktopWslEnvironment | DesktopWslServerTree.DesktopWslServerTree | FileSystem.FileSystem>;
export declare const layer: Layer.Layer<DesktopBackendConfiguration, never, Crypto.Crypto | DesktopAppSettings.DesktopAppSettings | DesktopEnvironment.DesktopEnvironment | DesktopServerExposure.DesktopServerExposure | DesktopShellEnvironment.DesktopShellEnvironment | DesktopWslEnvironment.DesktopWslEnvironment | DesktopWslServerTree.DesktopWslServerTree | FileSystem.FileSystem>;
export {};
