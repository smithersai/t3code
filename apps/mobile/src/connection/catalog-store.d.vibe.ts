import { type ConnectionCatalogDocument as ConnectionCatalogDocumentType } from "@t3tools/client-runtime/platform";
import { ConnectionTransientError } from "@t3tools/client-runtime/connection";
import * as Effect from "effect/Effect";
import * as MobileSecureStorage from "../persistence/mobile-secure-storage.vibe";
export declare const CONNECTION_CATALOG_KEY = "t3code.connection-catalog.v1";
export declare const LEGACY_CONNECTIONS_KEY = "t3code.connections";
export declare const make: () => Effect.Effect<{
    read: Effect.Effect<{
        readonly schemaVersion: 1;
        readonly targets: readonly (import("@t3tools/client-runtime/connection").BearerConnectionTarget | import("@t3tools/client-runtime/connection").RelayConnectionTarget | import("@t3tools/client-runtime/connection").SshConnectionTarget)[];
        readonly profiles: readonly (import("@t3tools/client-runtime/connection").BearerConnectionProfile | import("@t3tools/client-runtime/connection").SshConnectionProfile)[];
        readonly credentials: readonly {
            readonly connectionId: string;
            readonly credential: import("@t3tools/client-runtime/connection").BearerConnectionCredential;
        }[];
        readonly remoteDpopTokens: readonly import("../../node_modules/@t3tools/client-runtime/src/authorization/tokenStore.vibe").RemoteDpopAccessToken[];
        readonly githubRoutingPermissions?: readonly {
            readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
            readonly connectionKey: string;
            readonly permission: "off" | "read" | "read-write";
        }[] | undefined;
        readonly disabledEnvironmentIds: readonly (string & import("effect/Brand").Brand<"EnvironmentId">)[];
    }, ConnectionTransientError, never>;
    update: (transform: (catalog: ConnectionCatalogDocumentType) => ConnectionCatalogDocumentType) => Effect.Effect<void, ConnectionTransientError>;
}, never, MobileSecureStorage.MobileSecureStorage>;
