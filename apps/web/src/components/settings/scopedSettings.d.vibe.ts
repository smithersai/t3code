import { type ClientSettingsPatch, type EnvironmentId, type ProjectId, type ProjectScopedServerSettingKey, ServerSettings, type T3ProjectFile, type ServerSettingsPatch } from "@t3tools/contracts";
import type { EnvironmentConnectionPhase } from "@t3tools/client-runtime/connection";
import { type ProjectSettingSource } from "@t3tools/shared/projectSettings";
import * as Cause from "effect/Cause";
import type { ResolvedSettingsScope } from "./settingsScope";
export type ScopedSettingsPatch = ServerSettingsPatch & ClientSettingsPatch;
interface ScopedSettingsEnvironment {
    readonly environmentId: EnvironmentId;
    readonly label: string;
    readonly connection: {
        readonly phase: EnvironmentConnectionPhase;
    };
    readonly serverConfig: {
        readonly settings: ServerSettings;
        readonly environment?: {
            readonly capabilities: {
                readonly projectSettingsOverrides?: boolean | undefined;
            };
        };
    } | null;
}
export declare function isProjectScopedSettingKey(key: string): key is ProjectScopedServerSettingKey;
export declare function isConnectedWithConfig(environment: Pick<ScopedSettingsEnvironment, "connection" | "serverConfig">): boolean;
/** The representative supplies display values, never the set of write targets. */
export declare function selectScopedSettingsEnvironments<T extends ScopedSettingsEnvironment>(scope: ResolvedSettingsScope, available: readonly T[], primaryEnvironmentId: EnvironmentId | null): {
    environments: T[];
    connectedEnvironments: T[];
    environment: T | null;
};
export interface ScopedSettingsTarget {
    readonly environmentId: EnvironmentId;
    readonly label: string;
    readonly projectId: ProjectId | null;
    readonly settings: ServerSettings;
    readonly sources: Readonly<Record<ProjectScopedServerSettingKey, ProjectSettingSource>>;
}
export declare function resolveScopedSettingsTargets(scope: ResolvedSettingsScope, connectedEnvironments: readonly ScopedSettingsEnvironment[], projectFiles?: ReadonlyMap<string, T3ProjectFile | null>): readonly ScopedSettingsTarget[];
export declare function scopedSettingsAreMixed(targets: readonly Pick<ScopedSettingsTarget, "settings">[], keys: readonly (keyof ServerSettings)[]): boolean;
/**
 * Servers store the idle compaction mode differently by version, so selected
 * environments are compared by the mode each resolves to, and "Never" is offered
 * only when every one of them can store it.
 */
export declare function scopedIdleCompaction(targets: readonly Pick<ScopedSettingsTarget, "settings">[]): {
    mixed: boolean;
    neverAvailable: boolean;
};
export type ScopedSettingSource = ProjectSettingSource | "mixed";
export declare function scopedSettingsSource(targets: readonly Pick<ScopedSettingsTarget, "sources">[], keys: readonly (keyof ServerSettings)[]): ScopedSettingSource;
interface ScopedServerWrite {
    readonly environmentId: EnvironmentId;
    readonly label: string;
    readonly patch: ServerSettingsPatch;
    readonly previous: ServerSettings;
}
export declare function planScopedSettingsPatch(scope: ResolvedSettingsScope, environments: readonly ScopedSettingsEnvironment[], patch: ScopedSettingsPatch): {
    clientPatch: {
        readonly notificationMode?: "notifications" | "notifications-and-sound" | "off" | "sound";
        readonly inAppNotificationsEnabled?: boolean;
        readonly diffColorScheme?: "blue-orange" | "red-green";
        readonly chatWidth?: "comfortable" | "full" | "wide";
        readonly loadBalancingEnabled?: boolean;
        readonly loadBalancingWeights?: {
            readonly [x: string]: number;
        };
        readonly appearanceContrast?: number;
        readonly panelAnimationDurationMs?: number;
        readonly browserDefaultViewport?: {
            readonly _tag: "fill";
        } | {
            readonly _tag: "freeform";
            readonly width: number;
            readonly height: number;
        } | {
            readonly _tag: "preset";
            readonly width: number;
            readonly height: number;
            readonly presetId: "asus-zenbook-fold" | "desktop-1440x900" | "desktop-1920x1080" | "galaxy-s24" | "galaxy-z-fold-5" | "ipad-air" | "ipad-mini" | "ipad-pro" | "ipad-pro-11" | "iphone-12-pro" | "iphone-14-pro-max" | "iphone-15-pro" | "iphone-se" | "iphone-xr" | "laptop-1280x800" | "laptop-1366x768" | "nest-hub" | "nest-hub-max" | "pixel-7" | "pixel-8" | "samsung-galaxy-a51-71" | "samsung-galaxy-s20-ultra" | "samsung-galaxy-s8-plus" | "surface-duo" | "surface-pro-7";
        };
        readonly browserDefaultZoomFactor?: 0.25 | 0.33 | 0.5 | 0.67 | 0.75 | 0.8 | 0.9 | 1 | 1.1 | 1.25 | 1.5 | 1.75 | 2 | 2.5 | 3 | 4 | 5;
        readonly browserDefaultAppearance?: "dark" | "light" | "system";
        readonly browserRecordingFrameRate?: 30 | 60;
        readonly browserRecordingShowKeyPresses?: boolean;
        readonly browserRecordingShowMousePresses?: boolean;
        readonly browserLinkTarget?: "app" | "system";
        readonly browserSearchEngine?: "bing" | "brave" | "custom" | "duckduckgo" | "ecosia" | "google" | "kagi";
        readonly browserCustomSearchUrl?: string;
        readonly browserAutoShowFloatingPreview?: boolean;
        readonly browserProfiles?: readonly {
            readonly id: string;
            readonly name: string;
            readonly kind: "incognito" | "persistent";
        }[];
        readonly browserDefaultProfileId?: string;
        readonly confirmQuit?: "direct" | "double-click" | "hold";
        readonly confirmThreadArchive?: boolean;
        readonly confirmThreadDelete?: boolean;
        readonly confirmThreadUnpin?: boolean;
        readonly diffFilesCollapsed?: boolean;
        readonly diffIgnoreWhitespace?: boolean;
        readonly diffLayout?: "split" | "stacked";
        readonly environmentIdentificationMode?: "artwork" | "dev-artwork" | "nightly-artwork" | "none" | "pill";
        readonly glassOpacity?: number;
        readonly onboardingCompletedAt?: string | null;
        readonly fontSizeInterface?: number;
        readonly fontSizePrompt?: number;
        readonly fontSizeCode?: number;
        readonly fontSizeTerminal?: number;
        readonly fontFamilyCode?: string;
        readonly fontFamilyComposer?: string;
        readonly fontFamilySans?: string;
        readonly fontFamilyTerminal?: string;
        readonly fontSmoothing?: boolean;
        readonly persistComposerContextStrip?: boolean;
        readonly favorites?: readonly {
            readonly provider: string & import("effect/Brand").Brand<"ProviderInstanceId">;
            readonly model: string;
        }[];
        readonly providerModelPreferences?: {
            readonly [x: string & import("effect/Brand").Brand<"ProviderInstanceId">]: {
                readonly hiddenModels: readonly string[];
                readonly modelOrder: readonly string[];
            };
        };
        readonly pullRequestMergeMethodOverrides?: {
            readonly [x: string]: "merge" | "rebase" | "squash";
        };
        readonly pullRequestLinksOpenInApp?: boolean;
        readonly planModeEnabled?: boolean;
        readonly contextWindowMeterEnabled?: boolean;
        readonly composerCollapseOnScroll?: boolean;
        readonly composerRichTextEnabled?: boolean;
        readonly sendShortcut?: "enter" | "mod-enter" | "mod-enter-multiline";
        readonly followUpBehavior?: "queue" | "steer";
        readonly proactivePanelsEnabled?: boolean;
        readonly showSkillsInSlashMenu?: boolean;
        readonly legacySidebarEnabled?: boolean;
        readonly sidebarWorkingShelfEnabled?: boolean;
        readonly sidebarProjectGroupingMode?: "repository" | "repository_path" | "separate";
        readonly sidebarProjectGroupingOverrides?: {
            readonly [x: string]: "repository" | "repository_path" | "separate";
        };
        readonly sidebarProjectSortOrder?: "created_at" | "manual" | "updated_at";
        readonly sidebarThreadSortOrder?: "created_at" | "updated_at";
        readonly sidebarThreadPreviewCount?: number;
        readonly timestampFormat?: "12-hour" | "24-hour" | "locale";
        readonly snapShotEnabled?: boolean;
        readonly snapShotIncludeAccessibility?: boolean;
        readonly snapShotShortcut?: {
            readonly key: string;
            readonly metaKey: boolean;
            readonly ctrlKey: boolean;
            readonly shiftKey: boolean;
            readonly altKey: boolean;
            readonly modKey: boolean;
        } | {
            readonly kind: "both-shift-keys";
        } | {
            readonly kind: "modifier-pair";
            readonly modifier: "alt" | "control" | "meta" | "shift";
        };
        readonly snapShotPlaySound?: boolean;
        readonly snapShotSound?: "camera-shutter" | "soft-pop";
        readonly snapShotFlash?: boolean;
        readonly snapShotAnimations?: boolean;
        readonly wordWrap?: boolean;
        readonly mathRenderingEnabled?: boolean;
    };
    hasClientWrite: boolean;
    serverWrites: ScopedServerWrite[];
    unavailableReason: string | null;
};
export declare function planScopedSettingsClear(scope: ResolvedSettingsScope, environments: readonly ScopedSettingsEnvironment[], keys: readonly ProjectScopedServerSettingKey[]): {
    clientPatch: ClientSettingsPatch;
    hasClientWrite: boolean;
    serverWrites: ScopedServerWrite[];
    unavailableReason: string | null;
};
export interface ProjectOverrideEntry {
    readonly environmentId: EnvironmentId;
    readonly projectId: ProjectId;
}
export declare function listProjectOverrides(environments: readonly ScopedSettingsEnvironment[], keys: readonly (keyof ServerSettings)[]): readonly ProjectOverrideEntry[];
export declare function planProjectOverridesClear(environments: readonly ScopedSettingsEnvironment[], entries: readonly ProjectOverrideEntry[], keys: readonly ProjectScopedServerSettingKey[]): {
    clientPatch: ClientSettingsPatch;
    hasClientWrite: boolean;
    serverWrites: ScopedServerWrite[];
    unavailableReason: string | null;
};
/** @throws {never} */
export declare function persistScopedSettingsPatch(plan: ReturnType<typeof planScopedSettingsPatch>, persistServer: (input: {
    environmentId: EnvironmentId;
    input: {
        patch: ServerSettingsPatch;
    };
}) => Promise<{
    readonly _tag: "Success" | "Failure";
    readonly cause?: Cause.Cause<unknown>;
    readonly value?: ServerSettings;
}>, persistClient: (patch: ClientSettingsPatch) => void): Promise<{
    failedEnvironments: {
        environmentId: EnvironmentId;
        label: string;
        patch: ServerSettingsPatch;
        previous: ServerSettings;
        message: string;
    }[];
    savedEnvironments: ScopedServerWrite[];
    savedEnvironmentCount: number;
}>;
export {};
