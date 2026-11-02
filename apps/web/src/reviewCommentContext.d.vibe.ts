import type { FileDiffMetadata, SelectedLineRange, SelectionSide } from "@pierre/diffs";
import { PullRequestContextMetadata, type PullRequestReviewPosition } from "@t3tools/contracts";
import * as Schema from "effect/Schema";
declare const ReviewCommentSelectionSchema: Schema.Struct<{
    readonly start: Schema.Number;
    readonly side: Schema.Literals<readonly ["additions", "deletions"]>;
    readonly end: Schema.Number;
    readonly endSide: Schema.Literals<readonly ["additions", "deletions"]>;
}>;
type ReviewCommentSelectionSchema = typeof ReviewCommentSelectionSchema.Type;
type ReviewCommentSelection = typeof ReviewCommentSelectionSchema.Type;
export declare const ReviewCommentContextSchema: Schema.Struct<{
    readonly id: Schema.String;
    readonly sectionId: Schema.String;
    readonly sectionTitle: Schema.String;
    readonly filePath: Schema.String;
    readonly startIndex: Schema.Number;
    readonly endIndex: Schema.Number;
    readonly rangeLabel: Schema.String;
    readonly text: Schema.String;
    readonly diff: Schema.String;
    readonly fenceLanguage: Schema.optional<Schema.String>;
    readonly selection: Schema.optional<Schema.Struct<{
        readonly start: Schema.Number;
        readonly side: Schema.Literals<readonly ["additions", "deletions"]>;
        readonly end: Schema.Number;
        readonly endSide: Schema.Literals<readonly ["additions", "deletions"]>;
    }>>;
    readonly pullRequest: Schema.optional<Schema.Struct<{
        readonly number: Schema.Int;
        readonly title: Schema.String;
        readonly url: Schema.String;
        readonly headBranch: Schema.String;
        readonly baseBranch: Schema.String;
        readonly state: Schema.Literals<readonly ["open", "closed", "merged"]>;
        readonly isDraft: Schema.Boolean;
    }>>;
}>;
export interface ReviewCommentContext {
    readonly id: string;
    readonly sectionId: string;
    readonly sectionTitle: string;
    readonly filePath: string;
    readonly startIndex: number;
    readonly endIndex: number;
    readonly rangeLabel: string;
    readonly text: string;
    readonly diff: string;
    readonly fenceLanguage?: string | undefined;
    readonly selection?: ReviewCommentSelection | undefined;
    readonly pullRequest?: PullRequestContextMetadata | undefined;
}
export declare function formatReviewCommentFence(language: string, contents: string): string;
export declare function buildFileReviewComment(input: {
    id: string;
    filePath: string;
    startLine: number;
    endLine: number;
    text: string;
    contents: string;
}): ReviewCommentContext;
export declare function inferReviewCommentFenceLanguage(filePath: string): string;
export declare function restoreDiffReviewCommentRange(fileDiff: FileDiffMetadata, comment: ReviewCommentContext): SelectedLineRange | null;
export declare function resolveDiffReviewPosition(fileDiff: FileDiffMetadata, lineNumber: number, side: SelectionSide | undefined): PullRequestReviewPosition | null;
/**
 * Where a review comment on `range` is anchored. With `ranged`, a selection inside one hunk
 * keeps its first line, in diff order, as `startPosition`, because hosts refuse a range that
 * crosses hunks. Otherwise the comment sits on the line the selection ended on.
 */
export declare function resolveDiffReviewAnchor(fileDiff: FileDiffMetadata, range: SelectedLineRange, ranged: boolean): {
    readonly position: PullRequestReviewPosition;
    readonly startPosition?: PullRequestReviewPosition;
} | null;
export declare function buildDiffReviewComment(input: {
    id: string;
    sectionId: string;
    sectionTitle: string;
    filePath: string;
    fileDiff: FileDiffMetadata;
    range: SelectedLineRange;
    text: string;
}): ReviewCommentContext | null;
export declare function buildReviewCommentRenderablePatch(comment: ReviewCommentContext): string;
export {};
