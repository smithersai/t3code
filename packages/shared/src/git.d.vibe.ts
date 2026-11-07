import type { BranchNamingOptions, VcsRef, VcsStatusLocalResult, VcsStatusRemoteResult, VcsStatusResult, VcsStatusStreamEvent } from "@t3tools/contracts";
export declare const WORKTREE_BRANCH_PREFIX = "t3";
/** @throws {never} */
export declare function sanitizeBranchFragment(raw: string): string;
/** @throws {never} */
export declare function formatGeneratedBranchName(raw: string, naming?: BranchNamingOptions): string;
/** @throws {never} */
export declare function sanitizeFeatureBranchName(raw: string): string;
/** @throws {never} */
export declare function resolveAutoFeatureBranchName(existingBranchNames: readonly string[], preferredBranch?: string): string;
/** @throws {never} */
export declare function deriveLocalBranchNameFromRemoteRef(branchName: string): string;
/** @throws {never} */
export declare function buildTemporaryWorktreeBranchName(randomHex: 
/** @throws {never} */
(byteLength: number) => string): string;
/**
 * Flatten temporary t3/<hex> refs because an existing t3 branch blocks nested refs.
 * @throws {never}
 */
export declare function flattenTemporaryWorktreeBranchName(refName: string): string;
/** @throws {never} */
export declare function isTemporaryWorktreeBranch(refName: string): boolean;
/**
 * The host and repository path a remote names, lower case and without a port, or null for a
 * remote that names no host, such as a local path.
 * @throws {never}
 */
export declare function parseGitRemoteRepository(value: string): {
    readonly host: string;
    readonly path: string;
} | null;
/**
 * `host/path` for a remote that names a host, otherwise the remote itself, lower case. A host that
 * spells repositories differently over SSH has its source control registry's
 * `repositoryKeyFromRemote` rewrite this, so persisted keys come from that, not from here.
 * @throws {never}
 */
export declare function normalizeGitRemoteUrl(value: string): string;
/** @throws {never} */
export declare function isBareGitConfig(configText: string): boolean;
/** @throws {never} */
export declare function parseOriginUrlFromGitConfig(configText: string): string | null;
/** @throws {never} */
export declare function sanitizeNewRefName(rawName: string): string;
/** @throws {never} */
export declare function dedupeRemoteBranchesWithLocalMatches(refs: ReadonlyArray<VcsRef>): ReadonlyArray<VcsRef>;
/** @throws {never} */
export declare function mergeGitStatusParts(local: VcsStatusLocalResult, remote: VcsStatusRemoteResult | null): VcsStatusResult;
/** @throws {never} */
export declare function applyGitStatusStreamEvent(current: VcsStatusResult | null, event: VcsStatusStreamEvent): VcsStatusResult;
