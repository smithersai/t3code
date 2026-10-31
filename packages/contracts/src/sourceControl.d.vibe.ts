import * as Schema from "effect/Schema";
/** Accept unknown hosts so clients can fall back to generic presentation. */
export declare const SourceControlProviderKind: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">;
export type SourceControlProviderKind = typeof SourceControlProviderKind.Type;
export declare const SourceControlProviderInfo: Schema.Struct<{
    readonly kind: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">;
    readonly name: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly baseUrl: Schema.String;
}>;
export type SourceControlProviderInfo = typeof SourceControlProviderInfo.Type;
export declare const ChangeRequestState: Schema.Literals<readonly ["open", "closed", "merged"]>;
export type ChangeRequestState = typeof ChangeRequestState.Type;
export declare const ChangeRequest: Schema.Struct<{
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">;
    readonly number: Schema.Int;
    readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly url: Schema.String;
    readonly baseRefName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly headRefName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly headSha: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
    readonly isDraft: Schema.optional<Schema.Boolean>;
    readonly closedAt: Schema.optional<Schema.NullOr<Schema.String>>;
    readonly mergedAt: Schema.optional<Schema.NullOr<Schema.String>>;
    readonly updatedAt: Schema.Option<Schema.DateTimeUtc>;
    readonly isCrossRepository: Schema.optional<Schema.Boolean>;
    readonly headRepositoryNameWithOwner: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    readonly headRepositoryOwnerLogin: Schema.optional<Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
}>;
export type ChangeRequest = typeof ChangeRequest.Type;
export declare const SourceControlRepositoryCloneUrls: Schema.Struct<{
    readonly nameWithOwner: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly sshUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type SourceControlRepositoryCloneUrls = typeof SourceControlRepositoryCloneUrls.Type;
export declare const SourceControlRepositoryVisibility: Schema.Literals<readonly ["private", "public"]>;
export type SourceControlRepositoryVisibility = typeof SourceControlRepositoryVisibility.Type;
export declare const SourceControlCloneProtocol: Schema.Literals<readonly ["auto", "ssh", "https"]>;
export type SourceControlCloneProtocol = typeof SourceControlCloneProtocol.Type;
export declare const SourceControlRepositoryInfo: Schema.Struct<{
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">;
    readonly nameWithOwner: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly sshUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
}>;
export type SourceControlRepositoryInfo = typeof SourceControlRepositoryInfo.Type;
export declare const SourceControlRepositoryLookupInput: Schema.Struct<{
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">;
    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cwd: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type SourceControlRepositoryLookupInput = typeof SourceControlRepositoryLookupInput.Type;
export declare const SourceControlCloneRepositoryInput: Schema.Struct<{
    readonly provider: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">>;
    readonly repository: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly remoteUrl: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly destinationPath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly protocol: Schema.optional<Schema.Literals<readonly ["auto", "ssh", "https"]>>;
}>;
export type SourceControlCloneRepositoryInput = typeof SourceControlCloneRepositoryInput.Type;
export declare const SourceControlCloneRepositoryResult: Schema.Struct<{
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly remoteUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly repository: Schema.NullOr<Schema.Struct<{
        readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">;
        readonly nameWithOwner: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly sshUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>>;
}>;
export type SourceControlCloneRepositoryResult = typeof SourceControlCloneRepositoryResult.Type;
export declare const SourceControlPublishRepositoryInput: Schema.Struct<{
    readonly cwd: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">;
    readonly repository: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly visibility: Schema.Literals<readonly ["private", "public"]>;
    readonly remoteName: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly protocol: Schema.optional<Schema.Literals<readonly ["auto", "ssh", "https"]>>;
}>;
export type SourceControlPublishRepositoryInput = typeof SourceControlPublishRepositoryInput.Type;
export declare const SourceControlPublishStatus: Schema.Literals<readonly ["pushed", "remote_added"]>;
export type SourceControlPublishStatus = typeof SourceControlPublishStatus.Type;
export declare const SourceControlPublishRepositoryResult: Schema.Struct<{
    readonly repository: Schema.Struct<{
        readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">;
        readonly nameWithOwner: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly sshUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>;
    readonly remoteName: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly remoteUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly branch: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly upstreamBranch: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly status: Schema.Literals<readonly ["pushed", "remote_added"]>;
}>;
export type SourceControlPublishRepositoryResult = typeof SourceControlPublishRepositoryResult.Type;
export declare const SourceControlDiscoveryStatus: Schema.Literals<readonly ["available", "missing"]>;
export type SourceControlDiscoveryStatus = typeof SourceControlDiscoveryStatus.Type;
export declare const SourceControlProviderAuthStatus: Schema.Literals<readonly ["authenticated", "unauthenticated", "unknown"]>;
export type SourceControlProviderAuthStatus = typeof SourceControlProviderAuthStatus.Type;
export declare const SourceControlProviderAuth: Schema.Struct<{
    readonly status: Schema.Literals<readonly ["authenticated", "unauthenticated", "unknown"]>;
    readonly account: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly host: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly detail: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly accounts: Schema.optionalKey<Schema.$Array<Schema.Struct<{
        readonly host: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly account: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly active: Schema.Boolean;
        readonly authenticated: Schema.Boolean;
        readonly error: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** Set when the login comes from a token variable such as `GH_TOKEN`, which wins over Settings. */
        readonly environmentVariable: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>>>;
}>;
export type SourceControlProviderAuth = typeof SourceControlProviderAuth.Type;
export declare const VcsDiscoveryItem: Schema.Struct<{
    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly executable: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly status: Schema.Literals<readonly ["available", "missing"]>;
    readonly version: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly installHint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly detail: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly kind: Schema.Literals<readonly ["git", "jj", "unknown"]>;
    readonly implemented: Schema.Boolean;
}>;
export type VcsDiscoveryItem = typeof VcsDiscoveryItem.Type;
export declare const SourceControlProviderDiscoveryItem: Schema.Struct<{
    readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly executable: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly status: Schema.Literals<readonly ["available", "missing"]>;
    readonly version: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly installHint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly detail: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly kind: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">;
    readonly auth: Schema.Struct<{
        readonly status: Schema.Literals<readonly ["authenticated", "unauthenticated", "unknown"]>;
        readonly account: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly host: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly detail: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly accounts: Schema.optionalKey<Schema.$Array<Schema.Struct<{
            readonly host: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly account: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly active: Schema.Boolean;
            readonly authenticated: Schema.Boolean;
            readonly error: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            /** Set when the login comes from a token variable such as `GH_TOKEN`, which wins over Settings. */
            readonly environmentVariable: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>>;
    }>;
}>;
export type SourceControlProviderDiscoveryItem = typeof SourceControlProviderDiscoveryItem.Type;
export declare const SourceControlDiscoveryResult: Schema.Struct<{
    readonly versionControlSystems: Schema.$Array<Schema.Struct<{
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly executable: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly status: Schema.Literals<readonly ["available", "missing"]>;
        readonly version: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly installHint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly detail: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly kind: Schema.Literals<readonly ["git", "jj", "unknown"]>;
        readonly implemented: Schema.Boolean;
    }>>;
    readonly sourceControlProviders: Schema.$Array<Schema.Struct<{
        readonly label: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly executable: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly status: Schema.Literals<readonly ["available", "missing"]>;
        readonly version: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly installHint: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly detail: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly kind: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">;
        readonly auth: Schema.Struct<{
            readonly status: Schema.Literals<readonly ["authenticated", "unauthenticated", "unknown"]>;
            readonly account: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly host: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly detail: Schema.Option<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly accounts: Schema.optionalKey<Schema.$Array<Schema.Struct<{
                readonly host: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly account: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly active: Schema.Boolean;
                readonly authenticated: Schema.Boolean;
                readonly error: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                /** Set when the login comes from a token variable such as `GH_TOKEN`, which wins over Settings. */
                readonly environmentVariable: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>>;
        }>;
    }>>;
}>;
export type SourceControlDiscoveryResult = typeof SourceControlDiscoveryResult.Type;
declare const SourceControlProviderError_base: Schema.Class<SourceControlProviderError, Schema.TaggedStruct<"SourceControlProviderError", {
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">;
    readonly operation: Schema.String;
    readonly cwd: Schema.String;
    readonly command: Schema.optional<Schema.String>;
    readonly repository: Schema.optional<Schema.String>;
    readonly reference: Schema.optional<Schema.String>;
    readonly detail: Schema.String;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class SourceControlProviderError extends SourceControlProviderError_base {
    get message(): string;
}
declare const SourceControlRepositoryError_base: Schema.Class<SourceControlRepositoryError, Schema.TaggedStruct<"SourceControlRepositoryError", {
    readonly provider: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SourceControlProviderKind">;
    readonly operation: Schema.String;
    readonly detail: Schema.String;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class SourceControlRepositoryError extends SourceControlRepositoryError_base {
    get message(): string;
}
export {};
