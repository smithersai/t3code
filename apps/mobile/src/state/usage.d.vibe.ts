import { type EnvironmentId, type UsageSummary, type UsageSummaryInput } from "@t3tools/contracts";
import { type MergedUsage } from "@t3tools/shared/usageMerge";
export interface EnvironmentUsageStatus {
    readonly environmentId: EnvironmentId;
    readonly label: string;
    readonly isPending: boolean;
    readonly isConnected: boolean;
    readonly canReadDiagnostics: boolean;
    readonly error: string | null;
    readonly summary: UsageSummary | null;
    readonly needsCursorKeychainAccess: boolean;
}
export interface UsageView {
    readonly merged: MergedUsage;
    readonly environments: readonly EnvironmentUsageStatus[];
    readonly selectedEnvironments: readonly EnvironmentUsageStatus[];
    readonly isPending: boolean;
    readonly isPartial: boolean;
    /** @throws {never} */
    readonly refresh: (input?: UsageSummaryInput) => Promise<void>;
}
/** @throws {never} */
export declare function useUsage(input: UsageSummaryInput, selectedEnvironmentIds?: ReadonlySet<EnvironmentId> | null): UsageView;
