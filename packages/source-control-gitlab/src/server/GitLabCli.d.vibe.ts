import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Schema from "effect/Schema";
import type * as DateTime from "effect/DateTime";
import { type SourceControlRepositoryVisibility, type VcsError } from "@t3tools/contracts";
import * as SourceControlHost from "@t3tools/source-control-core/server/SourceControlHost";
import type * as SourceControlProvider from "@t3tools/source-control-core/server/SourceControlProvider";
declare const GitLabCliUnavailableError_base: Schema.Class<GitLabCliUnavailableError, Schema.TaggedStruct<"GitLabCliUnavailableError", {
    operation: Schema.Literal<"execute">;
    command: Schema.Literal<"glab">;
    cwd: Schema.String;
    cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class GitLabCliUnavailableError extends GitLabCliUnavailableError_base {
    get detail(): string;
    get message(): string;
}
declare const GitLabCliAuthenticationError_base: Schema.Class<GitLabCliAuthenticationError, Schema.TaggedStruct<"GitLabCliAuthenticationError", {
    operation: Schema.Literal<"execute">;
    command: Schema.Literal<"glab">;
    cwd: Schema.String;
    cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class GitLabCliAuthenticationError extends GitLabCliAuthenticationError_base {
    get detail(): string;
    get message(): string;
}
declare const GitLabCliRateLimitError_base: Schema.Class<GitLabCliRateLimitError, Schema.TaggedStruct<"GitLabCliRateLimitError", {
    operation: Schema.Literal<"execute">;
    command: Schema.Literal<"glab">;
    cwd: Schema.String;
    cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class GitLabCliRateLimitError extends GitLabCliRateLimitError_base {
    get detail(): string;
    get message(): string;
}
declare const GitLabMergeRequestNotFoundError_base: Schema.Class<GitLabMergeRequestNotFoundError, Schema.TaggedStruct<"GitLabMergeRequestNotFoundError", {
    readonly operation: Schema.Literal<"execute">;
    readonly command: Schema.Literal<"glab">;
    readonly cwd: Schema.String;
    readonly cause: Schema.Defect;
    readonly reference: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class GitLabMergeRequestNotFoundError extends GitLabMergeRequestNotFoundError_base {
    get detail(): string;
    get message(): string;
    /** @throws {never} */
    static fromVcsError(context: {
        readonly operation: "execute";
        readonly command: "glab";
        readonly cwd: string;
        readonly reference: string;
    }, error: VcsError): GitLabCliError;
}
declare const GitLabCliCommandError_base: Schema.Class<GitLabCliCommandError, Schema.TaggedStruct<"GitLabCliCommandError", {
    operation: Schema.Literal<"execute">;
    command: Schema.Literal<"glab">;
    cwd: Schema.String;
    cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class GitLabCliCommandError extends GitLabCliCommandError_base {
    get detail(): string;
    get message(): string;
    /** @throws {never} */
    static fromVcsError(context: {
        readonly operation: "execute";
        readonly command: "glab";
        readonly cwd: string;
    }, error: VcsError): GitLabCliError;
}
declare const GitLabMergeRequestListDecodeError_base: Schema.Class<GitLabMergeRequestListDecodeError, Schema.TaggedStruct<"GitLabMergeRequestListDecodeError", {
    readonly command: Schema.Literal<"glab">;
    readonly cwd: Schema.String;
    readonly cause: Schema.Defect;
    readonly operation: Schema.Literal<"listMergeRequests">;
}>, import("effect/Cause").YieldableError>;
export declare class GitLabMergeRequestListDecodeError extends GitLabMergeRequestListDecodeError_base {
    get detail(): string;
    get message(): string;
}
declare const GitLabMergeRequestDecodeError_base: Schema.Class<GitLabMergeRequestDecodeError, Schema.TaggedStruct<"GitLabMergeRequestDecodeError", {
    readonly command: Schema.Literal<"glab">;
    readonly cwd: Schema.String;
    readonly cause: Schema.Defect;
    readonly operation: Schema.Literal<"getMergeRequest">;
    readonly reference: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class GitLabMergeRequestDecodeError extends GitLabMergeRequestDecodeError_base {
    get detail(): string;
    get message(): string;
}
declare const GitLabRepositoryDecodeError_base: Schema.Class<GitLabRepositoryDecodeError, Schema.TaggedStruct<"GitLabRepositoryDecodeError", {
    readonly command: Schema.Literal<"glab">;
    readonly cwd: Schema.String;
    readonly cause: Schema.Defect;
    readonly operation: Schema.Literals<readonly ["getRepositoryCloneUrls", "createRepository", "getDefaultBranch"]>;
    readonly repository: Schema.optional<Schema.String>;
}>, import("effect/Cause").YieldableError>;
export declare class GitLabRepositoryDecodeError extends GitLabRepositoryDecodeError_base {
    get detail(): string;
    get message(): string;
}
declare const GitLabNamespaceDecodeError_base: Schema.Class<GitLabNamespaceDecodeError, Schema.TaggedStruct<"GitLabNamespaceDecodeError", {
    readonly command: Schema.Literal<"glab">;
    readonly cwd: Schema.String;
    readonly cause: Schema.Defect;
    readonly operation: Schema.Literal<"createRepository">;
    readonly namespacePath: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class GitLabNamespaceDecodeError extends GitLabNamespaceDecodeError_base {
    get detail(): string;
    get message(): string;
}
export declare const GitLabCliError: Schema.Union<readonly [typeof GitLabCliUnavailableError, typeof GitLabCliAuthenticationError, typeof GitLabCliRateLimitError, typeof GitLabMergeRequestNotFoundError, typeof GitLabCliCommandError, typeof GitLabMergeRequestListDecodeError, typeof GitLabMergeRequestDecodeError, typeof GitLabRepositoryDecodeError, typeof GitLabNamespaceDecodeError]>;
export type GitLabCliError = typeof GitLabCliError.Type;
export interface GitLabMergeRequestSummary {
    readonly number: number;
    readonly title: string;
    readonly url: string;
    readonly baseRefName: string;
    readonly headRefName: string;
    readonly headSha?: string;
    readonly state?: "open" | "closed" | "merged";
    readonly isDraft?: boolean;
    readonly closedAt?: string | null;
    readonly mergedAt?: string | null;
    readonly updatedAt?: Option.Option<DateTime.Utc>;
    readonly isCrossRepository?: boolean;
    readonly headRepositoryNameWithOwner?: string | null;
    readonly headRepositoryOwnerLogin?: string | null;
}
export interface GitLabRepositoryCloneUrls {
    readonly nameWithOwner: string;
    readonly url: string;
    readonly sshUrl: string;
}
declare const GitLabCli_base: Context.ServiceClass<GitLabCli, "@t3tools/source-control-gitlab/server/GitLabCli", {
    readonly execute: (input: {
        readonly cwd: string;
        readonly args: readonly string[];
        readonly timeoutMs?: number;
        /** Keeps sensitive payloads out of argv. */
        readonly stdin?: string;
        readonly maxOutputBytes?: number;
    }) => Effect.Effect<SourceControlHost.SourceControlProcessOutput, GitLabCliError>;
    readonly listMergeRequests: (input: {
        readonly cwd: string;
        readonly headSelector: string;
        readonly source?: SourceControlProvider.SourceControlRefSelector;
        readonly state: "open" | "closed" | "merged" | "all";
        readonly limit?: number;
    }) => Effect.Effect<readonly GitLabMergeRequestSummary[], GitLabCliError>;
    readonly getMergeRequest: (input: {
        readonly cwd: string;
        readonly reference: string;
    }) => Effect.Effect<GitLabMergeRequestSummary, GitLabCliError>;
    readonly getRepositoryCloneUrls: (input: {
        readonly cwd: string;
        readonly repository: string;
    }) => Effect.Effect<GitLabRepositoryCloneUrls, GitLabCliError>;
    readonly createRepository: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly visibility: SourceControlRepositoryVisibility;
    }) => Effect.Effect<GitLabRepositoryCloneUrls, GitLabCliError>;
    readonly createMergeRequest: (input: {
        readonly cwd: string;
        readonly baseBranch: string;
        readonly headSelector: string;
        readonly source?: SourceControlProvider.SourceControlRefSelector;
        readonly target?: SourceControlProvider.SourceControlRefSelector;
        readonly title: string;
        readonly bodyFile: string;
    }) => Effect.Effect<void, GitLabCliError>;
    readonly getDefaultBranch: (input: {
        readonly cwd: string;
    }) => Effect.Effect<string | null, GitLabCliError>;
    readonly checkoutMergeRequest: (input: {
        readonly cwd: string;
        readonly reference: string;
        readonly force?: boolean;
    }) => Effect.Effect<void, GitLabCliError>;
}>;
export declare class GitLabCli extends GitLabCli_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly execute: (input: {
        readonly cwd: string;
        readonly args: ReadonlyArray<string>;
        readonly timeoutMs?: number;
        /** Keeps sensitive payloads out of argv. */
        readonly stdin?: string;
        readonly maxOutputBytes?: number;
    }) => Effect.Effect<SourceControlHost.SourceControlProcessOutput, GitLabCliError>;
    readonly listMergeRequests: (input: {
        readonly cwd: string;
        readonly headSelector: string;
        readonly source?: SourceControlProvider.SourceControlRefSelector;
        readonly state: "open" | "closed" | "merged" | "all";
        readonly limit?: number;
    }) => Effect.Effect<ReadonlyArray<GitLabMergeRequestSummary>, GitLabCliError>;
    readonly getMergeRequest: (input: {
        readonly cwd: string;
        readonly reference: string;
    }) => Effect.Effect<GitLabMergeRequestSummary, GitLabCliError>;
    readonly getRepositoryCloneUrls: (input: {
        readonly cwd: string;
        readonly repository: string;
    }) => Effect.Effect<GitLabRepositoryCloneUrls, GitLabCliError>;
    readonly createRepository: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly visibility: SourceControlRepositoryVisibility;
    }) => Effect.Effect<GitLabRepositoryCloneUrls, GitLabCliError>;
    readonly createMergeRequest: (input: {
        readonly cwd: string;
        readonly baseBranch: string;
        readonly headSelector: string;
        readonly source?: SourceControlProvider.SourceControlRefSelector;
        readonly target?: SourceControlProvider.SourceControlRefSelector;
        readonly title: string;
        readonly bodyFile: string;
    }) => Effect.Effect<void, GitLabCliError>;
    readonly getDefaultBranch: (input: {
        readonly cwd: string;
    }) => Effect.Effect<string | null, GitLabCliError>;
    readonly checkoutMergeRequest: (input: {
        readonly cwd: string;
        readonly reference: string;
        readonly force?: boolean;
    }) => Effect.Effect<void, GitLabCliError>;
}, never, SourceControlHost.SourceControlHost>;
export declare const layer: Layer.Layer<GitLabCli, never, SourceControlHost.SourceControlHost>;
export {};
