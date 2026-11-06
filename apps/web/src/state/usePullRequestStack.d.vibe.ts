import { type EnvironmentId, type PullRequestRef } from "@t3tools/contracts";
export declare function usePullRequestStack(environmentId: EnvironmentId, reference: PullRequestRef | null): {
    dataUpdatedAt: number;
    error: string | null;
    failure: import("@t3tools/client-runtime/connection").ConnectionBlockedError | import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/client-runtime/connection").ConnectionTransientError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | Error | import("@t3tools/contracts").PullRequestOperationError | import("@t3tools/contracts").PullRequestUnavailableError | import("effect/rpc/RpcClientError").RpcClientError | null;
    isPending: boolean;
    isSuccess: boolean;
    refresh: () => void;
    data: {
        readonly id: string;
        readonly number: number;
        readonly url: string;
        readonly base: string;
        readonly layers: readonly {
            readonly number: number;
            readonly title?: string | undefined;
            readonly isDraft?: boolean | undefined;
            readonly headSha?: string | undefined;
            readonly headBranch: string;
            readonly state: "closed" | "merged" | "open";
        }[];
    } | null;
    isFresh: boolean;
    notice: string | null;
};
