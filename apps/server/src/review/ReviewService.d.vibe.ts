import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Path from "effect/Path";
import { type ReviewDiffFileContentsInput, type ReviewDiffFileContentsResult, type ReviewDiffPreviewError, type ReviewDiffPreviewInput, type ReviewDiffPreviewResult } from "@t3tools/contracts";
import * as ServerConfig from "../config.ts";
import * as GitVcsDriver from "../vcs/GitVcsDriver.ts";
import * as VcsDriverRegistry from "../vcs/VcsDriverRegistry.ts";
import * as KnownWorkspaces from "../workspace/KnownWorkspaces.ts";
declare const ReviewService_base: Context.ServiceClass<ReviewService, "t3/review/ReviewService", {
    readonly getDiffPreview: (input: ReviewDiffPreviewInput) => Effect.Effect<ReviewDiffPreviewResult, ReviewDiffPreviewError>;
    readonly getDiffFileContents: (input: ReviewDiffFileContentsInput) => Effect.Effect<ReviewDiffFileContentsResult, ReviewDiffPreviewError>;
}>;
export declare class ReviewService extends ReviewService_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly getDiffPreview: (input: ReviewDiffPreviewInput) => Effect.Effect<ReviewDiffPreviewResult, ReviewDiffPreviewError>;
    readonly getDiffFileContents: (input: ReviewDiffFileContentsInput) => Effect.Effect<ReviewDiffFileContentsResult, ReviewDiffPreviewError>;
}, never, FileSystem.FileSystem | GitVcsDriver.GitVcsDriver | KnownWorkspaces.KnownWorkspaces | Path.Path | ServerConfig.ServerConfig | VcsDriverRegistry.VcsDriverRegistry>;
export declare const layer: Layer.Layer<ReviewService, never, FileSystem.FileSystem | GitVcsDriver.GitVcsDriver | KnownWorkspaces.KnownWorkspaces | Path.Path | ServerConfig.ServerConfig | VcsDriverRegistry.VcsDriverRegistry>;
export {};
