import { EnvironmentId } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import * as Stream from "effect/Stream";
import type { ConnectionCatalogEntry } from "./catalog.vibe";
import { type ConnectionAttemptError } from "./model.vibe";
export declare const PullRequestRoutingPermission: Schema.Literals<readonly ["off", "read", "read-write"]>;
export type PullRequestRoutingPermission = typeof PullRequestRoutingPermission.Type;
export declare const StoredPullRequestRoutingPermission: Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly connectionKey: Schema.String;
    readonly permission: Schema.Literals<readonly ["off", "read", "read-write"]>;
}>;
export type StoredPullRequestRoutingPermission = typeof StoredPullRequestRoutingPermission.Type;
/**
 * Trust belongs to the saved endpoints, never to an environment id advertised
 * by a server alone. With several routes the key covers all of them, sorted so
 * reordering keeps trust but adding or changing an address revokes it.
 * @throws {never}
 */
export declare function pullRequestRoutingConnectionKey(entry: ConnectionCatalogEntry): string | null;
/** @throws {never} */
export declare function pullRequestRoutingPermissionFor(entry: ConnectionCatalogEntry, permissions: ReadonlyArray<StoredPullRequestRoutingPermission>): PullRequestRoutingPermission;
declare const PullRequestRoutingPermissions_base: Context.Reference<{
    readonly get: (entry: ConnectionCatalogEntry) => Effect.Effect<PullRequestRoutingPermission>;
    readonly changes: Stream.Stream<ReadonlyArray<StoredPullRequestRoutingPermission>>;
    readonly set: (entry: ConnectionCatalogEntry, permission: PullRequestRoutingPermission) => Effect.Effect<void, ConnectionAttemptError>;
    readonly forget: (environmentId: EnvironmentId) => Effect.Effect<void, ConnectionAttemptError>;
}>;
export declare class PullRequestRoutingPermissions extends PullRequestRoutingPermissions_base {
}
export declare const makePullRequestRoutingPermissions: (storage: {
    readonly read: Effect.Effect<ReadonlyArray<StoredPullRequestRoutingPermission>, ConnectionAttemptError>;
    readonly write: (permissions: ReadonlyArray<StoredPullRequestRoutingPermission>) => Effect.Effect<void, ConnectionAttemptError>;
}) => Effect.Effect<{
    readonly get: (entry: ConnectionCatalogEntry) => Effect.Effect<PullRequestRoutingPermission>;
    readonly changes: Stream.Stream<ReadonlyArray<StoredPullRequestRoutingPermission>>;
    readonly set: (entry: ConnectionCatalogEntry, permission: PullRequestRoutingPermission) => Effect.Effect<void, ConnectionAttemptError>;
    readonly forget: (environmentId: EnvironmentId) => Effect.Effect<void, ConnectionAttemptError>;
}, ConnectionAttemptError, never>;
export {};
