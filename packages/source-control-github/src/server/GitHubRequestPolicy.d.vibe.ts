import * as Cause from "effect/Cause";
import * as Context from "effect/Context";
import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as Schema from "effect/Schema";
import * as SourceControlRateLimit from "@t3tools/source-control-core/server/SourceControlRateLimit";
import * as GitHubCredentials from "./GitHubCredentials.vibe";
import * as GitHubQuota from "./GitHubQuota.vibe";
/** Pin requests to this host's credential across account switches. Keep it out of RPCs/cache keys. */
export declare const PinnedGitHubCredential: Context.Reference<{
    readonly host: string;
    readonly token: Redacted.Redacted<string>;
    readonly credentialFingerprint: string;
} | null>;
declare const GitHubApiRequestError_base: Schema.Class<GitHubApiRequestError, Schema.TaggedStruct<"GitHubApiRequestError", {
    readonly host: Schema.String;
    readonly operation: Schema.String;
    readonly cause: Schema.Defect;
}>, Cause.YieldableError>;
export declare class GitHubApiRequestError extends GitHubApiRequestError_base {
    get message(): string;
}
declare const GitHubApiAuthenticationError_base: Schema.Class<GitHubApiAuthenticationError, Schema.TaggedStruct<"GitHubApiAuthenticationError", {
    readonly host: Schema.String;
    readonly operation: Schema.String;
}>, Cause.YieldableError>;
export declare class GitHubApiAuthenticationError extends GitHubApiAuthenticationError_base {
    get message(): string;
}
declare const GitHubApiRateLimitError_base: Schema.Class<GitHubApiRateLimitError, Schema.TaggedStruct<"GitHubApiRateLimitError", {
    readonly host: Schema.String;
    readonly operation: Schema.String;
    readonly retryAt: Schema.optionalKey<Schema.Finite>;
}>, Cause.YieldableError>;
export declare class GitHubApiRateLimitError extends GitHubApiRateLimitError_base {
    get message(): string;
}
declare const GitHubApiNotFoundError_base: Schema.Class<GitHubApiNotFoundError, Schema.TaggedStruct<"GitHubApiNotFoundError", {
    readonly host: Schema.String;
    readonly operation: Schema.String;
}>, Cause.YieldableError>;
export declare class GitHubApiNotFoundError extends GitHubApiNotFoundError_base {
    get message(): string;
}
declare const GitHubApiResponseError_base: Schema.Class<GitHubApiResponseError, Schema.TaggedStruct<"GitHubApiResponseError", {
    readonly host: Schema.String;
    readonly operation: Schema.String;
    readonly status: Schema.Int;
    readonly githubErrors: Schema.optionalKey<Schema.$Array<Schema.String>>;
}>, Cause.YieldableError>;
export declare class GitHubApiResponseError extends GitHubApiResponseError_base {
    get message(): string;
}
export type GitHubApiError = GitHubCredentials.GitHubCredentialUnavailableError | GitHubApiRequestError | GitHubApiAuthenticationError | GitHubApiRateLimitError | GitHubApiNotFoundError | GitHubApiResponseError | SourceControlRateLimit.SourceControlRateLimitPausedError;
/** @throws {never} */
export declare function normalizeHost(host: string): string;
/** @throws {never} */
export declare function gitHubApiUrls(host: string): {
    readonly rest: string;
    readonly graphql: string;
};
/**
 * HTTP 200 GraphQL rate limits use RATE_LIMITED or untyped errors with quota headers.
 * @throws {never}
 */
export declare function isRateLimited(input: {
    readonly status: number;
    readonly headers: Readonly<Record<string, string | undefined>>;
    readonly graphqlErrors?: ReadonlyArray<{
        readonly type?: unknown;
        readonly message?: unknown;
    }>;
    readonly body?: string;
}): boolean;
export type GitHubAnswer<A> = {
    readonly status: number | undefined;
    readonly headers: Readonly<Record<string, string | undefined>>;
} & ({
    readonly _tag: "Ok";
    readonly value: A;
} | {
    readonly _tag: "RateLimited" | "Unauthorized" | "NotFound";
} | {
    readonly _tag: "Failed";
    readonly messages?: ReadonlyArray<string> | undefined;
});
export interface GitHubRequest {
    readonly host: string;
    readonly operation: string;
    /** The quota the request spends: `core` for REST, `graphql` for GraphQL. */
    readonly resource: string;
    readonly allowReserve: boolean;
    /** Covers sending and reading the answer. Defaults to 30 seconds. */
    readonly timeout?: Duration.Input | undefined;
}
declare const GitHubRequestPolicy_base: Context.ServiceClass<GitHubRequestPolicy, "@t3tools/source-control-github/server/GitHubRequestPolicy", {
    /** send receives auth/version headers; its failures pass through unchanged. */
    readonly request: <A, E, R>(input: GitHubRequest, send: (headers: Readonly<Record<string, string>>) => Effect.Effect<GitHubAnswer<A>, E, R>) => Effect.Effect<A, E | GitHubApiError, R>;
    readonly credential: (host: string) => Effect.Effect<{
        readonly token: Redacted.Redacted<string>;
        readonly fingerprint: string;
    }, GitHubApiError>;
}>;
/** REST/GraphQL share credentials, slots, quota reserves and host-wide pauses. */
export declare class GitHubRequestPolicy extends GitHubRequestPolicy_base {
}
/** @public */
export declare const make: Effect.Effect<{
    /** send receives auth/version headers; its failures pass through unchanged. */
    readonly request: <A, E, R>(input: GitHubRequest, send: (headers: Readonly<Record<string, string>>) => Effect.Effect<GitHubAnswer<A>, E, R>) => Effect.Effect<A, E | GitHubApiError, R>;
    readonly credential: (host: string) => Effect.Effect<{
        readonly token: Redacted.Redacted<string>;
        readonly fingerprint: string;
    }, GitHubApiError>;
}, never, GitHubCredentials.GitHubCredentials | GitHubQuota.GitHubQuota | SourceControlRateLimit.SourceControlRateLimit>;
export declare const layer: Layer.Layer<GitHubRequestPolicy, never, GitHubCredentials.GitHubCredentials | GitHubQuota.GitHubQuota | SourceControlRateLimit.SourceControlRateLimit>;
export {};
