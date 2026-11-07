import * as Config from "effect/Config";
import * as Option from "effect/Option";
export declare const DesktopConfig: Config.Config<{
    appDataDirectory: Option.Option<string>;
    xdgConfigHome: Option.Option<string>;
    xdgDataHome: Option.Option<string>;
    t3Home: Option.Option<string>;
    devServerUrl: Option.Option<URL>;
    appUserModelIdOverride: Option.Option<string>;
    devRemoteT3ServerEntryPath: Option.Option<string>;
    configuredBackendPort: Option.Option<number>;
    commitHashOverride: Option.Option<string>;
    desktopLanHostOverride: Option.Option<string>;
    desktopHttpsEndpointUrls: string[] | never[];
    otlpTracesUrl: Option.Option<string>;
    otlpMetricsUrl: Option.Option<string>;
    otlpLogsUrl: Option.Option<string>;
    otlpExportIntervalMs: number;
    otlpHeaders: Option.Option<{
        readonly [x: string]: string;
    }>;
    otlpProtocol: "http/json" | "http/protobuf";
    desktopLauncherPath: Option.Option<string>;
    appImagePath: Option.Option<string>;
    disableAutoUpdate: boolean;
    mockUpdates: boolean;
    mockUpdateServerPort: number;
}>;
export declare const layerTest: (env: Readonly<Record<string, string | undefined>>) => import("effect/Layer").Layer<never, never, never>;
