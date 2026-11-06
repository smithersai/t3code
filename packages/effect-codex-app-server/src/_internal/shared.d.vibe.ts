import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import * as CodexError from "../errors.vibe";
export declare const JsonRpcId: Schema.Union<readonly [Schema.Number, Schema.String]>;
export declare const JsonRpcResponseEnvelope: Schema.Struct<{
    readonly id: Schema.Union<readonly [Schema.Number, Schema.String]>;
    readonly result: Schema.optional<Schema.Unknown>;
    readonly error: Schema.optional<Schema.Struct<{
        readonly code: Schema.Number;
        readonly message: Schema.String;
        readonly data: Schema.optional<Schema.Unknown>;
    }>>;
}>;
export declare const decodeOptionalPayload: <A, I>(method: string, schema: Schema.Codec<A, I> | undefined, raw: unknown) => Effect.Effect<A, CodexError.CodexAppServerRequestError>;
export declare const encodeOptionalPayload: <A, I>(method: string, schema: Schema.Codec<A, I> | undefined, payload: A) => Effect.Effect<I | undefined, CodexError.CodexAppServerRequestError>;
export declare const decodeNotificationPayload: <A, I>(method: string, schema: Schema.Codec<A, I> | undefined, raw: unknown) => Effect.Effect<A, CodexError.CodexAppServerProtocolParseError>;
export declare const runHandler: <A, B>(handler: ((payload: A) => Effect.Effect<B, CodexError.CodexAppServerError>) | undefined, payload: A, method: string) => Effect.Effect<B, CodexError.CodexAppServerRequestError, never>;
