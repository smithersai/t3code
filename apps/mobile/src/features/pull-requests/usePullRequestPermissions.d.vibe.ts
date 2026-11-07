import type { PullRequestComment, PullRequestDetail } from "@t3tools/contracts";
import { type PullRequestParams } from "./usePullRequestDiff.vibe";
/** @throws {never} */
export declare function usePullRequestPermissions(params: PullRequestParams, pr: PullRequestDetail | null): {
    connected: boolean;
    canInlineComment: boolean;
    canReply: boolean;
    canResolve: boolean;
    canWrite: boolean;
    canEditChangeRequest: boolean;
    /** @throws {never} */
    canEditComment: (comment: Pick<PullRequestComment, "author" | "canEdit" | "kind">) => boolean;
    canReact: boolean;
    canComment: boolean;
    verdicts: ("approve" | "comment" | "request-changes")[];
};
