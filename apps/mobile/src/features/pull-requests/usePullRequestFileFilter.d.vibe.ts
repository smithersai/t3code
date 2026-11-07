import type { ReviewParsedDiff } from "../review/reviewModel.vibe";
/** @throws {never} */
export declare function usePullRequestFileFilter(parsed: ReviewParsedDiff, includePath?: string): {
    parsed: ReviewParsedDiff;
    hideTestFiles: boolean;
    hiddenCount: number;
    /** @throws {never} */
    toggle: () => void;
    /** @throws {never} */
    showAll: () => void;
};
