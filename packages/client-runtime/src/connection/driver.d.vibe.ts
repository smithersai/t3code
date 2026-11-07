import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Scope from "effect/Scope";
import * as HttpClient from "effect/http/HttpClient";
import type { ConnectionCatalogEntry, ConnectionRoute } from "./catalog.vibe";
import type { ConnectionAttemptError, ConnectionAttemptStage, PreparedConnection } from "./model.vibe";
import { ConnectionTransientError } from "#vibelang/emitted/src/connection/model";
import * as ConnectionResolver from "./resolver.ts";
import * as RpcSession from "#vibelang/emitted/src/rpc/session";
export type ConnectionDriverProgress = {
    readonly stage: "preparing";
} | {
    readonly stage: Exclude<ConnectionAttemptStage, "preparing">;
    readonly prepared: PreparedConnection;
};
export interface EnvironmentConnectionLease {
    readonly prepared: PreparedConnection;
    readonly session: RpcSession.RpcSession;
}
export type RouteCheck = "answered" | "silent" | "unchecked";
declare const ConnectionDriver_base: Context.ServiceClass<ConnectionDriver, "@t3tools/client-runtime/connection/driver/ConnectionDriver", {
    readonly connect: (entry: ConnectionCatalogEntry, reportProgress: (progress: ConnectionDriverProgress) => Effect.Effect<void>) => Effect.Effect<EnvironmentConnectionLease, ConnectionAttemptError, Scope.Scope>;
    readonly checkRoute: (entry: ConnectionCatalogEntry, route: ConnectionRoute) => Effect.Effect<RouteCheck>;
    readonly preflight: (entry: ConnectionCatalogEntry, route: ConnectionRoute) => Effect.Effect<boolean>;
    /** Asks the host behind a live session to answer a fresh request on the session's own origin. */
    readonly checkHost: (prepared: PreparedConnection) => Effect.Effect<RouteCheck>;
}>;
export declare class ConnectionDriver extends ConnectionDriver_base {
}
export declare const connectOverRoutes: <R>(entry: ConnectionCatalogEntry, checkRoute: (route: ConnectionRoute) => Effect.Effect<RouteCheck>, connectRoute: (route: ConnectionRoute) => Effect.Effect<EnvironmentConnectionLease, ConnectionAttemptError, (R | Scope.Scope)>) => Effect.Effect<EnvironmentConnectionLease, import("./model.vibe").ConnectionBlockedError | ConnectionTransientError, Scope.Scope | Exclude<R, Scope.Scope>>;
/** @public */
export declare const make: Effect.Effect<{
    readonly connect: (entry: ConnectionCatalogEntry, reportProgress: (progress: ConnectionDriverProgress) => Effect.Effect<void>) => Effect.Effect<EnvironmentConnectionLease, ConnectionAttemptError, Scope.Scope>;
    readonly checkRoute: (entry: ConnectionCatalogEntry, route: ConnectionRoute) => Effect.Effect<RouteCheck>;
    readonly preflight: (entry: ConnectionCatalogEntry, route: ConnectionRoute) => Effect.Effect<boolean>;
    /** Asks the host behind a live session to answer a fresh request on the session's own origin. */
    readonly checkHost: (prepared: PreparedConnection) => Effect.Effect<RouteCheck>;
}, never, ConnectionResolver.ConnectionResolver | HttpClient.HttpClient | RpcSession.RpcSessionFactory>;
export declare const layer: Layer.Layer<ConnectionDriver, never, ConnectionResolver.ConnectionResolver | HttpClient.HttpClient | RpcSession.RpcSessionFactory>;
export {};
