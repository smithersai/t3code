import { type EnvironmentId } from "@t3tools/contracts";
export declare function useFileTreeEntries(input: {
    readonly cwd: string | null;
    readonly environmentId: EnvironmentId | null;
    readonly searchQuery: string;
}): {
    revealSelection: (path: string | null) => void;
    expandedPaths: Set<string>;
    setExpandedPaths: (update: (current: ReadonlySet<string>) => ReadonlySet<string>) => void;
    selectedPath: string | null;
    selectPath: (selectedPath: string) => void;
    entries: {
        readonly path: string;
        readonly kind: "directory" | "file";
        readonly ignored?: boolean | undefined;
    }[];
    searchResultPaths: Set<string> | null;
    isRefreshing: boolean;
    error: string | null;
    isPending: boolean;
    searchTruncated: boolean;
    loadedDirectories: Set<string>;
    loadingDirectories: Set<string>;
    loadDirectory: (path: string, retry?: boolean) => Promise<void> | undefined;
    refresh: () => Promise<void> | Promise<(void | import("@t3tools/client-runtime/state/runtime").AtomCommandResult<{
        readonly entries: readonly {
            readonly path: string;
            readonly kind: "directory" | "file";
            readonly ignored?: boolean | undefined;
        }[];
        readonly truncated: boolean;
    }, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | Error | import("@t3tools/contracts").ProjectSearchEntriesError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>)[]>;
};
