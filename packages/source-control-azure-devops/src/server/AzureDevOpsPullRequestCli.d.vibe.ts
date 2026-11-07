import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import type { PullRequestAction, PullRequestComment, PullRequestInvolvement, PullRequestListState, PullRequestMergeMethod } from "@t3tools/contracts";
import * as AzureDevOpsCli from "./AzureDevOpsCli.vibe";
import { type AzureDevOpsChangeEntry, type AzureDevOpsItemContent, type AzureDevOpsIteration, type AzureDevOpsPullRequest, type AzureDevOpsRepositoryLocation } from "./azureDevOpsPullRequestJson.vibe";
import type { ProviderListCursor } from "@t3tools/source-control-core/server/PullRequestProvider";
declare const AzureDevOpsPullRequestReadError_base: Schema.Class<AzureDevOpsPullRequestReadError, Schema.TaggedStruct<"AzureDevOpsPullRequestReadError", {
    readonly command: Schema.Literal<"az">;
    readonly cwd: Schema.String;
    readonly operation: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class AzureDevOpsPullRequestReadError extends AzureDevOpsPullRequestReadError_base {
    get detail(): string;
    get message(): string;
}
declare const AzureDevOpsViewerUnavailableError_base: Schema.Class<AzureDevOpsViewerUnavailableError, Schema.TaggedStruct<"AzureDevOpsViewerUnavailableError", {
    readonly command: Schema.Literal<"az">;
    readonly cwd: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class AzureDevOpsViewerUnavailableError extends AzureDevOpsViewerUnavailableError_base {
    get detail(): string;
    get message(): string;
}
declare const AzureDevOpsPullRequestIncompleteError_base: Schema.Class<AzureDevOpsPullRequestIncompleteError, Schema.TaggedStruct<"AzureDevOpsPullRequestIncompleteError", {
    readonly command: Schema.Literal<"az">;
    readonly cwd: Schema.String;
    readonly number: Schema.Int;
}>, import("effect/Cause").YieldableError>;
export declare class AzureDevOpsPullRequestIncompleteError extends AzureDevOpsPullRequestIncompleteError_base {
    get detail(): string;
    get message(): string;
}
declare const AzureDevOpsReviewerNameError_base: Schema.Class<AzureDevOpsReviewerNameError, Schema.TaggedStruct<"AzureDevOpsReviewerNameError", {
    readonly command: Schema.Literal<"az">;
    readonly cwd: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class AzureDevOpsReviewerNameError extends AzureDevOpsReviewerNameError_base {
    get detail(): string;
    get message(): string;
}
export type AzureDevOpsPullRequestCliError = AzureDevOpsCli.AzureDevOpsCliError | AzureDevOpsPullRequestReadError | AzureDevOpsPullRequestIncompleteError | AzureDevOpsReviewerNameError | AzureDevOpsViewerUnavailableError;
export interface AzureDevOpsIterationChanges {
    readonly changes: ReadonlyArray<AzureDevOpsChangeEntry>;
    readonly truncated: boolean;
}
declare const AzureDevOpsPullRequestCli_base: Context.ServiceClass<AzureDevOpsPullRequestCli, "@t3tools/source-control-azure-devops/server/AzureDevOpsPullRequestCli", {
    readonly getViewer: (input: {
        readonly cwd: string;
    }) => Effect.Effect<string, AzureDevOpsPullRequestCliError>;
    readonly listPullRequests: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly state: PullRequestListState;
        readonly involvement: PullRequestInvolvement;
        readonly viewer: string;
        readonly limit: number;
        /** Matched by `--creator`, which takes the email a row shows as its login. */
        readonly author?: string | undefined;
        /**
         * Where to carry on from. Azure has no date filter for a pull request listing, so the only
         * part of a cursor it can use is how many rows have already been handed over.
         */
        readonly cursor?: ProviderListCursor | undefined;
    }) => Effect.Effect<{
        readonly items: readonly AzureDevOpsPullRequest[];
        readonly truncated: boolean;
        readonly cursorAdvance: number;
    }, AzureDevOpsPullRequestCliError>;
    readonly getPullRequest: (input: {
        readonly cwd: string;
        readonly number: number;
    }) => Effect.Effect<AzureDevOpsPullRequest, AzureDevOpsPullRequestCliError>;
    readonly listThreads: (input: {
        readonly cwd: string;
        readonly location: AzureDevOpsRepositoryLocation;
        readonly number: number;
    }) => Effect.Effect<readonly PullRequestComment[], AzureDevOpsPullRequestCliError>;
    readonly listIterations: (input: {
        readonly cwd: string;
        readonly location: AzureDevOpsRepositoryLocation;
        readonly number: number;
    }) => Effect.Effect<readonly AzureDevOpsIteration[], AzureDevOpsPullRequestCliError>;
    /** Changes cover the whole PR from its merge base. */
    readonly listIterationChanges: (input: {
        readonly cwd: string;
        readonly location: AzureDevOpsRepositoryLocation;
        readonly number: number;
        readonly iterationId: number;
    }) => Effect.Effect<AzureDevOpsIterationChanges, AzureDevOpsPullRequestCliError>;
    readonly readItemContent: (input: {
        readonly cwd: string;
        readonly location: AzureDevOpsRepositoryLocation;
        readonly path: string;
        readonly commit: string;
    }) => Effect.Effect<AzureDevOpsItemContent, AzureDevOpsPullRequestCliError>;
    readonly runPullRequestAction: (input: {
        readonly cwd: string;
        readonly number: number;
        readonly action: PullRequestAction;
        readonly mergeMethod?: PullRequestMergeMethod;
    }) => Effect.Effect<void, AzureDevOpsPullRequestCliError>;
    readonly updatePullRequest: (input: {
        readonly cwd: string;
        readonly number: number;
        readonly title?: string | undefined;
        readonly body?: string | undefined;
    }) => Effect.Effect<void, AzureDevOpsPullRequestCliError>;
    readonly setPullRequestReviewers: (input: {
        readonly cwd: string;
        readonly number: number;
        readonly reviewers: readonly string[];
        readonly requested: boolean;
    }) => Effect.Effect<void, AzureDevOpsPullRequestCliError>;
}>;
export declare class AzureDevOpsPullRequestCli extends AzureDevOpsPullRequestCli_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly getViewer: (input: {
        readonly cwd: string;
    }) => Effect.Effect<string, AzureDevOpsPullRequestCliError>;
    readonly listPullRequests: (input: {
        readonly cwd: string;
        readonly repository: string;
        readonly state: PullRequestListState;
        readonly involvement: PullRequestInvolvement;
        readonly viewer: string;
        readonly limit: number;
        /** Matched by `--creator`, which takes the email a row shows as its login. */
        readonly author?: string | undefined;
        /**
         * Where to carry on from. Azure has no date filter for a pull request listing, so the only
         * part of a cursor it can use is how many rows have already been handed over.
         */
        readonly cursor?: ProviderListCursor | undefined;
    }) => Effect.Effect<{
        readonly items: ReadonlyArray<AzureDevOpsPullRequest>;
        readonly truncated: boolean;
        readonly cursorAdvance: number;
    }, AzureDevOpsPullRequestCliError>;
    readonly getPullRequest: (input: {
        readonly cwd: string;
        readonly number: number;
    }) => Effect.Effect<AzureDevOpsPullRequest, AzureDevOpsPullRequestCliError>;
    readonly listThreads: (input: {
        readonly cwd: string;
        readonly location: AzureDevOpsRepositoryLocation;
        readonly number: number;
    }) => Effect.Effect<ReadonlyArray<PullRequestComment>, AzureDevOpsPullRequestCliError>;
    readonly listIterations: (input: {
        readonly cwd: string;
        readonly location: AzureDevOpsRepositoryLocation;
        readonly number: number;
    }) => Effect.Effect<ReadonlyArray<AzureDevOpsIteration>, AzureDevOpsPullRequestCliError>;
    /** Changes cover the whole PR from its merge base. */
    readonly listIterationChanges: (input: {
        readonly cwd: string;
        readonly location: AzureDevOpsRepositoryLocation;
        readonly number: number;
        readonly iterationId: number;
    }) => Effect.Effect<AzureDevOpsIterationChanges, AzureDevOpsPullRequestCliError>;
    readonly readItemContent: (input: {
        readonly cwd: string;
        readonly location: AzureDevOpsRepositoryLocation;
        readonly path: string;
        readonly commit: string;
    }) => Effect.Effect<AzureDevOpsItemContent, AzureDevOpsPullRequestCliError>;
    readonly runPullRequestAction: (input: {
        readonly cwd: string;
        readonly number: number;
        readonly action: PullRequestAction;
        readonly mergeMethod?: PullRequestMergeMethod;
    }) => Effect.Effect<void, AzureDevOpsPullRequestCliError>;
    readonly updatePullRequest: (input: {
        readonly cwd: string;
        readonly number: number;
        readonly title?: string | undefined;
        readonly body?: string | undefined;
    }) => Effect.Effect<void, AzureDevOpsPullRequestCliError>;
    readonly setPullRequestReviewers: (input: {
        readonly cwd: string;
        readonly number: number;
        readonly reviewers: ReadonlyArray<string>;
        readonly requested: boolean;
    }) => Effect.Effect<void, AzureDevOpsPullRequestCliError>;
}, never, AzureDevOpsCli.AzureDevOpsCli>;
export declare const layer: Layer.Layer<AzureDevOpsPullRequestCli, never, AzureDevOpsCli.AzureDevOpsCli>;
export {};
