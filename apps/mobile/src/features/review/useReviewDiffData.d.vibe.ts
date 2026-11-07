import { type ReviewParsedDiff, type ReviewSectionItem } from "./reviewModel.vibe";
import type { EnvironmentId } from "@t3tools/contracts";
/** @throws {never} */
export declare function formatHeaderDiffSummary(parsedDiff: ReviewParsedDiff, files?: ReviewSectionItem["files"]): {
    readonly additions: string | null;
    readonly deletions: string | null;
};
/** @throws {never} */
export declare function useReviewDiffData(input: {
    readonly threadKey: string | null;
    readonly environmentId: EnvironmentId | undefined;
    readonly cwd: string | null;
    readonly selectedSection: ReviewSectionItem | null;
    readonly draftMessage: string;
}): {
    parsedDiff: ReviewParsedDiff;
    loadVisibleFile: (fileId: string | null, retry?: boolean) => void;
    isPending: boolean;
    headerDiffSummary: {
        readonly additions: string | null;
        readonly deletions: string | null;
    };
    nativeReviewDiffData: import("./nativeReviewDiffAdapter.vibe").NativeReviewDiffData;
    pendingReviewCommentCount: number;
};
