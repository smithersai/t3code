import * as Context from "effect/Context";
import * as Schema from "effect/Schema";
import * as HttpApi from "effect/http-api/HttpApi";
import * as HttpApiEndpoint from "effect/http-api/HttpApiEndpoint";
import * as HttpApiGroup from "effect/http-api/HttpApiGroup";
import * as HttpApiMiddleware from "effect/http-api/HttpApiMiddleware";
import * as HttpApiSchema from "effect/http-api/HttpApiSchema";
import * as HttpApiSecurity from "effect/http-api/HttpApiSecurity";
export declare const RelayAgentAwarenessPlatform: Schema.Literals<readonly ["ios", "android"]>;
export type RelayAgentAwarenessPlatform = typeof RelayAgentAwarenessPlatform.Type;
export declare const RelayAgentAwarenessPhase: Schema.Literals<readonly ["starting", "running", "waiting_for_approval", "waiting_for_input", "completed", "failed", "stale"]>;
export type RelayAgentAwarenessPhase = typeof RelayAgentAwarenessPhase.Type;
export declare const RelayAgentAwarenessPreferences: Schema.Struct<{
    readonly liveActivitiesEnabled: Schema.Boolean;
    readonly notificationsEnabled: Schema.Boolean;
    readonly notifyOnApproval: Schema.Boolean;
    readonly notifyOnInput: Schema.Boolean;
    readonly notifyOnCompletion: Schema.Boolean;
    readonly notifyOnFailure: Schema.Boolean;
}>;
export type RelayAgentAwarenessPreferences = typeof RelayAgentAwarenessPreferences.Type;
export declare const RelayApnsEnvironment: Schema.Literals<readonly ["sandbox", "production"]>;
export type RelayApnsEnvironment = typeof RelayApnsEnvironment.Type;
export declare const RelayDeviceRegistrationRequest: Schema.Struct<{
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly platform: Schema.Literals<readonly ["ios", "android"]>;
    readonly iosMajorVersion: Schema.optional<Schema.Int>;
    readonly androidApiLevel: Schema.optional<Schema.Int>;
    readonly appVersion: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly bundleId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly apsEnvironment: Schema.optional<Schema.Literals<readonly ["sandbox", "production"]>>;
    readonly pushToken: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly pushToStartToken: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly preferences: Schema.Struct<{
        readonly liveActivitiesEnabled: Schema.Boolean;
        readonly notificationsEnabled: Schema.Boolean;
        readonly notifyOnApproval: Schema.Boolean;
        readonly notifyOnInput: Schema.Boolean;
        readonly notifyOnCompletion: Schema.Boolean;
        readonly notifyOnFailure: Schema.Boolean;
    }>;
}>;
export type RelayDeviceRegistrationRequest = typeof RelayDeviceRegistrationRequest.Type;
export declare const RelayClientDeviceRecord: Schema.Struct<{
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly platform: Schema.Literals<readonly ["ios", "android"]>;
    readonly iosMajorVersion: Schema.NullOr<Schema.Int>;
    readonly androidApiLevel: Schema.optional<Schema.NullOr<Schema.Int>>;
    readonly appVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly notifications: Schema.Struct<{
        readonly enabled: Schema.Boolean;
        readonly notifyOnApproval: Schema.Boolean;
        readonly notifyOnInput: Schema.Boolean;
        readonly notifyOnCompletion: Schema.Boolean;
        readonly notifyOnFailure: Schema.Boolean;
    }>;
    readonly liveActivities: Schema.Struct<{
        readonly enabled: Schema.Boolean;
    }>;
    readonly updatedAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type RelayClientDeviceRecord = typeof RelayClientDeviceRecord.Type;
export declare const RelayListDevicesResponse: Schema.Struct<{
    readonly devices: Schema.$Array<Schema.Struct<{
        readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly platform: Schema.Literals<readonly ["ios", "android"]>;
        readonly iosMajorVersion: Schema.NullOr<Schema.Int>;
        readonly androidApiLevel: Schema.optional<Schema.NullOr<Schema.Int>>;
        readonly appVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly notifications: Schema.Struct<{
            readonly enabled: Schema.Boolean;
            readonly notifyOnApproval: Schema.Boolean;
            readonly notifyOnInput: Schema.Boolean;
            readonly notifyOnCompletion: Schema.Boolean;
            readonly notifyOnFailure: Schema.Boolean;
        }>;
        readonly liveActivities: Schema.Struct<{
            readonly enabled: Schema.Boolean;
        }>;
        readonly updatedAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
}>;
export type RelayListDevicesResponse = typeof RelayListDevicesResponse.Type;
export declare const RelayListDevicesResponseV1: Schema.Struct<{
    readonly devices: Schema.$Array<Schema.Struct<{
        readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly androidApiLevel: Schema.optional<Schema.NullOr<Schema.Int>>;
        readonly appVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly notifications: Schema.Struct<{
            readonly enabled: Schema.Boolean;
            readonly notifyOnApproval: Schema.Boolean;
            readonly notifyOnInput: Schema.Boolean;
            readonly notifyOnCompletion: Schema.Boolean;
            readonly notifyOnFailure: Schema.Boolean;
        }>;
        readonly liveActivities: Schema.Struct<{
            readonly enabled: Schema.Boolean;
        }>;
        readonly updatedAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly platform: Schema.Literal<"ios">;
        readonly iosMajorVersion: Schema.Int;
    }>>;
}>;
export declare const RelayLiveActivityRegistrationRequest: Schema.Struct<{
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly activityPushToken: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type RelayLiveActivityRegistrationRequest = typeof RelayLiveActivityRegistrationRequest.Type;
export declare const RelayDeviceUnregistrationParams: Schema.Struct<{
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type RelayDeviceUnregistrationParams = typeof RelayDeviceUnregistrationParams.Type;
export declare const RelayAgentActivityState: Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly projectTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly threadTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly phase: Schema.Literals<readonly ["starting", "running", "waiting_for_approval", "waiting_for_input", "completed", "failed", "stale"]>;
    readonly headline: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly detail: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly modelTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly updatedAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly deepLink: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type RelayAgentActivityState = typeof RelayAgentActivityState.Type;
export declare const RelayAgentActivityAggregateRow: Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly projectTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly threadTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly modelTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly phase: Schema.Literals<readonly ["starting", "running", "waiting_for_approval", "waiting_for_input", "completed", "failed", "stale"]>;
    readonly status: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly updatedAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly deepLink: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type RelayAgentActivityAggregateRow = typeof RelayAgentActivityAggregateRow.Type;
export declare const RelayAgentActivityAggregateState: Schema.Struct<{
    readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly subtitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly activeCount: Schema.Int;
    readonly updatedAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly activities: Schema.$Array<Schema.Struct<{
        readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly projectTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly threadTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly modelTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly phase: Schema.Literals<readonly ["starting", "running", "waiting_for_approval", "waiting_for_input", "completed", "failed", "stale"]>;
        readonly status: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly updatedAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly deepLink: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
}>;
export type RelayAgentActivityAggregateState = typeof RelayAgentActivityAggregateState.Type;
export declare const RelayManagedEndpointProviderKind: Schema.Literals<readonly ["manual", "cloudflare_tunnel", "t3_relay"]>;
export type RelayManagedEndpointProviderKind = typeof RelayManagedEndpointProviderKind.Type;
export declare const RelayManagedEndpoint: Schema.Struct<{
    readonly httpBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly wsBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly providerKind: Schema.Literals<readonly ["manual", "cloudflare_tunnel", "t3_relay"]>;
}>;
export type RelayManagedEndpoint = typeof RelayManagedEndpoint.Type;
export declare const RelayManagedEndpointOrigin: Schema.Struct<{
    readonly localHttpHost: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly localHttpPort: Schema.Int;
}>;
export type RelayManagedEndpointOrigin = typeof RelayManagedEndpointOrigin.Type;
export declare const RelayManagedEndpointRuntimeConfig: Schema.Struct<{
    readonly providerKind: Schema.Literals<readonly ["manual", "cloudflare_tunnel", "t3_relay"]>;
    readonly connectorToken: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly tunnelId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly tunnelName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type RelayManagedEndpointRuntimeConfig = typeof RelayManagedEndpointRuntimeConfig.Type;
export declare const RelayManagedEndpointRecoveryRequest: Schema.Struct<{
    readonly cloudUserId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly origin: Schema.Struct<{
        readonly localHttpHost: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly localHttpPort: Schema.Int;
    }>;
    readonly proof: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type RelayManagedEndpointRecoveryRequest = typeof RelayManagedEndpointRecoveryRequest.Type;
export declare const RelayManagedEndpointRecoveryRegistrationRequest: Schema.Struct<{
    readonly cloudUserId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly tunnelId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly origin: Schema.Struct<{
        readonly localHttpHost: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly localHttpPort: Schema.Int;
    }>;
    readonly proof: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type RelayManagedEndpointRecoveryRegistrationRequest = typeof RelayManagedEndpointRecoveryRegistrationRequest.Type;
export declare const RelayManagedEndpointRecoveryRegistrationResponse: Schema.Struct<{
    readonly status: Schema.Literals<readonly ["ready", "recovery_required"]>;
}>;
export type RelayManagedEndpointRecoveryRegistrationResponse = typeof RelayManagedEndpointRecoveryRegistrationResponse.Type;
export declare const RelayManagedEndpointRecoveryResponse: Schema.Struct<{
    readonly endpoint: Schema.Struct<{
        readonly httpBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly wsBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly providerKind: Schema.Literals<readonly ["manual", "cloudflare_tunnel", "t3_relay"]>;
    }>;
    readonly endpointRuntime: Schema.Struct<{
        readonly providerKind: Schema.Literals<readonly ["manual", "cloudflare_tunnel", "t3_relay"]>;
        readonly connectorToken: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly tunnelId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly tunnelName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>;
export type RelayManagedEndpointRecoveryResponse = typeof RelayManagedEndpointRecoveryResponse.Type;
export declare const RelayLinkProofRequest: Schema.Struct<{
    readonly challenge: Schema.String;
    readonly relayIssuer: Schema.String;
    readonly endpoint: Schema.Struct<{
        readonly httpBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly wsBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly providerKind: Schema.Literals<readonly ["manual", "cloudflare_tunnel", "t3_relay"]>;
    }>;
    readonly origin: Schema.Struct<{
        readonly localHttpHost: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly localHttpPort: Schema.Int;
    }>;
}>;
export type RelayLinkProofRequest = typeof RelayLinkProofRequest.Type;
export declare const RelayEnvironmentConfigRequest: Schema.Struct<{
    readonly relayUrl: Schema.String;
    readonly relayIssuer: Schema.optional<Schema.String>;
    readonly cloudUserId: Schema.String;
    readonly environmentCredential: Schema.String;
    readonly cloudMintPublicKey: Schema.String;
    readonly endpointRuntime: Schema.NullOr<Schema.Struct<{
        readonly providerKind: Schema.Literals<readonly ["manual", "cloudflare_tunnel", "t3_relay"]>;
        readonly connectorToken: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly tunnelId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly tunnelName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
}>;
export type RelayEnvironmentConfigRequest = typeof RelayEnvironmentConfigRequest.Type;
export declare const RelayManagedEndpointRecoveryProofPayload: Schema.Union<readonly [Schema.Struct<{
    readonly iss: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly aud: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly sub: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly jti: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly iat: Schema.Int;
    readonly exp: Schema.Int;
    readonly action: Schema.Literal<"register">;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly cloudUserId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly tunnelId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly origin: Schema.Struct<{
        readonly localHttpHost: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly localHttpPort: Schema.Int;
    }>;
}>, Schema.Struct<{
    readonly iss: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly aud: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly sub: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly jti: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly iat: Schema.Int;
    readonly exp: Schema.Int;
    readonly action: Schema.Literal<"recover">;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly cloudUserId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly origin: Schema.Struct<{
        readonly localHttpHost: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly localHttpPort: Schema.Int;
    }>;
}>]>;
export type RelayManagedEndpointRecoveryProofPayload = typeof RelayManagedEndpointRecoveryProofPayload.Type;
export declare const RelayAgentActivityPublishProofPayload: Schema.Struct<{
    readonly iss: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly aud: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly sub: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly jti: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly iat: Schema.Int;
    readonly exp: Schema.Int;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly state: Schema.NullOr<Schema.Struct<{
        readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly projectTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly threadTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly phase: Schema.Literals<readonly ["starting", "running", "waiting_for_approval", "waiting_for_input", "completed", "failed", "stale"]>;
        readonly headline: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly detail: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly modelTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly updatedAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly deepLink: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
}>;
export type RelayAgentActivityPublishProofPayload = typeof RelayAgentActivityPublishProofPayload.Type;
export type RelayAgentActivityPublishProof = string;
export declare const RelayAgentActivityPublishRequest: Schema.Struct<{
    readonly state: Schema.NullOr<Schema.Struct<{
        readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly projectTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly threadTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly phase: Schema.Literals<readonly ["starting", "running", "waiting_for_approval", "waiting_for_input", "completed", "failed", "stale"]>;
        readonly headline: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly detail: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly modelTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly updatedAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly deepLink: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
    readonly proof: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type RelayAgentActivityPublishRequest = typeof RelayAgentActivityPublishRequest.Type;
export declare const RelayEnvironmentLinkScope: Schema.Literals<readonly ["agent_activity_notifications", "managed_tunnels"]>;
export type RelayEnvironmentLinkScope = typeof RelayEnvironmentLinkScope.Type;
export declare const RelayEnvironmentLinkProofPayload: Schema.Struct<{
    readonly iss: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly aud: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly sub: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly jti: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly iat: Schema.Int;
    readonly exp: Schema.Int;
    readonly challenge: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly descriptor: Schema.Struct<{
        readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly platform: Schema.Struct<{
            readonly os: Schema.Literals<readonly ["darwin", "linux", "windows", "unknown"]>;
            readonly arch: Schema.Literals<readonly ["arm64", "x64", "other"]>;
            readonly machine: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Literals<readonly ["server", "cloud", "linux", "desktop", "laptop", "mac-mini", "mac-studio"]>>, Schema.Unknown, never, never>>;
        }>;
        readonly serverVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly orchestrationProtocolVersion: Schema.optionalKey<Schema.Int>;
        readonly capabilities: Schema.Struct<{
            readonly repositoryIdentity: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly connectionProbe: Schema.optionalKey<Schema.Boolean>;
            readonly attachmentUploads: Schema.optionalKey<Schema.Boolean>;
            readonly questionAttachments: Schema.optionalKey<Schema.Boolean>;
            readonly fileAttachments: Schema.optionalKey<Schema.Struct<{
                readonly maxUploadBytes: Schema.Int;
            }>>;
            readonly pullRequests: Schema.optionalKey<Schema.Boolean>;
            readonly pullRequestChecks: Schema.optionalKey<Schema.Boolean>;
            readonly inlineMessageContext: Schema.optionalKey<Schema.Boolean>;
            readonly requiredWorktreeBootstrap: Schema.optionalKey<Schema.Boolean>;
            readonly threadSettlement: Schema.optionalKey<Schema.Boolean>;
            readonly threadAutoSettlement: Schema.optionalKey<Schema.Boolean>;
            readonly storageCleanup: Schema.optionalKey<Schema.Boolean>;
            readonly storageCleanupRun: Schema.optionalKey<Schema.Boolean>;
            readonly databaseStorage: Schema.optionalKey<Schema.Boolean>;
            readonly otlpEndpointCheck: Schema.optionalKey<Schema.Boolean>;
            readonly projectWorktreeCleanup: Schema.optionalKey<Schema.Boolean>;
            readonly settledWorktreeCleanup: Schema.optionalKey<Schema.Boolean>;
            readonly worktreesDirectory: Schema.optionalKey<Schema.Boolean>;
            readonly threadAutoSettlementScope: Schema.optionalKey<Schema.Boolean>;
            readonly threadRestartContinuation: Schema.optionalKey<Schema.Boolean>;
            readonly projectSettingsOverrides: Schema.optionalKey<Schema.Boolean>;
            readonly projectProviderInstanceOverrides: Schema.optionalKey<Schema.Boolean>;
            readonly threadSnooze: Schema.optionalKey<Schema.Boolean>;
            readonly environmentThemes: Schema.optionalKey<Schema.Boolean>;
            readonly usageLimitSources: Schema.optionalKey<Schema.Boolean>;
            readonly providerWorkspaceSnapshotsOnDemand: Schema.optionalKey<Schema.Boolean>;
            readonly usagePriceOverrides: Schema.optionalKey<Schema.Boolean>;
            readonly usageModelAliases: Schema.optionalKey<Schema.Boolean>;
            readonly threadPinning: Schema.optionalKey<Schema.Boolean>;
            readonly threadPinReorder: Schema.optionalKey<Schema.Boolean>;
            readonly threadActiveReorder: Schema.optionalKey<Schema.Boolean>;
            readonly threadAutoSettleOptOut: Schema.optionalKey<Schema.Boolean>;
            readonly threadTitleRegeneration: Schema.optionalKey<Schema.Boolean>;
            readonly threadVisitedTracking: Schema.optionalKey<Schema.Boolean>;
            readonly threadPullRequestLinking: Schema.optionalKey<Schema.Boolean>;
            readonly serverResolvedCommandContext: Schema.optionalKey<Schema.Boolean>;
            readonly threadStop: Schema.optionalKey<Schema.Boolean>;
            readonly localServerStop: Schema.optionalKey<Schema.Boolean>;
            readonly threadPullRequests: Schema.optionalKey<Schema.Boolean>;
            readonly threadPullRequestWatch: Schema.optionalKey<Schema.Boolean>;
            readonly pullRequestStackActions: Schema.optionalKey<Schema.Boolean>;
            readonly serverSelfUpdate: Schema.optionalKey<Schema.Literals<readonly ["boot-service", "respawn", "desktop-managed"]>>;
            readonly serverInstallation: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Union<readonly [Schema.Struct<{
                readonly kind: Schema.Literals<readonly ["npx", "pnpm-dlx", "bunx"]>;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"npm-global">;
                readonly prefix: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>>, Schema.Unknown, never, never>>;
            readonly serverSelfUpdateProgress: Schema.optionalKey<Schema.Boolean>;
            readonly serverUpdateThreadContinuation: Schema.optionalKey<Schema.Boolean>;
            readonly agentActivityPublishing: Schema.optionalKey<Schema.Boolean>;
            readonly projectCloneTracking: Schema.optionalKey<Schema.Boolean>;
            readonly ignoredFileListing: Schema.optionalKey<Schema.Boolean>;
            readonly environmentIcon: Schema.optionalKey<Schema.Boolean>;
            readonly desktopAppUpdate: Schema.optionalKey<Schema.Boolean>;
            readonly commandOutputStreaming: Schema.optionalKey<Schema.Boolean>;
            readonly serverBrowser: Schema.optionalKey<Schema.Boolean>;
            readonly peerLinks: Schema.optionalKey<Schema.Boolean>;
            readonly mcpModeLimitHeader: Schema.optionalKey<Schema.Boolean>;
            readonly linkFence: Schema.optionalKey<Schema.Boolean>;
            readonly triage: Schema.optionalKey<Schema.Boolean>;
        }>;
    }>;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly environmentPublicKey: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly endpoint: Schema.Struct<{
        readonly httpBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly wsBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly providerKind: Schema.Literals<readonly ["manual", "cloudflare_tunnel", "t3_relay"]>;
    }>;
    readonly origin: Schema.Struct<{
        readonly localHttpHost: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly localHttpPort: Schema.Int;
    }>;
    readonly scopes: Schema.$Array<Schema.Literals<readonly ["agent_activity_notifications", "managed_tunnels"]>>;
}>;
export type RelayEnvironmentLinkProofPayload = typeof RelayEnvironmentLinkProofPayload.Type;
export declare const RelayEnvironmentLinkProof: Schema.decodeTo<Schema.String, Schema.String, never, never>;
export type RelayEnvironmentLinkProof = typeof RelayEnvironmentLinkProof.Type;
export declare const RelayEnvironmentLinkChallengeRequest: Schema.Struct<{
    readonly notificationsEnabled: Schema.Boolean;
    readonly liveActivitiesEnabled: Schema.Boolean;
    readonly managedTunnelsEnabled: Schema.Boolean;
}>;
export type RelayEnvironmentLinkChallengeRequest = typeof RelayEnvironmentLinkChallengeRequest.Type;
export declare const RelayEnvironmentLinkChallengeResponse: Schema.Struct<{
    readonly challenge: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly expiresAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type RelayEnvironmentLinkChallengeResponse = typeof RelayEnvironmentLinkChallengeResponse.Type;
export declare const RelayEnvironmentLinkRequest: Schema.Struct<{
    readonly deviceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly proof: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly notificationsEnabled: Schema.Boolean;
    readonly liveActivitiesEnabled: Schema.Boolean;
    readonly managedTunnelsEnabled: Schema.Boolean;
}>;
export type RelayEnvironmentLinkRequest = typeof RelayEnvironmentLinkRequest.Type;
export declare const RelayEnvironmentLinkResponse: Schema.Struct<{
    readonly ok: Schema.Boolean;
    readonly cloudUserId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly endpoint: Schema.Struct<{
        readonly httpBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly wsBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly providerKind: Schema.Literals<readonly ["manual", "cloudflare_tunnel", "t3_relay"]>;
    }>;
    readonly endpointRuntime: Schema.NullOr<Schema.Struct<{
        readonly providerKind: Schema.Literals<readonly ["manual", "cloudflare_tunnel", "t3_relay"]>;
        readonly connectorToken: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly tunnelId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly tunnelName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly relayIssuer: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly environmentCredential: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cloudMintPublicKey: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type RelayEnvironmentLinkResponse = typeof RelayEnvironmentLinkResponse.Type;
export declare const RelayEnvironmentLinkProofInvalidReason: Schema.Literals<readonly ["invalid_signature_or_scope", "descriptor_mismatch", "replayed_nonce", "challenge_invalid", "origin_not_allowed", "endpoint_not_secure"]>;
export type RelayEnvironmentLinkProofInvalidReason = typeof RelayEnvironmentLinkProofInvalidReason.Type;
export declare const RelayEnvironmentLinkFailedReason: Schema.Literals<readonly ["link_persistence_failed", "credential_persistence_failed", "replay_persistence_failed", "internal_error"]>;
export type RelayEnvironmentLinkFailedReason = typeof RelayEnvironmentLinkFailedReason.Type;
export declare const RelayEnvironmentLinkUnavailableReason: Schema.Literals<readonly ["managed_endpoint_not_configured", "managed_endpoint_provisioning_failed"]>;
export type RelayEnvironmentLinkUnavailableReason = typeof RelayEnvironmentLinkUnavailableReason.Type;
export declare const RelayEnvironmentEndpointUnavailableReason: Schema.Literals<readonly ["endpoint_request_failed", "endpoint_response_invalid"]>;
export type RelayEnvironmentEndpointUnavailableReason = typeof RelayEnvironmentEndpointUnavailableReason.Type;
/**
 * Which part of the path from the relay to the environment failed. `tunnel_down`
 * means Cloudflare has no live connector for the tunnel; `origin_unreachable`
 * means the tunnel answered but T3 Code behind it did not. Optional on the wire
 * so old relays and old clients keep working.
 */
export declare const RelayEnvironmentEndpointFailure: Schema.Literals<readonly ["tunnel_down", "origin_unreachable", "dns", "tls", "refused", "timeout", "invalid_response", "unknown"]>;
export type RelayEnvironmentEndpointFailure = typeof RelayEnvironmentEndpointFailure.Type;
export declare const RelayAgentActivityPublishProofInvalidReason: Schema.Literals<readonly ["invalid_signature_or_payload", "replayed_nonce"]>;
export type RelayAgentActivityPublishProofInvalidReason = typeof RelayAgentActivityPublishProofInvalidReason.Type;
export declare const RelayAuthInvalidReason: Schema.Literals<readonly ["missing_bearer", "invalid_bearer", "invalid_dpop", "not_authorized"]>;
export type RelayAuthInvalidReason = typeof RelayAuthInvalidReason.Type;
export declare const RelayDpopFailureReason: Schema.Literals<readonly ["time_window", "key_mismatch", "request_mismatch", "token_mismatch", "replay", "invalid_proof"]>;
export type RelayDpopFailureReason = typeof RelayDpopFailureReason.Type;
export declare const RelayInternalErrorReason: Schema.Literals<readonly ["database_unavailable", "persistence_failed", "upstream_unavailable", "internal_error"]>;
export type RelayInternalErrorReason = typeof RelayInternalErrorReason.Type;
declare const RelayAuthInvalidError_base: Schema.Class<RelayAuthInvalidError, Schema.TaggedStruct<"RelayAuthInvalidError", {
    readonly code: Schema.Literal<"auth_invalid">;
    readonly reason: Schema.Literals<readonly ["missing_bearer", "invalid_bearer", "invalid_dpop", "not_authorized"]>;
    readonly dpopFailureReason: Schema.optionalKey<Schema.Literals<readonly ["time_window", "key_mismatch", "request_mismatch", "token_mismatch", "replay", "invalid_proof"]>>;
    readonly traceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, import("effect/Cause").YieldableError>;
export declare class RelayAuthInvalidError extends RelayAuthInvalidError_base {
    get message(): string;
}
declare const RelayEnvironmentLinkProofExpiredError_base: Schema.Class<RelayEnvironmentLinkProofExpiredError, Schema.TaggedStruct<"RelayEnvironmentLinkProofExpiredError", {
    readonly code: Schema.Literal<"environment_link_proof_expired">;
    readonly traceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, import("effect/Cause").YieldableError>;
export declare class RelayEnvironmentLinkProofExpiredError extends RelayEnvironmentLinkProofExpiredError_base {
    get message(): string;
}
declare const RelayEnvironmentLinkProofInvalidError_base: Schema.Class<RelayEnvironmentLinkProofInvalidError, Schema.TaggedStruct<"RelayEnvironmentLinkProofInvalidError", {
    readonly code: Schema.Literal<"environment_link_proof_invalid">;
    readonly reason: Schema.Literals<readonly ["invalid_signature_or_scope", "descriptor_mismatch", "replayed_nonce", "challenge_invalid", "origin_not_allowed", "endpoint_not_secure"]>;
    readonly traceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, import("effect/Cause").YieldableError>;
export declare class RelayEnvironmentLinkProofInvalidError extends RelayEnvironmentLinkProofInvalidError_base {
    get message(): string;
}
export declare const RelayEnvironmentConnectNotAuthorizedReason: Schema.Literals<readonly ["client_proof_key_thumbprint_missing", "environment_link_not_found", "endpoint_provider_not_managed", "managed_endpoint_allocation_not_found", "managed_endpoint_base_domain_not_configured", "managed_endpoint_allocation_not_ready", "managed_endpoint_hostname_invalid", "managed_endpoint_mismatch"]>;
export type RelayEnvironmentConnectNotAuthorizedReason = typeof RelayEnvironmentConnectNotAuthorizedReason.Type;
declare const RelayEnvironmentConnectNotAuthorizedError_base: Schema.Class<RelayEnvironmentConnectNotAuthorizedError, Schema.TaggedStruct<"RelayEnvironmentConnectNotAuthorizedError", {
    readonly code: Schema.Literal<"environment_connect_not_authorized">;
    readonly reason: Schema.optional<Schema.Literals<readonly ["client_proof_key_thumbprint_missing", "environment_link_not_found", "endpoint_provider_not_managed", "managed_endpoint_allocation_not_found", "managed_endpoint_base_domain_not_configured", "managed_endpoint_allocation_not_ready", "managed_endpoint_hostname_invalid", "managed_endpoint_mismatch"]>>;
    readonly traceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, import("effect/Cause").YieldableError>;
export declare class RelayEnvironmentConnectNotAuthorizedError extends RelayEnvironmentConnectNotAuthorizedError_base {
    get message(): string;
}
declare const RelayEnvironmentEndpointUnavailableError_base: Schema.Class<RelayEnvironmentEndpointUnavailableError, Schema.TaggedStruct<"RelayEnvironmentEndpointUnavailableError", {
    readonly code: Schema.Literal<"environment_endpoint_unavailable">;
    readonly reason: Schema.Literals<readonly ["endpoint_request_failed", "endpoint_response_invalid"]>;
    readonly endpointFailure: Schema.optionalKey<Schema.Literals<readonly ["tunnel_down", "origin_unreachable", "dns", "tls", "refused", "timeout", "invalid_response", "unknown"]>>;
    readonly endpointStatus: Schema.optionalKey<Schema.Number>;
    readonly traceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, import("effect/Cause").YieldableError>;
export declare class RelayEnvironmentEndpointUnavailableError extends RelayEnvironmentEndpointUnavailableError_base {
    get message(): string;
}
declare const RelayEnvironmentEndpointTimedOutError_base: Schema.Class<RelayEnvironmentEndpointTimedOutError, Schema.TaggedStruct<"RelayEnvironmentEndpointTimedOutError", {
    readonly code: Schema.Literal<"environment_endpoint_timed_out">;
    readonly traceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, import("effect/Cause").YieldableError>;
export declare class RelayEnvironmentEndpointTimedOutError extends RelayEnvironmentEndpointTimedOutError_base {
    get message(): string;
}
declare const RelayEnvironmentLinkFailedError_base: Schema.Class<RelayEnvironmentLinkFailedError, Schema.TaggedStruct<"RelayEnvironmentLinkFailedError", {
    readonly code: Schema.Literal<"environment_link_failed">;
    readonly reason: Schema.Literals<readonly ["link_persistence_failed", "credential_persistence_failed", "replay_persistence_failed", "internal_error"]>;
    readonly traceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, import("effect/Cause").YieldableError>;
export declare class RelayEnvironmentLinkFailedError extends RelayEnvironmentLinkFailedError_base {
    get message(): string;
}
declare const RelayEnvironmentLinkUnavailableError_base: Schema.Class<RelayEnvironmentLinkUnavailableError, Schema.TaggedStruct<"RelayEnvironmentLinkUnavailableError", {
    readonly code: Schema.Literal<"environment_link_unavailable">;
    readonly reason: Schema.Literals<readonly ["managed_endpoint_not_configured", "managed_endpoint_provisioning_failed"]>;
    readonly provisioningStage: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly traceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, import("effect/Cause").YieldableError>;
export declare class RelayEnvironmentLinkUnavailableError extends RelayEnvironmentLinkUnavailableError_base {
    get message(): string;
}
declare const RelayEnvironmentLinkLimitExceededError_base: Schema.Class<RelayEnvironmentLinkLimitExceededError, Schema.TaggedStruct<"RelayEnvironmentLinkLimitExceededError", {
    readonly code: Schema.Literal<"environment_link_limit_exceeded">;
    readonly maxTunnels: Schema.Number;
    readonly traceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, import("effect/Cause").YieldableError>;
export declare class RelayEnvironmentLinkLimitExceededError extends RelayEnvironmentLinkLimitExceededError_base {
    get message(): string;
}
declare const RelayAgentActivityPublishProofExpiredError_base: Schema.Class<RelayAgentActivityPublishProofExpiredError, Schema.TaggedStruct<"RelayAgentActivityPublishProofExpiredError", {
    readonly code: Schema.Literal<"agent_activity_publish_proof_expired">;
    readonly traceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, import("effect/Cause").YieldableError>;
export declare class RelayAgentActivityPublishProofExpiredError extends RelayAgentActivityPublishProofExpiredError_base {
    get message(): string;
}
declare const RelayAgentActivityPublishProofInvalidError_base: Schema.Class<RelayAgentActivityPublishProofInvalidError, Schema.TaggedStruct<"RelayAgentActivityPublishProofInvalidError", {
    readonly code: Schema.Literal<"agent_activity_publish_proof_invalid">;
    readonly reason: Schema.Literals<readonly ["invalid_signature_or_payload", "replayed_nonce"]>;
    readonly traceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, import("effect/Cause").YieldableError>;
export declare class RelayAgentActivityPublishProofInvalidError extends RelayAgentActivityPublishProofInvalidError_base {
    get message(): string;
}
declare const RelayInternalError_base: Schema.Class<RelayInternalError, Schema.TaggedStruct<"RelayInternalError", {
    readonly code: Schema.Literal<"internal_error">;
    readonly reason: Schema.Literals<readonly ["database_unavailable", "persistence_failed", "upstream_unavailable", "internal_error"]>;
    readonly traceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>, import("effect/Cause").YieldableError>;
export declare class RelayInternalError extends RelayInternalError_base {
    get message(): string;
}
export declare const RelayProtectedError: Schema.Union<readonly [typeof RelayAuthInvalidError, typeof RelayEnvironmentLinkProofExpiredError, typeof RelayEnvironmentLinkProofInvalidError, typeof RelayEnvironmentConnectNotAuthorizedError, typeof RelayEnvironmentEndpointUnavailableError, typeof RelayEnvironmentEndpointTimedOutError, typeof RelayEnvironmentLinkFailedError, typeof RelayEnvironmentLinkUnavailableError, typeof RelayEnvironmentLinkLimitExceededError, typeof RelayAgentActivityPublishProofExpiredError, typeof RelayAgentActivityPublishProofInvalidError, typeof RelayInternalError]>;
export type RelayProtectedError = typeof RelayProtectedError.Type;
declare const RelayClientPrincipal_base: Context.ServiceClass<RelayClientPrincipal, "@t3tools/contracts/relay/RelayClientPrincipal", {
    readonly userId: string;
    readonly token: string;
    readonly proofKeyThumbprint?: string;
    readonly dpopScopes?: readonly RelayDpopAccessTokenScope[];
}>;
export declare class RelayClientPrincipal extends RelayClientPrincipal_base {
}
declare const RelayEnvironmentPrincipal_base: Context.ServiceClass<RelayEnvironmentPrincipal, "@t3tools/contracts/relay/RelayEnvironmentPrincipal", {
    readonly environmentId: string;
    readonly environmentPublicKey: string;
}>;
export declare class RelayEnvironmentPrincipal extends RelayEnvironmentPrincipal_base {
}
declare const RelayClientAuth_base: HttpApiMiddleware.ServiceClass<RelayClientAuth, "RelayClientAuth", {
    requires: never;
    provides: RelayClientPrincipal;
    error: typeof RelayAuthInvalidError;
    clientError: never;
    requiredForClient: false;
    security: {
        readonly clientBearer: HttpApiSecurity.Http;
    };
}, HttpApiMiddleware.HttpApiMiddlewareSecurity<{
    readonly clientBearer: HttpApiSecurity.Http;
}, RelayClientPrincipal, typeof RelayAuthInvalidError, never>>;
export declare class RelayClientAuth extends RelayClientAuth_base {
}
declare const RelayEnvironmentAuth_base: HttpApiMiddleware.ServiceClass<RelayEnvironmentAuth, "RelayEnvironmentAuth", {
    requires: never;
    provides: RelayEnvironmentPrincipal;
    error: readonly [typeof RelayAuthInvalidError, typeof RelayInternalError];
    clientError: never;
    requiredForClient: false;
    security: {
        readonly environmentBearer: HttpApiSecurity.Http;
    };
}, HttpApiMiddleware.HttpApiMiddlewareSecurity<{
    readonly environmentBearer: HttpApiSecurity.Http;
}, RelayEnvironmentPrincipal, readonly [typeof RelayAuthInvalidError, typeof RelayInternalError], never>>;
export declare class RelayEnvironmentAuth extends RelayEnvironmentAuth_base {
}
declare const RelayDpopClientAuth_base: HttpApiMiddleware.ServiceClass<RelayDpopClientAuth, "RelayDpopClientAuth", {
    requires: never;
    provides: RelayClientPrincipal;
    error: typeof RelayAuthInvalidError;
    clientError: never;
    requiredForClient: false;
    security: {
        readonly relayDpop: HttpApiSecurity.Http;
    };
}, HttpApiMiddleware.HttpApiMiddlewareSecurity<{
    readonly relayDpop: HttpApiSecurity.Http;
}, RelayClientPrincipal, typeof RelayAuthInvalidError, never>>;
export declare class RelayDpopClientAuth extends RelayDpopClientAuth_base {
}
export declare const RelayClientEnvironmentRecord: Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly endpoint: Schema.Struct<{
        readonly httpBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly wsBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly providerKind: Schema.Literals<readonly ["manual", "cloudflare_tunnel", "t3_relay"]>;
    }>;
    readonly linkedAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type RelayClientEnvironmentRecord = typeof RelayClientEnvironmentRecord.Type;
export declare const RelayListEnvironmentsResponse: Schema.Struct<{
    readonly environments: Schema.$Array<Schema.Struct<{
        readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly endpoint: Schema.Struct<{
            readonly httpBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly wsBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly providerKind: Schema.Literals<readonly ["manual", "cloudflare_tunnel", "t3_relay"]>;
        }>;
        readonly linkedAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
}>;
export type RelayListEnvironmentsResponse = typeof RelayListEnvironmentsResponse.Type;
export declare const RelayEnvironmentConnectRequest: Schema.Struct<{
    readonly deviceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly clientKeyThumbprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly clientProofKeyThumbprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type RelayEnvironmentConnectRequest = typeof RelayEnvironmentConnectRequest.Type;
export declare const RelayEnvironmentConnectScope: "environment:connect";
export declare const RelayEnvironmentStatusScope: "environment:status";
export declare const RelayMobileRegistrationScope: "mobile:registration";
export declare const RelayDpopAccessTokenScope: Schema.Literals<readonly ["environment:connect", "environment:status", "mobile:registration"]>;
export type RelayDpopAccessTokenScope = typeof RelayDpopAccessTokenScope.Type;
export declare const RelayDpopTokenExchangeGrantType: "urn:ietf:params:oauth:grant-type:token-exchange";
export declare const RelayJwtSubjectTokenType: "urn:ietf:params:oauth:token-type:jwt";
export declare const RelayAccessTokenType: "urn:ietf:params:oauth:token-type:access_token";
export declare const RelayPublicClientId: Schema.Literals<readonly ["t3-mobile", "t3-web"]>;
export type RelayPublicClientId = typeof RelayPublicClientId.Type;
export declare const RelayMobileClientId: "t3-mobile";
export declare const RelayWebClientId: "t3-web";
export declare const RelayDpopAccessTokenRequest: Schema.Struct<{
    readonly grant_type: Schema.Literal<"urn:ietf:params:oauth:grant-type:token-exchange">;
    readonly subject_token: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly subject_token_type: Schema.Literal<"urn:ietf:params:oauth:token-type:jwt">;
    readonly requested_token_type: Schema.Literal<"urn:ietf:params:oauth:token-type:access_token">;
    readonly resource: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly scope: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly client_id: Schema.Literals<readonly ["t3-mobile", "t3-web"]>;
}>;
export type RelayDpopAccessTokenRequest = typeof RelayDpopAccessTokenRequest.Type;
export declare const RelayDpopAccessTokenResponse: Schema.Struct<{
    readonly access_token: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly issued_token_type: Schema.Literal<"urn:ietf:params:oauth:token-type:access_token">;
    readonly token_type: Schema.Literal<"DPoP">;
    readonly expires_in: Schema.Int;
    readonly scope: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type RelayDpopAccessTokenResponse = typeof RelayDpopAccessTokenResponse.Type;
export declare const RelayBearerRequestHeaders: Schema.Struct<{
    readonly authorization: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export declare const RelayDpopProofRequestHeaders: Schema.Struct<{
    readonly dpop: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export declare const RelayDpopRequestHeaders: Schema.Struct<{
    readonly authorization: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly dpop: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export declare const RelayAuthorizationServerMetadata: Schema.Struct<{
    readonly issuer: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly token_endpoint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly grant_types_supported: Schema.$Array<Schema.Literal<"urn:ietf:params:oauth:grant-type:token-exchange">>;
    readonly token_endpoint_auth_methods_supported: Schema.$Array<Schema.Literal<"none">>;
    readonly dpop_signing_alg_values_supported: Schema.$Array<Schema.Literal<"ES256">>;
    readonly scopes_supported: Schema.$Array<Schema.Literals<readonly ["environment:connect", "environment:status", "mobile:registration"]>>;
}>;
export declare const RelayProtectedResourceMetadata: Schema.Struct<{
    readonly resource: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly authorization_servers: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly scopes_supported: Schema.$Array<Schema.Literals<readonly ["environment:connect", "environment:status", "mobile:registration"]>>;
    readonly dpop_bound_access_tokens_required: Schema.Boolean;
    readonly dpop_signing_alg_values_supported: Schema.$Array<Schema.Literal<"ES256">>;
}>;
export declare const RelayEnvironmentUnlinkParams: Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
}>;
export type RelayEnvironmentUnlinkParams = typeof RelayEnvironmentUnlinkParams.Type;
export declare const RelayEnvironmentConnectResponse: Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly endpoint: Schema.Struct<{
        readonly httpBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly wsBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly providerKind: Schema.Literals<readonly ["manual", "cloudflare_tunnel", "t3_relay"]>;
    }>;
    readonly credential: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly expiresAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type RelayEnvironmentConnectResponse = typeof RelayEnvironmentConnectResponse.Type;
export declare const RelayEnvironmentStatusValue: Schema.Literals<readonly ["online", "offline"]>;
export type RelayEnvironmentStatusValue = typeof RelayEnvironmentStatusValue.Type;
export declare const RelayEnvironmentStatusResponse: Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly endpoint: Schema.Struct<{
        readonly httpBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly wsBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly providerKind: Schema.Literals<readonly ["manual", "cloudflare_tunnel", "t3_relay"]>;
    }>;
    readonly status: Schema.Literals<readonly ["online", "offline"]>;
    readonly checkedAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly descriptor: Schema.optional<Schema.Struct<{
        readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly platform: Schema.Struct<{
            readonly os: Schema.Literals<readonly ["darwin", "linux", "windows", "unknown"]>;
            readonly arch: Schema.Literals<readonly ["arm64", "x64", "other"]>;
            readonly machine: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Literals<readonly ["server", "cloud", "linux", "desktop", "laptop", "mac-mini", "mac-studio"]>>, Schema.Unknown, never, never>>;
        }>;
        readonly serverVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly orchestrationProtocolVersion: Schema.optionalKey<Schema.Int>;
        readonly capabilities: Schema.Struct<{
            readonly repositoryIdentity: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly connectionProbe: Schema.optionalKey<Schema.Boolean>;
            readonly attachmentUploads: Schema.optionalKey<Schema.Boolean>;
            readonly questionAttachments: Schema.optionalKey<Schema.Boolean>;
            readonly fileAttachments: Schema.optionalKey<Schema.Struct<{
                readonly maxUploadBytes: Schema.Int;
            }>>;
            readonly pullRequests: Schema.optionalKey<Schema.Boolean>;
            readonly pullRequestChecks: Schema.optionalKey<Schema.Boolean>;
            readonly inlineMessageContext: Schema.optionalKey<Schema.Boolean>;
            readonly requiredWorktreeBootstrap: Schema.optionalKey<Schema.Boolean>;
            readonly threadSettlement: Schema.optionalKey<Schema.Boolean>;
            readonly threadAutoSettlement: Schema.optionalKey<Schema.Boolean>;
            readonly storageCleanup: Schema.optionalKey<Schema.Boolean>;
            readonly storageCleanupRun: Schema.optionalKey<Schema.Boolean>;
            readonly databaseStorage: Schema.optionalKey<Schema.Boolean>;
            readonly otlpEndpointCheck: Schema.optionalKey<Schema.Boolean>;
            readonly projectWorktreeCleanup: Schema.optionalKey<Schema.Boolean>;
            readonly settledWorktreeCleanup: Schema.optionalKey<Schema.Boolean>;
            readonly worktreesDirectory: Schema.optionalKey<Schema.Boolean>;
            readonly threadAutoSettlementScope: Schema.optionalKey<Schema.Boolean>;
            readonly threadRestartContinuation: Schema.optionalKey<Schema.Boolean>;
            readonly projectSettingsOverrides: Schema.optionalKey<Schema.Boolean>;
            readonly projectProviderInstanceOverrides: Schema.optionalKey<Schema.Boolean>;
            readonly threadSnooze: Schema.optionalKey<Schema.Boolean>;
            readonly environmentThemes: Schema.optionalKey<Schema.Boolean>;
            readonly usageLimitSources: Schema.optionalKey<Schema.Boolean>;
            readonly providerWorkspaceSnapshotsOnDemand: Schema.optionalKey<Schema.Boolean>;
            readonly usagePriceOverrides: Schema.optionalKey<Schema.Boolean>;
            readonly usageModelAliases: Schema.optionalKey<Schema.Boolean>;
            readonly threadPinning: Schema.optionalKey<Schema.Boolean>;
            readonly threadPinReorder: Schema.optionalKey<Schema.Boolean>;
            readonly threadActiveReorder: Schema.optionalKey<Schema.Boolean>;
            readonly threadAutoSettleOptOut: Schema.optionalKey<Schema.Boolean>;
            readonly threadTitleRegeneration: Schema.optionalKey<Schema.Boolean>;
            readonly threadVisitedTracking: Schema.optionalKey<Schema.Boolean>;
            readonly threadPullRequestLinking: Schema.optionalKey<Schema.Boolean>;
            readonly serverResolvedCommandContext: Schema.optionalKey<Schema.Boolean>;
            readonly threadStop: Schema.optionalKey<Schema.Boolean>;
            readonly localServerStop: Schema.optionalKey<Schema.Boolean>;
            readonly threadPullRequests: Schema.optionalKey<Schema.Boolean>;
            readonly threadPullRequestWatch: Schema.optionalKey<Schema.Boolean>;
            readonly pullRequestStackActions: Schema.optionalKey<Schema.Boolean>;
            readonly serverSelfUpdate: Schema.optionalKey<Schema.Literals<readonly ["boot-service", "respawn", "desktop-managed"]>>;
            readonly serverInstallation: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Union<readonly [Schema.Struct<{
                readonly kind: Schema.Literals<readonly ["npx", "pnpm-dlx", "bunx"]>;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"npm-global">;
                readonly prefix: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>>, Schema.Unknown, never, never>>;
            readonly serverSelfUpdateProgress: Schema.optionalKey<Schema.Boolean>;
            readonly serverUpdateThreadContinuation: Schema.optionalKey<Schema.Boolean>;
            readonly agentActivityPublishing: Schema.optionalKey<Schema.Boolean>;
            readonly projectCloneTracking: Schema.optionalKey<Schema.Boolean>;
            readonly ignoredFileListing: Schema.optionalKey<Schema.Boolean>;
            readonly environmentIcon: Schema.optionalKey<Schema.Boolean>;
            readonly desktopAppUpdate: Schema.optionalKey<Schema.Boolean>;
            readonly commandOutputStreaming: Schema.optionalKey<Schema.Boolean>;
            readonly serverBrowser: Schema.optionalKey<Schema.Boolean>;
            readonly peerLinks: Schema.optionalKey<Schema.Boolean>;
            readonly mcpModeLimitHeader: Schema.optionalKey<Schema.Boolean>;
            readonly linkFence: Schema.optionalKey<Schema.Boolean>;
            readonly triage: Schema.optionalKey<Schema.Boolean>;
        }>;
    }>>;
    readonly error: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly endpointFailure: Schema.optional<Schema.Literals<readonly ["tunnel_down", "origin_unreachable", "dns", "tls", "refused", "timeout", "invalid_response", "unknown"]>>;
    readonly endpointStatus: Schema.optional<Schema.Number>;
    readonly offlineReason: Schema.optional<Schema.Literals<readonly ["tunnel_released"]>>;
    readonly traceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type RelayEnvironmentStatusResponse = typeof RelayEnvironmentStatusResponse.Type;
export declare const RelayCloudMintCredentialProofPayload: Schema.Struct<{
    readonly iss: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly aud: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly sub: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly jti: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly iat: Schema.Int;
    readonly exp: Schema.Int;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly clientProofKeyThumbprint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cnf: Schema.Struct<{
        readonly jkt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>;
    readonly deviceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly nonce: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly scope: Schema.$Array<Schema.Literal<"environment:connect">>;
}>;
export type RelayCloudMintCredentialProofPayload = typeof RelayCloudMintCredentialProofPayload.Type;
export declare const RelayCloudMintCredentialProof: Schema.decodeTo<Schema.String, Schema.String, never, never>;
export type RelayCloudMintCredentialProof = typeof RelayCloudMintCredentialProof.Type;
export declare const RelayCloudMintCredentialRequest: Schema.Struct<{
    readonly proof: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type RelayCloudMintCredentialRequest = typeof RelayCloudMintCredentialRequest.Type;
export declare const RelayCloudEnvironmentHealthProofPayload: Schema.Struct<{
    readonly iss: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly aud: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly sub: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly jti: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly iat: Schema.Int;
    readonly exp: Schema.Int;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly nonce: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly scope: Schema.$Array<Schema.Literal<"environment:status">>;
}>;
export type RelayCloudEnvironmentHealthProofPayload = typeof RelayCloudEnvironmentHealthProofPayload.Type;
/** Verify x-t3-relay-delivery with the relay mint key before trusting delivery id, time, or trace context. */
export declare const RelayHookDeliveryProofPayload: Schema.Struct<{
    readonly iss: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly aud: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly sub: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly jti: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly iat: Schema.Int;
    readonly exp: Schema.Int;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly deliveryId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly receivedAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly hookId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type RelayHookDeliveryProofPayload = typeof RelayHookDeliveryProofPayload.Type;
export declare const RelayCloudEnvironmentHealthProof: Schema.decodeTo<Schema.String, Schema.String, never, never>;
export type RelayCloudEnvironmentHealthProof = typeof RelayCloudEnvironmentHealthProof.Type;
export declare const RelayCloudEnvironmentHealthRequest: Schema.Struct<{
    readonly proof: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type RelayCloudEnvironmentHealthRequest = typeof RelayCloudEnvironmentHealthRequest.Type;
export declare const RelayEnvironmentHealthResponseProofPayload: Schema.Struct<{
    readonly iss: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly aud: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly sub: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly jti: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly iat: Schema.Int;
    readonly exp: Schema.Int;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly requestNonce: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly status: Schema.Literal<"online">;
    readonly descriptor: Schema.Struct<{
        readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly platform: Schema.Struct<{
            readonly os: Schema.Literals<readonly ["darwin", "linux", "windows", "unknown"]>;
            readonly arch: Schema.Literals<readonly ["arm64", "x64", "other"]>;
            readonly machine: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Literals<readonly ["server", "cloud", "linux", "desktop", "laptop", "mac-mini", "mac-studio"]>>, Schema.Unknown, never, never>>;
        }>;
        readonly serverVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly orchestrationProtocolVersion: Schema.optionalKey<Schema.Int>;
        readonly capabilities: Schema.Struct<{
            readonly repositoryIdentity: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly connectionProbe: Schema.optionalKey<Schema.Boolean>;
            readonly attachmentUploads: Schema.optionalKey<Schema.Boolean>;
            readonly questionAttachments: Schema.optionalKey<Schema.Boolean>;
            readonly fileAttachments: Schema.optionalKey<Schema.Struct<{
                readonly maxUploadBytes: Schema.Int;
            }>>;
            readonly pullRequests: Schema.optionalKey<Schema.Boolean>;
            readonly pullRequestChecks: Schema.optionalKey<Schema.Boolean>;
            readonly inlineMessageContext: Schema.optionalKey<Schema.Boolean>;
            readonly requiredWorktreeBootstrap: Schema.optionalKey<Schema.Boolean>;
            readonly threadSettlement: Schema.optionalKey<Schema.Boolean>;
            readonly threadAutoSettlement: Schema.optionalKey<Schema.Boolean>;
            readonly storageCleanup: Schema.optionalKey<Schema.Boolean>;
            readonly storageCleanupRun: Schema.optionalKey<Schema.Boolean>;
            readonly databaseStorage: Schema.optionalKey<Schema.Boolean>;
            readonly otlpEndpointCheck: Schema.optionalKey<Schema.Boolean>;
            readonly projectWorktreeCleanup: Schema.optionalKey<Schema.Boolean>;
            readonly settledWorktreeCleanup: Schema.optionalKey<Schema.Boolean>;
            readonly worktreesDirectory: Schema.optionalKey<Schema.Boolean>;
            readonly threadAutoSettlementScope: Schema.optionalKey<Schema.Boolean>;
            readonly threadRestartContinuation: Schema.optionalKey<Schema.Boolean>;
            readonly projectSettingsOverrides: Schema.optionalKey<Schema.Boolean>;
            readonly projectProviderInstanceOverrides: Schema.optionalKey<Schema.Boolean>;
            readonly threadSnooze: Schema.optionalKey<Schema.Boolean>;
            readonly environmentThemes: Schema.optionalKey<Schema.Boolean>;
            readonly usageLimitSources: Schema.optionalKey<Schema.Boolean>;
            readonly providerWorkspaceSnapshotsOnDemand: Schema.optionalKey<Schema.Boolean>;
            readonly usagePriceOverrides: Schema.optionalKey<Schema.Boolean>;
            readonly usageModelAliases: Schema.optionalKey<Schema.Boolean>;
            readonly threadPinning: Schema.optionalKey<Schema.Boolean>;
            readonly threadPinReorder: Schema.optionalKey<Schema.Boolean>;
            readonly threadActiveReorder: Schema.optionalKey<Schema.Boolean>;
            readonly threadAutoSettleOptOut: Schema.optionalKey<Schema.Boolean>;
            readonly threadTitleRegeneration: Schema.optionalKey<Schema.Boolean>;
            readonly threadVisitedTracking: Schema.optionalKey<Schema.Boolean>;
            readonly threadPullRequestLinking: Schema.optionalKey<Schema.Boolean>;
            readonly serverResolvedCommandContext: Schema.optionalKey<Schema.Boolean>;
            readonly threadStop: Schema.optionalKey<Schema.Boolean>;
            readonly localServerStop: Schema.optionalKey<Schema.Boolean>;
            readonly threadPullRequests: Schema.optionalKey<Schema.Boolean>;
            readonly threadPullRequestWatch: Schema.optionalKey<Schema.Boolean>;
            readonly pullRequestStackActions: Schema.optionalKey<Schema.Boolean>;
            readonly serverSelfUpdate: Schema.optionalKey<Schema.Literals<readonly ["boot-service", "respawn", "desktop-managed"]>>;
            readonly serverInstallation: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Union<readonly [Schema.Struct<{
                readonly kind: Schema.Literals<readonly ["npx", "pnpm-dlx", "bunx"]>;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"npm-global">;
                readonly prefix: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>>, Schema.Unknown, never, never>>;
            readonly serverSelfUpdateProgress: Schema.optionalKey<Schema.Boolean>;
            readonly serverUpdateThreadContinuation: Schema.optionalKey<Schema.Boolean>;
            readonly agentActivityPublishing: Schema.optionalKey<Schema.Boolean>;
            readonly projectCloneTracking: Schema.optionalKey<Schema.Boolean>;
            readonly ignoredFileListing: Schema.optionalKey<Schema.Boolean>;
            readonly environmentIcon: Schema.optionalKey<Schema.Boolean>;
            readonly desktopAppUpdate: Schema.optionalKey<Schema.Boolean>;
            readonly commandOutputStreaming: Schema.optionalKey<Schema.Boolean>;
            readonly serverBrowser: Schema.optionalKey<Schema.Boolean>;
            readonly peerLinks: Schema.optionalKey<Schema.Boolean>;
            readonly mcpModeLimitHeader: Schema.optionalKey<Schema.Boolean>;
            readonly linkFence: Schema.optionalKey<Schema.Boolean>;
            readonly triage: Schema.optionalKey<Schema.Boolean>;
        }>;
    }>;
    readonly checkedAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type RelayEnvironmentHealthResponseProofPayload = typeof RelayEnvironmentHealthResponseProofPayload.Type;
export declare const RelayEnvironmentHealthResponse: Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly status: Schema.Literal<"online">;
    readonly descriptor: Schema.Struct<{
        readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly platform: Schema.Struct<{
            readonly os: Schema.Literals<readonly ["darwin", "linux", "windows", "unknown"]>;
            readonly arch: Schema.Literals<readonly ["arm64", "x64", "other"]>;
            readonly machine: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Literals<readonly ["server", "cloud", "linux", "desktop", "laptop", "mac-mini", "mac-studio"]>>, Schema.Unknown, never, never>>;
        }>;
        readonly serverVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly orchestrationProtocolVersion: Schema.optionalKey<Schema.Int>;
        readonly capabilities: Schema.Struct<{
            readonly repositoryIdentity: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly connectionProbe: Schema.optionalKey<Schema.Boolean>;
            readonly attachmentUploads: Schema.optionalKey<Schema.Boolean>;
            readonly questionAttachments: Schema.optionalKey<Schema.Boolean>;
            readonly fileAttachments: Schema.optionalKey<Schema.Struct<{
                readonly maxUploadBytes: Schema.Int;
            }>>;
            readonly pullRequests: Schema.optionalKey<Schema.Boolean>;
            readonly pullRequestChecks: Schema.optionalKey<Schema.Boolean>;
            readonly inlineMessageContext: Schema.optionalKey<Schema.Boolean>;
            readonly requiredWorktreeBootstrap: Schema.optionalKey<Schema.Boolean>;
            readonly threadSettlement: Schema.optionalKey<Schema.Boolean>;
            readonly threadAutoSettlement: Schema.optionalKey<Schema.Boolean>;
            readonly storageCleanup: Schema.optionalKey<Schema.Boolean>;
            readonly storageCleanupRun: Schema.optionalKey<Schema.Boolean>;
            readonly databaseStorage: Schema.optionalKey<Schema.Boolean>;
            readonly otlpEndpointCheck: Schema.optionalKey<Schema.Boolean>;
            readonly projectWorktreeCleanup: Schema.optionalKey<Schema.Boolean>;
            readonly settledWorktreeCleanup: Schema.optionalKey<Schema.Boolean>;
            readonly worktreesDirectory: Schema.optionalKey<Schema.Boolean>;
            readonly threadAutoSettlementScope: Schema.optionalKey<Schema.Boolean>;
            readonly threadRestartContinuation: Schema.optionalKey<Schema.Boolean>;
            readonly projectSettingsOverrides: Schema.optionalKey<Schema.Boolean>;
            readonly projectProviderInstanceOverrides: Schema.optionalKey<Schema.Boolean>;
            readonly threadSnooze: Schema.optionalKey<Schema.Boolean>;
            readonly environmentThemes: Schema.optionalKey<Schema.Boolean>;
            readonly usageLimitSources: Schema.optionalKey<Schema.Boolean>;
            readonly providerWorkspaceSnapshotsOnDemand: Schema.optionalKey<Schema.Boolean>;
            readonly usagePriceOverrides: Schema.optionalKey<Schema.Boolean>;
            readonly usageModelAliases: Schema.optionalKey<Schema.Boolean>;
            readonly threadPinning: Schema.optionalKey<Schema.Boolean>;
            readonly threadPinReorder: Schema.optionalKey<Schema.Boolean>;
            readonly threadActiveReorder: Schema.optionalKey<Schema.Boolean>;
            readonly threadAutoSettleOptOut: Schema.optionalKey<Schema.Boolean>;
            readonly threadTitleRegeneration: Schema.optionalKey<Schema.Boolean>;
            readonly threadVisitedTracking: Schema.optionalKey<Schema.Boolean>;
            readonly threadPullRequestLinking: Schema.optionalKey<Schema.Boolean>;
            readonly serverResolvedCommandContext: Schema.optionalKey<Schema.Boolean>;
            readonly threadStop: Schema.optionalKey<Schema.Boolean>;
            readonly localServerStop: Schema.optionalKey<Schema.Boolean>;
            readonly threadPullRequests: Schema.optionalKey<Schema.Boolean>;
            readonly threadPullRequestWatch: Schema.optionalKey<Schema.Boolean>;
            readonly pullRequestStackActions: Schema.optionalKey<Schema.Boolean>;
            readonly serverSelfUpdate: Schema.optionalKey<Schema.Literals<readonly ["boot-service", "respawn", "desktop-managed"]>>;
            readonly serverInstallation: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Union<readonly [Schema.Struct<{
                readonly kind: Schema.Literals<readonly ["npx", "pnpm-dlx", "bunx"]>;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"npm-global">;
                readonly prefix: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>>, Schema.Unknown, never, never>>;
            readonly serverSelfUpdateProgress: Schema.optionalKey<Schema.Boolean>;
            readonly serverUpdateThreadContinuation: Schema.optionalKey<Schema.Boolean>;
            readonly agentActivityPublishing: Schema.optionalKey<Schema.Boolean>;
            readonly projectCloneTracking: Schema.optionalKey<Schema.Boolean>;
            readonly ignoredFileListing: Schema.optionalKey<Schema.Boolean>;
            readonly environmentIcon: Schema.optionalKey<Schema.Boolean>;
            readonly desktopAppUpdate: Schema.optionalKey<Schema.Boolean>;
            readonly commandOutputStreaming: Schema.optionalKey<Schema.Boolean>;
            readonly serverBrowser: Schema.optionalKey<Schema.Boolean>;
            readonly peerLinks: Schema.optionalKey<Schema.Boolean>;
            readonly mcpModeLimitHeader: Schema.optionalKey<Schema.Boolean>;
            readonly linkFence: Schema.optionalKey<Schema.Boolean>;
            readonly triage: Schema.optionalKey<Schema.Boolean>;
        }>;
    }>;
    readonly checkedAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly proof: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type RelayEnvironmentHealthResponse = typeof RelayEnvironmentHealthResponse.Type;
export declare const RelayEnvironmentMintResponseProofPayload: Schema.Struct<{
    readonly iss: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly aud: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly sub: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly jti: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly iat: Schema.Int;
    readonly exp: Schema.Int;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly clientProofKeyThumbprint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly requestNonce: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly credential: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type RelayEnvironmentMintResponseProofPayload = typeof RelayEnvironmentMintResponseProofPayload.Type;
export declare const RelayEnvironmentMintResponse: Schema.Struct<{
    readonly credential: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly expiresAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly proof: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type RelayEnvironmentMintResponse = typeof RelayEnvironmentMintResponse.Type;
export declare const RelayDeliveryKind: Schema.Literals<readonly ["live_activity_start", "live_activity_update", "live_activity_end", "push_notification"]>;
export type RelayDeliveryKind = typeof RelayDeliveryKind.Type;
export declare const RelayDeliveryResult: Schema.Struct<{
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly kind: Schema.Literals<readonly ["live_activity_start", "live_activity_update", "live_activity_end", "push_notification"]>;
    readonly ok: Schema.Boolean;
    readonly queued: Schema.optional<Schema.Boolean>;
    readonly apnsStatus: Schema.NullOr<Schema.Number>;
    readonly apnsReason: Schema.NullOr<Schema.String>;
    readonly apnsId: Schema.NullOr<Schema.String>;
}>;
export type RelayDeliveryResult = typeof RelayDeliveryResult.Type;
export declare const RelayOkResponse: Schema.Struct<{
    readonly ok: Schema.Boolean;
}>;
export type RelayOkResponse = typeof RelayOkResponse.Type;
export declare const RelayPublishResponse: Schema.Struct<{
    readonly ok: Schema.Boolean;
    readonly deliveries: Schema.$Array<Schema.Struct<{
        readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly kind: Schema.Literals<readonly ["live_activity_start", "live_activity_update", "live_activity_end", "push_notification"]>;
        readonly ok: Schema.Boolean;
        readonly queued: Schema.optional<Schema.Boolean>;
        readonly apnsStatus: Schema.NullOr<Schema.Number>;
        readonly apnsReason: Schema.NullOr<Schema.String>;
        readonly apnsId: Schema.NullOr<Schema.String>;
    }>>;
}>;
export type RelayPublishResponse = typeof RelayPublishResponse.Type;
export declare const RelayHealthResponse: Schema.Struct<{
    readonly ok: Schema.Boolean;
    readonly service: Schema.Literal<"relay">;
}>;
export type RelayHealthResponse = typeof RelayHealthResponse.Type;
export declare const RelayRegisterDeviceEndpoint: HttpApiEndpoint.HttpApiEndpoint<"registerDevice", "POST", "/v1/mobile/devices", never, never, Schema.toCodecJson<Schema.Struct<{
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly platform: Schema.Literals<readonly ["ios", "android"]>;
    readonly iosMajorVersion: Schema.optional<Schema.Int>;
    readonly androidApiLevel: Schema.optional<Schema.Int>;
    readonly appVersion: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly bundleId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly apsEnvironment: Schema.optional<Schema.Literals<readonly ["sandbox", "production"]>>;
    readonly pushToken: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly pushToStartToken: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly preferences: Schema.Struct<{
        readonly liveActivitiesEnabled: Schema.Boolean;
        readonly notificationsEnabled: Schema.Boolean;
        readonly notifyOnApproval: Schema.Boolean;
        readonly notifyOnInput: Schema.Boolean;
        readonly notifyOnCompletion: Schema.Boolean;
        readonly notifyOnFailure: Schema.Boolean;
    }>;
}>>, Schema.toCodecStringTree<Schema.Struct<{
    readonly authorization: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly dpop: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, Schema.toCodecJson<Schema.Struct<{
    readonly ok: Schema.Boolean;
}>>, Schema.toCodecJson<typeof RelayAuthInvalidError | typeof RelayInternalError>, never, never>;
export declare const RelayRegisterLiveActivityEndpoint: HttpApiEndpoint.HttpApiEndpoint<"registerLiveActivity", "POST", "/v1/mobile/live-activities", never, never, Schema.toCodecJson<Schema.Struct<{
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly activityPushToken: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, Schema.toCodecStringTree<Schema.Struct<{
    readonly authorization: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly dpop: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, Schema.toCodecJson<Schema.Struct<{
    readonly ok: Schema.Boolean;
}>>, Schema.toCodecJson<typeof RelayAuthInvalidError | typeof RelayInternalError>, never, never>;
export declare const RelayAgentActivitySnapshotResponse: Schema.Struct<{
    readonly aggregate: Schema.NullOr<Schema.Struct<{
        readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly subtitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly activeCount: Schema.Int;
        readonly updatedAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly activities: Schema.$Array<Schema.Struct<{
            readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
            readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
            readonly projectTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly threadTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly modelTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly phase: Schema.Literals<readonly ["starting", "running", "waiting_for_approval", "waiting_for_input", "completed", "failed", "stale"]>;
            readonly status: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly updatedAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly deepLink: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>;
    }>>;
}>;
export type RelayAgentActivitySnapshotResponse = typeof RelayAgentActivitySnapshotResponse.Type;
export declare const RelayAgentActivitySnapshotEndpoint: HttpApiEndpoint.HttpApiEndpoint<"getAgentActivitySnapshot", "GET", "/v1/mobile/agent-activity", never, never, never, Schema.toCodecStringTree<Schema.Struct<{
    readonly authorization: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly dpop: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, Schema.toCodecJson<Schema.Struct<{
    readonly aggregate: Schema.NullOr<Schema.Struct<{
        readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly subtitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly activeCount: Schema.Int;
        readonly updatedAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly activities: Schema.$Array<Schema.Struct<{
            readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
            readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
            readonly projectTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly threadTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly modelTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly phase: Schema.Literals<readonly ["starting", "running", "waiting_for_approval", "waiting_for_input", "completed", "failed", "stale"]>;
            readonly status: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly updatedAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly deepLink: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>;
    }>>;
}>>, Schema.toCodecJson<typeof RelayAuthInvalidError | typeof RelayInternalError>, never, never>;
export declare const RelayUnregisterDeviceEndpoint: HttpApiEndpoint.HttpApiEndpoint<"unregisterDevice", "DELETE", "/v1/mobile/devices/:deviceId", Schema.toCodecStringTree<Schema.Struct<{
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, never, never, Schema.toCodecStringTree<Schema.Struct<{
    readonly authorization: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly dpop: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, Schema.toCodecJson<Schema.Struct<{
    readonly ok: Schema.Boolean;
}>>, Schema.toCodecJson<typeof RelayAuthInvalidError | typeof RelayInternalError>, never, never>;
export declare const RelayExchangeDpopAccessTokenEndpoint: HttpApiEndpoint.HttpApiEndpoint<"exchangeDpopAccessToken", "POST", "/v1/client/dpop-token", never, never, Schema.toCodecJson<Schema.Struct<{
    readonly grant_type: Schema.Literal<"urn:ietf:params:oauth:grant-type:token-exchange">;
    readonly subject_token: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly subject_token_type: Schema.Literal<"urn:ietf:params:oauth:token-type:jwt">;
    readonly requested_token_type: Schema.Literal<"urn:ietf:params:oauth:token-type:access_token">;
    readonly resource: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly scope: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly client_id: Schema.Literals<readonly ["t3-mobile", "t3-web"]>;
}>>, Schema.toCodecStringTree<Schema.Struct<{
    readonly dpop: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, Schema.toCodecJson<Schema.Struct<{
    readonly access_token: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly issued_token_type: Schema.Literal<"urn:ietf:params:oauth:token-type:access_token">;
    readonly token_type: Schema.Literal<"DPoP">;
    readonly expires_in: Schema.Int;
    readonly scope: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, Schema.toCodecJson<typeof RelayAuthInvalidError | typeof RelayInternalError>, never, never>;
export declare const RelayConnectEnvironmentEndpoint: HttpApiEndpoint.HttpApiEndpoint<"connectEnvironment", "POST", "/v1/environments/:environmentId/connect", Schema.toCodecStringTree<Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
}>>, never, Schema.toCodecJson<Schema.Struct<{
    readonly deviceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly clientKeyThumbprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly clientProofKeyThumbprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>>, Schema.toCodecStringTree<Schema.Struct<{
    readonly authorization: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly dpop: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, Schema.toCodecJson<Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly endpoint: Schema.Struct<{
        readonly httpBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly wsBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly providerKind: Schema.Literals<readonly ["manual", "cloudflare_tunnel", "t3_relay"]>;
    }>;
    readonly credential: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly expiresAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, Schema.toCodecJson<typeof RelayAuthInvalidError | typeof RelayEnvironmentConnectNotAuthorizedError | typeof RelayEnvironmentEndpointUnavailableError | typeof RelayEnvironmentEndpointTimedOutError | typeof RelayInternalError>, never, never>;
export declare const RelayGetEnvironmentStatusEndpoint: HttpApiEndpoint.HttpApiEndpoint<"getEnvironmentStatus", "POST", "/v1/environments/:environmentId/status", Schema.toCodecStringTree<Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
}>>, never, never, Schema.toCodecStringTree<Schema.Struct<{
    readonly authorization: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly dpop: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, Schema.toCodecJson<Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly endpoint: Schema.Struct<{
        readonly httpBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly wsBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly providerKind: Schema.Literals<readonly ["manual", "cloudflare_tunnel", "t3_relay"]>;
    }>;
    readonly status: Schema.Literals<readonly ["online", "offline"]>;
    readonly checkedAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly descriptor: Schema.optional<Schema.Struct<{
        readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly platform: Schema.Struct<{
            readonly os: Schema.Literals<readonly ["darwin", "linux", "windows", "unknown"]>;
            readonly arch: Schema.Literals<readonly ["arm64", "x64", "other"]>;
            readonly machine: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Literals<readonly ["server", "cloud", "linux", "desktop", "laptop", "mac-mini", "mac-studio"]>>, Schema.Unknown, never, never>>;
        }>;
        readonly serverVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly orchestrationProtocolVersion: Schema.optionalKey<Schema.Int>;
        readonly capabilities: Schema.Struct<{
            readonly repositoryIdentity: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly connectionProbe: Schema.optionalKey<Schema.Boolean>;
            readonly attachmentUploads: Schema.optionalKey<Schema.Boolean>;
            readonly questionAttachments: Schema.optionalKey<Schema.Boolean>;
            readonly fileAttachments: Schema.optionalKey<Schema.Struct<{
                readonly maxUploadBytes: Schema.Int;
            }>>;
            readonly pullRequests: Schema.optionalKey<Schema.Boolean>;
            readonly pullRequestChecks: Schema.optionalKey<Schema.Boolean>;
            readonly inlineMessageContext: Schema.optionalKey<Schema.Boolean>;
            readonly requiredWorktreeBootstrap: Schema.optionalKey<Schema.Boolean>;
            readonly threadSettlement: Schema.optionalKey<Schema.Boolean>;
            readonly threadAutoSettlement: Schema.optionalKey<Schema.Boolean>;
            readonly storageCleanup: Schema.optionalKey<Schema.Boolean>;
            readonly storageCleanupRun: Schema.optionalKey<Schema.Boolean>;
            readonly databaseStorage: Schema.optionalKey<Schema.Boolean>;
            readonly otlpEndpointCheck: Schema.optionalKey<Schema.Boolean>;
            readonly projectWorktreeCleanup: Schema.optionalKey<Schema.Boolean>;
            readonly settledWorktreeCleanup: Schema.optionalKey<Schema.Boolean>;
            readonly worktreesDirectory: Schema.optionalKey<Schema.Boolean>;
            readonly threadAutoSettlementScope: Schema.optionalKey<Schema.Boolean>;
            readonly threadRestartContinuation: Schema.optionalKey<Schema.Boolean>;
            readonly projectSettingsOverrides: Schema.optionalKey<Schema.Boolean>;
            readonly projectProviderInstanceOverrides: Schema.optionalKey<Schema.Boolean>;
            readonly threadSnooze: Schema.optionalKey<Schema.Boolean>;
            readonly environmentThemes: Schema.optionalKey<Schema.Boolean>;
            readonly usageLimitSources: Schema.optionalKey<Schema.Boolean>;
            readonly providerWorkspaceSnapshotsOnDemand: Schema.optionalKey<Schema.Boolean>;
            readonly usagePriceOverrides: Schema.optionalKey<Schema.Boolean>;
            readonly usageModelAliases: Schema.optionalKey<Schema.Boolean>;
            readonly threadPinning: Schema.optionalKey<Schema.Boolean>;
            readonly threadPinReorder: Schema.optionalKey<Schema.Boolean>;
            readonly threadActiveReorder: Schema.optionalKey<Schema.Boolean>;
            readonly threadAutoSettleOptOut: Schema.optionalKey<Schema.Boolean>;
            readonly threadTitleRegeneration: Schema.optionalKey<Schema.Boolean>;
            readonly threadVisitedTracking: Schema.optionalKey<Schema.Boolean>;
            readonly threadPullRequestLinking: Schema.optionalKey<Schema.Boolean>;
            readonly serverResolvedCommandContext: Schema.optionalKey<Schema.Boolean>;
            readonly threadStop: Schema.optionalKey<Schema.Boolean>;
            readonly localServerStop: Schema.optionalKey<Schema.Boolean>;
            readonly threadPullRequests: Schema.optionalKey<Schema.Boolean>;
            readonly threadPullRequestWatch: Schema.optionalKey<Schema.Boolean>;
            readonly pullRequestStackActions: Schema.optionalKey<Schema.Boolean>;
            readonly serverSelfUpdate: Schema.optionalKey<Schema.Literals<readonly ["boot-service", "respawn", "desktop-managed"]>>;
            readonly serverInstallation: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Union<readonly [Schema.Struct<{
                readonly kind: Schema.Literals<readonly ["npx", "pnpm-dlx", "bunx"]>;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"npm-global">;
                readonly prefix: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>>, Schema.Unknown, never, never>>;
            readonly serverSelfUpdateProgress: Schema.optionalKey<Schema.Boolean>;
            readonly serverUpdateThreadContinuation: Schema.optionalKey<Schema.Boolean>;
            readonly agentActivityPublishing: Schema.optionalKey<Schema.Boolean>;
            readonly projectCloneTracking: Schema.optionalKey<Schema.Boolean>;
            readonly ignoredFileListing: Schema.optionalKey<Schema.Boolean>;
            readonly environmentIcon: Schema.optionalKey<Schema.Boolean>;
            readonly desktopAppUpdate: Schema.optionalKey<Schema.Boolean>;
            readonly commandOutputStreaming: Schema.optionalKey<Schema.Boolean>;
            readonly serverBrowser: Schema.optionalKey<Schema.Boolean>;
            readonly peerLinks: Schema.optionalKey<Schema.Boolean>;
            readonly mcpModeLimitHeader: Schema.optionalKey<Schema.Boolean>;
            readonly linkFence: Schema.optionalKey<Schema.Boolean>;
            readonly triage: Schema.optionalKey<Schema.Boolean>;
        }>;
    }>>;
    readonly error: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly endpointFailure: Schema.optional<Schema.Literals<readonly ["tunnel_down", "origin_unreachable", "dns", "tls", "refused", "timeout", "invalid_response", "unknown"]>>;
    readonly endpointStatus: Schema.optional<Schema.Number>;
    readonly offlineReason: Schema.optional<Schema.Literals<readonly ["tunnel_released"]>>;
    readonly traceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>>, Schema.toCodecJson<typeof RelayAuthInvalidError | typeof RelayEnvironmentConnectNotAuthorizedError | typeof RelayEnvironmentEndpointUnavailableError | typeof RelayEnvironmentEndpointTimedOutError | typeof RelayInternalError>, never, never>;
export declare const RelayEnvironmentLinkPreferencesRequest: Schema.Struct<{
    readonly holdWebhooksWhileOffline: Schema.Boolean;
}>;
export type RelayEnvironmentLinkPreferencesRequest = typeof RelayEnvironmentLinkPreferencesRequest.Type;
export declare const RelayWakeHeldHooksResponse: Schema.Struct<{
    readonly pending: Schema.Boolean;
}>;
export type RelayWakeHeldHooksResponse = typeof RelayWakeHeldHooksResponse.Type;
export declare const RelayMobileTelemetrySignal: Schema.Literals<readonly ["logs", "metrics", "traces"]>;
export type RelayMobileTelemetrySignal = typeof RelayMobileTelemetrySignal.Type;
export declare const RelayApi: HttpApi.HttpApi<"RelayApi", HttpApiGroup.HttpApiGroup<"client", HttpApiEndpoint.HttpApiEndpoint<"createEnvironmentLinkChallenge", "POST", "/v1/client/environment-link-challenges", never, never, Schema.toCodecJson<Schema.Struct<{
    readonly notificationsEnabled: Schema.Boolean;
    readonly liveActivitiesEnabled: Schema.Boolean;
    readonly managedTunnelsEnabled: Schema.Boolean;
}>>, Schema.toCodecStringTree<Schema.Struct<{
    readonly authorization: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, Schema.toCodecJson<Schema.Struct<{
    readonly challenge: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly expiresAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, Schema.toCodecJson<typeof RelayAuthInvalidError | typeof RelayInternalError>, RelayClientAuth, never> | HttpApiEndpoint.HttpApiEndpoint<"listDevices", "GET", "/v1/client/devices", never, never, never, Schema.toCodecStringTree<Schema.Struct<{
    readonly authorization: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, Schema.toCodecJson<Schema.Struct<{
    readonly devices: Schema.$Array<Schema.Struct<{
        readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly androidApiLevel: Schema.optional<Schema.NullOr<Schema.Int>>;
        readonly appVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly notifications: Schema.Struct<{
            readonly enabled: Schema.Boolean;
            readonly notifyOnApproval: Schema.Boolean;
            readonly notifyOnInput: Schema.Boolean;
            readonly notifyOnCompletion: Schema.Boolean;
            readonly notifyOnFailure: Schema.Boolean;
        }>;
        readonly liveActivities: Schema.Struct<{
            readonly enabled: Schema.Boolean;
        }>;
        readonly updatedAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly platform: Schema.Literal<"ios">;
        readonly iosMajorVersion: Schema.Int;
    }>>;
}>>, Schema.toCodecJson<typeof RelayAuthInvalidError | typeof RelayInternalError>, RelayClientAuth, never> | HttpApiEndpoint.HttpApiEndpoint<"listDevicesV2", "GET", "/v2/client/devices", never, never, never, Schema.toCodecStringTree<Schema.Struct<{
    readonly authorization: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, Schema.toCodecJson<Schema.Struct<{
    readonly devices: Schema.$Array<Schema.Struct<{
        readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly platform: Schema.Literals<readonly ["ios", "android"]>;
        readonly iosMajorVersion: Schema.NullOr<Schema.Int>;
        readonly androidApiLevel: Schema.optional<Schema.NullOr<Schema.Int>>;
        readonly appVersion: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly notifications: Schema.Struct<{
            readonly enabled: Schema.Boolean;
            readonly notifyOnApproval: Schema.Boolean;
            readonly notifyOnInput: Schema.Boolean;
            readonly notifyOnCompletion: Schema.Boolean;
            readonly notifyOnFailure: Schema.Boolean;
        }>;
        readonly liveActivities: Schema.Struct<{
            readonly enabled: Schema.Boolean;
        }>;
        readonly updatedAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
}>>, Schema.toCodecJson<typeof RelayAuthInvalidError | typeof RelayInternalError>, RelayClientAuth, never> | HttpApiEndpoint.HttpApiEndpoint<"listEnvironments", "GET", "/v1/environments", never, never, never, Schema.toCodecStringTree<Schema.Struct<{
    readonly authorization: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, Schema.toCodecJson<Schema.Struct<{
    readonly environments: Schema.$Array<Schema.Struct<{
        readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly endpoint: Schema.Struct<{
            readonly httpBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly wsBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly providerKind: Schema.Literals<readonly ["manual", "cloudflare_tunnel", "t3_relay"]>;
        }>;
        readonly linkedAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
}>>, Schema.toCodecJson<typeof RelayAuthInvalidError | typeof RelayInternalError>, RelayClientAuth, never> | HttpApiEndpoint.HttpApiEndpoint<"releaseEnvironmentTunnel", "DELETE", "/v1/client/environment-links/:environmentId/tunnel", Schema.toCodecStringTree<Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
}>>, never, never, Schema.toCodecStringTree<Schema.Struct<{
    readonly authorization: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, Schema.toCodecJson<Schema.Struct<{
    readonly ok: Schema.Boolean;
}>>, Schema.toCodecJson<typeof RelayAuthInvalidError | typeof RelayInternalError>, RelayClientAuth, never> | HttpApiEndpoint.HttpApiEndpoint<"unlinkEnvironment", "DELETE", "/v1/client/environment-links/:environmentId", Schema.toCodecStringTree<Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
}>>, never, never, Schema.toCodecStringTree<Schema.Struct<{
    readonly authorization: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, Schema.toCodecJson<Schema.Struct<{
    readonly ok: Schema.Boolean;
}>>, Schema.toCodecJson<typeof RelayAuthInvalidError | typeof RelayInternalError>, RelayClientAuth, never> | HttpApiEndpoint.HttpApiEndpoint<"linkEnvironment", "POST", "/v1/client/environment-links", never, never, Schema.toCodecJson<Schema.Struct<{
    readonly deviceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly proof: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly notificationsEnabled: Schema.Boolean;
    readonly liveActivitiesEnabled: Schema.Boolean;
    readonly managedTunnelsEnabled: Schema.Boolean;
}>>, Schema.toCodecStringTree<Schema.Struct<{
    readonly authorization: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, Schema.toCodecJson<Schema.Struct<{
    readonly ok: Schema.Boolean;
    readonly cloudUserId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly endpoint: Schema.Struct<{
        readonly httpBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly wsBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly providerKind: Schema.Literals<readonly ["manual", "cloudflare_tunnel", "t3_relay"]>;
    }>;
    readonly endpointRuntime: Schema.NullOr<Schema.Struct<{
        readonly providerKind: Schema.Literals<readonly ["manual", "cloudflare_tunnel", "t3_relay"]>;
        readonly connectorToken: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly tunnelId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly tunnelName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
    readonly relayIssuer: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly environmentCredential: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cloudMintPublicKey: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, Schema.toCodecJson<typeof RelayAuthInvalidError | typeof RelayEnvironmentLinkProofExpiredError | typeof RelayEnvironmentLinkProofInvalidError | typeof RelayEnvironmentLinkFailedError | typeof RelayEnvironmentLinkUnavailableError | typeof RelayEnvironmentLinkLimitExceededError | typeof RelayInternalError>, RelayClientAuth, never>, false> | HttpApiGroup.HttpApiGroup<"dpopClient", HttpApiEndpoint.HttpApiEndpoint<"connectEnvironment", "POST", "/v1/environments/:environmentId/connect", Schema.toCodecStringTree<Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
}>>, never, Schema.toCodecJson<Schema.Struct<{
    readonly deviceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly clientKeyThumbprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly clientProofKeyThumbprint: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>>, Schema.toCodecStringTree<Schema.Struct<{
    readonly authorization: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly dpop: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, Schema.toCodecJson<Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly endpoint: Schema.Struct<{
        readonly httpBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly wsBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly providerKind: Schema.Literals<readonly ["manual", "cloudflare_tunnel", "t3_relay"]>;
    }>;
    readonly credential: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly expiresAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, Schema.toCodecJson<typeof RelayAuthInvalidError | typeof RelayEnvironmentConnectNotAuthorizedError | typeof RelayEnvironmentEndpointUnavailableError | typeof RelayEnvironmentEndpointTimedOutError | typeof RelayInternalError>, RelayDpopClientAuth, never> | HttpApiEndpoint.HttpApiEndpoint<"getEnvironmentStatus", "POST", "/v1/environments/:environmentId/status", Schema.toCodecStringTree<Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
}>>, never, never, Schema.toCodecStringTree<Schema.Struct<{
    readonly authorization: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly dpop: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, Schema.toCodecJson<Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly endpoint: Schema.Struct<{
        readonly httpBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly wsBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly providerKind: Schema.Literals<readonly ["manual", "cloudflare_tunnel", "t3_relay"]>;
    }>;
    readonly status: Schema.Literals<readonly ["online", "offline"]>;
    readonly checkedAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly descriptor: Schema.optional<Schema.Struct<{
        readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly platform: Schema.Struct<{
            readonly os: Schema.Literals<readonly ["darwin", "linux", "windows", "unknown"]>;
            readonly arch: Schema.Literals<readonly ["arm64", "x64", "other"]>;
            readonly machine: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Literals<readonly ["server", "cloud", "linux", "desktop", "laptop", "mac-mini", "mac-studio"]>>, Schema.Unknown, never, never>>;
        }>;
        readonly serverVersion: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly orchestrationProtocolVersion: Schema.optionalKey<Schema.Int>;
        readonly capabilities: Schema.Struct<{
            readonly repositoryIdentity: Schema.withDecodingDefault<Schema.Boolean, never>;
            readonly connectionProbe: Schema.optionalKey<Schema.Boolean>;
            readonly attachmentUploads: Schema.optionalKey<Schema.Boolean>;
            readonly questionAttachments: Schema.optionalKey<Schema.Boolean>;
            readonly fileAttachments: Schema.optionalKey<Schema.Struct<{
                readonly maxUploadBytes: Schema.Int;
            }>>;
            readonly pullRequests: Schema.optionalKey<Schema.Boolean>;
            readonly pullRequestChecks: Schema.optionalKey<Schema.Boolean>;
            readonly inlineMessageContext: Schema.optionalKey<Schema.Boolean>;
            readonly requiredWorktreeBootstrap: Schema.optionalKey<Schema.Boolean>;
            readonly threadSettlement: Schema.optionalKey<Schema.Boolean>;
            readonly threadAutoSettlement: Schema.optionalKey<Schema.Boolean>;
            readonly storageCleanup: Schema.optionalKey<Schema.Boolean>;
            readonly storageCleanupRun: Schema.optionalKey<Schema.Boolean>;
            readonly databaseStorage: Schema.optionalKey<Schema.Boolean>;
            readonly otlpEndpointCheck: Schema.optionalKey<Schema.Boolean>;
            readonly projectWorktreeCleanup: Schema.optionalKey<Schema.Boolean>;
            readonly settledWorktreeCleanup: Schema.optionalKey<Schema.Boolean>;
            readonly worktreesDirectory: Schema.optionalKey<Schema.Boolean>;
            readonly threadAutoSettlementScope: Schema.optionalKey<Schema.Boolean>;
            readonly threadRestartContinuation: Schema.optionalKey<Schema.Boolean>;
            readonly projectSettingsOverrides: Schema.optionalKey<Schema.Boolean>;
            readonly projectProviderInstanceOverrides: Schema.optionalKey<Schema.Boolean>;
            readonly threadSnooze: Schema.optionalKey<Schema.Boolean>;
            readonly environmentThemes: Schema.optionalKey<Schema.Boolean>;
            readonly usageLimitSources: Schema.optionalKey<Schema.Boolean>;
            readonly providerWorkspaceSnapshotsOnDemand: Schema.optionalKey<Schema.Boolean>;
            readonly usagePriceOverrides: Schema.optionalKey<Schema.Boolean>;
            readonly usageModelAliases: Schema.optionalKey<Schema.Boolean>;
            readonly threadPinning: Schema.optionalKey<Schema.Boolean>;
            readonly threadPinReorder: Schema.optionalKey<Schema.Boolean>;
            readonly threadActiveReorder: Schema.optionalKey<Schema.Boolean>;
            readonly threadAutoSettleOptOut: Schema.optionalKey<Schema.Boolean>;
            readonly threadTitleRegeneration: Schema.optionalKey<Schema.Boolean>;
            readonly threadVisitedTracking: Schema.optionalKey<Schema.Boolean>;
            readonly threadPullRequestLinking: Schema.optionalKey<Schema.Boolean>;
            readonly serverResolvedCommandContext: Schema.optionalKey<Schema.Boolean>;
            readonly threadStop: Schema.optionalKey<Schema.Boolean>;
            readonly localServerStop: Schema.optionalKey<Schema.Boolean>;
            readonly threadPullRequests: Schema.optionalKey<Schema.Boolean>;
            readonly threadPullRequestWatch: Schema.optionalKey<Schema.Boolean>;
            readonly pullRequestStackActions: Schema.optionalKey<Schema.Boolean>;
            readonly serverSelfUpdate: Schema.optionalKey<Schema.Literals<readonly ["boot-service", "respawn", "desktop-managed"]>>;
            readonly serverInstallation: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Union<readonly [Schema.Struct<{
                readonly kind: Schema.Literals<readonly ["npx", "pnpm-dlx", "bunx"]>;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"npm-global">;
                readonly prefix: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>>, Schema.Unknown, never, never>>;
            readonly serverSelfUpdateProgress: Schema.optionalKey<Schema.Boolean>;
            readonly serverUpdateThreadContinuation: Schema.optionalKey<Schema.Boolean>;
            readonly agentActivityPublishing: Schema.optionalKey<Schema.Boolean>;
            readonly projectCloneTracking: Schema.optionalKey<Schema.Boolean>;
            readonly ignoredFileListing: Schema.optionalKey<Schema.Boolean>;
            readonly environmentIcon: Schema.optionalKey<Schema.Boolean>;
            readonly desktopAppUpdate: Schema.optionalKey<Schema.Boolean>;
            readonly commandOutputStreaming: Schema.optionalKey<Schema.Boolean>;
            readonly serverBrowser: Schema.optionalKey<Schema.Boolean>;
            readonly peerLinks: Schema.optionalKey<Schema.Boolean>;
            readonly mcpModeLimitHeader: Schema.optionalKey<Schema.Boolean>;
            readonly linkFence: Schema.optionalKey<Schema.Boolean>;
            readonly triage: Schema.optionalKey<Schema.Boolean>;
        }>;
    }>>;
    readonly error: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly endpointFailure: Schema.optional<Schema.Literals<readonly ["tunnel_down", "origin_unreachable", "dns", "tls", "refused", "timeout", "invalid_response", "unknown"]>>;
    readonly endpointStatus: Schema.optional<Schema.Number>;
    readonly offlineReason: Schema.optional<Schema.Literals<readonly ["tunnel_released"]>>;
    readonly traceId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>>, Schema.toCodecJson<typeof RelayAuthInvalidError | typeof RelayEnvironmentConnectNotAuthorizedError | typeof RelayEnvironmentEndpointUnavailableError | typeof RelayEnvironmentEndpointTimedOutError | typeof RelayInternalError>, RelayDpopClientAuth, never>, false> | HttpApiGroup.HttpApiGroup<"health", HttpApiEndpoint.HttpApiEndpoint<"health", "GET", "/health", never, never, never, never, Schema.toCodecJson<Schema.Struct<{
    readonly ok: Schema.Boolean;
    readonly service: Schema.Literal<"relay">;
}>>, Schema.toCodecJson<typeof RelayInternalError>, never, never>, false> | HttpApiGroup.HttpApiGroup<"hooks", HttpApiEndpoint.HttpApiEndpoint<"forwardGet", "GET", "/v1/hooks/:endpointKey/:hookId/:token", Schema.toCodecStringTree<Schema.Struct<{
    readonly endpointKey: Schema.String;
    readonly hookId: Schema.String;
    readonly token: Schema.String;
}>>, never, never, never, Schema.toCodecJson<HttpApiSchema.NoContent>, never, never, never> | HttpApiEndpoint.HttpApiEndpoint<"forwardPatch", "PATCH", "/v1/hooks/:endpointKey/:hookId/:token", Schema.toCodecStringTree<Schema.Struct<{
    readonly endpointKey: Schema.String;
    readonly hookId: Schema.String;
    readonly token: Schema.String;
}>>, never, never, never, Schema.toCodecJson<HttpApiSchema.NoContent>, never, never, never> | HttpApiEndpoint.HttpApiEndpoint<"forwardPost", "POST", "/v1/hooks/:endpointKey/:hookId/:token", Schema.toCodecStringTree<Schema.Struct<{
    readonly endpointKey: Schema.String;
    readonly hookId: Schema.String;
    readonly token: Schema.String;
}>>, never, never, never, Schema.toCodecJson<HttpApiSchema.NoContent>, never, never, never> | HttpApiEndpoint.HttpApiEndpoint<"forwardPut", "PUT", "/v1/hooks/:endpointKey/:hookId/:token", Schema.toCodecStringTree<Schema.Struct<{
    readonly endpointKey: Schema.String;
    readonly hookId: Schema.String;
    readonly token: Schema.String;
}>>, never, never, never, Schema.toCodecJson<HttpApiSchema.NoContent>, never, never, never>, false> | HttpApiGroup.HttpApiGroup<"metadata", HttpApiEndpoint.HttpApiEndpoint<"authorizationServer", "GET", "/.well-known/oauth-authorization-server", never, never, never, never, Schema.toCodecJson<Schema.Struct<{
    readonly issuer: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly token_endpoint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly grant_types_supported: Schema.$Array<Schema.Literal<"urn:ietf:params:oauth:grant-type:token-exchange">>;
    readonly token_endpoint_auth_methods_supported: Schema.$Array<Schema.Literal<"none">>;
    readonly dpop_signing_alg_values_supported: Schema.$Array<Schema.Literal<"ES256">>;
    readonly scopes_supported: Schema.$Array<Schema.Literals<readonly ["environment:connect", "environment:status", "mobile:registration"]>>;
}>>, never, never, never> | HttpApiEndpoint.HttpApiEndpoint<"protectedResource", "GET", "/.well-known/oauth-protected-resource", never, never, never, never, Schema.toCodecJson<Schema.Struct<{
    readonly resource: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly authorization_servers: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly scopes_supported: Schema.$Array<Schema.Literals<readonly ["environment:connect", "environment:status", "mobile:registration"]>>;
    readonly dpop_bound_access_tokens_required: Schema.Boolean;
    readonly dpop_signing_alg_values_supported: Schema.$Array<Schema.Literal<"ES256">>;
}>>, never, never, never>, false> | HttpApiGroup.HttpApiGroup<"mobile", HttpApiEndpoint.HttpApiEndpoint<"getAgentActivitySnapshot", "GET", "/v1/mobile/agent-activity", never, never, never, Schema.toCodecStringTree<Schema.Struct<{
    readonly authorization: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly dpop: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, Schema.toCodecJson<Schema.Struct<{
    readonly aggregate: Schema.NullOr<Schema.Struct<{
        readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly subtitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly activeCount: Schema.Int;
        readonly updatedAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly activities: Schema.$Array<Schema.Struct<{
            readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
            readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
            readonly projectTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly threadTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly modelTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly phase: Schema.Literals<readonly ["starting", "running", "waiting_for_approval", "waiting_for_input", "completed", "failed", "stale"]>;
            readonly status: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly updatedAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly deepLink: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>>;
    }>>;
}>>, Schema.toCodecJson<typeof RelayAuthInvalidError | typeof RelayInternalError>, RelayDpopClientAuth, never> | HttpApiEndpoint.HttpApiEndpoint<"registerDevice", "POST", "/v1/mobile/devices", never, never, Schema.toCodecJson<Schema.Struct<{
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly platform: Schema.Literals<readonly ["ios", "android"]>;
    readonly iosMajorVersion: Schema.optional<Schema.Int>;
    readonly androidApiLevel: Schema.optional<Schema.Int>;
    readonly appVersion: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly bundleId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly apsEnvironment: Schema.optional<Schema.Literals<readonly ["sandbox", "production"]>>;
    readonly pushToken: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly pushToStartToken: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly preferences: Schema.Struct<{
        readonly liveActivitiesEnabled: Schema.Boolean;
        readonly notificationsEnabled: Schema.Boolean;
        readonly notifyOnApproval: Schema.Boolean;
        readonly notifyOnInput: Schema.Boolean;
        readonly notifyOnCompletion: Schema.Boolean;
        readonly notifyOnFailure: Schema.Boolean;
    }>;
}>>, Schema.toCodecStringTree<Schema.Struct<{
    readonly authorization: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly dpop: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, Schema.toCodecJson<Schema.Struct<{
    readonly ok: Schema.Boolean;
}>>, Schema.toCodecJson<typeof RelayAuthInvalidError | typeof RelayInternalError>, RelayDpopClientAuth, never> | HttpApiEndpoint.HttpApiEndpoint<"registerLiveActivity", "POST", "/v1/mobile/live-activities", never, never, Schema.toCodecJson<Schema.Struct<{
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly activityPushToken: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, Schema.toCodecStringTree<Schema.Struct<{
    readonly authorization: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly dpop: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, Schema.toCodecJson<Schema.Struct<{
    readonly ok: Schema.Boolean;
}>>, Schema.toCodecJson<typeof RelayAuthInvalidError | typeof RelayInternalError>, RelayDpopClientAuth, never> | HttpApiEndpoint.HttpApiEndpoint<"unregisterDevice", "DELETE", "/v1/mobile/devices/:deviceId", Schema.toCodecStringTree<Schema.Struct<{
    readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, never, never, Schema.toCodecStringTree<Schema.Struct<{
    readonly authorization: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly dpop: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, Schema.toCodecJson<Schema.Struct<{
    readonly ok: Schema.Boolean;
}>>, Schema.toCodecJson<typeof RelayAuthInvalidError | typeof RelayInternalError>, RelayDpopClientAuth, never>, false> | HttpApiGroup.HttpApiGroup<"mobileTelemetry", HttpApiEndpoint.HttpApiEndpoint<"ingest", "POST", "/v1/mobile/observe/:projectId/v1/:signal", Schema.toCodecStringTree<Schema.Struct<{
    readonly projectId: Schema.String;
    readonly signal: Schema.Literals<readonly ["logs", "metrics", "traces"]>;
}>>, never, never, never, Schema.toCodecJson<HttpApiSchema.NoContent>, never, never, never>, false> | HttpApiGroup.HttpApiGroup<"server", HttpApiEndpoint.HttpApiEndpoint<"recoverManagedEndpoint", "POST", "/v1/environments/:environmentId/tunnel", Schema.toCodecStringTree<Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
}>>, never, Schema.toCodecJson<Schema.Struct<{
    readonly cloudUserId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly origin: Schema.Struct<{
        readonly localHttpHost: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly localHttpPort: Schema.Int;
    }>;
    readonly proof: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, never, Schema.toCodecJson<Schema.Struct<{
    readonly endpoint: Schema.Struct<{
        readonly httpBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly wsBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly providerKind: Schema.Literals<readonly ["manual", "cloudflare_tunnel", "t3_relay"]>;
    }>;
    readonly endpointRuntime: Schema.Struct<{
        readonly providerKind: Schema.Literals<readonly ["manual", "cloudflare_tunnel", "t3_relay"]>;
        readonly connectorToken: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly tunnelId: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly tunnelName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>;
}>>, Schema.toCodecJson<typeof RelayAuthInvalidError | typeof RelayInternalError>, RelayEnvironmentAuth, never> | HttpApiEndpoint.HttpApiEndpoint<"registerManagedEndpointRecovery", "POST", "/v1/environments/:environmentId/tunnel/recovery", Schema.toCodecStringTree<Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
}>>, never, Schema.toCodecJson<Schema.Struct<{
    readonly cloudUserId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly tunnelId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly origin: Schema.Struct<{
        readonly localHttpHost: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly localHttpPort: Schema.Int;
    }>;
    readonly proof: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, never, Schema.toCodecJson<Schema.Struct<{
    readonly status: Schema.Literals<readonly ["ready", "recovery_required"]>;
}>>, Schema.toCodecJson<typeof RelayAuthInvalidError | typeof RelayInternalError>, RelayEnvironmentAuth, never> | HttpApiEndpoint.HttpApiEndpoint<"updateLinkPreferences", "POST", "/v1/environments/:environmentId/link-preferences", Schema.toCodecStringTree<Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
}>>, never, Schema.toCodecJson<Schema.Struct<{
    readonly holdWebhooksWhileOffline: Schema.Boolean;
}>>, never, Schema.toCodecJson<Schema.Struct<{
    readonly holdWebhooksWhileOffline: Schema.Boolean;
}>>, Schema.toCodecJson<typeof RelayAuthInvalidError | typeof RelayInternalError>, RelayEnvironmentAuth, never> | HttpApiEndpoint.HttpApiEndpoint<"wakeHeldHooks", "POST", "/v1/environments/:environmentId/hooks/wake", Schema.toCodecStringTree<Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
}>>, never, never, never, Schema.toCodecJson<Schema.Struct<{
    readonly pending: Schema.Boolean;
}>>, Schema.toCodecJson<typeof RelayAuthInvalidError | typeof RelayInternalError>, RelayEnvironmentAuth, never> | HttpApiEndpoint.HttpApiEndpoint<"publishAgentActivity", "POST", "/v1/environments/:environmentId/threads/:threadId/agent-activity", Schema.toCodecStringTree<Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
}>>, never, Schema.toCodecJson<Schema.Struct<{
    readonly state: Schema.NullOr<Schema.Struct<{
        readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
        readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
        readonly projectTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly threadTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly phase: Schema.Literals<readonly ["starting", "running", "waiting_for_approval", "waiting_for_input", "completed", "failed", "stale"]>;
        readonly headline: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly detail: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly modelTitle: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly updatedAt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly deepLink: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
    readonly proof: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, never, Schema.toCodecJson<Schema.Struct<{
    readonly ok: Schema.Boolean;
    readonly deliveries: Schema.$Array<Schema.Struct<{
        readonly deviceId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly kind: Schema.Literals<readonly ["live_activity_start", "live_activity_update", "live_activity_end", "push_notification"]>;
        readonly ok: Schema.Boolean;
        readonly queued: Schema.optional<Schema.Boolean>;
        readonly apnsStatus: Schema.NullOr<Schema.Number>;
        readonly apnsReason: Schema.NullOr<Schema.String>;
        readonly apnsId: Schema.NullOr<Schema.String>;
    }>>;
}>>, Schema.toCodecJson<typeof RelayAuthInvalidError | typeof RelayAgentActivityPublishProofExpiredError | typeof RelayAgentActivityPublishProofInvalidError | typeof RelayInternalError>, RelayEnvironmentAuth, never>, false> | HttpApiGroup.HttpApiGroup<"token", HttpApiEndpoint.HttpApiEndpoint<"exchangeDpopAccessToken", "POST", "/v1/client/dpop-token", never, never, Schema.toCodecJson<Schema.Struct<{
    readonly grant_type: Schema.Literal<"urn:ietf:params:oauth:grant-type:token-exchange">;
    readonly subject_token: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly subject_token_type: Schema.Literal<"urn:ietf:params:oauth:token-type:jwt">;
    readonly requested_token_type: Schema.Literal<"urn:ietf:params:oauth:token-type:access_token">;
    readonly resource: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly scope: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly client_id: Schema.Literals<readonly ["t3-mobile", "t3-web"]>;
}>>, Schema.toCodecStringTree<Schema.Struct<{
    readonly dpop: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, Schema.toCodecJson<Schema.Struct<{
    readonly access_token: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly issued_token_type: Schema.Literal<"urn:ietf:params:oauth:token-type:access_token">;
    readonly token_type: Schema.Literal<"DPoP">;
    readonly expires_in: Schema.Int;
    readonly scope: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>>, Schema.toCodecJson<typeof RelayAuthInvalidError | typeof RelayInternalError>, never, never>, false>>;
export type RelayApi = typeof RelayApi;
export {};
