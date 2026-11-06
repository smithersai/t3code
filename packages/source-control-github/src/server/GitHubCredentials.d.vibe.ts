import * as Context from "effect/Context";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as Schema from "effect/Schema";
import * as SourceControlHost from "@t3tools/source-control-core/server/SourceControlHost";
/**
 * Every gh run on the server shares this. A burst of them (a status poll across many checkouts)
 * otherwise starts enough at once to trip GitHub's secondary rate limit.
 */
export declare const GH_PROCESS_CONCURRENCY: {
    readonly key: "gh";
    readonly limit: 4;
};
export declare const GitHubCredentialSource: Schema.Literals<readonly ["settings", "env", "gh"]>;
export type GitHubCredentialSource = typeof GitHubCredentialSource.Type;
export interface GitHubCredential {
    readonly host: string;
    readonly token: Redacted.Redacted<string>;
    readonly source: GitHubCredentialSource;
    readonly fingerprint: string;
}
declare const GitHubCliMissingError_base: Schema.Class<GitHubCliMissingError, Schema.TaggedStruct<"GitHubCliMissingError", {
    readonly host: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class GitHubCliMissingError extends GitHubCliMissingError_base {
    get message(): string;
}
declare const GitHubNotSignedInError_base: Schema.Class<GitHubNotSignedInError, Schema.TaggedStruct<"GitHubNotSignedInError", {
    readonly host: Schema.String;
    readonly account: Schema.optional<Schema.String>;
}>, import("effect/Cause").YieldableError>;
export declare class GitHubNotSignedInError extends GitHubNotSignedInError_base {
    get message(): string;
}
declare const GitHubHostDisabledError_base: Schema.Class<GitHubHostDisabledError, Schema.TaggedStruct<"GitHubHostDisabledError", {
    readonly host: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class GitHubHostDisabledError extends GitHubHostDisabledError_base {
    get message(): string;
}
declare const GitHubCliFailedError_base: Schema.Class<GitHubCliFailedError, Schema.TaggedStruct<"GitHubCliFailedError", {
    readonly host: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class GitHubCliFailedError extends GitHubCliFailedError_base {
    get message(): string;
}
export type GitHubCredentialUnavailableError = GitHubCliMissingError | GitHubNotSignedInError | GitHubHostDisabledError | GitHubCliFailedError;
declare const GitHubCredentials_base: Context.ServiceClass<GitHubCredentials, "@t3tools/source-control-github/server/GitHubCredentials", {
    readonly get: (host: string) => Effect.Effect<GitHubCredential, GitHubCredentialUnavailableError>;
    readonly invalidate: (host: string) => Effect.Effect<void>;
}>;
export declare class GitHubCredentials extends GitHubCredentials_base {
}
/**
 * API URLs are built from the host text, so anything but a bare hostname could redirect a token.
 * @throws {never}
 */
export declare function isGitHubHost(host: string): boolean;
/**
 * Restrict GH_ENTERPRISE_TOKEN to GH_HOST to prevent remote URLs from leaking it.
 * @throws {never}
 */
export declare function environmentToken(host: string, env: Readonly<Record<string, string | undefined>>): string | null;
/** @public */
export declare const make: Effect.Effect<{
    readonly get: (host: string) => Effect.Effect<GitHubCredential, GitHubCredentialUnavailableError>;
    readonly invalidate: (host: string) => Effect.Effect<void>;
}, never, Crypto.Crypto | SourceControlHost.SourceControlHost>;
export declare const layer: Layer.Layer<GitHubCredentials, never, Crypto.Crypto | SourceControlHost.SourceControlHost>;
export {};
