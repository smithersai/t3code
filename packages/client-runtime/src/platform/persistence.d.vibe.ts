import { type EnvironmentId, type OrchestrationV2ShellSnapshot, type OrchestrationV2ThreadDetailSnapshot, type ServerConfig, type ThreadId, type VcsListRefsResult } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Option from "effect/Option";
import * as Schema from "effect/Schema";
import type { ConnectionRegistration } from "../connection/catalog.vibe";
import type { DeferredShellSnapshot } from "../state/shellPullRequests.vibe";
import type { ConnectionTarget, PersistedConnectionTarget } from "../connection/model.vibe";
declare const ConnectionPersistenceError_base: Schema.Class<ConnectionPersistenceError, Schema.TaggedStruct<"ConnectionPersistenceError", {
    readonly operation: Schema.Literals<readonly ["list-targets", "list-disabled-targets", "register-connection", "set-connection-routes", "remove-connection", "set-connection-enabled", "load-shell", "save-shell", "load-thread", "save-thread", "remove-thread", "load-server-config", "save-server-config", "load-vcs-refs", "save-vcs-refs", "remove-vcs-refs", "clear-vcs-refs", "clear-environment"]>;
    readonly message: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class ConnectionPersistenceError extends ConnectionPersistenceError_base {
}
declare const ConnectionTargetStore_base: Context.ServiceClass<ConnectionTargetStore, "@t3tools/client-runtime/platform/persistence/ConnectionTargetStore", {
    readonly list: Effect.Effect<readonly ConnectionTarget[], ConnectionPersistenceError>;
    readonly listDisabled: Effect.Effect<readonly EnvironmentId[], ConnectionPersistenceError>;
}>;
export declare class ConnectionTargetStore extends ConnectionTargetStore_base {
}
declare const ConnectionRegistrationStore_base: Context.ServiceClass<ConnectionRegistrationStore, "@t3tools/client-runtime/platform/persistence/ConnectionRegistrationStore", {
    /**
     * Records of routes missing from `routes` are dropped.
     */
    readonly register: (registration: ConnectionRegistration, routes: readonly PersistedConnectionTarget[]) => Effect.Effect<void, ConnectionPersistenceError>;
    /**
     * `routes` must not be empty.
     */
    readonly setRoutes: (environmentId: EnvironmentId, routes: readonly PersistedConnectionTarget[]) => Effect.Effect<void, ConnectionPersistenceError>;
    readonly remove: (environmentId: EnvironmentId) => Effect.Effect<void, ConnectionPersistenceError>;
    readonly setEnabled: (environmentId: EnvironmentId, enabled: boolean) => Effect.Effect<void, ConnectionPersistenceError>;
}>;
export declare class ConnectionRegistrationStore extends ConnectionRegistrationStore_base {
}
declare const EnvironmentCacheStore_base: Context.ServiceClass<EnvironmentCacheStore, "@t3tools/client-runtime/platform/persistence/EnvironmentCacheStore", {
    readonly loadShell: (environmentId: EnvironmentId) => Effect.Effect<Option.Option<DeferredShellSnapshot>, ConnectionPersistenceError>;
    readonly saveShell: (environmentId: EnvironmentId, snapshot: OrchestrationV2ShellSnapshot) => Effect.Effect<void, ConnectionPersistenceError>;
    readonly loadThread: (environmentId: EnvironmentId, threadId: ThreadId) => Effect.Effect<Option.Option<OrchestrationV2ThreadDetailSnapshot>, ConnectionPersistenceError>;
    readonly saveThread: (environmentId: EnvironmentId, snapshot: OrchestrationV2ThreadDetailSnapshot) => Effect.Effect<void, ConnectionPersistenceError>;
    readonly removeThread: (environmentId: EnvironmentId, threadId: ThreadId) => Effect.Effect<void, ConnectionPersistenceError>;
    readonly loadServerConfig: (environmentId: EnvironmentId) => Effect.Effect<Option.Option<ServerConfig>, ConnectionPersistenceError>;
    readonly saveServerConfig: (environmentId: EnvironmentId, config: ServerConfig) => Effect.Effect<void, ConnectionPersistenceError>;
    /**
     * Query-specific lists are not cached because they are incomplete and unsafe
     * to present as a full picker.
     */
    readonly loadVcsRefs: (environmentId: EnvironmentId, cwd: string) => Effect.Effect<Option.Option<VcsListRefsResult>, ConnectionPersistenceError>;
    readonly saveVcsRefs: (environmentId: EnvironmentId, cwd: string, refs: VcsListRefsResult) => Effect.Effect<void, ConnectionPersistenceError>;
    readonly removeVcsRefs: (environmentId: EnvironmentId, cwd: string) => Effect.Effect<void, ConnectionPersistenceError>;
    /**
     * Git ref mutations are repository-wide, and linked worktrees may have
     * cached the same refs under different working-directory keys.
     */
    readonly clearVcsRefs: (environmentId: EnvironmentId) => Effect.Effect<void, ConnectionPersistenceError>;
    readonly clear: (environmentId: EnvironmentId) => Effect.Effect<void, ConnectionPersistenceError>;
}>;
export declare class EnvironmentCacheStore extends EnvironmentCacheStore_base {
}
declare const EnvironmentOwnedDataCleanup_base: Context.Reference<{
    readonly clear: (environmentId: EnvironmentId) => Effect.Effect<void>;
}>;
export declare class EnvironmentOwnedDataCleanup extends EnvironmentOwnedDataCleanup_base {
}
export {};
