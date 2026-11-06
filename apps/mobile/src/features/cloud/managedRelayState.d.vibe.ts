import type { EnvironmentId } from "@t3tools/contracts";
import type { RelayClientEnvironmentRecord } from "@t3tools/contracts/relay";
import { AsyncResult, Atom } from "effect/reactivity";
export declare const managedRelayQueryManager: {
    environmentsAtom: (arg: string) => Atom.Atom<AsyncResult.AsyncResult<readonly {
        readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
        readonly label: string;
        readonly endpoint: {
            readonly httpBaseUrl: string;
            readonly wsBaseUrl: string;
            readonly providerKind: "cloudflare_tunnel" | "manual" | "t3_relay";
        };
        readonly linkedAt: string;
    }[], import("../../../node_modules/@t3tools/client-runtime/src/relay/managedRelay.ts").ManagedRelayAccessTokenScopesUnexpectedError | import("../../../node_modules/@t3tools/client-runtime/src/relay/managedRelay.ts").ManagedRelayDpopKeyLoadError | import("../../../node_modules/@t3tools/client-runtime/src/relay/managedRelay.ts").ManagedRelayRequestFailedError | import("../../../node_modules/@t3tools/client-runtime/src/relay/managedRelay.ts").ManagedRelayRequestProofCreationError | import("../../../node_modules/@t3tools/client-runtime/src/relay/managedRelay.ts").ManagedRelayRequestTimeoutError | import("@t3tools/client-runtime/relay").ManagedRelaySessionError | import("../../../node_modules/@t3tools/client-runtime/src/relay/managedRelay.ts").ManagedRelayTokenProofCreationError | import("../../../node_modules/@t3tools/client-runtime/src/relay/managedRelay.ts").ManagedRelayUrlInvalidError>>;
    devicesAtom: (arg: string) => Atom.Atom<AsyncResult.AsyncResult<readonly {
        readonly deviceId: string;
        readonly label: string;
        readonly platform: "android" | "ios";
        readonly iosMajorVersion: number | null;
        readonly androidApiLevel?: number | null | undefined;
        readonly appVersion: string | null;
        readonly notifications: {
            readonly enabled: boolean;
            readonly notifyOnApproval: boolean;
            readonly notifyOnInput: boolean;
            readonly notifyOnCompletion: boolean;
            readonly notifyOnFailure: boolean;
        };
        readonly liveActivities: {
            readonly enabled: boolean;
        };
        readonly updatedAt: string;
    }[], import("../../../node_modules/@t3tools/client-runtime/src/relay/managedRelay.ts").ManagedRelayAccessTokenScopesUnexpectedError | import("../../../node_modules/@t3tools/client-runtime/src/relay/managedRelay.ts").ManagedRelayDpopKeyLoadError | import("../../../node_modules/@t3tools/client-runtime/src/relay/managedRelay.ts").ManagedRelayRequestFailedError | import("../../../node_modules/@t3tools/client-runtime/src/relay/managedRelay.ts").ManagedRelayRequestProofCreationError | import("../../../node_modules/@t3tools/client-runtime/src/relay/managedRelay.ts").ManagedRelayRequestTimeoutError | import("@t3tools/client-runtime/relay").ManagedRelaySessionError | import("../../../node_modules/@t3tools/client-runtime/src/relay/managedRelay.ts").ManagedRelayTokenProofCreationError | import("../../../node_modules/@t3tools/client-runtime/src/relay/managedRelay.ts").ManagedRelayUrlInvalidError>>;
    environmentStatusAtom: (input: {
        readonly accountId: string;
        readonly environment: RelayClientEnvironmentRecord;
    }) => Atom.Atom<AsyncResult.AsyncResult<{
        readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
        readonly endpoint: {
            readonly httpBaseUrl: string;
            readonly wsBaseUrl: string;
            readonly providerKind: "cloudflare_tunnel" | "manual" | "t3_relay";
        };
        readonly status: "offline" | "online";
        readonly checkedAt: string;
        readonly descriptor?: {
            readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
            readonly label: string;
            readonly platform: {
                readonly os: "darwin" | "linux" | "unknown" | "windows";
                readonly arch: "arm64" | "other" | "x64";
                readonly machine?: "cloud" | "desktop" | "laptop" | "linux" | "mac-mini" | "mac-studio" | "server" | undefined;
            };
            readonly serverVersion: string;
            readonly orchestrationProtocolVersion?: number | undefined;
            readonly capabilities: {
                readonly repositoryIdentity: boolean;
                readonly connectionProbe?: boolean | undefined;
                readonly attachmentUploads?: boolean | undefined;
                readonly questionAttachments?: boolean | undefined;
                readonly fileAttachments?: {
                    readonly maxUploadBytes: number;
                } | undefined;
                readonly pullRequests?: boolean | undefined;
                readonly pullRequestChecks?: boolean | undefined;
                readonly inlineMessageContext?: boolean | undefined;
                readonly requiredWorktreeBootstrap?: boolean | undefined;
                readonly threadSettlement?: boolean | undefined;
                readonly threadAutoSettlement?: boolean | undefined;
                readonly storageCleanup?: boolean | undefined;
                readonly storageCleanupRun?: boolean | undefined;
                readonly databaseStorage?: boolean | undefined;
                readonly otlpEndpointCheck?: boolean | undefined;
                readonly projectWorktreeCleanup?: boolean | undefined;
                readonly settledWorktreeCleanup?: boolean | undefined;
                readonly worktreesDirectory?: boolean | undefined;
                readonly threadAutoSettlementScope?: boolean | undefined;
                readonly threadRestartContinuation?: boolean | undefined;
                readonly projectSettingsOverrides?: boolean | undefined;
                readonly projectProviderInstanceOverrides?: boolean | undefined;
                readonly threadSnooze?: boolean | undefined;
                readonly environmentThemes?: boolean | undefined;
                readonly usageLimitSources?: boolean | undefined;
                readonly providerWorkspaceSnapshotsOnDemand?: boolean | undefined;
                readonly usagePriceOverrides?: boolean | undefined;
                readonly usageModelAliases?: boolean | undefined;
                readonly threadPinning?: boolean | undefined;
                readonly threadPinReorder?: boolean | undefined;
                readonly threadActiveReorder?: boolean | undefined;
                readonly threadAutoSettleOptOut?: boolean | undefined;
                readonly threadTitleRegeneration?: boolean | undefined;
                readonly threadVisitedTracking?: boolean | undefined;
                readonly threadPullRequestLinking?: boolean | undefined;
                readonly serverResolvedCommandContext?: boolean | undefined;
                readonly threadStop?: boolean | undefined;
                readonly localServerStop?: boolean | undefined;
                readonly threadPullRequests?: boolean | undefined;
                readonly threadPullRequestWatch?: boolean | undefined;
                readonly pullRequestStackActions?: boolean | undefined;
                readonly serverSelfUpdate?: "boot-service" | "desktop-managed" | "respawn" | undefined;
                readonly serverInstallation?: {
                    readonly kind: "bunx" | "npx" | "pnpm-dlx";
                } | {
                    readonly kind: "npm-global";
                    readonly prefix: string;
                } | undefined;
                readonly serverSelfUpdateProgress?: boolean | undefined;
                readonly serverUpdateThreadContinuation?: boolean | undefined;
                readonly agentActivityPublishing?: boolean | undefined;
                readonly projectCloneTracking?: boolean | undefined;
                readonly ignoredFileListing?: boolean | undefined;
                readonly environmentIcon?: boolean | undefined;
                readonly desktopAppUpdate?: boolean | undefined;
                readonly commandOutputStreaming?: boolean | undefined;
                readonly serverBrowser?: boolean | undefined;
                readonly peerLinks?: boolean | undefined;
                readonly mcpModeLimitHeader?: boolean | undefined;
                readonly linkFence?: boolean | undefined;
                readonly triage?: boolean | undefined;
            };
        } | undefined;
        readonly error?: string | undefined;
        readonly endpointFailure?: "dns" | "invalid_response" | "origin_unreachable" | "refused" | "timeout" | "tls" | "tunnel_down" | "unknown" | undefined;
        readonly endpointStatus?: number | undefined;
        readonly offlineReason?: "tunnel_released" | undefined;
        readonly traceId?: string | undefined;
    }, import("../../../node_modules/@t3tools/client-runtime/src/relay/managedRelay.ts").ManagedRelayAccessTokenScopesUnexpectedError | import("../../../node_modules/@t3tools/client-runtime/src/relay/managedRelay.ts").ManagedRelayDpopKeyLoadError | import("../../../node_modules/@t3tools/client-runtime/src/relay/managedRelay.ts").ManagedRelayRequestFailedError | import("../../../node_modules/@t3tools/client-runtime/src/relay/managedRelay.ts").ManagedRelayRequestProofCreationError | import("../../../node_modules/@t3tools/client-runtime/src/relay/managedRelay.ts").ManagedRelayRequestTimeoutError | import("@t3tools/client-runtime/relay").ManagedRelaySessionError | import("@t3tools/client-runtime/relay").ManagedRelaySnapshotError | import("../../../node_modules/@t3tools/client-runtime/src/relay/managedRelay.ts").ManagedRelayTokenProofCreationError | import("../../../node_modules/@t3tools/client-runtime/src/relay/managedRelay.ts").ManagedRelayUrlInvalidError>>;
    refreshEnvironments(registry: import("effect/reactivity/AtomRegistry").AtomRegistry, accountId: string): void;
    refreshDevices(registry: import("effect/reactivity/AtomRegistry").AtomRegistry, accountId: string): void;
    refreshEnvironmentStatus(registry: import("effect/reactivity/AtomRegistry").AtomRegistry, input: {
        readonly accountId: string;
        readonly environment: RelayClientEnvironmentRecord;
    }): void;
};
export declare const deregisterManagedRelayEnvironmentCommand: import("@t3tools/client-runtime/state/runtime").AtomCommand<{
    readonly accountId: string;
    readonly environmentId: EnvironmentId;
}, undefined, import("../../../node_modules/@t3tools/client-runtime/src/relay/managedRelay.ts").ManagedRelayAccessTokenScopesUnexpectedError | import("../../../node_modules/@t3tools/client-runtime/src/relay/managedRelay.ts").ManagedRelayDpopKeyLoadError | import("../../../node_modules/@t3tools/client-runtime/src/relay/managedRelay.ts").ManagedRelayRequestFailedError | import("../../../node_modules/@t3tools/client-runtime/src/relay/managedRelay.ts").ManagedRelayRequestProofCreationError | import("../../../node_modules/@t3tools/client-runtime/src/relay/managedRelay.ts").ManagedRelayRequestTimeoutError | import("@t3tools/client-runtime/relay").ManagedRelaySessionError | import("../../../node_modules/@t3tools/client-runtime/src/relay/managedRelay.ts").ManagedRelayTokenProofCreationError | import("../../../node_modules/@t3tools/client-runtime/src/relay/managedRelay.ts").ManagedRelayUrlInvalidError>;
export declare function useManagedRelayEnvironments(): {
    data: readonly {
        readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
        readonly label: string;
        readonly endpoint: {
            readonly httpBaseUrl: string;
            readonly wsBaseUrl: string;
            readonly providerKind: "cloudflare_tunnel" | "manual" | "t3_relay";
        };
        readonly linkedAt: string;
    }[] | null;
    error: string | null;
    errorTraceId: string | null;
    isPending: boolean;
    accountId: string | null;
    refresh: () => void;
};
export declare function refreshManagedRelayEnvironments(): void;
