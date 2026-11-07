import type { PullRequestDetail } from "@t3tools/contracts";
import { type PullRequestParams } from "./usePullRequestDiff.vibe";
/** @throws {never} */
export declare function usePullRequestFilesViewed(params: PullRequestParams, pr: PullRequestDetail | null): {
    supported: boolean;
    canToggle: boolean;
    isViewed: (path: string) => boolean;
    toggle: (path: string) => Promise<void>;
    error: string | null;
    truncated: boolean | undefined;
};
