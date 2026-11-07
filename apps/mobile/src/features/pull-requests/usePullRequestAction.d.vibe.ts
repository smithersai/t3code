import type { PullRequestAction, PullRequestDetail, PullRequestUpdateMethod } from "@t3tools/contracts";
import { type PullRequestParams } from "./usePullRequestDiff.vibe";
/** @throws {never} */
export declare function usePullRequestAction(params: PullRequestParams, pr: PullRequestDetail | null): {
    available: (action: PullRequestAction) => boolean;
    perform: (action: PullRequestAction, updateMethod?: PullRequestUpdateMethod) => Promise<void>;
    confirm: (action: PullRequestAction, title: string, message: string) => void;
    busy: boolean;
};
