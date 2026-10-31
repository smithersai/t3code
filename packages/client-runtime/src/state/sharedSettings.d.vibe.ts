import type { ExecutionEnvironmentCapabilities, ServerSettings, ServerSettingsPatch } from "@t3tools/contracts";
import type { EnvironmentConnectionPhase } from "../connection/presentation.js";
declare const SHARED_SERVER_SETTING_KEYS: readonly ["continueThreadsAfterServerUpdate", "sidebarAutoSettleAfterDays", "sidebarAutoSettleOnMerge", "autoResumeLimitedThreads", "snoozeLimitedThreads", "newWorktreesStartFromOrigin", "sourceControlWritingStyle", "textGenerationModelSelection"];
export type SharedServerSettingKey = (typeof SHARED_SERVER_SETTING_KEYS)[number];
export declare function splitSharedServerPatch(patch: ServerSettingsPatch): {
    sharedPatch: ServerSettingsPatch;
    localPatch: ServerSettingsPatch;
};
export declare function filterSharedServerPatch(patch: ServerSettingsPatch, capabilities: Pick<ExecutionEnvironmentCapabilities, "threadRestartContinuation"> | undefined, settings?: ServerSettings, sourceSettings?: {
    readonly favorites: readonly {
        readonly provider: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly model: string;
    }[] | null;
    readonly providerModelPreferences: {
        readonly [x: string & import("effect/Brand").Brand<"ProviderInstanceId">]: {
            readonly hiddenModels: readonly string[];
            readonly modelOrder: readonly string[];
        };
    } | null;
    readonly worktreeCleanup: {
        readonly mode: "off";
    } | {
        readonly mode: "custom";
        readonly rules: {
            readonly worktreeKeepWhen: "any-local-files" | "tracked-changes" | "uncommitted-changes";
            readonly worktreeAfterDays: number | null;
            readonly worktreeSettledAfterDays: number | null;
            readonly worktreeOnMerge: boolean;
            readonly worktreeOnDelete: boolean;
            readonly worktreeUnchanged: boolean;
        };
    } | null;
    readonly storageCleanup: {
        readonly worktreeKeepWhen: "any-local-files" | "tracked-changes" | "uncommitted-changes";
        readonly worktreeAfterDays: number | null;
        readonly worktreeSettledAfterDays: number | null;
        readonly worktreeOnMerge: boolean;
        readonly worktreeOnDelete: boolean;
        readonly worktreeUnchanged: boolean;
        readonly browserArtifactsAfterDays: number | null;
        readonly logsAfterDays: number | null;
    };
    readonly worktreesDirectory: string;
    readonly previousWorktreesDirectories: readonly string[];
    readonly responseStreamingMode: "paragraph" | "turn";
    readonly enableProviderUpdateChecks: boolean;
    readonly continueThreadsAfterServerUpdate: boolean;
    readonly enableAgentBrowserAccess: boolean;
    readonly projectAgentBrowserAccessOverrides: {
        readonly [x: string & import("effect/Brand").Brand<"ProjectId">]: boolean;
    };
    readonly defaultAutoPull: boolean;
    readonly defaultProjectScripts: readonly {
        readonly id: string;
        readonly name: string;
        readonly command: string;
        readonly icon: "build" | "configure" | "debug" | "lint" | "play" | "test";
        readonly runOnWorktreeCreate: boolean;
        readonly runOnSettle?: boolean | undefined;
        readonly async?: boolean | undefined;
        readonly previewUrl?: string | undefined;
        readonly autoOpenPreview?: boolean | undefined;
    }[];
    readonly projectScriptOverrides: {
        readonly [x: string & import("effect/Brand").Brand<"ProjectId">]: readonly {
            readonly id: string;
            readonly name: string;
            readonly command: string;
            readonly icon: "build" | "configure" | "debug" | "lint" | "play" | "test";
            readonly runOnWorktreeCreate: boolean;
            readonly runOnSettle?: boolean | undefined;
            readonly async?: boolean | undefined;
            readonly previewUrl?: string | undefined;
            readonly autoOpenPreview?: boolean | undefined;
        }[] | null;
    };
    readonly projectAutoPullOverrides: {
        readonly [x: string & import("effect/Brand").Brand<"ProjectId">]: boolean;
    };
    readonly defaultModelSelection: {
        readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly model: string;
        readonly options?: readonly {
            readonly id: string;
            readonly value: string | boolean;
        }[];
    } | null;
    readonly defaultRuntimeMode: "approval-required" | "auto" | "auto-accept-edits" | "full-access";
    readonly projectSettingsOverrides: {
        readonly [x: string & import("effect/Brand").Brand<"ProjectId">]: {
            readonly worktreeCleanup?: {
                readonly mode: "off";
            } | {
                readonly mode: "custom";
                readonly rules: {
                    readonly worktreeKeepWhen: "any-local-files" | "tracked-changes" | "uncommitted-changes";
                    readonly worktreeAfterDays: number | null;
                    readonly worktreeSettledAfterDays: number | null;
                    readonly worktreeOnMerge: boolean;
                    readonly worktreeOnDelete: boolean;
                    readonly worktreeUnchanged: boolean;
                };
            } | null;
            readonly defaultModelSelection?: {
                readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
                readonly model: string;
                readonly options?: readonly {
                    readonly id: string;
                    readonly value: string | boolean;
                }[];
            } | null;
            readonly defaultRuntimeMode?: "approval-required" | "auto" | "auto-accept-edits" | "full-access";
            readonly defaultThreadEnvMode?: "local" | "worktree";
            readonly newWorktreesStartFromOrigin?: boolean;
            readonly worktreeSubmodules?: "none" | "recursive" | "top-level" | undefined;
            readonly defaultAutoPull?: boolean;
            readonly defaultProjectScripts?: readonly {
                readonly id: string;
                readonly name: string;
                readonly command: string;
                readonly icon: "build" | "configure" | "debug" | "lint" | "play" | "test";
                readonly runOnWorktreeCreate: boolean;
                readonly runOnSettle?: boolean | undefined;
                readonly async?: boolean | undefined;
                readonly previewUrl?: string | undefined;
                readonly autoOpenPreview?: boolean | undefined;
            }[];
            readonly enableAgentBrowserAccess?: boolean;
            readonly enableAgentDeviceAccess?: boolean;
            readonly textGenerationModelSelection?: {
                readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
                readonly model: string;
                readonly options?: readonly {
                    readonly id: string;
                    readonly value: string | boolean;
                }[];
            };
            readonly threadTitleInstructions?: string;
            readonly sourceControlWriterModelSelection?: {
                readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
                readonly model: string;
                readonly options?: readonly {
                    readonly id: string;
                    readonly value: string | boolean;
                }[];
            } | null;
            readonly reviewGuideModelSelection?: {
                readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
                readonly model: string;
                readonly options?: readonly {
                    readonly id: string;
                    readonly value: string | boolean;
                }[];
            } | null;
            readonly reviewGuideInstructions?: string;
            readonly sourceControlWritingStyle?: {
                readonly mode: "conventional_commits" | "custom" | "repo_conventions";
                readonly customInstructions: string;
                readonly followChangeRequestTemplates: boolean;
            };
            readonly removeAgentCreditsOnMerge?: boolean;
            readonly branchNamingMode?: "custom" | "semantic" | "static";
            readonly branchNamePrefix?: string;
            readonly branchNameInstructions?: string;
            readonly pullRequestMergeMethod?: "merge" | "rebase" | "squash" | null;
            readonly sidebarAutoSettleOnMerge?: boolean;
            readonly sidebarAutoSettleAfterDays?: number | null;
            readonly sidebarAutoSettleKeepPullRequests?: boolean;
            readonly continueThreadsAfterServerUpdate?: boolean;
            readonly responseStreamingMode?: "paragraph" | "turn";
            readonly providerInstances?: {
                readonly [x: string & import("effect/Brand").Brand<"ProviderInstanceId">]: {
                    readonly enabled?: boolean;
                };
            };
        };
    };
    readonly projectSettingsFolded: boolean;
    readonly enableAgentDeviceAccess: boolean;
    readonly enableDeviceSupport: boolean;
    readonly deviceOnboardingCompleted: boolean;
    readonly deviceHosts: readonly {
        readonly kind: "ssh";
        readonly id: string;
        readonly label: string;
        readonly target: string;
        readonly identityFile?: string | undefined;
        readonly port?: number | undefined;
    }[];
    readonly easDeviceHosts: readonly {
        readonly kind: "eas";
        readonly id: string;
        readonly label: string;
        readonly appId?: string | undefined;
        readonly accessToken: string;
        readonly maxSessionMinutes: number;
        readonly idleMinutes: number;
        readonly maxConcurrentSessions: number;
    }[];
    readonly sidebarAutoSettleAfterDays: number | null;
    readonly compactIdleThreads: "beforeCacheExpires" | "off" | "onReturn" | boolean;
    readonly idleCompaction?: "beforeCacheExpires" | "off" | "onReturn";
    readonly snoozeLimitedThreads: boolean;
    readonly autoResumeLimitedThreads: boolean;
    readonly guestSharingEnabled: boolean;
    readonly linkedEnvironmentsEnabled: boolean;
    readonly sidebarAutoSettleKeepPullRequests: boolean;
    readonly sidebarAutoSettleOnMerge: boolean;
    readonly backgroundActivity: {
        readonly schemaVersion: 1;
        readonly profile: "balanced" | "battery-saver" | "custom" | "performance";
        readonly baseProfile?: "balanced" | "battery-saver" | "performance";
        readonly overrides: {
            readonly automaticGitFetchInterval?: import("effect/Duration").Duration;
            readonly providerHealthRefreshInterval?: import("effect/Duration").Duration;
            readonly hostPowerMonitorActiveInterval?: import("effect/Duration").Duration;
            readonly hostPowerMonitorIdleInterval?: import("effect/Duration").Duration;
            readonly idleClientTtl?: import("effect/Duration").Duration;
            readonly pauseWhenHostLocked?: boolean;
            readonly pauseWhenHostLowPower?: boolean;
            readonly pauseWhenClientLowPower?: boolean;
            readonly pauseWhenOnBattery?: boolean;
        };
    };
    readonly automaticGitFetchInterval: import("effect/Duration").Duration;
    readonly providerHealthRefreshInterval: import("effect/Duration").Duration;
    readonly backgroundActivityProfile: "balanced" | "battery-saver" | "performance";
    readonly defaultTheme: string;
    readonly defaultThemeSetAt: string;
    readonly environmentIcon: "cloud" | "desktop" | "laptop" | "linux" | "mac-mini" | "mac-studio" | "server" | null;
    readonly defaultThreadEnvMode: "local" | "worktree" | null;
    readonly newWorktreesStartFromOrigin: boolean;
    readonly worktreeSubmodules: "none" | "recursive" | "top-level" | null;
    readonly addProjectBaseDirectory: string;
    readonly textGenerationModelSelection: {
        readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly model: string;
        readonly options?: readonly {
            readonly id: string;
            readonly value: string | boolean;
        }[];
    };
    readonly threadTitleInstructions: string;
    readonly branchNamingMode: "custom" | "semantic" | "static";
    readonly branchNamePrefix: string;
    readonly branchNameInstructions: string;
    readonly removeAgentCreditsOnMerge: boolean;
    readonly sourceControlWritingStyle: {
        readonly mode: "conventional_commits" | "custom" | "repo_conventions";
        readonly customInstructions: string;
        readonly followChangeRequestTemplates: boolean;
    };
    readonly sourceControlWriterModelSelection: {
        readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly model: string;
        readonly options?: readonly {
            readonly id: string;
            readonly value: string | boolean;
        }[];
    } | null;
    readonly reviewGuidesEnabled: boolean;
    readonly reviewGuideModelSelection: {
        readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly model: string;
        readonly options?: readonly {
            readonly id: string;
            readonly value: string | boolean;
        }[];
    } | null;
    readonly reviewGuideInstructions: string;
    readonly pullRequestMergeMethod: "merge" | "rebase" | "squash" | null;
    readonly providerInstances: {
        readonly [x: string & import("effect/Brand").Brand<"ProviderInstanceId">]: {
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly displayName?: string | undefined;
            readonly accentColor?: string | undefined;
            readonly environment?: readonly {
                readonly name: string;
                readonly value: string;
                readonly sensitive: boolean;
                readonly valueRedacted?: boolean;
            }[];
            readonly enabled?: boolean;
            readonly config?: unknown;
        };
    };
    readonly observability: {
        readonly otlpTracesUrl: string;
        readonly otlpMetricsUrl: string;
        readonly otlpLogsUrl: string;
    };
    readonly sourceControlHosts: {
        readonly [x: string]: {
            readonly [x: string]: unknown;
        };
    };
    readonly usageLimitSources: {
        readonly [x: string & import("effect/Brand").Brand<"UsageLimitSourceId">]: {
            readonly kind: "cliproxy";
            readonly label?: string | undefined;
            readonly url: string;
            readonly managementKey: string;
            readonly enabled: boolean;
        };
    };
    readonly cursorKeychainUsageEnabled: boolean;
    readonly usagePriceOverrides: {
        readonly [x: string]: {
            readonly inputCostPerMillionTokens: number;
            readonly outputCostPerMillionTokens: number;
            readonly cacheReadCostPerMillionTokens?: number;
            readonly cacheWriteCostPerMillionTokens?: number;
        };
    };
    readonly usageModelAliases: {
        readonly [x: string]: string;
    };
} | undefined, targetIsSource?: boolean): ServerSettingsPatch;
export declare function pickSharedServerSettings(settings: ServerSettings, capabilities?: Pick<ExecutionEnvironmentCapabilities, "threadRestartContinuation">): ServerSettingsPatch;
export declare function supportsSharedSettingsSync(environment: {
    readonly connection: {
        readonly phase: EnvironmentConnectionPhase;
    };
    readonly serverConfig: {
        readonly environment: {
            readonly capabilities: Pick<ExecutionEnvironmentCapabilities, "threadAutoSettlement">;
        };
    } | null;
}): boolean;
export {};
