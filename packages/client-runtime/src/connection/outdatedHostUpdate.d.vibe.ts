import { type EnvironmentId } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import * as HttpClient from "effect/http/HttpClient";
import * as Socket from "effect/socket/Socket";
import * as RelayEnvironmentDiscovery from "../relay/discovery.ts";
import * as ConnectionResolver from "./resolver.ts";
import * as EnvironmentRegistry from "./registry.vibe";
declare const OutdatedHostUpdateError_base: Schema.Class<OutdatedHostUpdateError, Schema.TaggedStruct<"OutdatedHostUpdateError", {
    readonly environmentId: Schema.String;
    readonly message: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class OutdatedHostUpdateError extends OutdatedHostUpdateError_base {
}
export type OutdatedHostUpdateStage = "downloading" | "installing" | "resuming";
export declare const describeOutdatedHost: (environmentId: EnvironmentId) => Effect.Effect<{
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
}, EnvironmentRegistry.EnvironmentNotRegisteredError | import("./model.vibe").ConnectionAttemptError, ConnectionResolver.ConnectionResolver | EnvironmentRegistry.EnvironmentRegistry>;
/**
 * The normal session refuses to open against such a host, so this opens a bare
 * socket and calls only the self-update RPCs, whose wire shape has not changed
 * across protocol versions.
 */
export declare const updateOutdatedHost: (environmentId: EnvironmentId, input: {
    readonly targetVersion: string;
    readonly continueRunningThreads?: boolean;
}, onStage: (stage: OutdatedHostUpdateStage) => Effect.Effect<void>) => Effect.Effect<{
    targetVersion: string;
} | {
    method: "boot-service" | "desktop-app" | "respawn";
    updateId?: string;
    desktopUpdateToken?: string;
    targetVersion: string;
}, import("../platform/persistence.vibe").ConnectionPersistenceError | import("@t3tools/contracts").EnvironmentAuthorizationError | EnvironmentRegistry.EnvironmentNotRegisteredError | OutdatedHostUpdateError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/contracts").ServerSelfUpdateError | import("../state/server.ts").ServerUpdateProgressIncompleteError | import("./model.vibe").ConnectionAttemptError, ConnectionResolver.ConnectionResolver | EnvironmentRegistry.EnvironmentRegistry | HttpClient.HttpClient | RelayEnvironmentDiscovery.RelayEnvironmentDiscovery | Socket.WebSocketConstructor>;
export {};
