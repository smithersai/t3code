import { BearerConnectionCredential, BearerConnectionProfile, RelayConnectionTarget, BearerConnectionTarget } from "@t3tools/client-runtime/connection";
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
declare const LegacyConnectionMigrationError_base: Schema.Class<LegacyConnectionMigrationError, Schema.TaggedStruct<"LegacyConnectionMigrationError", {
    readonly message: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class LegacyConnectionMigrationError extends LegacyConnectionMigrationError_base {
}
export declare const migrateLegacyConnectionCatalog: (raw: string) => Effect.Effect<{
    readonly schemaVersion: 1;
    readonly targets: readonly (BearerConnectionTarget | RelayConnectionTarget | import("@t3tools/client-runtime/connection").SshConnectionTarget)[];
    readonly profiles: readonly (BearerConnectionProfile | import("@t3tools/client-runtime/connection").SshConnectionProfile)[];
    readonly credentials: readonly {
        readonly connectionId: string;
        readonly credential: BearerConnectionCredential;
    }[];
    readonly remoteDpopTokens: readonly import("../../node_modules/@t3tools/client-runtime/src/authorization/tokenStore.vibe").RemoteDpopAccessToken[];
    readonly githubRoutingPermissions?: readonly {
        readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
        readonly connectionKey: string;
        readonly permission: "off" | "read" | "read-write";
    }[] | undefined;
    readonly disabledEnvironmentIds: readonly (string & import("effect/Brand").Brand<"EnvironmentId">)[];
}, LegacyConnectionMigrationError, never>;
export {};
