import type { UsageProviderKind } from "@t3tools/contracts";
import type { TranscriptUsageFormat, UsageRecord } from "@t3tools/provider-core/server/usage";
import { type TranscriptParsePosition } from "./usageTranscriptReader.ts";
/**
 * An older server sharing that directory cannot read a newer cache and would
 * replace it, dropping saved usage for deleted transcripts. Separate files keep
 * both.
 */
export declare const SCAN_CACHE_FILE_NAME = "usage-scan-cache-v9.json";
export declare const LEGACY_SCAN_CACHE_FILE_NAMES: readonly ["usage-scan-cache-v8.json", "usage-scan-cache-v7.json", "usage-scan-cache-v6.json", "usage-scan-cache-v5.json", "usage-scan-cache.json"];
export interface CachedFile {
    readonly size: number;
    readonly mtimeMs: number;
    readonly provider: UsageProviderKind;
    readonly records: readonly UsageRecord[];
    /** Unterminated tail records stay separate because incremental parsing rereads them. */
    readonly tailRecords: readonly UsageRecord[];
    /** Whole-file count, including diagnostics from the tentative tail. */
    readonly malformedRecords: number;
    readonly position: TranscriptParsePosition;
}
export type ScanCache = Map<string, CachedFile>;
type SerializedRecord = readonly [
    timestampMs: number,
    modelIndex: number,
    sessionIndex: number,
    uncachedInputTokens: number,
    cachedInputTokens: number,
    cacheCreationTokens: number,
    outputTokens: number,
    reasoningTokens: number,
    dedupeKey: string | null,
    reportedCostUsd: number | null,
    speed: number,
    rateModelIndex?: number | null,
    unresolvedServiceTierTurnId?: string
];
interface SerializedFile {
    readonly s: number;
    readonly m: number;
    readonly p: UsageProviderKind;
    readonly r: readonly SerializedRecord[];
    readonly t: readonly SerializedRecord[];
    readonly mr: number;
    readonly o: number;
    readonly gl: number;
    readonly gh: number;
    readonly cs: unknown;
}
interface SerializedCache {
    readonly version: number;
    readonly models: readonly string[];
    readonly sessions: readonly string[];
    readonly files: Readonly<Record<string, SerializedFile>>;
}
export declare function encodeScanCache(cache: ScanCache): SerializedCache;
/** Memoizes immutable entries by identity; growing intern tables preserve indexes, retaining unused strings until restart. */
export declare function makeScanCacheWriter(): (cache: ScanCache, extra: Readonly<Record<string, unknown>>) => string;
export declare function decodeScanCache(document: unknown, formats: ReadonlyMap<UsageProviderKind, TranscriptUsageFormat<unknown>>): ScanCache;
export declare function pruneScanCache(cache: ScanCache, retentionCutoffMs: number): number;
/** Mutates seen; share it across incremental line/tail batches to deduplicate the whole file. */
export declare function dedupeWithinFile(records: readonly UsageRecord[], seen?: Set<string>): readonly UsageRecord[];
export {};
