import { type MuseSubscriptionUsage } from "./protocol.vibe";
/** Credential proxies may omit error.quota from 429 refusals; inspect text too. */
export declare function isMuseUsageLimitFailure(message: string | undefined): boolean;
/** Resume only after all exhausted windows reset; use the latest future reset from quota, refusal, or usage. */
export declare function museUsageLimitResetAt(usage: MuseSubscriptionUsage | undefined, nowMs: number, refusal?: {
    readonly quota?: {
        readonly resetsAtMs: number;
    } | undefined;
    readonly message?: string | undefined;
}): string | null;
