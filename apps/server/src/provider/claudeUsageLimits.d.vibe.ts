import type { SDKControlGetUsageResponse, SDKRateLimitInfo } from "@anthropic-ai/claude-agent-sdk";
import type { ProviderUsageLimitsUpdate, ServerProviderUsageLimits } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
export interface ClaudeScopedLimitNames {
    readonly overageIncluded: string | undefined;
}
export declare const makeClaudeScopedLimitNames: Effect.Effect<Ref.Ref<ClaudeScopedLimitNames>, never, never>;
/** Stream utilization is 0-1. Drop unnamed overage buckets until probed to avoid unreconcilable rows. */
export declare function claudeRateLimitEventToUpdate(info: SDKRateLimitInfo, names: ClaudeScopedLimitNames): ProviderUsageLimitsUpdate | undefined;
/** get_usage percentages are already 0-100. */
export declare function claudeUsageResponseToLimits(input: {
    readonly response: Pick<SDKControlGetUsageResponse, "rate_limits_available" | "rate_limits">;
    readonly checkedAt: string;
}): {
    readonly limits: ServerProviderUsageLimits;
    readonly names: ClaudeScopedLimitNames;
};
export declare const recordClaudeUsageResponse: (namesRef: Ref.Ref<ClaudeScopedLimitNames>, input: Parameters<typeof claudeUsageResponseToLimits>[0]) => Effect.Effect<ServerProviderUsageLimits>;
