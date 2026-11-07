import { type ReviewDraft } from "./pullRequestReviewDrafts.vibe";
import type { PullRequestParams } from "./usePullRequestDiff.vibe";
/** @throws {never} */
declare function persist(): Promise<void>;
/** @throws {never} */
export declare function usePullRequestReviewDraft(params: PullRequestParams): {
    draft: ReviewDraft;
    ready: boolean;
    error: string | null;
    update: (transform: 
    /** @throws {never} */
    (current: ReviewDraft) => ReviewDraft) => void;
    flush: typeof persist;
};
export {};
