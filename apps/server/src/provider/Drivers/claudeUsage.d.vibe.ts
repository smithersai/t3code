import type { ClaudeSettings } from "@t3tools/contracts";
import * as Path from "effect/Path";
import { type ProviderUsageReader, type TranscriptUsageFormat, type UsageRecord } from "@t3tools/provider-core/server/usage";
export declare const CLAUDE_SYNTHETIC_MODEL = "<synthetic>";
/**
 * T3 Code writes one record per assistant *content block*, and every one of those records repeats
 * the same complete `usage` object for the parent message. Summing them overcounts by roughly
 * 2.4x on a real workload, so the caller must drop repeats by `dedupeKey` and keep the first.
 */
export declare function parseClaudeLine(line: string): UsageRecord | null;
export declare const claudeUsageFormat: TranscriptUsageFormat<void>;
export declare const claudeUsageReader: ProviderUsageReader<ClaudeSettings, Path.Path>;
