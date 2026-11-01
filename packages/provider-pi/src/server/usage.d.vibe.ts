import * as Path from "effect/Path";
import * as Schema from "effect/Schema";
import { type ProviderUsageReader, type TranscriptUsageFormat } from "@t3tools/provider-core/server/usage";
import type { PiSettings } from "../settings.vibe";
declare const PiScanState: Schema.Struct<{
    readonly sessionId: Schema.mutableKey<Schema.String>;
}>;
type PiScanState = typeof PiScanState.Type;
export declare const piUsageFormat: TranscriptUsageFormat<typeof PiScanState.Type>;
export declare const piUsageReader: ProviderUsageReader<PiSettings, Path.Path>;
export {};
