import type { OrchestrationV2ProviderFailure, OrchestrationV2Run, OrchestrationV2TurnItem } from "@t3tools/contracts";
type ErrorTurnItem = Extract<OrchestrationV2TurnItem, {
    type: "error";
}>;
/** Only error items are read, so callers may pass items stripped of other fields. */
type FailureScanTurnItem = ErrorTurnItem | {
    readonly type: Exclude<OrchestrationV2TurnItem["type"], "error">;
};
export declare function latestRootProviderFailure(run: OrchestrationV2Run | null, turnItems: ReadonlyArray<FailureScanTurnItem>): OrchestrationV2ProviderFailure | null;
export declare function threadErrorSummary(failure: OrchestrationV2ProviderFailure | null, sessionError: string | null): {
    usageLimitResetAt: string | null;
    lastError: string | null;
    lastErrorClass: "permission_error" | "provider_error" | "transport_error" | "unknown" | "usage_limit" | "validation_error" | null;
    lastErrorCode: string | null;
};
export declare function latestExecutedRun(runs: ReadonlyArray<OrchestrationV2Run>): OrchestrationV2Run | null;
/** Held queues can execute out of ordinal order; unfinished runs count as latest. */
export declare function runRanAfter(run: Pick<OrchestrationV2Run, "ordinal" | "completedAt">, other: Pick<OrchestrationV2Run, "ordinal" | "completedAt">): boolean;
export declare function usageLimitBlockedRun(runs: ReadonlyArray<OrchestrationV2Run>, turnItems: ReadonlyArray<FailureScanTurnItem>, sessionError: string | null): OrchestrationV2Run | null;
/** Retains a limited run's outcome when higher-ordinal runs never started. */
export declare function usageLimitRunPresentedAsLatest(runs: ReadonlyArray<OrchestrationV2Run>, turnItems: ReadonlyArray<FailureScanTurnItem>, sessionError: string | null): OrchestrationV2Run | null;
export declare function latestUnheldRun(runs: ReadonlyArray<OrchestrationV2Run>): OrchestrationV2Run | null;
export {};
