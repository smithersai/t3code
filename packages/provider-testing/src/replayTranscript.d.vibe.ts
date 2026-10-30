import { ProviderReplayTranscript } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import * as Schema from "effect/Schema";
declare const ProviderReplayNdjsonLineParseError_base: Schema.Class<ProviderReplayNdjsonLineParseError, Schema.TaggedStruct<"ProviderReplayNdjsonLineParseError", {
    readonly lineNumber: Schema.Number;
    readonly line: Schema.String;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ProviderReplayNdjsonLineParseError extends ProviderReplayNdjsonLineParseError_base {
    get message(): string;
}
declare const ProviderReplayNdjsonMissingHeaderError_base: Schema.Class<ProviderReplayNdjsonMissingHeaderError, Schema.TaggedStruct<"ProviderReplayNdjsonMissingHeaderError", {}>, import("effect/Cause").YieldableError>;
export declare class ProviderReplayNdjsonMissingHeaderError extends ProviderReplayNdjsonMissingHeaderError_base {
    get message(): string;
}
declare const ProviderReplayNdjsonEmptyError_base: Schema.Class<ProviderReplayNdjsonEmptyError, Schema.TaggedStruct<"ProviderReplayNdjsonEmptyError", {}>, import("effect/Cause").YieldableError>;
export declare class ProviderReplayNdjsonEmptyError extends ProviderReplayNdjsonEmptyError_base {
    get message(): string;
}
export declare const ProviderReplayNdjsonParseError: Schema.Union<readonly [typeof ProviderReplayNdjsonLineParseError, typeof ProviderReplayNdjsonMissingHeaderError, typeof ProviderReplayNdjsonEmptyError]>;
export type ProviderReplayNdjsonParseError = typeof ProviderReplayNdjsonParseError.Type;
export type ProviderReplayTranscriptMetadata = Omit<ProviderReplayTranscript, "entries">;
export declare function materializeReplayTranscriptWorkspace(transcript: ProviderReplayTranscript, workspace: string): ProviderReplayTranscript;
export declare function decodeProviderReplayNdjson(input: string, fallbackMetadata?: ProviderReplayTranscriptMetadata): Effect.Effect<ProviderReplayTranscript, ProviderReplayNdjsonParseError>;
/** Use Path to resolve Windows drive/UNC fixture URLs into native paths. */
export declare const readProviderReplayTranscript: (file: URL) => Effect.Effect<{
    readonly provider: string;
    readonly protocol: string;
    readonly version: string;
    readonly scenario: string;
    readonly metadata?: {
        readonly [x: string]: unknown;
    } | undefined;
    readonly entries: readonly ({
        readonly type: "expect_outbound";
        readonly label?: string | undefined;
        readonly frame: unknown;
    } | {
        readonly type: "emit_inbound";
        readonly label?: string | undefined;
        readonly frame: unknown;
        readonly afterMs?: number | undefined;
    } | {
        readonly type: "runtime_exit";
        readonly status: "cancelled" | "error" | "success";
        readonly error?: unknown;
    })[];
}, import("effect/PlatformError").BadArgument | import("effect/PlatformError").PlatformError | ProviderReplayNdjsonEmptyError | ProviderReplayNdjsonLineParseError | ProviderReplayNdjsonMissingHeaderError, FileSystem.FileSystem | Path.Path>;
export {};
