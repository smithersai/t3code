import * as Schema from "effect/Schema";
export declare const SERVER_EXIT_CODE_STATE_DIR_OWNED = 78;
export declare const DesktopBackendBootstrap: Schema.Struct<{
    readonly mode: Schema.Literal<"desktop">;
    readonly noBrowser: Schema.Boolean;
    readonly port: Schema.Int;
    readonly t3Home: Schema.optional<Schema.String>;
    readonly host: Schema.String;
    readonly desktopBootstrapToken: Schema.String;
    readonly desktopBootstrapSecret: Schema.optionalKey<Schema.String>;
    readonly shellEnvironmentPrepared: Schema.optionalKey<Schema.Boolean>;
    readonly tailscaleServeEnabled: Schema.Boolean;
    readonly tailscaleServePort: Schema.Int;
    readonly otlpTracesUrl: Schema.optional<Schema.String>;
    readonly otlpMetricsUrl: Schema.optional<Schema.String>;
    readonly otlpLogsUrl: Schema.optional<Schema.String>;
    readonly desktopTelemetryFd: Schema.optionalKey<Schema.Int>;
    readonly desktopTelemetryControlFd: Schema.optionalKey<Schema.Int>;
    readonly desktopBrowserFd: Schema.optionalKey<Schema.Int>;
    readonly desktopBrowserControlFd: Schema.optionalKey<Schema.Int>;
    readonly resourceMonitorPath: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type DesktopBackendBootstrap = typeof DesktopBackendBootstrap.Type;
/** Written to `<t3Home>/runtime` before update shutdown so the backend retains its managed tunnel. */
export declare const DESKTOP_UPDATE_RESTART_MARKER_FILE = "desktop-update-restart";
