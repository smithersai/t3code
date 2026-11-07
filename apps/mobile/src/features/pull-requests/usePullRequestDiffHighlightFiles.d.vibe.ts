import type { NativeReviewDiffFile } from "../diffs/nativeReviewDiffTypes";
import type { ReviewParsedDiff } from "../review/reviewModel.vibe";
import { type PullRequestDiffParams } from "./usePullRequestDiff.vibe";
/** @throws {never} */
export declare function usePullRequestDiffHighlightFiles(params: PullRequestDiffParams, parsed: ReviewParsedDiff, files: ReadonlyArray<NativeReviewDiffFile>): readonly NativeReviewDiffFile[];
