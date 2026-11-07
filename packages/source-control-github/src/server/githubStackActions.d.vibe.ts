import type { PullRequestAction, PullRequestMergeMethod, PullRequestStackHead } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import * as GitHubRest from "./GitHubRest.vibe";
declare const GitHubStackChangedError_base: Schema.Class<GitHubStackChangedError, Schema.TaggedStruct<"GitHubStackChangedError", {
    readonly repository: Schema.String;
    readonly number: Schema.Int;
    readonly stackNumber: Schema.Int;
    readonly completed: Schema.Int;
}>, import("effect/Cause").YieldableError>;
export declare class GitHubStackChangedError extends GitHubStackChangedError_base {
    get message(): string;
}
declare const GitHubStackUnsupportedError_base: Schema.Class<GitHubStackUnsupportedError, Schema.TaggedStruct<"GitHubStackUnsupportedError", {
    repository: Schema.String;
    number: Schema.Int;
    stackNumber: Schema.Int;
}>, import("effect/Cause").YieldableError>;
export declare class GitHubStackUnsupportedError extends GitHubStackUnsupportedError_base {
    get message(): string;
}
declare const GitHubStackResponseInvalidError_base: Schema.Class<GitHubStackResponseInvalidError, Schema.TaggedStruct<"GitHubStackResponseInvalidError", {
    readonly repository: Schema.String;
    readonly number: Schema.Int;
    readonly stackNumber: Schema.Int;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class GitHubStackResponseInvalidError extends GitHubStackResponseInvalidError_base {
    get message(): string;
}
declare const GitHubStackMergeRejectedError_base: Schema.Class<GitHubStackMergeRejectedError, Schema.TaggedStruct<"GitHubStackMergeRejectedError", {
    readonly repository: Schema.String;
    readonly number: Schema.Int;
    readonly stackNumber: Schema.Int;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class GitHubStackMergeRejectedError extends GitHubStackMergeRejectedError_base {
    get message(): string;
}
declare const GitHubStackMergePendingError_base: Schema.Class<GitHubStackMergePendingError, Schema.TaggedStruct<"GitHubStackMergePendingError", {
    repository: Schema.String;
    number: Schema.Int;
    stackNumber: Schema.Int;
}>, import("effect/Cause").YieldableError>;
export declare class GitHubStackMergePendingError extends GitHubStackMergePendingError_base {
    get message(): string;
}
declare const GitHubStackPermissionError_base: Schema.Class<GitHubStackPermissionError, Schema.TaggedStruct<"GitHubStackPermissionError", {
    repository: Schema.String;
    number: Schema.Int;
    stackNumber: Schema.Int;
}>, import("effect/Cause").YieldableError>;
export declare class GitHubStackPermissionError extends GitHubStackPermissionError_base {
    get message(): string;
}
declare const GitHubStackRebaseFailedError_base: Schema.Class<GitHubStackRebaseFailedError, Schema.TaggedStruct<"GitHubStackRebaseFailedError", {
    readonly repository: Schema.String;
    readonly number: Schema.Int;
    readonly stackNumber: Schema.Int;
    readonly completed: Schema.Int;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class GitHubStackRebaseFailedError extends GitHubStackRebaseFailedError_base {
    get message(): string;
}
export type GitHubStackActionError = GitHubStackChangedError | GitHubStackUnsupportedError | GitHubStackResponseInvalidError | GitHubStackMergeRejectedError | GitHubStackMergePendingError | GitHubStackPermissionError | GitHubStackRebaseFailedError;
export declare const runGitHubStackAction: (input: {
    cwd: string;
    repository: string;
    host: string;
    number: number;
    stackNumber: number;
    expectedStackHeads?: ReadonlyArray<PullRequestStackHead>;
    action: PullRequestAction;
    mergeMethod?: PullRequestMergeMethod;
}) => Effect.Effect<undefined, GitHubStackChangedError | GitHubStackMergePendingError | GitHubStackMergeRejectedError | GitHubStackPermissionError | GitHubStackRebaseFailedError | GitHubStackResponseInvalidError | GitHubStackUnsupportedError | import("./GitHubRequestPolicy.vibe").GitHubApiError, import("effect/FileSystem").FileSystem | import("./GitHubRequestPolicy.vibe").GitHubRequestPolicy | GitHubRest.GitHubRest | import("effect/http/HttpClient").HttpClient | import("@t3tools/source-control-core/server/SourceControlHost").SourceControlHost>;
export {};
