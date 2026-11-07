import type { EnvironmentId, ThreadId } from "@t3tools/contracts";
import { type ReviewParsedDiff } from "./reviewModel.vibe";
export declare const MAX_CACHED_REVIEW_DIFFS = 8;
export declare const MAX_CACHED_REVIEW_SOURCE_CHARACTERS: number;
export interface ReviewCacheForThread {
    readonly threadKey: string | null;
    readonly selectedSectionId: string | null;
    readonly expandedFileIdsBySection: Readonly<Record<string, ReadonlyArray<string> | undefined>>;
    readonly revealedLargeFileIdsBySection: Readonly<Record<string, ReadonlyArray<string> | undefined>>;
    readonly viewedFileIdsBySection: Readonly<Record<string, ReadonlyArray<string> | undefined>>;
}
/** @throws {never} */
export declare function useReviewCacheForThread(input: {
    readonly environmentId?: EnvironmentId;
    readonly threadId?: ThreadId;
}): ReviewCacheForThread;
/** @throws {never} */
export declare function setReviewSelectedSectionId(threadKey: string, sectionId: string | null): void;
/** @throws {never} */
export declare function updateReviewExpandedFileIds(threadKey: string, sectionId: string, update: 
/** @throws {never} */
(current: ReadonlyArray<string> | undefined) => ReadonlyArray<string> | undefined): void;
/** @throws {never} */
export declare function updateReviewViewedFileIds(threadKey: string, sectionId: string, update: 
/** @throws {never} */
(current: ReadonlyArray<string> | undefined) => ReadonlyArray<string> | undefined): void;
/** @throws {never} */
export declare function getReviewParsedDiffSourceCharacterCount(input: {
    readonly threadKey: string;
    readonly sectionId: string;
    readonly diff: string | null;
}): number;
/** @throws {never} */
export declare function getCachedReviewParsedDiff(input: {
    readonly threadKey: string | null;
    readonly sectionId: string | null;
    readonly diff: string | null | undefined;
}): ReviewParsedDiff;
