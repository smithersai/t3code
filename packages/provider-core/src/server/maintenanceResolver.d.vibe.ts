export type { ProviderMaintenanceCapabilities, ProviderMaintenanceCommandAction, } from "@t3tools/provider-core/server/maintenance";
import type { ProviderMaintenanceCapabilities, ProviderMaintenanceCommandAction } from "@t3tools/provider-core/server/maintenance";
import { ProviderDriverKind, type ServerProvider, type ServerProviderVersionAdvisory } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import * as HttpClient from "effect/http/HttpClient";
import * as ChildProcessSpawner from "effect/process/ChildProcessSpawner";
import * as ProviderLatestVersions from "./ProviderLatestVersions.vibe";
export interface ProviderMaintenanceResolutionContext {
    readonly binaryPath: string;
    readonly resolvedCommandPath: string;
    readonly realCommandPath: string;
    readonly env: NodeJS.ProcessEnv;
    readonly platform: NodeJS.Platform;
}
export type ProviderMaintenanceResolverServices = FileSystem.FileSystem | Path.Path | ChildProcessSpawner.ChildProcessSpawner;
export interface ProviderMaintenanceCapabilitiesResolver {
    readonly resolve: (context: ProviderMaintenanceResolutionContext | null) => Effect.Effect<ProviderMaintenanceCapabilities, never, ProviderMaintenanceResolverServices>;
}
export interface PackageManagedProviderMaintenanceDefinition {
    readonly provider: ProviderDriverKind;
    readonly npmPackageName: string;
    readonly nativeUpdate: {
        readonly args: ReadonlyArray<string>;
        /** @throws {never} */
        readonly isCommandPath?: (commandPath: string) => boolean;
        /** The updater cannot detect installs outside `isCommandPath`, so leave those manual-only. */
        readonly requiresCommandPath?: boolean;
        readonly env?: NodeJS.ProcessEnv;
    } | null;
}
/** @throws {never} */
export declare function makeProviderMaintenanceCapabilities(input: {
    readonly provider: ProviderDriverKind;
    readonly packageName: string | null;
    readonly updateExecutable: string | null;
    readonly updateArgs: ReadonlyArray<string>;
    readonly updateLockKey: string | null;
    readonly updateCommand?: string;
    readonly platform?: NodeJS.Platform;
    readonly env?: NodeJS.ProcessEnv;
    readonly latestVersion?: string | null;
    readonly lookupLatestVersion?: Effect.Effect<string | null>;
}): ProviderMaintenanceCapabilities;
/** @throws {never} */
export declare function makeTargetedProviderUpdateAction(capabilities: ProviderMaintenanceCapabilities, version: string): ProviderMaintenanceCommandAction | null;
/** @throws {never} */
export declare function resolveLatestProviderUpdateAction(capabilities: ProviderMaintenanceCapabilities, latestVersion: string | null): ProviderMaintenanceCommandAction | null;
/** @throws {never} */
export declare function makeManualOnlyProviderMaintenanceCapabilities(input: {
    readonly provider: ProviderDriverKind;
    readonly packageName: string | null;
    readonly installPath?: string;
}): ProviderMaintenanceCapabilities;
/** @throws {never} */
export declare function normalizeCommandPath(commandPath: string): string;
/** @throws {never} */
export declare function npmGlobalPrefixFromCommandPath(realCommandPath: string, packageName: string): string | null;
export interface HomebrewOwnership {
    readonly kind: "formula" | "cask";
    readonly name: string;
    readonly prefix: string;
}
/** @throws {never} */
export declare function homebrewOwnershipFromCommandPath(realCommandPath: string): HomebrewOwnership | null;
/** @throws {never} */
export declare function parseHomebrewLatestVersion(infoJson: string, ownership: HomebrewOwnership): string | null;
export declare const resolvePackageManagedProviderMaintenance: (definition: PackageManagedProviderMaintenanceDefinition, context: ProviderMaintenanceResolutionContext | null) => Effect.Effect<ProviderMaintenanceCapabilities, never, ProviderMaintenanceResolverServices>;
/**
 * `brew upgrade` capabilities once the keg's prefix is confirmed by a `brew`
 * that reports it as its own. Version checks defer `brew info` until needed.
 * Null when no `brew` is found or it owns another prefix.
 */
export declare const resolveHomebrewProviderMaintenance: (input: {
    readonly provider: ProviderDriverKind;
    readonly packageName: string | null;
}, homebrew: HomebrewOwnership, context: ProviderMaintenanceResolutionContext) => Effect.Effect<ProviderMaintenanceCapabilities | null, never, ProviderMaintenanceResolverServices>;
/** @throws {never} */
export declare function makePackageManagedProviderMaintenanceResolver(definition: PackageManagedProviderMaintenanceDefinition): ProviderMaintenanceCapabilitiesResolver;
export declare const resolveProviderMaintenanceCapabilitiesEffect: (resolver: ProviderMaintenanceCapabilitiesResolver, options?: {
    readonly binaryPath?: string | null;
    readonly env?: NodeJS.ProcessEnv;
} | undefined) => Effect.Effect<ProviderMaintenanceCapabilities, never, ProviderMaintenanceResolverServices>;
export declare const makeCachedProviderMaintenanceResolution: (resolve: Effect.Effect<ProviderMaintenanceCapabilities, never, never>) => Effect.Effect<(options?: {
    readonly fresh?: boolean;
}) => Effect.Effect<ProviderMaintenanceCapabilities, never, never>, never, never>;
/** @throws {never} */
export declare function createProviderVersionAdvisory(input: {
    readonly driver: ProviderDriverKind;
    readonly currentVersion: string | null;
    readonly latestVersion?: string | null;
    readonly checkedAt?: string | null;
    readonly maintenanceCapabilities?: ProviderMaintenanceCapabilities;
}): ServerProviderVersionAdvisory;
/** @throws {never} */
export declare function latestProviderVersionCacheKeys(capabilities: ProviderMaintenanceCapabilities): ReadonlyArray<string>;
export declare const resolveLatestProviderVersion: (maintenanceCapabilities: ProviderMaintenanceCapabilities) => Effect.Effect<string | null, never, HttpClient.HttpClient | ProviderLatestVersions.ProviderLatestVersions>;
export declare const invalidateLatestProviderVersion: (maintenanceCapabilities: ProviderMaintenanceCapabilities) => Effect.Effect<void, never, ProviderLatestVersions.ProviderLatestVersions>;
export declare const enrichProviderSnapshotWithVersionAdvisory: (snapshot: ServerProvider, maintenanceCapabilities?: ProviderMaintenanceCapabilities | undefined, options?: {
    readonly enableProviderUpdateChecks: boolean | undefined;
} | undefined) => Effect.Effect<{
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
