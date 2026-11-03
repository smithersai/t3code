import type { CodexSettings } from "@t3tools/contracts";
import * as Path from "effect/Path";
import * as Schema from "effect/Schema";
import { type ProviderUsageReader, type TranscriptUsageFormat, type UsageRecord } from "@t3tools/provider-core/server/usage";
import * as CodexUsageHistory from "../../usage/CodexUsageHistory.ts";
/**
 * Codex `token_count` events carry no model or service tier, so both are carried forward: the model
 * from the most recent `turn_context`, the tier from the most recent `thread_settings_applied`.
 */
export declare const CodexScanState: Schema.Struct<{
    readonly model: Schema.mutableKey<Schema.String>;
    readonly speed: Schema.mutableKey<Schema.Literals<readonly ["standard", "fast", "ultrafast"]>>;
    readonly sessionId: Schema.mutableKey<Schema.String>;
    readonly lastUsageSignature: Schema.mutableKey<Schema.NullOr<Schema.String>>;
    readonly lastCumulativeUsage: Schema.mutableKey<Schema.NullOr<Schema.Struct<{
        readonly input_tokens: Schema.Int;
        readonly cached_input_tokens: Schema.Int;
        readonly cache_write_input_tokens: Schema.Int;
        readonly output_tokens: Schema.Int;
        readonly reasoning_output_tokens: Schema.Int;
        readonly total_tokens: Schema.Int;
    }>>>;
    readonly malformedRecords: Schema.mutableKey<Schema.Int>;
    readonly sawSessionMeta: Schema.mutableKey<Schema.Boolean>;
    readonly modelProvider: Schema.mutableKey<Schema.String>;
    readonly turnId: Schema.mutableKey<Schema.String>;
    readonly sawThreadSettings: Schema.mutableKey<Schema.Boolean>;
    readonly suppressingForkCopies: Schema.mutableKey<Schema.Boolean>;
    readonly forkCopyAnchorMs: Schema.mutableKey<Schema.Finite>;
}>;
export type CodexScanState = typeof CodexScanState.Type;
export declare function initialCodexScanState(): CodexScanState;
/**
 * Cumulative counters validate request deltas. Older events without cumulative counters use
 * normalized consecutive-request deduplication.
 */
export declare function parseCodexLine(line: string, state: CodexScanState): UsageRecord | null;
export declare const codexUsageFormat: TranscriptUsageFormat<CodexScanState>;
export declare const codexUsageReader: ProviderUsageReader<CodexSettings, Path.Path | CodexUsageHistory.CodexUsageHistory>;
