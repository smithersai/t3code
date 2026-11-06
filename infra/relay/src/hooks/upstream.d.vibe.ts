import * as Effect from "effect/Effect";
import * as Option from "effect/Option";
import * as Schema from "effect/Schema";
import * as HttpClient from "effect/http/HttpClient";
export declare const RELAY_HOOK_UPSTREAM_TIMEOUT_MS = 8000;
export declare const TUNNEL_OFFLINE_STATUS = 530;
export interface UpstreamHook {
    readonly id: string;
    readonly receivedAt: string;
    readonly method: string;
    /** Path segments exactly as the sender sent them; the environment decodes them. */
    readonly rawHookId: string;
    readonly rawToken: string;
    /** Without the leading `?`. */
    readonly query: string;
    readonly headers: Readonly<Record<string, string>>;
    readonly body: Uint8Array;
}
export interface UpstreamResponse {
    readonly status: number;
    readonly contentType: string | undefined;
    readonly outcome: string | undefined;
    readonly body: Uint8Array;
}
declare const ResponseTooLarge_base: Schema.Class<ResponseTooLarge, Schema.TaggedStruct<"ResponseTooLarge", {}>, import("effect/Cause").YieldableError>;
declare class ResponseTooLarge extends ResponseTooLarge_base {
}
/**
 * Sends a webhook request through the environment's tunnel. Fails when the
 * environment cannot be reached, and succeeds with None on timeout.
 */
export declare const sendUpstream: (baseUrl: string, hook: UpstreamHook) => Effect.Effect<Option.Option<UpstreamResponse>, import("effect/http/HttpClientError").HttpClientError | ResponseTooLarge, HttpClient.HttpClient>;
export {};
