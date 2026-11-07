import type { ChangeTypes } from "@pierre/diffs/types";
import type { ThreadCheckpointSummary } from "@t3tools/client-runtime/state/thread-checkpoints";
import type { ReviewDiffPreviewSource } from "@t3tools/contracts";
export type ReviewSectionKind = "turn" | "working-tree" | "branch-range";
export interface ReviewSectionItem {
    readonly id: string;
    readonly kind: ReviewSectionKind;
    readonly title: string;
    readonly subtitle: string | null;
    readonly diff: string | null;
    readonly isLoading: boolean;
    readonly files?: ReviewDiffPreviewSource["files"];
    readonly truncated?: boolean;
    readonly source?: ReviewDiffPreviewSource;
}
export interface ReviewRenderableHunkRow {
    readonly kind: "hunk";
    readonly id: string;
    readonly header: string;
    readonly context: string | null;
}
export interface ReviewRenderableLineRow {
    readonly kind: "line";
    readonly id: string;
    readonly change: "context" | "add" | "delete";
    readonly oldLineNumber: number | null;
    readonly newLineNumber: number | null;
    readonly content: string;
    readonly additionTokenIndex: number | null;
    readonly deletionTokenIndex: number | null;
    readonly comparison: {
        readonly change: "add" | "delete";
        readonly tokenIndex: number;
    } | null;
}
export type ReviewRenderableRow = ReviewRenderableHunkRow | ReviewRenderableLineRow;
export interface ReviewRenderableFile {
    readonly id: string;
    readonly cacheKey: string;
    readonly notice?: string;
    readonly path: string;
    readonly previousPath: string | null;
    readonly changeType: ChangeTypes;
    readonly additions: number;
    readonly deletions: number;
    readonly languageHint: string | null;
    readonly additionLines: ReadonlyArray<string>;
    readonly deletionLines: ReadonlyArray<string>;
    /** @throws {never} */
    readonly completePatchSource?: () => {
        readonly oldContents: string;
        readonly newContents: string;
    };
    readonly noEOFCRAdditions?: boolean;
    readonly noEOFCRDeletions?: boolean;
    readonly rows: ReadonlyArray<ReviewRenderableRow>;
}
export type ReviewFilePreviewState = {
    readonly kind: "render";
} | {
    readonly kind: "suppressed";
    readonly reason: "non-text" | "large";
    readonly title: string;
    readonly message: string;
    readonly actionLabel: string | null;
};
export type ReviewParsedDiff = {
    readonly kind: "empty";
} | {
    readonly kind: "raw";
    readonly text: string;
    readonly reason: string;
    readonly notice: string | null;
} | {
    readonly kind: "files";
    readonly files: ReadonlyArray<ReviewRenderableFile>;
    readonly fileCount: number;
    readonly additions: number;
    readonly deletions: number;
    readonly notice: string | null;
};
/** @throws {never} */
export declare function getReviewFilePreviewState(file: ReviewRenderableFile): ReviewFilePreviewState;
/** @throws {never} */
export declare function getReviewSectionIdForCheckpoint(checkpoint: Pick<ThreadCheckpointSummary, "checkpointTurnCount">): string;
/** @throws {never} */
export declare function getReadyReviewCheckpoints(checkpoints: ReadonlyArray<ThreadCheckpointSummary>): ReadonlyArray<ThreadCheckpointSummary>;
/** @throws {never} */
export declare function reviewTurnDiffsBySectionId(checkpoints: ReadonlyArray<Pick<ThreadCheckpointSummary, "checkpointTurnCount">>, diffByTurnCount: Readonly<Record<number, string | undefined>>): Readonly<Record<string, string | undefined>>;
/** @throws {never} */
export declare function buildReviewSectionItems(input: {
    readonly checkpoints: ReadonlyArray<ThreadCheckpointSummary>;
    readonly gitSections: ReadonlyArray<ReviewDiffPreviewSource>;
    readonly turnDiffById: Readonly<Record<string, string | undefined>>;
    readonly loadingGitSections: boolean;
}): ReadonlyArray<ReviewSectionItem>;
/** @throws {never} */
export declare function getDefaultReviewSectionId(sections: ReadonlyArray<ReviewSectionItem>): string | null;
/**
 * The store holds only the user's pick. While that section is missing (still loading, or the
 * working tree went clean) the default shows, and the pick returns once the section does: the
 * thread-feed entry relies on this, as it selects a section before the sections have loaded.
 * @throws {never}
 */
export declare function resolveReviewSelectedSectionId(sections: ReadonlyArray<ReviewSectionItem>, storedSectionId: string | null): string | null;
/** @throws {never} */
export declare function buildReviewParsedDiff(diff: string | null | undefined, cacheScope: string): ReviewParsedDiff;
/** @throws {never} */
export declare function applyReviewDiffMetadata(previewDiff: ReviewParsedDiff, selectedSection: Pick<ReviewSectionItem, "files" | "truncated"> | null): ReviewParsedDiff;
