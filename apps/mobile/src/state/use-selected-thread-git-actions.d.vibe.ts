import { type GitActionRequestInput, type VcsRef } from "@t3tools/client-runtime/state/vcs";
import { type GitRunStackedActionResult } from "@t3tools/contracts";
export declare function useSelectedThreadGitActions(): {
    canWriteSourceControl: boolean;
    canChangeThreadBranch: boolean;
    refreshSelectedThreadGitStatus: (options?: {
        readonly quiet?: boolean;
        readonly cwd?: string | null;
    }) => Promise<{
        readonly isRepo: boolean;
        readonly sourceControlProvider?: {
            readonly kind: string & import("effect/Brand").Brand<"SourceControlProviderKind">;
            readonly name: string;
            readonly baseUrl: string;
        } | undefined;
        readonly hasPrimaryRemote: boolean;
        readonly isDefaultRef: boolean;
        readonly refName: string | null;
        readonly hasWorkingTreeChanges: boolean;
        readonly workingTree: {
            readonly rootPath?: string | undefined;
            readonly files: readonly {
                readonly path: string;
                readonly insertions: number;
                readonly deletions: number;
            }[];
            readonly insertions: number;
            readonly deletions: number;
        };
        readonly branchChanges?: {
            readonly baseRef: string | null;
            readonly insertions: number;
            readonly deletions: number;
        } | undefined;
        readonly hasUpstream: boolean;
        readonly aheadCount: number;
        readonly behindCount: number;
        readonly aheadOfDefaultCount?: number | undefined;
        readonly pr: {
            readonly number: number;
            readonly title: string;
            readonly url: string;
            readonly baseRef: string;
            readonly headRef: string;
            readonly state: "closed" | "merged" | "open";
            readonly isDraft?: boolean | undefined;
            readonly updatedAt?: string | null | undefined;
        } | null;
    } | null>;
    refreshSelectedThreadBranches: () => Promise<ReadonlyArray<VcsRef>>;
    onCheckoutSelectedThreadBranch: (branch: string) => Promise<unknown>;
    onCreateSelectedThreadBranch: (branch: string) => Promise<unknown>;
    onCreateSelectedThreadWorktree: (nextWorktree: {
        readonly baseBranch: string;
        readonly newBranch: string;
    }) => Promise<unknown>;
    onPullSelectedThreadBranch: () => Promise<void>;
    onRunSelectedThreadGitAction: (input: GitActionRequestInput) => Promise<GitRunStackedActionResult | null>;
};
