import { EnvironmentId } from "@t3tools/contracts";
import * as Context from "effect/Context";
import type * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import type * as Option from "effect/Option";
import * as Schema from "effect/Schema";
import type { ConnectionAttemptError } from "../connection/model.vibe";
declare const RemoteDpopAccessToken_base: Schema.Class<RemoteDpopAccessToken, Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly accountId: Schema.optionalKey<Schema.String>;
    readonly label: Schema.String;
    readonly endpoint: Schema.Struct<{
        readonly httpBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly wsBaseUrl: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly providerKind: Schema.Literals<readonly ["manual", "cloudflare_tunnel", "t3_relay"]>;
    }>;
    readonly accessToken: Schema.String;
    readonly expiresAtEpochMs: Schema.Number;
    readonly dpopThumbprint: Schema.String;
}>, {}>;
export declare class RemoteDpopAccessToken extends RemoteDpopAccessToken_base {
}
declare const RemoteDpopAccessTokenStore_base: Context.ServiceClass<RemoteDpopAccessTokenStore, "@t3tools/client-runtime/authorization/tokenStore/RemoteDpopAccessTokenStore", {
    readonly get: (environmentId: EnvironmentId) => Effect.Effect<Option.Option<RemoteDpopAccessToken>, ConnectionAttemptError>;
    readonly put: (token: RemoteDpopAccessToken) => Effect.Effect<void, ConnectionAttemptError>;
    readonly remove: (environmentId: EnvironmentId) => Effect.Effect<void, ConnectionAttemptError>;
}>;
export declare class RemoteDpopAccessTokenStore extends RemoteDpopAccessTokenStore_base {
}
export declare const make: (service: RemoteDpopAccessTokenStore["Service"]) => {
    readonly get: (environmentId: EnvironmentId) => Effect.Effect<Option.Option<RemoteDpopAccessToken>, ConnectionAttemptError>;
    readonly put: (token: RemoteDpopAccessToken) => Effect.Effect<void, ConnectionAttemptError>;
    readonly remove: (environmentId: EnvironmentId) => Effect.Effect<void, ConnectionAttemptError>;
};
export declare const layer: (service: RemoteDpopAccessTokenStore["Service"]) => Layer.Layer<RemoteDpopAccessTokenStore, never, never>;
export {};
