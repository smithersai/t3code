import { AsyncResult } from "effect/reactivity";
import { type PullRequestDetail, type PullRequestLinkedThreadsResult } from "@t3tools/contracts";
import { type PullRequestParams } from "./usePullRequestDiff";
import { type PullRequestAgentTask } from "./pullRequestAgentTasks";
type LinkedThread = PullRequestLinkedThreadsResult["threads"][number];
export declare function usePullRequestThreads(params: PullRequestParams, pr: PullRequestDetail | null, filePath?: string): {
    data: {
        readonly threads: readonly {
            readonly id: string & import("effect/Brand").Brand<"ThreadId">;
            readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
            readonly title: string;
            readonly archivedAt: string | null;
        }[];
    } | null;
    successResult: AsyncResult.Success<{
        readonly threads: readonly {
            readonly id: string & import("effect/Brand").Brand<"ThreadId">;
            readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
            readonly title: string;
            readonly archivedAt: string | null;
        }[];
    }, unknown> | null;
    error: string | null;
    failure: unknown;
    isPending: boolean;
    isSuccess: boolean;
    refresh: () => void;
    threads: readonly {
        readonly id: string & import("effect/Brand").Brand<"ThreadId">;
        readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
        readonly title: string;
        readonly archivedAt: string | null;
    }[];
    canAsk: boolean;
    canWatch: boolean;
    busy: boolean;
    ask: (thread?: LinkedThread, task?: PullRequestAgentTask) => Promise<void>;
    openThread: (thread: LinkedThread) => void;
};
export {};
