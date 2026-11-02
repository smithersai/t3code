import { type EnvironmentId, type UsageBucket, type UsageSummary, type UsageProviderKind, type UsageSummaryInput } from "@t3tools/contracts";
import { type MergedUsage } from "@t3tools/shared/usageMerge";
export interface EnvironmentUsageStatus {
    readonly environmentId: EnvironmentId;
    readonly label: string;
    readonly isPending: boolean;
    readonly canReadDiagnostics: boolean;
    readonly isConnected: boolean;
    readonly error: string | null;
    readonly summary: UsageSummary | null;
    readonly needsCursorKeychainAccess: boolean;
}
export interface UsageView {
    readonly merged: MergedUsage;
    readonly environments: readonly EnvironmentUsageStatus[];
    readonly selectedEnvironments: readonly EnvironmentUsageStatus[];
    readonly isPending: boolean;
    readonly shown: {
        readonly window: UsageSummaryInput;
        readonly merged: MergedUsage;
    } | null;
    readonly isPartial: boolean;
    readonly refresh: (input?: UsageSummaryInput) => Promise<void>;
}
export declare function mergeAnsweredUsage(environments: readonly EnvironmentUsageStatus[], keepBucket?: (bucket: UsageBucket) => boolean): MergedUsage;
export declare function useUsage(input: UsageSummaryInput, selectedEnvironmentIds?: ReadonlySet<EnvironmentId> | null, hiddenProviders?: ReadonlySet<UsageProviderKind>): UsageView;
