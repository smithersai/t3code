import type { EnvironmentId, ServerSelfUpdateInput } from "@t3tools/contracts";
import * as Cause from "effect/Cause";
import type * as HttpClient from "effect/http/HttpClient";
import type { Atom } from "effect/reactivity";
import type * as Socket from "effect/socket/Socket";
import type * as ConnectionResolver from "../connection/resolver.ts";
import type * as EnvironmentRegistry from "../connection/registry.vibe";
import type * as RelayEnvironmentDiscovery from "../relay/discovery.ts";
export interface OutdatedServerUpdateTarget {
    readonly environmentId: EnvironmentId;
    readonly input: ServerSelfUpdateInput;
    /** From the host descriptor when known; an outdated host never delivers a server config. */
    readonly fromVersion?: string;
}
/** @throws {never} */
export declare function createOutdatedServerDescriptionCommand<E>(runtime: Atom.AtomRuntime<EnvironmentRegistry.EnvironmentRegistry | ConnectionResolver.ConnectionResolver, E>): import("./runtime.ts").AtomCommand<string & import("effect/Brand").Brand<"EnvironmentId">, {
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
}, E | EnvironmentRegistry.EnvironmentNotRegisteredError | Cause.TimeoutError | import("../connection/model.vibe").ConnectionAttemptError>;
/** @throws {never} */
export declare function createOutdatedServerUpdateCommand<E>(runtime: Atom.AtomRuntime<EnvironmentRegistry.EnvironmentRegistry | ConnectionResolver.ConnectionResolver | RelayEnvironmentDiscovery.RelayEnvironmentDiscovery | Socket.WebSocketConstructor | HttpClient.HttpClient, E>): import("./runtime.ts").AtomCommand<OutdatedServerUpdateTarget, {
    targetVersion: string;
} | {
    method: "boot-service" | "desktop-app" | "respawn";
    updateId?: string;
    desktopUpdateToken?: string;
    targetVersion: string;
}, E | import("../platform/persistence.vibe").ConnectionPersistenceError | import("@t3tools/contracts").EnvironmentAuthorizationError | EnvironmentRegistry.EnvironmentNotRegisteredError | import("../connection/outdatedHostUpdate.vibe").OutdatedHostUpdateError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/contracts").ServerSelfUpdateError | import("./server.ts").ServerUpdateProgressIncompleteError | import("../connection/model.vibe").ConnectionAttemptError>;
