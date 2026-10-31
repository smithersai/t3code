import * as Cause from "effect/Cause";
import * as Result from "effect/Result";
import * as Schema from "effect/Schema";
import type { PullRequestActor, PullRequestComment, PullRequestMergeability, PullRequestMergeMethod, PullRequestState } from "@t3tools/contracts";
export interface AzureDevOpsRepositoryLocation {
    readonly project: string;
    readonly repository: string;
}
export interface AzureDevOpsPullRequest {
    readonly number: number;
    readonly title: string;
    readonly url: string;
    readonly author: PullRequestActor | null;
    readonly headBranch: string;
    readonly baseBranch: string;
    readonly state: PullRequestState;
    readonly isDraft: boolean;
    readonly mergeability: PullRequestMergeability;
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly closedAt: string | null;
    readonly body: string;
    readonly reviewRequestLogins: ReadonlyArray<string>;
    readonly reviewers: ReadonlyArray<PullRequestActor>;
    readonly location: AzureDevOpsRepositoryLocation | null;
    readonly autoMergeEnabled: boolean;
    readonly autoMergeMethod?: PullRequestMergeMethod;
}
type DecodeFailure = Cause.Cause<Schema.SchemaError>;
export interface AzureDevOpsPullRequestBatch {
    readonly items: ReadonlyArray<AzureDevOpsPullRequest>;
    readonly rawIndexes: ReadonlyArray<number>;
    /** Count before decoding to avoid ending pagination on skipped rows. */
    readonly rawCount: number;
}
export declare function decodePullRequestListJson(raw: string): Result.Result<AzureDevOpsPullRequestBatch, DecodeFailure>;
/** Null means Azure returned insufficient data. */
export declare function decodePullRequestJson(raw: string): Result.Result<AzureDevOpsPullRequest | null, DecodeFailure>;
export declare function decodeViewerJson(raw: string): Result.Result<string | null, DecodeFailure>;
export declare function decodeThreadsJson(raw: string): Result.Result<ReadonlyArray<PullRequestComment>, DecodeFailure>;
export interface AzureDevOpsIteration {
    readonly id: number;
    readonly headCommit: string;
    readonly mergeBaseCommit: string;
}
export interface AzureDevOpsChangeEntry {
    readonly path: string;
    readonly oldPath: string;
    readonly changeKind: "new" | "deleted" | "change" | "rename-pure" | "rename-changed";
    readonly objectId: string | null;
    readonly originalObjectId: string | null;
}
export interface AzureDevOpsChangePage {
    readonly changes: ReadonlyArray<AzureDevOpsChangeEntry>;
    readonly nextSkip: number | null;
}
export interface AzureDevOpsItemContent {
    readonly contents: string;
    readonly isBinary: boolean;
}
export declare function decodeIterationsJson(raw: string): Result.Result<ReadonlyArray<AzureDevOpsIteration>, DecodeFailure>;
export declare function decodeIterationChangesJson(raw: string): Result.Result<AzureDevOpsChangePage, DecodeFailure>;
/** Azure returns an empty body for absent files. Binary status comes from its metadata. */
export declare function decodeItemContentJson(raw: string): Result.Result<AzureDevOpsItemContent, DecodeFailure>;
export {};
