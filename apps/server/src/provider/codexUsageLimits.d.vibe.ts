import type { ProviderUsageLimitsUpdate, ServerProviderUsageLimits } from "@t3tools/contracts";
import type * as CodexErrors from "effect-codex-app-server/errors";
interface CodexRateLimitWindow {
    readonly usedPercent: number;
    readonly resetsAt?: number | null;
    readonly windowDurationMins?: number | null;
}
export interface CodexRateLimitSnapshot {
    readonly limitId?: string | null;
    readonly planType?: string | null;
    readonly rateLimitReachedType?: string | null;
    readonly primary?: CodexRateLimitWindow | null;
    readonly secondary?: CodexRateLimitWindow | null;
    readonly individualLimit?: {
        readonly remainingPercent: number;
        readonly resetsAt: number;
    } | null;
}
export interface CodexResetCreditsSummary {
    readonly availableCount: number;
    readonly credits?: ReadonlyArray<{
        readonly status: string;
        readonly expiresAt?: number | null;
    }> | null;
}
/** @throws {never} */
export declare function codexRateLimitsToLimits(input: {
    readonly snapshot: CodexRateLimitSnapshot;
    readonly rateLimitsByLimitId?: Readonly<Record<string, CodexRateLimitSnapshot>> | null | undefined;
    readonly resetCredits?: CodexResetCreditsSummary | null | undefined;
    readonly checkedAt: string;
}): ServerProviderUsageLimits;
/** @throws {never} */
export declare function codexRateLimitsToUpdate(snapshot: CodexRateLimitSnapshot): ProviderUsageLimitsUpdate | undefined;
/** @throws {never} */
export declare function codexRateLimitsFailureMessage(error: CodexErrors.CodexAppServerError): string;
/**
 * Rate-limit notifications are partial: omitted fields preserve earlier session values.
 * @throws {never}
 */
export declare function mergeCodexRateLimits(previous: CodexRateLimitSnapshot | undefined, update: CodexRateLimitSnapshot): CodexRateLimitSnapshot | undefined;
/** @throws {never} */
export declare function codexUsageLimitMessage(snapshot: CodexRateLimitSnapshot | undefined, atIso: string): string;
/**
 * All exhausted windows must reset before a continuation can run.
 * @throws {never}
 */
export declare function codexUsageLimitResetAt(snapshot: CodexRateLimitSnapshot | undefined): string | null;
export {};
