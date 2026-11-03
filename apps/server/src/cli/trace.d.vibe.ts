import * as Config from "effect/Config";
import * as FileSystem from "effect/FileSystem";
import { Command } from "effect/cli";
export declare function makeTraceSpanSummary(sinceMs?: number): {
    addLine: (line: string) => void;
    finish: () => {
        spanCount: number;
        skippedLineCount: number;
        firstEndMs: number;
        lastEndMs: number;
        minutes: number;
        spans: {
            name: string;
            count: number;
            perMinute: number | undefined;
            p50Ms: number;
            p90Ms: number;
            maxMs: number;
            interrupted: number;
            failures: number;
        }[];
    };
};
export declare const traceCommand: Command.Command<"trace", {}, {}, Config.ConfigError | import("../diagnostics/TraceDiagnostics.ts").TraceFileReadError, FileSystem.FileSystem | import("effect/Path").Path>;
