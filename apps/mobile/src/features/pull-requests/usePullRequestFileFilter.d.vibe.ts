import type { ReviewParsedDiff } from "../review/reviewModel";
export declare function usePullRequestFileFilter(parsed: ReviewParsedDiff, includePath?: string): {
    parsed: ReviewParsedDiff;
    hideTestFiles: boolean;
    hiddenCount: number;
    toggle: () => void;
    showAll: () => void;
};
