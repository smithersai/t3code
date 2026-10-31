import * as Schema from "effect/Schema";
export declare const ORCHESTRATION_PROTOCOL_VERSION = 2;
export declare const ORCHESTRATION_PROTOCOL_VERSION_TEXT = "2";
export declare const ORCHESTRATION_PROTOCOL_QUERY_PARAM = "orchestrationProtocol";
export declare const ORCHESTRATION_PROTOCOL_HEADER = "x-t3-orchestration-protocol";
export declare const ExecutionEnvironmentPlatformOs: Schema.Literals<readonly ["darwin", "linux", "windows", "unknown"]>;
export type ExecutionEnvironmentPlatformOs = typeof ExecutionEnvironmentPlatformOs.Type;
export declare const ExecutionEnvironmentPlatformArch: Schema.Literals<readonly ["arm64", "x64", "other"]>;
export type ExecutionEnvironmentPlatformArch = typeof ExecutionEnvironmentPlatformArch.Type;
export declare const ENVIRONMENT_MACHINE_KINDS: readonly ["server", "cloud", "linux", "desktop", "laptop", "mac-mini", "mac-studio"];
export declare const EnvironmentMachineKind: Schema.Literals<readonly ["server", "cloud", "linux", "desktop", "laptop", "mac-mini", "mac-studio"]>;
export type EnvironmentMachineKind = typeof EnvironmentMachineKind.Type;
export declare const isEnvironmentMachineKind: <I>(input: I) => input is I & ("cloud" | "desktop" | "laptop" | "linux" | "mac-mini" | "mac-studio" | "server");
export declare const ExecutionEnvironmentPlatform: Schema.Struct<{
    readonly os: Schema.Literals<readonly ["darwin", "linux", "windows", "unknown"]>;
    readonly arch: Schema.Literals<readonly ["arm64", "x64", "other"]>;
    readonly machine: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Literals<readonly ["server", "cloud", "linux", "desktop", "laptop", "mac-mini", "mac-studio"]>>, Schema.Unknown, never, never>>;
}>;
export declare const ThreadEnvMode: Schema.Literals<readonly ["local", "worktree"]>;
export type ThreadEnvMode = typeof ThreadEnvMode.Type;
export declare const WorktreeSubmodules: Schema.Literals<readonly ["recursive", "top-level", "none"]>;
export type WorktreeSubmodules = typeof WorktreeSubmodules.Type;
export type ExecutionEnvironmentPlatform = typeof ExecutionEnvironmentPlatform.Type;
export declare const ServerSelfUpdateMethod: Schema.Literals<readonly ["boot-service", "respawn", "desktop-app"]>;
export type ServerSelfUpdateMethod = typeof ServerSelfUpdateMethod.Type;
export declare const ServerInstallation: Schema.Union<readonly [Schema.Struct<{
    readonly kind: Schema.Literals<readonly ["npx", "pnpm-dlx", "bunx"]>;
}>, Schema.Struct<{
    readonly kind: Schema.Literal<"npm-global">;
    readonly prefix: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>]>;
export type ServerInstallation = typeof ServerInstallation.Type;
export declare const ServerSelfUpdateCapability: Schema.Literals<readonly ["boot-service", "respawn", "desktop-managed"]>;
export type ServerSelfUpdateCapability = typeof ServerSelfUpdateCapability.Type;
export declare const ExecutionEnvironmentCapabilities: Schema.Struct<{
    readonly repositoryIdentity: Schema.withDecodingDefault<Schema.Boolean, never>;
    readonly connectionProbe: Schema.optionalKey<Schema.Boolean>;
    readonly attachmentUploads: Schema.optionalKey<Schema.Boolean>;
    readonly questionAttachments: Schema.optionalKey<Schema.Boolean>;
    readonly fileAttachments: Schema.optionalKey<Schema.Struct<{
        readonly maxUploadBytes: Schema.Int;
    }>>;
    readonly pullRequests: Schema.optionalKey<Schema.Boolean>;
    readonly pullRequestChecks: Schema.optionalKey<Schema.Boolean>;
    /** Absent on older servers; serialize context as legacy text for them. */
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
    /** Hide the switch when absent; older servers silently drop per-project provider patches. */
    readonly projectProviderInstanceOverrides: Schema.optionalKey<Schema.Boolean>;
    readonly threadSnooze: Schema.optionalKey<Schema.Boolean>;
    /** Clear published themes when absent; older servers never send updates. */
    readonly environmentThemes: Schema.optionalKey<Schema.Boolean>;
    readonly usageLimitSources: Schema.optionalKey<Schema.Boolean>;
    /** Honors `workspaceSnapshotsOnDemand`; older servers send every snapshot and drop them in the stream. */
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
    /** Absent on older servers and on Windows hosts, which cannot stop a discovered server. */
    readonly localServerStop: Schema.optionalKey<Schema.Boolean>;
    readonly threadPullRequests: Schema.optionalKey<Schema.Boolean>;
    readonly threadPullRequestWatch: Schema.optionalKey<Schema.Boolean>;
    readonly pullRequestStackActions: Schema.optionalKey<Schema.Boolean>;
    readonly serverSelfUpdate: Schema.optionalKey<Schema.Literals<readonly ["boot-service", "respawn", "desktop-managed"]>>;
    /** Manual commands must update this install, not the host's default global prefix. */
    readonly serverInstallation: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Union<readonly [Schema.Struct<{
        readonly kind: Schema.Literals<readonly ["npx", "pnpm-dlx", "bunx"]>;
    }>, Schema.Struct<{
        readonly kind: Schema.Literal<"npm-global">;
        readonly prefix: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>]>>, Schema.Unknown, never, never>>;
    readonly serverSelfUpdateProgress: Schema.optionalKey<Schema.Boolean>;
    readonly serverUpdateThreadContinuation: Schema.optionalKey<Schema.Boolean>;
    /** Only explicit false skips Live Activity seeding; older servers may still publish. */
    readonly agentActivityPublishing: Schema.optionalKey<Schema.Boolean>;
    readonly projectCloneTracking: Schema.optionalKey<Schema.Boolean>;
    /** Server answers projects.listIgnoredFiles. */
    readonly ignoredFileListing: Schema.optionalKey<Schema.Boolean>;
    readonly environmentIcon: Schema.optionalKey<Schema.Boolean>;
    readonly desktopAppUpdate: Schema.optionalKey<Schema.Boolean>;
    /** Subscribe to command output only when advertised; older servers never send it. */
    readonly commandOutputStreaming: Schema.optionalKey<Schema.Boolean>;
    /** Hosts headless Chromium tabs streamed over /api/preview-stream for clients without a local runtime. */
    readonly serverBrowser: Schema.optionalKey<Schema.Boolean>;
    /** Server links to other environments (`PeerLink`) and its agents can work
        in them. Absent on servers from before linking, which clients must not
        offer linking for. */
    readonly peerLinks: Schema.optionalKey<Schema.Boolean>;
    /** Server's `/mcp` narrows an OAuth client's modes from `T3-Mode-Limit`, so
        a linked environment's calls keep its agent's limits. Another environment
        links to this one only when it is set. */
    readonly mcpModeLimitHeader: Schema.optionalKey<Schema.Boolean>;
    /** Work a linked environment starts here stays within its link
        (`linkOrigin`). Another environment links to this one only when it is
        set, since without it that work could change the user's own threads. */
    readonly linkFence: Schema.optionalKey<Schema.Boolean>;
    /** Server answers server.prepareTriage. */
    readonly triage: Schema.optionalKey<Schema.Boolean>;
}>;
export type ExecutionEnvironmentCapabilities = typeof ExecutionEnvironmentCapabilities.Type;
export declare const ExecutionEnvironmentDescriptor: Schema.Struct<{
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
        /** Absent on older servers; serialize context as legacy text for them. */
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
        /** Hide the switch when absent; older servers silently drop per-project provider patches. */
        readonly projectProviderInstanceOverrides: Schema.optionalKey<Schema.Boolean>;
        readonly threadSnooze: Schema.optionalKey<Schema.Boolean>;
        /** Clear published themes when absent; older servers never send updates. */
        readonly environmentThemes: Schema.optionalKey<Schema.Boolean>;
        readonly usageLimitSources: Schema.optionalKey<Schema.Boolean>;
        /** Honors `workspaceSnapshotsOnDemand`; older servers send every snapshot and drop them in the stream. */
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
        /** Absent on older servers and on Windows hosts, which cannot stop a discovered server. */
        readonly localServerStop: Schema.optionalKey<Schema.Boolean>;
        readonly threadPullRequests: Schema.optionalKey<Schema.Boolean>;
        readonly threadPullRequestWatch: Schema.optionalKey<Schema.Boolean>;
        readonly pullRequestStackActions: Schema.optionalKey<Schema.Boolean>;
        readonly serverSelfUpdate: Schema.optionalKey<Schema.Literals<readonly ["boot-service", "respawn", "desktop-managed"]>>;
        /** Manual commands must update this install, not the host's default global prefix. */
        readonly serverInstallation: Schema.optionalKey<Schema.decodeTo<Schema.UndefinedOr<Schema.Union<readonly [Schema.Struct<{
            readonly kind: Schema.Literals<readonly ["npx", "pnpm-dlx", "bunx"]>;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"npm-global">;
            readonly prefix: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        }>]>>, Schema.Unknown, never, never>>;
        readonly serverSelfUpdateProgress: Schema.optionalKey<Schema.Boolean>;
        readonly serverUpdateThreadContinuation: Schema.optionalKey<Schema.Boolean>;
        /** Only explicit false skips Live Activity seeding; older servers may still publish. */
        readonly agentActivityPublishing: Schema.optionalKey<Schema.Boolean>;
        readonly projectCloneTracking: Schema.optionalKey<Schema.Boolean>;
        /** Server answers projects.listIgnoredFiles. */
        readonly ignoredFileListing: Schema.optionalKey<Schema.Boolean>;
        readonly environmentIcon: Schema.optionalKey<Schema.Boolean>;
        readonly desktopAppUpdate: Schema.optionalKey<Schema.Boolean>;
        /** Subscribe to command output only when advertised; older servers never send it. */
        readonly commandOutputStreaming: Schema.optionalKey<Schema.Boolean>;
        /** Hosts headless Chromium tabs streamed over /api/preview-stream for clients without a local runtime. */
        readonly serverBrowser: Schema.optionalKey<Schema.Boolean>;
        /** Server links to other environments (`PeerLink`) and its agents can work
            in them. Absent on servers from before linking, which clients must not
            offer linking for. */
        readonly peerLinks: Schema.optionalKey<Schema.Boolean>;
        /** Server's `/mcp` narrows an OAuth client's modes from `T3-Mode-Limit`, so
            a linked environment's calls keep its agent's limits. Another environment
            links to this one only when it is set. */
        readonly mcpModeLimitHeader: Schema.optionalKey<Schema.Boolean>;
        /** Work a linked environment starts here stays within its link
            (`linkOrigin`). Another environment links to this one only when it is
            set, since without it that work could change the user's own threads. */
        readonly linkFence: Schema.optionalKey<Schema.Boolean>;
        /** Server answers server.prepareTriage. */
        readonly triage: Schema.optionalKey<Schema.Boolean>;
    }>;
}>;
export type ExecutionEnvironmentDescriptor = typeof ExecutionEnvironmentDescriptor.Type;
export declare const RepositoryIdentityLocator: Schema.Struct<{
    readonly source: Schema.Literal<"git-remote">;
    readonly remoteName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly remoteUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type RepositoryIdentityLocator = typeof RepositoryIdentityLocator.Type;
export declare const RepositoryOrigin: Schema.Struct<{
    readonly canonicalKey: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly remoteUrl: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly displayName: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type RepositoryOrigin = typeof RepositoryOrigin.Type;
export declare const RepositoryIdentity: Schema.Struct<{
    readonly canonicalKey: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly locator: Schema.Struct<{
        readonly source: Schema.Literal<"git-remote">;
        readonly remoteName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly remoteUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>;
    readonly webUrl: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    /** Work tree root, or the git dir for a bare repository. */
    readonly rootPath: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly displayName: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly provider: Schema.optionalKey<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">>;
    readonly owner: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly name: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly origin: Schema.optionalKey<Schema.Struct<{
        readonly canonicalKey: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly remoteUrl: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly displayName: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>;
}>;
export type RepositoryIdentity = typeof RepositoryIdentity.Type;
export declare function repositoryGroupingKeyOf(identity: RepositoryIdentity): string;
export declare function repositoryGroupingDisplayNameOf(identity: RepositoryIdentity): string | undefined;
export declare const ScopedProjectRef: Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
}>;
export type ScopedProjectRef = typeof ScopedProjectRef.Type;
export declare const ScopedThreadRef: Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
}>;
export type ScopedThreadRef = typeof ScopedThreadRef.Type;
