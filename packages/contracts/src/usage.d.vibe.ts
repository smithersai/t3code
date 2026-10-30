import * as Schema from "effect/Schema";
import { ForwardCompatibleArray } from "./baseSchemas.js";
/** Bump for incompatible UsageSummary changes; skipped unknown array variants need no bump. */
export declare const USAGE_CONTRACT_VERSION: 6;
export declare const USAGE_MERGE_COMPATIBLE_SINCE: 4;
export declare const UsageProviderKind: Schema.Literals<readonly ["claude", "codex", "grok", "cursor", "opencode", "antigravity", "pi", "muse"]>;
export type UsageProviderKind = typeof UsageProviderKind.Type;
export declare const UsageDay: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "UsageDay">;
export type UsageDay = typeof UsageDay.Type;
export declare const UsageResolution: Schema.Literals<readonly ["day", "hour"]>;
export type UsageResolution = typeof UsageResolution.Type;
export declare const UsageCostSource: Schema.Literals<readonly ["providerReported", "modelPriced", "unpriced"]>;
export type UsageCostSource = typeof UsageCostSource.Type;
/** Sum uncached input, cache reads, and cache writes for input totals; reasoning is already included in output. */
export declare const UsageTokenTotals: Schema.Struct<{
    readonly uncachedInputTokens: Schema.Int;
    readonly cachedInputTokens: Schema.Int;
    readonly cacheCreationTokens: Schema.Int;
    readonly outputTokens: Schema.Int;
    readonly reasoningTokens: Schema.Int;
}>;
export type UsageTokenTotals = typeof UsageTokenTotals.Type;
export declare const UsageCategoryCost: Schema.Struct<{
    readonly input: Schema.Number;
    readonly cacheRead: Schema.Number;
    readonly cacheWrite: Schema.Number;
    readonly output: Schema.Number;
}>;
export type UsageCategoryCost = typeof UsageCategoryCost.Type;
export declare const UsageBucket: Schema.Struct<{
    readonly day: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "UsageDay">;
    readonly hourStart: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly provider: Schema.Literals<readonly ["claude", "codex", "grok", "cursor", "opencode", "antigravity", "pi", "muse"]>;
    readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly sourcePath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly totals: Schema.Struct<{
        readonly uncachedInputTokens: Schema.Int;
        readonly cachedInputTokens: Schema.Int;
        readonly cacheCreationTokens: Schema.Int;
        readonly outputTokens: Schema.Int;
        readonly reasoningTokens: Schema.Int;
    }>;
    readonly costUsd: Schema.Number;
    readonly cacheSavingsUsd: Schema.Number;
    readonly categoryCostUsd: Schema.optional<Schema.Struct<{
        readonly input: Schema.Number;
        readonly cacheRead: Schema.Number;
        readonly cacheWrite: Schema.Number;
        readonly output: Schema.Number;
    }>>;
    readonly fastCostUsd: Schema.optional<Schema.Number>;
    readonly ultrafastCostUsd: Schema.optional<Schema.Number>;
    readonly speedPremiumUsd: Schema.optional<Schema.Number>;
    readonly costSource: Schema.Literals<readonly ["providerReported", "modelPriced", "unpriced"]>;
    readonly records: Schema.Int;
    readonly unpricedRecords: Schema.Int;
    readonly sessions: Schema.Int;
}>;
export type UsageBucket = typeof UsageBucket.Type;
export declare const UsageSourceFingerprint: Schema.Struct<{
    readonly hostId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly provider: Schema.Literals<readonly ["claude", "codex", "grok", "cursor", "opencode", "antigravity", "pi", "muse"]>;
    readonly resolvedHomePath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    /** Transcript directory device:inode distinguishes machines sharing a hostname and home path. */
    readonly volumeId: Schema.String;
}>;
export type UsageSourceFingerprint = typeof UsageSourceFingerprint.Type;
export declare const UsageSourceStatus: Schema.Literals<readonly ["ok", "missing", "partial", "failed"]>;
export type UsageSourceStatus = typeof UsageSourceStatus.Type;
export declare const UsageSource: Schema.Struct<{
    readonly fingerprint: Schema.Struct<{
        readonly hostId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly provider: Schema.Literals<readonly ["claude", "codex", "grok", "cursor", "opencode", "antigravity", "pi", "muse"]>;
        readonly resolvedHomePath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        /** Transcript directory device:inode distinguishes machines sharing a hostname and home path. */
        readonly volumeId: Schema.String;
    }>;
    readonly status: Schema.Literals<readonly ["ok", "missing", "partial", "failed"]>;
    readonly scannedFiles: Schema.Int;
    readonly skippedFiles: Schema.Int;
    readonly malformedRecords: Schema.Int;
    /** Total this count; bucket counts double-count sessions spanning days or models. */
    readonly distinctSessions: Schema.Int;
    readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly action: Schema.optionalKey<Schema.Literal<"enableCursorKeychain">>;
    /** Cached response during refresh; repeat with awaitRefresh for fresh data. */
    readonly refreshing: Schema.optionalKey<Schema.Literal<true>>;
}>;
export type UsageSource = typeof UsageSource.Type;
export declare const UsagePricingStatus: Schema.Literals<readonly ["fresh", "cached", "unavailable"]>;
export type UsagePricingStatus = typeof UsagePricingStatus.Type;
export declare const UsagePricing: Schema.Struct<{
    readonly status: Schema.Literals<readonly ["fresh", "cached", "unavailable"]>;
    readonly source: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly fetchedAt: Schema.NullOr<Schema.String>;
    readonly knownModels: Schema.Int;
}>;
export type UsagePricing = typeof UsagePricing.Type;
export declare const UsageSummaryInput: Schema.Struct<{
    readonly sinceDay: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "UsageDay">;
    readonly untilDay: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "UsageDay">;
    /** IANA bucketing zone; offsets fail across DST boundaries. */
    readonly timeZone: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly resolution: Schema.optional<Schema.Literals<readonly ["day", "hour"]>>;
    readonly sinceTime: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly untilTime: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly awaitRefresh: Schema.optional<Schema.Boolean>;
}>;
export type UsageSummaryInput = typeof UsageSummaryInput.Type;
export declare const UsageSummary: Schema.Struct<{
    readonly contractVersion: Schema.Number;
    readonly readAt: Schema.String;
    readonly timeZone: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly sinceDay: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "UsageDay">;
    readonly untilDay: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "UsageDay">;
    readonly buckets: ForwardCompatibleArray<Schema.Struct<{
        readonly day: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "UsageDay">;
        readonly hourStart: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly provider: Schema.Literals<readonly ["claude", "codex", "grok", "cursor", "opencode", "antigravity", "pi", "muse"]>;
        readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly sourcePath: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly totals: Schema.Struct<{
            readonly uncachedInputTokens: Schema.Int;
            readonly cachedInputTokens: Schema.Int;
            readonly cacheCreationTokens: Schema.Int;
            readonly outputTokens: Schema.Int;
            readonly reasoningTokens: Schema.Int;
        }>;
        readonly costUsd: Schema.Number;
        readonly cacheSavingsUsd: Schema.Number;
        readonly categoryCostUsd: Schema.optional<Schema.Struct<{
            readonly input: Schema.Number;
            readonly cacheRead: Schema.Number;
            readonly cacheWrite: Schema.Number;
            readonly output: Schema.Number;
        }>>;
        readonly fastCostUsd: Schema.optional<Schema.Number>;
        readonly ultrafastCostUsd: Schema.optional<Schema.Number>;
        readonly speedPremiumUsd: Schema.optional<Schema.Number>;
        readonly costSource: Schema.Literals<readonly ["providerReported", "modelPriced", "unpriced"]>;
        readonly records: Schema.Int;
        readonly unpricedRecords: Schema.Int;
        readonly sessions: Schema.Int;
    }>>;
    readonly sources: ForwardCompatibleArray<Schema.Struct<{
        readonly fingerprint: Schema.Struct<{
            readonly hostId: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly provider: Schema.Literals<readonly ["claude", "codex", "grok", "cursor", "opencode", "antigravity", "pi", "muse"]>;
            readonly resolvedHomePath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            /** Transcript directory device:inode distinguishes machines sharing a hostname and home path. */
            readonly volumeId: Schema.String;
        }>;
        readonly status: Schema.Literals<readonly ["ok", "missing", "partial", "failed"]>;
        readonly scannedFiles: Schema.Int;
        readonly skippedFiles: Schema.Int;
        readonly malformedRecords: Schema.Int;
        /** Total this count; bucket counts double-count sessions spanning days or models. */
        readonly distinctSessions: Schema.Int;
        readonly message: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly action: Schema.optionalKey<Schema.Literal<"enableCursorKeychain">>;
        /** Cached response during refresh; repeat with awaitRefresh for fresh data. */
        readonly refreshing: Schema.optionalKey<Schema.Literal<true>>;
    }>>;
    readonly pricing: Schema.Struct<{
        readonly status: Schema.Literals<readonly ["fresh", "cached", "unavailable"]>;
        readonly source: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly fetchedAt: Schema.NullOr<Schema.String>;
        readonly knownModels: Schema.Int;
    }>;
    readonly scanDurationMs: Schema.Int;
}>;
export type UsageSummary = typeof UsageSummary.Type;
declare const UsageReadError_base: Schema.Class<UsageReadError, Schema.TaggedStruct<"UsageReadError", {
    readonly reason: Schema.Literals<readonly ["scanFailed", "invalidWindow"]>;
    readonly detail: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class UsageReadError extends UsageReadError_base {
    get message(): string;
}
export {};
