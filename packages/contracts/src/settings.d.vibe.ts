import { type AuthEnvironmentScope } from "./auth.js";
import * as Duration from "effect/Duration";
import * as Schema from "effect/Schema";
import { ProjectId } from "./baseSchemas.js";
import { type ProjectMutation } from "./project.js";
import { PreviewViewportSetting } from "./preview.vibe";
import { ProviderInstanceConfig, ProviderInstanceId } from "./providerInstance.vibe";
export declare const TimestampFormat: Schema.Literals<readonly ["locale", "12-hour", "24-hour"]>;
export type TimestampFormat = typeof TimestampFormat.Type;
export declare const DiffLayout: Schema.Literals<readonly ["stacked", "split"]>;
export type DiffLayout = typeof DiffLayout.Type;
export declare const SidebarProjectSortOrder: Schema.Literals<readonly ["updated_at", "created_at", "manual"]>;
export type SidebarProjectSortOrder = typeof SidebarProjectSortOrder.Type;
export declare const DEFAULT_SIDEBAR_PROJECT_SORT_ORDER: SidebarProjectSortOrder;
export declare const SidebarThreadSortOrder: Schema.Literals<readonly ["updated_at", "created_at"]>;
export type SidebarThreadSortOrder = typeof SidebarThreadSortOrder.Type;
export declare const SidebarProjectGroupingMode: Schema.Literals<readonly ["repository", "repository_path", "separate"]>;
export type SidebarProjectGroupingMode = typeof SidebarProjectGroupingMode.Type;
export declare const MIN_SIDEBAR_THREAD_PREVIEW_COUNT = 1;
export declare const MAX_SIDEBAR_THREAD_PREVIEW_COUNT = 15;
export declare const SidebarThreadPreviewCount: Schema.Int;
export type SidebarThreadPreviewCount = typeof SidebarThreadPreviewCount.Type;
export declare const MIN_SIDEBAR_AUTO_SETTLE_AFTER_DAYS = 1;
export declare const MAX_SIDEBAR_AUTO_SETTLE_AFTER_DAYS = 90;
export declare const SidebarAutoSettleAfterDays: Schema.Number;
export type SidebarAutoSettleAfterDays = typeof SidebarAutoSettleAfterDays.Type;
export declare const MIN_GLASS_OPACITY = 40;
export declare const MAX_GLASS_OPACITY = 100;
export declare const GlassOpacity: Schema.Int;
export type GlassOpacity = typeof GlassOpacity.Type;
export declare const MIN_APPEARANCE_CONTRAST = 50;
export declare const MAX_APPEARANCE_CONTRAST = 200;
export declare const AppearanceContrast: Schema.Int;
export type AppearanceContrast = typeof AppearanceContrast.Type;
export declare const MIN_PANEL_ANIMATION_DURATION_MS = 0;
export declare const MAX_PANEL_ANIMATION_DURATION_MS = 400;
export declare const PanelAnimationDurationMs: Schema.Int;
export type PanelAnimationDurationMs = typeof PanelAnimationDurationMs.Type;
export declare const MIN_INTERFACE_FONT_SIZE = 12;
export declare const MAX_INTERFACE_FONT_SIZE = 20;
export declare const InterfaceFontSize: Schema.Int;
export type InterfaceFontSize = typeof InterfaceFontSize.Type;
export declare const DEFAULT_INTERFACE_FONT_SIZE: InterfaceFontSize;
export declare const MIN_PROMPT_FONT_SIZE = 12;
export declare const MAX_PROMPT_FONT_SIZE = 20;
export declare const PromptFontSize: Schema.Int;
export type PromptFontSize = typeof PromptFontSize.Type;
export declare const DEFAULT_PROMPT_FONT_SIZE: PromptFontSize;
export declare const MIN_CODE_FONT_SIZE = 10;
export declare const MAX_CODE_FONT_SIZE = 18;
export declare const CodeFontSize: Schema.Int;
export type CodeFontSize = typeof CodeFontSize.Type;
export declare const DEFAULT_CODE_FONT_SIZE: CodeFontSize;
export declare const MIN_TERMINAL_FONT_SIZE = 8;
export declare const MAX_TERMINAL_FONT_SIZE = 20;
export declare const TerminalFontSize: Schema.Int;
export type TerminalFontSize = typeof TerminalFontSize.Type;
export declare const EnvironmentIdentificationMode: Schema.Literals<readonly ["artwork", "nightly-artwork", "dev-artwork", "pill", "none"]>;
export type EnvironmentIdentificationMode = typeof EnvironmentIdentificationMode.Type;
export declare const DEFAULT_ENVIRONMENT_IDENTIFICATION_MODE: EnvironmentIdentificationMode;
export declare const SnapShotKeyChord: Schema.Struct<{
    readonly key: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly metaKey: Schema.Boolean;
    readonly ctrlKey: Schema.Boolean;
    readonly shiftKey: Schema.Boolean;
    readonly altKey: Schema.Boolean;
    readonly modKey: Schema.Boolean;
}>;
export type SnapShotKeyChord = typeof SnapShotKeyChord.Type;
export declare const SNAP_SHOT_MODIFIERS: readonly ["shift", "meta", "control", "alt"];
export declare const SnapShotModifier: Schema.Literals<readonly ["shift", "meta", "control", "alt"]>;
export type SnapShotModifier = typeof SnapShotModifier.Type;
export declare const SnapShotShortcut: Schema.Union<readonly [Schema.Struct<{
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
export type SnapShotShortcut = typeof SnapShotShortcut.Type;
export declare const SnapShotSound: Schema.Literals<readonly ["soft-pop", "camera-shutter"]>;
export type SnapShotSound = typeof SnapShotSound.Type;
export type SnapShotModifierPairShortcut = Extract<SnapShotShortcut, {
    readonly kind: string;
}>;
export declare function isModifierPairShortcut(shortcut: SnapShotShortcut): shortcut is SnapShotModifierPairShortcut;
export declare function snapShotShortcutModifierPair(shortcut: SnapShotModifierPairShortcut): SnapShotModifier;
export declare function snapShotModifierPairLabel(modifier: SnapShotModifier, apple: boolean): string;
export declare const NotificationMode: Schema.Literals<readonly ["off", "notifications", "sound", "notifications-and-sound"]>;
export type NotificationMode = typeof NotificationMode.Type;
export declare const QuitConfirmationMode: Schema.Literals<readonly ["direct", "hold", "double-click"]>;
export type QuitConfirmationMode = typeof QuitConfirmationMode.Type;
export declare const FontFamilyPreference: Schema.String;
export type FontFamilyPreference = typeof FontFamilyPreference.Type;
/** Clients apply each environment theme set once; later local choices persist until the next set. Empty clears it. */
export declare const DefaultThemePreference: Schema.String;
export type DefaultThemePreference = typeof DefaultThemePreference.Type;
export declare const DEFAULT_BROWSER_VIEWPORT: PreviewViewportSetting;
export declare const DEFAULT_BROWSER_AUTO_SHOW_FLOATING_PREVIEW = true;
export { BROWSER_RECORDING_FRAME_RATES, BrowserRecordingFrameRate, DEFAULT_BROWSER_RECORDING_FRAME_RATE, } from "./preview.vibe";
export declare const BrowserLinkTarget: Schema.Literals<readonly ["system", "app"]>;
export type BrowserLinkTarget = typeof BrowserLinkTarget.Type;
export declare const DEFAULT_BROWSER_LINK_TARGET: BrowserLinkTarget;
/**
 * What the address bar searches with when the input is not an address.
 * "custom" uses `browserCustomSearchUrl`, a template with `%s` for the query.
 */
export declare const BrowserSearchEngine: Schema.Literals<readonly ["duckduckgo", "google", "bing", "brave", "kagi", "ecosia", "custom"]>;
export type BrowserSearchEngine = typeof BrowserSearchEngine.Type;
export declare const DEFAULT_BROWSER_SEARCH_ENGINE: BrowserSearchEngine;
export declare const BROWSER_CUSTOM_SEARCH_URL_MAX_LENGTH = 2048;
export declare const BrowserCustomSearchUrl: Schema.String;
export declare const LoadBalancingWeights: Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Int>;
export declare const DiffColorScheme: Schema.Literals<readonly ["red-green", "blue-orange"]>;
export declare const ChatWidth: Schema.Literals<readonly ["comfortable", "wide", "full"]>;
export type ChatWidth = typeof ChatWidth.Type;
export declare const ModelFavorite: Schema.Struct<{
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export declare const ModelFavorites: Schema.$Array<Schema.Struct<{
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>;
export declare const ProviderModelPreferences: Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
    readonly hiddenModels: Schema.withDecodingDefault<Schema.$Array<Schema.String>, never>;
    readonly modelOrder: Schema.withDecodingDefault<Schema.$Array<Schema.String>, never>;
}>>;
export type ModelPreferences = {
    readonly favorites: typeof ModelFavorites.Type;
    readonly providerModelPreferences: typeof ProviderModelPreferences.Type;
};
export declare const ClientSettingsSchema: Schema.Struct<{
    readonly notificationMode: Schema.withDecodingDefault<Schema.Literals<readonly ["off", "notifications", "sound", "notifications-and-sound"]>, never>;
    readonly inAppNotificationsEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly diffColorScheme: Schema.withDecodingDefault<Schema.Literals<readonly ["red-green", "blue-orange"]>, never>;
    readonly chatWidth: Schema.withDecodingDefault<Schema.Literals<readonly ["comfortable", "wide", "full"]>, never>;
    readonly loadBalancingEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly loadBalancingWeights: Schema.withDecodingDefault<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Int>, never>;
    readonly appearanceContrast: Schema.withDecodingDefault<Schema.Int, never>;
    readonly panelAnimationDurationMs: Schema.withDecodingDefault<Schema.Int, never>;
    readonly browserDefaultViewport: Schema.withDecodingDefault<Schema.Union<readonly [Schema.TaggedStruct<"fill", {}>, Schema.Struct<{
        readonly _tag: Schema.tag<"freeform">;
        readonly width: Schema.Int;
        readonly height: Schema.Int;
    }>, Schema.Struct<{
        readonly _tag: Schema.tag<"preset">;
        readonly width: Schema.Int;
        readonly height: Schema.Int;
        readonly presetId: Schema.Literals<readonly ["iphone-se", "iphone-xr", "iphone-12-pro", "iphone-14-pro-max", "pixel-7", "samsung-galaxy-s8-plus", "samsung-galaxy-s20-ultra", "ipad-mini", "ipad-air", "ipad-pro", "surface-pro-7", "surface-duo", "galaxy-z-fold-5", "asus-zenbook-fold", "samsung-galaxy-a51-71", "nest-hub", "nest-hub-max", "desktop-1920x1080", "desktop-1440x900", "laptop-1366x768", "laptop-1280x800", "ipad-pro-11", "iphone-15-pro", "pixel-8", "galaxy-s24"]>;
    }>]>, never>;
    readonly browserDefaultZoomFactor: Schema.withDecodingDefault<Schema.Literals<readonly [0.25, 0.33, 0.5, 0.67, 0.75, 0.8, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2, 2.5, 3, 4, 5]>, never>;
    readonly browserDefaultAppearance: Schema.withDecodingDefault<Schema.Literals<readonly ["system", "light", "dark"]>, never>;
    readonly browserRecordingFrameRate: Schema.withDecodingDefault<Schema.Literals<readonly [30, 60]>, never>;
    readonly browserRecordingShowKeyPresses: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly browserRecordingShowMousePresses: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly browserLinkTarget: Schema.withDecodingDefault<Schema.Literals<readonly ["system", "app"]>, never>;
    readonly browserSearchEngine: Schema.withDecodingDefault<Schema.Literals<readonly ["duckduckgo", "google", "bing", "brave", "kagi", "ecosia", "custom"]>, never>;
    readonly browserCustomSearchUrl: Schema.withDecodingDefault<Schema.String, never>;
    readonly browserAutoShowFloatingPreview: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly browserProfiles: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly kind: Schema.Literals<readonly ["persistent", "incognito"]>;
    }>>, never>;
    readonly browserDefaultProfileId: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    readonly confirmQuit: Schema.withDecodingDefault<Schema.Union<readonly [Schema.Literals<readonly ["direct", "hold", "double-click"]>, Schema.decodeTo<Schema.Literals<readonly ["direct", "hold", "double-click"]>, Schema.Boolean, never, never>]>, never>;
    readonly confirmThreadArchive: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly confirmThreadDelete: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly confirmThreadUnpin: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly dismissedProviderUpdateNotificationKeys: Schema.withDecodingDefault<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>, never>;
    readonly diffFilesCollapsed: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly diffIgnoreWhitespace: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly diffLayout: Schema.withDecodingDefault<Schema.Literals<readonly ["stacked", "split"]>, never>;
    readonly environmentIdentificationMode: Schema.withDecodingDefault<Schema.Literals<readonly ["artwork", "nightly-artwork", "dev-artwork", "pill", "none"]>, never>;
    readonly glassOpacity: Schema.withDecodingDefault<Schema.Int, never>;
    readonly fontSizeInterface: Schema.withDecodingDefault<Schema.Int, never>;
    readonly fontSizePrompt: Schema.withDecodingDefault<Schema.Int, never>;
    readonly fontSizeCode: Schema.withDecodingDefault<Schema.Int, never>;
    readonly fontSizeTerminal: Schema.withDecodingDefault<Schema.Int, never>;
    readonly fontFamilyCode: Schema.withDecodingDefault<Schema.String, never>;
    readonly fontFamilyComposer: Schema.withDecodingDefault<Schema.String, never>;
    readonly fontFamilySans: Schema.withDecodingDefault<Schema.String, never>;
    readonly fontFamilyTerminal: Schema.withDecodingDefault<Schema.String, never>;
    readonly fontSmoothing: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly onboardingCompletedAt: Schema.withDecodingDefault<Schema.NullOr<Schema.String>, never>;
    readonly persistComposerContextStrip: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly favorites: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
        readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>, never>;
    readonly providerModelPreferences: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
        readonly hiddenModels: Schema.withDecodingDefault<Schema.$Array<Schema.String>, never>;
        readonly modelOrder: Schema.withDecodingDefault<Schema.$Array<Schema.String>, never>;
    }>>, never>;
    readonly pullRequestMergeMethodOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Literals<readonly ["merge", "squash", "rebase"]>>, never>;
    readonly pullRequestLinksOpenInApp: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly planModeEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly contextWindowMeterEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly composerCollapseOnScroll: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly composerRichTextEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly sendShortcut: Schema.withDecodingDefault<Schema.Literals<readonly ["enter", "mod-enter-multiline", "mod-enter"]>, never>;
    readonly followUpBehavior: Schema.withDecodingDefault<Schema.Literals<readonly ["queue", "steer"]>, never>;
    readonly proactivePanelsEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly showSkillsInSlashMenu: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly legacySidebarEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly sidebarWorkingShelfEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly sidebarProjectGroupingMode: Schema.withDecodingDefault<Schema.Literals<readonly ["repository", "repository_path", "separate"]>, never>;
    readonly sidebarProjectGroupingOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Literals<readonly ["repository", "repository_path", "separate"]>>, never>;
    readonly sidebarProjectSortOrder: Schema.withDecodingDefault<Schema.Literals<readonly ["updated_at", "created_at", "manual"]>, never>;
    readonly sidebarThreadSortOrder: Schema.withDecodingDefault<Schema.Literals<readonly ["updated_at", "created_at"]>, never>;
    readonly sidebarThreadPreviewCount: Schema.withDecodingDefault<Schema.Int, never>;
    readonly timestampFormat: Schema.withDecodingDefault<Schema.Literals<readonly ["locale", "12-hour", "24-hour"]>, never>;
    readonly snapShotEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly snapShotIncludeAccessibility: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly snapShotShortcut: Schema.withDecodingDefault<Schema.Union<readonly [Schema.Struct<{
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
    }>]>, never>;
    readonly snapShotPlaySound: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly snapShotSound: Schema.withDecodingDefault<Schema.Literals<readonly ["soft-pop", "camera-shutter"]>, never>;
    readonly snapShotFlash: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly snapShotAnimations: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly wordWrap: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly mathRenderingEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
}>;
export type ClientSettings = typeof ClientSettingsSchema.Type;
export declare const DEFAULT_CLIENT_SETTINGS: ClientSettings;
/** Omitted cache rates use the input rate. */
export declare const UsageModelPriceOverride: Schema.Struct<{
    readonly inputCostPerMillionTokens: Schema.Number;
    readonly outputCostPerMillionTokens: Schema.Number;
    readonly cacheReadCostPerMillionTokens: Schema.optionalKey<Schema.Number>;
    readonly cacheWriteCostPerMillionTokens: Schema.optionalKey<Schema.Number>;
}>;
export type UsageModelPriceOverride = typeof UsageModelPriceOverride.Type;
export declare const makeBinaryPathSetting: (fallback: string) => Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>, never, never>, never>;
export type ProviderSettingsFormControl = "text" | "password" | "textarea" | "switch" | "select";
export interface ProviderSettingsFormOption {
    readonly value: string;
    readonly label: string;
}
export interface ProviderSettingsFormAnnotation {
    readonly control?: ProviderSettingsFormControl | undefined;
    readonly placeholder?: string | undefined;
    readonly hidden?: boolean | undefined;
    readonly clearWhenEmpty?: "omit" | "persist" | undefined;
    readonly options?: ReadonlyArray<ProviderSettingsFormOption> | undefined;
}
export declare function secretSettingsFields(schema: {
    readonly fields: Readonly<Record<string, Schema.Top>>;
}): ReadonlyArray<string>;
export interface ProviderSettingsFormSchemaAnnotation {
    readonly order?: readonly string[] | undefined;
}
declare module "effect/Schema" {
    namespace Annotations {
        interface Annotations {
            /** Store this credential separately and expose only whether it is configured to clients. */
            readonly settingsSecret?: boolean | undefined;
            readonly providerSettingsForm?: ProviderSettingsFormAnnotation | undefined;
            readonly providerSettingsFormSchema?: ProviderSettingsFormSchemaAnnotation | undefined;
        }
    }
}
export declare function secretSetting<S extends Schema.Top>(schema: S): S["Rebuild"];
/** A masked form field is a credential too, so none is saved or sent to clients as plain text. */
export declare function isSecretSetting(schema: Schema.Top): boolean;
export type ProviderSettingsOrder<Fields extends Schema.Struct.Fields> = readonly Extract<keyof Fields, string>[];
export declare function makeProviderSettingsSchema<const Fields extends Schema.Struct.Fields>(fields: Fields, options?: {
    readonly order?: ProviderSettingsOrder<Fields> | undefined;
}): Schema.Struct<Fields>;
export declare const CodexSettings: Schema.Struct<{
    readonly setupMode: Schema.optionalKey<Schema.Literals<readonly ["managed", "existing"]>>;
    readonly enabled: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly binaryPath: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>, never, never>, never>;
    readonly homePath: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    readonly shadowHomePath: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    readonly launchArgs: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    readonly customModels: Schema.withDecodingDefault<Schema.$Array<Schema.Union<readonly [Schema.String, Schema.Struct<{
        readonly slug: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly capabilities: Schema.optional<Schema.Struct<{
            readonly optionDescriptors: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly type: Schema.Literal<"select">;
                readonly options: Schema.$Array<Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly isDefault: Schema.optional<Schema.Boolean>;
                }>>;
                readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            }>, Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly type: Schema.Literal<"boolean">;
                readonly currentValue: Schema.optional<Schema.Boolean>;
            }>]>>>;
        }>>;
    }>]>>, never>;
}>;
export type CodexSettings = typeof CodexSettings.Type;
export declare const IDLE_COMPACTION_MODES: readonly [{
    readonly value: "onReturn";
    readonly label: "When you return";
}, {
    readonly value: "beforeCacheExpires";
    readonly label: "Before the cache expires (beta)";
}, {
    readonly value: "off";
    readonly label: "Never";
}];
export declare const IdleCompactionMode: Schema.Literals<("beforeCacheExpires" | "off" | "onReturn")[]>;
export type IdleCompactionMode = typeof IdleCompactionMode.Type;
export declare const ClaudeSettings: Schema.Struct<{
    readonly enabled: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly binaryPath: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.decodeTo<Schema.String, Schema.String, never, never>, never, never>, never>;
    readonly homePath: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    readonly customModels: Schema.withDecodingDefault<Schema.$Array<Schema.Union<readonly [Schema.String, Schema.Struct<{
        readonly slug: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly capabilities: Schema.optional<Schema.Struct<{
            readonly optionDescriptors: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly type: Schema.Literal<"select">;
                readonly options: Schema.$Array<Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly isDefault: Schema.optional<Schema.Boolean>;
                }>>;
                readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            }>, Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly type: Schema.Literal<"boolean">;
                readonly currentValue: Schema.optional<Schema.Boolean>;
            }>]>>>;
        }>>;
    }>]>>, never>;
    readonly launchArgs: Schema.withDecodingDefault<Schema.String, never>;
    readonly autoCompactWindow: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    readonly idleCompaction: Schema.withDecodingDefault<Schema.Literals<("beforeCacheExpires" | "default" | "off" | "onReturn")[]>, never>;
}>;
export type ClaudeSettings = typeof ClaudeSettings.Type;
export declare const ANTIGRAVITY_AUTH_METHODS: readonly [{
    readonly value: "oauth-personal";
    readonly label: "Google account";
}, {
    readonly value: "oauth-business";
    readonly label: "Gemini Enterprise";
}, {
    readonly value: "gemini-api-key";
    readonly label: "Gemini API key";
}, {
    readonly value: "agent-platform";
    readonly label: "Agent Platform (Vertex AI)";
}];
export declare const AntigravityAuthMethod: Schema.Literals<("agent-platform" | "gemini-api-key" | "oauth-business" | "oauth-personal")[]>;
export type AntigravityAuthMethod = typeof AntigravityAuthMethod.Type;
export declare const AntigravitySettings: Schema.Struct<{
    readonly enabled: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly authMethod: Schema.withDecodingDefault<Schema.Literals<("agent-platform" | "gemini-api-key" | "oauth-business" | "oauth-personal")[]>, never>;
    readonly apiKey: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    readonly gcpProject: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    readonly gcpLocation: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    readonly binaryPath: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    readonly customModels: Schema.withDecodingDefault<Schema.$Array<Schema.Union<readonly [Schema.String, Schema.Struct<{
        readonly slug: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly capabilities: Schema.optional<Schema.Struct<{
            readonly optionDescriptors: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly type: Schema.Literal<"select">;
                readonly options: Schema.$Array<Schema.Struct<{
                    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                    readonly isDefault: Schema.optional<Schema.Boolean>;
                }>>;
                readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
            }>, Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly type: Schema.Literal<"boolean">;
                readonly currentValue: Schema.optional<Schema.Boolean>;
            }>]>>>;
        }>>;
    }>]>>, never>;
}>;
export type AntigravitySettings = typeof AntigravitySettings.Type;
export declare const UsageLimitSourceConfig: Schema.Struct<{
    readonly kind: Schema.Literal<"cliproxy">;
    readonly label: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly managementKey: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    readonly enabled: Schema.withDecodingDefault<Schema.Boolean, never>;
}>;
export type UsageLimitSourceConfig = typeof UsageLimitSourceConfig.Type;
export declare const SourceControlHostSettings: Schema.$Record<Schema.String, Schema.Unknown>;
export type SourceControlHostSettings = typeof SourceControlHostSettings.Type;
export declare const ObservabilitySettings: Schema.Struct<{
    readonly otlpTracesUrl: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    readonly otlpMetricsUrl: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    readonly otlpLogsUrl: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
}>;
export type ObservabilitySettings = typeof ObservabilitySettings.Type;
export declare const SourceControlWritingStyleMode: Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>;
export type SourceControlWritingStyleMode = typeof SourceControlWritingStyleMode.Type;
export declare const SourceControlWritingStyleSettings: Schema.Struct<{
    readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
    readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
}>;
export type SourceControlWritingStyleSettings = typeof SourceControlWritingStyleSettings.Type;
export declare const BranchNamingMode: Schema.Literals<readonly ["static", "semantic", "custom"]>;
export type BranchNamingMode = typeof BranchNamingMode.Type;
export interface BranchNamingOptions {
    mode: BranchNamingMode;
    prefix: string;
    instructions: string;
}
export declare const DEFAULT_AUTOMATIC_GIT_FETCH_INTERVAL: Duration.Duration;
export declare const DEFAULT_PROVIDER_HEALTH_REFRESH_INTERVAL: Duration.Duration;
export declare const BackgroundActivityProfile: Schema.Literals<readonly ["balanced", "performance", "battery-saver"]>;
export type BackgroundActivityProfile = typeof BackgroundActivityProfile.Type;
export declare const DEFAULT_BACKGROUND_ACTIVITY_PROFILE: BackgroundActivityProfile;
export declare const BackgroundActivityProfileSelection: Schema.Literals<readonly ["balanced", "performance", "battery-saver", "custom"]>;
export type BackgroundActivityProfileSelection = typeof BackgroundActivityProfileSelection.Type;
export declare const BackgroundActivityOverrides: Schema.Struct<{
    readonly automaticGitFetchInterval: Schema.optionalKey<Schema.DurationFromMillis>;
    readonly providerHealthRefreshInterval: Schema.optionalKey<Schema.DurationFromMillis>;
    readonly hostPowerMonitorActiveInterval: Schema.optionalKey<Schema.DurationFromMillis>;
    readonly hostPowerMonitorIdleInterval: Schema.optionalKey<Schema.DurationFromMillis>;
    readonly idleClientTtl: Schema.optionalKey<Schema.DurationFromMillis>;
    readonly pauseWhenHostLocked: Schema.optionalKey<Schema.Boolean>;
    readonly pauseWhenHostLowPower: Schema.optionalKey<Schema.Boolean>;
    readonly pauseWhenClientLowPower: Schema.optionalKey<Schema.Boolean>;
    readonly pauseWhenOnBattery: Schema.optionalKey<Schema.Boolean>;
}>;
export type BackgroundActivityOverrides = typeof BackgroundActivityOverrides.Type;
export declare const BackgroundActivitySettings: Schema.withDecodingDefault<Schema.Struct<{
    readonly schemaVersion: Schema.withDecodingDefault<Schema.Literal<1>, never>;
    readonly profile: Schema.withDecodingDefault<Schema.Literals<readonly ["balanced", "performance", "battery-saver", "custom"]>, never>;
    readonly baseProfile: Schema.optionalKey<Schema.Literals<readonly ["balanced", "performance", "battery-saver"]>>;
    readonly overrides: Schema.withDecodingDefault<Schema.Struct<{
        readonly automaticGitFetchInterval: Schema.optionalKey<Schema.DurationFromMillis>;
        readonly providerHealthRefreshInterval: Schema.optionalKey<Schema.DurationFromMillis>;
        readonly hostPowerMonitorActiveInterval: Schema.optionalKey<Schema.DurationFromMillis>;
        readonly hostPowerMonitorIdleInterval: Schema.optionalKey<Schema.DurationFromMillis>;
        readonly idleClientTtl: Schema.optionalKey<Schema.DurationFromMillis>;
        readonly pauseWhenHostLocked: Schema.optionalKey<Schema.Boolean>;
        readonly pauseWhenHostLowPower: Schema.optionalKey<Schema.Boolean>;
        readonly pauseWhenClientLowPower: Schema.optionalKey<Schema.Boolean>;
        readonly pauseWhenOnBattery: Schema.optionalKey<Schema.Boolean>;
    }>, never>;
}>, never>;
export type BackgroundActivitySettings = typeof BackgroundActivitySettings.Type;
export declare const ResponseStreamingMode: Schema.Literals<readonly ["turn", "paragraph"]>;
export type ResponseStreamingMode = typeof ResponseStreamingMode.Type;
export declare const WorktreeKeepWhen: Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>;
export type WorktreeKeepWhen = typeof WorktreeKeepWhen.Type;
export declare const WorktreeCleanupRules: Schema.Struct<{
    readonly worktreeKeepWhen: Schema.withDecodingDefault<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>, never>;
    readonly worktreeAfterDays: Schema.NullOr<Schema.Int>;
    readonly worktreeSettledAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
    readonly worktreeOnMerge: Schema.Boolean;
    readonly worktreeOnDelete: Schema.Boolean;
    readonly worktreeUnchanged: Schema.Boolean;
}>;
export type WorktreeCleanupRules = typeof WorktreeCleanupRules.Type;
export declare const WorktreeCleanup: Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
    readonly mode: Schema.Literal<"off">;
}>, Schema.Struct<{
    readonly mode: Schema.Literal<"custom">;
    readonly rules: Schema.Struct<{
        readonly worktreeKeepWhen: Schema.withDecodingDefault<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>, never>;
        readonly worktreeAfterDays: Schema.NullOr<Schema.Int>;
        readonly worktreeSettledAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
        readonly worktreeOnMerge: Schema.Boolean;
        readonly worktreeOnDelete: Schema.Boolean;
        readonly worktreeUnchanged: Schema.Boolean;
    }>;
}>]>>;
export type WorktreeCleanup = typeof WorktreeCleanup.Type;
export declare const PROJECT_SCOPED_SERVER_SETTING_KEYS: readonly ["worktreeCleanup", "defaultModelSelection", "defaultRuntimeMode", "defaultThreadEnvMode", "newWorktreesStartFromOrigin", "worktreeSubmodules", "defaultAutoPull", "defaultProjectScripts", "enableAgentBrowserAccess", "enableAgentDeviceAccess", "textGenerationModelSelection", "threadTitleInstructions", "sourceControlWriterModelSelection", "reviewGuideModelSelection", "reviewGuideInstructions", "sourceControlWritingStyle", "removeAgentCreditsOnMerge", "branchNamingMode", "branchNamePrefix", "branchNameInstructions", "pullRequestMergeMethod", "sidebarAutoSettleOnMerge", "sidebarAutoSettleAfterDays", "sidebarAutoSettleKeepPullRequests", "continueThreadsAfterServerUpdate", "responseStreamingMode"];
export type ProjectScopedServerSettingKey = (typeof PROJECT_SCOPED_SERVER_SETTING_KEYS)[number];
export declare const ProjectProviderInstanceOverride: Schema.Struct<{
    readonly enabled: Schema.optionalKey<Schema.Boolean>;
}>;
export type ProjectProviderInstanceOverride = typeof ProjectProviderInstanceOverride.Type;
/** Absent keys inherit; null is a value for nullable settings.
 * providerInstances overrides fields per instance; other keys replace the whole setting. */
export declare const ProjectSettingsOverrides: Schema.Struct<{
    worktreeCleanup: Schema.optionalKey<Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
        readonly mode: Schema.Literal<"off">;
    }>, Schema.Struct<{
        readonly mode: Schema.Literal<"custom">;
        readonly rules: Schema.Struct<{
            readonly worktreeKeepWhen: Schema.withDecodingDefault<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>, never>;
            readonly worktreeAfterDays: Schema.NullOr<Schema.Int>;
            readonly worktreeSettledAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
            readonly worktreeOnMerge: Schema.Boolean;
            readonly worktreeOnDelete: Schema.Boolean;
            readonly worktreeUnchanged: Schema.Boolean;
        }>;
    }>]>>>;
    defaultModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
        readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
    }>, Schema.Struct<{
        readonly provider: Schema.optional<Schema.Unknown>;
        readonly instanceId: Schema.optional<Schema.Unknown>;
        readonly model: Schema.Unknown;
        readonly options: Schema.optional<Schema.Unknown>;
    }>, never, never>>>;
    defaultRuntimeMode: Schema.optionalKey<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>>;
    defaultThreadEnvMode: Schema.optionalKey<Schema.Literals<readonly ["local", "worktree"]>>;
    newWorktreesStartFromOrigin: Schema.optionalKey<Schema.Boolean>;
    worktreeSubmodules: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Literals<readonly ["recursive", "top-level", "none"]>>, Schema.Unknown, never, never>>;
    defaultAutoPull: Schema.optionalKey<Schema.Boolean>;
    defaultProjectScripts: Schema.optionalKey<Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly icon: Schema.Literals<readonly ["play", "test", "lint", "configure", "build", "debug"]>;
        readonly runOnWorktreeCreate: Schema.Boolean;
        readonly runOnSettle: Schema.optional<Schema.Boolean>;
        readonly async: Schema.optional<Schema.Boolean>;
        readonly previewUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly autoOpenPreview: Schema.optional<Schema.Boolean>;
    }>>>;
    enableAgentBrowserAccess: Schema.optionalKey<Schema.Boolean>;
    enableAgentDeviceAccess: Schema.optionalKey<Schema.Boolean>;
    textGenerationModelSelection: Schema.optionalKey<Schema.decodeTo<Schema.Struct<{
        readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
    }>, Schema.Struct<{
        readonly provider: Schema.optional<Schema.Unknown>;
        readonly instanceId: Schema.optional<Schema.Unknown>;
        readonly model: Schema.Unknown;
        readonly options: Schema.optional<Schema.Unknown>;
    }>, never, never>>;
    threadTitleInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    sourceControlWriterModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
        readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
    }>, Schema.Struct<{
        readonly provider: Schema.optional<Schema.Unknown>;
        readonly instanceId: Schema.optional<Schema.Unknown>;
        readonly model: Schema.Unknown;
        readonly options: Schema.optional<Schema.Unknown>;
    }>, never, never>>>;
    reviewGuideModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
        readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
    }>, Schema.Struct<{
        readonly provider: Schema.optional<Schema.Unknown>;
        readonly instanceId: Schema.optional<Schema.Unknown>;
        readonly model: Schema.Unknown;
        readonly options: Schema.optional<Schema.Unknown>;
    }>, never, never>>>;
    reviewGuideInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    sourceControlWritingStyle: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
        readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
        readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
    }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
        readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
        readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
    }>>, Schema.decodeTo<Schema.String, Schema.String, never, never>, never, never>]>>;
    removeAgentCreditsOnMerge: Schema.optionalKey<Schema.Boolean>;
    branchNamingMode: Schema.optionalKey<Schema.Literals<readonly ["static", "semantic", "custom"]>>;
    branchNamePrefix: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    branchNameInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    pullRequestMergeMethod: Schema.optionalKey<Schema.NullOr<Schema.Literals<readonly ["merge", "squash", "rebase"]>>>;
    sidebarAutoSettleOnMerge: Schema.optionalKey<Schema.Boolean>;
    sidebarAutoSettleAfterDays: Schema.optionalKey<Schema.NullOr<Schema.Number>>;
    sidebarAutoSettleKeepPullRequests: Schema.optionalKey<Schema.Boolean>;
    continueThreadsAfterServerUpdate: Schema.optionalKey<Schema.Boolean>;
    responseStreamingMode: Schema.optionalKey<Schema.Literals<readonly ["turn", "paragraph"]>>;
    providerInstances: Schema.optionalKey<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
        readonly enabled: Schema.optionalKey<Schema.Boolean>;
    }>>>;
}>;
export type ProjectSettingsOverrides = typeof ProjectSettingsOverrides.Type;
/** True if null stores an override; otherwise null removes it. */
export declare function isNullableProjectSettingsOverride(key: ProjectScopedServerSettingKey): boolean;
/** Reclaimable bytes from which the offline `t3 doctor` repair is worth suggesting. */
export declare const DATABASE_COMPACTION_RECOMMENDED_BYTES: number;
export declare const DatabaseStorageStatus: Schema.Struct<{
    readonly databaseBytes: Schema.Number;
    /** Free pages inside the file that an offline VACUUM (or incremental auto_vacuum) returns to disk. */
    readonly reclaimableBytes: Schema.Number;
    /** False on databases created before incremental auto_vacuum; `t3 doctor` converts them. */
    readonly incrementalVacuumEnabled: Schema.Boolean;
    /** Run on the host while offline. */
    readonly compactCommand: Schema.String;
}>;
export type DatabaseStorageStatus = typeof DatabaseStorageStatus.Type;
export declare function shouldRecommendDatabaseCompaction(status: DatabaseStorageStatus): boolean;
export declare const StorageCleanupReportEntry: Schema.Struct<{
    readonly kind: Schema.Literals<readonly ["worktree", "browser-artifacts", "logs"]>;
    readonly outcome: Schema.Literals<readonly ["removed", "kept", "failed"]>;
    readonly reason: Schema.String;
    readonly path: Schema.NullOr<Schema.String>;
    readonly projectPath: Schema.withDecodingDefault<Schema.NullOr<Schema.String>, never>;
    readonly threadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
    readonly threadTitle: Schema.NullOr<Schema.String>;
    readonly bytes: Schema.withDecodingDefault<Schema.NullOr<Schema.Number>, never>;
    readonly files: Schema.withDecodingDefault<Schema.NullOr<Schema.Number>, never>;
}>;
export type StorageCleanupReportEntry = typeof StorageCleanupReportEntry.Type;
export declare const StorageCleanupReport: Schema.Struct<{
    readonly trigger: Schema.Literals<readonly ["automatic", "manual"]>;
    readonly startedAt: Schema.String;
    readonly finishedAt: Schema.String;
    readonly entries: Schema.$Array<Schema.Struct<{
        readonly kind: Schema.Literals<readonly ["worktree", "browser-artifacts", "logs"]>;
        readonly outcome: Schema.Literals<readonly ["removed", "kept", "failed"]>;
        readonly reason: Schema.String;
        readonly path: Schema.NullOr<Schema.String>;
        readonly projectPath: Schema.withDecodingDefault<Schema.NullOr<Schema.String>, never>;
        readonly threadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
        readonly threadTitle: Schema.NullOr<Schema.String>;
        readonly bytes: Schema.withDecodingDefault<Schema.NullOr<Schema.Number>, never>;
        readonly files: Schema.withDecodingDefault<Schema.NullOr<Schema.Number>, never>;
    }>>;
    readonly counts: Schema.Struct<{
        readonly removed: Schema.Number;
        readonly kept: Schema.Number;
        readonly failed: Schema.Number;
    }>;
    readonly omittedCount: Schema.Number;
    readonly bytesFreed: Schema.withDecodingDefault<Schema.Number, never>;
}>;
export type StorageCleanupReport = typeof StorageCleanupReport.Type;
export declare const StorageCleanupSettings: Schema.Struct<{
    readonly worktreeKeepWhen: Schema.withDecodingDefault<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>, never>;
    readonly worktreeAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
    readonly worktreeSettledAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
    readonly worktreeOnMerge: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly worktreeOnDelete: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly worktreeUnchanged: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly browserArtifactsAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
    readonly logsAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
}>;
export type StorageCleanupSettings = typeof StorageCleanupSettings.Type;
export declare const ServerSettings: Schema.Struct<{
    readonly favorites: Schema.withDecodingDefault<Schema.NullOr<Schema.$Array<Schema.Struct<{
        readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>>, never>;
    readonly providerModelPreferences: Schema.withDecodingDefault<Schema.NullOr<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
        readonly hiddenModels: Schema.withDecodingDefault<Schema.$Array<Schema.String>, never>;
        readonly modelOrder: Schema.withDecodingDefault<Schema.$Array<Schema.String>, never>;
    }>>>, never>;
    readonly worktreeCleanup: Schema.withDecodingDefault<Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
        readonly mode: Schema.Literal<"off">;
    }>, Schema.Struct<{
        readonly mode: Schema.Literal<"custom">;
        readonly rules: Schema.Struct<{
            readonly worktreeKeepWhen: Schema.withDecodingDefault<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>, never>;
            readonly worktreeAfterDays: Schema.NullOr<Schema.Int>;
            readonly worktreeSettledAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
            readonly worktreeOnMerge: Schema.Boolean;
            readonly worktreeOnDelete: Schema.Boolean;
            readonly worktreeUnchanged: Schema.Boolean;
        }>;
    }>]>>, never>;
    readonly storageCleanup: Schema.withDecodingDefault<Schema.Struct<{
        readonly worktreeKeepWhen: Schema.withDecodingDefault<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>, never>;
        readonly worktreeAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
        readonly worktreeSettledAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
        readonly worktreeOnMerge: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly worktreeOnDelete: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly worktreeUnchanged: Schema.withDecodingDefault<Schema.Boolean, never>;
        readonly browserArtifactsAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
        readonly logsAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
    }>, never>;
    readonly worktreesDirectory: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    /** Server-maintained history keeps old worktrees eligible for cleanup and review diffs. */
    readonly previousWorktreesDirectories: Schema.withDecodingDefault<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>, never>;
    readonly responseStreamingMode: Schema.withDecodingDefault<Schema.Literals<readonly ["turn", "paragraph"]>, never>;
    readonly enableProviderUpdateChecks: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly continueThreadsAfterServerUpdate: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly enableAgentBrowserAccess: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly projectAgentBrowserAccessOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.Boolean>, never>;
    readonly defaultAutoPull: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly defaultProjectScripts: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly icon: Schema.Literals<readonly ["play", "test", "lint", "configure", "build", "debug"]>;
        readonly runOnWorktreeCreate: Schema.Boolean;
        readonly runOnSettle: Schema.optional<Schema.Boolean>;
        readonly async: Schema.optional<Schema.Boolean>;
        readonly previewUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly autoOpenPreview: Schema.optional<Schema.Boolean>;
    }>>, never>;
    readonly projectScriptOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.NullOr<Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly icon: Schema.Literals<readonly ["play", "test", "lint", "configure", "build", "debug"]>;
        readonly runOnWorktreeCreate: Schema.Boolean;
        readonly runOnSettle: Schema.optional<Schema.Boolean>;
        readonly async: Schema.optional<Schema.Boolean>;
        readonly previewUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly autoOpenPreview: Schema.optional<Schema.Boolean>;
    }>>>>, never>;
    readonly projectAutoPullOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.Boolean>, never>;
    readonly defaultModelSelection: Schema.withDecodingDefault<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
        readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
    }>, Schema.Struct<{
        readonly provider: Schema.optional<Schema.Unknown>;
        readonly instanceId: Schema.optional<Schema.Unknown>;
        readonly model: Schema.Unknown;
        readonly options: Schema.optional<Schema.Unknown>;
    }>, never, never>>, never>;
    readonly defaultRuntimeMode: Schema.withDecodingDefault<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>, never>;
    readonly projectSettingsOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.Struct<{
        worktreeCleanup: Schema.optionalKey<Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
            readonly mode: Schema.Literal<"off">;
        }>, Schema.Struct<{
            readonly mode: Schema.Literal<"custom">;
            readonly rules: Schema.Struct<{
                readonly worktreeKeepWhen: Schema.withDecodingDefault<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>, never>;
                readonly worktreeAfterDays: Schema.NullOr<Schema.Int>;
                readonly worktreeSettledAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
                readonly worktreeOnMerge: Schema.Boolean;
                readonly worktreeOnDelete: Schema.Boolean;
                readonly worktreeUnchanged: Schema.Boolean;
            }>;
        }>]>>>;
        defaultModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
            readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
            readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
            }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
            }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
        }>, Schema.Struct<{
            readonly provider: Schema.optional<Schema.Unknown>;
            readonly instanceId: Schema.optional<Schema.Unknown>;
            readonly model: Schema.Unknown;
            readonly options: Schema.optional<Schema.Unknown>;
        }>, never, never>>>;
        defaultRuntimeMode: Schema.optionalKey<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>>;
        defaultThreadEnvMode: Schema.optionalKey<Schema.Literals<readonly ["local", "worktree"]>>;
        newWorktreesStartFromOrigin: Schema.optionalKey<Schema.Boolean>;
        worktreeSubmodules: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Literals<readonly ["recursive", "top-level", "none"]>>, Schema.Unknown, never, never>>;
        defaultAutoPull: Schema.optionalKey<Schema.Boolean>;
        defaultProjectScripts: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly icon: Schema.Literals<readonly ["play", "test", "lint", "configure", "build", "debug"]>;
            readonly runOnWorktreeCreate: Schema.Boolean;
            readonly runOnSettle: Schema.optional<Schema.Boolean>;
            readonly async: Schema.optional<Schema.Boolean>;
            readonly previewUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly autoOpenPreview: Schema.optional<Schema.Boolean>;
        }>>>;
        enableAgentBrowserAccess: Schema.optionalKey<Schema.Boolean>;
        enableAgentDeviceAccess: Schema.optionalKey<Schema.Boolean>;
        textGenerationModelSelection: Schema.optionalKey<Schema.decodeTo<Schema.Struct<{
            readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
            readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
            }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
            }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
        }>, Schema.Struct<{
            readonly provider: Schema.optional<Schema.Unknown>;
            readonly instanceId: Schema.optional<Schema.Unknown>;
            readonly model: Schema.Unknown;
            readonly options: Schema.optional<Schema.Unknown>;
        }>, never, never>>;
        threadTitleInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        sourceControlWriterModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
            readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
            readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
            }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
            }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
        }>, Schema.Struct<{
            readonly provider: Schema.optional<Schema.Unknown>;
            readonly instanceId: Schema.optional<Schema.Unknown>;
            readonly model: Schema.Unknown;
            readonly options: Schema.optional<Schema.Unknown>;
        }>, never, never>>>;
        reviewGuideModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
            readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
            readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
            }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
            }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
        }>, Schema.Struct<{
            readonly provider: Schema.optional<Schema.Unknown>;
            readonly instanceId: Schema.optional<Schema.Unknown>;
            readonly model: Schema.Unknown;
            readonly options: Schema.optional<Schema.Unknown>;
        }>, never, never>>>;
        reviewGuideInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        sourceControlWritingStyle: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
            readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
            readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
        }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
            readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
            readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
        }>>, Schema.decodeTo<Schema.String, Schema.String, never, never>, never, never>]>>;
        removeAgentCreditsOnMerge: Schema.optionalKey<Schema.Boolean>;
        branchNamingMode: Schema.optionalKey<Schema.Literals<readonly ["static", "semantic", "custom"]>>;
        branchNamePrefix: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        branchNameInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        pullRequestMergeMethod: Schema.optionalKey<Schema.NullOr<Schema.Literals<readonly ["merge", "squash", "rebase"]>>>;
        sidebarAutoSettleOnMerge: Schema.optionalKey<Schema.Boolean>;
        sidebarAutoSettleAfterDays: Schema.optionalKey<Schema.NullOr<Schema.Number>>;
        sidebarAutoSettleKeepPullRequests: Schema.optionalKey<Schema.Boolean>;
        continueThreadsAfterServerUpdate: Schema.optionalKey<Schema.Boolean>;
        responseStreamingMode: Schema.optionalKey<Schema.Literals<readonly ["turn", "paragraph"]>>;
        providerInstances: Schema.optionalKey<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
            readonly enabled: Schema.optionalKey<Schema.Boolean>;
        }>>>;
    }>>, never>;
    /** Fold once so restarts cannot undo later UI resets. */
    readonly projectSettingsFolded: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly enableAgentDeviceAccess: Schema.withDecodingDefault<Schema.Boolean, never>;
    /** Enabling the Device panel must not grant providers device control. */
    readonly enableDeviceSupport: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly deviceOnboardingCompleted: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly deviceHosts: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
        readonly kind: Schema.withDecodingDefaultKey<Schema.Literal<"ssh">, never>;
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly target: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly identityFile: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly port: Schema.optional<Schema.Int>;
    }>>, never>;
    readonly easDeviceHosts: Schema.withDecodingDefault<Schema.$Array<Schema.Struct<{
        readonly kind: Schema.Literal<"eas">;
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly appId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly accessToken: Schema.withDecodingDefaultKey<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly maxSessionMinutes: Schema.withDecodingDefaultKey<Schema.Int, never>;
        readonly idleMinutes: Schema.withDecodingDefaultKey<Schema.Int, never>;
        readonly maxConcurrentSessions: Schema.withDecodingDefaultKey<Schema.Int, never>;
    }>>, never>;
    readonly sidebarAutoSettleAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Number>, never>;
    readonly compactIdleThreads: Schema.withDecodingDefault<Schema.Union<readonly [Schema.Boolean, Schema.Literals<("beforeCacheExpires" | "off" | "onReturn")[]>]>, never>;
    readonly idleCompaction: Schema.optionalKey<Schema.Literals<("beforeCacheExpires" | "off" | "onReturn")[]>>;
    readonly snoozeLimitedThreads: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly autoResumeLimitedThreads: Schema.withDecodingDefault<Schema.Boolean, never>;
    /** Beta: guest links for this machine's threads. Off refuses new links and pauses existing ones. */
    readonly guestSharingEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
    /**
     * Beta: links to the user's other machines, both ways. Off refuses new links, calls over links
     * and tasks on another machine; tasks already running there finish.
     */
    readonly linkedEnvironmentsEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly sidebarAutoSettleKeepPullRequests: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly sidebarAutoSettleOnMerge: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly backgroundActivity: Schema.withDecodingDefault<Schema.Struct<{
        readonly schemaVersion: Schema.withDecodingDefault<Schema.Literal<1>, never>;
        readonly profile: Schema.withDecodingDefault<Schema.Literals<readonly ["balanced", "performance", "battery-saver", "custom"]>, never>;
        readonly baseProfile: Schema.optionalKey<Schema.Literals<readonly ["balanced", "performance", "battery-saver"]>>;
        readonly overrides: Schema.withDecodingDefault<Schema.Struct<{
            readonly automaticGitFetchInterval: Schema.optionalKey<Schema.DurationFromMillis>;
            readonly providerHealthRefreshInterval: Schema.optionalKey<Schema.DurationFromMillis>;
            readonly hostPowerMonitorActiveInterval: Schema.optionalKey<Schema.DurationFromMillis>;
            readonly hostPowerMonitorIdleInterval: Schema.optionalKey<Schema.DurationFromMillis>;
            readonly idleClientTtl: Schema.optionalKey<Schema.DurationFromMillis>;
            readonly pauseWhenHostLocked: Schema.optionalKey<Schema.Boolean>;
            readonly pauseWhenHostLowPower: Schema.optionalKey<Schema.Boolean>;
            readonly pauseWhenClientLowPower: Schema.optionalKey<Schema.Boolean>;
            readonly pauseWhenOnBattery: Schema.optionalKey<Schema.Boolean>;
        }>, never>;
    }>, never>;
    readonly automaticGitFetchInterval: Schema.withDecodingDefault<Schema.DurationFromMillis, never>;
    readonly providerHealthRefreshInterval: Schema.withDecodingDefault<Schema.DurationFromMillis, never>;
    readonly backgroundActivityProfile: Schema.withDecodingDefault<Schema.Literals<readonly ["balanced", "performance", "battery-saver"]>, never>;
    readonly defaultTheme: Schema.withDecodingDefault<Schema.String, never>;
    /** Distinguishes repeated sets of the same theme so clients apply each one. */
    readonly defaultThemeSetAt: Schema.withDecodingDefault<Schema.String, never>;
    readonly environmentIcon: Schema.withDecodingDefault<Schema.decodeTo<Schema.NullOr<Schema.Literals<readonly ["server", "cloud", "linux", "desktop", "laptop", "mac-mini", "mac-studio"]>>, Schema.Unknown, never, never>, never>;
    /** Null inherits t3.json, then local; omit it on the wire for older clients requiring a literal. */
    readonly defaultThreadEnvMode: Schema.decodeTo<Schema.NullOr<Schema.Literals<readonly ["local", "worktree"]>>, Schema.optionalKey<Schema.Unknown>, never, never>;
    readonly newWorktreesStartFromOrigin: Schema.withDecodingDefault<Schema.Boolean, never>;
    /** Null inherits t3.json, then recursive; unknown values decode to null for older clients. */
    readonly worktreeSubmodules: Schema.withDecodingDefault<Schema.decodeTo<Schema.NullOr<Schema.Literals<readonly ["recursive", "top-level", "none"]>>, Schema.Unknown, never, never>, never>;
    readonly addProjectBaseDirectory: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    readonly textGenerationModelSelection: Schema.withDecodingDefault<Schema.decodeTo<Schema.Struct<{
        readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
    }>, Schema.Struct<{
        readonly provider: Schema.optional<Schema.Unknown>;
        readonly instanceId: Schema.optional<Schema.Unknown>;
        readonly model: Schema.Unknown;
        readonly options: Schema.optional<Schema.Unknown>;
    }>, never, never>, never>;
    readonly threadTitleInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    readonly branchNamingMode: Schema.withDecodingDefault<Schema.Literals<readonly ["static", "semantic", "custom"]>, never>;
    readonly branchNamePrefix: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    readonly branchNameInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    readonly removeAgentCreditsOnMerge: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly sourceControlWritingStyle: Schema.withDecodingDefault<Schema.Union<readonly [Schema.Struct<{
        readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
        readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
    }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
        readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
        readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
    }>>, Schema.decodeTo<Schema.String, Schema.String, never, never>, never, never>]>, never>;
    readonly sourceControlWriterModelSelection: Schema.withDecodingDefault<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
        readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
    }>, Schema.Struct<{
        readonly provider: Schema.optional<Schema.Unknown>;
        readonly instanceId: Schema.optional<Schema.Unknown>;
        readonly model: Schema.Unknown;
        readonly options: Schema.optional<Schema.Unknown>;
    }>, never, never>>, never>;
    readonly reviewGuidesEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly reviewGuideModelSelection: Schema.withDecodingDefault<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
        readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
    }>, Schema.Struct<{
        readonly provider: Schema.optional<Schema.Unknown>;
        readonly instanceId: Schema.optional<Schema.Unknown>;
        readonly model: Schema.Unknown;
        readonly options: Schema.optional<Schema.Unknown>;
    }>, never, never>>, never>;
    readonly reviewGuideInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    readonly pullRequestMergeMethod: Schema.withDecodingDefault<Schema.NullOr<Schema.Literals<readonly ["merge", "squash", "rebase"]>>, never>;
    readonly providerInstances: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
        readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
        readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly accentColor: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly environment: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.withDecodingDefault<Schema.String, never>;
            readonly sensitive: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly valueRedacted: Schema.optionalKey<Schema.Boolean>;
        }>>>;
        readonly enabled: Schema.optionalKey<Schema.Boolean>;
        readonly config: Schema.optionalKey<Schema.Unknown>;
    }>>, never>;
    readonly observability: Schema.withDecodingDefault<Schema.Struct<{
        readonly otlpTracesUrl: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly otlpMetricsUrl: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly otlpLogsUrl: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
    }>, never>;
    readonly sourceControlHosts: Schema.withDecodingDefault<Schema.$Record<Schema.String, Schema.$Record<Schema.String, Schema.Unknown>>, never>;
    readonly usageLimitSources: Schema.withDecodingDefault<Schema.$Record<Schema.brand<Schema.String, "UsageLimitSourceId">, Schema.Struct<{
        readonly kind: Schema.Literal<"cliproxy">;
        readonly label: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly managementKey: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly enabled: Schema.withDecodingDefault<Schema.Boolean, never>;
    }>>, never>;
    readonly cursorKeychainUsageEnabled: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly usagePriceOverrides: Schema.withDecodingDefault<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Struct<{
        readonly inputCostPerMillionTokens: Schema.Number;
        readonly outputCostPerMillionTokens: Schema.Number;
        readonly cacheReadCostPerMillionTokens: Schema.optionalKey<Schema.Number>;
        readonly cacheWriteCostPerMillionTokens: Schema.optionalKey<Schema.Number>;
    }>>, never>;
    readonly usageModelAliases: Schema.withDecodingDefault<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.decodeTo<Schema.String, Schema.String, never, never>>, never>;
}>;
export type ServerSettings = typeof ServerSettings.Type;
export declare const DEFAULT_SERVER_SETTINGS: ServerSettings;
export declare const providerInstanceConfigEnabledFlag: (config: unknown) => boolean | undefined;
export declare const isUnconfiguredDefaultInstanceEnabled: (instanceId: ProviderInstanceId) => boolean;
export declare const resolveProviderInstanceEnabled: (instance: Pick<ProviderInstanceConfig, "driver" | "enabled" | "config">) => boolean;
export declare const resolveProjectProviderInstanceEnabled: (settings: Pick<ServerSettings, "providerInstances" | "projectSettingsOverrides">, projectId: ProjectId | null, instanceId: ProviderInstanceId) => boolean;
type IdleCompactionSettings = Pick<ServerSettings, "compactIdleThreads" | "idleCompaction">;
/** The environment-wide idle compaction mode, from whichever field the settings carry. */
export declare const globalIdleCompaction: (settings: IdleCompactionSettings) => IdleCompactionMode;
/** Sets the mode, and the legacy switch shipped clients still read alongside it. */
export declare const withIdleCompaction: <S extends IdleCompactionSettings>(settings: S, mode: IdleCompactionMode) => S;
/** Whether a server reads modes, rather than only the boolean switch from before them. */
export declare const readsIdleCompactionModes: (settings: IdleCompactionSettings) => boolean;
/**
 * The patch that sets `mode` in the form the server's settings show it reads:
 * the mode for a server that has `idleCompaction` or kept the mode in the legacy
 * field, the boolean switch for a server from before modes.
 */
export declare const idleCompactionPatch: (settings: IdleCompactionSettings, mode: IdleCompactionMode) => {
    idleCompaction: "beforeCacheExpires" | "off" | "onReturn";
    compactIdleThreads?: never;
} | {
    idleCompaction?: never;
    compactIdleThreads: "beforeCacheExpires" | "off" | "onReturn";
} | {
    idleCompaction?: never;
    compactIdleThreads: boolean;
};
export declare const resolveIdleCompaction: (settings: Pick<ServerSettings, "providerInstances" | "compactIdleThreads" | "idleCompaction">, instanceId: ProviderInstanceId) => IdleCompactionMode;
export declare const ServerSettingsOperation: Schema.Literals<readonly ["normalize", "check-exists", "create-provider-instance", "read-file", "read-provider-history", "read-project-settings", "read-secret", "remove-secret", "remove-stale-secret", "write-secret", "write-file", "prepare-directory"]>;
export type ServerSettingsOperation = typeof ServerSettingsOperation.Type;
declare const ServerSettingsError_base: Schema.Class<ServerSettingsError, Schema.TaggedStruct<"ServerSettingsError", {
    readonly settingsPath: Schema.String;
    readonly operation: Schema.Literals<readonly ["normalize", "check-exists", "create-provider-instance", "read-file", "read-provider-history", "read-project-settings", "read-secret", "remove-secret", "remove-stale-secret", "write-secret", "write-file", "prepare-directory"]>;
    readonly providerInstanceId: Schema.optional<Schema.String>;
    readonly environmentVariable: Schema.optional<Schema.String>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ServerSettingsError extends ServerSettingsError_base {
    get message(): string;
}
export type UnifiedSettings = Omit<ServerSettings, keyof ModelPreferences> & ClientSettings;
export declare const DEFAULT_UNIFIED_SETTINGS: UnifiedSettings;
export declare const ServerSettingsPatch: Schema.Struct<{
    readonly setModelFavorites: Schema.optionalKey<Schema.$Array<Schema.Struct<{
        readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly favorite: Schema.Boolean;
    }>>>;
    readonly setModelsHidden: Schema.optionalKey<Schema.$Array<Schema.Struct<{
        readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly hidden: Schema.Boolean;
    }>>>;
    readonly setProviderModelOrder: Schema.optionalKey<Schema.Struct<{
        readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly modelOrder: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly favorites: Schema.optionalKey<Schema.$Array<Schema.Struct<{
        readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>>;
    readonly providerModelPreferences: Schema.optionalKey<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
        readonly hiddenModels: Schema.withDecodingDefault<Schema.$Array<Schema.String>, never>;
        readonly modelOrder: Schema.withDecodingDefault<Schema.$Array<Schema.String>, never>;
    }>>>;
    readonly migrateModelPreferences: Schema.optionalKey<Schema.Struct<{
        readonly favorites: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
            readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>>;
        readonly providerModelPreferences: Schema.optionalKey<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
            readonly hiddenModels: Schema.withDecodingDefault<Schema.$Array<Schema.String>, never>;
            readonly modelOrder: Schema.withDecodingDefault<Schema.$Array<Schema.String>, never>;
        }>>>;
    }>>;
    readonly worktreeCleanup: Schema.optionalKey<Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
        readonly mode: Schema.Literal<"off">;
    }>, Schema.Struct<{
        readonly mode: Schema.Literal<"custom">;
        readonly rules: Schema.Struct<{
            readonly worktreeKeepWhen: Schema.optionalKey<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>>;
            readonly worktreeAfterDays: Schema.optionalKey<Schema.NullOr<Schema.Int>>;
            readonly worktreeSettledAfterDays: Schema.optionalKey<Schema.NullOr<Schema.Int>>;
            readonly worktreeOnMerge: Schema.optionalKey<Schema.Boolean>;
            readonly worktreeOnDelete: Schema.optionalKey<Schema.Boolean>;
            readonly worktreeUnchanged: Schema.optionalKey<Schema.Boolean>;
        }>;
    }>]>>>;
    readonly storageCleanup: Schema.optionalKey<Schema.Struct<{
        readonly worktreeKeepWhen: Schema.optionalKey<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>>;
        readonly worktreeAfterDays: Schema.optionalKey<Schema.NullOr<Schema.Int>>;
        readonly worktreeSettledAfterDays: Schema.optionalKey<Schema.NullOr<Schema.Int>>;
        readonly worktreeOnMerge: Schema.optionalKey<Schema.Boolean>;
        readonly worktreeOnDelete: Schema.optionalKey<Schema.Boolean>;
        readonly worktreeUnchanged: Schema.optionalKey<Schema.Boolean>;
        readonly browserArtifactsAfterDays: Schema.optionalKey<Schema.NullOr<Schema.Int>>;
        readonly logsAfterDays: Schema.optionalKey<Schema.NullOr<Schema.Int>>;
    }>>;
    readonly worktreesDirectory: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly responseStreamingMode: Schema.optionalKey<Schema.Literals<readonly ["turn", "paragraph"]>>;
    readonly enableProviderUpdateChecks: Schema.optionalKey<Schema.Boolean>;
    readonly continueThreadsAfterServerUpdate: Schema.optionalKey<Schema.Boolean>;
    readonly enableAgentBrowserAccess: Schema.optionalKey<Schema.Boolean>;
    readonly projectAgentBrowserAccessOverrides: Schema.optionalKey<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.NullOr<Schema.Boolean>>>;
    readonly defaultAutoPull: Schema.optionalKey<Schema.Boolean>;
    readonly defaultProjectScripts: Schema.optionalKey<Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly icon: Schema.Literals<readonly ["play", "test", "lint", "configure", "build", "debug"]>;
        readonly runOnWorktreeCreate: Schema.Boolean;
        readonly runOnSettle: Schema.optional<Schema.Boolean>;
        readonly async: Schema.optional<Schema.Boolean>;
        readonly previewUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly autoOpenPreview: Schema.optional<Schema.Boolean>;
    }>>>;
    readonly projectScriptOverrides: Schema.optionalKey<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.NullOr<Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly icon: Schema.Literals<readonly ["play", "test", "lint", "configure", "build", "debug"]>;
        readonly runOnWorktreeCreate: Schema.Boolean;
        readonly runOnSettle: Schema.optional<Schema.Boolean>;
        readonly async: Schema.optional<Schema.Boolean>;
        readonly previewUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly autoOpenPreview: Schema.optional<Schema.Boolean>;
    }>>>>>;
    readonly projectAutoPullOverrides: Schema.optionalKey<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.NullOr<Schema.Boolean>>>;
    readonly defaultModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
        readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
    }>, Schema.Struct<{
        readonly provider: Schema.optional<Schema.Unknown>;
        readonly instanceId: Schema.optional<Schema.Unknown>;
        readonly model: Schema.Unknown;
        readonly options: Schema.optional<Schema.Unknown>;
    }>, never, never>>>;
    readonly defaultRuntimeMode: Schema.optionalKey<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>>;
    /** Replaces each project's override set; null removes it. Omitted providerInstances retains its stored value. */
    readonly projectSettingsOverrides: Schema.optionalKey<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">, Schema.NullOr<Schema.Struct<{
        readonly worktreeCleanup: Schema.optionalKey<Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
            readonly mode: Schema.Literal<"off">;
        }>, Schema.Struct<{
            readonly mode: Schema.Literal<"custom">;
            readonly rules: Schema.Struct<{
                readonly worktreeKeepWhen: Schema.withDecodingDefault<Schema.Literals<readonly ["any-local-files", "uncommitted-changes", "tracked-changes"]>, never>;
                readonly worktreeAfterDays: Schema.NullOr<Schema.Int>;
                readonly worktreeSettledAfterDays: Schema.withDecodingDefault<Schema.NullOr<Schema.Int>, never>;
                readonly worktreeOnMerge: Schema.Boolean;
                readonly worktreeOnDelete: Schema.Boolean;
                readonly worktreeUnchanged: Schema.Boolean;
            }>;
        }>]>>>;
        readonly defaultModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
            readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
            readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
            }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
            }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
        }>, Schema.Struct<{
            readonly provider: Schema.optional<Schema.Unknown>;
            readonly instanceId: Schema.optional<Schema.Unknown>;
            readonly model: Schema.Unknown;
            readonly options: Schema.optional<Schema.Unknown>;
        }>, never, never>>>;
        readonly defaultRuntimeMode: Schema.optionalKey<Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>>;
        readonly defaultThreadEnvMode: Schema.optionalKey<Schema.Literals<readonly ["local", "worktree"]>>;
        readonly newWorktreesStartFromOrigin: Schema.optionalKey<Schema.Boolean>;
        readonly worktreeSubmodules: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Literals<readonly ["recursive", "top-level", "none"]>>, Schema.Unknown, never, never>>;
        readonly defaultAutoPull: Schema.optionalKey<Schema.Boolean>;
        readonly defaultProjectScripts: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly command: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly icon: Schema.Literals<readonly ["play", "test", "lint", "configure", "build", "debug"]>;
            readonly runOnWorktreeCreate: Schema.Boolean;
            readonly runOnSettle: Schema.optional<Schema.Boolean>;
            readonly async: Schema.optional<Schema.Boolean>;
            readonly previewUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly autoOpenPreview: Schema.optional<Schema.Boolean>;
        }>>>;
        readonly enableAgentBrowserAccess: Schema.optionalKey<Schema.Boolean>;
        readonly enableAgentDeviceAccess: Schema.optionalKey<Schema.Boolean>;
        readonly textGenerationModelSelection: Schema.optionalKey<Schema.decodeTo<Schema.Struct<{
            readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
            readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
            }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
            }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
        }>, Schema.Struct<{
            readonly provider: Schema.optional<Schema.Unknown>;
            readonly instanceId: Schema.optional<Schema.Unknown>;
            readonly model: Schema.Unknown;
            readonly options: Schema.optional<Schema.Unknown>;
        }>, never, never>>;
        readonly threadTitleInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly sourceControlWriterModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
            readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
            readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
            }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
            }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
        }>, Schema.Struct<{
            readonly provider: Schema.optional<Schema.Unknown>;
            readonly instanceId: Schema.optional<Schema.Unknown>;
            readonly model: Schema.Unknown;
            readonly options: Schema.optional<Schema.Unknown>;
        }>, never, never>>>;
        readonly reviewGuideModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
            readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
            readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
            }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
            }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
        }>, Schema.Struct<{
            readonly provider: Schema.optional<Schema.Unknown>;
            readonly instanceId: Schema.optional<Schema.Unknown>;
            readonly model: Schema.Unknown;
            readonly options: Schema.optional<Schema.Unknown>;
        }>, never, never>>>;
        readonly reviewGuideInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly removeAgentCreditsOnMerge: Schema.optionalKey<Schema.Boolean>;
        readonly branchNamingMode: Schema.optionalKey<Schema.Literals<readonly ["static", "semantic", "custom"]>>;
        readonly branchNamePrefix: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly branchNameInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly pullRequestMergeMethod: Schema.optionalKey<Schema.NullOr<Schema.Literals<readonly ["merge", "squash", "rebase"]>>>;
        readonly sidebarAutoSettleOnMerge: Schema.optionalKey<Schema.Boolean>;
        readonly sidebarAutoSettleAfterDays: Schema.optionalKey<Schema.NullOr<Schema.Number>>;
        readonly sidebarAutoSettleKeepPullRequests: Schema.optionalKey<Schema.Boolean>;
        readonly continueThreadsAfterServerUpdate: Schema.optionalKey<Schema.Boolean>;
        readonly responseStreamingMode: Schema.optionalKey<Schema.Literals<readonly ["turn", "paragraph"]>>;
        readonly providerInstances: Schema.optionalKey<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
            readonly enabled: Schema.optionalKey<Schema.Boolean>;
        }>>>;
        readonly sourceControlWritingStyle: Schema.optionalKey<Schema.Struct<{
            readonly mode: Schema.withDecodingDefault<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>, never>;
            readonly customInstructions: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
            readonly followChangeRequestTemplates: Schema.withDecodingDefault<Schema.Boolean, never>;
        }>>;
    }>>>>;
    readonly enableAgentDeviceAccess: Schema.optionalKey<Schema.Boolean>;
    readonly enableDeviceSupport: Schema.optionalKey<Schema.Boolean>;
    readonly deviceOnboardingCompleted: Schema.optionalKey<Schema.Boolean>;
    readonly deviceHosts: Schema.optionalKey<Schema.$Array<Schema.Struct<{
        readonly kind: Schema.withDecodingDefaultKey<Schema.Literal<"ssh">, never>;
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly target: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly identityFile: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly port: Schema.optional<Schema.Int>;
    }>>>;
    readonly easDeviceHosts: Schema.optionalKey<Schema.$Array<Schema.Struct<{
        readonly kind: Schema.Literal<"eas">;
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly appId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly accessToken: Schema.withDecodingDefaultKey<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly maxSessionMinutes: Schema.withDecodingDefaultKey<Schema.Int, never>;
        readonly idleMinutes: Schema.withDecodingDefaultKey<Schema.Int, never>;
        readonly maxConcurrentSessions: Schema.withDecodingDefaultKey<Schema.Int, never>;
    }>>>;
    readonly sidebarAutoSettleAfterDays: Schema.optionalKey<Schema.NullOr<Schema.Number>>;
    readonly compactIdleThreads: Schema.optionalKey<Schema.Union<readonly [Schema.Boolean, Schema.Literals<("beforeCacheExpires" | "off" | "onReturn")[]>]>>;
    readonly idleCompaction: Schema.optionalKey<Schema.Literals<("beforeCacheExpires" | "off" | "onReturn")[]>>;
    readonly sidebarAutoSettleKeepPullRequests: Schema.optionalKey<Schema.Boolean>;
    readonly sidebarAutoSettleOnMerge: Schema.optionalKey<Schema.Boolean>;
    readonly autoResumeLimitedThreads: Schema.optionalKey<Schema.Boolean>;
    readonly snoozeLimitedThreads: Schema.optionalKey<Schema.Boolean>;
    readonly guestSharingEnabled: Schema.optionalKey<Schema.Boolean>;
    readonly linkedEnvironmentsEnabled: Schema.optionalKey<Schema.Boolean>;
    readonly backgroundActivity: Schema.optionalKey<Schema.Struct<{
        readonly schemaVersion: Schema.optionalKey<Schema.Literal<1>>;
        readonly profile: Schema.optionalKey<Schema.Literals<readonly ["balanced", "performance", "battery-saver", "custom"]>>;
        readonly baseProfile: Schema.optionalKey<Schema.Literals<readonly ["balanced", "performance", "battery-saver"]>>;
        readonly overrides: Schema.optionalKey<Schema.Struct<{
            readonly automaticGitFetchInterval: Schema.optionalKey<Schema.DurationFromMillis>;
            readonly providerHealthRefreshInterval: Schema.optionalKey<Schema.DurationFromMillis>;
            readonly hostPowerMonitorActiveInterval: Schema.optionalKey<Schema.DurationFromMillis>;
            readonly hostPowerMonitorIdleInterval: Schema.optionalKey<Schema.DurationFromMillis>;
            readonly idleClientTtl: Schema.optionalKey<Schema.DurationFromMillis>;
            readonly pauseWhenHostLocked: Schema.optionalKey<Schema.Boolean>;
            readonly pauseWhenHostLowPower: Schema.optionalKey<Schema.Boolean>;
            readonly pauseWhenClientLowPower: Schema.optionalKey<Schema.Boolean>;
            readonly pauseWhenOnBattery: Schema.optionalKey<Schema.Boolean>;
        }>>;
    }>>;
    readonly automaticGitFetchInterval: Schema.optionalKey<Schema.DurationFromMillis>;
    readonly providerHealthRefreshInterval: Schema.optionalKey<Schema.DurationFromMillis>;
    readonly backgroundActivityProfile: Schema.optionalKey<Schema.Literals<readonly ["balanced", "performance", "battery-saver"]>>;
    readonly environmentIcon: Schema.optionalKey<Schema.NullOr<Schema.Literals<readonly ["server", "cloud", "linux", "desktop", "laptop", "mac-mini", "mac-studio"]>>>;
    readonly defaultThreadEnvMode: Schema.optionalKey<Schema.NullOr<Schema.Literals<readonly ["local", "worktree"]>>>;
    readonly newWorktreesStartFromOrigin: Schema.optionalKey<Schema.Boolean>;
    readonly worktreeSubmodules: Schema.optionalKey<Schema.NullOr<Schema.Literals<readonly ["recursive", "top-level", "none"]>>>;
    readonly addProjectBaseDirectory: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly textGenerationModelSelection: Schema.optionalKey<Schema.Struct<{
        readonly instanceId: Schema.optionalKey<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">>;
        readonly model: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
    }>>;
    readonly threadTitleInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly branchNamingMode: Schema.optionalKey<Schema.Literals<readonly ["static", "semantic", "custom"]>>;
    readonly branchNamePrefix: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly branchNameInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly removeAgentCreditsOnMerge: Schema.optionalKey<Schema.Boolean>;
    readonly sourceControlWritingStyle: Schema.optionalKey<Schema.Struct<{
        readonly mode: Schema.optionalKey<Schema.Literals<readonly ["repo_conventions", "conventional_commits", "custom"]>>;
        readonly customInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly followChangeRequestTemplates: Schema.optionalKey<Schema.Boolean>;
    }>>;
    readonly sourceControlWriterModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
        readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
    }>, Schema.Struct<{
        readonly provider: Schema.optional<Schema.Unknown>;
        readonly instanceId: Schema.optional<Schema.Unknown>;
        readonly model: Schema.Unknown;
        readonly options: Schema.optional<Schema.Unknown>;
    }>, never, never>>>;
    readonly reviewGuidesEnabled: Schema.optionalKey<Schema.Boolean>;
    readonly reviewGuideModelSelection: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.Struct<{
        readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
        }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
    }>, Schema.Struct<{
        readonly provider: Schema.optional<Schema.Unknown>;
        readonly instanceId: Schema.optional<Schema.Unknown>;
        readonly model: Schema.Unknown;
        readonly options: Schema.optional<Schema.Unknown>;
    }>, never, never>>>;
    readonly reviewGuideInstructions: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly pullRequestMergeMethod: Schema.optionalKey<Schema.NullOr<Schema.Literals<readonly ["merge", "squash", "rebase"]>>>;
    readonly observability: Schema.optionalKey<Schema.Struct<{
        readonly otlpTracesUrl: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly otlpMetricsUrl: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly otlpLogsUrl: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    /** Merges per host, replacing patched fields whole; redaction markers retain secrets, empty or omitted secrets remove them. */
    readonly sourceControlHosts: Schema.optionalKey<Schema.$Record<Schema.String, Schema.$Record<Schema.String, Schema.Unknown>>>;
    readonly providerInstances: Schema.optionalKey<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
        readonly driver: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderDriverKind">;
        readonly displayName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly accentColor: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly environment: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly value: Schema.withDecodingDefault<Schema.String, never>;
            readonly sensitive: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly valueRedacted: Schema.optionalKey<Schema.Boolean>;
        }>>>;
        readonly enabled: Schema.optionalKey<Schema.Boolean>;
        readonly config: Schema.optionalKey<Schema.Unknown>;
    }>>>;
    readonly usageLimitSources: Schema.optionalKey<Schema.$Record<Schema.brand<Schema.String, "UsageLimitSourceId">, Schema.NullOr<Schema.Struct<{
        readonly kind: Schema.Literal<"cliproxy">;
        readonly label: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly managementKey: Schema.withDecodingDefault<Schema.decodeTo<Schema.String, Schema.String, never, never>, never>;
        readonly enabled: Schema.withDecodingDefault<Schema.Boolean, never>;
    }>>>>;
    readonly cursorKeychainUsageEnabled: Schema.optionalKey<Schema.Boolean>;
    readonly usagePriceOverrides: Schema.optionalKey<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.NullOr<Schema.Struct<{
        readonly inputCostPerMillionTokens: Schema.Number;
        readonly outputCostPerMillionTokens: Schema.Number;
        readonly cacheReadCostPerMillionTokens: Schema.optionalKey<Schema.Number>;
        readonly cacheWriteCostPerMillionTokens: Schema.optionalKey<Schema.Number>;
    }>>>>;
    readonly usageModelAliases: Schema.optionalKey<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>>;
}>;
export type ServerSettingsPatch = typeof ServerSettingsPatch.Type;
export declare function requiredScopesForServerSettingsPatch(patch: ServerSettingsPatch): ReadonlyArray<AuthEnvironmentScope>;
/** Host-executed project scripts require settings-write authority in addition to orchestration:operate. */
export declare function requiredScopesForProjectMutation(mutation: ProjectMutation): ReadonlyArray<AuthEnvironmentScope>;
export declare const ClientSettingsPatch: Schema.Struct<{
    readonly notificationMode: Schema.optionalKey<Schema.Literals<readonly ["off", "notifications", "sound", "notifications-and-sound"]>>;
    readonly inAppNotificationsEnabled: Schema.optionalKey<Schema.Boolean>;
    readonly diffColorScheme: Schema.optionalKey<Schema.Literals<readonly ["red-green", "blue-orange"]>>;
    readonly chatWidth: Schema.optionalKey<Schema.Literals<readonly ["comfortable", "wide", "full"]>>;
    readonly loadBalancingEnabled: Schema.optionalKey<Schema.Boolean>;
    readonly loadBalancingWeights: Schema.optionalKey<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Int>>;
    readonly appearanceContrast: Schema.optionalKey<Schema.Int>;
    readonly panelAnimationDurationMs: Schema.optionalKey<Schema.Int>;
    readonly browserDefaultViewport: Schema.optionalKey<Schema.Union<readonly [Schema.TaggedStruct<"fill", {}>, Schema.Struct<{
        readonly _tag: Schema.tag<"freeform">;
        readonly width: Schema.Int;
        readonly height: Schema.Int;
    }>, Schema.Struct<{
        readonly _tag: Schema.tag<"preset">;
        readonly width: Schema.Int;
        readonly height: Schema.Int;
        readonly presetId: Schema.Literals<readonly ["iphone-se", "iphone-xr", "iphone-12-pro", "iphone-14-pro-max", "pixel-7", "samsung-galaxy-s8-plus", "samsung-galaxy-s20-ultra", "ipad-mini", "ipad-air", "ipad-pro", "surface-pro-7", "surface-duo", "galaxy-z-fold-5", "asus-zenbook-fold", "samsung-galaxy-a51-71", "nest-hub", "nest-hub-max", "desktop-1920x1080", "desktop-1440x900", "laptop-1366x768", "laptop-1280x800", "ipad-pro-11", "iphone-15-pro", "pixel-8", "galaxy-s24"]>;
    }>]>>;
    readonly browserDefaultZoomFactor: Schema.optionalKey<Schema.Literals<readonly [0.25, 0.33, 0.5, 0.67, 0.75, 0.8, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2, 2.5, 3, 4, 5]>>;
    readonly browserDefaultAppearance: Schema.optionalKey<Schema.Literals<readonly ["system", "light", "dark"]>>;
    readonly browserRecordingFrameRate: Schema.optionalKey<Schema.Literals<readonly [30, 60]>>;
    readonly browserRecordingShowKeyPresses: Schema.optionalKey<Schema.Boolean>;
    readonly browserRecordingShowMousePresses: Schema.optionalKey<Schema.Boolean>;
    readonly browserLinkTarget: Schema.optionalKey<Schema.Literals<readonly ["system", "app"]>>;
    readonly browserSearchEngine: Schema.optionalKey<Schema.Literals<readonly ["duckduckgo", "google", "bing", "brave", "kagi", "ecosia", "custom"]>>;
    readonly browserCustomSearchUrl: Schema.optionalKey<Schema.String>;
    readonly browserAutoShowFloatingPreview: Schema.optionalKey<Schema.Boolean>;
    readonly browserProfiles: Schema.optionalKey<Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly kind: Schema.Literals<readonly ["persistent", "incognito"]>;
    }>>>;
    readonly browserDefaultProfileId: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly confirmQuit: Schema.optionalKey<Schema.Literals<readonly ["direct", "hold", "double-click"]>>;
    readonly confirmThreadArchive: Schema.optionalKey<Schema.Boolean>;
    readonly confirmThreadDelete: Schema.optionalKey<Schema.Boolean>;
    readonly confirmThreadUnpin: Schema.optionalKey<Schema.Boolean>;
    readonly diffFilesCollapsed: Schema.optionalKey<Schema.Boolean>;
    readonly diffIgnoreWhitespace: Schema.optionalKey<Schema.Boolean>;
    readonly diffLayout: Schema.optionalKey<Schema.Literals<readonly ["stacked", "split"]>>;
    readonly environmentIdentificationMode: Schema.optionalKey<Schema.Literals<readonly ["artwork", "nightly-artwork", "dev-artwork", "pill", "none"]>>;
    readonly glassOpacity: Schema.optionalKey<Schema.Int>;
    readonly onboardingCompletedAt: Schema.optionalKey<Schema.NullOr<Schema.String>>;
    readonly fontSizeInterface: Schema.optionalKey<Schema.Int>;
    readonly fontSizePrompt: Schema.optionalKey<Schema.Int>;
    readonly fontSizeCode: Schema.optionalKey<Schema.Int>;
    readonly fontSizeTerminal: Schema.optionalKey<Schema.Int>;
    readonly fontFamilyCode: Schema.optionalKey<Schema.String>;
    readonly fontFamilyComposer: Schema.optionalKey<Schema.String>;
    readonly fontFamilySans: Schema.optionalKey<Schema.String>;
    readonly fontFamilyTerminal: Schema.optionalKey<Schema.String>;
    readonly fontSmoothing: Schema.optionalKey<Schema.Boolean>;
    readonly persistComposerContextStrip: Schema.optionalKey<Schema.Boolean>;
    readonly favorites: Schema.optionalKey<Schema.$Array<Schema.Struct<{
        readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
        readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>>;
    readonly providerModelPreferences: Schema.optionalKey<Schema.$Record<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">, Schema.Struct<{
        readonly hiddenModels: Schema.withDecodingDefault<Schema.$Array<Schema.String>, never>;
        readonly modelOrder: Schema.withDecodingDefault<Schema.$Array<Schema.String>, never>;
    }>>>;
    readonly pullRequestMergeMethodOverrides: Schema.optionalKey<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Literals<readonly ["merge", "squash", "rebase"]>>>;
    readonly pullRequestLinksOpenInApp: Schema.optionalKey<Schema.Boolean>;
    readonly planModeEnabled: Schema.optionalKey<Schema.Boolean>;
    readonly contextWindowMeterEnabled: Schema.optionalKey<Schema.Boolean>;
    readonly composerCollapseOnScroll: Schema.optionalKey<Schema.Boolean>;
    readonly composerRichTextEnabled: Schema.optionalKey<Schema.Boolean>;
    readonly sendShortcut: Schema.optionalKey<Schema.Literals<readonly ["enter", "mod-enter-multiline", "mod-enter"]>>;
    readonly followUpBehavior: Schema.optionalKey<Schema.Literals<readonly ["queue", "steer"]>>;
    readonly proactivePanelsEnabled: Schema.optionalKey<Schema.Boolean>;
    readonly showSkillsInSlashMenu: Schema.optionalKey<Schema.Boolean>;
    readonly legacySidebarEnabled: Schema.optionalKey<Schema.Boolean>;
    readonly sidebarWorkingShelfEnabled: Schema.optionalKey<Schema.Boolean>;
    readonly sidebarProjectGroupingMode: Schema.optionalKey<Schema.Literals<readonly ["repository", "repository_path", "separate"]>>;
    readonly sidebarProjectGroupingOverrides: Schema.optionalKey<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Literals<readonly ["repository", "repository_path", "separate"]>>>;
    readonly sidebarProjectSortOrder: Schema.optionalKey<Schema.Literals<readonly ["updated_at", "created_at", "manual"]>>;
    readonly sidebarThreadSortOrder: Schema.optionalKey<Schema.Literals<readonly ["updated_at", "created_at"]>>;
    readonly sidebarThreadPreviewCount: Schema.optionalKey<Schema.Int>;
    readonly timestampFormat: Schema.optionalKey<Schema.Literals<readonly ["locale", "12-hour", "24-hour"]>>;
    readonly snapShotEnabled: Schema.optionalKey<Schema.Boolean>;
    readonly snapShotIncludeAccessibility: Schema.optionalKey<Schema.Boolean>;
    readonly snapShotShortcut: Schema.optionalKey<Schema.Union<readonly [Schema.Struct<{
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
    }>]>>;
    readonly snapShotPlaySound: Schema.optionalKey<Schema.Boolean>;
    readonly snapShotSound: Schema.optionalKey<Schema.Literals<readonly ["soft-pop", "camera-shutter"]>>;
    readonly snapShotFlash: Schema.optionalKey<Schema.Boolean>;
    readonly snapShotAnimations: Schema.optionalKey<Schema.Boolean>;
    readonly wordWrap: Schema.optionalKey<Schema.Boolean>;
    readonly mathRenderingEnabled: Schema.optionalKey<Schema.Boolean>;
}>;
export type ClientSettingsPatch = typeof ClientSettingsPatch.Type;
