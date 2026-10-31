import { EnvironmentId } from "@t3tools/contracts";
import * as Schema from "effect/Schema";
import { type ConnectionRegistration } from "../connection/catalog.vibe";
import { PersistedConnectionTarget } from "../connection/model.vibe";
import * as TokenStore from "../authorization/tokenStore.js";
export declare const StoredConnectionCredential: Schema.Struct<{
    readonly connectionId: Schema.String;
    readonly credential: Schema.Union<readonly [typeof import("../connection/catalog.vibe").BearerConnectionCredential]>;
}>;
export type StoredConnectionCredential = typeof StoredConnectionCredential.Type;
export declare const ConnectionCatalogDocument: Schema.Struct<{
    readonly schemaVersion: Schema.Literal<1>;
    readonly targets: Schema.$Array<Schema.Union<readonly [typeof import("../connection/model.vibe").BearerConnectionTarget, typeof import("../connection/model.vibe").RelayConnectionTarget, typeof import("../connection/model.vibe").SshConnectionTarget]>>;
    readonly profiles: Schema.$Array<Schema.Union<readonly [typeof import("../connection/catalog.vibe").BearerConnectionProfile, typeof import("../connection/catalog.vibe").SshConnectionProfile]>>;
    readonly credentials: Schema.$Array<Schema.Struct<{
        readonly connectionId: Schema.String;
        readonly credential: Schema.Union<readonly [typeof import("../connection/catalog.vibe").BearerConnectionCredential]>;
    }>>;
    readonly remoteDpopTokens: Schema.$Array<typeof TokenStore.RemoteDpopAccessToken>;
    readonly githubRoutingPermissions: Schema.optionalKey<Schema.$Array<Schema.Struct<{
        readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
        readonly connectionKey: Schema.String;
        readonly permission: Schema.Literals<readonly ["off", "read", "read-write"]>;
    }>>>;
    readonly disabledEnvironmentIds: Schema.withDecodingDefaultKey<Schema.$Array<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>, never>;
}>;
export type ConnectionCatalogDocument = typeof ConnectionCatalogDocument.Type;
export declare const EMPTY_CONNECTION_CATALOG_DOCUMENT: ConnectionCatalogDocument;
export declare function replaceCatalogValue<A>(values: ReadonlyArray<A>, key: (value: A) => string, next: A): ReadonlyArray<A>;
export declare function removeCatalogValue<A>(values: ReadonlyArray<A>, key: (value: A) => string, removedKey: string): ReadonlyArray<A>;
export declare function catalogRoutes(document: ConnectionCatalogDocument, environmentId: EnvironmentId): ReadonlyArray<PersistedConnectionTarget>;
/**
 * Records owned by a dropped route go with it; the environment keeps its
 * position in the catalog. An empty list leaves the environment's other records
 * in place; use `removeConnectionFromCatalog` to forget the environment.
 */
export declare function setRoutesInCatalog(document: ConnectionCatalogDocument, environmentId: EnvironmentId, routes: ReadonlyArray<PersistedConnectionTarget>): ConnectionCatalogDocument;
export declare function registerConnectionInCatalog(document: ConnectionCatalogDocument, registration: ConnectionRegistration, routes?: ReadonlyArray<PersistedConnectionTarget>): ConnectionCatalogDocument;
export declare function removeConnectionFromCatalog(document: ConnectionCatalogDocument, environmentId: EnvironmentId): ConnectionCatalogDocument;
export declare function setConnectionEnabledInCatalog(document: ConnectionCatalogDocument, environmentId: EnvironmentId, enabled: boolean): ConnectionCatalogDocument;
export declare function putRemoteDpopTokenInCatalog(document: ConnectionCatalogDocument, token: TokenStore.RemoteDpopAccessToken): ConnectionCatalogDocument;
