import * as Schema from "effect/Schema";
export declare function officialAcpRegistryIconUrlForAgentId(agentId: string | null | undefined): string | null;
export declare function resolveOfficialAcpRegistryIconUrl(icon: string | null | undefined): string | null;
export declare const AcpRegistryDistribution: Schema.Literals<readonly ["binary", "npx", "uvx"]>;
export type AcpRegistryDistribution = typeof AcpRegistryDistribution.Type;
export declare const AcpRegistryIntegrity: Schema.Literals<readonly ["sha256", "registry"]>;
export type AcpRegistryIntegrity = typeof AcpRegistryIntegrity.Type;
export declare const ACP_REGISTRY_MAX_AGENTS = 512;
export declare const AcpRegistrySearchInput: Schema.Struct<{
    readonly query: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly limit: Schema.optional<Schema.Int>;
}>;
export type AcpRegistrySearchInput = typeof AcpRegistrySearchInput.Type;
export declare const AcpRegistrySearchAgent: Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly version: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly description: Schema.String;
    readonly authors: Schema.$Array<Schema.String>;
    readonly license: Schema.NullOr<Schema.String>;
    readonly website: Schema.NullOr<Schema.String>;
    readonly repository: Schema.NullOr<Schema.String>;
    readonly icon: Schema.NullOr<Schema.String>;
    readonly distribution: Schema.Literals<readonly ["binary", "npx", "uvx"]>;
    readonly integrity: Schema.Literals<readonly ["sha256", "registry"]>;
}>;
export type AcpRegistrySearchAgent = typeof AcpRegistrySearchAgent.Type;
export declare const AcpRegistrySearchResult: Schema.Struct<{
    readonly agents: Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly version: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly description: Schema.String;
        readonly authors: Schema.$Array<Schema.String>;
        readonly license: Schema.NullOr<Schema.String>;
        readonly website: Schema.NullOr<Schema.String>;
        readonly repository: Schema.NullOr<Schema.String>;
        readonly icon: Schema.NullOr<Schema.String>;
        readonly distribution: Schema.Literals<readonly ["binary", "npx", "uvx"]>;
        readonly integrity: Schema.Literals<readonly ["sha256", "registry"]>;
    }>>;
}>;
export type AcpRegistrySearchResult = typeof AcpRegistrySearchResult.Type;
export declare const AcpRegistryPrepareInput: Schema.Struct<{
    readonly agentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type AcpRegistryPrepareInput = typeof AcpRegistryPrepareInput.Type;
export declare const AcpRegistryPrepareResult: Schema.Struct<{
    readonly agentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly version: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly distribution: Schema.Literals<readonly ["binary", "npx", "uvx"]>;
    readonly prepared: Schema.Literal<true>;
}>;
export type AcpRegistryPrepareResult = typeof AcpRegistryPrepareResult.Type;
export declare const AcpRegistryManagedBinaryUninstallInput: Schema.Struct<{
    readonly agentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type AcpRegistryManagedBinaryUninstallInput = typeof AcpRegistryManagedBinaryUninstallInput.Type;
export declare const AcpRegistryManagedBinaryUninstallResult: Schema.Struct<{
    readonly agentId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly removed: Schema.Boolean;
}>;
export type AcpRegistryManagedBinaryUninstallResult = typeof AcpRegistryManagedBinaryUninstallResult.Type;
export declare const AcpRegistryProbeAuthMethod: Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly description: Schema.NullOr<Schema.String>;
    readonly type: Schema.Literals<readonly ["agent", "env_var", "terminal"]>;
    readonly command: Schema.optionalKey<Schema.String>;
    readonly envVarNames: Schema.optionalKey<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    readonly link: Schema.optionalKey<Schema.String>;
}>;
export type AcpRegistryProbeAuthMethod = typeof AcpRegistryProbeAuthMethod.Type;
export declare const AcpRegistryUrlAuthAction: Schema.Struct<{
    readonly elicitationId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly url: Schema.String;
    readonly message: Schema.String;
    readonly createdAt: Schema.optionalKey<Schema.String>;
    readonly expiresAt: Schema.optionalKey<Schema.String>;
}>;
export type AcpRegistryUrlAuthAction = typeof AcpRegistryUrlAuthAction.Type;
export declare const AcpRegistryAcceptUrlAuthInput: Schema.Struct<{
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly elicitationId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type AcpRegistryAcceptUrlAuthInput = typeof AcpRegistryAcceptUrlAuthInput.Type;
export declare const AcpRegistryAcceptUrlAuthResult: Schema.Struct<{
    readonly accepted: Schema.Boolean;
}>;
export type AcpRegistryAcceptUrlAuthResult = typeof AcpRegistryAcceptUrlAuthResult.Type;
export declare const AcpRegistrySession: Schema.Struct<{
    readonly sessionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly additionalDirectories: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly title: Schema.NullOr<Schema.String>;
    readonly updatedAt: Schema.NullOr<Schema.String>;
    readonly importedThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
}>;
export type AcpRegistrySession = typeof AcpRegistrySession.Type;
export declare const AcpRegistryListSessionsInput: Schema.Struct<{
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly cursor: Schema.optionalKey<Schema.String>;
}>;
export type AcpRegistryListSessionsInput = typeof AcpRegistryListSessionsInput.Type;
export declare const AcpRegistryListSessionsResult: Schema.Struct<{
    readonly sessions: Schema.$Array<Schema.Struct<{
        readonly sessionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly additionalDirectories: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly title: Schema.NullOr<Schema.String>;
        readonly updatedAt: Schema.NullOr<Schema.String>;
        readonly importedThreadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
    }>>;
    readonly nextCursor: Schema.NullOr<Schema.String>;
    readonly canLoad: Schema.Boolean;
    readonly canResume: Schema.Boolean;
    readonly canDelete: Schema.Boolean;
}>;
export type AcpRegistryListSessionsResult = typeof AcpRegistryListSessionsResult.Type;
export declare const AcpRegistryImportSessionInput: Schema.Struct<{
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly sessionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly title: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    readonly updatedAt: Schema.optionalKey<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
}>;
export type AcpRegistryImportSessionInput = typeof AcpRegistryImportSessionInput.Type;
export declare const AcpRegistryImportSessionResult: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly imported: Schema.Boolean;
}>;
export type AcpRegistryImportSessionResult = typeof AcpRegistryImportSessionResult.Type;
export declare const AcpRegistryDeleteSessionInput: Schema.Struct<{
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly sessionId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type AcpRegistryDeleteSessionInput = typeof AcpRegistryDeleteSessionInput.Type;
export declare const AcpRegistryDeleteSessionResult: Schema.Struct<{
    readonly deleted: Schema.Literal<true>;
}>;
export type AcpRegistryDeleteSessionResult = typeof AcpRegistryDeleteSessionResult.Type;
export declare const AcpRegistryConfigurableProvider: Schema.Struct<{
    readonly providerId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly supported: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly required: Schema.Boolean;
    readonly current: Schema.NullOr<Schema.Struct<{
        readonly apiType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly baseUrl: Schema.String;
    }>>;
}>;
export type AcpRegistryConfigurableProvider = typeof AcpRegistryConfigurableProvider.Type;
export declare const AcpRegistryListProvidersInput: Schema.Struct<{
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
}>;
export type AcpRegistryListProvidersInput = typeof AcpRegistryListProvidersInput.Type;
export declare const AcpRegistryListProvidersResult: Schema.Struct<{
    readonly providers: Schema.$Array<Schema.Struct<{
        readonly providerId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly supported: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly required: Schema.Boolean;
        readonly current: Schema.NullOr<Schema.Struct<{
            readonly apiType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly baseUrl: Schema.String;
        }>>;
    }>>;
}>;
export type AcpRegistryListProvidersResult = typeof AcpRegistryListProvidersResult.Type;
export declare const AcpRegistrySetProviderInput: Schema.Struct<{
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly providerId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly apiType: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly baseUrl: Schema.String;
    readonly headers: Schema.optionalKey<Schema.$Record<Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.String>>;
}>;
export type AcpRegistrySetProviderInput = typeof AcpRegistrySetProviderInput.Type;
export declare const AcpRegistrySetProviderResult: Schema.Struct<{
    readonly configured: Schema.Literal<true>;
}>;
export type AcpRegistrySetProviderResult = typeof AcpRegistrySetProviderResult.Type;
export declare const AcpRegistryDisableProviderInput: Schema.Struct<{
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly providerId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type AcpRegistryDisableProviderInput = typeof AcpRegistryDisableProviderInput.Type;
export declare const AcpRegistryDisableProviderResult: Schema.Struct<{
    readonly disabled: Schema.Literal<true>;
}>;
export type AcpRegistryDisableProviderResult = typeof AcpRegistryDisableProviderResult.Type;
export declare const AcpRegistryLogoutInput: Schema.Struct<{
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
}>;
export type AcpRegistryLogoutInput = typeof AcpRegistryLogoutInput.Type;
export declare const AcpRegistryLogoutResult: Schema.Struct<{
    readonly loggedOut: Schema.Literal<true>;
}>;
export type AcpRegistryLogoutResult = typeof AcpRegistryLogoutResult.Type;
export declare const AcpRegistryProbeModel: Schema.Struct<{
    readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly description: Schema.NullOr<Schema.String>;
}>;
export type AcpRegistryProbeModel = typeof AcpRegistryProbeModel.Type;
export declare const AcpRegistryProbeResult: Schema.Struct<{
    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
    readonly ready: Schema.Literal<true>;
    readonly icon: Schema.NullOr<Schema.String>;
    readonly authMethods: Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly description: Schema.NullOr<Schema.String>;
        readonly type: Schema.Literals<readonly ["agent", "env_var", "terminal"]>;
        readonly command: Schema.optionalKey<Schema.String>;
        readonly envVarNames: Schema.optionalKey<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        readonly link: Schema.optionalKey<Schema.String>;
    }>>;
    readonly models: Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly description: Schema.NullOr<Schema.String>;
    }>>;
    readonly currentModelId: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly configOptions: Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly type: Schema.Literal<"select">;
        readonly options: Schema.$Array<Schema.Struct<{
            readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly isDefault: Schema.optional<Schema.Boolean>;
        }>>;
        readonly currentValue: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly promptInjectedValues: Schema.optional<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    }>, Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly description: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly type: Schema.Literal<"boolean">;
        readonly currentValue: Schema.optional<Schema.Boolean>;
    }>]>>;
    readonly sessionManagement: Schema.withDecodingDefault<Schema.Struct<{
        readonly canList: Schema.Boolean;
        readonly canLoad: Schema.Boolean;
        readonly canResume: Schema.Boolean;
        readonly canLogout: Schema.Boolean;
        readonly canDelete: Schema.Boolean;
        readonly canConfigureProviders: Schema.Boolean;
    }>, never>;
}>;
export type AcpRegistryProbeResult = typeof AcpRegistryProbeResult.Type;
export declare const AcpRegistryOperationErrorReason: Schema.Literals<readonly ["agent_not_configured", "agent_not_found", "archive_invalid", "authentication_failed", "checksum_mismatch", "download_failed", "install_failed", "instance_not_found", "logout_unsupported", "logout_failed", "probe_failed", "project_not_found", "registry_unavailable", "runner_unavailable", "session_import_failed", "session_delete_unsupported", "session_delete_failed", "session_list_unsupported", "session_resume_unsupported", "providers_unsupported", "providers_list_failed", "provider_configuration_failed", "unsupported_distribution", "unsupported_platform"]>;
export type AcpRegistryOperationErrorReason = typeof AcpRegistryOperationErrorReason.Type;
declare const AcpRegistryOperationError_base: Schema.Class<AcpRegistryOperationError, Schema.TaggedStruct<"AcpRegistryOperationError", {
    readonly reason: Schema.Literals<readonly ["agent_not_configured", "agent_not_found", "archive_invalid", "authentication_failed", "checksum_mismatch", "download_failed", "install_failed", "instance_not_found", "logout_unsupported", "logout_failed", "probe_failed", "project_not_found", "registry_unavailable", "runner_unavailable", "session_import_failed", "session_delete_unsupported", "session_delete_failed", "session_list_unsupported", "session_resume_unsupported", "providers_unsupported", "providers_list_failed", "provider_configuration_failed", "unsupported_distribution", "unsupported_platform"]>;
    readonly message: Schema.String;
    readonly authMethods: Schema.optionalKey<Schema.$Array<Schema.Struct<{
        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly description: Schema.NullOr<Schema.String>;
        readonly type: Schema.Literals<readonly ["agent", "env_var", "terminal"]>;
        readonly command: Schema.optionalKey<Schema.String>;
        readonly envVarNames: Schema.optionalKey<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
        readonly link: Schema.optionalKey<Schema.String>;
    }>>>;
    readonly authAction: Schema.optionalKey<Schema.Struct<{
        readonly elicitationId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.String;
        readonly message: Schema.String;
        readonly createdAt: Schema.optionalKey<Schema.String>;
        readonly expiresAt: Schema.optionalKey<Schema.String>;
    }>>;
    readonly cause: Schema.optionalKey<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class AcpRegistryOperationError extends AcpRegistryOperationError_base {
}
export {};
