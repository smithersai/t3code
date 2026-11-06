import type { EnvironmentId } from "@t3tools/contracts";
export declare function useProjectScans(environmentIds: readonly EnvironmentId[]): {
    environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
    data: {
        readonly candidates: readonly {
            readonly path: string;
            readonly title: string;
            readonly projectId?: (string & import("effect/Brand").Brand<"ProjectId">) | undefined;
            readonly sources: readonly ("claudeAgent" | "codex")[];
            readonly threadCount: number;
            readonly lastActiveAt: string | null;
            readonly alreadyImported: boolean;
            readonly git?: {
                readonly remoteKey: string | null;
                readonly repository: string | null;
            } | null;
        }[];
        readonly scannedAt: string;
        readonly truncated?: boolean | undefined;
    } | null;
    error: string | null;
    isPending: boolean;
    refresh: () => void;
}[];
