import { Schema } from "effect";
export declare const PREVIEW_AUTOMATION_V1_OPERATIONS: readonly ["status", "open", "navigate", "snapshot", "click", "type", "press", "scroll", "evaluate", "waitFor", "recordingStart", "recordingStop"];
export declare const PREVIEW_AUTOMATION_SERVER_OPERATIONS: readonly ["status", "open", "navigate", "snapshot", "click", "type", "press", "scroll", "evaluate", "waitFor", "recordingStart", "recordingStop", "resize", "setColorScheme", "dialog", "close", "upload", "hover", "select", "drag"];
export declare const PreviewAutomationOperation: Schema.Literals<readonly ["status", "open", "navigate", "snapshot", "click", "type", "press", "scroll", "evaluate", "waitFor", "recordingStart", "recordingStop", "resize", "setColorScheme", "dialog", "close", "upload", "hover", "select", "drag"]>;
export type PreviewAutomationOperation = typeof PreviewAutomationOperation.Type;
export declare const PreviewAutomationTabTargetInput: Schema.Struct<{
    tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type PreviewAutomationTabTargetInput = typeof PreviewAutomationTabTargetInput.Type;
export declare const PreviewAutomationTabOwner: Schema.Literals<readonly ["agent", "human", "unclaimed"]>;
export declare const PreviewAutomationProfile: Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly name: Schema.String;
    readonly incognito: Schema.optional<Schema.Boolean>;
}>;
export type PreviewAutomationProfile = typeof PreviewAutomationProfile.Type;
export declare const PreviewAutomationStatus: Schema.Struct<{
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
    /** Server hosts: all thread tabs are readable; actions require ownedByCaller or an unclaimed tab without human control. */
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
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.String;
        readonly incognito: Schema.optional<Schema.Boolean>;
    }>>>;
    readonly defaultProfileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type PreviewAutomationStatus = typeof PreviewAutomationStatus.Type;
export declare const PreviewAutomationDialogInput: Schema.Struct<{
    readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly accept: Schema.Boolean;
    readonly promptText: Schema.optional<Schema.String>;
}>;
export type PreviewAutomationDialogInput = typeof PreviewAutomationDialogInput.Type;
export declare const PreviewAutomationOpenInput: Schema.Struct<{
    readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly url: Schema.optional<Schema.String>;
    readonly open: Schema.optional<Schema.Boolean>;
    readonly show: Schema.optional<Schema.Boolean>;
    readonly reuseExistingTab: Schema.optional<Schema.Boolean>;
    readonly profileId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type PreviewAutomationOpenInput = typeof PreviewAutomationOpenInput.Type;
export declare const BrowserNavigationTarget: Schema.Union<readonly [Schema.Struct<{
    readonly kind: Schema.Literal<"url">;
    readonly url: Schema.String;
}>, Schema.Struct<{
    readonly kind: Schema.Literal<"environment-port">;
    readonly port: Schema.Int;
    readonly protocol: Schema.optional<Schema.Literals<readonly ["http", "https"]>>;
    readonly path: Schema.optional<Schema.String>;
}>]>;
export type BrowserNavigationTarget = typeof BrowserNavigationTarget.Type;
export declare const PreviewAutomationNavigateInput: Schema.Struct<{
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
export type PreviewAutomationNavigateInput = typeof PreviewAutomationNavigateInput.Type;
export declare const PreviewAutomationResizeInput: Schema.Struct<{
    readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly mode: Schema.Literals<readonly ["fill", "freeform", "preset"]>;
    readonly preset: Schema.optional<Schema.Literals<readonly ["iphone-se", "iphone-xr", "iphone-12-pro", "iphone-14-pro-max", "pixel-7", "samsung-galaxy-s8-plus", "samsung-galaxy-s20-ultra", "ipad-mini", "ipad-air", "ipad-pro", "surface-pro-7", "surface-duo", "galaxy-z-fold-5", "asus-zenbook-fold", "samsung-galaxy-a51-71", "nest-hub", "nest-hub-max"]>>;
    readonly width: Schema.optional<Schema.Int>;
    readonly height: Schema.optional<Schema.Int>;
    readonly orientation: Schema.optional<Schema.Literals<readonly ["portrait", "landscape"]>>;
    readonly timeoutMs: Schema.optional<Schema.Int>;
}>;
export type PreviewAutomationResizeInput = typeof PreviewAutomationResizeInput.Type;
export declare const PreviewAutomationResizeResult: Schema.Struct<{
    readonly tabId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly setting: Schema.Union<readonly [Schema.TaggedStruct<"fill", {}>, Schema.Struct<{
        readonly _tag: Schema.tag<"freeform">;
        readonly width: Schema.Int;
        readonly height: Schema.Int;
    }>, Schema.Struct<{
        readonly _tag: Schema.tag<"preset">;
        readonly width: Schema.Int;
        readonly height: Schema.Int;
        readonly presetId: Schema.Literals<readonly ["iphone-se", "iphone-xr", "iphone-12-pro", "iphone-14-pro-max", "pixel-7", "samsung-galaxy-s8-plus", "samsung-galaxy-s20-ultra", "ipad-mini", "ipad-air", "ipad-pro", "surface-pro-7", "surface-duo", "galaxy-z-fold-5", "asus-zenbook-fold", "samsung-galaxy-a51-71", "nest-hub", "nest-hub-max", "desktop-1920x1080", "desktop-1440x900", "laptop-1366x768", "laptop-1280x800", "ipad-pro-11", "iphone-15-pro", "pixel-8", "galaxy-s24"]>;
    }>]>;
    readonly viewport: Schema.Struct<{
        readonly width: Schema.Int;
        readonly height: Schema.Int;
    }>;
}>;
export type PreviewAutomationResizeResult = typeof PreviewAutomationResizeResult.Type;
export declare const PreviewAutomationColorScheme: Schema.Literals<readonly ["system", "light", "dark"]>;
export type PreviewAutomationColorScheme = typeof PreviewAutomationColorScheme.Type;
export declare const PreviewAutomationSetColorSchemeInput: Schema.Struct<{
    readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly colorScheme: Schema.Literals<readonly ["system", "light", "dark"]>;
}>;
export type PreviewAutomationSetColorSchemeInput = typeof PreviewAutomationSetColorSchemeInput.Type;
export declare const PreviewAutomationSetColorSchemeResult: Schema.Struct<{
    readonly tabId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly colorScheme: Schema.Literals<readonly ["system", "light", "dark"]>;
}>;
export type PreviewAutomationSetColorSchemeResult = typeof PreviewAutomationSetColorSchemeResult.Type;
export declare const PreviewAutomationClickInput: Schema.Struct<{
    readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly selector: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly locator: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly x: Schema.optional<Schema.Finite>;
    readonly y: Schema.optional<Schema.Finite>;
    readonly timeoutMs: Schema.optional<Schema.Int>;
    readonly button: Schema.optional<Schema.Literals<readonly ["left", "right", "middle"]>>;
    readonly clickCount: Schema.optional<Schema.Int>;
}>;
export type PreviewAutomationClickInput = typeof PreviewAutomationClickInput.Type;
export declare const PreviewAutomationHoverInput: Schema.Struct<{
    tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    selector: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    locator: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    x: Schema.optional<Schema.Finite>;
    y: Schema.optional<Schema.Finite>;
    timeoutMs: Schema.optional<Schema.Int>;
}>;
export type PreviewAutomationHoverInput = typeof PreviewAutomationHoverInput.Type;
export declare const PreviewAutomationSelectInput: Schema.Struct<{
    readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly selector: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly locator: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly values: Schema.$Array<Schema.String>;
    readonly timeoutMs: Schema.optional<Schema.Int>;
}>;
export type PreviewAutomationSelectInput = typeof PreviewAutomationSelectInput.Type;
export declare const PreviewAutomationSelectResult: Schema.Struct<{
    readonly selected: Schema.$Array<Schema.String>;
}>;
export type PreviewAutomationSelectResult = typeof PreviewAutomationSelectResult.Type;
export declare const PreviewAutomationDragInput: Schema.Struct<{
    readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly source: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly target: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly timeoutMs: Schema.optional<Schema.Int>;
}>;
export type PreviewAutomationDragInput = typeof PreviewAutomationDragInput.Type;
export declare const PreviewAutomationUploadInput: Schema.Struct<{
    readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly paths: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly selector: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly locator: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly timeoutMs: Schema.optional<Schema.Int>;
}>;
export type PreviewAutomationUploadInput = typeof PreviewAutomationUploadInput.Type;
export declare const PreviewAutomationTypeInput: Schema.Struct<{
    readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly text: Schema.String;
    readonly selector: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly locator: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly clear: Schema.optional<Schema.Boolean>;
    readonly timeoutMs: Schema.optional<Schema.Int>;
}>;
export type PreviewAutomationTypeInput = typeof PreviewAutomationTypeInput.Type;
export declare const PreviewAutomationPressInput: Schema.Struct<{
    readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly key: Schema.String;
    readonly modifiers: Schema.optional<Schema.$Array<Schema.Literals<readonly ["Alt", "Control", "Meta", "Shift"]>>>;
}>;
export type PreviewAutomationPressInput = typeof PreviewAutomationPressInput.Type;
export declare const PreviewAutomationScrollInput: Schema.Struct<{
    readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly deltaX: Schema.optional<Schema.Finite>;
    readonly deltaY: Schema.optional<Schema.Finite>;
    readonly selector: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly locator: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type PreviewAutomationScrollInput = typeof PreviewAutomationScrollInput.Type;
/** Strict input for each `preview_act` action. */
export declare const PreviewAutomationActInputs: {
    readonly click: Schema.Struct<{
        readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly selector: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly locator: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly x: Schema.optional<Schema.Finite>;
        readonly y: Schema.optional<Schema.Finite>;
        readonly timeoutMs: Schema.optional<Schema.Int>;
        readonly button: Schema.optional<Schema.Literals<readonly ["left", "right", "middle"]>>;
        readonly clickCount: Schema.optional<Schema.Int>;
    }>;
    readonly type: Schema.Struct<{
        readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly text: Schema.String;
        readonly selector: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly locator: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly clear: Schema.optional<Schema.Boolean>;
        readonly timeoutMs: Schema.optional<Schema.Int>;
    }>;
    readonly hover: Schema.Struct<{
        tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        selector: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        locator: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        x: Schema.optional<Schema.Finite>;
        y: Schema.optional<Schema.Finite>;
        timeoutMs: Schema.optional<Schema.Int>;
    }>;
    readonly select: Schema.Struct<{
        readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly selector: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly locator: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly values: Schema.$Array<Schema.String>;
        readonly timeoutMs: Schema.optional<Schema.Int>;
    }>;
    readonly drag: Schema.Struct<{
        readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly source: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly target: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly timeoutMs: Schema.optional<Schema.Int>;
    }>;
    readonly upload: Schema.Struct<{
        readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly paths: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly selector: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly locator: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly timeoutMs: Schema.optional<Schema.Int>;
    }>;
    readonly press: Schema.Struct<{
        readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly key: Schema.String;
        readonly modifiers: Schema.optional<Schema.$Array<Schema.Literals<readonly ["Alt", "Control", "Meta", "Shift"]>>>;
    }>;
    readonly scroll: Schema.Struct<{
        readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly deltaX: Schema.optional<Schema.Finite>;
        readonly deltaY: Schema.optional<Schema.Finite>;
        readonly selector: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly locator: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
};
export type PreviewAutomationAction = keyof typeof PreviewAutomationActInputs;
/** One flat shape for every page action. The server decodes it with the action's strict input. */
export declare const PreviewAutomationActInput: Schema.Struct<{
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
export type PreviewAutomationActInput = typeof PreviewAutomationActInput.Type;
export declare const PreviewAutomationEvaluateInput: Schema.Struct<{
    readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly expression: Schema.String;
    readonly awaitPromise: Schema.optional<Schema.Boolean>;
    readonly returnByValue: Schema.optional<Schema.Boolean>;
}>;
export type PreviewAutomationEvaluateInput = typeof PreviewAutomationEvaluateInput.Type;
export declare const PreviewAutomationWaitForInput: Schema.Struct<{
    readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly selector: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly locator: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly text: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly urlIncludes: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly timeoutMs: Schema.optional<Schema.Int>;
}>;
export type PreviewAutomationWaitForInput = typeof PreviewAutomationWaitForInput.Type;
export declare const PreviewAutomationElement: Schema.Struct<{
    readonly tag: Schema.String;
    readonly role: Schema.NullOr<Schema.String>;
    readonly name: Schema.String;
    readonly selector: Schema.String;
    readonly x: Schema.Number;
    readonly y: Schema.Number;
    readonly width: Schema.Number;
    readonly height: Schema.Number;
}>;
export type PreviewAutomationElement = typeof PreviewAutomationElement.Type;
export declare const PreviewAutomationConsoleEntry: Schema.Struct<{
    readonly level: Schema.String;
    readonly text: Schema.String;
    readonly timestamp: Schema.String;
    readonly source: Schema.optional<Schema.String>;
}>;
export type PreviewAutomationConsoleEntry = typeof PreviewAutomationConsoleEntry.Type;
export declare const PreviewAutomationNetworkEntry: Schema.Struct<{
    readonly url: Schema.String;
    readonly method: Schema.String;
    readonly status: Schema.NullOr<Schema.Number>;
    readonly failed: Schema.Boolean;
    readonly errorText: Schema.optional<Schema.String>;
    readonly timestamp: Schema.String;
}>;
export type PreviewAutomationNetworkEntry = typeof PreviewAutomationNetworkEntry.Type;
export declare const PreviewAutomationActionEvent: Schema.Struct<{
    readonly id: Schema.String;
    readonly action: Schema.String;
    readonly status: Schema.Literals<readonly ["running", "succeeded", "failed", "interrupted"]>;
    readonly startedAt: Schema.String;
    readonly completedAt: Schema.optional<Schema.String>;
    readonly error: Schema.optional<Schema.String>;
}>;
export type PreviewAutomationActionEvent = typeof PreviewAutomationActionEvent.Type;
export declare const PreviewAutomationSnapshot: Schema.Struct<{
    readonly url: Schema.String;
    readonly title: Schema.String;
    readonly loading: Schema.Boolean;
    readonly visibleText: Schema.String;
    readonly interactiveElements: Schema.$Array<Schema.Struct<{
        readonly tag: Schema.String;
        readonly role: Schema.NullOr<Schema.String>;
        readonly name: Schema.String;
        readonly selector: Schema.String;
        readonly x: Schema.Number;
        readonly y: Schema.Number;
        readonly width: Schema.Number;
        readonly height: Schema.Number;
    }>>;
    readonly accessibilityTree: Schema.Unknown;
    readonly consoleEntries: Schema.$Array<Schema.Struct<{
        readonly level: Schema.String;
        readonly text: Schema.String;
        readonly timestamp: Schema.String;
        readonly source: Schema.optional<Schema.String>;
    }>>;
    readonly networkEntries: Schema.$Array<Schema.Struct<{
        readonly url: Schema.String;
        readonly method: Schema.String;
        readonly status: Schema.NullOr<Schema.Number>;
        readonly failed: Schema.Boolean;
        readonly errorText: Schema.optional<Schema.String>;
        readonly timestamp: Schema.String;
    }>>;
    readonly actionTimeline: Schema.$Array<Schema.Struct<{
        readonly id: Schema.String;
        readonly action: Schema.String;
        readonly status: Schema.Literals<readonly ["running", "succeeded", "failed", "interrupted"]>;
        readonly startedAt: Schema.String;
        readonly completedAt: Schema.optional<Schema.String>;
        readonly error: Schema.optional<Schema.String>;
    }>>;
    readonly screenshot: Schema.Struct<{
        readonly mimeType: Schema.Literal<"image/png">;
        readonly data: Schema.String;
        readonly width: Schema.Int;
        readonly height: Schema.Int;
    }>;
}>;
export type PreviewAutomationSnapshot = typeof PreviewAutomationSnapshot.Type;
export declare const PreviewAutomationRecordingStatus: Schema.Struct<{
    readonly tabId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly recording: Schema.Boolean;
    readonly startedAt: Schema.NullOr<Schema.String>;
}>;
export type PreviewAutomationRecordingStatus = typeof PreviewAutomationRecordingStatus.Type;
export declare const PREVIEW_RECORDING_STOP_TIMEOUT_MS = 120000;
export declare const PreviewAutomationRecordingArtifact: Schema.Struct<{
    readonly id: Schema.String;
    readonly tabId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly path: Schema.String;
    readonly mimeType: Schema.String;
    readonly sizeBytes: Schema.Int;
    readonly createdAt: Schema.String;
}>;
export type PreviewAutomationRecordingArtifact = typeof PreviewAutomationRecordingArtifact.Type;
export declare const PreviewAutomationClientId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
export type PreviewAutomationClientId = typeof PreviewAutomationClientId.Type;
export declare const PreviewAutomationConnectionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
export type PreviewAutomationConnectionId = typeof PreviewAutomationConnectionId.Type;
export declare const PreviewAutomationHostIdentity: Schema.Struct<{
    readonly clientId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
}>;
export type PreviewAutomationHostIdentity = typeof PreviewAutomationHostIdentity.Type;
export declare const PreviewAutomationHost: Schema.Struct<{
    readonly clientId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    /** Missing means the V1 operation set from before capability negotiation. */
    readonly supportedOperations: Schema.optional<Schema.$Array<Schema.Literals<readonly ["status", "open", "navigate", "snapshot", "click", "type", "press", "scroll", "evaluate", "waitFor", "recordingStart", "recordingStop", "resize", "setColorScheme", "dialog", "close", "upload", "hover", "select", "drag"]>>>;
}>;
export type PreviewAutomationHost = typeof PreviewAutomationHost.Type;
export declare const PreviewAutomationHostFocus: Schema.Struct<{
    readonly clientId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly connectionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly focused: Schema.Boolean;
    readonly liveTabs: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly tabId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly visible: Schema.optional<Schema.Boolean>;
    }>>>;
}>;
export type PreviewAutomationHostFocus = typeof PreviewAutomationHostFocus.Type;
export declare const PreviewAutomationRequest: Schema.Struct<{
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly tabIdExplicit: Schema.optional<Schema.Boolean>;
    /** Supplied by the broker from authenticated scope, never from tool input. */
    readonly agentSessionId: Schema.optional<Schema.String>;
    readonly operation: Schema.Literals<readonly ["status", "open", "navigate", "snapshot", "click", "type", "press", "scroll", "evaluate", "waitFor", "recordingStart", "recordingStop", "resize", "setColorScheme", "dialog", "close", "upload", "hover", "select", "drag"]>;
    readonly input: Schema.Unknown;
    readonly timeoutMs: Schema.Int;
}>;
export type PreviewAutomationRequest = typeof PreviewAutomationRequest.Type;
export declare const PreviewAutomationStreamEvent: Schema.Union<readonly [Schema.Struct<{
    readonly type: Schema.Literal<"connected">;
    readonly connectionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"request">;
    readonly connectionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly request: Schema.Struct<{
        readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly tabIdExplicit: Schema.optional<Schema.Boolean>;
        /** Supplied by the broker from authenticated scope, never from tool input. */
        readonly agentSessionId: Schema.optional<Schema.String>;
        readonly operation: Schema.Literals<readonly ["status", "open", "navigate", "snapshot", "click", "type", "press", "scroll", "evaluate", "waitFor", "recordingStart", "recordingStop", "resize", "setColorScheme", "dialog", "close", "upload", "hover", "select", "drag"]>;
        readonly input: Schema.Unknown;
        readonly timeoutMs: Schema.Int;
    }>;
}>]>;
export type PreviewAutomationStreamEvent = typeof PreviewAutomationStreamEvent.Type;
export declare const PreviewAutomationResponse: Schema.Struct<{
    readonly clientId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly connectionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly ok: Schema.Boolean;
    readonly result: Schema.optional<Schema.Unknown>;
    readonly error: Schema.optional<Schema.Struct<{
        readonly _tag: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly message: Schema.String;
        readonly detail: Schema.optional<Schema.Unknown>;
    }>>;
}>;
export type PreviewAutomationResponse = typeof PreviewAutomationResponse.Type;
declare const PreviewAutomationUnavailableError_base: Schema.Class<PreviewAutomationUnavailableError, Schema.TaggedStruct<"PreviewAutomationUnavailableError", {
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly threadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
    readonly providerSessionId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly capability: Schema.Literal<"preview">;
}>, import("effect/Cause").YieldableError>;
export declare class PreviewAutomationUnavailableError extends PreviewAutomationUnavailableError_base {
    get message(): string;
}
declare const McpCapabilityUnavailableError_base: Schema.Class<McpCapabilityUnavailableError, Schema.TaggedStruct<"McpCapabilityUnavailableError", {
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly threadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
    readonly providerSessionId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly providerInstanceId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
    readonly capability: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, import("effect/Cause").YieldableError>;
export declare class McpCapabilityUnavailableError extends McpCapabilityUnavailableError_base {
    get message(): string;
}
export declare const SERVER_BROWSER_AUTOMATION_CLIENT_ID = "server-browser";
declare const PreviewAutomationNoAvailableHostError_base: Schema.Class<PreviewAutomationNoAvailableHostError, Schema.TaggedStruct<"PreviewAutomationNoAvailableHostError", {
    readonly operation: Schema.Literals<readonly ["status", "open", "navigate", "snapshot", "click", "type", "press", "scroll", "evaluate", "waitFor", "recordingStart", "recordingStop", "resize", "setColorScheme", "dialog", "close", "upload", "hover", "select", "drag"]>;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly providerSessionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly remoteTag: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly remoteMessageLength: Schema.optional<Schema.Int>;
    readonly remoteDetailKind: Schema.optional<Schema.Literals<readonly ["null", "array", "object", "string", "number", "boolean"]>>;
    readonly cause: Schema.optional<Schema.Defect>;
    readonly clientId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly connectionId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly requestId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly timeoutMs: Schema.optional<Schema.Int>;
}>, import("effect/Cause").YieldableError>;
export declare class PreviewAutomationNoAvailableHostError extends PreviewAutomationNoAvailableHostError_base {
    get message(): string;
}
declare const PreviewAutomationUnsupportedClientError_base: Schema.Class<PreviewAutomationUnsupportedClientError, Schema.TaggedStruct<"PreviewAutomationUnsupportedClientError", {
    readonly operation: Schema.Literals<readonly ["status", "open", "navigate", "snapshot", "click", "type", "press", "scroll", "evaluate", "waitFor", "recordingStart", "recordingStop", "resize", "setColorScheme", "dialog", "close", "upload", "hover", "select", "drag"]>;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly providerSessionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly clientId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly connectionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly timeoutMs: Schema.Int;
    readonly remoteTag: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly remoteMessageLength: Schema.Int;
    readonly remoteDetailKind: Schema.optional<Schema.Literals<readonly ["null", "array", "object", "string", "number", "boolean"]>>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class PreviewAutomationUnsupportedClientError extends PreviewAutomationUnsupportedClientError_base {
    get message(): string;
}
declare const PreviewAutomationTabNotFoundError_base: Schema.Class<PreviewAutomationTabNotFoundError, Schema.TaggedStruct<"PreviewAutomationTabNotFoundError", {
    readonly operation: Schema.Literals<readonly ["status", "open", "navigate", "snapshot", "click", "type", "press", "scroll", "evaluate", "waitFor", "recordingStart", "recordingStop", "resize", "setColorScheme", "dialog", "close", "upload", "hover", "select", "drag"]>;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly providerSessionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly clientId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly connectionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly timeoutMs: Schema.Int;
    readonly remoteTag: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly remoteMessageLength: Schema.Int;
    readonly remoteDetailKind: Schema.optional<Schema.Literals<readonly ["null", "array", "object", "string", "number", "boolean"]>>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class PreviewAutomationTabNotFoundError extends PreviewAutomationTabNotFoundError_base {
    get message(): string;
}
declare const PreviewAutomationTimeoutError_base: Schema.Class<PreviewAutomationTimeoutError, Schema.TaggedStruct<"PreviewAutomationTimeoutError", {
    readonly operation: Schema.Literals<readonly ["status", "open", "navigate", "snapshot", "click", "type", "press", "scroll", "evaluate", "waitFor", "recordingStart", "recordingStop", "resize", "setColorScheme", "dialog", "close", "upload", "hover", "select", "drag"]>;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly providerSessionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly clientId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly connectionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly timeoutMs: Schema.Int;
    readonly remoteTag: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly remoteMessageLength: Schema.optional<Schema.Int>;
    readonly remoteDetailKind: Schema.optional<Schema.Literals<readonly ["null", "array", "object", "string", "number", "boolean"]>>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class PreviewAutomationTimeoutError extends PreviewAutomationTimeoutError_base {
    get message(): string;
}
export declare const PreviewAutomationControlReason: Schema.Literals<readonly ["agentMismatch", "humanControl", "tabRequired", "closed", "interrupted", "dialogPending", "tabLimit"]>;
export type PreviewAutomationControlReason = typeof PreviewAutomationControlReason.Type;
declare const PreviewAutomationControlInterruptedError_base: Schema.Class<PreviewAutomationControlInterruptedError, Schema.TaggedStruct<"PreviewAutomationControlInterruptedError", {
    readonly operation: Schema.Literals<readonly ["status", "open", "navigate", "snapshot", "click", "type", "press", "scroll", "evaluate", "waitFor", "recordingStart", "recordingStop", "resize", "setColorScheme", "dialog", "close", "upload", "hover", "select", "drag"]>;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly providerSessionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly clientId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly connectionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly timeoutMs: Schema.Int;
    readonly remoteTag: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly remoteMessageLength: Schema.Int;
    readonly remoteDetailKind: Schema.optional<Schema.Literals<readonly ["null", "array", "object", "string", "number", "boolean"]>>;
    readonly cause: Schema.Defect;
    readonly reason: Schema.optional<Schema.Literals<readonly ["agentMismatch", "humanControl", "tabRequired", "closed", "interrupted", "dialogPending", "tabLimit"]>>;
}>, import("effect/Cause").YieldableError>;
export declare class PreviewAutomationControlInterruptedError extends PreviewAutomationControlInterruptedError_base {
    get message(): string;
}
declare const PreviewAutomationExecutionError_base: Schema.Class<PreviewAutomationExecutionError, Schema.TaggedStruct<"PreviewAutomationExecutionError", {
    readonly operation: Schema.Literals<readonly ["status", "open", "navigate", "snapshot", "click", "type", "press", "scroll", "evaluate", "waitFor", "recordingStart", "recordingStop", "resize", "setColorScheme", "dialog", "close", "upload", "hover", "select", "drag"]>;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly providerSessionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly clientId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly connectionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly timeoutMs: Schema.Int;
    readonly remoteTag: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly remoteMessageLength: Schema.Int;
    readonly remoteDetailKind: Schema.optional<Schema.Literals<readonly ["null", "array", "object", "string", "number", "boolean"]>>;
    readonly cause: Schema.Defect;
    readonly reason: Schema.optional<Schema.String>;
}>, import("effect/Cause").YieldableError>;
export declare class PreviewAutomationExecutionError extends PreviewAutomationExecutionError_base {
    get message(): string;
}
declare const PreviewAutomationInvalidSelectorError_base: Schema.Class<PreviewAutomationInvalidSelectorError, Schema.TaggedStruct<"PreviewAutomationInvalidSelectorError", {
    readonly operation: Schema.Literals<readonly ["status", "open", "navigate", "snapshot", "click", "type", "press", "scroll", "evaluate", "waitFor", "recordingStart", "recordingStop", "resize", "setColorScheme", "dialog", "close", "upload", "hover", "select", "drag"]>;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly providerSessionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly clientId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly connectionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly timeoutMs: Schema.Int;
    readonly remoteTag: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly remoteMessageLength: Schema.Int;
    readonly remoteDetailKind: Schema.optional<Schema.Literals<readonly ["null", "array", "object", "string", "number", "boolean"]>>;
    readonly cause: Schema.Defect;
    readonly selectorKind: Schema.optional<Schema.Literals<readonly ["locator", "selector"]>>;
    readonly selectorLength: Schema.optional<Schema.Int>;
    readonly staleRef: Schema.optional<Schema.Boolean>;
}>, import("effect/Cause").YieldableError>;
export declare class PreviewAutomationInvalidSelectorError extends PreviewAutomationInvalidSelectorError_base {
    get message(): string;
}
declare const PreviewAutomationTargetNotEditableError_base: Schema.Class<PreviewAutomationTargetNotEditableError, Schema.TaggedStruct<"PreviewAutomationTargetNotEditableError", {
    readonly operation: Schema.Literals<readonly ["status", "open", "navigate", "snapshot", "click", "type", "press", "scroll", "evaluate", "waitFor", "recordingStart", "recordingStop", "resize", "setColorScheme", "dialog", "close", "upload", "hover", "select", "drag"]>;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly providerSessionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly clientId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly connectionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly timeoutMs: Schema.Int;
    readonly remoteTag: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly remoteMessageLength: Schema.Int;
    readonly remoteDetailKind: Schema.optional<Schema.Literals<readonly ["null", "array", "object", "string", "number", "boolean"]>>;
    readonly cause: Schema.Defect;
    readonly selectorKind: Schema.optional<Schema.Literals<readonly ["focused-element", "locator", "selector"]>>;
    readonly selectorLength: Schema.optional<Schema.Int>;
}>, import("effect/Cause").YieldableError>;
export declare class PreviewAutomationTargetNotEditableError extends PreviewAutomationTargetNotEditableError_base {
    get message(): string;
}
declare const PreviewAutomationResultTooLargeError_base: Schema.Class<PreviewAutomationResultTooLargeError, Schema.TaggedStruct<"PreviewAutomationResultTooLargeError", {
    readonly operation: Schema.Literals<readonly ["status", "open", "navigate", "snapshot", "click", "type", "press", "scroll", "evaluate", "waitFor", "recordingStart", "recordingStop", "resize", "setColorScheme", "dialog", "close", "upload", "hover", "select", "drag"]>;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly providerSessionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly clientId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly connectionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly timeoutMs: Schema.Int;
    readonly remoteTag: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly remoteMessageLength: Schema.Int;
    readonly remoteDetailKind: Schema.optional<Schema.Literals<readonly ["null", "array", "object", "string", "number", "boolean"]>>;
    readonly cause: Schema.Defect;
    readonly maximumBytes: Schema.optional<Schema.Int>;
}>, import("effect/Cause").YieldableError>;
export declare class PreviewAutomationResultTooLargeError extends PreviewAutomationResultTooLargeError_base {
    get message(): string;
}
declare const PreviewAutomationClientDisconnectedError_base: Schema.Class<PreviewAutomationClientDisconnectedError, Schema.TaggedStruct<"PreviewAutomationClientDisconnectedError", {
    operation: Schema.Literals<readonly ["status", "open", "navigate", "snapshot", "click", "type", "press", "scroll", "evaluate", "waitFor", "recordingStart", "recordingStop", "resize", "setColorScheme", "dialog", "close", "upload", "hover", "select", "drag"]>;
    environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    providerSessionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    clientId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    connectionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    timeoutMs: Schema.Int;
}>, import("effect/Cause").YieldableError>;
export declare class PreviewAutomationClientDisconnectedError extends PreviewAutomationClientDisconnectedError_base {
    get message(): string;
}
declare const PreviewAutomationRequestQueueClosedError_base: Schema.Class<PreviewAutomationRequestQueueClosedError, Schema.TaggedStruct<"PreviewAutomationRequestQueueClosedError", {
    operation: Schema.Literals<readonly ["status", "open", "navigate", "snapshot", "click", "type", "press", "scroll", "evaluate", "waitFor", "recordingStart", "recordingStop", "resize", "setColorScheme", "dialog", "close", "upload", "hover", "select", "drag"]>;
    environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    providerSessionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    clientId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    connectionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    timeoutMs: Schema.Int;
}>, import("effect/Cause").YieldableError>;
export declare class PreviewAutomationRequestQueueClosedError extends PreviewAutomationRequestQueueClosedError_base {
    get message(): string;
}
declare const PreviewAutomationRemoteUnavailableError_base: Schema.Class<PreviewAutomationRemoteUnavailableError, Schema.TaggedStruct<"PreviewAutomationRemoteUnavailableError", {
    readonly operation: Schema.Literals<readonly ["status", "open", "navigate", "snapshot", "click", "type", "press", "scroll", "evaluate", "waitFor", "recordingStart", "recordingStop", "resize", "setColorScheme", "dialog", "close", "upload", "hover", "select", "drag"]>;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly providerSessionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly clientId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly connectionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly timeoutMs: Schema.Int;
    readonly remoteTag: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly remoteMessageLength: Schema.Int;
    readonly remoteDetailKind: Schema.optional<Schema.Literals<readonly ["null", "array", "object", "string", "number", "boolean"]>>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class PreviewAutomationRemoteUnavailableError extends PreviewAutomationRemoteUnavailableError_base {
    get message(): string;
}
declare const PreviewAutomationMalformedResponseError_base: Schema.Class<PreviewAutomationMalformedResponseError, Schema.TaggedStruct<"PreviewAutomationMalformedResponseError", {
    operation: Schema.Literals<readonly ["status", "open", "navigate", "snapshot", "click", "type", "press", "scroll", "evaluate", "waitFor", "recordingStart", "recordingStop", "resize", "setColorScheme", "dialog", "close", "upload", "hover", "select", "drag"]>;
    environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    providerSessionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    providerInstanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    clientId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    connectionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    requestId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    tabId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    timeoutMs: Schema.Int;
}>, import("effect/Cause").YieldableError>;
export declare class PreviewAutomationMalformedResponseError extends PreviewAutomationMalformedResponseError_base {
    get message(): string;
}
declare const PreviewAutomationRecordingTransferError_base: Schema.Class<PreviewAutomationRecordingTransferError, Schema.TaggedStruct<"PreviewAutomationRecordingTransferError", {
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class PreviewAutomationRecordingTransferError extends PreviewAutomationRecordingTransferError_base {
    get message(): string;
}
declare const PreviewAutomationRecordingDesktopUpdateRequiredError_base: Schema.Class<PreviewAutomationRecordingDesktopUpdateRequiredError, Schema.TaggedStruct<"PreviewAutomationRecordingDesktopUpdateRequiredError", {
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class PreviewAutomationRecordingDesktopUpdateRequiredError extends PreviewAutomationRecordingDesktopUpdateRequiredError_base {
    get message(): string;
}
declare const PreviewAutomationRecordingTooLargeError_base: Schema.Class<PreviewAutomationRecordingTooLargeError, Schema.TaggedStruct<"PreviewAutomationRecordingTooLargeError", {
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class PreviewAutomationRecordingTooLargeError extends PreviewAutomationRecordingTooLargeError_base {
    get message(): string;
}
declare const PreviewAutomationRecordingDeadlineExpiredError_base: Schema.Class<PreviewAutomationRecordingDeadlineExpiredError, Schema.TaggedStruct<"PreviewAutomationRecordingDeadlineExpiredError", {
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class PreviewAutomationRecordingDeadlineExpiredError extends PreviewAutomationRecordingDeadlineExpiredError_base {
    get message(): string;
}
export declare const PreviewAutomationError: Schema.Union<readonly [typeof PreviewAutomationRecordingTransferError, typeof PreviewAutomationRecordingDesktopUpdateRequiredError, typeof PreviewAutomationRecordingTooLargeError, typeof PreviewAutomationRecordingDeadlineExpiredError, typeof PreviewAutomationUnavailableError, typeof PreviewAutomationNoAvailableHostError, typeof PreviewAutomationUnsupportedClientError, typeof PreviewAutomationTabNotFoundError, typeof PreviewAutomationTimeoutError, typeof PreviewAutomationControlInterruptedError, typeof PreviewAutomationExecutionError, typeof PreviewAutomationInvalidSelectorError, typeof PreviewAutomationTargetNotEditableError, typeof PreviewAutomationResultTooLargeError, typeof PreviewAutomationClientDisconnectedError, typeof PreviewAutomationRequestQueueClosedError, typeof PreviewAutomationRemoteUnavailableError, typeof PreviewAutomationMalformedResponseError]>;
export type PreviewAutomationError = typeof PreviewAutomationError.Type;
export declare const PreviewUrlResolution: Schema.Struct<{
    readonly requestedUrl: Schema.String;
    readonly resolvedUrl: Schema.String;
    readonly resolutionKind: Schema.Literals<readonly ["direct", "direct-private-network"]>;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
}>;
export type PreviewUrlResolution = typeof PreviewUrlResolution.Type;
export {};
