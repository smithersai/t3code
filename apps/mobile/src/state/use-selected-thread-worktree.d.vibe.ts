import type { ScopedThreadRef } from "@t3tools/contracts";
export declare function useSelectedThreadWorktree(): {
    selectedThreadWorktreePath: string | null;
    selectedThreadCwd: string | null;
};
/**
 * Resolves a thread's cwd the way the selected thread's does, for a thread that is not the
 * current route's: the shell, or the loaded detail when the shell is missing, picks the project.
 */
export declare function useThreadCwd(ref: ScopedThreadRef | null): string | null;
