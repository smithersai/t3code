import * as Schema from "effect/Schema";
import type { PreviewCaptureFailureEncoded } from "./previewCapture.vibe";
import { EnvironmentId } from "./baseSchemas.vibe";
import type { BrowserImportResult, BrowserImportSource, BrowserImportSourceId } from "./browserImport.vibe";
import { AuthAccessTokenResult, AuthSessionState, AuthWebSocketTicketResult } from "./auth.vibe";
import { AdvertisedEndpoint } from "./remoteAccess.vibe";
import { ExecutionEnvironmentDescriptor } from "./environment.vibe";
import { type ClientSettings, type QuitConfirmationMode, SnapShotShortcut } from "./settings.vibe";
import type { EditorId } from "./editor.vibe";
import type { PreviewForwardedShortcut } from "./keybindings.vibe";
import type { DesktopAppActivationRequest, DesktopAppActivationResponse } from "./desktopAppActivation.vibe";
export interface ContextMenuItem<T extends string = string> {
    id: T;
    label: string;
    destructive?: boolean;
    disabled?: boolean;
    header?: boolean;
    icon?: string;
    separatorBefore?: boolean;
    checked?: boolean;
    children?: readonly ContextMenuItem<T>[];
}
export type QuitShortcutHintEvent = {
    readonly state: "down";
    readonly mode: Exclude<QuitConfirmationMode, "direct">;
} | {
    readonly state: "up";
};
export interface ContextMenuItemSchemaType {
    readonly id: string;
    readonly label: string;
    readonly destructive?: boolean;
    readonly disabled?: boolean;
    readonly header?: boolean;
    readonly icon?: string;
    readonly separatorBefore?: boolean;
    readonly checked?: boolean;
    readonly children?: readonly ContextMenuItemSchemaType[];
}
export declare const ContextMenuItemSchema: Schema.Codec<ContextMenuItemSchemaType>;
export type DesktopUpdateStatus = "disabled" | "idle" | "checking" | "up-to-date" | "available" | "downloading" | "downloaded" | "error";
export type DesktopRuntimeArch = "arm64" | "x64" | "other";
export type DesktopTheme = "light" | "dark" | "system";
export type DesktopUpdateChannel = "latest" | "nightly";
export type DesktopAppStageLabel = "Alpha" | "Beta" | "Dev" | "Nightly";
export declare const DesktopUpdateStatusSchema: Schema.Literals<readonly ["disabled", "idle", "checking", "up-to-date", "available", "downloading", "downloaded", "error"]>;
export declare const DesktopRuntimeArchSchema: Schema.Literals<readonly ["arm64", "x64", "other"]>;
export declare const DesktopThemeSchema: Schema.Literals<readonly ["light", "dark", "system"]>;
export declare const DesktopUpdateChannelSchema: Schema.Literals<readonly ["latest", "nightly"]>;
export declare const DesktopAppStageLabelSchema: Schema.Literals<readonly ["Alpha", "Beta", "Dev", "Nightly"]>;
export interface DesktopAppBranding {
    baseName: string;
    stageLabel: DesktopAppStageLabel;
    displayName: string;
}
export declare const DesktopAppBrandingSchema: Schema.Struct<{
    readonly baseName: Schema.String;
    readonly stageLabel: Schema.Literals<readonly ["Alpha", "Beta", "Dev", "Nightly"]>;
    readonly displayName: Schema.String;
}>;
export declare const DesktopSnapShotMode: Schema.Literals<readonly ["direct", "portal", "unavailable"]>;
export type DesktopSnapShotMode = typeof DesktopSnapShotMode.Type;
export declare const DesktopCaptureExtensionState: Schema.Struct<{
    readonly status: Schema.Literals<readonly ["not-installed", "disabled", "enabled", "restart-required", "update-required", "extensions-disabled", "unsupported", "error"]>;
    readonly message: Schema.String;
}>;
export type DesktopCaptureExtensionState = typeof DesktopCaptureExtensionState.Type;
export declare const DesktopCaptureHelperState: Schema.Struct<{
    readonly status: Schema.Literals<readonly ["not-installed", "update-required", "ready", "error"]>;
    readonly message: Schema.String;
    readonly feedbackAvailable: Schema.optional<Schema.Boolean>;
}>;
export type DesktopCaptureHelperState = typeof DesktopCaptureHelperState.Type;
export declare const DesktopSnapShotSetupAction: Schema.Literals<readonly ["install-extension", "enable-extension", "disable-extension", "install-kde-helper", "remove-kde-helper", "install-hyprland-helper", "remove-hyprland-helper", "test-mac-capture", "allow-screen-recording", "allow-accessibility", "retry-shortcut"]>;
export type DesktopSnapShotSetupAction = typeof DesktopSnapShotSetupAction.Type;
export declare const DesktopCaptureConfigRequest: Schema.Struct<{
    readonly operation: Schema.Literals<readonly ["install", "remove"]>;
    readonly chooseFile: Schema.Boolean;
    readonly shortcut: Schema.optional<Schema.String>;
}>;
export type DesktopCaptureConfigRequest = typeof DesktopCaptureConfigRequest.Type;
export declare const DesktopCaptureConfigPreview: Schema.Struct<{
    readonly id: Schema.String;
    readonly path: Schema.String;
    readonly resolvedPath: Schema.String;
    readonly before: Schema.String;
    readonly after: Schema.String;
    readonly shortcut: Schema.String;
    readonly operation: Schema.Literals<readonly ["install", "remove"]>;
}>;
export type DesktopCaptureConfigPreview = typeof DesktopCaptureConfigPreview.Type;
export declare const DesktopCaptureConfigApplied: Schema.Struct<{
    readonly backupPath: Schema.NullOr<Schema.String>;
    readonly warning: Schema.NullOr<Schema.String>;
}>;
export type DesktopCaptureConfigApplied = typeof DesktopCaptureConfigApplied.Type;
export declare const DesktopSnapShotState: Schema.Struct<{
    readonly mode: Schema.Literals<readonly ["direct", "portal", "unavailable"]>;
    readonly windows: Schema.optional<Schema.Boolean>;
    readonly linuxDesktop: Schema.optional<Schema.Literals<readonly ["gnome", "kde", "niri", "hyprland"]>>;
    readonly linuxBackend: Schema.optional<Schema.Literals<readonly ["screenshot-portal", "gnome-extension", "niri", "kde", "hyprland", "picker"]>>;
    readonly linuxFeedbackAvailable: Schema.optional<Schema.Boolean>;
    readonly shortcut: Schema.Union<readonly [Schema.Struct<{
        readonly kind: Schema.Literal<"both-shift-keys">;
    }>, Schema.Struct<{
        readonly kind: Schema.Literal<"modifier-pair">;
        readonly modifier: Schema.Literals<readonly ["shift", "meta", "control", "alt"]>;
    }>, Schema.Struct<{
        readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly metaKey: Schema.Boolean;
        readonly ctrlKey: Schema.Boolean;
        readonly shiftKey: Schema.Boolean;
        readonly altKey: Schema.Boolean;
        readonly modKey: Schema.Boolean;
    }>]>;
    readonly shortcutRegistered: Schema.Boolean;
    readonly shortcutPending: Schema.optional<Schema.Boolean>;
    readonly shortcutCanRetry: Schema.optional<Schema.Boolean>;
    readonly shortcutLabel: Schema.optional<Schema.String>;
    readonly shortcutMessage: Schema.NullOr<Schema.String>;
    readonly shortcutBinding: Schema.optional<Schema.String>;
    readonly shortcutConfigPath: Schema.optional<Schema.String>;
    readonly shortcutActionRegistered: Schema.optional<Schema.Boolean>;
    readonly gnomeExtension: Schema.optional<Schema.Struct<{
        readonly status: Schema.Literals<readonly ["not-installed", "disabled", "enabled", "restart-required", "update-required", "extensions-disabled", "unsupported", "error"]>;
        readonly message: Schema.String;
    }>>;
    readonly kdeHelper: Schema.optional<Schema.Struct<{
        readonly status: Schema.Literals<readonly ["not-installed", "update-required", "ready", "error"]>;
        readonly message: Schema.String;
        readonly feedbackAvailable: Schema.optional<Schema.Boolean>;
    }>>;
    readonly hyprlandHelper: Schema.optional<Schema.Struct<{
        readonly status: Schema.Literals<readonly ["not-installed", "update-required", "ready", "error"]>;
        readonly message: Schema.String;
        readonly feedbackAvailable: Schema.optional<Schema.Boolean>;
    }>>;
    readonly macPermissions: Schema.optional<Schema.Struct<{
        readonly screenRecording: Schema.Boolean;
        readonly accessibility: Schema.Boolean;
    }>>;
    readonly shortcutVerified: Schema.optional<Schema.Boolean>;
    readonly message: Schema.NullOr<Schema.String>;
}>;
export type DesktopSnapShotState = typeof DesktopSnapShotState.Type;
export declare const DesktopSnapShotShortcutAvailability: Schema.Struct<{
    readonly available: Schema.Boolean;
    readonly message: Schema.NullOr<Schema.String>;
}>;
export type DesktopSnapShotShortcutAvailability = typeof DesktopSnapShotShortcutAvailability.Type;
export declare const DesktopSnapShotId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
export type DesktopSnapShotId = typeof DesktopSnapShotId.Type;
/** `id` is absent for failures before a capture exists. */
export declare const DesktopSnapShotEvent: Schema.Union<readonly [Schema.Struct<{
    readonly type: Schema.Literal<"requested">;
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"started">;
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"ready">;
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"failed">;
    readonly id: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"shortcut-changed">;
}>]>;
export type DesktopSnapShotEvent = typeof DesktopSnapShotEvent.Type;
export declare const DesktopPendingSnapShot: Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly name: Schema.String;
    readonly mimeType: Schema.Literal<"image/png">;
    readonly sizeBytes: Schema.Int;
    readonly source: Schema.Struct<{
        readonly kind: Schema.Literal<"snap-shot">;
        readonly capturedAt: Schema.String;
        readonly appName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly windowTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly accessibleText: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly accessibility: Schema.optional<Schema.Union<readonly [Schema.Struct<{
            readonly format: Schema.Literal<"flat-text">;
            readonly text: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly truncated: Schema.Boolean;
        }>, Schema.Struct<{
            readonly format: Schema.Literal<"element-tree">;
            readonly coordinateSpace: Schema.Literal<"captured-image">;
            readonly imageSize: Schema.Struct<{
                readonly width: Schema.Int;
                readonly height: Schema.Int;
            }>;
            readonly truncated: Schema.Boolean;
            readonly root: Schema.Codec<import("./chatAttachment.vibe").SnapShotAccessibilityNode, import("./chatAttachment.vibe").SnapShotAccessibilityNode, never, never>;
        }>]>>;
        readonly appIdentifier: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly appIconDataUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>;
export type DesktopPendingSnapShot = typeof DesktopPendingSnapShot.Type;
export declare const DesktopSnapShot: Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly name: Schema.String;
    readonly mimeType: Schema.Literal<"image/png">;
    readonly sizeBytes: Schema.Int;
    readonly source: Schema.Struct<{
        readonly kind: Schema.Literal<"snap-shot">;
        readonly capturedAt: Schema.String;
        readonly appName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly windowTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly accessibleText: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly accessibility: Schema.optional<Schema.Union<readonly [Schema.Struct<{
            readonly format: Schema.Literal<"flat-text">;
            readonly text: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly truncated: Schema.Boolean;
        }>, Schema.Struct<{
            readonly format: Schema.Literal<"element-tree">;
            readonly coordinateSpace: Schema.Literal<"captured-image">;
            readonly imageSize: Schema.Struct<{
                readonly width: Schema.Int;
                readonly height: Schema.Int;
            }>;
            readonly truncated: Schema.Boolean;
            readonly root: Schema.Codec<import("./chatAttachment.vibe").SnapShotAccessibilityNode, import("./chatAttachment.vibe").SnapShotAccessibilityNode, never, never>;
        }>]>>;
        readonly appIdentifier: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly appIconDataUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
    readonly dataUrl: Schema.String;
}>;
export type DesktopSnapShot = typeof DesktopSnapShot.Type;
export declare const DesktopSnapShotAnimationDestination: Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly viewportFrame: Schema.Struct<{
        readonly x: Schema.Number;
        readonly y: Schema.Number;
        readonly width: Schema.Number;
        readonly height: Schema.Number;
    }>;
    readonly backgroundColor: Schema.String;
    readonly borderColor: Schema.String;
    readonly borderWidth: Schema.Number;
    readonly cornerRadius: Schema.Number;
    readonly details: Schema.optional<Schema.Struct<{
        readonly appName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly windowTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly appIconDataUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
}>;
export type DesktopSnapShotAnimationDestination = typeof DesktopSnapShotAnimationDestination.Type;
export interface DesktopRuntimeInfo {
    hostArch: DesktopRuntimeArch;
    appArch: DesktopRuntimeArch;
    runningUnderArm64Translation: boolean;
}
export interface DesktopUpdateState {
    enabled: boolean;
    status: DesktopUpdateStatus;
    channel: DesktopUpdateChannel;
    currentVersion: string;
    hostArch: DesktopRuntimeArch;
    appArch: DesktopRuntimeArch;
    runningUnderArm64Translation: boolean;
    availableVersion: string | null;
    downloadedVersion: string | null;
    releaseNotes: ReadonlyArray<DesktopUpdateReleaseNote>;
    omittedReleaseCount: number;
    downloadPercent: number | null;
    checkedAt: string | null;
    message: string | null;
    errorContext: "check" | "download" | "install" | null;
    canRetry: boolean;
    notAppliedVersion?: string;
}
export interface DesktopUpdateReleaseNote {
    version: string;
    items: ReadonlyArray<string>;
    totalItems: number;
}
export declare const DesktopUpdateReleaseNoteSchema: Schema.Struct<{
    readonly version: Schema.String;
    readonly items: Schema.$Array<Schema.String>;
    readonly totalItems: Schema.Number;
}>;
export declare const DesktopUpdateStateSchema: Schema.Struct<{
    readonly enabled: Schema.Boolean;
    readonly status: Schema.Literals<readonly ["disabled", "idle", "checking", "up-to-date", "available", "downloading", "downloaded", "error"]>;
    readonly channel: Schema.Literals<readonly ["latest", "nightly"]>;
    readonly currentVersion: Schema.String;
    readonly hostArch: Schema.Literals<readonly ["arm64", "x64", "other"]>;
    readonly appArch: Schema.Literals<readonly ["arm64", "x64", "other"]>;
    readonly runningUnderArm64Translation: Schema.Boolean;
    readonly availableVersion: Schema.NullOr<Schema.String>;
    readonly downloadedVersion: Schema.NullOr<Schema.String>;
    readonly releaseNotes: Schema.$Array<Schema.Struct<{
        readonly version: Schema.String;
        readonly items: Schema.$Array<Schema.String>;
        readonly totalItems: Schema.Number;
    }>>;
    readonly omittedReleaseCount: Schema.Number;
    readonly downloadPercent: Schema.NullOr<Schema.Number>;
    readonly checkedAt: Schema.NullOr<Schema.String>;
    readonly message: Schema.NullOr<Schema.String>;
    readonly errorContext: Schema.NullOr<Schema.Literals<readonly ["check", "download", "install"]>>;
    readonly canRetry: Schema.Boolean;
    readonly notAppliedVersion: Schema.optionalKey<Schema.String>;
}>;
export declare const DesktopCliCommandStateSchema: Schema.Struct<{
    readonly supported: Schema.Boolean;
    readonly installedPath: Schema.NullOr<Schema.String>;
    readonly onPath: Schema.Boolean;
    readonly shadowedBy: Schema.optionalKey<Schema.String>;
    /** The app's bundled `t3` launcher, which runs without Node or a PATH entry. */
    readonly launcherPath: Schema.NullOr<Schema.String>;
}>;
export type DesktopCliCommandState = typeof DesktopCliCommandStateSchema.Type;
export interface DesktopUpdateActionResult {
    accepted: boolean;
    completed: boolean;
    state: DesktopUpdateState;
}
export declare const DesktopUpdateActionResultSchema: Schema.Struct<{
    readonly accepted: Schema.Boolean;
    readonly completed: Schema.Boolean;
    readonly state: Schema.Struct<{
        readonly enabled: Schema.Boolean;
        readonly status: Schema.Literals<readonly ["disabled", "idle", "checking", "up-to-date", "available", "downloading", "downloaded", "error"]>;
        readonly channel: Schema.Literals<readonly ["latest", "nightly"]>;
        readonly currentVersion: Schema.String;
        readonly hostArch: Schema.Literals<readonly ["arm64", "x64", "other"]>;
        readonly appArch: Schema.Literals<readonly ["arm64", "x64", "other"]>;
        readonly runningUnderArm64Translation: Schema.Boolean;
        readonly availableVersion: Schema.NullOr<Schema.String>;
        readonly downloadedVersion: Schema.NullOr<Schema.String>;
        readonly releaseNotes: Schema.$Array<Schema.Struct<{
            readonly version: Schema.String;
            readonly items: Schema.$Array<Schema.String>;
            readonly totalItems: Schema.Number;
        }>>;
        readonly omittedReleaseCount: Schema.Number;
        readonly downloadPercent: Schema.NullOr<Schema.Number>;
        readonly checkedAt: Schema.NullOr<Schema.String>;
        readonly message: Schema.NullOr<Schema.String>;
        readonly errorContext: Schema.NullOr<Schema.Literals<readonly ["check", "download", "install"]>>;
        readonly canRetry: Schema.Boolean;
        readonly notAppliedVersion: Schema.optionalKey<Schema.String>;
    }>;
}>;
export interface DesktopUpdateCheckResult {
    checked: boolean;
    state: DesktopUpdateState;
}
export declare const DesktopUpdateCheckResultSchema: Schema.Struct<{
    readonly checked: Schema.Boolean;
    readonly state: Schema.Struct<{
        readonly enabled: Schema.Boolean;
        readonly status: Schema.Literals<readonly ["disabled", "idle", "checking", "up-to-date", "available", "downloading", "downloaded", "error"]>;
        readonly channel: Schema.Literals<readonly ["latest", "nightly"]>;
        readonly currentVersion: Schema.String;
        readonly hostArch: Schema.Literals<readonly ["arm64", "x64", "other"]>;
        readonly appArch: Schema.Literals<readonly ["arm64", "x64", "other"]>;
        readonly runningUnderArm64Translation: Schema.Boolean;
        readonly availableVersion: Schema.NullOr<Schema.String>;
        readonly downloadedVersion: Schema.NullOr<Schema.String>;
        readonly releaseNotes: Schema.$Array<Schema.Struct<{
            readonly version: Schema.String;
            readonly items: Schema.$Array<Schema.String>;
            readonly totalItems: Schema.Number;
        }>>;
        readonly omittedReleaseCount: Schema.Number;
        readonly downloadPercent: Schema.NullOr<Schema.Number>;
        readonly checkedAt: Schema.NullOr<Schema.String>;
        readonly message: Schema.NullOr<Schema.String>;
        readonly errorContext: Schema.NullOr<Schema.Literals<readonly ["check", "download", "install"]>>;
        readonly canRetry: Schema.Boolean;
        readonly notAppliedVersion: Schema.optionalKey<Schema.String>;
    }>;
}>;
export declare const PRIMARY_LOCAL_ENVIRONMENT_ID = "primary";
export interface DesktopEnvironmentBootstrap {
    id: string;
    label: string;
    runningDistro?: string | null;
    httpBaseUrl: string | null;
    wsBaseUrl: string | null;
    bootstrapToken?: string;
}
export declare const DesktopEnvironmentBootstrapSchema: Schema.Struct<{
    readonly id: Schema.String;
    readonly label: Schema.String;
    readonly runningDistro: Schema.optionalKey<Schema.NullOr<Schema.String>>;
    readonly httpBaseUrl: Schema.NullOr<Schema.String>;
    readonly wsBaseUrl: Schema.NullOr<Schema.String>;
    readonly bootstrapToken: Schema.optionalKey<Schema.String>;
}>;
export declare const DesktopSshEnvironmentTargetSchema: Schema.Struct<{
    readonly alias: Schema.String;
    readonly hostname: Schema.String;
    readonly username: Schema.NullOr<Schema.String>;
    readonly port: Schema.NullOr<Schema.Number>;
}>;
export type DesktopSshEnvironmentTarget = typeof DesktopSshEnvironmentTargetSchema.Type;
export type DesktopSshHostSource = "ssh-config" | "known-hosts";
export declare const DesktopSshHostSourceSchema: Schema.Literals<readonly ["ssh-config", "known-hosts"]>;
export interface DesktopDiscoveredSshHost extends DesktopSshEnvironmentTarget {
    source: DesktopSshHostSource;
}
export declare const DesktopDiscoveredSshHostSchema: Schema.Struct<{
    readonly alias: Schema.String;
    readonly hostname: Schema.String;
    readonly username: Schema.NullOr<Schema.String>;
    readonly port: Schema.NullOr<Schema.Number>;
    readonly source: Schema.Literals<readonly ["ssh-config", "known-hosts"]>;
}>;
export interface DesktopSshEnvironmentBootstrap {
    target: DesktopSshEnvironmentTarget;
    httpBaseUrl: string;
    wsBaseUrl: string;
    pairingToken: string | null;
    remotePort?: number;
    remoteServerKind?: "external" | "managed";
}
export declare const DesktopSshEnvironmentBootstrapSchema: Schema.Struct<{
    readonly target: Schema.Struct<{
        readonly alias: Schema.String;
        readonly hostname: Schema.String;
        readonly username: Schema.NullOr<Schema.String>;
        readonly port: Schema.NullOr<Schema.Number>;
    }>;
    readonly httpBaseUrl: Schema.String;
    readonly wsBaseUrl: Schema.String;
    readonly pairingToken: Schema.NullOr<Schema.String>;
    readonly remotePort: Schema.optionalKey<Schema.Number>;
    readonly remoteServerKind: Schema.optionalKey<Schema.Literals<readonly ["external", "managed"]>>;
}>;
export interface DesktopSshPasswordPromptRequest {
    requestId: string;
    destination: string;
    username: string | null;
    prompt: string;
    expiresAt: string;
}
export declare const DesktopSshPasswordPromptCancelledType: "ssh-password-prompt-cancelled";
export declare const DesktopSshPasswordPromptCancelledResultSchema: Schema.Struct<{
    readonly type: Schema.Literal<"ssh-password-prompt-cancelled">;
    readonly message: Schema.String;
}>;
export declare const DesktopSshEnvironmentEnsureOptionsSchema: Schema.Struct<{
    readonly issuePairingToken: Schema.optionalKey<Schema.Boolean>;
}>;
export declare const DesktopSshEnvironmentEnsureInputSchema: Schema.Struct<{
    readonly target: Schema.Struct<{
        readonly alias: Schema.String;
        readonly hostname: Schema.String;
        readonly username: Schema.NullOr<Schema.String>;
        readonly port: Schema.NullOr<Schema.Number>;
    }>;
    readonly options: Schema.optionalKey<Schema.Struct<{
        readonly issuePairingToken: Schema.optionalKey<Schema.Boolean>;
    }>>;
}>;
export declare const DesktopSshEnvironmentEnsureResultSchema: Schema.Union<readonly [Schema.Struct<{
    readonly target: Schema.Struct<{
        readonly alias: Schema.String;
        readonly hostname: Schema.String;
        readonly username: Schema.NullOr<Schema.String>;
        readonly port: Schema.NullOr<Schema.Number>;
    }>;
    readonly httpBaseUrl: Schema.String;
    readonly wsBaseUrl: Schema.String;
    readonly pairingToken: Schema.NullOr<Schema.String>;
    readonly remotePort: Schema.optionalKey<Schema.Number>;
    readonly remoteServerKind: Schema.optionalKey<Schema.Literals<readonly ["external", "managed"]>>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"ssh-password-prompt-cancelled">;
    readonly message: Schema.String;
}>]>;
export declare const DesktopSshHttpBaseUrlInputSchema: Schema.Struct<{
    readonly httpBaseUrl: Schema.String;
}>;
export declare const DesktopSshBearerRequestInputSchema: Schema.Struct<{
    readonly httpBaseUrl: Schema.String;
    readonly bearerToken: Schema.String;
}>;
export declare const DesktopSshBearerBootstrapInputSchema: Schema.Struct<{
    readonly httpBaseUrl: Schema.String;
    readonly credential: Schema.String;
}>;
export declare const DesktopSshPasswordPromptResolutionInputSchema: Schema.Struct<{
    readonly requestId: Schema.String;
    readonly password: Schema.NullOr<Schema.String>;
}>;
export declare const PersistedSavedEnvironmentRecordSchema: Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly label: Schema.String;
    readonly wsBaseUrl: Schema.String;
    readonly httpBaseUrl: Schema.String;
    readonly createdAt: Schema.String;
    readonly lastConnectedAt: Schema.NullOr<Schema.String>;
    readonly desktopSsh: Schema.optionalKey<Schema.Struct<{
        readonly alias: Schema.String;
        readonly hostname: Schema.String;
        readonly username: Schema.NullOr<Schema.String>;
        readonly port: Schema.NullOr<Schema.Number>;
    }>>;
    readonly relayManaged: Schema.optionalKey<Schema.Struct<{
        readonly relayUrl: Schema.String;
    }>>;
}>;
export type PersistedSavedEnvironmentRecord = typeof PersistedSavedEnvironmentRecordSchema.Type;
export type DesktopServerExposureMode = "local-only" | "network-accessible";
export declare const DesktopServerExposureModeSchema: Schema.Literals<readonly ["local-only", "network-accessible"]>;
export interface DesktopServerExposureState {
    mode: DesktopServerExposureMode;
    endpointUrl: string | null;
    advertisedHost: string | null;
    tailscaleServeEnabled: boolean;
    tailscaleServePort: number;
}
export declare const DesktopServerExposureStateSchema: Schema.Struct<{
    readonly mode: Schema.Literals<readonly ["local-only", "network-accessible"]>;
    readonly endpointUrl: Schema.NullOr<Schema.String>;
    readonly advertisedHost: Schema.NullOr<Schema.String>;
    readonly tailscaleServeEnabled: Schema.Boolean;
    readonly tailscaleServePort: Schema.Number;
}>;
export interface PickFolderOptions {
    initialPath?: string | null;
    targetEnvironmentId?: string;
}
export declare const PickFolderOptionsSchema: Schema.Struct<{
    readonly initialPath: Schema.optionalKey<Schema.NullOr<Schema.String>>;
    readonly targetEnvironmentId: Schema.optionalKey<Schema.String>;
}>;
/** Oversized files have empty text so the main process never loads their contents. */
export interface PickedThemeFile {
    name: string;
    size: number;
    text: string;
}
export declare const PickedThemeFileSchema: Schema.Struct<{
    readonly name: Schema.String;
    readonly size: Schema.Number;
    readonly text: Schema.String;
}>;
export interface DesktopWslDistro {
    name: string;
    isDefault: boolean;
    version: 1 | 2;
}
export declare const DesktopWslDistroSchema: Schema.Struct<{
    readonly name: Schema.String;
    readonly isDefault: Schema.Boolean;
    readonly version: Schema.Literals<readonly [1, 2]>;
}>;
export interface DesktopWslState {
    enabled: boolean;
    distro: string | null;
    available: boolean;
    wslOnly: boolean;
    distros: readonly DesktopWslDistro[];
    preflightError: string | null;
}
export declare const DesktopWslStateSchema: Schema.Struct<{
    readonly enabled: Schema.Boolean;
    readonly distro: Schema.NullOr<Schema.String>;
    readonly available: Schema.Boolean;
    readonly wslOnly: Schema.Boolean;
    readonly distros: Schema.$Array<Schema.Struct<{
        readonly name: Schema.String;
        readonly isDefault: Schema.Boolean;
        readonly version: Schema.Literals<readonly [1, 2]>;
    }>>;
    readonly preflightError: Schema.NullOr<Schema.String>;
}>;
export type DesktopPreviewNavStatus = {
    kind: "Idle";
} | {
    kind: "Loading";
    url: string;
    title: string;
} | {
    kind: "Success";
    url: string;
    title: string;
} | {
    kind: "LoadFailed";
    url: string;
    title: string;
    code: number;
    description: string;
};
export type DesktopPreviewColorScheme = "system" | "light" | "dark";
export declare const DesktopPreviewColorSchemeSchema: Schema.Codec<DesktopPreviewColorScheme>;
export declare const FAVICON_DATA_URL_MAX_LENGTH = 8192;
export declare const FAVICON_CAPTURED_AT_MAX = 8640000000000000;
export interface DesktopPreviewFavicon {
    dataUrl: string;
    pageUrl: string;
    capturedAt: number;
}
export interface DesktopPreviewTabState {
    tabId: string;
    webContentsId: number | null;
    navStatus: DesktopPreviewNavStatus;
    canGoBack: boolean;
    canGoForward: boolean;
    zoomFactor: number;
    pictureInPicture: boolean;
    colorScheme: DesktopPreviewColorScheme;
    audioMuted: boolean;
    /** Chromium reports playback even when audioMuted is true. */
    audible: boolean;
    controller: "human" | "agent" | "none";
    /** A screenshot or stream of the guest is pending, so the client keeps it painting while hidden. */
    capturing: boolean;
    favicon?: DesktopPreviewFavicon;
    updatedAt: string;
}
export declare const DesktopPreviewTabIdSchema: Schema.String;
export interface DesktopPreviewPointerEvent {
    tabId: string;
    phase: "move" | "click";
    x: number;
    y: number;
    sequence: number;
    createdAt: string;
}
export interface DesktopPreviewOpenLinkEvent {
    tabId: string;
    url: string;
    background: boolean;
}
export declare const DesktopPreviewRecordingInputSchema: Schema.Union<readonly [Schema.Struct<{
    readonly type: Schema.Literal<"pointer">;
    readonly phase: Schema.Literals<readonly ["move", "down", "up", "click"]>;
    readonly x: Schema.Finite;
    readonly y: Schema.Finite;
    readonly width: Schema.Finite;
    readonly height: Schema.Finite;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"key">;
    readonly label: Schema.NullOr<Schema.String>;
    readonly held: Schema.Boolean;
    readonly width: Schema.Finite;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"clear">;
}>]>;
export type DesktopPreviewRecordingInput = typeof DesktopPreviewRecordingInputSchema.Type;
export interface DesktopPreviewRecordingInputEvent {
    readonly tabId: string;
    readonly input: DesktopPreviewRecordingInput;
}
export interface DesktopPreviewWebviewConfig {
    partition: string;
    /** Sandboxed with contextIsolation off so the picker preload can read the React DevTools hook. */
    webPreferences: string;
    /** Absolute file:// preload URL; null requires disabling element picking. */
    preloadUrl: string | null;
}
export declare const DesktopPreviewWebviewConfigSchema: Schema.Codec<DesktopPreviewWebviewConfig>;
export interface DesktopPreviewAnnotationTheme {
    colorScheme: "light" | "dark";
    radius: string;
    background: string;
    foreground: string;
    popover: string;
    popoverForeground: string;
    primary: string;
    primaryForeground: string;
    muted: string;
    mutedForeground: string;
    accent: string;
    accentForeground: string;
    border: string;
    input: string;
    ring: string;
    fontSans: string;
    fontMono: string;
}
export declare const DesktopPreviewAnnotationThemeSchema: Schema.Codec<DesktopPreviewAnnotationTheme>;
export interface DesktopPreviewRecordingFrame {
    tabId: string;
    data: string;
    width: number;
    height: number;
    receivedAt: string;
}
export interface DesktopPreviewRecordingArtifact {
    id: string;
    tabId: string;
    path: string;
    mimeType: string;
    sizeBytes: number;
    createdAt: string;
}
export declare const DesktopPreviewRecordingArtifactSchema: Schema.Codec<DesktopPreviewRecordingArtifact>;
export interface DesktopPreviewScreenshotArtifact {
    id: string;
    tabId: string;
    path: string;
    mimeType: "image/png";
    sizeBytes: number;
    createdAt: string;
}
export declare const DesktopPreviewScreenshotArtifactSchema: Schema.Codec<DesktopPreviewScreenshotArtifact>;
export interface PickedElementStackFrame {
    functionName: string | null;
    fileName: string | null;
    lineNumber: number | null;
    columnNumber: number | null;
}
export declare const PickedElementStackFrameSchema: Schema.Codec<PickedElementStackFrame>;
export interface PickedElementPayload {
    pageUrl: string;
    pageTitle: string | null;
    tagName: string;
    selector: string | null;
    htmlPreview: string;
    componentName: string | null;
    source: PickedElementStackFrame | null;
    stack: ReadonlyArray<PickedElementStackFrame>;
    styles: string;
    pickedAt: string;
}
export declare const PickedElementPayloadSchema: Schema.Codec<PickedElementPayload>;
export interface PreviewAnnotationRect {
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare const PreviewAnnotationRectSchema: Schema.Codec<PreviewAnnotationRect>;
export interface PreviewAnnotationPoint {
    x: number;
    y: number;
}
export declare const PreviewAnnotationPointSchema: Schema.Codec<PreviewAnnotationPoint>;
export interface PreviewAnnotationElementTarget {
    id: string;
    element: PickedElementPayload;
    rect: PreviewAnnotationRect;
}
export declare const PreviewAnnotationElementTargetSchema: Schema.Codec<PreviewAnnotationElementTarget>;
export interface PreviewAnnotationRegionTarget {
    id: string;
    rect: PreviewAnnotationRect;
}
export declare const PreviewAnnotationRegionTargetSchema: Schema.Codec<PreviewAnnotationRegionTarget>;
export interface PreviewAnnotationStrokeTarget {
    id: string;
    color: string;
    width: number;
    points: ReadonlyArray<PreviewAnnotationPoint>;
    bounds: PreviewAnnotationRect;
}
export declare const PreviewAnnotationStrokeTargetSchema: Schema.Codec<PreviewAnnotationStrokeTarget>;
export interface PreviewAnnotationStyleChange {
    targetId: string;
    selector: string | null;
    property: string;
    previousValue: string;
    value: string;
}
export declare const PreviewAnnotationStyleChangeSchema: Schema.Codec<PreviewAnnotationStyleChange>;
export interface PreviewAnnotationScreenshot {
    dataUrl: string;
    width: number;
    height: number;
    cropRect: PreviewAnnotationRect;
}
export declare const PreviewAnnotationScreenshotSchema: Schema.Codec<PreviewAnnotationScreenshot>;
export interface PreviewAnnotationPayload {
    id: string;
    pageUrl: string;
    pageTitle: string | null;
    comment: string;
    elements: ReadonlyArray<PreviewAnnotationElementTarget>;
    regions: ReadonlyArray<PreviewAnnotationRegionTarget>;
    strokes: ReadonlyArray<PreviewAnnotationStrokeTarget>;
    styleChanges: ReadonlyArray<PreviewAnnotationStyleChange>;
    screenshot: PreviewAnnotationScreenshot | null;
    createdAt: string;
}
export declare const PreviewAnnotationPayloadSchema: Schema.Codec<PreviewAnnotationPayload>;
export type PreviewAnnotationSubmission = "attach" | "send";
export declare const PreviewAnnotationSubmissionSchema: Schema.Codec<PreviewAnnotationSubmission>;
export interface PreviewAnnotationSubmissionResult {
    annotation: PreviewAnnotationPayload;
    submission: PreviewAnnotationSubmission;
    screenshotFailed?: boolean;
}
export declare const PreviewAnnotationSubmissionResultSchema: Schema.Codec<PreviewAnnotationSubmissionResult>;
export declare const DesktopPreviewTabInputSchema: Schema.Struct<{
    readonly tabId: Schema.String;
}>;
/** Apply zoom and color scheme at creation to avoid flashing browser defaults. */
export declare const DesktopPreviewCreateTabInputSchema: Schema.Struct<{
    readonly tabId: Schema.String;
    readonly zoomFactor: Schema.optional<Schema.Number>;
    readonly colorScheme: Schema.optional<Schema.Codec<DesktopPreviewColorScheme, DesktopPreviewColorScheme, never, never>>;
    readonly serverTab: Schema.optional<Schema.Struct<{
        readonly threadId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly tabId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
}>;
export interface DesktopPreviewTabDefaults {
    readonly zoomFactor?: number | undefined;
    readonly colorScheme?: DesktopPreviewColorScheme | undefined;
    readonly serverTab?: {
        readonly threadId: string;
        readonly tabId: string;
    } | undefined;
}
export declare const DesktopPreviewRegisterWebviewInputSchema: Schema.Struct<{
    readonly tabId: Schema.String;
    readonly webContentsId: Schema.Int;
}>;
export declare const DesktopPreviewNavigateInputSchema: Schema.Struct<{
    readonly tabId: Schema.String;
    readonly url: Schema.String;
}>;
export declare const DesktopPreviewConfigInputSchema: Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    /** Main must derive the partition to ensure its session has UA rewrites and permission handlers. */
    readonly profileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export declare const DesktopPreviewClearDataInputSchema: Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    /** Omit to clear every profile; otherwise only this profile's partition. */
    readonly profileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export declare const DesktopPreviewSetColorSchemeInputSchema: Schema.Struct<{
    readonly tabId: Schema.String;
    readonly colorScheme: Schema.Codec<DesktopPreviewColorScheme, DesktopPreviewColorScheme, never, never>;
}>;
export declare const DesktopPreviewSetZoomFactorInputSchema: Schema.Struct<{
    readonly tabId: Schema.String;
    readonly zoomFactor: Schema.Number;
}>;
export declare const DesktopPreviewSetAudioMutedInputSchema: Schema.Struct<{
    readonly tabId: Schema.String;
    readonly audioMuted: Schema.Boolean;
}>;
export declare const DesktopPreviewAnnotationThemeInputSchema: Schema.Struct<{
    readonly theme: Schema.Codec<DesktopPreviewAnnotationTheme, DesktopPreviewAnnotationTheme, never, never>;
}>;
export declare const DesktopPreviewAnnotationSendEnabledInputSchema: Schema.Struct<{
    readonly tabId: Schema.String;
    readonly enabled: Schema.Boolean;
}>;
export declare const DesktopPreviewArtifactInputSchema: Schema.Struct<{
    readonly path: Schema.String;
}>;
export declare const DesktopPreviewRecordingSaveInputSchema: Schema.Struct<{
    readonly tabId: Schema.String;
    readonly mimeType: Schema.String;
    readonly data: Schema.Uint8Array;
}>;
export declare const SystemSettingsPaneSchema: Schema.Literals<readonly ["full-disk-access"]>;
export type SystemSettingsPane = typeof SystemSettingsPaneSchema.Type;
export interface DesktopBridge {
    /** @throws {never} */
    getAppBranding: () => DesktopAppBranding | null;
    /** @throws {never} */
    getRelayTelemetryEnabled?: () => boolean;
    /** @throws {never} */
    getPathForFile?: (file: File) => string;
    /** @throws {never} */
    getClientPlatform?: () => string;
    /** @throws {never} */
    setNotificationBadge?: (badge: {
        count: number;
        image: string | null;
    }) => Promise<void>;
    /** @throws {never} */
    onNotificationBadgeClear?: (listener: 
    /** @throws {never} */
    () => void) => 
    /** @throws {never} */
    () => void;
    /** @throws {never} */
    onTrackpadScrollEnd?: (listener: 
    /** @throws {never} */
    () => void) => 
    /** @throws {never} */
    () => void;
    /**
     * Renderer `window.focus()` cannot raise an Electron window, and on Wayland
     * only the main process can spend a notification click's activation token.
     * @throws {never}
     */
    revealWindow?: () => Promise<void>;
    /**
     * The OS locale as a BCP-47 tag, which the renderer cannot read for itself:
     * the packaged app ships only the `en-US` Chromium locale pak, so
     * `navigator.language` and the default `Intl` locale are pinned to `en-US`
     * regardless of OS settings.
     * @throws {never}
     */
    getSystemLocale?: () => string | null;
    /** @throws {never} */
    getLocalEnvironmentBootstraps: () => readonly DesktopEnvironmentBootstrap[];
    /** @throws {never} */
    getLocalEnvironmentEnabled?: () => boolean;
    /** @throws {never} */
    setLocalEnvironmentEnabled?: (enabled: boolean) => Promise<void>;
    /** @throws {never} */
    getLocalEnvironmentBearerToken: () => Promise<string>;
    /** @throws {never} */
    getClientSettings: () => Promise<ClientSettings | null>;
    /** @throws {never} */
    setClientSettings: (settings: ClientSettings) => Promise<void>;
    /** @throws {never} */
    getConnectionCatalog?: () => Promise<string | null>;
    /** @throws {never} */
    setConnectionCatalog?: (catalog: string) => Promise<boolean>;
    /** @throws {never} */
    clearConnectionCatalog?: () => Promise<void>;
    /** @throws {never} */
    discoverSshHosts: () => Promise<readonly DesktopDiscoveredSshHost[]>;
    /** @throws {never} */
    resolveSshHost: (alias: string) => Promise<DesktopSshEnvironmentTarget>;
    /** @throws {never} */
    requestSnapShotPermissions?: (includeAccessibility: boolean) => Promise<void>;
    /** @throws {never} */
    getSnapShotState?: () => Promise<DesktopSnapShotState>;
    /** @throws {never} */
    setupSnapShot?: (action: DesktopSnapShotSetupAction) => Promise<void>;
    /** @throws {never} */
    previewSnapShotConfig?: (request: DesktopCaptureConfigRequest) => Promise<DesktopCaptureConfigPreview | null>;
    /** @throws {never} */
    applySnapShotConfig?: (previewId: string) => Promise<DesktopCaptureConfigApplied>;
    /** @throws {never} */
    checkSnapShotShortcut?: (shortcut: SnapShotShortcut) => Promise<DesktopSnapShotShortcutAvailability>;
    /** @throws {never} */
    setSnapShotShortcutSuppressed?: (suppressed: boolean) => Promise<void>;
    /** @throws {never} */
    listPendingSnapShots?: () => Promise<readonly DesktopPendingSnapShot[]>;
    /** @throws {never} */
    readSnapShot?: (id: string) => Promise<DesktopSnapShot>;
    /** @throws {never} */
    setSnapShotAnimationDestination?: (destination: DesktopSnapShotAnimationDestination) => Promise<void>;
    /** @throws {never} */
    dismissSnapShotAnimation?: (id: DesktopSnapShotId) => Promise<void>;
    /** @throws {never} */
    acknowledgeSnapShot?: (id: string) => Promise<void>;
    /** @throws {never} */
    ensureSshEnvironment: (target: DesktopSshEnvironmentTarget, options?: {
        issuePairingToken?: boolean;
    }) => Promise<DesktopSshEnvironmentBootstrap>;
    /** @throws {never} */
    disconnectSshEnvironment: (target: DesktopSshEnvironmentTarget) => Promise<void>;
    /** @throws {never} */
    fetchSshEnvironmentDescriptor: (httpBaseUrl: string) => Promise<ExecutionEnvironmentDescriptor>;
    /** @throws {never} */
    bootstrapSshBearerSession: (httpBaseUrl: string, credential: string) => Promise<AuthAccessTokenResult>;
    /** @throws {never} */
    fetchSshSessionState: (httpBaseUrl: string, bearerToken: string) => Promise<AuthSessionState>;
    /** @throws {never} */
    issueSshWebSocketTicket: (httpBaseUrl: string, bearerToken: string) => Promise<AuthWebSocketTicketResult>;
    /** @throws {never} */
    onSshPasswordPrompt: (listener: 
    /** @throws {never} */
    (request: DesktopSshPasswordPromptRequest) => void) => 
    /** @throws {never} */
    () => void;
    /** @throws {never} */
    resolveSshPasswordPrompt: (requestId: string, password: string | null) => Promise<void>;
    /** @throws {never} */
    getServerExposureState: () => Promise<DesktopServerExposureState>;
    /** @throws {never} */
    setServerExposureMode: (mode: DesktopServerExposureMode) => Promise<DesktopServerExposureState>;
    /** @throws {never} */
    setTailscaleServeEnabled: (input: {
        readonly enabled: boolean;
        readonly port?: number;
    }) => Promise<DesktopServerExposureState>;
    /** @throws {never} */
    getAdvertisedEndpoints: () => Promise<readonly AdvertisedEndpoint[]>;
    /** @throws {never} */
    getWslState: () => Promise<DesktopWslState>;
    /** @throws {never} */
    setWslBackendEnabled: (enabled: boolean) => Promise<DesktopWslState>;
    /** @throws {never} */
    setWslDistro: (distro: string | null) => Promise<DesktopWslState>;
    /** @throws {never} */
    setWslOnly: (enabled: boolean) => Promise<DesktopWslState>;
    /** @throws {never} */
    pickFolder: (options?: PickFolderOptions) => Promise<string | null>;
    /** @throws {never} */
    pickProjectFavicon?: (initialPath?: string) => Promise<string | null>;
    /** @throws {never} */
    pickThemeFiles?: () => Promise<readonly PickedThemeFile[] | null>;
    /** @throws {never} */
    setTheme: (theme: DesktopTheme) => Promise<void>;
    /** @throws {never} */
    showContextMenu: <T extends string>(items: readonly ContextMenuItem<T>[], position?: {
        x: number;
        y: number;
    }) => Promise<T | null>;
    /** @throws {never} */
    receiveProviderAuthCallback?: (authorizationUrl: string) => Promise<string>;
    /** @throws {never} */
    cancelProviderAuthCallback?: (authorizationUrl: string) => Promise<void>;
    /** @throws {never} */
    openExternal: (url: string) => Promise<boolean>;
    /** @throws {never} */
    openSystemSettings?: (pane: SystemSettingsPane) => Promise<boolean>;
    /** @throws {never} */
    checkSystemPermission?: (pane: SystemSettingsPane) => Promise<boolean>;
    /**
     * Older builds lack this; fall back to VS Code only.
     * @throws {never}
     */
    probeRemoteEditors?: () => Promise<readonly EditorId[]>;
    /** @throws {never} */
    pasteAsText?: () => Promise<void>;
    /** @throws {never} */
    onMenuAction: (listener: 
    /** @throws {never} */
    (action: string) => void) => 
    /** @throws {never} */
    () => void;
    /** @throws {never} */
    onSnapShotEvent?: (listener: 
    /** @throws {never} */
    (event: DesktopSnapShotEvent) => void) => 
    /** @throws {never} */
    () => void;
    /** @throws {never} */
    onQuitShortcut?: (listener: 
    /** @throws {never} */
    (event: QuitShortcutHintEvent) => void) => 
    /** @throws {never} */
    () => void;
    /** @throws {never} */
    getWindowFullscreenState: () => boolean;
    /** @throws {never} */
    onWindowFullscreenStateChange: (listener: 
    /** @throws {never} */
    (fullscreen: boolean) => void) => 
    /** @throws {never} */
    () => void;
    /**
     * App window zoom; older desktop shells omit this method.
     * @throws {never}
     */
    getWindowZoomFactor?: () => number;
    /** @throws {never} */
    getUpdateState: () => Promise<DesktopUpdateState>;
    /** @throws {never} */
    setUpdateChannel: (channel: DesktopUpdateChannel) => Promise<DesktopUpdateState>;
    /** @throws {never} */
    checkForUpdate: () => Promise<DesktopUpdateCheckResult>;
    /** @throws {never} */
    downloadUpdate: () => Promise<DesktopUpdateActionResult>;
    /** @throws {never} */
    installUpdate: () => Promise<DesktopUpdateActionResult>;
    /** @throws {never} */
    onUpdateState: (listener: 
    /** @throws {never} */
    (state: DesktopUpdateState) => void) => 
    /** @throws {never} */
    () => void;
    cliCommand?: {
        /** @throws {never} */
        getState: () => Promise<DesktopCliCommandState>;
        /** @throws {never} */
        install: () => Promise<DesktopCliCommandState>;
        /** @throws {never} */
        uninstall: () => Promise<DesktopCliCommandState>;
    };
    webLinks?: {
        /** @throws {never} */
        setReady: (ready: boolean) => Promise<void>;
        /** @throws {never} */
        onOpen: (listener: 
        /** @throws {never} */
        (url: string) => void) => 
        /** @throws {never} */
        () => void;
    };
    appActivation?: {
        /** @throws {never} */
        setReady: (ready: boolean) => Promise<void>;
        /** @throws {never} */
        complete: (response: DesktopAppActivationResponse) => Promise<void>;
        /** @throws {never} */
        onRequest: (listener: 
        /** @throws {never} */
        (request: DesktopAppActivationRequest) => void) => 
        /** @throws {never} */
        () => void;
    };
    preview?: DesktopPreviewBridge;
}
/** Renderer callback invoked by Electron with a fresh user gesture before display-media capture. */
export declare const DESKTOP_PREVIEW_RECORDING_CAPTURE_TRIGGER = "__t3DesktopPreviewRecordingCapture";
export interface DesktopPreviewBridge {
    /** @throws {never} */
    setForwardedShortcuts?: (shortcuts: ReadonlyArray<PreviewForwardedShortcut>) => Promise<void>;
    /** @throws {never} */
    createTab: (tabId: string, defaults?: DesktopPreviewTabDefaults) => Promise<void>;
    /** @throws {never} */
    closeTab: (tabId: string) => Promise<void>;
    /** @throws {never} */
    registerWebview: (tabId: string, webContentsId: number) => Promise<void>;
    /** @throws {never} */
    navigate: (tabId: string, url: string) => Promise<void>;
    /** @throws {never} */
    goBack: (tabId: string) => Promise<void>;
    /** @throws {never} */
    goForward: (tabId: string) => Promise<void>;
    /** @throws {never} */
    refresh: (tabId: string) => Promise<void>;
    /** @throws {never} */
    zoomIn: (tabId: string) => Promise<void>;
    /** @throws {never} */
    zoomOut: (tabId: string) => Promise<void>;
    /** @throws {never} */
    resetZoom: (tabId: string) => Promise<void>;
    /** @throws {never} */
    setZoomFactor: (tabId: string, zoomFactor: number) => Promise<void>;
    /** @throws {never} */
    hardReload: (tabId: string) => Promise<void>;
    /** @throws {never} */
    setColorScheme: (tabId: string, colorScheme: DesktopPreviewColorScheme) => Promise<void>;
    /** @throws {never} */
    setAudioMuted: (tabId: string, audioMuted: boolean) => Promise<void>;
    /** @throws {never} */
    openDevTools: (tabId: string) => Promise<void>;
    /** @throws {never} */
    clearCookies: (environmentId: EnvironmentId, profileId?: string) => Promise<void>;
    /** @throws {never} */
    clearCache: (environmentId: EnvironmentId, profileId?: string) => Promise<void>;
    /** @throws {never} */
    getPreviewConfig: (environmentId: EnvironmentId, profileId?: string) => Promise<DesktopPreviewWebviewConfig>;
    /** @throws {never} */
    listBrowserImportSources: () => Promise<ReadonlyArray<BrowserImportSource>>;
    /** @throws {never} */
    importBrowserCookies: (input: {
        readonly environmentId: EnvironmentId;
        readonly sourceId: BrowserImportSourceId;
        readonly sourceProfileDirectory: string;
        readonly targetProfileId: string;
    }) => Promise<BrowserImportResult>;
    /** @throws {never} */
    setAnnotationTheme: (theme: DesktopPreviewAnnotationTheme) => Promise<void>;
    /** @throws {never} */
    setAnnotationSendEnabled: (tabId: string, enabled: boolean) => Promise<void>;
    /**
     * Resolves with the annotation and attach/send intent, or null on cancellation. Rejects if activation fails.
     * @throws {never}
     */
    pickElement: (tabId: string) => Promise<PreviewAnnotationSubmissionResult | null>;
    /** @throws {never} */
    cancelPickElement: (tabId: string) => Promise<void>;
    /** @throws {never} */
    captureScreenshot: (tabId: string) => Promise<DesktopPreviewScreenshotArtifact | PreviewCaptureFailureEncoded>;
    /** @throws {never} */
    revealArtifact: (path: string) => Promise<void>;
    /** @throws {never} */
    copyArtifactToClipboard: (path: string) => Promise<void>;
    pictureInPicture: {
        /** @throws {never} */
        open: (tabId: string) => Promise<void>;
        /** @throws {never} */
        close: (tabId: string) => Promise<void>;
    };
    recording: {
        /** @throws {never} */
        onInput: (listener: 
        /** @throws {never} */
        (event: DesktopPreviewRecordingInputEvent) => void) => 
        /** @throws {never} */
        () => void;
        /** @throws {never} */
        startScreencast: (tabId: string) => Promise<void | PreviewCaptureFailureEncoded>;
        /** @throws {never} */
        stopScreencast: (tabId: string) => Promise<void>;
        /** @throws {never} */
        save: (tabId: string, mimeType: string, data: Uint8Array) => Promise<DesktopPreviewRecordingArtifact>;
        /** @throws {never} */
        onFrame: (listener: 
        /** @throws {never} */
        (frame: DesktopPreviewRecordingFrame) => void) => 
        /** @throws {never} */
        () => void;
    };
    /** @throws {never} */
    onStateChange: (listener: 
    /** @throws {never} */
    (tabId: string, state: DesktopPreviewTabState) => void) => 
    /** @throws {never} */
    () => void;
    /** @throws {never} */
    onPointerEvent: (listener: 
    /** @throws {never} */
    (event: DesktopPreviewPointerEvent) => void) => 
    /** @throws {never} */
    () => void;
    /** @throws {never} */
    onOpenLink: (listener: 
    /** @throws {never} */
    (event: DesktopPreviewOpenLinkEvent) => void) => 
    /** @throws {never} */
    () => void;
}
export type ConfirmDialogVariant = "default" | "destructive";
export interface ConfirmDialogOptions {
    readonly variant?: ConfirmDialogVariant;
}
export interface LocalApi {
    dialogs: {
        /** @throws {never} */
        pickFolder: (options?: PickFolderOptions) => Promise<string | null>;
        /** @throws {never} */
        confirm: (message: string, options?: ConfirmDialogOptions) => Promise<boolean>;
    };
    shell: {
        /** @throws {never} */
        openExternal: (url: string) => Promise<void>;
        /** @throws {never} */
        openSystemSettings: (pane: SystemSettingsPane) => Promise<void>;
    };
    contextMenu: {
        /** @throws {never} */
        show: <T extends string>(items: readonly ContextMenuItem<T>[], position?: {
            x: number;
            y: number;
        }) => Promise<T | null>;
        /** @throws {never} */
        close: () => Promise<void>;
    };
    persistence: {
        /** @throws {never} */
        getClientSettings: () => Promise<ClientSettings | null>;
        /** @throws {never} */
        setClientSettings: (settings: ClientSettings) => Promise<void>;
    };
}
