import type { ServerTraceDiagnosticsErrorKind, ServerTraceDiagnosticsResult } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as DateTime from "effect/DateTime";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
export interface TraceDiagnosticsOptions {
    readonly traceFilePath: string;
    readonly maxFiles: number;
    readonly slowSpanThresholdMs?: number;
    readonly readAt?: DateTime.Utc;
}
declare const TraceFileReadError_base: Schema.Class<TraceFileReadError, Schema.TaggedStruct<"TraceFileReadError", {
    readonly traceFilePath: Schema.String;
    readonly causeTag: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class TraceFileReadError extends TraceFileReadError_base {
    get message(): string;
}
declare const TraceDiagnostics_base: Context.ServiceClass<TraceDiagnostics, "t3/diagnostics/TraceDiagnostics", {
    readonly read: (options: TraceDiagnosticsOptions) => Effect.Effect<ServerTraceDiagnosticsResult>;
}>;
export declare class TraceDiagnostics extends TraceDiagnostics_base {
}
interface TraceDiagnosticsErrorSummary {
    readonly kind: ServerTraceDiagnosticsErrorKind;
    readonly message: string;
}
export declare function toRotatedTracePaths(traceFilePath: string, maxFiles: number): ReadonlyArray<string>;
export declare function makeTraceDiagnosticsAggregator(slowSpanThresholdMs?: number): {
    addLine: (line: string) => void;
    finish: (input: {
        readonly traceFilePath: string;
        readonly scannedFilePaths: ReadonlyArray<string>;
        readonly readAt: DateTime.Utc;
        readonly error?: TraceDiagnosticsErrorSummary;
        readonly partialFailure?: boolean;
    }) => ServerTraceDiagnosticsResult;
};
/** Succeeds with false if the file is absent. */
export declare function streamTraceFileLines(fileSystem: FileSystem.FileSystem, path: string, onLine: (line: string) => void): Effect.Effect<boolean, TraceFileReadError>;
/** @public */
export declare const make: Effect.Effect<{
    readonly read: (options: TraceDiagnosticsOptions) => Effect.Effect<ServerTraceDiagnosticsResult>;
}, never, FileSystem.FileSystem>;
export declare const layer: Layer.Layer<TraceDiagnostics, never, FileSystem.FileSystem>;
export declare const readTraceDiagnostics: (options: TraceDiagnosticsOptions) => Effect.Effect<ServerTraceDiagnosticsResult, never, TraceDiagnostics>;
export {};
