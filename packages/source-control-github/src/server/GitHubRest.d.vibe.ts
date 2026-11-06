import * as Context from "effect/Context";
import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import { HttpClient } from "effect/http";
import * as GitHubCredentials from "./GitHubCredentials.vibe";
import * as GitHubQuota from "./GitHubQuota.vibe";
import * as GitHubRequestPolicy from "./GitHubRequestPolicy.vibe";
import * as SourceControlRateLimit from "@t3tools/source-control-core/server/SourceControlRateLimit";
type GitHubApiError = GitHubRequestPolicy.GitHubApiError;
export interface GitHubRestResponse {
    readonly status: number;
    readonly headers: Readonly<Record<string, string | undefined>>;
    readonly body: string;
    readonly truncated: boolean;
    /** Invalid UTF-8 indicates a binary raw file. */
    readonly invalidUtf8: boolean;
}
export interface GitHubRestInput {
    readonly host: string;
    readonly operation: string;
    readonly method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    /** Relative to the API root, including query string. */
    readonly path: string;
    readonly body?: unknown;
    /** Defaults to `application/vnd.github+json`. */
    readonly accept?: string;
    /** Revalidate cached answers; 304 returns successfully without spending quota. */
    readonly ifNoneMatch?: string;
    readonly maxResponseBytes?: number;
    /** Defaults to 30 seconds; a whole pull request's patch may need longer. */
    readonly timeout?: Duration.Input;
    /** Overrides `SourceControlRateLimit.Interactive` for this one request. */
    readonly allowReserve?: boolean;
}
declare const GitHubRest_base: Context.ServiceClass<GitHubRest, "@t3tools/source-control-github/server/GitHubRest", {
    readonly rest: (input: GitHubRestInput) => Effect.Effect<GitHubRestResponse, GitHubApiError>;
    readonly credential: (host: string) => Effect.Effect<{
        readonly token: Redacted.Redacted<string>;
        readonly fingerprint: string;
    }, GitHubApiError>;
}>;
export declare class GitHubRest extends GitHubRest_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly rest: (input: GitHubRestInput) => Effect.Effect<GitHubRestResponse, GitHubApiError>;
    readonly credential: (host: string) => Effect.Effect<{
        readonly token: Redacted.Redacted<string>;
        readonly fingerprint: string;
    }, GitHubApiError>;
}, never, GitHubRequestPolicy.GitHubRequestPolicy | HttpClient.HttpClient>;
export declare const layer: Layer.Layer<GitHubRequestPolicy.GitHubRequestPolicy | GitHubRest, never, GitHubCredentials.GitHubCredentials | GitHubQuota.GitHubQuota | HttpClient.HttpClient | SourceControlRateLimit.SourceControlRateLimit>;
/**
 * REST and the request policy, with the credential and quota reserve the policy reads through.
 * Built once, so every GitHub reader shares one view of each quota per host. The rate-limit pause
 * comes from the server, which every host's change request reads share.
 */
export declare const layerWithDependencies: Layer.Layer<GitHubCredentials.GitHubCredentials | GitHubQuota.GitHubQuota | GitHubRequestPolicy.GitHubRequestPolicy | GitHubRest, never, import("@t3tools/shared/Crypto").Crypto | HttpClient.HttpClient | import("@t3tools/source-control-core/server/SourceControlHost").SourceControlHost | SourceControlRateLimit.SourceControlRateLimit>;
export {};
