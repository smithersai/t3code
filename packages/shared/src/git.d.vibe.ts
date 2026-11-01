import type { BranchNamingOptions, VcsRef, VcsStatusLocalResult, VcsStatusRemoteResult, VcsStatusResult, VcsStatusStreamEvent } from "@t3tools/contracts";
export declare const WORKTREE_BRANCH_PREFIX = "t3";
export declare function sanitizeBranchFragment(raw: string): string;
export declare function formatGeneratedBranchName(raw: string, naming?: BranchNamingOptions): string;
export declare function sanitizeFeatureBranchName(raw: string): string;
export declare function resolveAutoFeatureBranchName(existingBranchNames: readonly string[], preferredBranch?: string): string;
export declare function deriveLocalBranchNameFromRemoteRef(branchName: string): string;
export declare function buildTemporaryWorktreeBranchName(randomHex: (byteLength: number) => string): string;
/** Flatten temporary t3/<hex> refs because an existing t3 branch blocks nested refs. */
export declare function flattenTemporaryWorktreeBranchName(refName: string): string;
export declare function isTemporaryWorktreeBranch(refName: string): boolean;
/**
 * The host and repository path a remote names, lower case and without a port, or null for a
 * remote that names no host, such as a local path.
 */
export declare function parseGitRemoteRepository(value: string): {
    readonly host: string;
    readonly path: string;
} | null;
/**
 * `host/path` for a remote that names a host, otherwise the remote itself, lower case. A host that
 * spells repositories differently over SSH has its source control registry's
 * `repositoryKeyFromRemote` rewrite this, so persisted keys come from that, not from here.
 */
export declare function normalizeGitRemoteUrl(value: string): string;
export declare function isBareGitConfig(configText: string): boolean;
export declare function parseOriginUrlFromGitConfig(configText: string): string | null;
export declare function sanitizeNewRefName(rawName: string): string;
export declare function dedupeRemoteBranchesWithLocalMatches(refs: ReadonlyArray<VcsRef>): ReadonlyArray<VcsRef>;
export declare function mergeGitStatusParts(local: VcsStatusLocalResult, remote: VcsStatusRemoteResult | null): VcsStatusResult;
export declare function applyGitStatusStreamEvent(current: VcsStatusResult | null, event: VcsStatusStreamEvent): VcsStatusResult;
