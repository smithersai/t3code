import { type ServerConfig, type ServerConfigStreamEvent, WsSubscribeServerConfigRpc, WS_METHODS } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import type * as Scope from "effect/Scope";
import * as Stream from "effect/Stream";
import type * as Rpc from "effect/rpc/Rpc";
import * as RpcClientError from "effect/rpc/RpcClientError";
import * as Socket from "effect/socket/Socket";
import { type WsRpcProtocolClient } from "./protocol.ts";
import type { ConnectionAttemptError, PreparedConnection } from "../connection/model.vibe";
export interface RpcSession {
    readonly client: WsRpcProtocolClient;
    readonly initialConfig: Effect.Effect<ServerConfig, ConnectionAttemptError>;
    readonly subscribeServerConfig: (input: ServerConfigSubscriptionInput) => ServerConfigSubscription;
    readonly ready: Effect.Effect<void, ConnectionAttemptError>;
    readonly probe: Effect.Effect<void, ConnectionAttemptError>;
    /** Frames received so far: proof the socket is alive that needs no reply. */
    readonly inboundFrames: Effect.Effect<number>;
    readonly closed: Effect.Effect<never, ConnectionAttemptError>;
}
export interface RpcSessionOptions {
    readonly environmentThemes?: boolean;
    readonly usageLimitSources?: boolean;
    readonly usageLimitsCommand?: boolean;
}
declare const RpcSessionFactory_base: Context.ServiceClass<RpcSessionFactory, "@t3tools/client-runtime/rpc/session/RpcSessionFactory", {
    readonly connect: (connection: PreparedConnection) => Effect.Effect<RpcSession, ConnectionAttemptError, Scope.Scope>;
}>;
export declare class RpcSessionFactory extends RpcSessionFactory_base {
}
type ServerConfigSubscriptionError = Rpc.ErrorExit<typeof WsSubscribeServerConfigRpc> | RpcClientError.RpcClientError;
type ServerConfigSubscription = Stream.Stream<ServerConfigStreamEvent, ServerConfigSubscriptionError>;
type ServerConfigSubscriptionInput = Parameters<WsRpcProtocolClient[typeof WS_METHODS.subscribeServerConfig]>[0];
/** @public */
export declare const make: (options?: RpcSessionOptions | undefined) => Effect.Effect<{
    readonly connect: (connection: PreparedConnection) => Effect.Effect<RpcSession, ConnectionAttemptError, Scope.Scope>;
}, never, Socket.WebSocketConstructor>;
export declare const layer: (options: RpcSessionOptions) => Layer.Layer<RpcSessionFactory, never, Socket.WebSocketConstructor>;
export {};
