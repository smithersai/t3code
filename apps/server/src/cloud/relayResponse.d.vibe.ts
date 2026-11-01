import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import * as HttpClientResponse from "effect/http/HttpClientResponse";
declare const RelayRequestError_base: Schema.Class<RelayRequestError, Schema.TaggedStruct<"RelayRequestError", {
    readonly rejection: Schema.Literals<readonly ["unauthorized", "forbidden", "rejected", "unavailable"]>;
    readonly description: Schema.String;
    /** How long the relay asked callers to wait (`Retry-After`) before retrying. */
    readonly retryAfterMillis: Schema.optionalKey<Schema.Number>;
}>, import("effect/Cause").YieldableError>;
/** Only unavailable is retryable. Descriptions expose relay explanations and trace IDs, never request details. */
export declare class RelayRequestError extends RelayRequestError_base {
    get message(): string;
}
export declare function relayRequestError(cause: unknown): RelayRequestError;
export declare const shouldRetryRelayRequest: (error: unknown) => boolean;
/** The relay answered and asked to be retried later; nothing local is wrong. */
export declare const isRelayUnavailable: (error: unknown) => boolean;
/** The relay's requested wait, found anywhere in a failure's cause chain. */
export declare function relayRetryAfterMillis(error: unknown): number | undefined;
export declare const filterRelayResponse: (response: HttpClientResponse.HttpClientResponse) => Effect.Effect<HttpClientResponse.HttpClientResponse, RelayRequestError, never>;
export {};
