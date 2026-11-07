import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import { type SourceControlRepositoryVisibility, type VcsError } from "@t3tools/contracts";
import * as SourceControlHost from "@t3tools/source-control-core/server/SourceControlHost";
import { type NormalizedAzureDevOpsPullRequestRecord } from "./azureDevOpsPullRequests.vibe";
import * as SourceControlProvider from "@t3tools/source-control-core/server/SourceControlProvider";
declare const AzureDevOpsCliUnavailableError_base: Schema.Class<AzureDevOpsCliUnavailableError, Schema.TaggedStruct<"AzureDevOpsCliUnavailableError", {
    operation: Schema.Literal<"execute">;
    command: Schema.Literal<"az">;
    cwd: Schema.String;
    argumentCount: Schema.Int;
    cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class AzureDevOpsCliUnavailableError extends AzureDevOpsCliUnavailableError_base {
    get detail(): string;
    get message(): string;
}
declare const AzureDevOpsCliAuthenticationError_base: Schema.Class<AzureDevOpsCliAuthenticationError, Schema.TaggedStruct<"AzureDevOpsCliAuthenticationError", {
    operation: Schema.Literal<"execute">;
    command: Schema.Literal<"az">;
    cwd: Schema.String;
    argumentCount: Schema.Int;
    cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class AzureDevOpsCliAuthenticationError extends AzureDevOpsCliAuthenticationError_base {
    get detail(): string;
    get message(): string;
}
declare const AzureDevOpsCliRateLimitError_base: Schema.Class<AzureDevOpsCliRateLimitError, Schema.TaggedStruct<"AzureDevOpsCliRateLimitError", {
    operation: Schema.Literal<"execute">;
    command: Schema.Literal<"az">;
    cwd: Schema.String;
    argumentCount: Schema.Int;
    cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class AzureDevOpsCliRateLimitError extends AzureDevOpsCliRateLimitError_base {
    get detail(): string;
    get message(): string;
}
declare const AzureDevOpsPullRequestNotFoundError_base: Schema.Class<AzureDevOpsPullRequestNotFoundError, Schema.TaggedStruct<"AzureDevOpsPullRequestNotFoundError", {
    operation: Schema.Literal<"execute">;
    command: Schema.Literal<"az">;
    cwd: Schema.String;
    argumentCount: Schema.Int;
    cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class AzureDevOpsPullRequestNotFoundError extends AzureDevOpsPullRequestNotFoundError_base {
    get detail(): string;
    get message(): string;
}
declare const AzureDevOpsCommandFailedError_base: Schema.Class<AzureDevOpsCommandFailedError, Schema.TaggedStruct<"AzureDevOpsCommandFailedError", {
    operation: Schema.Literal<"execute">;
    command: Schema.Literal<"az">;
    cwd: Schema.String;
    argumentCount: Schema.Int;
    cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class AzureDevOpsCommandFailedError extends AzureDevOpsCommandFailedError_base {
    get detail(): string;
    get message(): string;
    /** @throws {never} */
    static fromVcsError(context: {
        readonly operation: "execute";
        readonly command: "az";
        readonly cwd: string;
        readonly argumentCount: number;
    }, cause: VcsError): AzureDevOpsCliError;
}
declare const AzureDevOpsPullRequestListDecodeError_base: Schema.Class<AzureDevOpsPullRequestListDecodeError, Schema.TaggedStruct<"AzureDevOpsPullRequestListDecodeError", {
    readonly command: Schema.Literal<"az">;
    readonly cwd: Schema.String;
    readonly outputLength: Schema.Int;
    readonly cause: Schema.Defect;
    readonly operation: Schema.Literal<"listPullRequests">;
}>, import("effect/Cause").YieldableError>;
export declare class AzureDevOpsPullRequestListDecodeError extends AzureDevOpsPullRequestListDecodeError_base {
    get detail(): string;
    get message(): string;
}
declare const AzureDevOpsPullRequestDecodeError_base: Schema.Class<AzureDevOpsPullRequestDecodeError, Schema.TaggedStruct<"AzureDevOpsPullRequestDecodeError", {
    readonly command: Schema.Literal<"az">;
    readonly cwd: Schema.String;
    readonly outputLength: Schema.Int;
    readonly cause: Schema.Defect;
    readonly operation: Schema.Literal<"getPullRequest">;
}>, import("effect/Cause").YieldableError>;
export declare class AzureDevOpsPullRequestDecodeError extends AzureDevOpsPullRequestDecodeError_base {
    get detail(): string;
    get message(): string;
}
declare const AzureDevOpsRepositoryDecodeError_base: Schema.Class<AzureDevOpsRepositoryDecodeError, Schema.TaggedStruct<"AzureDevOpsRepositoryDecodeError", {
    readonly command: Schema.Literal<"az">;
    readonly cwd: Schema.String;
    readonly outputLength: Schema.Int;
    readonly cause: Schema.Defect;
    readonly operation: Schema.Literals<readonly ["getRepositoryCloneUrls", "getDefaultBranch", "createRepository"]>;
}>, import("effect/Cause").YieldableError>;
export declare class AzureDevOpsRepositoryDecodeError extends AzureDevOpsRepositoryDecodeError_base {
    get detail(): string;
    get message(): string;
}
export declare const AzureDevOpsCliError: Schema.Union<readonly [typeof AzureDevOpsCliUnavailableError, typeof AzureDevOpsCliAuthenticationError, typeof AzureDevOpsCliRateLimitError, typeof AzureDevOpsPullRequestNotFoundError, typeof AzureDevOpsCommandFailedError, typeof AzureDevOpsPullRequestListDecodeError, typeof AzureDevOpsPullRequestDecodeError, typeof AzureDevOpsRepositoryDecodeError]>;
export type AzureDevOpsCliError = typeof AzureDevOpsCliError.Type;
export interface AzureDevOpsRepositoryCloneUrls {
    readonly nameWithOwner: string;
    readonly url: string;
    readonly sshUrl: string;
}
declare const AzureDevOpsCli_base: Context.ServiceClass<AzureDevOpsCli, "@t3tools/source-control-azure-devops/server/AzureDevOpsCli", {
    readonly execute: (input: {
        readonly cwd: string;
        readonly args: readonly string[];
        readonly timeoutMs?: number;
        readonly maxOutputBytes?: number;
    }) => Effect.Effect<SourceControlHost.SourceControlProcessOutput, AzureDevOpsCliError>;
    readonly listPullRequests: (input: {
        readonly cwd: string;
        readonly headSelector: string;
        readonly source?: SourceControlProvider.SourceControlRefSelector;
        readonly state: "open" | "closed" | "merged" | "all";
        readonly limit?: number;
    }) => Effect.Effect<readonly NormalizedAzureDevOpsPullRequestRecord[], AzureDevOpsCliError>;
    readonly getPullRequest: (input: {
        readonly cwd: string;
        readonly reference: string;
    }) => Effect.Effect<NormalizedAzureDevOpsPullRequestRecord, AzureDevOpsCliError>;
    readonly getRepositoryCloneUrls: (input: {
        readonly cwd: string;
        readonly repository: string;
    }) => Effect.Effect<AzureDevOpsRepositoryCloneUrls, AzureDevOpsCliError>;
    readonly createRepository: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly visibility: SourceControlRepositoryVisibility;
    }) => Effect.Effect<AzureDevOpsRepositoryCloneUrls, AzureDevOpsCliError>;
    readonly createPullRequest: (input: {
        readonly cwd: string;
        readonly baseBranch: string;
        readonly headSelector: string;
        readonly source?: SourceControlProvider.SourceControlRefSelector;
        readonly target?: SourceControlProvider.SourceControlRefSelector;
        readonly title: string;
        readonly bodyFile: string;
    }) => Effect.Effect<void, AzureDevOpsCliError>;
    readonly getDefaultBranch: (input: {
        readonly cwd: string;
    }) => Effect.Effect<string | null, AzureDevOpsCliError>;
    readonly checkoutPullRequest: (input: {
        readonly cwd: string;
        readonly reference: string;
        readonly remoteName?: string;
    }) => Effect.Effect<void, AzureDevOpsCliError>;
}>;
export declare class AzureDevOpsCli extends AzureDevOpsCli_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly execute: (input: {
        readonly cwd: string;
        readonly args: ReadonlyArray<string>;
        readonly timeoutMs?: number;
        readonly maxOutputBytes?: number;
    }) => Effect.Effect<SourceControlHost.SourceControlProcessOutput, AzureDevOpsCliError>;
    readonly listPullRequests: (input: {
        readonly cwd: string;
        readonly headSelector: string;
        readonly source?: SourceControlProvider.SourceControlRefSelector;
        readonly state: "open" | "closed" | "merged" | "all";
        readonly limit?: number;
    }) => Effect.Effect<ReadonlyArray<NormalizedAzureDevOpsPullRequestRecord>, AzureDevOpsCliError>;
    readonly getPullRequest: (input: {
        readonly cwd: string;
        readonly reference: string;
    }) => Effect.Effect<NormalizedAzureDevOpsPullRequestRecord, AzureDevOpsCliError>;
    readonly getRepositoryCloneUrls: (input: {
        readonly cwd: string;
        readonly repository: string;
    }) => Effect.Effect<AzureDevOpsRepositoryCloneUrls, AzureDevOpsCliError>;
    readonly createRepository: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly visibility: SourceControlRepositoryVisibility;
    }) => Effect.Effect<AzureDevOpsRepositoryCloneUrls, AzureDevOpsCliError>;
    readonly createPullRequest: (input: {
        readonly cwd: string;
        readonly baseBranch: string;
        readonly headSelector: string;
        readonly source?: SourceControlProvider.SourceControlRefSelector;
        readonly target?: SourceControlProvider.SourceControlRefSelector;
        readonly title: string;
        readonly bodyFile: string;
    }) => Effect.Effect<void, AzureDevOpsCliError>;
    readonly getDefaultBranch: (input: {
        readonly cwd: string;
    }) => Effect.Effect<string | null, AzureDevOpsCliError>;
    readonly checkoutPullRequest: (input: {
        readonly cwd: string;
        readonly reference: string;
        readonly remoteName?: string;
    }) => Effect.Effect<void, AzureDevOpsCliError>;
}, never, SourceControlHost.SourceControlHost>;
export declare const layer: Layer.Layer<AzureDevOpsCli, never, SourceControlHost.SourceControlHost>;
export {};
