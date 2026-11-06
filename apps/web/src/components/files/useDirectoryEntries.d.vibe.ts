import type { EnvironmentId } from "@t3tools/contracts";
export declare function useDirectoryEntries(environmentId: EnvironmentId, cwd: string): {
    entries: {
        readonly path: string;
        readonly kind: "directory" | "file";
        readonly ignored?: boolean | undefined;
    }[];
    load: (directoryPath: string, refresh?: boolean) => Promise<void>;
    refresh: () => void;
    isPending: boolean;
    loadingDirectories: ReadonlySet<string>;
    ready: boolean;
    error: string | null;
};
