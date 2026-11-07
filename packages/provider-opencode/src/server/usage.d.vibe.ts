import { type ProviderUsageReader, type UsageRecord } from "@t3tools/provider-core/server/usage";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import type { OpenCodeSettings } from "../settings.vibe";
export interface OpenCodeUsageReadResult {
    readonly files: readonly {
        readonly path: string;
        readonly records: readonly UsageRecord[];
    }[];
    readonly missing: boolean;
    readonly error: boolean;
}
export declare const readOpenCodeUsage: (root: string, sinceMs: number) => Effect.Effect<OpenCodeUsageReadResult, never, FileSystem.FileSystem | Path.Path>;
export type OpenCodeUsageReaderEnv = FileSystem.FileSystem | Path.Path;
export declare const openCodeUsageReader: ProviderUsageReader<OpenCodeSettings, OpenCodeUsageReaderEnv>;
