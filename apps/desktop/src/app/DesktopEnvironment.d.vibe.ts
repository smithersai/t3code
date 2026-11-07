import type { DesktopAppBranding, DesktopRuntimeInfo } from "@t3tools/contracts";
import * as Config from "effect/Config";
import * as Context from "effect/Context";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Path from "effect/Path";
import * as DesktopAppSettings from "../settings/DesktopAppSettings.vibe";
import type { OtlpProtocol } from "@t3tools/shared/observability";
export interface MakeDesktopEnvironmentInput {
    readonly dirname: string;
    readonly homeDirectory: string;
    readonly platform: NodeJS.Platform;
    readonly processArch: string;
    readonly appVersion: string;
    readonly appPath: string;
    readonly isPackaged: boolean;
    readonly resourcesPath: string;
    readonly runningUnderArm64Translation: boolean;
}
declare const DesktopEnvironment_base: Context.ServiceClass<DesktopEnvironment, "@t3tools/desktop/app/DesktopEnvironment", {
    readonly path: Path.Path;
    readonly dirname: string;
    readonly platform: NodeJS.Platform;
    readonly processArch: string;
    readonly isPackaged: boolean;
    readonly isDevelopment: boolean;
    readonly appVersion: string;
    readonly appPath: string;
    readonly resourcesPath: string;
    readonly homeDirectory: string;
    readonly appDataDirectory: string;
    readonly baseDir: string;
    readonly stateDir: string;
    readonly desktopSettingsPath: string;
    readonly clientSettingsPath: string;
    readonly savedEnvironmentRegistryPath: string;
    readonly serverSettingsPath: string;
    readonly logDir: string;
    readonly browserArtifactsDir: string;
    readonly rootDir: string;
    readonly appRoot: string;
    readonly serverRoot: string;
    readonly backendEntryPath: string;
    readonly clientAssetsDir: string;
    readonly backendCwd: string;
    readonly preloadPath: string;
    readonly compileCachePath: string;
    readonly appUpdateYmlPath: string;
    readonly devServerUrl: Option.Option<URL>;
    readonly devRemoteT3ServerEntryPath: Option.Option<string>;
    readonly configuredBackendPort: Option.Option<number>;
    readonly commitHashOverride: Option.Option<string>;
    readonly otlpTracesUrl: Option.Option<string>;
    readonly otlpMetricsUrl: Option.Option<string>;
    readonly otlpLogsUrl: Option.Option<string>;
    readonly otlpExportIntervalMs: number;
    readonly otlpHeaders: Option.Option<Record<string, string>>;
    readonly otlpProtocol: OtlpProtocol;
    readonly branding: DesktopAppBranding;
    readonly displayName: string;
    readonly appUserModelId: string;
    readonly linuxDesktopEntryName: string;
    readonly linuxWmClass: string;
    readonly linuxApplicationsDir: string;
    readonly desktopLauncherPath: Option.Option<string>;
    readonly appImagePath: Option.Option<string>;
    readonly defaultDesktopSettings: DesktopAppSettings.DesktopSettings;
    readonly runtimeInfo: DesktopRuntimeInfo;
    /** @throws {never} */
    readonly resolvePickFolderDefaultPath: (rawOptions: unknown) => Option.Option<string>;
    /** @throws {never} */
    readonly resolveResourcePathCandidates: (fileName: string) => readonly string[];
}>;
export declare class DesktopEnvironment extends DesktopEnvironment_base {
}
/** @throws {never} */
export declare function resolveDesktopAppBranding(input: {
    readonly isDevelopment: boolean;
    readonly appVersion: string;
}): DesktopAppBranding;
export declare const layer: (input: MakeDesktopEnvironmentInput) => Layer.Layer<DesktopEnvironment, Config.ConfigError, Path.Path>;
export {};
