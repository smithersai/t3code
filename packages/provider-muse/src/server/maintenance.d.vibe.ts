import { type ServerProvider } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import * as HttpClient from "effect/http/HttpClient";
import { type ProviderMaintenanceCapabilities, type ProviderMaintenanceCapabilitiesResolver } from "@t3tools/provider-core/server/maintenanceResolver";
import * as ProviderLatestVersions from "@t3tools/provider-core/server/ProviderLatestVersions";
export declare function parseMuseVersion(output: string): string | null;
export declare const compareMuseVersions: (current: string, latest: string) => number;
/** Only the official launcher owns an update channel; a standalone binary cannot update itself. */
export declare const museMaintenance: ProviderMaintenanceCapabilitiesResolver;
export declare const latestMuseVersion: (environment: NodeJS.ProcessEnv, options?: {
    readonly fresh?: boolean;
} | undefined) => Effect.Effect<string | null, never, HttpClient.HttpClient | ProviderLatestVersions.ProviderLatestVersions>;
export declare const enrichMuseSnapshot: (input: {
    readonly snapshot: ServerProvider;
    readonly maintenanceCapabilities: ProviderMaintenanceCapabilities;
    readonly enableProviderUpdateChecks: boolean;
    readonly environment: NodeJS.ProcessEnv;
}) => Effect.Effect<{
    instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
    driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
    displayName?: string | undefined;
    accentColor?: string | undefined;
    iconUrl?: string | undefined;
    badgeLabel?: string | undefined;
    continuation?: {
        readonly groupKey: string;
    } | undefined;
    showInteractionModeToggle?: boolean | undefined;
    reportsContextWindow?: boolean | undefined;
    supportedRuntimeModes?: readonly ("approval-required" | "auto" | "auto-accept-edits" | "full-access")[] | undefined;
    requiresNewThreadForModelChange?: boolean | undefined;
    supportsConversationRollback?: boolean | undefined;
    supportsTextGeneration?: boolean | undefined;
    setup?: {
        readonly canAuthenticate: boolean;
        readonly canInstall: boolean;
        readonly documentationUrl?: string;
    } | undefined;
    nativeSessions?: {
        readonly canList: boolean;
        readonly canLoad: boolean;
        readonly canResume: boolean;
        readonly canDelete?: boolean | undefined;
    } | undefined;
    configurableProviders?: boolean | undefined;
    runtimePaths?: {
        readonly homePath: string;
        readonly shadowHomePath: string | null;
    };
    enabled: boolean;
    installed: boolean;
    version: string | null;
    installedVersion?: string | null;
    status: "disabled" | "error" | "ready" | "warning";
    auth: {
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
    checkedAt: string;
    message?: string | undefined;
    availability?: "available" | "unavailable" | undefined;
    unavailableReason?: string | undefined;
    models: readonly {
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
    updateRequiredModels?: readonly {
        readonly slug: string;
        readonly name: string;
        readonly badge?: "new" | undefined;
        readonly minVersion: string;
    }[];
    slashCommands: readonly {
        readonly name: string;
        readonly description?: string | undefined;
        readonly input?: {
            readonly hint: string;
        } | undefined;
    }[];
    skills: readonly {
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
    workspaceSnapshots?: readonly {
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
    usageLimits?: {
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
    compatibilityAdvisory?: {
        readonly status: "broken" | "graceful" | "supported" | "unknown" | "unsupported";
        readonly latestVersionStatus?: "broken" | "graceful" | "supported" | "unknown" | "unsupported";
        readonly message: string | null;
        readonly recommendedVersion: string | null;
        readonly recommendedRange: string | null;
    };
    updateState?: {
        readonly status: "failed" | "idle" | "queued" | "running" | "succeeded" | "unchanged";
        readonly startedAt: string | null;
        readonly finishedAt: string | null;
        readonly message: string | null;
        readonly output: string | null;
    };
    versionAdvisory: {
        readonly status: "behind_latest" | "current" | "unknown";
        readonly currentVersion: string | null;
        readonly latestVersion: string | null;
        readonly updateCommand: string | null;
        readonly canUpdate: boolean;
        readonly canInstallVersion?: boolean;
        readonly checkedAt: string | null;
        readonly message: string | null;
    };
}, never, HttpClient.HttpClient | ProviderLatestVersions.ProviderLatestVersions>;
