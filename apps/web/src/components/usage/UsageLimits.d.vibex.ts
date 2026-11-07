import { type EnvironmentId, ProviderConsumeResetCreditInput, ServerProvider, ServerProviderResetCredits, ServerProviderUsageWindow, UsageProviderKind } from "@t3tools/contracts";
import { type LimitPace } from "@t3tools/shared/usageLimits";
import { type ReactNode } from "react";
/** @throws {never} */
export declare function barColor(driver: ServerProvider["driver"]): string;
/** @throws {never} */
export declare function PaceIcon({ pace }: {
    readonly pace: LimitPace;
}): import("react").JSX.Element;
/**
 * Pace mark styles for the bar given the returned ref. Below 6px there is no room for the gap
 * and tick, so the bar draws neither, as the mobile bars do.
 * @throws {never}
 */
export declare function usePaceMark(timeLeft: number | null): readonly [import("react").Dispatch<import("react").SetStateAction<HTMLElement | null>>, {
    tick: {
        left: string;
    };
    gap: {
        clipPath: string;
    };
    gappedTrack: {
        backgroundColor: string;
        backgroundImage: string;
    };
} | null];
/** @throws {never} */
export declare function LimitWindows({ driver, windows, now, compact, }: {
    readonly driver: ServerProvider["driver"];
    readonly windows: ReadonlyArray<ServerProviderUsageWindow>;
    readonly now: number;
    readonly compact?: boolean;
}): import("react").JSX.Element;
/** @throws {never} */
export declare function useResetCredit(environmentId: EnvironmentId, input: ProviderConsumeResetCreditInput): {
    canManageProviders: boolean;
    confirming: boolean;
    setConfirming: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    busy: boolean;
    status: string | null;
    redeem: () => Promise<void>;
};
/** Require confirmation because redemption spends credits. Mount outside popovers, which stack above
 * dialogs and unmount on close.
 * @throws {never}
 */
export declare function ResetCreditDialog({ open, onOpenChange, onConfirm, disabled, }: {
    readonly open: boolean;
    /** @throws {never} */
    readonly onOpenChange: (open: boolean) => void;
    /** @throws {never} */
    readonly onConfirm: () => void;
    readonly disabled?: boolean;
}): import("react").JSX.Element;
/** @throws {never} */
export declare function resetCreditsSummary(credits: ServerProviderResetCredits, now: number, compact?: boolean): string;
/** @throws {never} */
export declare function ResetCredits({ environmentId, input, credits, now, }: {
    readonly environmentId: EnvironmentId;
    readonly input: ProviderConsumeResetCreditInput;
    readonly credits: ServerProviderResetCredits;
    readonly now: number;
}): import("react").JSX.Element | null;
/**
 * Advance now only on explicit refresh to avoid page repaints from ticking.
 * @throws {never}
 */
export declare function UsageLimitsSection({ selectedEnvironmentIds, hiddenProviders, now, cursorPrompt, }: {
    readonly selectedEnvironmentIds: ReadonlySet<EnvironmentId> | null;
    readonly hiddenProviders: ReadonlySet<UsageProviderKind>;
    readonly now: number;
    readonly cursorPrompt?: ReactNode;
}): import("react").JSX.Element;
