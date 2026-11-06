import type { EnvironmentPresentation } from "@t3tools/client-runtime/connection";
import type { EnvironmentId } from "@t3tools/contracts";
import { Atom } from "effect/reactivity";
export declare const environmentPresentations: {
    presentationAtom: (arg: string & import("effect/Brand").Brand<"EnvironmentId">) => Atom.Atom<EnvironmentPresentation | null>;
    presentationsAtom: Atom.Atom<ReadonlyMap<string & import("effect/Brand").Brand<"EnvironmentId">, EnvironmentPresentation>>;
    serverConfigsAtom: Atom.Atom<ReadonlyMap<string & import("effect/Brand").Brand<"EnvironmentId">, import("@t3tools/client-runtime/connection").EnvironmentServerConfig>>;
    providersByEnvironmentAtom: Atom.Atom<ReadonlyMap<string & import("effect/Brand").Brand<"EnvironmentId">, readonly {
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
            readonly documentationUrl?: string | undefined;
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
        } | undefined;
        readonly enabled: boolean;
        readonly installed: boolean;
        readonly version: string | null;
        readonly installedVersion?: string | null | undefined;
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
                readonly createdAt?: string | undefined;
                readonly expiresAt?: string | undefined;
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
        }[] | undefined;
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
        }[] | undefined;
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
            readonly canInstallVersion?: boolean | undefined;
            readonly checkedAt: string | null;
            readonly message: string | null;
        } | undefined;
        readonly compatibilityAdvisory?: {
            readonly status: "broken" | "graceful" | "supported" | "unknown" | "unsupported";
            readonly latestVersionStatus?: "broken" | "graceful" | "supported" | "unknown" | "unsupported" | undefined;
            readonly message: string | null;
            readonly recommendedVersion: string | null;
            readonly recommendedRange: string | null;
        } | undefined;
        readonly updateState?: {
            readonly status: "failed" | "idle" | "queued" | "running" | "succeeded" | "unchanged";
            readonly startedAt: string | null;
            readonly finishedAt: string | null;
            readonly message: string | null;
            readonly output: string | null;
        } | undefined;
    }[]>>;
    presentationsWithProvidersAtom: Atom.Atom<ReadonlyMap<string & import("effect/Brand").Brand<"EnvironmentId">, import("@t3tools/client-runtime/state/presentation").EnvironmentPresentationWithProviders>>;
};
export declare function useEnvironmentPresentation(environmentId: EnvironmentId | null): {
    isReady: boolean;
    presentation: EnvironmentPresentation | null;
};
