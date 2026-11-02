import type { ThreadStructure, ThreadStructureTurnItem } from "@t3tools/client-runtime/state/shell";
import type { OrchestrationV2ProviderTurn, OrchestrationV2ProviderTurnTokenUsage, OrchestrationV2ProviderThread, ThreadTokenUsageSnapshot } from "@t3tools/contracts";
type NullableContextWindowUsage = {
    readonly [Key in keyof ThreadTokenUsageSnapshot]: undefined extends ThreadTokenUsageSnapshot[Key] ? Exclude<ThreadTokenUsageSnapshot[Key], undefined> | null : ThreadTokenUsageSnapshot[Key];
};
export type ContextWindowSnapshot = NullableContextWindowUsage & {
    readonly remainingTokens: number | null;
    readonly usedPercentage: number | null;
    readonly remainingPercentage: number | null;
    readonly updatedAt: string;
};
/** Newest report by timestamp; snapshots order turns by provider thread. */
export declare function latestProviderTurnTokenUsage(turns: ReadonlyArray<Pick<OrchestrationV2ProviderTurn, "tokenUsage">>, projection?: Pick<ThreadStructure, "thread" | "contextTransfers"> | null, providerThread?: Pick<OrchestrationV2ProviderThread, "contextUsage"> | null): OrchestrationV2ProviderTurnTokenUsage | null;
export declare function deriveLatestContextWindowSnapshot(entries: ReadonlyArray<{
    readonly item: ThreadStructureTurnItem;
}>, liveUsage?: OrchestrationV2ProviderTurnTokenUsage | null, providerThread?: Pick<OrchestrationV2ProviderThread, "contextUsage" | "updatedAt"> | null): ContextWindowSnapshot | null;
export declare function formatContextWindowTokens(value: number | null): string;
export {};
