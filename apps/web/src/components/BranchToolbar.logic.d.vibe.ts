import type { EnvironmentId, EnvironmentMachineKind, VcsRef, ProjectId, WorktreeSubmodules } from "@t3tools/contracts";
import * as Schema from "effect/Schema";
export { dedupeRemoteBranchesWithLocalMatches, deriveLocalBranchNameFromRemoteRef, sanitizeNewRefName, } from "@t3tools/shared/git";
export interface EnvironmentOption {
    environmentId: EnvironmentId;
    projectId: ProjectId | null;
    label: string;
    isPrimary: boolean;
    machine: EnvironmentMachineKind;
}
/** "Add to another machine" stays muted until hovered: easy to find, quieter than the machines. */
export declare const ADD_TO_MACHINE_LABEL_CLASS = "flex min-w-0 items-center gap-1.5 opacity-55 in-data-highlighted:opacity-100 in-data-popup-open:opacity-100";
export declare const EnvMode: Schema.Literals<readonly ["local", "worktree"]>;
export type EnvMode = typeof EnvMode.Type;
export declare function resolveEnvironmentOptionLabel(input: {
    isPrimary: boolean;
    environmentId: EnvironmentId;
    runtimeLabel?: string | null;
    savedLabel?: string | null;
}): string;
export declare function shouldShowEnvironmentIndicator(input: {
    activeEnvironment: Pick<EnvironmentOption, "isPrimary"> | null;
    canPickEnvironment: boolean;
}): boolean;
export declare function shouldShowComposerContextStrip(input: {
    isDraftHeroState: boolean;
    persistInActiveThreads: boolean;
    hasActiveProject: boolean;
    isGitRepo: boolean;
    showEnvironmentIndicator: boolean;
    hostsRestingComposerControls: boolean;
}): boolean;
export declare function resolveContextStripLabelsCompact(input: {
    compact: boolean;
    neededWidth: number;
    availableWidth: number;
}): boolean;
export declare function resolveEnvModeLabel(mode: EnvMode): string;
export declare const WORKTREE_SUBMODULES_LABELS: Record<WorktreeSubmodules, string>;
export declare function resolveCurrentWorkspaceLabel(activeWorktreePath: string | null): string;
export declare function resolveLockedWorkspaceLabel(activeWorktreePath: string | null, effectiveEnvMode: EnvMode): string;
export interface PreviousWorktreeSeed {
    branch: string | null;
    worktreePath: string;
}
export declare function resolvePreviousWorktreeSeed(input: {
    threads: ReadonlyArray<{
        branch: string | null;
        worktreePath: string | null;
        updatedAt: string;
        archivedAt?: string | null;
    }>;
    currentWorktreePath: string | null;
}): PreviousWorktreeSeed | null;
export declare function resolvePreviousWorktreeLabel(seed: PreviousWorktreeSeed): string;
export declare function resolveEffectiveEnvMode(input: {
    activeWorktreePath: string | null;
    hasServerThread: boolean;
    draftThreadEnvMode: EnvMode | undefined;
    preparingWorktree?: boolean;
}): EnvMode;
export declare function resolveDraftEnvModeAfterBranchChange(input: {
    nextWorktreePath: string | null;
    currentWorktreePath: string | null;
    effectiveEnvMode: EnvMode;
}): EnvMode;
export declare function resolveBranchToolbarValue(input: {
    envMode: EnvMode;
    activeWorktreePath: string | null;
    activeThreadBranch: string | null;
    currentGitBranch: string | null;
}): string | null;
export declare function resolveBranchTriggerLabel(input: {
    activeWorktreePath: string | null;
    effectiveEnvMode: EnvMode;
    resolvedActiveBranch: string | null;
    resolvedActiveBranchIsRemote: boolean | null;
    startFromOrigin: boolean;
}): string;
export declare function resolveBranchToolbarPrBranch(input: {
    activeThreadBranch: string | null;
    resolvedActiveBranch: string | null;
}): string | null;
export declare function resolveLocalCheckoutBranchMismatch(input: {
    effectiveEnvMode: EnvMode;
    activeWorktreePath: string | null;
    activeThreadBranch: string | null;
    currentGitBranch: string | null;
}): {
    threadBranch: string;
    currentBranch: string;
} | null;
export declare function resolveBranchSelectionTarget(input: {
    activeProjectCwd: string;
    activeWorktreePath: string | null;
    refName: Pick<VcsRef, "isDefault" | "worktreePath">;
}): {
    checkoutCwd: string;
    nextWorktreePath: string | null;
    reuseExistingWorktree: boolean;
};
export declare function shouldIncludeBranchPickerItem(input: {
    itemValue: string;
    normalizedQuery: string;
    createBranchItemValue: string | null;
    checkoutPullRequestItemValue: string | null;
}): boolean;
