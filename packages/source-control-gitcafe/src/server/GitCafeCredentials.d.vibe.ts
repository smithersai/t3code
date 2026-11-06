import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as Schema from "effect/Schema";
import * as SourceControlHost from "@t3tools/source-control-core/server/SourceControlHost";
export interface GitCafeCredential {
    readonly host: string;
    readonly token: Redacted.Redacted<string>;
    readonly source: "settings" | "env" | "cafe";
}
declare const GitCafeCliMissingError_base: Schema.Class<GitCafeCliMissingError, Schema.TaggedStruct<"GitCafeCliMissingError", {
    readonly host: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class GitCafeCliMissingError extends GitCafeCliMissingError_base {
    get message(): string;
}
declare const GitCafeNotSignedInError_base: Schema.Class<GitCafeNotSignedInError, Schema.TaggedStruct<"GitCafeNotSignedInError", {
    readonly host: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class GitCafeNotSignedInError extends GitCafeNotSignedInError_base {
    get message(): string;
}
declare const GitCafeCliFailedError_base: Schema.Class<GitCafeCliFailedError, Schema.TaggedStruct<"GitCafeCliFailedError", {
    readonly host: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class GitCafeCliFailedError extends GitCafeCliFailedError_base {
    get message(): string;
}
export type GitCafeCredentialUnavailableError = GitCafeCliMissingError | GitCafeNotSignedInError | GitCafeCliFailedError;
declare const GitCafeCredentials_base: Context.ServiceClass<GitCafeCredentials, "@t3tools/source-control-gitcafe/server/GitCafeCredentials", {
    readonly get: (host: string) => Effect.Effect<GitCafeCredential, GitCafeCredentialUnavailableError>;
    readonly invalidate: (host: string) => Effect.Effect<void>;
    readonly cliEnv: (host: string) => Effect.Effect<Readonly<Record<string, string>>>;
}>;
export declare class GitCafeCredentials extends GitCafeCredentials_base {
}
/**
 * Restrict CAFE_TOKEN to CAFE_HOST (default git.cafe), including for staging remotes.
 * @throws {never}
 */
export declare function environmentToken(host: string, env: Readonly<Record<string, string | undefined>>): string | null;
/** @public */
export declare const make: Effect.Effect<{
    readonly get: (host: string) => Effect.Effect<GitCafeCredential, GitCafeCredentialUnavailableError>;
    readonly invalidate: (host: string) => Effect.Effect<void>;
    readonly cliEnv: (host: string) => Effect.Effect<Readonly<Record<string, string>>>;
}, never, SourceControlHost.SourceControlHost>;
export declare const layer: Layer.Layer<GitCafeCredentials, never, SourceControlHost.SourceControlHost>;
export {};
