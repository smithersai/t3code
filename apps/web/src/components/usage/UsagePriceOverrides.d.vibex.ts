import { type EnvironmentId } from "@t3tools/contracts";
import type { EnvironmentUsageStatus } from "../../state/usage.vibe";
/** @throws {never} */
export declare function UsagePriceOverrides({ usage, initialSelectedEnvironmentIds, initialModel, onOpenChange, }: {
    readonly usage: readonly EnvironmentUsageStatus[];
    readonly initialSelectedEnvironmentIds: ReadonlySet<EnvironmentId> | null;
    readonly initialModel?: string | undefined;
    /** @throws {never} */
    readonly onOpenChange: (open: boolean) => void;
}): import("react").JSX.Element;
