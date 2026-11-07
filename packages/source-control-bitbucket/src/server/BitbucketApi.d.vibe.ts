import * as Config from "effect/Config";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import { type SourceControlProviderAuth, type SourceControlRepositoryCloneUrls, type SourceControlRepositoryVisibility } from "@t3tools/contracts";
import { HttpClient } from "effect/http";
import { type NormalizedBitbucketPullRequestRecord } from "./bitbucketPullRequests.vibe";
import * as SourceControlProvider from "@t3tools/source-control-core/server/SourceControlProvider";
import * as SourceControlHost from "@t3tools/source-control-core/server/SourceControlHost";
import * as SourceControlRateLimit from "@t3tools/source-control-core/server/SourceControlRateLimit";
declare const BitbucketRepositoryLocatorError_base: Schema.Class<BitbucketRepositoryLocatorError, Schema.TaggedStruct<"BitbucketRepositoryLocatorError", {
    readonly repository: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class BitbucketRepositoryLocatorError extends BitbucketRepositoryLocatorError_base {
    static readonly detail = "Bitbucket repositories must be specified as workspace/repository.";
    get detail(): string;
    get userFacingDetail(): string;
    get message(): string;
}
declare const BitbucketRequestError_base: Schema.Class<BitbucketRequestError, Schema.TaggedStruct<"BitbucketRequestError", {
    readonly operation: Schema.Literals<readonly ["resolveRepository", "getRepository", "getBranchingModel", "getPullRequest", "listPullRequests", "createRepository", "createPullRequest", "probeAuth", "checkoutPullRequest", "request"]>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class BitbucketRequestError extends BitbucketRequestError_base {
    get detail(): string;
    get message(): string;
}
declare const BitbucketResponseError_base: Schema.Class<BitbucketResponseError, Schema.TaggedStruct<"BitbucketResponseError", {
    readonly operation: Schema.Literals<readonly ["resolveRepository", "getRepository", "getBranchingModel", "getPullRequest", "listPullRequests", "createRepository", "createPullRequest", "probeAuth", "checkoutPullRequest", "request"]>;
    readonly status: Schema.Int;
    readonly responseBodyLength: Schema.Int;
    readonly retryAt: Schema.optional<Schema.Number>;
}>, import("effect/Cause").YieldableError>;
export declare class BitbucketResponseError extends BitbucketResponseError_base {
    get detail(): string;
    get message(): string;
}
declare const BitbucketResponseBodyReadError_base: Schema.Class<BitbucketResponseBodyReadError, Schema.TaggedStruct<"BitbucketResponseBodyReadError", {
    readonly operation: Schema.Literals<readonly ["resolveRepository", "getRepository", "getBranchingModel", "getPullRequest", "listPullRequests", "createRepository", "createPullRequest", "probeAuth", "checkoutPullRequest", "request"]>;
    readonly status: Schema.Int;
    readonly retryAt: Schema.optional<Schema.Number>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class BitbucketResponseBodyReadError extends BitbucketResponseBodyReadError_base {
    get detail(): string;
    get message(): string;
}
declare const BitbucketResponseDecodeError_base: Schema.Class<BitbucketResponseDecodeError, Schema.TaggedStruct<"BitbucketResponseDecodeError", {
    readonly operation: Schema.Literals<readonly ["resolveRepository", "getRepository", "getBranchingModel", "getPullRequest", "listPullRequests", "createRepository", "createPullRequest", "probeAuth", "checkoutPullRequest", "request"]>;
    readonly status: Schema.Int;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class BitbucketResponseDecodeError extends BitbucketResponseDecodeError_base {
    get detail(): string;
    get message(): string;
}
declare const BitbucketRepositoryVcsResolveError_base: Schema.Class<BitbucketRepositoryVcsResolveError, Schema.TaggedStruct<"BitbucketRepositoryVcsResolveError", {
    readonly cwd: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class BitbucketRepositoryVcsResolveError extends BitbucketRepositoryVcsResolveError_base {
    get detail(): string;
    get message(): string;
}
declare const BitbucketRepositoryRemotesListError_base: Schema.Class<BitbucketRepositoryRemotesListError, Schema.TaggedStruct<"BitbucketRepositoryRemotesListError", {
    readonly cwd: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class BitbucketRepositoryRemotesListError extends BitbucketRepositoryRemotesListError_base {
    get detail(): string;
    get message(): string;
}
declare const BitbucketRepositoryRemoteNotFoundError_base: Schema.Class<BitbucketRepositoryRemoteNotFoundError, Schema.TaggedStruct<"BitbucketRepositoryRemoteNotFoundError", {
    readonly cwd: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class BitbucketRepositoryRemoteNotFoundError extends BitbucketRepositoryRemoteNotFoundError_base {
    get detail(): string;
    get message(): string;
}
declare const BitbucketPullRequestBodyReadError_base: Schema.Class<BitbucketPullRequestBodyReadError, Schema.TaggedStruct<"BitbucketPullRequestBodyReadError", {
    readonly cwd: Schema.String;
    readonly bodyFile: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class BitbucketPullRequestBodyReadError extends BitbucketPullRequestBodyReadError_base {
    get detail(): string;
    get message(): string;
}
declare const BitbucketCheckoutError_base: Schema.Class<BitbucketCheckoutError, Schema.TaggedStruct<"BitbucketCheckoutError", {
    readonly cwd: Schema.String;
    readonly reference: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class BitbucketCheckoutError extends BitbucketCheckoutError_base {
    get detail(): string;
    get message(): string;
}
declare const BitbucketUntrustedUrlError_base: Schema.Class<BitbucketUntrustedUrlError, Schema.TaggedStruct<"BitbucketUntrustedUrlError", {
    readonly host: Schema.String;
}>, import("effect/Cause").YieldableError>;
/** Reject response-supplied URLs that could leak credentials. */
export declare class BitbucketUntrustedUrlError extends BitbucketUntrustedUrlError_base {
    get detail(): string;
    get message(): string;
}
export declare const BitbucketApiError: Schema.Union<readonly [typeof BitbucketUntrustedUrlError, typeof BitbucketRepositoryLocatorError, typeof BitbucketRequestError, typeof BitbucketResponseError, typeof BitbucketResponseBodyReadError, typeof BitbucketResponseDecodeError, typeof BitbucketRepositoryVcsResolveError, typeof BitbucketRepositoryRemotesListError, typeof BitbucketRepositoryRemoteNotFoundError, typeof BitbucketPullRequestBodyReadError, typeof BitbucketCheckoutError, typeof SourceControlRateLimit.SourceControlRateLimitPausedError]>;
export type BitbucketApiError = typeof BitbucketApiError.Type;
export interface BitbucketRepositoryLocator {
    readonly workspace: string;
    readonly repoSlug: string;
}
declare const BitbucketApi_base: Context.ServiceClass<BitbucketApi, "@t3tools/source-control-bitbucket/server/BitbucketApi", {
    readonly probeAuth: Effect.Effect<SourceControlProviderAuth, never>;
    readonly request: (input: {
        readonly method: "GET" | "POST" | "PUT" | "DELETE";
        readonly url: string;
        readonly body?: string;
        readonly maxBytes?: number;
    }) => Effect.Effect<{
        readonly body: string;
        readonly truncated: boolean;
    }, BitbucketApiError>;
    readonly listPullRequests: (input: {
        readonly cwd: string;
        readonly context?: SourceControlProvider.SourceControlProviderContext;
        readonly headSelector: string;
        readonly source?: SourceControlProvider.SourceControlRefSelector;
        readonly state: "open" | "closed" | "merged" | "all";
        readonly limit?: number;
    }) => Effect.Effect<readonly NormalizedBitbucketPullRequestRecord[], BitbucketApiError>;
    readonly getPullRequest: (input: {
        readonly cwd: string;
        readonly context?: SourceControlProvider.SourceControlProviderContext;
        readonly reference: string;
    }) => Effect.Effect<NormalizedBitbucketPullRequestRecord, BitbucketApiError>;
    readonly getRepositoryCloneUrls: (input: {
        readonly cwd: string;
        readonly context?: SourceControlProvider.SourceControlProviderContext;
        readonly repository: string;
    }) => Effect.Effect<SourceControlRepositoryCloneUrls, BitbucketApiError>;
    readonly createRepository: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly visibility: SourceControlRepositoryVisibility;
    }) => Effect.Effect<SourceControlRepositoryCloneUrls, BitbucketApiError>;
    readonly createPullRequest: (input: {
        readonly cwd: string;
        readonly context?: SourceControlProvider.SourceControlProviderContext;
        readonly baseBranch: string;
        readonly headSelector: string;
        readonly source?: SourceControlProvider.SourceControlRefSelector;
        readonly target?: SourceControlProvider.SourceControlRefSelector;
        readonly title: string;
        readonly bodyFile: string;
    }) => Effect.Effect<void, BitbucketApiError>;
    readonly getDefaultBranch: (input: {
        readonly cwd: string;
        readonly context?: SourceControlProvider.SourceControlProviderContext;
    }) => Effect.Effect<string | null, BitbucketApiError>;
    readonly checkoutPullRequest: (input: {
        readonly cwd: string;
        readonly context?: SourceControlProvider.SourceControlProviderContext;
        readonly reference: string;
        readonly force?: boolean;
    }) => Effect.Effect<void, BitbucketApiError>;
}>;
export declare class BitbucketApi extends BitbucketApi_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly probeAuth: Effect.Effect<SourceControlProviderAuth, never>;
    readonly request: (input: {
        readonly method: "GET" | "POST" | "PUT" | "DELETE";
        readonly url: string;
        readonly body?: string;
        readonly maxBytes?: number;
    }) => Effect.Effect<{
        readonly body: string;
        readonly truncated: boolean;
    }, BitbucketApiError>;
    readonly listPullRequests: (input: {
        readonly cwd: string;
        readonly context?: SourceControlProvider.SourceControlProviderContext;
        readonly headSelector: string;
        readonly source?: SourceControlProvider.SourceControlRefSelector;
        readonly state: "open" | "closed" | "merged" | "all";
        readonly limit?: number;
    }) => Effect.Effect<ReadonlyArray<NormalizedBitbucketPullRequestRecord>, BitbucketApiError>;
    readonly getPullRequest: (input: {
        readonly cwd: string;
        readonly context?: SourceControlProvider.SourceControlProviderContext;
        readonly reference: string;
    }) => Effect.Effect<NormalizedBitbucketPullRequestRecord, BitbucketApiError>;
    readonly getRepositoryCloneUrls: (input: {
        readonly cwd: string;
        readonly context?: SourceControlProvider.SourceControlProviderContext;
        readonly repository: string;
    }) => Effect.Effect<SourceControlRepositoryCloneUrls, BitbucketApiError>;
    readonly createRepository: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly visibility: SourceControlRepositoryVisibility;
    }) => Effect.Effect<SourceControlRepositoryCloneUrls, BitbucketApiError>;
    readonly createPullRequest: (input: {
        readonly cwd: string;
        readonly context?: SourceControlProvider.SourceControlProviderContext;
        readonly baseBranch: string;
        readonly headSelector: string;
        readonly source?: SourceControlProvider.SourceControlRefSelector;
        readonly target?: SourceControlProvider.SourceControlRefSelector;
        readonly title: string;
        readonly bodyFile: string;
    }) => Effect.Effect<void, BitbucketApiError>;
    readonly getDefaultBranch: (input: {
        readonly cwd: string;
        readonly context?: SourceControlProvider.SourceControlProviderContext;
    }) => Effect.Effect<string | null, BitbucketApiError>;
    readonly checkoutPullRequest: (input: {
        readonly cwd: string;
        readonly context?: SourceControlProvider.SourceControlProviderContext;
        readonly reference: string;
        readonly force?: boolean;
    }) => Effect.Effect<void, BitbucketApiError>;
}, Config.ConfigError, FileSystem.FileSystem | HttpClient.HttpClient | SourceControlHost.SourceControlHost | SourceControlRateLimit.SourceControlRateLimit>;
export declare const layer: Layer.Layer<BitbucketApi, Config.ConfigError, FileSystem.FileSystem | HttpClient.HttpClient | SourceControlHost.SourceControlHost | SourceControlRateLimit.SourceControlRateLimit>;
export {};
