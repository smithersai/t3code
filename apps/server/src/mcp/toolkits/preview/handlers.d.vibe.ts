import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Schema from "effect/Schema";
import { PreviewAutomationRecordingTransferError, PreviewAutomationRecordingDesktopUpdateRequiredError, OrchestratorMcpFailure } from "@t3tools/contracts";
import * as ServerConfig from "../../../config.ts";
import * as McpInvocationContext from "../../McpInvocationContext.ts";
import * as McpToolAccess from "../../McpToolAccess.ts";
import * as PreviewAutomationBroker from "../../PreviewAutomationBroker.ts";
export declare const claimPreviewRecording: (threadId: string & import("effect/Brand").Brand<"ThreadId">, response: unknown) => Effect.Effect<{
    tabId: string;
    mimeType: string;
    sizeBytes: number;
    createdAt: string;
    id: string;
    path: string;
}, PreviewAutomationRecordingDesktopUpdateRequiredError | PreviewAutomationRecordingTransferError, FileSystem.FileSystem | ServerConfig.ServerConfig>;
export declare const layerStandard: McpToolAccess.HandlersLayer<{
    readonly preview_act: import("effect/ai/Tool").Tool<"preview_act", {
        readonly parameters: Schema.Struct<{
            readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly action: Schema.Literals<readonly ["click", "type", "hover", "select", "drag", "upload", "press", "scroll"]>;
            readonly locator: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly selector: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly x: Schema.optional<Schema.Finite>;
            readonly y: Schema.optional<Schema.Finite>;
            readonly button: Schema.optional<Schema.Literals<readonly ["left", "right", "middle"]>>;
            readonly clickCount: Schema.optional<Schema.Int>;
            readonly text: Schema.optional<Schema.String>;
            readonly clear: Schema.optional<Schema.Boolean>;
            readonly values: Schema.optional<Schema.$Array<Schema.String>>;
            readonly source: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly target: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly paths: Schema.optional<Schema.$Array<Schema.String>>;
            readonly key: Schema.optional<Schema.String>;
            readonly modifiers: Schema.optional<Schema.$Array<Schema.Literals<readonly ["Alt", "Control", "Meta", "Shift"]>>>;
            readonly deltaX: Schema.optional<Schema.Finite>;
            readonly deltaY: Schema.optional<Schema.Finite>;
            readonly timeoutMs: Schema.optional<Schema.Int>;
        }>;
        readonly success: Schema.Union<readonly [Schema.Struct<{
            readonly selected: Schema.$Array<Schema.String>;
            readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>, Schema.Struct<{
            toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>]>;
        readonly failure: Schema.Union<readonly [Schema.Union<readonly [typeof PreviewAutomationRecordingTransferError, typeof PreviewAutomationRecordingDesktopUpdateRequiredError, typeof import("@t3tools/contracts").PreviewAutomationRecordingTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationRecordingDeadlineExpiredError, typeof import("@t3tools/contracts").PreviewAutomationUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationNoAvailableHostError, typeof import("@t3tools/contracts").PreviewAutomationUnsupportedClientError, typeof import("@t3tools/contracts").PreviewAutomationTabNotFoundError, typeof import("@t3tools/contracts").PreviewAutomationTimeoutError, typeof import("@t3tools/contracts").PreviewAutomationControlInterruptedError, typeof import("@t3tools/contracts").PreviewAutomationExecutionError, typeof import("@t3tools/contracts").PreviewAutomationInvalidSelectorError, typeof import("@t3tools/contracts").PreviewAutomationTargetNotEditableError, typeof import("@t3tools/contracts").PreviewAutomationResultTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationClientDisconnectedError, typeof import("@t3tools/contracts").PreviewAutomationRequestQueueClosedError, typeof import("@t3tools/contracts").PreviewAutomationRemoteUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationMalformedResponseError]>, typeof OrchestratorMcpFailure]>;
        readonly failureMode: "error";
    }, McpInvocationContext.McpInvocationContext | PreviewAutomationBroker.PreviewAutomationBroker | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
    readonly preview_dialog: import("effect/ai/Tool").Tool<"preview_dialog", {
        readonly parameters: Schema.Struct<{
            readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly accept: Schema.Boolean;
            readonly promptText: Schema.optional<Schema.String>;
        }>;
        readonly success: Schema.Struct<{
            readonly available: Schema.Boolean;
            readonly visible: Schema.Boolean;
            readonly tabId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly url: Schema.NullOr<Schema.String>;
            readonly title: Schema.NullOr<Schema.String>;
            readonly loading: Schema.Boolean;
            readonly control: Schema.optional<Schema.Struct<{
                readonly owner: Schema.Literals<readonly ["agent", "human", "unclaimed"]>;
                readonly ownedByCaller: Schema.Boolean;
                readonly generation: Schema.Number;
            }>>;
            readonly dialog: Schema.optional<Schema.NullOr<Schema.Struct<{
                readonly type: Schema.String;
                readonly message: Schema.String;
                readonly defaultValue: Schema.String;
            }>>>;
            readonly viewportSetting: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"fill", {}>, Schema.Struct<{
                readonly _tag: Schema.tag<"freeform">;
                readonly width: Schema.Int;
                readonly height: Schema.Int;
            }>, Schema.Struct<{
                readonly _tag: Schema.tag<"preset">;
                readonly width: Schema.Int;
                readonly height: Schema.Int;
                readonly presetId: Schema.Literals<readonly ["iphone-se", "iphone-xr", "iphone-12-pro", "iphone-14-pro-max", "pixel-7", "samsung-galaxy-s8-plus", "samsung-galaxy-s20-ultra", "ipad-mini", "ipad-air", "ipad-pro", "surface-pro-7", "surface-duo", "galaxy-z-fold-5", "asus-zenbook-fold", "samsung-galaxy-a51-71", "nest-hub", "nest-hub-max", "desktop-1920x1080", "desktop-1440x900", "laptop-1366x768", "laptop-1280x800", "ipad-pro-11", "iphone-15-pro", "pixel-8", "galaxy-s24"]>;
            }>]>>;
            readonly viewport: Schema.optional<Schema.Struct<{
                readonly width: Schema.Int;
                readonly height: Schema.Int;
            }>>;
            readonly fileChooser: Schema.optional<Schema.NullOr<Schema.Struct<{
                readonly multiple: Schema.Boolean;
                readonly accept: Schema.String;
            }>>>;
            readonly downloads: Schema.optional<Schema.$Array<Schema.Struct<{
                readonly fileName: Schema.String;
                readonly path: Schema.String;
                readonly sizeBytes: Schema.Number;
                readonly url: Schema.String;
                readonly completedAt: Schema.String;
            }>>>;
            readonly tabs: Schema.optional<Schema.$Array<Schema.Struct<{
                readonly tabId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly url: Schema.NullOr<Schema.String>;
                readonly openerTabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly owner: Schema.optional<Schema.Literals<readonly ["agent", "human", "unclaimed"]>>;
                readonly ownedByCaller: Schema.optional<Schema.Boolean>;
                readonly visible: Schema.optional<Schema.Boolean>;
                readonly profileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>>;
            readonly profiles: Schema.optional<Schema.$Array<Schema.Struct<{
                readonly id: Schema.mutableKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly name: Schema.mutableKey<Schema.String>;
                readonly incognito: Schema.mutableKey<Schema.optional<Schema.Boolean>>;
            }>>>;
            readonly defaultProfileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly failure: Schema.Union<readonly [Schema.Union<readonly [typeof PreviewAutomationRecordingTransferError, typeof PreviewAutomationRecordingDesktopUpdateRequiredError, typeof import("@t3tools/contracts").PreviewAutomationRecordingTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationRecordingDeadlineExpiredError, typeof import("@t3tools/contracts").PreviewAutomationUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationNoAvailableHostError, typeof import("@t3tools/contracts").PreviewAutomationUnsupportedClientError, typeof import("@t3tools/contracts").PreviewAutomationTabNotFoundError, typeof import("@t3tools/contracts").PreviewAutomationTimeoutError, typeof import("@t3tools/contracts").PreviewAutomationControlInterruptedError, typeof import("@t3tools/contracts").PreviewAutomationExecutionError, typeof import("@t3tools/contracts").PreviewAutomationInvalidSelectorError, typeof import("@t3tools/contracts").PreviewAutomationTargetNotEditableError, typeof import("@t3tools/contracts").PreviewAutomationResultTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationClientDisconnectedError, typeof import("@t3tools/contracts").PreviewAutomationRequestQueueClosedError, typeof import("@t3tools/contracts").PreviewAutomationRemoteUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationMalformedResponseError]>, typeof OrchestratorMcpFailure]>;
        readonly failureMode: "error";
    }, McpInvocationContext.McpInvocationContext | PreviewAutomationBroker.PreviewAutomationBroker | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
    readonly preview_evaluate: import("effect/ai/Tool").Tool<"preview_evaluate", {
        readonly parameters: Schema.Struct<{
            readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly expression: Schema.String;
            readonly awaitPromise: Schema.optional<Schema.Boolean>;
            readonly returnByValue: Schema.optional<Schema.Boolean>;
        }>;
        readonly success: Schema.Struct<{
            readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
            readonly value: Schema.Unknown;
        }>;
        readonly failure: Schema.Union<readonly [Schema.Union<readonly [typeof PreviewAutomationRecordingTransferError, typeof PreviewAutomationRecordingDesktopUpdateRequiredError, typeof import("@t3tools/contracts").PreviewAutomationRecordingTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationRecordingDeadlineExpiredError, typeof import("@t3tools/contracts").PreviewAutomationUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationNoAvailableHostError, typeof import("@t3tools/contracts").PreviewAutomationUnsupportedClientError, typeof import("@t3tools/contracts").PreviewAutomationTabNotFoundError, typeof import("@t3tools/contracts").PreviewAutomationTimeoutError, typeof import("@t3tools/contracts").PreviewAutomationControlInterruptedError, typeof import("@t3tools/contracts").PreviewAutomationExecutionError, typeof import("@t3tools/contracts").PreviewAutomationInvalidSelectorError, typeof import("@t3tools/contracts").PreviewAutomationTargetNotEditableError, typeof import("@t3tools/contracts").PreviewAutomationResultTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationClientDisconnectedError, typeof import("@t3tools/contracts").PreviewAutomationRequestQueueClosedError, typeof import("@t3tools/contracts").PreviewAutomationRemoteUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationMalformedResponseError]>, typeof OrchestratorMcpFailure]>;
        readonly failureMode: "error";
    }, McpInvocationContext.McpInvocationContext | PreviewAutomationBroker.PreviewAutomationBroker | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
    readonly preview_navigate: import("effect/ai/Tool").Tool<"preview_navigate", {
        readonly parameters: Schema.Struct<{
            readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly url: Schema.optional<Schema.String>;
            readonly target: Schema.optional<Schema.Union<readonly [Schema.Struct<{
                readonly kind: Schema.Literal<"url">;
                readonly url: Schema.String;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"environment-port">;
                readonly port: Schema.Int;
                readonly protocol: Schema.optional<Schema.Literals<readonly ["http", "https"]>>;
                readonly path: Schema.optional<Schema.String>;
            }>]>>;
            readonly readiness: Schema.optional<Schema.Literals<readonly ["load", "domContentLoaded", "none"]>>;
            readonly timeoutMs: Schema.optional<Schema.Int>;
        }>;
        readonly success: Schema.Struct<{
            readonly available: Schema.Boolean;
            readonly visible: Schema.Boolean;
            readonly tabId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly url: Schema.NullOr<Schema.String>;
            readonly title: Schema.NullOr<Schema.String>;
            readonly loading: Schema.Boolean;
            readonly control: Schema.optional<Schema.Struct<{
                readonly owner: Schema.Literals<readonly ["agent", "human", "unclaimed"]>;
                readonly ownedByCaller: Schema.Boolean;
                readonly generation: Schema.Number;
            }>>;
            readonly dialog: Schema.optional<Schema.NullOr<Schema.Struct<{
                readonly type: Schema.String;
                readonly message: Schema.String;
                readonly defaultValue: Schema.String;
            }>>>;
            readonly viewportSetting: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"fill", {}>, Schema.Struct<{
                readonly _tag: Schema.tag<"freeform">;
                readonly width: Schema.Int;
                readonly height: Schema.Int;
            }>, Schema.Struct<{
                readonly _tag: Schema.tag<"preset">;
                readonly width: Schema.Int;
                readonly height: Schema.Int;
                readonly presetId: Schema.Literals<readonly ["iphone-se", "iphone-xr", "iphone-12-pro", "iphone-14-pro-max", "pixel-7", "samsung-galaxy-s8-plus", "samsung-galaxy-s20-ultra", "ipad-mini", "ipad-air", "ipad-pro", "surface-pro-7", "surface-duo", "galaxy-z-fold-5", "asus-zenbook-fold", "samsung-galaxy-a51-71", "nest-hub", "nest-hub-max", "desktop-1920x1080", "desktop-1440x900", "laptop-1366x768", "laptop-1280x800", "ipad-pro-11", "iphone-15-pro", "pixel-8", "galaxy-s24"]>;
            }>]>>;
            readonly viewport: Schema.optional<Schema.Struct<{
                readonly width: Schema.Int;
                readonly height: Schema.Int;
            }>>;
            readonly fileChooser: Schema.optional<Schema.NullOr<Schema.Struct<{
                readonly multiple: Schema.Boolean;
                readonly accept: Schema.String;
            }>>>;
            readonly downloads: Schema.optional<Schema.$Array<Schema.Struct<{
                readonly fileName: Schema.String;
                readonly path: Schema.String;
                readonly sizeBytes: Schema.Number;
                readonly url: Schema.String;
                readonly completedAt: Schema.String;
            }>>>;
            readonly tabs: Schema.optional<Schema.$Array<Schema.Struct<{
                readonly tabId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly url: Schema.NullOr<Schema.String>;
                readonly openerTabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly owner: Schema.optional<Schema.Literals<readonly ["agent", "human", "unclaimed"]>>;
                readonly ownedByCaller: Schema.optional<Schema.Boolean>;
                readonly visible: Schema.optional<Schema.Boolean>;
                readonly profileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>>;
            readonly profiles: Schema.optional<Schema.$Array<Schema.Struct<{
                readonly id: Schema.mutableKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly name: Schema.mutableKey<Schema.String>;
                readonly incognito: Schema.mutableKey<Schema.optional<Schema.Boolean>>;
            }>>>;
            readonly defaultProfileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly failure: Schema.Union<readonly [Schema.Union<readonly [typeof PreviewAutomationRecordingTransferError, typeof PreviewAutomationRecordingDesktopUpdateRequiredError, typeof import("@t3tools/contracts").PreviewAutomationRecordingTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationRecordingDeadlineExpiredError, typeof import("@t3tools/contracts").PreviewAutomationUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationNoAvailableHostError, typeof import("@t3tools/contracts").PreviewAutomationUnsupportedClientError, typeof import("@t3tools/contracts").PreviewAutomationTabNotFoundError, typeof import("@t3tools/contracts").PreviewAutomationTimeoutError, typeof import("@t3tools/contracts").PreviewAutomationControlInterruptedError, typeof import("@t3tools/contracts").PreviewAutomationExecutionError, typeof import("@t3tools/contracts").PreviewAutomationInvalidSelectorError, typeof import("@t3tools/contracts").PreviewAutomationTargetNotEditableError, typeof import("@t3tools/contracts").PreviewAutomationResultTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationClientDisconnectedError, typeof import("@t3tools/contracts").PreviewAutomationRequestQueueClosedError, typeof import("@t3tools/contracts").PreviewAutomationRemoteUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationMalformedResponseError]>, typeof OrchestratorMcpFailure]>;
        readonly failureMode: "error";
    }, McpInvocationContext.McpInvocationContext | PreviewAutomationBroker.PreviewAutomationBroker | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
    readonly preview_open: import("effect/ai/Tool").Tool<"preview_open", {
        readonly parameters: Schema.Struct<{
            readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly url: Schema.optional<Schema.String>;
            readonly open: Schema.optional<Schema.Boolean>;
            readonly show: Schema.optional<Schema.Boolean>;
            readonly reuseExistingTab: Schema.optional<Schema.Boolean>;
            readonly profileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly success: Schema.Struct<{
            readonly available: Schema.Boolean;
            readonly visible: Schema.Boolean;
            readonly tabId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly url: Schema.NullOr<Schema.String>;
            readonly title: Schema.NullOr<Schema.String>;
            readonly loading: Schema.Boolean;
            readonly control: Schema.optional<Schema.Struct<{
                readonly owner: Schema.Literals<readonly ["agent", "human", "unclaimed"]>;
                readonly ownedByCaller: Schema.Boolean;
                readonly generation: Schema.Number;
            }>>;
            readonly dialog: Schema.optional<Schema.NullOr<Schema.Struct<{
                readonly type: Schema.String;
                readonly message: Schema.String;
                readonly defaultValue: Schema.String;
            }>>>;
            readonly viewportSetting: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"fill", {}>, Schema.Struct<{
                readonly _tag: Schema.tag<"freeform">;
                readonly width: Schema.Int;
                readonly height: Schema.Int;
            }>, Schema.Struct<{
                readonly _tag: Schema.tag<"preset">;
                readonly width: Schema.Int;
                readonly height: Schema.Int;
                readonly presetId: Schema.Literals<readonly ["iphone-se", "iphone-xr", "iphone-12-pro", "iphone-14-pro-max", "pixel-7", "samsung-galaxy-s8-plus", "samsung-galaxy-s20-ultra", "ipad-mini", "ipad-air", "ipad-pro", "surface-pro-7", "surface-duo", "galaxy-z-fold-5", "asus-zenbook-fold", "samsung-galaxy-a51-71", "nest-hub", "nest-hub-max", "desktop-1920x1080", "desktop-1440x900", "laptop-1366x768", "laptop-1280x800", "ipad-pro-11", "iphone-15-pro", "pixel-8", "galaxy-s24"]>;
            }>]>>;
            readonly viewport: Schema.optional<Schema.Struct<{
                readonly width: Schema.Int;
                readonly height: Schema.Int;
            }>>;
            readonly fileChooser: Schema.optional<Schema.NullOr<Schema.Struct<{
                readonly multiple: Schema.Boolean;
                readonly accept: Schema.String;
            }>>>;
            readonly downloads: Schema.optional<Schema.$Array<Schema.Struct<{
                readonly fileName: Schema.String;
                readonly path: Schema.String;
                readonly sizeBytes: Schema.Number;
                readonly url: Schema.String;
                readonly completedAt: Schema.String;
            }>>>;
            readonly tabs: Schema.optional<Schema.$Array<Schema.Struct<{
                readonly tabId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly url: Schema.NullOr<Schema.String>;
                readonly openerTabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly owner: Schema.optional<Schema.Literals<readonly ["agent", "human", "unclaimed"]>>;
                readonly ownedByCaller: Schema.optional<Schema.Boolean>;
                readonly visible: Schema.optional<Schema.Boolean>;
                readonly profileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>>;
            readonly profiles: Schema.optional<Schema.$Array<Schema.Struct<{
                readonly id: Schema.mutableKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly name: Schema.mutableKey<Schema.String>;
                readonly incognito: Schema.mutableKey<Schema.optional<Schema.Boolean>>;
            }>>>;
            readonly defaultProfileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly failure: Schema.Union<readonly [Schema.Union<readonly [typeof PreviewAutomationRecordingTransferError, typeof PreviewAutomationRecordingDesktopUpdateRequiredError, typeof import("@t3tools/contracts").PreviewAutomationRecordingTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationRecordingDeadlineExpiredError, typeof import("@t3tools/contracts").PreviewAutomationUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationNoAvailableHostError, typeof import("@t3tools/contracts").PreviewAutomationUnsupportedClientError, typeof import("@t3tools/contracts").PreviewAutomationTabNotFoundError, typeof import("@t3tools/contracts").PreviewAutomationTimeoutError, typeof import("@t3tools/contracts").PreviewAutomationControlInterruptedError, typeof import("@t3tools/contracts").PreviewAutomationExecutionError, typeof import("@t3tools/contracts").PreviewAutomationInvalidSelectorError, typeof import("@t3tools/contracts").PreviewAutomationTargetNotEditableError, typeof import("@t3tools/contracts").PreviewAutomationResultTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationClientDisconnectedError, typeof import("@t3tools/contracts").PreviewAutomationRequestQueueClosedError, typeof import("@t3tools/contracts").PreviewAutomationRemoteUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationMalformedResponseError]>, typeof OrchestratorMcpFailure]>;
        readonly failureMode: "error";
    }, McpInvocationContext.McpInvocationContext | PreviewAutomationBroker.PreviewAutomationBroker | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
    readonly preview_recording_start: import("effect/ai/Tool").Tool<"preview_recording_start", {
        readonly parameters: Schema.Struct<{
            tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly success: Schema.Struct<{
            readonly tabId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly recording: Schema.Boolean;
            readonly startedAt: Schema.NullOr<Schema.String>;
            readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>;
        readonly failure: Schema.Union<readonly [Schema.Union<readonly [typeof PreviewAutomationRecordingTransferError, typeof PreviewAutomationRecordingDesktopUpdateRequiredError, typeof import("@t3tools/contracts").PreviewAutomationRecordingTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationRecordingDeadlineExpiredError, typeof import("@t3tools/contracts").PreviewAutomationUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationNoAvailableHostError, typeof import("@t3tools/contracts").PreviewAutomationUnsupportedClientError, typeof import("@t3tools/contracts").PreviewAutomationTabNotFoundError, typeof import("@t3tools/contracts").PreviewAutomationTimeoutError, typeof import("@t3tools/contracts").PreviewAutomationControlInterruptedError, typeof import("@t3tools/contracts").PreviewAutomationExecutionError, typeof import("@t3tools/contracts").PreviewAutomationInvalidSelectorError, typeof import("@t3tools/contracts").PreviewAutomationTargetNotEditableError, typeof import("@t3tools/contracts").PreviewAutomationResultTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationClientDisconnectedError, typeof import("@t3tools/contracts").PreviewAutomationRequestQueueClosedError, typeof import("@t3tools/contracts").PreviewAutomationRemoteUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationMalformedResponseError]>, typeof OrchestratorMcpFailure]>;
        readonly failureMode: "error";
    }, McpInvocationContext.McpInvocationContext | PreviewAutomationBroker.PreviewAutomationBroker | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
    readonly preview_recording_stop: import("effect/ai/Tool").Tool<"preview_recording_stop", {
        readonly parameters: Schema.Struct<{
            tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly success: Schema.Struct<{
            readonly id: Schema.mutableKey<Schema.String>;
            readonly tabId: Schema.mutableKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly path: Schema.mutableKey<Schema.String>;
            readonly mimeType: Schema.mutableKey<Schema.String>;
            readonly sizeBytes: Schema.mutableKey<Schema.Int>;
            readonly createdAt: Schema.mutableKey<Schema.String>;
            readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>;
        readonly failure: Schema.Union<readonly [Schema.Union<readonly [typeof PreviewAutomationRecordingTransferError, typeof PreviewAutomationRecordingDesktopUpdateRequiredError, typeof import("@t3tools/contracts").PreviewAutomationRecordingTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationRecordingDeadlineExpiredError, typeof import("@t3tools/contracts").PreviewAutomationUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationNoAvailableHostError, typeof import("@t3tools/contracts").PreviewAutomationUnsupportedClientError, typeof import("@t3tools/contracts").PreviewAutomationTabNotFoundError, typeof import("@t3tools/contracts").PreviewAutomationTimeoutError, typeof import("@t3tools/contracts").PreviewAutomationControlInterruptedError, typeof import("@t3tools/contracts").PreviewAutomationExecutionError, typeof import("@t3tools/contracts").PreviewAutomationInvalidSelectorError, typeof import("@t3tools/contracts").PreviewAutomationTargetNotEditableError, typeof import("@t3tools/contracts").PreviewAutomationResultTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationClientDisconnectedError, typeof import("@t3tools/contracts").PreviewAutomationRequestQueueClosedError, typeof import("@t3tools/contracts").PreviewAutomationRemoteUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationMalformedResponseError]>, typeof OrchestratorMcpFailure]>;
        readonly failureMode: "error";
    }, FileSystem.FileSystem | McpInvocationContext.McpInvocationContext | PreviewAutomationBroker.PreviewAutomationBroker | ServerConfig.ServerConfig | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
    readonly preview_resize: import("effect/ai/Tool").Tool<"preview_resize", {
        readonly parameters: Schema.Struct<{
            readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly mode: Schema.Literals<readonly ["fill", "freeform", "preset"]>;
            readonly preset: Schema.optional<Schema.Literals<readonly ["iphone-se", "iphone-xr", "iphone-12-pro", "iphone-14-pro-max", "pixel-7", "samsung-galaxy-s8-plus", "samsung-galaxy-s20-ultra", "ipad-mini", "ipad-air", "ipad-pro", "surface-pro-7", "surface-duo", "galaxy-z-fold-5", "asus-zenbook-fold", "samsung-galaxy-a51-71", "nest-hub", "nest-hub-max"]>>;
            readonly width: Schema.optional<Schema.Int>;
            readonly height: Schema.optional<Schema.Int>;
            readonly orientation: Schema.optional<Schema.Literals<readonly ["portrait", "landscape"]>>;
            readonly timeoutMs: Schema.optional<Schema.Int>;
        }>;
        readonly success: Schema.Struct<{
            readonly tabId: Schema.mutableKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly setting: Schema.mutableKey<Schema.Union<readonly [Schema.TaggedStruct<"fill", {}>, Schema.Struct<{
                readonly _tag: Schema.tag<"freeform">;
                readonly width: Schema.Int;
                readonly height: Schema.Int;
            }>, Schema.Struct<{
                readonly _tag: Schema.tag<"preset">;
                readonly width: Schema.Int;
                readonly height: Schema.Int;
                readonly presetId: Schema.Literals<readonly ["iphone-se", "iphone-xr", "iphone-12-pro", "iphone-14-pro-max", "pixel-7", "samsung-galaxy-s8-plus", "samsung-galaxy-s20-ultra", "ipad-mini", "ipad-air", "ipad-pro", "surface-pro-7", "surface-duo", "galaxy-z-fold-5", "asus-zenbook-fold", "samsung-galaxy-a51-71", "nest-hub", "nest-hub-max", "desktop-1920x1080", "desktop-1440x900", "laptop-1366x768", "laptop-1280x800", "ipad-pro-11", "iphone-15-pro", "pixel-8", "galaxy-s24"]>;
            }>]>>;
            readonly viewport: Schema.mutableKey<Schema.Struct<{
                readonly width: Schema.Int;
                readonly height: Schema.Int;
            }>>;
            readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>;
        readonly failure: Schema.Union<readonly [Schema.Union<readonly [typeof PreviewAutomationRecordingTransferError, typeof PreviewAutomationRecordingDesktopUpdateRequiredError, typeof import("@t3tools/contracts").PreviewAutomationRecordingTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationRecordingDeadlineExpiredError, typeof import("@t3tools/contracts").PreviewAutomationUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationNoAvailableHostError, typeof import("@t3tools/contracts").PreviewAutomationUnsupportedClientError, typeof import("@t3tools/contracts").PreviewAutomationTabNotFoundError, typeof import("@t3tools/contracts").PreviewAutomationTimeoutError, typeof import("@t3tools/contracts").PreviewAutomationControlInterruptedError, typeof import("@t3tools/contracts").PreviewAutomationExecutionError, typeof import("@t3tools/contracts").PreviewAutomationInvalidSelectorError, typeof import("@t3tools/contracts").PreviewAutomationTargetNotEditableError, typeof import("@t3tools/contracts").PreviewAutomationResultTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationClientDisconnectedError, typeof import("@t3tools/contracts").PreviewAutomationRequestQueueClosedError, typeof import("@t3tools/contracts").PreviewAutomationRemoteUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationMalformedResponseError]>, typeof OrchestratorMcpFailure]>;
        readonly failureMode: "error";
    }, McpInvocationContext.McpInvocationContext | PreviewAutomationBroker.PreviewAutomationBroker | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
    readonly preview_set_appearance: import("effect/ai/Tool").Tool<"preview_set_appearance", {
        readonly parameters: Schema.Struct<{
            readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly colorScheme: Schema.Literals<readonly ["system", "light", "dark"]>;
        }>;
        readonly success: Schema.Struct<{
            readonly tabId: Schema.mutableKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly colorScheme: Schema.mutableKey<Schema.Literals<readonly ["system", "light", "dark"]>>;
            readonly toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>;
        readonly failure: Schema.Union<readonly [Schema.Union<readonly [typeof PreviewAutomationRecordingTransferError, typeof PreviewAutomationRecordingDesktopUpdateRequiredError, typeof import("@t3tools/contracts").PreviewAutomationRecordingTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationRecordingDeadlineExpiredError, typeof import("@t3tools/contracts").PreviewAutomationUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationNoAvailableHostError, typeof import("@t3tools/contracts").PreviewAutomationUnsupportedClientError, typeof import("@t3tools/contracts").PreviewAutomationTabNotFoundError, typeof import("@t3tools/contracts").PreviewAutomationTimeoutError, typeof import("@t3tools/contracts").PreviewAutomationControlInterruptedError, typeof import("@t3tools/contracts").PreviewAutomationExecutionError, typeof import("@t3tools/contracts").PreviewAutomationInvalidSelectorError, typeof import("@t3tools/contracts").PreviewAutomationTargetNotEditableError, typeof import("@t3tools/contracts").PreviewAutomationResultTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationClientDisconnectedError, typeof import("@t3tools/contracts").PreviewAutomationRequestQueueClosedError, typeof import("@t3tools/contracts").PreviewAutomationRemoteUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationMalformedResponseError]>, typeof OrchestratorMcpFailure]>;
        readonly failureMode: "error";
    }, McpInvocationContext.McpInvocationContext | PreviewAutomationBroker.PreviewAutomationBroker | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
    readonly preview_status: import("effect/ai/Tool").Tool<"preview_status", {
        readonly parameters: Schema.Struct<{
            tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly success: Schema.Struct<{
            readonly available: Schema.Boolean;
            readonly visible: Schema.Boolean;
            readonly tabId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly url: Schema.NullOr<Schema.String>;
            readonly title: Schema.NullOr<Schema.String>;
            readonly loading: Schema.Boolean;
            readonly control: Schema.optional<Schema.Struct<{
                readonly owner: Schema.Literals<readonly ["agent", "human", "unclaimed"]>;
                readonly ownedByCaller: Schema.Boolean;
                readonly generation: Schema.Number;
            }>>;
            readonly dialog: Schema.optional<Schema.NullOr<Schema.Struct<{
                readonly type: Schema.String;
                readonly message: Schema.String;
                readonly defaultValue: Schema.String;
            }>>>;
            readonly viewportSetting: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"fill", {}>, Schema.Struct<{
                readonly _tag: Schema.tag<"freeform">;
                readonly width: Schema.Int;
                readonly height: Schema.Int;
            }>, Schema.Struct<{
                readonly _tag: Schema.tag<"preset">;
                readonly width: Schema.Int;
                readonly height: Schema.Int;
                readonly presetId: Schema.Literals<readonly ["iphone-se", "iphone-xr", "iphone-12-pro", "iphone-14-pro-max", "pixel-7", "samsung-galaxy-s8-plus", "samsung-galaxy-s20-ultra", "ipad-mini", "ipad-air", "ipad-pro", "surface-pro-7", "surface-duo", "galaxy-z-fold-5", "asus-zenbook-fold", "samsung-galaxy-a51-71", "nest-hub", "nest-hub-max", "desktop-1920x1080", "desktop-1440x900", "laptop-1366x768", "laptop-1280x800", "ipad-pro-11", "iphone-15-pro", "pixel-8", "galaxy-s24"]>;
            }>]>>;
            readonly viewport: Schema.optional<Schema.Struct<{
                readonly width: Schema.Int;
                readonly height: Schema.Int;
            }>>;
            readonly fileChooser: Schema.optional<Schema.NullOr<Schema.Struct<{
                readonly multiple: Schema.Boolean;
                readonly accept: Schema.String;
            }>>>;
            readonly downloads: Schema.optional<Schema.$Array<Schema.Struct<{
                readonly fileName: Schema.String;
                readonly path: Schema.String;
                readonly sizeBytes: Schema.Number;
                readonly url: Schema.String;
                readonly completedAt: Schema.String;
            }>>>;
            readonly tabs: Schema.optional<Schema.$Array<Schema.Struct<{
                readonly tabId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly url: Schema.NullOr<Schema.String>;
                readonly openerTabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly owner: Schema.optional<Schema.Literals<readonly ["agent", "human", "unclaimed"]>>;
                readonly ownedByCaller: Schema.optional<Schema.Boolean>;
                readonly visible: Schema.optional<Schema.Boolean>;
                readonly profileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>>;
            readonly profiles: Schema.optional<Schema.$Array<Schema.Struct<{
                readonly id: Schema.mutableKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly name: Schema.mutableKey<Schema.String>;
                readonly incognito: Schema.mutableKey<Schema.optional<Schema.Boolean>>;
            }>>>;
            readonly defaultProfileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly failure: Schema.Union<readonly [Schema.Union<readonly [typeof PreviewAutomationRecordingTransferError, typeof PreviewAutomationRecordingDesktopUpdateRequiredError, typeof import("@t3tools/contracts").PreviewAutomationRecordingTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationRecordingDeadlineExpiredError, typeof import("@t3tools/contracts").PreviewAutomationUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationNoAvailableHostError, typeof import("@t3tools/contracts").PreviewAutomationUnsupportedClientError, typeof import("@t3tools/contracts").PreviewAutomationTabNotFoundError, typeof import("@t3tools/contracts").PreviewAutomationTimeoutError, typeof import("@t3tools/contracts").PreviewAutomationControlInterruptedError, typeof import("@t3tools/contracts").PreviewAutomationExecutionError, typeof import("@t3tools/contracts").PreviewAutomationInvalidSelectorError, typeof import("@t3tools/contracts").PreviewAutomationTargetNotEditableError, typeof import("@t3tools/contracts").PreviewAutomationResultTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationClientDisconnectedError, typeof import("@t3tools/contracts").PreviewAutomationRequestQueueClosedError, typeof import("@t3tools/contracts").PreviewAutomationRemoteUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationMalformedResponseError]>, typeof OrchestratorMcpFailure]>;
        readonly failureMode: "error";
    }, McpInvocationContext.McpInvocationContext | PreviewAutomationBroker.PreviewAutomationBroker | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
    readonly preview_wait_for: import("effect/ai/Tool").Tool<"preview_wait_for", {
        readonly parameters: Schema.Struct<{
            readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly selector: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly locator: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly text: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly urlIncludes: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly timeoutMs: Schema.optional<Schema.Int>;
        }>;
        readonly success: Schema.Struct<{
            toolIcon: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"website", {
                readonly pageUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly faviconUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly faviconUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>, Schema.TaggedStruct<"native-app", {
                readonly app: Schema.Union<readonly [Schema.TaggedStruct<"app-id", {
                    readonly appId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>, Schema.TaggedStruct<"display-name", {
                    readonly displayName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                }>]>;
            }>, Schema.TaggedStruct<"themed-logo", {
                readonly logoUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly logoUrlDark: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>]>>;
        }>;
        readonly failure: Schema.Union<readonly [Schema.Union<readonly [typeof PreviewAutomationRecordingTransferError, typeof PreviewAutomationRecordingDesktopUpdateRequiredError, typeof import("@t3tools/contracts").PreviewAutomationRecordingTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationRecordingDeadlineExpiredError, typeof import("@t3tools/contracts").PreviewAutomationUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationNoAvailableHostError, typeof import("@t3tools/contracts").PreviewAutomationUnsupportedClientError, typeof import("@t3tools/contracts").PreviewAutomationTabNotFoundError, typeof import("@t3tools/contracts").PreviewAutomationTimeoutError, typeof import("@t3tools/contracts").PreviewAutomationControlInterruptedError, typeof import("@t3tools/contracts").PreviewAutomationExecutionError, typeof import("@t3tools/contracts").PreviewAutomationInvalidSelectorError, typeof import("@t3tools/contracts").PreviewAutomationTargetNotEditableError, typeof import("@t3tools/contracts").PreviewAutomationResultTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationClientDisconnectedError, typeof import("@t3tools/contracts").PreviewAutomationRequestQueueClosedError, typeof import("@t3tools/contracts").PreviewAutomationRemoteUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationMalformedResponseError]>, typeof OrchestratorMcpFailure]>;
        readonly failureMode: "error";
    }, McpInvocationContext.McpInvocationContext | PreviewAutomationBroker.PreviewAutomationBroker | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
}, never, never>;
export declare const layerSnapshot: McpToolAccess.HandlersLayer<{
    readonly preview_snapshot: import("effect/ai/Tool").Tool<"preview_snapshot", {
        readonly parameters: Schema.Struct<{
            readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly includeImage: Schema.optional<Schema.Boolean>;
            readonly save: Schema.optional<Schema.Boolean>;
        }>;
        readonly success: Schema.Struct<{
            readonly url: Schema.mutableKey<Schema.String>;
            readonly title: Schema.mutableKey<Schema.String>;
            readonly loading: Schema.mutableKey<Schema.Boolean>;
            readonly visibleText: Schema.mutableKey<Schema.String>;
            readonly interactiveElements: Schema.mutableKey<Schema.$Array<Schema.Struct<{
                readonly tag: Schema.String;
                readonly role: Schema.NullOr<Schema.String>;
                readonly name: Schema.String;
                readonly selector: Schema.String;
                readonly x: Schema.Number;
                readonly y: Schema.Number;
                readonly width: Schema.Number;
                readonly height: Schema.Number;
            }>>>;
            readonly accessibilityTree: Schema.mutableKey<Schema.Unknown>;
            readonly consoleEntries: Schema.mutableKey<Schema.$Array<Schema.Struct<{
                readonly level: Schema.mutableKey<Schema.String>;
                readonly text: Schema.mutableKey<Schema.String>;
                readonly timestamp: Schema.mutableKey<Schema.String>;
                readonly source: Schema.mutableKey<Schema.optional<Schema.String>>;
            }>>>;
            readonly networkEntries: Schema.mutableKey<Schema.$Array<Schema.Struct<{
                readonly url: Schema.String;
                readonly method: Schema.String;
                readonly status: Schema.NullOr<Schema.Number>;
                readonly failed: Schema.Boolean;
                readonly errorText: Schema.optional<Schema.String>;
                readonly timestamp: Schema.String;
            }>>>;
            readonly actionTimeline: Schema.mutableKey<Schema.$Array<Schema.Struct<{
                readonly id: Schema.mutableKey<Schema.String>;
                readonly action: Schema.mutableKey<Schema.String>;
                readonly status: Schema.mutableKey<Schema.Literals<readonly ["running", "succeeded", "failed", "interrupted"]>>;
                readonly startedAt: Schema.mutableKey<Schema.String>;
                readonly completedAt: Schema.mutableKey<Schema.optional<Schema.String>>;
                readonly error: Schema.mutableKey<Schema.optional<Schema.String>>;
            }>>>;
            readonly screenshot: Schema.mutableKey<Schema.Struct<{
                readonly mimeType: Schema.mutableKey<Schema.Literal<"image/png">>;
                readonly data: Schema.mutableKey<Schema.String>;
                readonly width: Schema.mutableKey<Schema.Int>;
                readonly height: Schema.mutableKey<Schema.Int>;
            }>>;
        }>;
        readonly failure: Schema.Union<readonly [Schema.Union<readonly [typeof PreviewAutomationRecordingTransferError, typeof PreviewAutomationRecordingDesktopUpdateRequiredError, typeof import("@t3tools/contracts").PreviewAutomationRecordingTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationRecordingDeadlineExpiredError, typeof import("@t3tools/contracts").PreviewAutomationUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationNoAvailableHostError, typeof import("@t3tools/contracts").PreviewAutomationUnsupportedClientError, typeof import("@t3tools/contracts").PreviewAutomationTabNotFoundError, typeof import("@t3tools/contracts").PreviewAutomationTimeoutError, typeof import("@t3tools/contracts").PreviewAutomationControlInterruptedError, typeof import("@t3tools/contracts").PreviewAutomationExecutionError, typeof import("@t3tools/contracts").PreviewAutomationInvalidSelectorError, typeof import("@t3tools/contracts").PreviewAutomationTargetNotEditableError, typeof import("@t3tools/contracts").PreviewAutomationResultTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationClientDisconnectedError, typeof import("@t3tools/contracts").PreviewAutomationRequestQueueClosedError, typeof import("@t3tools/contracts").PreviewAutomationRemoteUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationMalformedResponseError]>, typeof OrchestratorMcpFailure]>;
        readonly failureMode: "error";
    }, McpInvocationContext.McpInvocationContext | PreviewAutomationBroker.PreviewAutomationBroker | import("../../../orchestration-v2/ThreadManagementService.ts").ThreadManagementService>;
}, never, never>;
