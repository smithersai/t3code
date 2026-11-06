import type { EnvironmentId, ThreadId } from "@t3tools/contracts";
import { type ReviewParsedDiff } from "./reviewModel";
export declare const MAX_CACHED_REVIEW_DIFFS = 8;
export declare const MAX_CACHED_REVIEW_SOURCE_CHARACTERS: number;
export interface ReviewCacheForThread {
    readonly threadKey: string | null;
    readonly selectedSectionId: string | null;
    readonly expandedFileIdsBySection: Readonly<Record<string, ReadonlyArray<string> | undefined>>;
    readonly revealedLargeFileIdsBySection: Readonly<Record<string, ReadonlyArray<string> | undefined>>;
    readonly viewedFileIdsBySection: Readonly<Record<string, ReadonlyArray<string> | undefined>>;
}
export declare function useReviewCacheForThread(input: {
    readonly environmentId?: EnvironmentId;
    readonly threadId?: ThreadId;
}): ReviewCacheForThread;
export declare function setReviewSelectedSectionId(threadKey: string, sectionId: string | null): void;
export declare function updateReviewExpandedFileIds(threadKey: string, sectionId: string, update: (current: ReadonlyArray<string> | undefined) => ReadonlyArray<string> | undefined): void;
export declare function updateReviewViewedFileIds(threadKey: string, sectionId: string, update: (current: ReadonlyArray<string> | undefined) => ReadonlyArray<string> | undefined): void;
export declare function getReviewParsedDiffSourceCharacterCount(input: {
    readonly threadKey: string;
    readonly sectionId: string;
    readonly diff: string | null;
}): number;
export declare function getCachedReviewParsedDiff(input: {
    readonly threadKey: string | null;
    readonly sectionId: string | null;
    readonly diff: string | null | undefined;
}): ReviewParsedDiff;
