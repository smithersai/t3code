import * as Schema from "effect/Schema";
export declare const DevicePlatform: Schema.Literals<readonly ["ios", "android"]>;
export type DevicePlatform = typeof DevicePlatform.Type;
export declare const DeviceHostId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
export type DeviceHostId = typeof DeviceHostId.Type;
export declare const LOCAL_DEVICE_HOST_ID: DeviceHostId;
export declare const LOCAL_DEVICE_HOST_LABEL = "This machine";
export declare const SshDeviceHostConfig: Schema.Struct<{
    readonly kind: Schema.withDecodingDefaultKey<Schema.Literal<"ssh">, never>;
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly target: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly identityFile: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly port: Schema.optional<Schema.Int>;
}>;
export type SshDeviceHostConfig = typeof SshDeviceHostConfig.Type;
/**
 * Cloud simulators from EAS Simulator. Sessions bill the Expo account until
 * they stop, so every one is bounded. The Expo credential is not stored here.
 */
export declare const EasDeviceHostConfig: Schema.Struct<{
    readonly kind: Schema.Literal<"eas">;
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    /** EAS project that sessions run under, when the project's app config does not name one. */
    readonly appId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    /**
     * Expo access token, kept in the secret store. When empty the server uses
     * EXPO_TOKEN, then the `eas login` session. This is `secretSetting` from
     * settings.ts, which imports this module.
     */
    readonly accessToken: Schema.withDecodingDefaultKey<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    /** EAS allows at most 40 minutes on free accounts and 115 on paid ones. */
    readonly maxSessionMinutes: Schema.withDecodingDefaultKey<Schema.Int, never>;
    readonly idleMinutes: Schema.withDecodingDefaultKey<Schema.Int, never>;
    readonly maxConcurrentSessions: Schema.withDecodingDefaultKey<Schema.Int, never>;
}>;
export type EasDeviceHostConfig = typeof EasDeviceHostConfig.Type;
export type DeviceHostConfig = SshDeviceHostConfig | EasDeviceHostConfig;
export declare const SshDeviceHostConfigs: Schema.$Array<Schema.Struct<{
    readonly kind: Schema.withDecodingDefaultKey<Schema.Literal<"ssh">, never>;
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly target: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly identityFile: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly port: Schema.optional<Schema.Int>;
}>>;
/**
 * Kept apart from the SSH hosts in settings: servers and clients from before
 * EAS hosts decode `deviceHosts` as SSH hosts and would reject the whole file
 * or snapshot over one EAS entry.
 */
export declare const EasDeviceHostConfigs: Schema.$Array<Schema.Struct<{
    readonly kind: Schema.Literal<"eas">;
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    /** EAS project that sessions run under, when the project's app config does not name one. */
    readonly appId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    /**
     * Expo access token, kept in the secret store. When empty the server uses
     * EXPO_TOKEN, then the `eas login` session. This is `secretSetting` from
     * settings.ts, which imports this module.
     */
    readonly accessToken: Schema.withDecodingDefaultKey<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    /** EAS allows at most 40 minutes on free accounts and 115 on paid ones. */
    readonly maxSessionMinutes: Schema.withDecodingDefaultKey<Schema.Int, never>;
    readonly idleMinutes: Schema.withDecodingDefaultKey<Schema.Int, never>;
    readonly maxConcurrentSessions: Schema.withDecodingDefaultKey<Schema.Int, never>;
}>>;
export declare const DeviceEasAccountInput: Schema.Struct<{
    /** A saved EAS host whose stored token is checked when no new token is given. */
    readonly hostId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly accessToken: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type DeviceEasAccountInput = typeof DeviceEasAccountInput.Type;
export declare const DeviceEasAccount: Schema.Struct<{
    readonly signedInAs: Schema.String;
    readonly credentialSource: Schema.Literals<readonly ["settings", "env", "eas-login"]>;
    readonly apps: Schema.$Array<Schema.Struct<{
        readonly id: Schema.String;
        readonly fullName: Schema.String;
    }>>;
}>;
export type DeviceEasAccount = typeof DeviceEasAccount.Type;
declare const DeviceEasAccountError_base: Schema.Class<DeviceEasAccountError, Schema.TaggedStruct<"DeviceEasAccountError", {
    readonly reason: Schema.String;
}>, import("effect/Cause").YieldableError>;
/** Checking an Expo credential failed; no device host is involved yet. */
export declare class DeviceEasAccountError extends DeviceEasAccountError_base {
    get message(): string;
}
export declare const DeviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
export type DeviceId = typeof DeviceId.Type;
export declare const DeviceSummary: Schema.Struct<{
    readonly hostId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly platform: Schema.Literals<readonly ["ios", "android"]>;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly version: Schema.String;
    readonly booted: Schema.Boolean;
    readonly physical: Schema.Boolean;
}>;
export type DeviceSummary = typeof DeviceSummary.Type;
export declare const DevicePlatformAvailability: Schema.Struct<{
    readonly platform: Schema.Literals<readonly ["ios", "android"]>;
    readonly available: Schema.Boolean;
    readonly reason: Schema.optional<Schema.String>;
}>;
export type DevicePlatformAvailability = typeof DevicePlatformAvailability.Type;
export declare const DeviceToolVersion: Schema.Struct<{
    readonly requiredVersion: Schema.String;
    readonly installedVersions: Schema.$Array<Schema.String>;
    readonly runningVersion: Schema.NullOr<Schema.String>;
}>;
export type DeviceToolVersion = typeof DeviceToolVersion.Type;
export declare const DeviceToolVersions: Schema.Struct<{
    readonly hub: Schema.Struct<{
        readonly requiredVersion: Schema.String;
        readonly installedVersions: Schema.$Array<Schema.String>;
        readonly runningVersion: Schema.NullOr<Schema.String>;
    }>;
    readonly agent: Schema.Struct<{
        readonly requiredVersion: Schema.String;
        readonly installedVersions: Schema.$Array<Schema.String>;
        readonly runningVersion: Schema.NullOr<Schema.String>;
    }>;
}>;
export type DeviceToolVersions = typeof DeviceToolVersions.Type;
export declare const DeviceHostSummary: Schema.Union<readonly [Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly platforms: Schema.$Array<Schema.Struct<{
        readonly platform: Schema.Literals<readonly ["ios", "android"]>;
        readonly available: Schema.Boolean;
        readonly reason: Schema.optional<Schema.String>;
    }>>;
    readonly tools: Schema.optional<Schema.Struct<{
        readonly hub: Schema.Struct<{
            readonly requiredVersion: Schema.String;
            readonly installedVersions: Schema.$Array<Schema.String>;
            readonly runningVersion: Schema.NullOr<Schema.String>;
        }>;
        readonly agent: Schema.Struct<{
            readonly requiredVersion: Schema.String;
            readonly installedVersions: Schema.$Array<Schema.String>;
            readonly runningVersion: Schema.NullOr<Schema.String>;
        }>;
    }>>;
    readonly toolInspectionError: Schema.optional<Schema.String>;
    readonly hubInstalled: Schema.Boolean;
    readonly agentDeviceInstalled: Schema.Boolean;
    readonly kind: Schema.Literals<readonly ["local", "ssh"]>;
}>, Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly platforms: Schema.$Array<Schema.Struct<{
        readonly platform: Schema.Literals<readonly ["ios", "android"]>;
        readonly available: Schema.Boolean;
        readonly reason: Schema.optional<Schema.String>;
    }>>;
    readonly tools: Schema.optional<Schema.Struct<{
        readonly hub: Schema.Struct<{
            readonly requiredVersion: Schema.String;
            readonly installedVersions: Schema.$Array<Schema.String>;
            readonly runningVersion: Schema.NullOr<Schema.String>;
        }>;
        readonly agent: Schema.Struct<{
            readonly requiredVersion: Schema.String;
            readonly installedVersions: Schema.$Array<Schema.String>;
            readonly runningVersion: Schema.NullOr<Schema.String>;
        }>;
    }>>;
    readonly toolInspectionError: Schema.optional<Schema.String>;
    readonly hubInstalled: Schema.Boolean;
    readonly agentDeviceInstalled: Schema.Boolean;
    readonly kind: Schema.Literal<"eas">;
}>]>;
export type DeviceHostSummary = typeof DeviceHostSummary.Type;
export declare const DeviceHostStatus: Schema.Literals<readonly ["disabled", "idle", "installing", "starting", "ready", "failed"]>;
export type DeviceHostStatus = typeof DeviceHostStatus.Type;
export declare const DeviceSession: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly hostId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly platform: Schema.Literals<readonly ["ios", "android"]>;
    readonly openedAt: Schema.String;
}>;
export type DeviceSession = typeof DeviceSession.Type;
export declare const DeviceHostStatuses: Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Struct<{
    readonly status: Schema.Literals<readonly ["disabled", "idle", "installing", "starting", "ready", "failed"]>;
    readonly detail: Schema.optional<Schema.String>;
    readonly androidDiscoveryIncomplete: Schema.optional<Schema.Boolean>;
}>>;
export declare const DeviceServiceState: Schema.decodeTo<Schema.toType<Schema.Struct<{
    readonly supportsHostRetry: Schema.optional<Schema.Boolean>;
    readonly supportsToolUpdate: Schema.optional<Schema.Boolean>;
    readonly supportsToolInspection: Schema.optional<Schema.Boolean>;
    readonly supportsEasHosts: Schema.optional<Schema.Boolean>;
    readonly hostStatus: Schema.Literals<readonly ["disabled", "idle", "installing", "starting", "ready", "failed"]>;
    readonly hostStatusDetail: Schema.optional<Schema.String>;
    readonly hostStatuses: Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Struct<{
        readonly status: Schema.Literals<readonly ["disabled", "idle", "installing", "starting", "ready", "failed"]>;
        readonly detail: Schema.optional<Schema.String>;
        readonly androidDiscoveryIncomplete: Schema.optional<Schema.Boolean>;
    }>>;
    readonly devices: Schema.$Array<Schema.Struct<{
        readonly hostId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly platform: Schema.Literals<readonly ["ios", "android"]>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly version: Schema.String;
        readonly booted: Schema.Boolean;
        readonly physical: Schema.Boolean;
    }>>;
    readonly sessions: Schema.$Array<Schema.Struct<{
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly hostId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly platform: Schema.Literals<readonly ["ios", "android"]>;
        readonly openedAt: Schema.String;
    }>>;
    readonly bootingDevices: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly hostId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly platform: Schema.Literals<readonly ["ios", "android"]>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly version: Schema.String;
        readonly booted: Schema.Boolean;
        readonly physical: Schema.Boolean;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    }>>>;
    readonly onboardingCompleted: Schema.Boolean;
    readonly agentAccessEnabled: Schema.Boolean;
    readonly hubBasePath: Schema.String;
    readonly revision: Schema.Int;
    readonly hosts: Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly platforms: Schema.$Array<Schema.Struct<{
            readonly platform: Schema.Literals<readonly ["ios", "android"]>;
            readonly available: Schema.Boolean;
            readonly reason: Schema.optional<Schema.String>;
        }>>;
        readonly tools: Schema.optional<Schema.Struct<{
            readonly hub: Schema.Struct<{
                readonly requiredVersion: Schema.String;
                readonly installedVersions: Schema.$Array<Schema.String>;
                readonly runningVersion: Schema.NullOr<Schema.String>;
            }>;
            readonly agent: Schema.Struct<{
                readonly requiredVersion: Schema.String;
                readonly installedVersions: Schema.$Array<Schema.String>;
                readonly runningVersion: Schema.NullOr<Schema.String>;
            }>;
        }>>;
        readonly toolInspectionError: Schema.optional<Schema.String>;
        readonly hubInstalled: Schema.Boolean;
        readonly agentDeviceInstalled: Schema.Boolean;
        readonly kind: Schema.Literals<readonly ["local", "ssh"]>;
    }>, Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly platforms: Schema.$Array<Schema.Struct<{
            readonly platform: Schema.Literals<readonly ["ios", "android"]>;
            readonly available: Schema.Boolean;
            readonly reason: Schema.optional<Schema.String>;
        }>>;
        readonly tools: Schema.optional<Schema.Struct<{
            readonly hub: Schema.Struct<{
                readonly requiredVersion: Schema.String;
                readonly installedVersions: Schema.$Array<Schema.String>;
                readonly runningVersion: Schema.NullOr<Schema.String>;
            }>;
            readonly agent: Schema.Struct<{
                readonly requiredVersion: Schema.String;
                readonly installedVersions: Schema.$Array<Schema.String>;
                readonly runningVersion: Schema.NullOr<Schema.String>;
            }>;
        }>>;
        readonly toolInspectionError: Schema.optional<Schema.String>;
        readonly hubInstalled: Schema.Boolean;
        readonly agentDeviceInstalled: Schema.Boolean;
        readonly kind: Schema.Literal<"eas">;
    }>]>>;
}>>, Schema.Struct<{
    readonly supportsHostRetry: Schema.optional<Schema.Boolean>;
    readonly supportsToolUpdate: Schema.optional<Schema.Boolean>;
    readonly supportsToolInspection: Schema.optional<Schema.Boolean>;
    readonly supportsEasHosts: Schema.optional<Schema.Boolean>;
    readonly hostStatus: Schema.Literals<readonly ["disabled", "idle", "installing", "starting", "ready", "failed"]>;
    readonly hostStatusDetail: Schema.optional<Schema.String>;
    readonly hostStatuses: Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Struct<{
        readonly status: Schema.Literals<readonly ["disabled", "idle", "installing", "starting", "ready", "failed"]>;
        readonly detail: Schema.optional<Schema.String>;
        readonly androidDiscoveryIncomplete: Schema.optional<Schema.Boolean>;
    }>>;
    readonly devices: Schema.$Array<Schema.Struct<{
        readonly hostId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly platform: Schema.Literals<readonly ["ios", "android"]>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly version: Schema.String;
        readonly booted: Schema.Boolean;
        readonly physical: Schema.Boolean;
    }>>;
    readonly sessions: Schema.$Array<Schema.Struct<{
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly hostId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly platform: Schema.Literals<readonly ["ios", "android"]>;
        readonly openedAt: Schema.String;
    }>>;
    readonly bootingDevices: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly hostId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly platform: Schema.Literals<readonly ["ios", "android"]>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly version: Schema.String;
        readonly booted: Schema.Boolean;
        readonly physical: Schema.Boolean;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    }>>>;
    readonly onboardingCompleted: Schema.Boolean;
    readonly agentAccessEnabled: Schema.Boolean;
    readonly hubBasePath: Schema.String;
    readonly revision: Schema.Int;
    readonly hosts: Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly platforms: Schema.$Array<Schema.Struct<{
            readonly platform: Schema.Literals<readonly ["ios", "android"]>;
            readonly available: Schema.Boolean;
            readonly reason: Schema.optional<Schema.String>;
        }>>;
        readonly tools: Schema.optional<Schema.Struct<{
            readonly hub: Schema.Struct<{
                readonly requiredVersion: Schema.String;
                readonly installedVersions: Schema.$Array<Schema.String>;
                readonly runningVersion: Schema.NullOr<Schema.String>;
            }>;
            readonly agent: Schema.Struct<{
                readonly requiredVersion: Schema.String;
                readonly installedVersions: Schema.$Array<Schema.String>;
                readonly runningVersion: Schema.NullOr<Schema.String>;
            }>;
        }>>;
        readonly toolInspectionError: Schema.optional<Schema.String>;
        readonly hubInstalled: Schema.Boolean;
        readonly agentDeviceInstalled: Schema.Boolean;
        readonly kind: Schema.Literals<readonly ["local", "ssh"]>;
    }>>;
    readonly easHosts: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly platforms: Schema.$Array<Schema.Struct<{
            readonly platform: Schema.Literals<readonly ["ios", "android"]>;
            readonly available: Schema.Boolean;
            readonly reason: Schema.optional<Schema.String>;
        }>>;
        readonly tools: Schema.optional<Schema.Struct<{
            readonly hub: Schema.Struct<{
                readonly requiredVersion: Schema.String;
                readonly installedVersions: Schema.$Array<Schema.String>;
                readonly runningVersion: Schema.NullOr<Schema.String>;
            }>;
            readonly agent: Schema.Struct<{
                readonly requiredVersion: Schema.String;
                readonly installedVersions: Schema.$Array<Schema.String>;
                readonly runningVersion: Schema.NullOr<Schema.String>;
            }>;
        }>>;
        readonly toolInspectionError: Schema.optional<Schema.String>;
        readonly hubInstalled: Schema.Boolean;
        readonly agentDeviceInstalled: Schema.Boolean;
        readonly kind: Schema.Literal<"eas">;
    }>>>;
}>, never, never>;
export type DeviceServiceState = typeof DeviceServiceState.Type;
export declare const DeviceListInput: Schema.Struct<{
    readonly updateTool: Schema.optional<Schema.Literals<readonly ["hub", "agent"]>>;
    readonly inspectOnly: Schema.optional<Schema.Boolean>;
    readonly retryHostId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type DeviceListInput = typeof DeviceListInput.Type;
export declare const DeviceConfigureInput: Schema.Struct<{
    readonly enabled: Schema.optional<Schema.Boolean>;
    readonly agentAccessEnabled: Schema.optional<Schema.Boolean>;
    readonly onboardingCompleted: Schema.optional<Schema.Boolean>;
}>;
export type DeviceConfigureInput = typeof DeviceConfigureInput.Type;
export declare const DeviceOpenInput: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly hostId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly platform: Schema.Literals<readonly ["ios", "android"]>;
    /** Boot the simulator or emulator when it is not running. Defaults to true. */
    readonly boot: Schema.optional<Schema.Boolean>;
}>;
export type DeviceOpenInput = typeof DeviceOpenInput.Type;
export declare const DeviceCloseInput: Schema.Struct<{
    readonly hostId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    /** Omit to close every device session for the thread. */
    readonly deviceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    /** Also shut the simulator or emulator down. Defaults to false. */
    readonly shutdown: Schema.optional<Schema.Boolean>;
}>;
export type DeviceCloseInput = typeof DeviceCloseInput.Type;
export declare const DeviceShutdownInput: Schema.Struct<{
    readonly hostId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly platform: Schema.Literals<readonly ["ios", "android"]>;
}>;
export type DeviceShutdownInput = typeof DeviceShutdownInput.Type;
export declare const DeviceAppearance: Schema.Literals<readonly ["light", "dark"]>;
export type DeviceAppearance = typeof DeviceAppearance.Type;
export declare const DeviceTextSize: Schema.Literals<readonly ["small", "default", "large", "extra-large"]>;
export type DeviceTextSize = typeof DeviceTextSize.Type;
export declare const DeviceColorFilter: Schema.Literals<readonly ["none", "grayscale", "red-green", "green-red", "blue-yellow"]>;
export type DeviceColorFilter = typeof DeviceColorFilter.Type;
export declare const DeviceOrientation: Schema.Literals<readonly ["portrait", "landscape_left", "portrait_upside_down", "landscape_right"]>;
export type DeviceOrientation = typeof DeviceOrientation.Type;
export declare const DeviceSettings: Schema.Struct<{
    readonly appearance: Schema.optional<Schema.Literals<readonly ["light", "dark"]>>;
    readonly textSize: Schema.optional<Schema.Literals<readonly ["small", "default", "large", "extra-large"]>>;
    readonly reduceMotion: Schema.optional<Schema.Boolean>;
    readonly increaseContrast: Schema.optional<Schema.Boolean>;
    readonly reduceTransparency: Schema.optional<Schema.Boolean>;
    readonly showBorders: Schema.optional<Schema.Boolean>;
    readonly voiceOver: Schema.optional<Schema.Boolean>;
    readonly liquidGlass: Schema.optional<Schema.Literals<readonly ["clear", "tinted"]>>;
    readonly colorFilter: Schema.optional<Schema.Literals<readonly ["none", "grayscale", "red-green", "green-red", "blue-yellow"]>>;
    readonly networkEnabled: Schema.optional<Schema.Boolean>;
    readonly location: Schema.optional<Schema.NullOr<Schema.Struct<{
        readonly latitude: Schema.Number;
        readonly longitude: Schema.Number;
    }>>>;
}>;
export type DeviceSettings = typeof DeviceSettings.Type;
export declare const DeviceForegroundApp: Schema.Struct<{
    readonly id: Schema.String;
    readonly name: Schema.optional<Schema.String>;
    readonly version: Schema.optional<Schema.String>;
}>;
export type DeviceForegroundApp = typeof DeviceForegroundApp.Type;
export declare const DeviceDetail: Schema.Struct<{
    readonly hostId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly settings: Schema.Struct<{
        readonly appearance: Schema.optional<Schema.Literals<readonly ["light", "dark"]>>;
        readonly textSize: Schema.optional<Schema.Literals<readonly ["small", "default", "large", "extra-large"]>>;
        readonly reduceMotion: Schema.optional<Schema.Boolean>;
        readonly increaseContrast: Schema.optional<Schema.Boolean>;
        readonly reduceTransparency: Schema.optional<Schema.Boolean>;
        readonly showBorders: Schema.optional<Schema.Boolean>;
        readonly voiceOver: Schema.optional<Schema.Boolean>;
        readonly liquidGlass: Schema.optional<Schema.Literals<readonly ["clear", "tinted"]>>;
        readonly colorFilter: Schema.optional<Schema.Literals<readonly ["none", "grayscale", "red-green", "green-red", "blue-yellow"]>>;
        readonly networkEnabled: Schema.optional<Schema.Boolean>;
        readonly location: Schema.optional<Schema.NullOr<Schema.Struct<{
            readonly latitude: Schema.Number;
            readonly longitude: Schema.Number;
        }>>>;
    }>;
    readonly foregroundApp: Schema.NullOr<Schema.Struct<{
        readonly id: Schema.String;
        readonly name: Schema.optional<Schema.String>;
        readonly version: Schema.optional<Schema.String>;
    }>>;
    readonly readAt: Schema.String;
}>;
export type DeviceDetail = typeof DeviceDetail.Type;
export declare const DevicePermission: Schema.Literals<readonly ["camera", "microphone", "photos", "contacts", "calendar", "reminders", "location", "notifications", "motion", "media-library", "faceid"]>;
export type DevicePermission = typeof DevicePermission.Type;
export declare const DeviceActionInput: Schema.Union<readonly [Schema.Struct<{
    readonly hostId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly type: Schema.Literal<"setAppearance">;
    readonly value: Schema.Literals<readonly ["light", "dark"]>;
}>, Schema.Struct<{
    readonly hostId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly type: Schema.Literal<"setTextSize">;
    readonly value: Schema.Literals<readonly ["small", "default", "large", "extra-large"]>;
}>, Schema.Struct<{
    readonly hostId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly type: Schema.Literal<"setToggle">;
    readonly setting: Schema.Literals<readonly ["reduceMotion", "increaseContrast", "reduceTransparency", "showBorders", "voiceOver", "networkEnabled"]>;
    readonly value: Schema.Boolean;
}>, Schema.Struct<{
    readonly hostId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly type: Schema.Literal<"setLiquidGlass">;
    readonly value: Schema.Literals<readonly ["clear", "tinted"]>;
}>, Schema.Struct<{
    readonly hostId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly type: Schema.Literal<"setColorFilter">;
    readonly value: Schema.Literals<readonly ["none", "grayscale", "red-green", "green-red", "blue-yellow"]>;
}>, Schema.Struct<{
    readonly hostId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly type: Schema.Literal<"setOrientation">;
    readonly value: Schema.Literals<readonly ["portrait", "landscape_left", "portrait_upside_down", "landscape_right"]>;
}>, Schema.Struct<{
    readonly hostId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly type: Schema.Literal<"setLocation">;
    readonly latitude: Schema.Number;
    readonly longitude: Schema.Number;
}>, Schema.Struct<{
    readonly hostId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly type: Schema.Literal<"clearLocation">;
}>, Schema.Struct<{
    readonly hostId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly type: Schema.Literal<"setPermission">;
    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly permission: Schema.Literals<readonly ["camera", "microphone", "photos", "contacts", "calendar", "reminders", "location", "notifications", "motion", "media-library", "faceid"]>;
    readonly decision: Schema.Literals<readonly ["grant", "revoke", "reset"]>;
}>, Schema.Struct<{
    readonly hostId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly type: Schema.Literal<"openUrl">;
    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, Schema.Struct<{
    readonly hostId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly type: Schema.Literal<"launchApp">;
    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, Schema.Struct<{
    readonly hostId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly type: Schema.Literal<"terminateApp">;
    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, Schema.Struct<{
    readonly hostId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly type: Schema.Literal<"shake">;
}>, Schema.Struct<{
    readonly hostId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly type: Schema.Literal<"sendPush">;
    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly payload: Schema.Union<readonly [Schema.String, Schema.$Record<Schema.String, Schema.Unknown>]>;
}>]>;
export type DeviceActionInput = typeof DeviceActionInput.Type;
export type DeviceActionType = DeviceActionInput["type"];
export declare const DeviceDetailInput: Schema.Struct<{
    hostId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type DeviceDetailInput = typeof DeviceDetailInput.Type;
declare const DeviceHostUnavailableError_base: Schema.Class<DeviceHostUnavailableError, Schema.TaggedStruct<"DeviceHostUnavailableError", {
    readonly hostId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    /** The host's name in Settings, which the message shows instead of its id. */
    readonly hostLabel: Schema.optional<Schema.String>;
    readonly reason: Schema.String;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class DeviceHostUnavailableError extends DeviceHostUnavailableError_base {
    get message(): string;
}
declare const DevicePlatformUnavailableError_base: Schema.Class<DevicePlatformUnavailableError, Schema.TaggedStruct<"DevicePlatformUnavailableError", {
    readonly hostId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly platform: Schema.Literals<readonly ["ios", "android"]>;
    readonly reason: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class DevicePlatformUnavailableError extends DevicePlatformUnavailableError_base {
    get message(): string;
}
declare const DeviceNotFoundError_base: Schema.Class<DeviceNotFoundError, Schema.TaggedStruct<"DeviceNotFoundError", {
    readonly hostId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, import("effect/Cause").YieldableError>;
export declare class DeviceNotFoundError extends DeviceNotFoundError_base {
    get message(): string;
}
declare const DeviceBootError_base: Schema.Class<DeviceBootError, Schema.TaggedStruct<"DeviceBootError", {
    readonly hostId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly reason: Schema.Literals<readonly ["disk_space", "timeout", "launch_failed"]>;
    readonly diagnostics: Schema.optional<Schema.String>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DeviceBootError extends DeviceBootError_base {
    get message(): string;
}
declare const DeviceOperationError_base: Schema.Class<DeviceOperationError, Schema.TaggedStruct<"DeviceOperationError", {
    readonly operation: Schema.String;
    readonly reason: Schema.Literals<readonly ["command_failed", "request_failed", "invalid_payload", "settings_failed", "hub_rejected"]>;
    readonly exitCode: Schema.optional<Schema.Number>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DeviceOperationError extends DeviceOperationError_base {
    get message(): string;
}
declare const DeviceActionUnavailableError_base: Schema.Class<DeviceActionUnavailableError, Schema.TaggedStruct<"DeviceActionUnavailableError", {
    readonly operation: Schema.String;
    readonly platform: Schema.Literals<readonly ["ios", "android"]>;
    readonly reason: Schema.Literals<readonly ["unsupported", "helper_missing"]>;
}>, import("effect/Cause").YieldableError>;
export declare class DeviceActionUnavailableError extends DeviceActionUnavailableError_base {
    get message(): string;
}
export declare const DeviceError: Schema.Union<readonly [typeof DeviceHostUnavailableError, typeof DevicePlatformUnavailableError, typeof DeviceNotFoundError, typeof DeviceBootError, typeof DeviceOperationError, typeof DeviceActionUnavailableError]>;
export type DeviceError = typeof DeviceError.Type;
export declare const DeviceToolListResult: Schema.Struct<{
    readonly hostStatuses: Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Struct<{
        readonly status: Schema.Literals<readonly ["disabled", "idle", "installing", "starting", "ready", "failed"]>;
        readonly detail: Schema.optional<Schema.String>;
        readonly androidDiscoveryIncomplete: Schema.optional<Schema.Boolean>;
    }>>;
    readonly hosts: Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly platforms: Schema.$Array<Schema.Struct<{
            readonly platform: Schema.Literals<readonly ["ios", "android"]>;
            readonly available: Schema.Boolean;
            readonly reason: Schema.optional<Schema.String>;
        }>>;
        readonly tools: Schema.optional<Schema.Struct<{
            readonly hub: Schema.Struct<{
                readonly requiredVersion: Schema.String;
                readonly installedVersions: Schema.$Array<Schema.String>;
                readonly runningVersion: Schema.NullOr<Schema.String>;
            }>;
            readonly agent: Schema.Struct<{
                readonly requiredVersion: Schema.String;
                readonly installedVersions: Schema.$Array<Schema.String>;
                readonly runningVersion: Schema.NullOr<Schema.String>;
            }>;
        }>>;
        readonly toolInspectionError: Schema.optional<Schema.String>;
        readonly hubInstalled: Schema.Boolean;
        readonly agentDeviceInstalled: Schema.Boolean;
        readonly kind: Schema.Literals<readonly ["local", "ssh"]>;
    }>, Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly platforms: Schema.$Array<Schema.Struct<{
            readonly platform: Schema.Literals<readonly ["ios", "android"]>;
            readonly available: Schema.Boolean;
            readonly reason: Schema.optional<Schema.String>;
        }>>;
        readonly tools: Schema.optional<Schema.Struct<{
            readonly hub: Schema.Struct<{
                readonly requiredVersion: Schema.String;
                readonly installedVersions: Schema.$Array<Schema.String>;
                readonly runningVersion: Schema.NullOr<Schema.String>;
            }>;
            readonly agent: Schema.Struct<{
                readonly requiredVersion: Schema.String;
                readonly installedVersions: Schema.$Array<Schema.String>;
                readonly runningVersion: Schema.NullOr<Schema.String>;
            }>;
        }>>;
        readonly toolInspectionError: Schema.optional<Schema.String>;
        readonly hubInstalled: Schema.Boolean;
        readonly agentDeviceInstalled: Schema.Boolean;
        readonly kind: Schema.Literal<"eas">;
    }>]>>;
    readonly devices: Schema.$Array<Schema.Struct<{
        readonly hostId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly platform: Schema.Literals<readonly ["ios", "android"]>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly version: Schema.String;
        readonly booted: Schema.Boolean;
        readonly physical: Schema.Boolean;
    }>>;
    readonly open: Schema.$Array<Schema.Struct<{
        readonly hostId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
}>;
export type DeviceToolListResult = typeof DeviceToolListResult.Type;
export declare const DeviceToolOpenInput: Schema.Struct<{
    readonly deviceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly platform: Schema.optional<Schema.Literals<readonly ["ios", "android"]>>;
    readonly hostId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type DeviceToolOpenInput = typeof DeviceToolOpenInput.Type;
export declare const DeviceToolOpenResult: Schema.Struct<{
    readonly device: Schema.Struct<{
        readonly hostId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly platform: Schema.Literals<readonly ["ios", "android"]>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly version: Schema.String;
        readonly booted: Schema.Boolean;
        readonly physical: Schema.Boolean;
    }>;
    readonly agentDevice: Schema.Struct<{
        readonly command: Schema.String;
        readonly targetArgs: Schema.$Array<Schema.String>;
    }>;
    readonly quickStart: Schema.String;
}>;
export type DeviceToolOpenResult = typeof DeviceToolOpenResult.Type;
export declare const DeviceToolTargetInput: Schema.Struct<{
    readonly deviceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly hostId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type DeviceToolTargetInput = typeof DeviceToolTargetInput.Type;
export declare const DeviceToolScreenshotResult: Schema.Struct<{
    readonly device: Schema.Struct<{
        readonly hostId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly platform: Schema.Literals<readonly ["ios", "android"]>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly version: Schema.String;
        readonly booted: Schema.Boolean;
        readonly physical: Schema.Boolean;
    }>;
    readonly screenshot: Schema.Struct<{
        readonly mimeType: Schema.Literal<"image/png">;
        readonly data: Schema.String;
        readonly width: Schema.Int;
        readonly height: Schema.Int;
    }>;
}>;
export type DeviceToolScreenshotResult = typeof DeviceToolScreenshotResult.Type;
export declare const DeviceToolCloseInput: Schema.Struct<{
    readonly deviceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly hostId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly shutdown: Schema.optional<Schema.Boolean>;
}>;
export type DeviceToolCloseInput = typeof DeviceToolCloseInput.Type;
declare const DeviceToolUnavailableError_base: Schema.Class<DeviceToolUnavailableError, Schema.TaggedStruct<"DeviceToolUnavailableError", {
    readonly reason: Schema.String;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class DeviceToolUnavailableError extends DeviceToolUnavailableError_base {
    get message(): string;
}
export declare const DeviceToolError: Schema.Union<readonly [typeof DeviceToolUnavailableError, typeof DeviceHostUnavailableError, typeof DevicePlatformUnavailableError, typeof DeviceNotFoundError, typeof DeviceBootError, typeof DeviceOperationError, typeof DeviceActionUnavailableError]>;
export type DeviceToolError = typeof DeviceToolError.Type;
export declare function deviceToolInstallMessage(name: string, tool: DeviceToolVersion | undefined): string;
export {};
