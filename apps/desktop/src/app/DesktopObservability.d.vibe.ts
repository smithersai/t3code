import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Path from "effect/Path";
import * as PlatformError from "effect/PlatformError";
import * as Schema from "effect/Schema";
import * as DesktopEnvironment from "./DesktopEnvironment.vibe";
export interface RotatingLogFileWriter {
    readonly writeBytes: (chunk: Uint8Array) => Effect.Effect<void>;
    readonly writeText: (chunk: string) => Effect.Effect<void>;
}
export interface DesktopBackendOutputLogShape {
    readonly beginSession: (input: {
        readonly details: string;
    }) => Effect.Effect<void>;
    readonly writeOutputChunk: (streamName: "stdout" | "stderr", chunk: Uint8Array) => Effect.Effect<void>;
    readonly persistFailureSnapshot: (input: {
        readonly details: string;
    }) => Effect.Effect<void>;
    readonly persistFailure: (input: {
        readonly details: string;
    }) => Effect.Effect<void>;
    readonly discardSession: Effect.Effect<void>;
}
declare const DesktopBackendOutputLogFactory_base: Context.ServiceClass<DesktopBackendOutputLogFactory, "@t3tools/desktop/app/DesktopObservability/DesktopBackendOutputLogFactory", {
    readonly forInstance: (id: string) => Effect.Effect<DesktopBackendOutputLogShape>;
}>;
export declare class DesktopBackendOutputLogFactory extends DesktopBackendOutputLogFactory_base {
}
export type DesktopLogAnnotations = Record<string, unknown>;
export interface DesktopComponentLogger {
    readonly annotate: <A, E, R>(effect: Effect.Effect<A, E, R>, annotations?: DesktopLogAnnotations) => Effect.Effect<A, E, R>;
    readonly logDebug: (message: string, annotations?: DesktopLogAnnotations) => Effect.Effect<void>;
    readonly logInfo: (message: string, annotations?: DesktopLogAnnotations) => Effect.Effect<void>;
    readonly logWarning: (message: string, annotations?: DesktopLogAnnotations) => Effect.Effect<void>;
    readonly logError: (message: string, annotations?: DesktopLogAnnotations) => Effect.Effect<void>;
}
/** @throws {never} */
export declare function makeComponentLogger(component: string): DesktopComponentLogger;
declare const DesktopLogFileWriterConfigurationError_base: Schema.Class<DesktopLogFileWriterConfigurationError, Schema.TaggedStruct<"DesktopLogFileWriterConfigurationError", {
    readonly option: Schema.Literals<readonly ["maxBytes", "maxFiles"]>;
    readonly value: Schema.Number;
}>, import("effect/Cause").YieldableError>;
declare class DesktopLogFileWriterConfigurationError extends DesktopLogFileWriterConfigurationError_base {
    get message(): string;
}
type DesktopLogFileWriterError = DesktopLogFileWriterConfigurationError | PlatformError.PlatformError;
export declare const makeRotatingLogFileWriter: (input: {
    readonly filePath: string;
    readonly maxBytes?: number;
    readonly maxFiles?: number;
}) => Effect.Effect<RotatingLogFileWriter, DesktopLogFileWriterError, FileSystem.FileSystem | Path.Path>;
export declare const layer: Layer.Layer<DesktopBackendOutputLogFactory, never, DesktopEnvironment.DesktopEnvironment | FileSystem.FileSystem | import("effect/http/HttpClient").HttpClient | Path.Path>;
export {};
