import type { EnvironmentId, UnifiedSettings } from "@t3tools/contracts";
/** @throws {never} */
export declare function UsageProviderSettings({ environmentId, environmentLabel, sources, cursorKeychainUsageEnabled, readOnly, }: {
    readonly environmentId: EnvironmentId;
    readonly environmentLabel: string;
    readonly sources: UnifiedSettings["usageLimitSources"];
    readonly cursorKeychainUsageEnabled: boolean;
    readonly readOnly: boolean;
}): import("react").JSX.Element;
