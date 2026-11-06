import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Ref from "effect/Ref";
import * as Schema from "effect/Schema";
import * as CodexClient from "./client.ts";
export declare const CodexAppServerReplayEntry: Schema.Union<readonly [Schema.Struct<{
    readonly type: Schema.Literal<"expect_outbound">;
    readonly label: Schema.optional<Schema.String>;
    readonly frame: Schema.Unknown;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"emit_inbound">;
    readonly label: Schema.optional<Schema.String>;
    readonly frame: Schema.Unknown;
    readonly afterMs: Schema.optional<Schema.Number>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"runtime_exit">;
    readonly status: Schema.Literals<readonly ["success", "error", "cancelled"]>;
    readonly error: Schema.optional<Schema.Unknown>;
}>]>;
export type CodexAppServerReplayEntry = typeof CodexAppServerReplayEntry.Type;
export declare const CodexAppServerReplayTranscript: Schema.Struct<{
    readonly provider: Schema.Literal<"codex">;
    readonly protocol: Schema.Literal<"codex.app-server">;
    readonly version: Schema.String;
    readonly scenario: Schema.String;
    readonly metadata: Schema.optional<Schema.$Record<Schema.String, Schema.Unknown>>;
    readonly entries: Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"expect_outbound">;
        readonly label: Schema.optional<Schema.String>;
        readonly frame: Schema.Unknown;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"emit_inbound">;
        readonly label: Schema.optional<Schema.String>;
        readonly frame: Schema.Unknown;
        readonly afterMs: Schema.optional<Schema.Number>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"runtime_exit">;
        readonly status: Schema.Literals<readonly ["success", "error", "cancelled"]>;
        readonly error: Schema.optional<Schema.Unknown>;
    }>]>>;
}>;
export type CodexAppServerReplayTranscript = typeof CodexAppServerReplayTranscript.Type;
declare const CodexAppServerReplayJsonParseError_base: Schema.Class<CodexAppServerReplayJsonParseError, Schema.TaggedStruct<"CodexAppServerReplayJsonParseError", {
    readonly scenario: Schema.String;
    readonly line: Schema.String;
    readonly cause: Schema.Defect;
}>, Cause.YieldableError>;
export declare class CodexAppServerReplayJsonParseError extends CodexAppServerReplayJsonParseError_base {
    get message(): string;
}
declare const CodexAppServerReplayExhaustedError_base: Schema.Class<CodexAppServerReplayExhaustedError, Schema.TaggedStruct<"CodexAppServerReplayExhaustedError", {
    readonly scenario: Schema.String;
    readonly cursor: Schema.Number;
    readonly actual: Schema.Unknown;
}>, Cause.YieldableError>;
export declare class CodexAppServerReplayExhaustedError extends CodexAppServerReplayExhaustedError_base {
    get message(): string;
}
declare const CodexAppServerReplayUnexpectedOutboundError_base: Schema.Class<CodexAppServerReplayUnexpectedOutboundError, Schema.TaggedStruct<"CodexAppServerReplayUnexpectedOutboundError", {
    readonly scenario: Schema.String;
    readonly cursor: Schema.Number;
    readonly expectedType: Schema.String;
    readonly actual: Schema.Unknown;
}>, Cause.YieldableError>;
export declare class CodexAppServerReplayUnexpectedOutboundError extends CodexAppServerReplayUnexpectedOutboundError_base {
    get message(): string;
}
declare const CodexAppServerReplayFrameMismatchError_base: Schema.Class<CodexAppServerReplayFrameMismatchError, Schema.TaggedStruct<"CodexAppServerReplayFrameMismatchError", {
    readonly scenario: Schema.String;
    readonly cursor: Schema.Number;
    readonly label: Schema.optional<Schema.String>;
    readonly expected: Schema.Unknown;
    readonly actual: Schema.Unknown;
}>, Cause.YieldableError>;
export declare class CodexAppServerReplayFrameMismatchError extends CodexAppServerReplayFrameMismatchError_base {
    get message(): string;
}
declare const CodexAppServerReplayRuntimeExitError_base: Schema.Class<CodexAppServerReplayRuntimeExitError, Schema.TaggedStruct<"CodexAppServerReplayRuntimeExitError", {
    readonly scenario: Schema.String;
    readonly cursor: Schema.Number;
    readonly status: Schema.Literals<readonly ["error", "cancelled"]>;
    readonly error: Schema.optional<Schema.Unknown>;
}>, Cause.YieldableError>;
export declare class CodexAppServerReplayRuntimeExitError extends CodexAppServerReplayRuntimeExitError_base {
    get message(): string;
}
declare const CodexAppServerReplayIncompleteError_base: Schema.Class<CodexAppServerReplayIncompleteError, Schema.TaggedStruct<"CodexAppServerReplayIncompleteError", {
    readonly scenario: Schema.String;
    readonly cursor: Schema.Number;
    readonly remaining: Schema.Number;
}>, Cause.YieldableError>;
export declare class CodexAppServerReplayIncompleteError extends CodexAppServerReplayIncompleteError_base {
    get message(): string;
}
export declare const CodexAppServerReplayError: Schema.Union<readonly [typeof CodexAppServerReplayJsonParseError, typeof CodexAppServerReplayExhaustedError, typeof CodexAppServerReplayUnexpectedOutboundError, typeof CodexAppServerReplayFrameMismatchError, typeof CodexAppServerReplayRuntimeExitError, typeof CodexAppServerReplayIncompleteError]>;
export type CodexAppServerReplayError = typeof CodexAppServerReplayError.Type;
export interface CodexAppServerReplayState {
    readonly cursor: number;
    readonly failure: CodexAppServerReplayError | null;
}
export interface CodexAppServerReplayDriver {
    readonly transcript: CodexAppServerReplayTranscript;
    readonly state: Ref.Ref<CodexAppServerReplayState>;
    readonly beforeEmitInbound?: (entry: Extract<CodexAppServerReplayEntry, {
        readonly type: "emit_inbound";
    }>) => Effect.Effect<void>;
}
export declare function layerReplay(transcript: CodexAppServerReplayTranscript): Layer.Layer<CodexClient.CodexAppServerClient, CodexAppServerReplayError>;
export declare const makeReplayDriver: (transcript: {
    readonly provider: "codex";
    readonly protocol: "codex.app-server";
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
}, options?: Pick<CodexAppServerReplayDriver, "beforeEmitInbound"> | undefined) => Effect.Effect<{
    beforeEmitInbound?: (entry: Extract<CodexAppServerReplayEntry, {
        readonly type: "emit_inbound";
    }>) => Effect.Effect<void>;
    transcript: {
        readonly provider: "codex";
        readonly protocol: "codex.app-server";
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
    };
    state: Ref.Ref<CodexAppServerReplayState>;
}, never, never>;
export declare function layerReplayWithDriver(driver: CodexAppServerReplayDriver): Layer.Layer<CodexClient.CodexAppServerClient, CodexAppServerReplayError>;
export {};
