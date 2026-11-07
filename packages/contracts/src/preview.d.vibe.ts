import { Schema } from "effect";
export declare const PREVIEW_URL_MAX_LENGTH = 2048;
export declare const CONFIGURED_LOCAL_SERVER_URLS_MAX_ITEMS = 32;
export declare const ConfiguredLocalServerUrls: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
export declare const PreviewTabId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
export type PreviewTabId = typeof PreviewTabId.Type;
export declare const PREVIEW_VIEWPORT_MIN_DIMENSION = 240;
export declare const PREVIEW_VIEWPORT_MAX_DIMENSION = 3840;
export declare const PREVIEW_VIEWPORT_MAX_AREA: number;
export declare const PreviewViewportSize: Schema.Struct<{
    readonly width: Schema.Int;
    readonly height: Schema.Int;
}>;
export type PreviewViewportSize = typeof PreviewViewportSize.Type;
/** Fill mode can measure below selectable minimum sizes; validate measurements separately. */
export declare const PreviewRenderedViewportSize: Schema.Struct<{
    readonly width: Schema.Int;
    readonly height: Schema.Int;
}>;
export type PreviewRenderedViewportSize = typeof PreviewRenderedViewportSize.Type;
export declare const PREVIEW_VIEWPORT_PRESET_IDS: readonly ["iphone-se", "iphone-xr", "iphone-12-pro", "iphone-14-pro-max", "pixel-7", "samsung-galaxy-s8-plus", "samsung-galaxy-s20-ultra", "ipad-mini", "ipad-air", "ipad-pro", "surface-pro-7", "surface-duo", "galaxy-z-fold-5", "asus-zenbook-fold", "samsung-galaxy-a51-71", "nest-hub", "nest-hub-max"];
export declare const PreviewViewportPresetId: Schema.Literals<readonly ["iphone-se", "iphone-xr", "iphone-12-pro", "iphone-14-pro-max", "pixel-7", "samsung-galaxy-s8-plus", "samsung-galaxy-s20-ultra", "ipad-mini", "ipad-air", "ipad-pro", "surface-pro-7", "surface-duo", "galaxy-z-fold-5", "asus-zenbook-fold", "samsung-galaxy-a51-71", "nest-hub", "nest-hub-max"]>;
export type PreviewViewportPresetId = typeof PreviewViewportPresetId.Type;
export declare const PreviewViewportSetting: Schema.Union<readonly [Schema.TaggedStruct<"fill", {}>, Schema.Struct<{
    readonly _tag: Schema.tag<"freeform">;
    readonly width: Schema.Int;
    readonly height: Schema.Int;
}>, Schema.Struct<{
    readonly _tag: Schema.tag<"preset">;
    readonly width: Schema.Int;
    readonly height: Schema.Int;
    readonly presetId: Schema.Literals<readonly ["iphone-se", "iphone-xr", "iphone-12-pro", "iphone-14-pro-max", "pixel-7", "samsung-galaxy-s8-plus", "samsung-galaxy-s20-ultra", "ipad-mini", "ipad-air", "ipad-pro", "surface-pro-7", "surface-duo", "galaxy-z-fold-5", "asus-zenbook-fold", "samsung-galaxy-a51-71", "nest-hub", "nest-hub-max", "desktop-1920x1080", "desktop-1440x900", "laptop-1366x768", "laptop-1280x800", "ipad-pro-11", "iphone-15-pro", "pixel-8", "galaxy-s24"]>;
}>]>;
export type PreviewViewportSetting = typeof PreviewViewportSetting.Type;
export declare const FILL_PREVIEW_VIEWPORT: {
    readonly _tag: "fill";
};
/** Shared steps keep settings aligned with desktop Chromium zoom controls. */
export declare const PREVIEW_ZOOM_LEVELS: readonly [0.25, 0.33, 0.5, 0.67, 0.75, 0.8, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2, 2.5, 3, 4, 5];
export declare const PreviewZoomFactor: Schema.Literals<readonly [0.25, 0.33, 0.5, 0.67, 0.75, 0.8, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2, 2.5, 3, 4, 5]>;
export type PreviewZoomFactor = typeof PreviewZoomFactor.Type;
export declare const DEFAULT_PREVIEW_ZOOM_FACTOR: PreviewZoomFactor;
export declare const PreviewAppearancePreference: Schema.Literals<readonly ["system", "light", "dark"]>;
export type PreviewAppearancePreference = typeof PreviewAppearancePreference.Type;
export declare const DEFAULT_PREVIEW_APPEARANCE: PreviewAppearancePreference;
export declare const PreviewNavStatus: Schema.Union<readonly [Schema.TaggedStruct<"Idle", {}>, Schema.TaggedStruct<"Loading", {
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
        readonly id: Schema.String;
        readonly fileName: Schema.String;
    }>>;
}>]>;
export type PreviewNavStatus = typeof PreviewNavStatus.Type;
export declare const PreviewRuntime: Schema.Literals<readonly ["desktop", "server"]>;
export type PreviewRuntime = typeof PreviewRuntime.Type;
/** JSON reason for preview stream close code 4503; must fit the 123-byte close-reason limit. */
export declare const PreviewStreamHostSetup: Schema.Struct<{
    readonly need: Schema.Literals<readonly ["sandbox", "libraries"]>;
    readonly command: Schema.String;
}>;
export type PreviewStreamHostSetup = typeof PreviewStreamHostSetup.Type;
export declare const PREVIEW_STREAM_HOST_SETUP_CLOSE_CODE = 4503;
export declare const PreviewSessionSnapshot: Schema.Struct<{
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
            readonly id: Schema.String;
            readonly fileName: Schema.String;
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
    /** Fixed at open; Electron cannot change a webview partition after attach without losing page state. */
    readonly profileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly runtime: Schema.optional<Schema.Literals<readonly ["desktop", "server"]>>;
    /** The server runs this tab in headless Chromium, so the desktop streams it like other clients. */
    readonly headless: Schema.optional<Schema.Boolean>;
    readonly automationOwner: Schema.optional<Schema.String>;
    readonly reveal: Schema.optional<Schema.Boolean>;
    readonly revealRequest: Schema.optional<Schema.Struct<{
        readonly id: Schema.String;
        readonly force: Schema.Boolean;
    }>>;
    readonly updatedAt: Schema.String;
}>;
export type PreviewSessionSnapshot = typeof PreviewSessionSnapshot.Type;
export declare const PreviewOpenInput: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly url: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
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
    readonly profileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly runtime: Schema.optional<Schema.Literals<readonly ["desktop", "server"]>>;
    readonly reveal: Schema.optional<Schema.Boolean>;
}>;
export type PreviewOpenInput = typeof PreviewOpenInput.Type;
export declare const PreviewNavigateInput: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly tabId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly resolvedTitle: Schema.optional<Schema.String>;
}>;
export type PreviewNavigateInput = typeof PreviewNavigateInput.Type;
export declare const PreviewReportStatusInput: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
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
            readonly id: Schema.String;
            readonly fileName: Schema.String;
        }>>;
    }>]>;
    readonly canGoBack: Schema.Boolean;
    readonly canGoForward: Schema.Boolean;
}>;
export type PreviewReportStatusInput = typeof PreviewReportStatusInput.Type;
export declare const PreviewRefreshInput: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly tabId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type PreviewRefreshInput = typeof PreviewRefreshInput.Type;
export declare const PreviewResizeInput: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly tabId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly viewport: Schema.Union<readonly [Schema.TaggedStruct<"fill", {}>, Schema.Struct<{
        readonly _tag: Schema.tag<"freeform">;
        readonly width: Schema.Int;
        readonly height: Schema.Int;
    }>, Schema.Struct<{
        readonly _tag: Schema.tag<"preset">;
        readonly width: Schema.Int;
        readonly height: Schema.Int;
        readonly presetId: Schema.Literals<readonly ["iphone-se", "iphone-xr", "iphone-12-pro", "iphone-14-pro-max", "pixel-7", "samsung-galaxy-s8-plus", "samsung-galaxy-s20-ultra", "ipad-mini", "ipad-air", "ipad-pro", "surface-pro-7", "surface-duo", "galaxy-z-fold-5", "asus-zenbook-fold", "samsung-galaxy-a51-71", "nest-hub", "nest-hub-max", "desktop-1920x1080", "desktop-1440x900", "laptop-1366x768", "laptop-1280x800", "ipad-pro-11", "iphone-15-pro", "pixel-8", "galaxy-s24"]>;
    }>]>;
}>;
export type PreviewResizeInput = typeof PreviewResizeInput.Type;
/** Requires no tab control, unlike page input. */
export declare const PreviewAdjustInput: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly tabId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly colorScheme: Schema.optional<Schema.Literals<readonly ["system", "light", "dark"]>>;
    readonly zoomFactor: Schema.optional<Schema.Literals<readonly [0.25, 0.33, 0.5, 0.67, 0.75, 0.8, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2, 2.5, 3, 4, 5]>>;
    readonly hardReload: Schema.optional<Schema.Boolean>;
    readonly clear: Schema.optional<Schema.Literals<readonly ["cookies", "cache"]>>;
}>;
export type PreviewAdjustInput = typeof PreviewAdjustInput.Type;
export declare const PreviewCloseInput: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type PreviewCloseInput = typeof PreviewCloseInput.Type;
export declare const BROWSER_RECORDING_FRAME_RATES: readonly [30, 60];
export declare const BrowserRecordingFrameRate: Schema.Literals<readonly [30, 60]>;
export type BrowserRecordingFrameRate = typeof BrowserRecordingFrameRate.Type;
export declare const DEFAULT_BROWSER_RECORDING_FRAME_RATE: BrowserRecordingFrameRate;
export declare const PreviewReportProfilesInput: Schema.Struct<{
    readonly profiles: Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly kind: Schema.Literals<readonly ["persistent", "incognito"]>;
    }>>;
    readonly defaultProfileId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    /** Optional so older clients keep reporting; omitting it keeps the last reported rate. */
    readonly recordingFrameRate: Schema.optional<Schema.Literals<readonly [30, 60]>>;
}>;
export type PreviewReportProfilesInput = typeof PreviewReportProfilesInput.Type;
export declare const PreviewClearProfileInput: Schema.Struct<{
    readonly profileId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type PreviewClearProfileInput = typeof PreviewClearProfileInput.Type;
export declare const PreviewListInput: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
}>;
export type PreviewListInput = typeof PreviewListInput.Type;
export declare const PreviewListResult: Schema.Struct<{
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
                readonly id: Schema.String;
                readonly fileName: Schema.String;
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
        /** Fixed at open; Electron cannot change a webview partition after attach without losing page state. */
        readonly profileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly runtime: Schema.optional<Schema.Literals<readonly ["desktop", "server"]>>;
        /** The server runs this tab in headless Chromium, so the desktop streams it like other clients. */
        readonly headless: Schema.optional<Schema.Boolean>;
        readonly automationOwner: Schema.optional<Schema.String>;
        readonly reveal: Schema.optional<Schema.Boolean>;
        readonly revealRequest: Schema.optional<Schema.Struct<{
            readonly id: Schema.String;
            readonly force: Schema.Boolean;
        }>>;
        readonly updatedAt: Schema.String;
    }>>;
    /** Identifies the current server process so revision resets are safe. */
    readonly serverEpoch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly revision: Schema.Int;
}>;
export type PreviewListResult = typeof PreviewListResult.Type;
export declare const PreviewEvent: Schema.Union<readonly [Schema.Struct<{
    readonly threadId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly tabId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly createdAt: Schema.String;
    readonly serverEpoch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    /** Monotonic server state revision shared with PreviewListResult. */
    readonly revision: Schema.Int;
    readonly type: Schema.Literal<"opened">;
    readonly snapshot: Schema.Struct<{
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
                readonly id: Schema.String;
                readonly fileName: Schema.String;
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
        /** Fixed at open; Electron cannot change a webview partition after attach without losing page state. */
        readonly profileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly runtime: Schema.optional<Schema.Literals<readonly ["desktop", "server"]>>;
        /** The server runs this tab in headless Chromium, so the desktop streams it like other clients. */
        readonly headless: Schema.optional<Schema.Boolean>;
        readonly automationOwner: Schema.optional<Schema.String>;
        readonly reveal: Schema.optional<Schema.Boolean>;
        readonly revealRequest: Schema.optional<Schema.Struct<{
            readonly id: Schema.String;
            readonly force: Schema.Boolean;
        }>>;
        readonly updatedAt: Schema.String;
    }>;
}>, Schema.Struct<{
    readonly threadId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly tabId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly createdAt: Schema.String;
    readonly serverEpoch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    /** Monotonic server state revision shared with PreviewListResult. */
    readonly revision: Schema.Int;
    readonly type: Schema.Literal<"navigated">;
    readonly snapshot: Schema.Struct<{
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
                readonly id: Schema.String;
                readonly fileName: Schema.String;
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
        /** Fixed at open; Electron cannot change a webview partition after attach without losing page state. */
        readonly profileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly runtime: Schema.optional<Schema.Literals<readonly ["desktop", "server"]>>;
        /** The server runs this tab in headless Chromium, so the desktop streams it like other clients. */
        readonly headless: Schema.optional<Schema.Boolean>;
        readonly automationOwner: Schema.optional<Schema.String>;
        readonly reveal: Schema.optional<Schema.Boolean>;
        readonly revealRequest: Schema.optional<Schema.Struct<{
            readonly id: Schema.String;
            readonly force: Schema.Boolean;
        }>>;
        readonly updatedAt: Schema.String;
    }>;
}>, Schema.Struct<{
    readonly threadId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly tabId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly createdAt: Schema.String;
    readonly serverEpoch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    /** Monotonic server state revision shared with PreviewListResult. */
    readonly revision: Schema.Int;
    readonly type: Schema.Literal<"resized">;
    readonly snapshot: Schema.Struct<{
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
                readonly id: Schema.String;
                readonly fileName: Schema.String;
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
        /** Fixed at open; Electron cannot change a webview partition after attach without losing page state. */
        readonly profileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly runtime: Schema.optional<Schema.Literals<readonly ["desktop", "server"]>>;
        /** The server runs this tab in headless Chromium, so the desktop streams it like other clients. */
        readonly headless: Schema.optional<Schema.Boolean>;
        readonly automationOwner: Schema.optional<Schema.String>;
        readonly reveal: Schema.optional<Schema.Boolean>;
        readonly revealRequest: Schema.optional<Schema.Struct<{
            readonly id: Schema.String;
            readonly force: Schema.Boolean;
        }>>;
        readonly updatedAt: Schema.String;
    }>;
    readonly request: Schema.optional<Schema.Struct<{
        readonly hardReload: Schema.optional<Schema.Boolean>;
        readonly clear: Schema.optional<Schema.Literals<readonly ["cookies", "cache"]>>;
    }>>;
}>, Schema.Struct<{
    readonly threadId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly tabId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly createdAt: Schema.String;
    readonly serverEpoch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    /** Monotonic server state revision shared with PreviewListResult. */
    readonly revision: Schema.Int;
    readonly type: Schema.Literal<"failed">;
    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly title: Schema.String;
    readonly code: Schema.Int;
    readonly description: Schema.String;
    readonly download: Schema.optional<Schema.Struct<{
        readonly id: Schema.String;
        readonly fileName: Schema.String;
    }>>;
}>, Schema.Struct<{
    readonly threadId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly tabId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly createdAt: Schema.String;
    readonly serverEpoch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    /** Monotonic server state revision shared with PreviewListResult. */
    readonly revision: Schema.Int;
    readonly type: Schema.Literal<"closed">;
}>]>;
export type PreviewEvent = typeof PreviewEvent.Type;
export declare const DiscoveredLocalServer: Schema.Struct<{
    readonly host: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly port: Schema.Int;
    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly processName: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly pid: Schema.NullOr<Schema.Int>;
    readonly terminal: Schema.NullOr<Schema.Struct<{
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly terminalId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
    /** Started by the thread's agent. Older servers omit it. */
    readonly agent: Schema.optionalKey<Schema.NullOr<Schema.Struct<{
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    }>>>;
}>;
export type DiscoveredLocalServer = typeof DiscoveredLocalServer.Type;
export declare const PreviewStopLocalServerInput: Schema.Struct<{
    readonly pid: Schema.Int;
    readonly port: Schema.Int;
}>;
export type PreviewStopLocalServerInput = typeof PreviewStopLocalServerInput.Type;
declare const PreviewStopLocalServerError_base: Schema.Class<PreviewStopLocalServerError, Schema.TaggedStruct<"PreviewStopLocalServerError", {
    readonly reason: Schema.Literals<readonly ["not-found", "shared-group", "unsupported", "signal-failed"]>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class PreviewStopLocalServerError extends PreviewStopLocalServerError_base {
    get message(): "Stopping servers is not supported on this environment's platform." | "The server's processes could not be signaled." | "This server is no longer running." | "This server shares a process group with T3 Code, an agent, or a terminal shell, so it can't be stopped on its own.";
}
export declare const DiscoveredLocalServerList: Schema.Struct<{
    readonly servers: Schema.$Array<Schema.Struct<{
        readonly host: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly port: Schema.Int;
        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly processName: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly pid: Schema.NullOr<Schema.Int>;
        readonly terminal: Schema.NullOr<Schema.Struct<{
            readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
            readonly terminalId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>;
        /** Started by the thread's agent. Older servers omit it. */
        readonly agent: Schema.optionalKey<Schema.NullOr<Schema.Struct<{
            readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        }>>>;
    }>>;
    readonly scannedAt: Schema.String;
    readonly configuredUrlProbing: Schema.optional<Schema.Literal<true>>;
}>;
export type DiscoveredLocalServerList = typeof DiscoveredLocalServerList.Type;
declare const PreviewSessionLookupError_base: Schema.Class<PreviewSessionLookupError, Schema.TaggedStruct<"PreviewSessionLookupError", {
    readonly threadId: Schema.String;
    readonly tabId: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class PreviewSessionLookupError extends PreviewSessionLookupError_base {
    get message(): string;
}
declare const PreviewInvalidUrlError_base: Schema.Class<PreviewInvalidUrlError, Schema.TaggedStruct<"PreviewInvalidUrlError", {
    readonly inputLength: Schema.Number;
    readonly reason: Schema.Literals<readonly ["empty", "parse", "unsupported-protocol", "unexpected"]>;
    readonly protocol: Schema.optional<Schema.String>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class PreviewInvalidUrlError extends PreviewInvalidUrlError_base {
    get message(): string;
}
declare const PreviewControlRequiredError_base: Schema.Class<PreviewControlRequiredError, Schema.TaggedStruct<"PreviewControlRequiredError", {
    readonly tabId: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class PreviewControlRequiredError extends PreviewControlRequiredError_base {
    get message(): string;
}
declare const PreviewClearProfileError_base: Schema.Class<PreviewClearProfileError, Schema.TaggedStruct<"PreviewClearProfileError", {
    readonly profileId: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class PreviewClearProfileError extends PreviewClearProfileError_base {
    get message(): string;
}
export declare const PreviewError: Schema.Union<readonly [typeof PreviewSessionLookupError, typeof PreviewInvalidUrlError, typeof PreviewControlRequiredError]>;
export type PreviewError = typeof PreviewError.Type;
export {};
