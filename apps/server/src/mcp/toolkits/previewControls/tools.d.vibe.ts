import { Tool, Toolkit } from "effect/ai";
import { OrchestratorMcpFailure } from "@t3tools/contracts";
import * as Schema from "effect/Schema";
import * as ThreadManagementService from "../../../orchestration-v2/ThreadManagementService.ts";
import * as PreviewManager from "../../../preview/Manager.ts";
import * as PreviewAutomationBroker from "../../PreviewAutomationBroker.ts";
import * as McpInvocationContext from "../../McpInvocationContext.vibe";
export declare const PreviewControlsToolkit: Toolkit.Toolkit<{
    readonly t3_preview_close: Tool.Tool<"t3_preview_close", {
        readonly parameters: Schema.Struct<{
            readonly tabId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>;
        readonly success: Schema.Struct<{}>;
        readonly failure: Schema.Union<readonly [Schema.Union<readonly [typeof import("@t3tools/contracts").PreviewAutomationRecordingTransferError, typeof import("@t3tools/contracts").PreviewAutomationRecordingDesktopUpdateRequiredError, typeof import("@t3tools/contracts").PreviewAutomationRecordingTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationRecordingDeadlineExpiredError, typeof import("@t3tools/contracts").PreviewAutomationUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationNoAvailableHostError, typeof import("@t3tools/contracts").PreviewAutomationUnsupportedClientError, typeof import("@t3tools/contracts").PreviewAutomationTabNotFoundError, typeof import("@t3tools/contracts").PreviewAutomationTimeoutError, typeof import("@t3tools/contracts").PreviewAutomationControlInterruptedError, typeof import("@t3tools/contracts").PreviewAutomationExecutionError, typeof import("@t3tools/contracts").PreviewAutomationInvalidSelectorError, typeof import("@t3tools/contracts").PreviewAutomationTargetNotEditableError, typeof import("@t3tools/contracts").PreviewAutomationResultTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationClientDisconnectedError, typeof import("@t3tools/contracts").PreviewAutomationRequestQueueClosedError, typeof import("@t3tools/contracts").PreviewAutomationRemoteUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationMalformedResponseError]>, typeof OrchestratorMcpFailure]>;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | PreviewAutomationBroker.PreviewAutomationBroker | PreviewManager.PreviewManager | ThreadManagementService.ThreadManagementService>;
    readonly t3_preview_list: Tool.Tool<"t3_preview_list", {
        readonly parameters: Schema.Struct<{
            readonly cursor: Schema.optional<Schema.Int>;
            readonly limit: Schema.optional<Schema.Int>;
        }>;
        readonly success: Schema.Struct<{
            readonly sessions: Schema.$Array<Schema.Struct<{
                readonly threadId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly tabId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly navStatus: Schema.Union<readonly [Schema.TaggedStruct<"Idle", {}>, Schema.TaggedStruct<"Loading", {
                    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly title: Schema.String;
                }>, Schema.TaggedStruct<"Success", {
                    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly title: Schema.String;
                }>, Schema.TaggedStruct<"LoadFailed", {
                    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly title: Schema.String;
                    readonly code: Schema.Int;
                    readonly description: Schema.String;
                    readonly download: Schema.optional<Schema.Struct<{
                        readonly id: Schema.mutableKey<Schema.String>;
                        readonly fileName: Schema.mutableKey<Schema.String>;
                    }>>;
                }>]>;
                readonly canGoBack: Schema.Boolean;
                readonly canGoForward: Schema.Boolean;
                readonly viewport: Schema.optional<Schema.Union<readonly [Schema.TaggedStruct<"fill", {}>, Schema.Struct<{
                    readonly _tag: Schema.tag<"freeform">;
                    readonly width: Schema.Int;
                    readonly height: Schema.Int;
                }>, Schema.Struct<{
                    readonly _tag: Schema.tag<"preset">;
                    readonly width: Schema.Int;
                    readonly height: Schema.Int;
                    readonly presetId: Schema.Literals<readonly ["iphone-se", "iphone-xr", "iphone-12-pro", "iphone-14-pro-max", "pixel-7", "samsung-galaxy-s8-plus", "samsung-galaxy-s20-ultra", "ipad-mini", "ipad-air", "ipad-pro", "surface-pro-7", "surface-duo", "galaxy-z-fold-5", "asus-zenbook-fold", "samsung-galaxy-a51-71", "nest-hub", "nest-hub-max", "desktop-1920x1080", "desktop-1440x900", "laptop-1366x768", "laptop-1280x800", "ipad-pro-11", "iphone-15-pro", "pixel-8", "galaxy-s24"]>;
                }>]>>;
                readonly colorScheme: Schema.optional<Schema.Literals<readonly ["system", "light", "dark"]>>;
                readonly zoomFactor: Schema.optional<Schema.Literals<readonly [0.25, 0.33, 0.5, 0.67, 0.75, 0.8, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2, 2.5, 3, 4, 5]>>;
                readonly profileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly runtime: Schema.optional<Schema.Literals<readonly ["desktop", "server"]>>;
                readonly headless: Schema.optional<Schema.Boolean>;
                readonly automationOwner: Schema.optional<Schema.String>;
                readonly reveal: Schema.optional<Schema.Boolean>;
                readonly revealRequest: Schema.optional<Schema.Struct<{
                    readonly id: Schema.String;
                    readonly force: Schema.Boolean;
                }>>;
                readonly updatedAt: Schema.String;
            }>>;
            readonly serverEpoch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly revision: Schema.Int;
            readonly nextCursor: Schema.NullOr<Schema.Int>;
        }>;
        readonly failure: Schema.Union<readonly [Schema.Union<readonly [typeof import("@t3tools/contracts").PreviewAutomationRecordingTransferError, typeof import("@t3tools/contracts").PreviewAutomationRecordingDesktopUpdateRequiredError, typeof import("@t3tools/contracts").PreviewAutomationRecordingTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationRecordingDeadlineExpiredError, typeof import("@t3tools/contracts").PreviewAutomationUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationNoAvailableHostError, typeof import("@t3tools/contracts").PreviewAutomationUnsupportedClientError, typeof import("@t3tools/contracts").PreviewAutomationTabNotFoundError, typeof import("@t3tools/contracts").PreviewAutomationTimeoutError, typeof import("@t3tools/contracts").PreviewAutomationControlInterruptedError, typeof import("@t3tools/contracts").PreviewAutomationExecutionError, typeof import("@t3tools/contracts").PreviewAutomationInvalidSelectorError, typeof import("@t3tools/contracts").PreviewAutomationTargetNotEditableError, typeof import("@t3tools/contracts").PreviewAutomationResultTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationClientDisconnectedError, typeof import("@t3tools/contracts").PreviewAutomationRequestQueueClosedError, typeof import("@t3tools/contracts").PreviewAutomationRemoteUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationMalformedResponseError]>, typeof OrchestratorMcpFailure]>;
        readonly failureMode: "return";
    }, McpInvocationContext.McpInvocationContext | PreviewAutomationBroker.PreviewAutomationBroker | PreviewManager.PreviewManager | ThreadManagementService.ThreadManagementService>;
}>;
