import type { EnvironmentThreadShell, PendingSubagentRequest } from "./models.vibe";
interface SettlementRunLike {
    readonly turnId?: unknown;
    readonly assistantMessageId?: unknown;
    readonly status?: string;
    readonly state?: string;
    readonly requestedAt?: string | null;
    readonly startedAt?: string | null;
    readonly completedAt?: string | null;
}
interface SettlementRuntimeLike {
    readonly threadId?: unknown;
    readonly providerName?: unknown;
    readonly runtimeMode?: unknown;
    readonly activeTurnId?: unknown;
    readonly lastError?: unknown;
    readonly status: string;
    readonly updatedAt?: string;
}
interface QueuedThreadShell {
    readonly latestUserMessageAt?: string | null;
    readonly latestTurn?: SettlementRunLike | null;
    readonly latestRun?: SettlementRunLike | null;
    readonly session?: SettlementRuntimeLike | null;
    readonly runtime?: SettlementRuntimeLike | null;
}
/**
 * Failed starts and stale shells from older servers can leave user messages unadopted.
 * Bound the pending window so those threads can eventually settle.
 */
export declare const QUEUED_TURN_START_GRACE_MS: number;
export declare function hasQueuedTurnStart(shell: QueuedThreadShell, options: {
    readonly now: string;
}): boolean;
export interface ThreadSnoozeShell extends QueuedThreadShell {
    readonly source?: Pick<EnvironmentThreadShell["source"], "pendingRuntimeRequest">;
    readonly snoozedUntil?: string | null;
    readonly snoozedAt?: string | null;
    readonly hasPendingApprovals: boolean;
    readonly hasPendingUserInput: boolean;
    readonly pendingSubagentRequest?: PendingSubagentRequest | null;
    readonly pendingGuestMessageCount?: number;
}
/**
 * Only a request for the user or a fresh failure ends a snooze early. Completed runs never do:
 * a snoozed long-running thread keeps waking itself for background work and stays hidden
 * until its timer.
 */
export declare function threadRaisedHandWhileSnoozed(shell: ThreadSnoozeShell): boolean;
export declare function canSnooze(shell: Pick<ThreadSnoozeShell, "hasPendingApprovals" | "hasPendingUserInput" | "pendingSubagentRequest" | "pendingGuestMessageCount" | "latestUserMessageAt" | "latestTurn" | "latestRun" | "session" | "runtime" | "source">, options: {
    readonly now: string;
}): boolean;
export declare function effectiveSnoozed(shell: ThreadSnoozeShell, options: {
    readonly now: string;
}): boolean;
export declare function threadWokeAt(shell: ThreadSnoozeShell, options: {
    readonly now: string;
}): string | null;
export type SnoozePresetId = "hour" | "three-hours" | "evening" | "tomorrow" | "next-week";
export interface SnoozePreset {
    readonly id: SnoozePresetId;
    readonly label: string;
    readonly whenLabel: string;
    readonly snoozedUntil: string;
}
export declare function resolveSnoozePresets(now: Date): ReadonlyArray<SnoozePreset>;
export declare function snoozeWakeLabel(snoozedUntil: string, options: {
    readonly now: string;
}): string;
export type CustomSnoozeInput = {
    readonly mode: "date";
    readonly date: string;
    readonly time: string;
} | {
    readonly mode: "duration";
    readonly amount: string;
    readonly unit: "minutes" | "hours" | "days";
};
export declare function resolveCustomSnooze(input: CustomSnoozeInput, now: Date): string | null;
export declare function localSnoozeDate(date: Date): string;
export declare function localSnoozeTime(date: Date): string;
/**
 * Whether a woken thread woke after the user last saw it. A run that completed
 * after the last visit counts as seeing it, since the user watched it finish.
 */
export declare function isThreadWokeUnseen(input: {
    readonly wokeAt: string | null;
    readonly settled: boolean;
    readonly lastVisitedAt: string | null | undefined;
    readonly latestRunCompletedAt: string | null;
}): boolean;
export {};
