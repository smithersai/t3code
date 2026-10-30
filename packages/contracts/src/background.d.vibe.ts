import * as Schema from "effect/Schema";
export declare const BackgroundBooleanState: Schema.Literals<readonly ["true", "false", "unknown"]>;
export type BackgroundBooleanState = typeof BackgroundBooleanState.Type;
export declare const HostPowerThermalState: Schema.Literals<readonly ["unknown", "nominal", "fair", "serious", "critical"]>;
export type HostPowerThermalState = typeof HostPowerThermalState.Type;
export declare const HostPowerSource: Schema.Literals<readonly ["unknown", "node-macos-shell", "node-macos-native", "node-linux", "node-windows", "electron-main"]>;
export type HostPowerSource = typeof HostPowerSource.Type;
export declare const HostPowerSnapshot: Schema.Struct<{
    readonly source: Schema.Literals<readonly ["unknown", "node-macos-shell", "node-macos-native", "node-linux", "node-windows", "electron-main"]>;
    readonly idle: Schema.Literals<readonly ["true", "false", "unknown"]>;
    readonly idleSeconds: Schema.NullOr<Schema.Number>;
    readonly locked: Schema.Literals<readonly ["true", "false", "unknown"]>;
    readonly suspended: Schema.Boolean;
    readonly onBattery: Schema.Literals<readonly ["true", "false", "unknown"]>;
    readonly lowPowerMode: Schema.Literals<readonly ["true", "false", "unknown"]>;
    readonly thermalState: Schema.Literals<readonly ["unknown", "nominal", "fair", "serious", "critical"]>;
    readonly stale: Schema.Boolean;
    readonly updatedAt: Schema.DateTimeUtc;
}>;
export type HostPowerSnapshot = typeof HostPowerSnapshot.Type;
export declare const BackgroundScope: Schema.Union<readonly [Schema.Struct<{
    readonly type: Schema.Literal<"server-config">;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"provider-status">;
    readonly instanceId: Schema.optionalKey<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"vcs-status">;
    readonly cwd: Schema.String;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"git-refs">;
    readonly cwd: Schema.String;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"diagnostics">;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"thread">;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
}>]>;
export type BackgroundScope = typeof BackgroundScope.Type;
export declare const ClientKind: Schema.Literals<readonly ["web", "desktop-renderer", "mobile", "unknown"]>;
export type ClientKind = typeof ClientKind.Type;
export declare const ClientActivityClientId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
export type ClientActivityClientId = typeof ClientActivityClientId.Type;
export declare const ClientActivityReportInput: Schema.Struct<{
    readonly environmentId: Schema.optionalKey<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
    readonly clientId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly clientKind: Schema.Literals<readonly ["web", "desktop-renderer", "mobile", "unknown"]>;
    readonly visible: Schema.Boolean;
    readonly focused: Schema.Boolean;
    readonly recentlyInteracted: Schema.Boolean;
    readonly appState: Schema.optionalKey<Schema.Literals<readonly ["active", "inactive", "background", "unknown"]>>;
    readonly lowPowerMode: Schema.optionalKey<Schema.Literals<readonly ["true", "false", "unknown"]>>;
    readonly batteryState: Schema.optionalKey<Schema.Literals<readonly ["unknown", "unplugged", "charging", "full"]>>;
    readonly networkType: Schema.optionalKey<Schema.String>;
    readonly scopes: Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"server-config">;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"provider-status">;
        readonly instanceId: Schema.optionalKey<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"vcs-status">;
        readonly cwd: Schema.String;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"git-refs">;
        readonly cwd: Schema.String;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"diagnostics">;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"thread">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    }>]>>;
    readonly ttlMs: Schema.optionalKey<Schema.Number>;
    readonly observedAt: Schema.DateTimeUtc;
}>;
export type ClientActivityReportInput = typeof ClientActivityReportInput.Type;
export declare const ClientActivityLease: Schema.Struct<{
    readonly sessionId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "AuthSessionId">;
    readonly rpcClientId: Schema.brand<Schema.Int, "RpcClientId">;
    readonly clientId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly clientKind: Schema.Literals<readonly ["web", "desktop-renderer", "mobile", "unknown"]>;
    readonly visible: Schema.Boolean;
    readonly focused: Schema.Boolean;
    readonly recentlyInteracted: Schema.Boolean;
    readonly appState: Schema.optionalKey<Schema.Literals<readonly ["active", "inactive", "background", "unknown"]>>;
    readonly lowPowerMode: Schema.optionalKey<Schema.Literals<readonly ["true", "false", "unknown"]>>;
    readonly batteryState: Schema.optionalKey<Schema.Literals<readonly ["unknown", "unplugged", "charging", "full"]>>;
    readonly networkType: Schema.optionalKey<Schema.String>;
    readonly scopes: Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"server-config">;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"provider-status">;
        readonly instanceId: Schema.optionalKey<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"vcs-status">;
        readonly cwd: Schema.String;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"git-refs">;
        readonly cwd: Schema.String;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"diagnostics">;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"thread">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    }>]>>;
    readonly updatedAt: Schema.DateTimeUtc;
    readonly expiresAt: Schema.DateTimeUtc;
}>;
export type ClientActivityLease = typeof ClientActivityLease.Type;
export declare const BackgroundPolicySnapshot: Schema.Struct<{
    readonly hostPower: Schema.Struct<{
        readonly source: Schema.Literals<readonly ["unknown", "node-macos-shell", "node-macos-native", "node-linux", "node-windows", "electron-main"]>;
        readonly idle: Schema.Literals<readonly ["true", "false", "unknown"]>;
        readonly idleSeconds: Schema.NullOr<Schema.Number>;
        readonly locked: Schema.Literals<readonly ["true", "false", "unknown"]>;
        readonly suspended: Schema.Boolean;
        readonly onBattery: Schema.Literals<readonly ["true", "false", "unknown"]>;
        readonly lowPowerMode: Schema.Literals<readonly ["true", "false", "unknown"]>;
        readonly thermalState: Schema.Literals<readonly ["unknown", "nominal", "fair", "serious", "critical"]>;
        readonly stale: Schema.Boolean;
        readonly updatedAt: Schema.DateTimeUtc;
    }>;
    readonly leases: Schema.$Array<Schema.Struct<{
        readonly sessionId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "AuthSessionId">;
        readonly rpcClientId: Schema.brand<Schema.Int, "RpcClientId">;
        readonly clientId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly clientKind: Schema.Literals<readonly ["web", "desktop-renderer", "mobile", "unknown"]>;
        readonly visible: Schema.Boolean;
        readonly focused: Schema.Boolean;
        readonly recentlyInteracted: Schema.Boolean;
        readonly appState: Schema.optionalKey<Schema.Literals<readonly ["active", "inactive", "background", "unknown"]>>;
        readonly lowPowerMode: Schema.optionalKey<Schema.Literals<readonly ["true", "false", "unknown"]>>;
        readonly batteryState: Schema.optionalKey<Schema.Literals<readonly ["unknown", "unplugged", "charging", "full"]>>;
        readonly networkType: Schema.optionalKey<Schema.String>;
        readonly scopes: Schema.$Array<Schema.Union<readonly [Schema.Struct<{
            readonly type: Schema.Literal<"server-config">;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"provider-status">;
            readonly instanceId: Schema.optionalKey<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"vcs-status">;
            readonly cwd: Schema.String;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"git-refs">;
            readonly cwd: Schema.String;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"diagnostics">;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"thread">;
            readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        }>]>>;
        readonly updatedAt: Schema.DateTimeUtc;
        readonly expiresAt: Schema.DateTimeUtc;
    }>>;
    readonly activeForegroundLeaseCount: Schema.Number;
    readonly activeScopeKeys: Schema.$Array<Schema.String>;
    readonly shouldRunOpportunisticWork: Schema.Boolean;
    readonly updatedAt: Schema.DateTimeUtc;
}>;
export type BackgroundPolicySnapshot = typeof BackgroundPolicySnapshot.Type;
