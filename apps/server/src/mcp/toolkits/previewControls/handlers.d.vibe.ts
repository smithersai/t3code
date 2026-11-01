import * as Preview from "../../../preview/Manager.js";
import * as McpToolAccess from "../../McpToolAccess.js";
import * as PreviewAutomationBroker from "../../PreviewAutomationBroker.js";
export declare const layer: McpToolAccess.HandlersLayer<{
    readonly t3_preview_close: import("effect/ai/Tool").Tool<"t3_preview_close", {
        readonly parameters: import("effect/Schema").Struct<{
            readonly tabId: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
        }>;
        readonly success: import("effect/Schema").Struct<{}>;
        readonly failure: import("effect/Schema").Union<readonly [import("effect/Schema").Union<readonly [typeof import("@t3tools/contracts").PreviewAutomationRecordingTransferError, typeof import("@t3tools/contracts").PreviewAutomationRecordingDesktopUpdateRequiredError, typeof import("@t3tools/contracts").PreviewAutomationRecordingTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationRecordingDeadlineExpiredError, typeof import("@t3tools/contracts").PreviewAutomationUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationNoAvailableHostError, typeof import("@t3tools/contracts").PreviewAutomationUnsupportedClientError, typeof import("@t3tools/contracts").PreviewAutomationTabNotFoundError, typeof import("@t3tools/contracts").PreviewAutomationTimeoutError, typeof import("@t3tools/contracts").PreviewAutomationControlInterruptedError, typeof import("@t3tools/contracts").PreviewAutomationExecutionError, typeof import("@t3tools/contracts").PreviewAutomationInvalidSelectorError, typeof import("@t3tools/contracts").PreviewAutomationTargetNotEditableError, typeof import("@t3tools/contracts").PreviewAutomationResultTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationClientDisconnectedError, typeof import("@t3tools/contracts").PreviewAutomationRequestQueueClosedError, typeof import("@t3tools/contracts").PreviewAutomationRemoteUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationMalformedResponseError]>, typeof import("@t3tools/contracts").OrchestratorMcpFailure]>;
        readonly failureMode: "return";
    }, import("../../McpInvocationContext.js").McpInvocationContext | PreviewAutomationBroker.PreviewAutomationBroker | Preview.PreviewManager | import("../../../orchestration-v2/ThreadManagementService.js").ThreadManagementService>;
    readonly t3_preview_list: import("effect/ai/Tool").Tool<"t3_preview_list", {
        readonly parameters: import("effect/Schema").Struct<{
            readonly cursor: import("effect/Schema").optional<import("effect/Schema").Int>;
            readonly limit: import("effect/Schema").optional<import("effect/Schema").Int>;
        }>;
        readonly success: import("effect/Schema").Struct<{
            readonly sessions: import("effect/Schema").$Array<import("effect/Schema").Struct<{
                readonly threadId: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                readonly tabId: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                readonly navStatus: import("effect/Schema").Union<readonly [import("effect/Schema").TaggedStruct<"Idle", {}>, import("effect/Schema").TaggedStruct<"Loading", {
                    readonly url: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                    readonly title: import("effect/Schema").String;
                }>, import("effect/Schema").TaggedStruct<"Success", {
                    readonly url: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                    readonly title: import("effect/Schema").String;
                }>, import("effect/Schema").TaggedStruct<"LoadFailed", {
                    readonly url: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
                    readonly title: import("effect/Schema").String;
                    readonly code: import("effect/Schema").Int;
                    readonly description: import("effect/Schema").String;
                    readonly download: import("effect/Schema").optional<import("effect/Schema").Struct<{
                        readonly id: import("effect/Schema").String;
                        readonly fileName: import("effect/Schema").String;
                    }>>;
                }>]>;
                readonly canGoBack: import("effect/Schema").Boolean;
                readonly canGoForward: import("effect/Schema").Boolean;
                readonly viewport: import("effect/Schema").optional<import("effect/Schema").Union<readonly [import("effect/Schema").TaggedStruct<"fill", {}>, import("effect/Schema").Struct<{
                    readonly _tag: import("effect/Schema").tag<"freeform">;
                    readonly width: import("effect/Schema").Int;
                    readonly height: import("effect/Schema").Int;
                }>, import("effect/Schema").Struct<{
                    readonly _tag: import("effect/Schema").tag<"preset">;
                    readonly width: import("effect/Schema").Int;
                    readonly height: import("effect/Schema").Int;
                    readonly presetId: import("effect/Schema").Literals<readonly ["iphone-se", "iphone-xr", "iphone-12-pro", "iphone-14-pro-max", "pixel-7", "samsung-galaxy-s8-plus", "samsung-galaxy-s20-ultra", "ipad-mini", "ipad-air", "ipad-pro", "surface-pro-7", "surface-duo", "galaxy-z-fold-5", "asus-zenbook-fold", "samsung-galaxy-a51-71", "nest-hub", "nest-hub-max", "desktop-1920x1080", "desktop-1440x900", "laptop-1366x768", "laptop-1280x800", "ipad-pro-11", "iphone-15-pro", "pixel-8", "galaxy-s24"]>;
                }>]>>;
                readonly colorScheme: import("effect/Schema").optional<import("effect/Schema").Literals<readonly ["system", "light", "dark"]>>;
                readonly zoomFactor: import("effect/Schema").optional<import("effect/Schema").Literals<readonly [0.25, 0.33, 0.5, 0.67, 0.75, 0.8, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2, 2.5, 3, 4, 5]>>;
                readonly profileId: import("effect/Schema").optional<import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>>;
                readonly runtime: import("effect/Schema").optional<import("effect/Schema").Literals<readonly ["desktop", "server"]>>;
                readonly headless: import("effect/Schema").optional<import("effect/Schema").Boolean>;
                readonly automationOwner: import("effect/Schema").optional<import("effect/Schema").String>;
                readonly reveal: import("effect/Schema").optional<import("effect/Schema").Boolean>;
                readonly revealRequest: import("effect/Schema").optional<import("effect/Schema").Struct<{
                    readonly id: import("effect/Schema").String;
                    readonly force: import("effect/Schema").Boolean;
                }>>;
                readonly updatedAt: import("effect/Schema").String;
            }>>;
            readonly serverEpoch: import("effect/Schema").decodeTo<import("effect/Schema").String, import("effect/Schema").String, never, never>;
            readonly revision: import("effect/Schema").Int;
            readonly nextCursor: import("effect/Schema").NullOr<import("effect/Schema").Int>;
        }>;
        readonly failure: import("effect/Schema").Union<readonly [import("effect/Schema").Union<readonly [typeof import("@t3tools/contracts").PreviewAutomationRecordingTransferError, typeof import("@t3tools/contracts").PreviewAutomationRecordingDesktopUpdateRequiredError, typeof import("@t3tools/contracts").PreviewAutomationRecordingTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationRecordingDeadlineExpiredError, typeof import("@t3tools/contracts").PreviewAutomationUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationNoAvailableHostError, typeof import("@t3tools/contracts").PreviewAutomationUnsupportedClientError, typeof import("@t3tools/contracts").PreviewAutomationTabNotFoundError, typeof import("@t3tools/contracts").PreviewAutomationTimeoutError, typeof import("@t3tools/contracts").PreviewAutomationControlInterruptedError, typeof import("@t3tools/contracts").PreviewAutomationExecutionError, typeof import("@t3tools/contracts").PreviewAutomationInvalidSelectorError, typeof import("@t3tools/contracts").PreviewAutomationTargetNotEditableError, typeof import("@t3tools/contracts").PreviewAutomationResultTooLargeError, typeof import("@t3tools/contracts").PreviewAutomationClientDisconnectedError, typeof import("@t3tools/contracts").PreviewAutomationRequestQueueClosedError, typeof import("@t3tools/contracts").PreviewAutomationRemoteUnavailableError, typeof import("@t3tools/contracts").PreviewAutomationMalformedResponseError]>, typeof import("@t3tools/contracts").OrchestratorMcpFailure]>;
        readonly failureMode: "return";
    }, import("../../McpInvocationContext.js").McpInvocationContext | PreviewAutomationBroker.PreviewAutomationBroker | Preview.PreviewManager | import("../../../orchestration-v2/ThreadManagementService.js").ThreadManagementService>;
}, never, never>;
