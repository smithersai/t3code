import { type EnvironmentId, type OrchestrationV2ShellSnapshot, type ServerConfig, type ThreadId } from "@t3tools/contracts";
import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Option from "effect/Option";
import * as SubscriptionRef from "effect/SubscriptionRef";
import { AsyncResult, Atom } from "effect/reactivity";
import * as EnvironmentRegistry from "../connection/registry.vibe";
import * as EnvironmentSupervisor from "../connection/supervisor.ts";
import * as Persistence from "../platform/persistence.vibe";
import * as ShellSnapshotLoader from "./shellSnapshotHttp.vibe";
import { type EnvironmentCatalogState } from "./connections.vibe";
export type EnvironmentShellStatus = "empty" | "cached" | "synchronizing" | "live";
export interface EnvironmentShellState {
    readonly snapshot: Option.Option<OrchestrationV2ShellSnapshot>;
    readonly status: EnvironmentShellStatus;
    readonly error: Option.Option<string>;
    /**
     * Changes with each authoritative snapshot (not enrichment refreshes); 0 until the first one.
     * Thread families read for an older generation may miss changes from before the latest snapshot,
     * so they are read again.
     */
    readonly generation: number;
    /** Sequences of the thread removals applied since the latest authoritative snapshot. */
    readonly removedAt: ReadonlyMap<ThreadId, number>;
}
export declare const EMPTY_SHELL_STATE: EnvironmentShellState;
export declare const makeEnvironmentShellState: () => Effect.Effect<SubscriptionRef.SubscriptionRef<EnvironmentShellState>, never, Persistence.EnvironmentCacheStore | EnvironmentSupervisor.EnvironmentSupervisor | import("effect/Scope").Scope | ShellSnapshotLoader.ShellSnapshotLoader>;
export interface EnvironmentShellSummary {
    readonly hasSnapshot: boolean;
    readonly hasSynchronizingShell: boolean;
    readonly hasCachedShell: boolean;
    readonly hasLiveShell: boolean;
    readonly firstError: string | null;
}
/** @throws {never} */
export declare function createEnvironmentShellSummaryAtom(input: {
    readonly catalogValueAtom: Atom.Atom<EnvironmentCatalogState>;
    /** @throws {never} */
    readonly shellStateValueAtom: (environmentId: EnvironmentId) => Atom.Atom<EnvironmentShellState>;
}): Atom.Atom<EnvironmentShellSummary>;
/** @throws {never} */
export declare function createEnvironmentServerConfigsAtom(input: {
    readonly catalogValueAtom: Atom.Atom<EnvironmentCatalogState>;
    /** @throws {never} */
    readonly serverConfigValueAtom: (environmentId: EnvironmentId) => Atom.Atom<ServerConfig | null>;
}): Atom.Atom<ReadonlyMap<string & import("effect/Brand").Brand<"EnvironmentId">, {
    readonly environment: {
        readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
        readonly label: string;
        readonly platform: {
            readonly os: "darwin" | "linux" | "unknown" | "windows";
            readonly arch: "arm64" | "other" | "x64";
            readonly machine?: "cloud" | "desktop" | "laptop" | "linux" | "mac-mini" | "mac-studio" | "server" | undefined;
        };
        readonly serverVersion: string;
        readonly orchestrationProtocolVersion?: number;
        readonly capabilities: {
            readonly repositoryIdentity: boolean;
            readonly connectionProbe?: boolean;
            readonly attachmentUploads?: boolean;
            readonly questionAttachments?: boolean;
            readonly fileAttachments?: {
                readonly maxUploadBytes: number;
            };
            readonly pullRequests?: boolean;
            readonly pullRequestChecks?: boolean;
            readonly inlineMessageContext?: boolean;
            readonly requiredWorktreeBootstrap?: boolean;
            readonly threadSettlement?: boolean;
            readonly threadAutoSettlement?: boolean;
            readonly storageCleanup?: boolean;
            readonly storageCleanupRun?: boolean;
            readonly databaseStorage?: boolean;
            readonly otlpEndpointCheck?: boolean;
            readonly projectWorktreeCleanup?: boolean;
            readonly settledWorktreeCleanup?: boolean;
            readonly worktreesDirectory?: boolean;
            readonly threadAutoSettlementScope?: boolean;
            readonly threadRestartContinuation?: boolean;
            readonly projectSettingsOverrides?: boolean;
            readonly projectProviderInstanceOverrides?: boolean;
            readonly threadSnooze?: boolean;
            readonly environmentThemes?: boolean;
            readonly usageLimitSources?: boolean;
            readonly providerWorkspaceSnapshotsOnDemand?: boolean;
            readonly usagePriceOverrides?: boolean;
            readonly usageModelAliases?: boolean;
            readonly threadPinning?: boolean;
            readonly threadPinReorder?: boolean;
            readonly threadActiveReorder?: boolean;
            readonly threadAutoSettleOptOut?: boolean;
            readonly threadTitleRegeneration?: boolean;
            readonly threadVisitedTracking?: boolean;
            readonly threadPullRequestLinking?: boolean;
            readonly serverResolvedCommandContext?: boolean;
            readonly threadStop?: boolean;
            readonly localServerStop?: boolean;
            readonly threadPullRequests?: boolean;
            readonly threadPullRequestWatch?: boolean;
            readonly pullRequestStackActions?: boolean;
            readonly serverSelfUpdate?: "boot-service" | "desktop-managed" | "respawn";
            readonly serverInstallation?: {
                readonly kind: "bunx" | "npx" | "pnpm-dlx";
            } | {
                readonly kind: "npm-global";
                readonly prefix: string;
            } | undefined;
            readonly serverSelfUpdateProgress?: boolean;
            readonly serverUpdateThreadContinuation?: boolean;
            readonly agentActivityPublishing?: boolean;
            readonly projectCloneTracking?: boolean;
            readonly ignoredFileListing?: boolean;
            readonly environmentIcon?: boolean;
            readonly desktopAppUpdate?: boolean;
            readonly commandOutputStreaming?: boolean;
            readonly serverBrowser?: boolean;
            readonly peerLinks?: boolean;
            readonly mcpModeLimitHeader?: boolean;
            readonly linkFence?: boolean;
            readonly triage?: boolean;
        };
    };
    readonly auth: {
        readonly policy: "desktop-managed-local" | "loopback-browser" | "remote-reachable" | "unsafe-no-auth";
        readonly bootstrapMethods: readonly ("desktop-bootstrap" | "one-time-token")[];
        readonly sessionMethods: readonly ("bearer-access-token" | "browser-session-cookie" | "dpop-access-token")[];
        readonly sessionCookieName: string;
        readonly serverUpdateScope?: "environment:maintain";
    };
    readonly cwd: string;
    readonly keybindingsConfigPath: string;
    readonly keybindings: readonly {
        readonly command: "appearance.cycle" | "chat.find" | "chat.new" | "chat.newLocal" | "chat.newWithoutProject" | "commandPalette.toggle" | "composer.branch" | "composer.cycleHost" | "composer.decreaseEffort" | "composer.effort" | "composer.host" | "composer.increaseEffort" | "composer.mode" | "composer.previousWorktree" | "composer.sendAlternate" | "composer.sendAndNewThread" | "composer.sendBackground" | "composer.stash" | "composer.workspace" | "diff.toggle" | "editor.openFavorite" | "filePicker.toggle" | "modelPicker.jump.1" | "modelPicker.jump.2" | "modelPicker.jump.3" | "modelPicker.jump.4" | "modelPicker.jump.5" | "modelPicker.jump.6" | "modelPicker.jump.7" | "modelPicker.jump.8" | "modelPicker.jump.9" | "modelPicker.nextProvider" | "modelPicker.previousProvider" | "modelPicker.toggle" | "navigation.back" | "navigation.forward" | "preview.focusUrl" | "preview.refresh" | "preview.resetZoom" | "preview.toggle" | "preview.zoomIn" | "preview.zoomOut" | "projectSearch.toggle" | "pullRequest.copyNumber" | "rightPanel.close" | "rightPanel.new" | "rightPanel.toggle" | "rightPanel.toggleMaximized" | "sidebar.toggle" | "terminal.close" | "terminal.new" | "terminal.split" | "terminal.splitVertical" | "terminal.toggle" | "theme.select" | "themeEditor.toggle" | "thread.copyReference" | "thread.editQueuedMessage" | "thread.jump.1" | "thread.jump.2" | "thread.jump.3" | "thread.jump.4" | "thread.jump.5" | "thread.jump.6" | "thread.jump.7" | "thread.jump.8" | "thread.jump.9" | "thread.next" | "thread.pin" | "thread.previous" | "thread.settle" | "thread.steerQueuedMessage" | "thread.stop" | "thread.undo" | "threadPanel.toggle" | "usage.cost" | "usage.limits" | "usage.open" | "usage.period.day" | "usage.period.month" | "usage.period.quarter" | "usage.period.week" | "usage.tokens" | "view.reopenClosed" | `script.${string}.run`;
        readonly shortcut: {
            readonly key: string;
            readonly metaKey: boolean;
            readonly ctrlKey: boolean;
            readonly shiftKey: boolean;
            readonly altKey: boolean;
            readonly modKey: boolean;
        };
        readonly whenAst?: {
            readonly type: "identifier";
            readonly name: string;
        } | {
            readonly type: "not";
            readonly node: import("@t3tools/contracts").KeybindingWhenNode;
        } | {
            readonly type: "and";
            readonly left: import("@t3tools/contracts").KeybindingWhenNode;
            readonly right: import("@t3tools/contracts").KeybindingWhenNode;
        } | {
            readonly type: "or";
            readonly left: import("@t3tools/contracts").KeybindingWhenNode;
            readonly right: import("@t3tools/contracts").KeybindingWhenNode;
        } | undefined;
    }[];
    readonly issues: readonly ({
        readonly kind: "keybindings.malformed-config";
        readonly message: string;
    } | {
        readonly kind: "keybindings.invalid-entry";
        readonly message: string;
        readonly index: number;
    })[];
    readonly providers: readonly {
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
    }[];
    readonly availableEditors: readonly ("antigravity" | "aqua" | "clion" | "cursor" | "datagrip" | "dataspell" | "file-manager" | "goland" | "idea" | "kiro" | "phpstorm" | "pycharm" | "rider" | "rubymine" | "rustrover" | "trae" | "vscode" | "vscode-insiders" | "vscodium" | "webstorm" | "zed")[];
    readonly remoteOpenTargets?: readonly {
        readonly kind: "mdns" | "tailscale";
        readonly host: string;
        readonly username?: string;
    }[];
    readonly directEndpoints?: readonly {
        readonly kind: "lan" | "tailnet";
        readonly httpBaseUrl: string;
    }[];
    readonly observability: {
        readonly logsDirectoryPath: string;
        readonly localTracingEnabled: boolean;
        readonly otlpTracesUrl?: string | undefined;
        readonly otlpTracesSource?: "bootstrap" | "environment" | "settings" | undefined;
        readonly otlpTracesVariable?: string | undefined;
        readonly otlpTracesEnabled: boolean;
        readonly otlpMetricsUrl?: string | undefined;
        readonly otlpMetricsSource?: "bootstrap" | "environment" | "settings" | undefined;
        readonly otlpMetricsVariable?: string | undefined;
        readonly otlpMetricsEnabled: boolean;
        readonly otlpLogsUrl?: string | undefined;
        readonly otlpLogsSource?: "bootstrap" | "environment" | "settings" | undefined;
        readonly otlpLogsVariable?: string | undefined;
        readonly otlpLogsEnabled: boolean;
    };
    readonly settings: {
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
    };
    readonly shellResumeCompletionMarker?: boolean;
    readonly shellThreadFamilies?: boolean;
    readonly shellOlderSettled?: boolean;
    readonly shellRevealInFileManager?: boolean;
    readonly shellRevealInFileManagerKind?: "file-explorer" | "files" | "finder";
    readonly threadResumeCompletionMarker?: boolean;
    readonly threadSnapshotPagination?: boolean;
    readonly reasoningMessages?: boolean;
    readonly threadFind?: boolean;
    readonly threadFindProgressive?: boolean;
    readonly scratchWorkspaceRoot?: string;
    readonly newProjectsRoot?: string;
    readonly lastEventLoopStall?: {
        readonly detectedAt: string;
        readonly durationMs: number;
        readonly loadAverage?: number;
        readonly cpuCount: number;
    };
    readonly environmentThemes?: readonly {
        readonly version?: 1 | undefined;
        readonly name: string;
        readonly appearance: "dark" | "light";
        readonly canvas?: string | undefined;
        readonly accent?: string | undefined;
        readonly colors?: {
            readonly [x: string]: string;
        } | undefined;
        readonly variants?: {
            readonly light?: {
                readonly [x: string]: string;
            } | undefined;
            readonly dark?: {
                readonly [x: string]: string;
            } | undefined;
        } | undefined;
        readonly id: string;
    }[] | undefined;
    readonly usageLimitSources?: readonly {
        readonly id: string & import("effect/Brand").Brand<"UsageLimitSourceId">;
        readonly kind: "cliproxy";
        readonly label: string;
        readonly checkedAt: string;
        readonly accounts: readonly {
            readonly id: string;
            readonly driver: string & import("effect/Brand").Brand<"ProviderDriverKind">;
            readonly email?: string | undefined;
            readonly plan?: string | undefined;
            readonly workspaceId?: string | undefined;
            readonly usageLimits: {
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
            };
        }[];
        readonly error?: string | undefined;
    }[] | undefined;
}>>;
/** @throws {never} */
export declare function createEnvironmentShellAtoms<R, E>(runtime: Atom.AtomRuntime<EnvironmentRegistry.EnvironmentRegistry | Persistence.EnvironmentCacheStore | ShellSnapshotLoader.ShellSnapshotLoader | R, E>): {
    stateAtom: (arg: string & import("effect/Brand").Brand<"EnvironmentId">) => Atom.Atom<AsyncResult.AsyncResult<EnvironmentShellState, E | Cause.NoSuchElementError>>;
    stateValueAtom: (arg: string & import("effect/Brand").Brand<"EnvironmentId">) => Atom.Atom<EnvironmentShellState>;
    statusAtom: (arg: string & import("effect/Brand").Brand<"EnvironmentId">) => Atom.Atom<EnvironmentShellStatus>;
    hasSnapshotAtom: (arg: string & import("effect/Brand").Brand<"EnvironmentId">) => Atom.Atom<boolean>;
};
export * from "./models.vibe";
export * from "./shellCommands.vibe";
export * from "./shellReducer.vibe";
export * from "./shellPullRequests.vibe";
export * as ShellSnapshotLoader from "./shellSnapshotHttp.vibe";
export * from "./snapshots.vibe";
