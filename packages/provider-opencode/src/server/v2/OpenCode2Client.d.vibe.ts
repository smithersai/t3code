import { type OpenCodeClient } from "@opencode/client/effect";
import { OpenCodeEvent } from "@opencode/protocol/groups/event";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as Schema from "effect/Schema";
import * as Stream from "effect/Stream";
import * as Sse from "effect/encoding/Sse";
import * as HttpClient from "effect/http/HttpClient";
import * as HttpClientError from "effect/http/HttpClientError";
export interface OpenCode2UnreadableTerminal {
    readonly type: "unreadable.execution.ended";
    readonly executionType: (typeof EXECUTION_ENDS)[number];
    readonly sessionID: string;
}
export interface OpenCode2UnreadableStart {
    readonly type: "unreadable.execution.started";
    readonly sessionID: string;
}
declare const EXECUTION_ENDS: readonly ["session.execution.succeeded", "session.execution.failed", "session.execution.interrupted"];
declare const OpenCode2SilentStreamError_base: Schema.Class<OpenCode2SilentStreamError, Schema.TaggedStruct<"OpenCode2SilentStreamError", {}>, import("effect/Cause").YieldableError>;
export declare class OpenCode2SilentStreamError extends OpenCode2SilentStreamError_base {
    get message(): string;
}
export type OpenCode2StreamEvent = OpenCodeEvent | OpenCode2UnreadableTerminal | OpenCode2UnreadableStart;
/** events resolves on subscription acceptance; subscribe before work because the stream is volatile. */
export interface OpenCode2Api {
    readonly client: OpenCodeClient;
    readonly events: Effect.Effect<Stream.Stream<OpenCode2StreamEvent, HttpClientError.HttpClientError | Sse.Retry | Sse.SseError | OpenCode2SilentStreamError>, HttpClientError.HttpClientError>;
}
declare const OpenCode2Client_base: Context.ServiceClass<OpenCode2Client, "@t3tools/provider-opencode/server/v2/OpenCode2Client", {
    readonly connect: (input: {
        readonly baseUrl: string;
        readonly password: string | Redacted.Redacted;
    }) => Effect.Effect<OpenCode2Api>;
}>;
export declare class OpenCode2Client extends OpenCode2Client_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly connect: (input: {
        readonly baseUrl: string;
        readonly password: string | Redacted.Redacted;
    }) => Effect.Effect<OpenCode2Api>;
}, never, HttpClient.HttpClient>;
export declare const layer: Layer.Layer<OpenCode2Client, never, HttpClient.HttpClient>;
/** Send input only initially; cursor pages must omit order or OpenCode rejects them. */
export declare const paginate: <Input extends {
    readonly cursor?: unknown;
}, Item, E, R>(input: Input, list: (input: Input) => Effect.Effect<{
    readonly data: ReadonlyArray<Item>;
    readonly cursor: {
        readonly next?: Input["cursor"];
    };
}, E, R>) => Stream.Stream<Item, E, R>;
export {};
