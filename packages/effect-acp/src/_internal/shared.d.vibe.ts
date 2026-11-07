import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import { RpcClientError } from "effect/rpc";
import * as AcpSchema from "../_generated/schema.gen.ts";
import * as AcpError from "../errors.vibe";
export declare const callRpc: <A>(method: string, effect: Effect.Effect<A, RpcClientError.RpcClientError | AcpSchema.Error>) => Effect.Effect<A, AcpError.AcpError>;
export declare const isolateNotificationHandler: <E, R>(effect: Effect.Effect<void, E, R>) => Effect.Effect<void, never, R>;
export declare const runHandler: <A, B, Args extends ReadonlyArray<unknown>>(handler: ((payload: A, ...args: Args) => Effect.Effect<B, AcpError.AcpError>) | undefined, payload: A, method: string, ...args: Args) => Effect.Effect<B, {
    readonly code: number;
    readonly message: string;
    readonly data?: Schema.Json;
}, never>;
/** @throws {never} */
export declare function decodeExtRequestRegistration<A, I>(method: string, payload: Schema.Codec<A, I>, handler: (payload: A, context: {
    readonly requestId: string;
    readonly method: string;
}) => Effect.Effect<unknown, AcpError.AcpError>): (params: unknown, context: {
    readonly requestId: string;
    readonly method: string;
}) => Effect.Effect<unknown, AcpError.AcpError>;
/** @throws {never} */
export declare function decodeExtNotificationRegistration<A, I>(method: string, payload: Schema.Codec<A, I>, handler: (payload: A) => Effect.Effect<void, AcpError.AcpError>): (params: unknown) => Effect.Effect<void, AcpError.AcpError>;
/** @throws {never} */
export declare const jsonRpcRequest: <A, I>(method: string, params: Schema.Codec<A, I>) => Schema.Struct<{
    readonly jsonrpc: Schema.Literal<"2.0">;
    readonly id: Schema.Union<readonly [Schema.Number, Schema.String]>;
    readonly method: Schema.Literal<string>;
    readonly params: Schema.Codec<A, I, never, never>;
    readonly headers: Schema.withDecodingDefaultKey<Schema.$Array<Schema.Unknown>, never>;
}>;
/** @throws {never} */
export declare const jsonRpcNotification: <A, I>(method: string, params: Schema.Codec<A, I>) => Schema.Struct<{
    readonly jsonrpc: Schema.Literal<"2.0">;
    readonly method: Schema.Literal<string>;
    readonly params: Schema.Codec<A, I, never, never>;
}>;
/** @throws {never} */
export declare const jsonRpcResponse: <A, I>(result: Schema.Codec<A, I>) => Schema.Struct<{
    readonly jsonrpc: Schema.Literal<"2.0">;
    readonly id: Schema.Union<readonly [Schema.Number, Schema.String]>;
    readonly result: Schema.Codec<A, I, never, never>;
}>;
export declare const encodeJsonl: <A, I>(schema: Schema.Codec<A, I>, value: A) => Effect.Effect<Uint8Array<ArrayBuffer>, Schema.SchemaError, never>;
