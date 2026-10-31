import { type ThreadId, WorktreeSetupSnapshot } from "@t3tools/contracts";
export declare function findRecordedWorktreeSetup(activities: ReadonlyArray<{
    readonly kind: string;
    readonly payload: unknown;
}>, threadId: ThreadId): WorktreeSetupSnapshot | null;
export declare function resolveVisibleWorktreeSetup(input: {
    live: WorktreeSetupSnapshot | null;
    recorded: WorktreeSetupSnapshot | null;
    turnStarted: boolean;
    followUpSent: boolean;
}): WorktreeSetupSnapshot | null;
export declare function worktreeSetupAgentStarted(snapshot: WorktreeSetupSnapshot): boolean;
