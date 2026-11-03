import * as Config from "effect/Config";
import * as Duration from "effect/Duration";
import * as Option from "effect/Option";
import * as Schema from "effect/Schema";
import { Command } from "effect/cli";
import * as EnvironmentAuth from "../auth/EnvironmentAuth.ts";
import { type PersistedServerRuntimeState } from "../serverRuntimeState.ts";
export type PairStateVariant = "userdata" | "dev";
declare const NoRunningServerError_base: Schema.Class<NoRunningServerError, Schema.TaggedStruct<"NoRunningServerError", {
    readonly checkedStatePaths: Schema.$Array<Schema.String>;
    readonly inLinkedWorktree: Schema.Boolean;
}>, import("effect/Cause").YieldableError>;
export declare class NoRunningServerError extends NoRunningServerError_base {
    get message(): string;
}
declare const IncompatibleServerProtocolError_base: Schema.Class<IncompatibleServerProtocolError, Schema.TaggedStruct<"IncompatibleServerProtocolError", {
    readonly serverVersion: Schema.String;
    readonly serverProtocolVersion: Schema.Number;
}>, import("effect/Cause").YieldableError>;
export declare class IncompatibleServerProtocolError extends IncompatibleServerProtocolError_base {
    get message(): string;
}
declare const TailscaleUnavailableError_base: Schema.Class<TailscaleUnavailableError, Schema.TaggedStruct<"TailscaleUnavailableError", {
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class TailscaleUnavailableError extends TailscaleUnavailableError_base {
    get message(): string;
}
declare const MagicDnsNameMissingError_base: Schema.Class<MagicDnsNameMissingError, Schema.TaggedStruct<"MagicDnsNameMissingError", {}>, import("effect/Cause").YieldableError>;
export declare class MagicDnsNameMissingError extends MagicDnsNameMissingError_base {
    get message(): string;
}
declare const TailscaleServeNotEnabledError_base: Schema.Class<TailscaleServeNotEnabledError, Schema.TaggedStruct<"TailscaleServeNotEnabledError", {}>, import("effect/Cause").YieldableError>;
export declare class TailscaleServeNotEnabledError extends TailscaleServeNotEnabledError_base {
    get message(): string;
}
declare const ServesOtherEnvironmentError_base: Schema.Class<ServesOtherEnvironmentError, Schema.TaggedStruct<"ServesOtherEnvironmentError", {
    readonly servePort: Schema.Number;
}>, import("effect/Cause").YieldableError>;
export declare class ServesOtherEnvironmentError extends ServesOtherEnvironmentError_base {
    get message(): string;
}
declare const TailscaleServeFailedError_base: Schema.Class<TailscaleServeFailedError, Schema.TaggedStruct<"TailscaleServeFailedError", {
    readonly servePort: Schema.Number;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class TailscaleServeFailedError extends TailscaleServeFailedError_base {
    get message(): string;
}
declare const ServePortOccupiedError_base: Schema.Class<ServePortOccupiedError, Schema.TaggedStruct<"ServePortOccupiedError", {
    readonly servePort: Schema.Number;
}>, import("effect/Cause").YieldableError>;
export declare class ServePortOccupiedError extends ServePortOccupiedError_base {
    get message(): string;
}
declare const DevServerNotProxiableError_base: Schema.Class<DevServerNotProxiableError, Schema.TaggedStruct<"DevServerNotProxiableError", {
    readonly devUrl: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class DevServerNotProxiableError extends DevServerNotProxiableError_base {
    get message(): string;
}
/** Publish the single-origin web dev port, which proxies the backend. Serve requires HTTP targets. */
export declare const resolveTailscaleLocalTarget: (state: PersistedServerRuntimeState) => {
    readonly localPort: number;
    readonly localHost?: string;
} | DevServerNotProxiableError;
export declare const pairCommand: Command.Command<"pair", {
    readonly baseDir: Option.Option<string>;
    readonly scopes: ("access:read" | "access:write" | "diagnostics:read" | "environment:maintain" | "filesystem:read" | "filesystem:write" | "orchestration:operate" | "orchestration:read" | "preview:operate" | "providers:manage" | "relay:read" | "relay:write" | "settings:write" | "source-control:write" | "terminal:operate" | "terminal:read")[];
    readonly ttl: Option.Option<Duration.Duration>;
    readonly label: Option.Option<string>;
    readonly tailscale: boolean;
    readonly tailscaleServePort: number;
}, {}, Config.ConfigError | DevServerNotProxiableError | IncompatibleServerProtocolError | MagicDnsNameMissingError | import("effect/sql/Migrator").MigrationError | NoRunningServerError | import("effect/PlatformError").PlatformError | import("../auth/ServerSecretStore.vibe").SecretStoreConcurrentReadError | import("../auth/ServerSecretStore.vibe").SecretStoreDecodeError | import("../auth/ServerSecretStore.vibe").SecretStoreEncodeError | import("../auth/ServerSecretStore.vibe").SecretStorePersistError | import("../auth/ServerSecretStore.vibe").SecretStoreRandomGenerationError | import("../auth/ServerSecretStore.vibe").SecretStoreReadError | import("../auth/ServerSecretStore.vibe").SecretStoreRemoveError | import("../auth/ServerSecretStore.vibe").SecretStoreSecureError | import("../auth/ServerSecretStore.vibe").SecretStoreTemporaryPathError | ServePortOccupiedError | EnvironmentAuth.ServerAuthAuthenticatedAccessTokenIssueError | EnvironmentAuth.ServerAuthAuthenticatedSessionIssueError | EnvironmentAuth.ServerAuthBootstrapCredentialValidationError | EnvironmentAuth.ServerAuthCloudHealthJwtSigningError | EnvironmentAuth.ServerAuthCloudLinkJwtSigningError | EnvironmentAuth.ServerAuthCloudMintJwtSigningError | EnvironmentAuth.ServerAuthCloudMintPublicKeyMissingError | EnvironmentAuth.ServerAuthCloudRelayIssuerMissingError | EnvironmentAuth.ServerAuthDpopReplayKeyCalculationError | EnvironmentAuth.ServerAuthDpopReplayStateRecordError | EnvironmentAuth.ServerAuthLinkedCloudAccountMissingError | EnvironmentAuth.ServerAuthLinkedCloudAccountReadError | EnvironmentAuth.ServerAuthLinkedCloudAccountVerificationError | EnvironmentAuth.ServerAuthOtherSessionsRevocationError | EnvironmentAuth.ServerAuthPairingLinkCreationError | EnvironmentAuth.ServerAuthPairingLinkRevocationError | EnvironmentAuth.ServerAuthPairingLinksListError | EnvironmentAuth.ServerAuthSessionCredentialValidationError | EnvironmentAuth.ServerAuthSessionRevocationError | EnvironmentAuth.ServerAuthSessionTokenIssueError | EnvironmentAuth.ServerAuthSessionsListError | EnvironmentAuth.ServerAuthWebSocketTokenIssueError | import("../environment/ServerEnvironment.ts").ServerEnvironmentIdPersistenceError | ServesOtherEnvironmentError | import("../auth/SessionStore.ts").SessionCredentialIssueError | import("effect/sql/SqlError").SqlError | TailscaleServeFailedError | TailscaleServeNotEnabledError | TailscaleUnavailableError | import("../persistence/initializeV2Database.ts").V2DatabaseImportError, import("effect/process/ChildProcessSpawner").ChildProcessSpawner | import("@t3tools/shared/Crypto").Crypto | import("effect/FileSystem").FileSystem | import("effect/Path").Path>;
export {};
