import type { EnvironmentId, ScopedThreadRef, ThreadLinkedPullRequest, ThreadPullRequestLink } from "@t3tools/contracts";
import type { EnvironmentProject } from "@t3tools/client-runtime/state/shell";
import { threadPullRequestLinkMode } from "@t3tools/client-runtime/thread-pull-request-compatibility";
import { type ChangeRequestLink } from "@t3tools/client-runtime/source-control-clients";
export declare function canLinkChangeRequest(mode: ReturnType<typeof threadPullRequestLinkMode>, projects: ReadonlyArray<EnvironmentProject>, parsed: ChangeRequestLink): boolean;
export declare function usePullRequestLinking(environmentId: EnvironmentId | null | undefined): {
    mode: string;
    canLink: (url: string) => boolean;
    isLinked: (thread: {
        readonly pullRequests?: readonly ThreadPullRequestLink[];
        readonly linkedPullRequest?: ThreadLinkedPullRequest | null | undefined;
    } | null, url: string) => boolean;
    changeLink: (threadRef: ScopedThreadRef, url: string, linked: boolean) => Promise<void>;
};
