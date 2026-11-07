import { type DesktopServerExposureMode, type DesktopUpdateChannel } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Path from "effect/Path";
import * as DesktopEnvironment from "../app/DesktopEnvironment.vibe";
import { DesktopSettingsWriteError } from "./DesktopAppSettings.vibe.platform.js";
import type { DesktopSettings, DesktopWindowBounds } from "./DesktopAppSettings.vibe.platform.js";
export { DesktopSettingsWriteError, DesktopWindowBoundsSchema } from "./DesktopAppSettings.vibe.platform.js";
export type { DesktopSettings, DesktopWindowBounds } from "./DesktopAppSettings.vibe.platform.js";
export interface DesktopSettingsChange {
    readonly settings: DesktopSettings;
    readonly changed: boolean;
}
export declare const DEFAULT_MAIN_WINDOW_SIZE: {
    readonly width: 1100;
    readonly height: 780;
};
export declare const DEFAULT_DESKTOP_SETTINGS: DesktopSettings;
declare const DesktopAppSettings_base: Context.ServiceClass<DesktopAppSettings, "@t3tools/desktop/settings/DesktopAppSettings", {
    readonly load: Effect.Effect<DesktopSettings>;
    readonly get: Effect.Effect<DesktopSettings>;
    readonly setLocalEnvironmentEnabled: (enabled: boolean) => Effect.Effect<DesktopSettingsChange, DesktopSettingsWriteError>;
    readonly setMainWindowBounds: (bounds: DesktopWindowBounds, isMaximized: boolean) => Effect.Effect<DesktopSettingsChange, DesktopSettingsWriteError>;
    readonly setServerExposureMode: (mode: DesktopServerExposureMode) => Effect.Effect<DesktopSettingsChange, DesktopSettingsWriteError>;
    readonly setTailscaleServe: (input: {
        readonly enabled: boolean;
        readonly port: Option.Option<number>;
    }) => Effect.Effect<DesktopSettingsChange, DesktopSettingsWriteError>;
    readonly setUpdateChannel: (channel: DesktopUpdateChannel) => Effect.Effect<DesktopSettingsChange, DesktopSettingsWriteError>;
    readonly setWslBackendEnabled: (enabled: boolean) => Effect.Effect<DesktopSettingsChange, DesktopSettingsWriteError>;
    readonly setWslDistro: (distro: string | null) => Effect.Effect<DesktopSettingsChange, DesktopSettingsWriteError>;
    readonly setWslOnly: (enabled: boolean) => Effect.Effect<DesktopSettingsChange, DesktopSettingsWriteError>;
    readonly applyWslWindowsFallback: Effect.Effect<DesktopSettingsChange, DesktopSettingsWriteError>;
    readonly applyWslWindowsFallbackInMemory: Effect.Effect<DesktopSettingsChange>;
}>;
export declare class DesktopAppSettings extends DesktopAppSettings_base {
}
/** @throws {never} */
export declare function resolveDefaultDesktopSettings(appVersion: string): DesktopSettings;
/** @throws {never} */
export declare function normalizeMainWindowBounds(value: unknown): DesktopWindowBounds | null;
/** @public */
export declare const make: Effect.Effect<{
    readonly load: Effect.Effect<DesktopSettings>;
    readonly get: Effect.Effect<DesktopSettings>;
    readonly setLocalEnvironmentEnabled: (enabled: boolean) => Effect.Effect<DesktopSettingsChange, DesktopSettingsWriteError>;
    readonly setMainWindowBounds: (bounds: DesktopWindowBounds, isMaximized: boolean) => Effect.Effect<DesktopSettingsChange, DesktopSettingsWriteError>;
    readonly setServerExposureMode: (mode: DesktopServerExposureMode) => Effect.Effect<DesktopSettingsChange, DesktopSettingsWriteError>;
    readonly setTailscaleServe: (input: {
        readonly enabled: boolean;
        readonly port: Option.Option<number>;
    }) => Effect.Effect<DesktopSettingsChange, DesktopSettingsWriteError>;
    readonly setUpdateChannel: (channel: DesktopUpdateChannel) => Effect.Effect<DesktopSettingsChange, DesktopSettingsWriteError>;
    readonly setWslBackendEnabled: (enabled: boolean) => Effect.Effect<DesktopSettingsChange, DesktopSettingsWriteError>;
    readonly setWslDistro: (distro: string | null) => Effect.Effect<DesktopSettingsChange, DesktopSettingsWriteError>;
    readonly setWslOnly: (enabled: boolean) => Effect.Effect<DesktopSettingsChange, DesktopSettingsWriteError>;
    readonly applyWslWindowsFallback: Effect.Effect<DesktopSettingsChange, DesktopSettingsWriteError>;
    readonly applyWslWindowsFallbackInMemory: Effect.Effect<DesktopSettingsChange>;
}, never, Crypto.Crypto | DesktopEnvironment.DesktopEnvironment | FileSystem.FileSystem | Path.Path>;
export declare const layer: Layer.Layer<DesktopAppSettings, never, Crypto.Crypto | DesktopEnvironment.DesktopEnvironment | FileSystem.FileSystem | Path.Path>;
export declare const layerTest: (initialSettings?: DesktopSettings) => Layer.Layer<DesktopAppSettings, never, never>;
