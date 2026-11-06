import type { EnvironmentId, ThreadId } from "@t3tools/contracts";
import { type ReviewSectionItem } from "./reviewModel";
import { type ReviewCacheForThread } from "./reviewState.vibe";
export declare function useReviewSections(input: {
    readonly enabled?: boolean;
    readonly environmentId?: EnvironmentId;
    readonly threadId?: ThreadId;
    readonly reviewCache: ReviewCacheForThread;
}): {
    error: string | null;
    isSelectedSectionPending: boolean;
    reviewSections: ReviewSectionItem[];
    selectedSection: ReviewSectionItem | null;
    refreshSelectedSection: () => Promise<void>;
    selectSection: (sectionId: string) => void;
};
