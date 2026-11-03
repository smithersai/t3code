import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import * as Runtime from "effect/Runtime";
import * as Schema from "effect/Schema";
import * as Stdio from "effect/Stdio";
import { Command } from "effect/cli";
import * as EnvironmentAuth from "../auth/EnvironmentAuth.ts";
import { type McpToolSession } from "../mcp/AcpMcpStdioBridge.ts";
declare const ThreadServerNotRunningError_base: Schema.Class<ThreadServerNotRunningError, Schema.TaggedStruct<"ThreadServerNotRunningError", {
    readonly baseDir: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class ThreadServerNotRunningError extends ThreadServerNotRunningError_base {
    readonly [Runtime.errorReported] = false;
    get message(): string;
}
declare const ThreadServerUnreachableError_base: Schema.Class<ThreadServerUnreachableError, Schema.TaggedStruct<"ThreadServerUnreachableError", {
    readonly origin: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ThreadServerUnreachableError extends ThreadServerUnreachableError_base {
    readonly [Runtime.errorReported] = false;
    get message(): string;
}
declare const ThreadToolFailedError_base: Schema.Class<ThreadToolFailedError, Schema.TaggedStruct<"ThreadToolFailedError", {
    readonly tool: Schema.String;
    readonly detail: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class ThreadToolFailedError extends ThreadToolFailedError_base {
    readonly [Runtime.errorReported] = false;
    get message(): string;
}
declare const ThreadUsageError_base: Schema.Class<ThreadUsageError, Schema.TaggedStruct<"ThreadUsageError", {
    readonly detail: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class ThreadUsageError extends ThreadUsageError_base {
    readonly [Runtime.errorReported] = false;
    get message(): string;
}
declare const ThreadProjectNotFoundError_base: Schema.Class<ThreadProjectNotFoundError, Schema.TaggedStruct<"ThreadProjectNotFoundError", {
    readonly identifier: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class ThreadProjectNotFoundError extends ThreadProjectNotFoundError_base {
    readonly [Runtime.errorReported] = false;
    get message(): string;
}
declare const ThreadNeedsInputError_base: Schema.Class<ThreadNeedsInputError, Schema.TaggedStruct<"ThreadNeedsInputError", {
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
}>, import("effect/Cause").YieldableError>;
/** Exit code 2 lets a script tell "needs a human" apart from a failed run. */
export declare class ThreadNeedsInputError extends ThreadNeedsInputError_base {
    readonly [Runtime.errorReported] = false;
    readonly [Runtime.errorExitCode] = 2;
    get message(): string;
}
declare const ThreadRunEndedError_base: Schema.Class<ThreadRunEndedError, Schema.TaggedStruct<"ThreadRunEndedError", {
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly status: Schema.String;
    readonly error: Schema.optional<Schema.String>;
}>, import("effect/Cause").YieldableError>;
export declare class ThreadRunEndedError extends ThreadRunEndedError_base {
    readonly [Runtime.errorReported] = false;
    get message(): string;
}
declare const makeThreadTools: (session: McpToolSession, origin: string) => {
    call: <S extends Schema.Decoder<unknown>>(tool: string, args: Readonly<Record<string, unknown>>, schema: S) => Effect.Effect<S["Type"], ThreadServerUnreachableError | ThreadToolFailedError>;
};
export type ThreadTools = ReturnType<typeof makeThreadTools>;
/**
 * Waits for this exact run, following a restart to its continuation, so a
 * message another client sends meanwhile cannot stand in for its result.
 */
export declare const waitForRun: (tools: {
    call: <S extends Schema.Decoder<unknown>>(tool: string, args: Readonly<Record<string, unknown>>, schema: S) => Effect.Effect<S["Type"], ThreadServerUnreachableError | ThreadToolFailedError, never>;
}, threadId: string & import("effect/Brand").Brand<"ThreadId">, runId: string & import("effect/Brand").Brand<"RunId">) => Effect.Effect<{
    type: "ended";
    runId: (string & import("effect/Brand").Brand<"RunId">) | null;
    status: "cancelled" | "completed" | "failed" | "idle" | "interrupted" | "preparing" | "queued" | "rolled_back" | "running" | "starting" | "waiting";
} | {
    type: "needs_input";
}, ThreadServerUnreachableError | ThreadToolFailedError, never>;
export declare const threadCommand: Command.Command<"thread", {}, {}, import("../bootstrap.ts").BootstrapEnvelopeDecodeError | import("../bootstrap.ts").BootstrapEnvelopeReadError | import("../bootstrap.ts").BootstrapFdStatError | import("../bootstrap.ts").BootstrapInputStreamOpenError | import("effect/Config").ConfigError | import("effect/sql/Migrator").MigrationError | import("@t3tools/shared/Net").NetError | import("effect/PlatformError").PlatformError | import("../auth/ServerSecretStore.vibe").SecretStoreConcurrentReadError | import("../auth/ServerSecretStore.vibe").SecretStoreDecodeError | import("../auth/ServerSecretStore.vibe").SecretStoreEncodeError | import("../auth/ServerSecretStore.vibe").SecretStorePersistError | import("../auth/ServerSecretStore.vibe").SecretStoreRandomGenerationError | import("../auth/ServerSecretStore.vibe").SecretStoreReadError | import("../auth/ServerSecretStore.vibe").SecretStoreRemoveError | import("../auth/ServerSecretStore.vibe").SecretStoreSecureError | import("../auth/ServerSecretStore.vibe").SecretStoreTemporaryPathError | EnvironmentAuth.ServerAuthAuthenticatedAccessTokenIssueError | EnvironmentAuth.ServerAuthAuthenticatedSessionIssueError | EnvironmentAuth.ServerAuthBootstrapCredentialValidationError | EnvironmentAuth.ServerAuthCloudHealthJwtSigningError | EnvironmentAuth.ServerAuthCloudLinkJwtSigningError | EnvironmentAuth.ServerAuthCloudMintJwtSigningError | EnvironmentAuth.ServerAuthCloudMintPublicKeyMissingError | EnvironmentAuth.ServerAuthCloudRelayIssuerMissingError | EnvironmentAuth.ServerAuthDpopReplayKeyCalculationError | EnvironmentAuth.ServerAuthDpopReplayStateRecordError | EnvironmentAuth.ServerAuthLinkedCloudAccountMissingError | EnvironmentAuth.ServerAuthLinkedCloudAccountReadError | EnvironmentAuth.ServerAuthLinkedCloudAccountVerificationError | EnvironmentAuth.ServerAuthOtherSessionsRevocationError | EnvironmentAuth.ServerAuthPairingLinkCreationError | EnvironmentAuth.ServerAuthPairingLinkRevocationError | EnvironmentAuth.ServerAuthPairingLinksListError | EnvironmentAuth.ServerAuthSessionCredentialValidationError | EnvironmentAuth.ServerAuthSessionRevocationError | EnvironmentAuth.ServerAuthSessionTokenIssueError | EnvironmentAuth.ServerAuthSessionsListError | EnvironmentAuth.ServerAuthWebSocketTokenIssueError | import("../environment/ServerEnvironment.ts").ServerEnvironmentIdPersistenceError | import("../auth/SessionStore.ts").SessionCredentialIssueError | import("effect/sql/SqlError").SqlError | ThreadNeedsInputError | ThreadProjectNotFoundError | ThreadRunEndedError | ThreadServerNotRunningError | ThreadServerUnreachableError | ThreadToolFailedError | ThreadUsageError | import("effect/cli/CliError").UserError | import("../persistence/initializeV2Database.ts").V2DatabaseImportError, import("@t3tools/shared/Crypto").Crypto | FileSystem.FileSystem | import("@t3tools/shared/Net").NetService | Path.Path | Stdio.Stdio>;
export {};
