import { type ExecutionEnvironmentPlatformOs, type ServerProvider, type ServerSettings } from "@t3tools/contracts";
export declare function getOnboardingProviderState(provider: ServerProvider | undefined): "attention" | "checking" | "disabled" | "install" | "ready" | "signIn";
export declare function selectOnboardingProvidersByDriver(providers: ReadonlyArray<ServerProvider> | null | undefined): Map<string, {
    readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
    readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
    readonly displayName?: string | undefined;
    readonly accentColor?: string | undefined;
    readonly iconUrl?: string | undefined;
    readonly badgeLabel?: string | undefined;
    readonly continuation?: {
        readonly groupKey: string;
    } | undefined;
    readonly showInteractionModeToggle?: boolean | undefined;
    readonly reportsContextWindow?: boolean | undefined;
    readonly supportedRuntimeModes?: readonly ("approval-required" | "auto" | "auto-accept-edits" | "full-access")[] | undefined;
    readonly requiresNewThreadForModelChange?: boolean | undefined;
    readonly supportsConversationRollback?: boolean | undefined;
    readonly supportsTextGeneration?: boolean | undefined;
    readonly setup?: {
        readonly canAuthenticate: boolean;
        readonly canInstall: boolean;
        readonly documentationUrl?: string;
    } | undefined;
    readonly nativeSessions?: {
        readonly canList: boolean;
        readonly canLoad: boolean;
        readonly canResume: boolean;
        readonly canDelete?: boolean | undefined;
    } | undefined;
    readonly configurableProviders?: boolean | undefined;
    readonly runtimePaths?: {
        readonly homePath: string;
        readonly shadowHomePath: string | null;
    };
    readonly enabled: boolean;
    readonly installed: boolean;
    readonly version: string | null;
    readonly installedVersion?: string | null;
    readonly status: "disabled" | "error" | "ready" | "warning";
    readonly auth: {
        readonly status: "authenticated" | "unauthenticated" | "unknown";
        readonly type?: string | undefined;
        readonly label?: string | undefined;
        readonly email?: string | undefined;
        readonly action?: {
            readonly elicitationId: string;
            readonly url: string;
            readonly message: string;
            readonly createdAt?: string;
            readonly expiresAt?: string;
        } | undefined;
        readonly canLogout?: boolean | undefined;
        readonly subscriptionSharing?: boolean | undefined;
        readonly profileId?: string | undefined;
        readonly workspaceId?: string | undefined;
    };
    readonly checkedAt: string;
    readonly message?: string | undefined;
    readonly availability?: "available" | "unavailable" | undefined;
    readonly unavailableReason?: string | undefined;
    readonly models: readonly {
        readonly slug: string;
        readonly name: string;
        readonly shortName?: string | undefined;
        readonly subProvider?: string | undefined;
        readonly aliases?: readonly string[] | undefined;
        readonly badge?: "new" | undefined;
        readonly isCustom: boolean;
        readonly isDefault?: boolean | undefined;
        readonly isLegacy?: boolean | undefined;
        readonly capabilities: {
            readonly optionDescriptors?: readonly ({
                readonly id: string;
                readonly label: string;
                readonly description?: string | undefined;
                readonly type: "select";
                readonly options: readonly {
                    readonly id: string;
                    readonly label: string;
                    readonly description?: string | undefined;
                    readonly isDefault?: boolean | undefined;
                }[];
                readonly currentValue?: string | undefined;
                readonly promptInjectedValues?: readonly string[] | undefined;
            } | {
                readonly id: string;
                readonly label: string;
                readonly description?: string | undefined;
                readonly type: "boolean";
                readonly currentValue?: boolean | undefined;
            })[] | undefined;
        } | null;
    }[];
    readonly updateRequiredModels?: readonly {
        readonly slug: string;
        readonly name: string;
        readonly badge?: "new" | undefined;
        readonly minVersion: string;
    }[];
    readonly slashCommands: readonly {
        readonly name: string;
        readonly description?: string | undefined;
        readonly input?: {
            readonly hint: string;
        } | undefined;
    }[];
    readonly skills: readonly {
        readonly name: string;
        readonly description?: string | undefined;
        readonly path: string;
        readonly scope?: string | undefined;
        readonly enabled: boolean;
        readonly displayName?: string | undefined;
        readonly shortDescription?: string | undefined;
        readonly userInvocationOnly?: boolean | undefined;
        readonly userInvocable?: boolean | undefined;
    }[];
    readonly workspaceSnapshots?: readonly {
        readonly cwd: string;
        readonly checkedAt: string;
        readonly slashCommands: readonly {
            readonly name: string;
            readonly description?: string | undefined;
            readonly input?: {
                readonly hint: string;
            } | undefined;
        }[];
        readonly slashCommandsPending?: boolean | undefined;
        readonly skills: readonly {
            readonly name: string;
            readonly description?: string | undefined;
            readonly path: string;
            readonly scope?: string | undefined;
            readonly enabled: boolean;
            readonly displayName?: string | undefined;
            readonly shortDescription?: string | undefined;
            readonly userInvocationOnly?: boolean | undefined;
            readonly userInvocable?: boolean | undefined;
        }[];
        readonly optionDescriptors?: readonly ({
            readonly id: string;
            readonly label: string;
            readonly description?: string | undefined;
            readonly type: "select";
            readonly options: readonly {
                readonly id: string;
                readonly label: string;
                readonly description?: string | undefined;
                readonly isDefault?: boolean | undefined;
            }[];
            readonly currentValue?: string | undefined;
            readonly promptInjectedValues?: readonly string[] | undefined;
        } | {
            readonly id: string;
            readonly label: string;
            readonly description?: string | undefined;
            readonly type: "boolean";
            readonly currentValue?: boolean | undefined;
        })[] | undefined;
    }[];
    readonly usageLimits?: {
        readonly checkedAt: string;
        readonly windows: readonly {
            readonly id: string;
            readonly kind: "monthly" | "other" | "session" | "weekly";
            readonly label: string;
            readonly usedPercent: number;
            readonly resetsAt?: string | undefined;
            readonly windowDurationMins?: number | undefined;
        }[];
        readonly credentialFingerprint?: string | undefined;
        readonly resetCredits?: {
            readonly availableCount: number;
            readonly nextExpiresAt?: string | undefined;
            readonly nextCreditId?: string | undefined;
        } | undefined;
        readonly externalUsage?: {
            readonly label: string;
            readonly url: string;
        } | undefined;
        readonly unavailable?: {
            readonly reason: "probeFailed" | "unsupported";
            readonly message?: string | undefined;
        } | undefined;
    } | undefined;
    readonly versionAdvisory?: {
        readonly status: "behind_latest" | "current" | "unknown";
        readonly currentVersion: string | null;
        readonly latestVersion: string | null;
        readonly updateCommand: string | null;
        readonly canUpdate: boolean;
        readonly canInstallVersion?: boolean;
        readonly checkedAt: string | null;
        readonly message: string | null;
    };
    readonly compatibilityAdvisory?: {
        readonly status: "broken" | "graceful" | "supported" | "unknown" | "unsupported";
        readonly latestVersionStatus?: "broken" | "graceful" | "supported" | "unknown" | "unsupported";
        readonly message: string | null;
        readonly recommendedVersion: string | null;
        readonly recommendedRange: string | null;
    };
    readonly updateState?: {
        readonly status: "failed" | "idle" | "queued" | "running" | "succeeded" | "unchanged";
        readonly startedAt: string | null;
        readonly finishedAt: string | null;
        readonly message: string | null;
        readonly output: string | null;
    };
}>;
declare const NATIVE_INSTALL_COMMANDS: {
    readonly claudeAgent: {
        readonly windows: "irm https://claude.ai/install.ps1 | iex";
        readonly posix: "curl -fsSL https://claude.ai/install.sh | bash";
    };
    readonly codex: {
        readonly windows: "irm https://chatgpt.com/codex/install.ps1 | iex";
        readonly posix: "curl -fsSL https://chatgpt.com/codex/install.sh | sh";
    };
};
export declare function resolveOnboardingProviderInstallCommand(driver: keyof typeof NATIVE_INSTALL_COMMANDS, platform: ExecutionEnvironmentPlatformOs): string;
export declare function resolveOnboardingProviderLoginCommand(provider: ServerProvider, settings: ServerSettings, platform: ExecutionEnvironmentPlatformOs): string;
export {};
