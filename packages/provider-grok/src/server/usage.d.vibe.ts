import * as Path from "effect/Path";
import { type ProviderUsageReader, type TranscriptUsageFormat, type UsageRecord } from "@t3tools/provider-core/server/usage";
import type { GrokSettings } from "../settings.vibe";
export declare const GROK_COST_USD_TICKS_PER_DOLLAR = 10000000000;
export declare function parseGrokLine(line: string): readonly UsageRecord[];
export declare const grokUsageFormat: TranscriptUsageFormat<void>;
export declare const grokUsageReader: ProviderUsageReader<GrokSettings, Path.Path>;
