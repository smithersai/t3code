import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Option from "effect/Option";
import * as Path from "effect/Path";
import * as Schema from "effect/Schema";
import * as ServerSecretStore from "../auth/ServerSecretStore.ts";
import * as ServerConfig from "../config.ts";
/**
 * Who an install belongs to, from strongest to weakest. `connect` is the T3
 * Connect account. `openai` and `claude` are provider accounts. `device` is a
 * client device that connected.
 */
export declare const TelemetryOwnerSource: Schema.Literals<readonly ["connect", "openai", "claude", "device"]>;
export type TelemetryOwnerSource = typeof TelemetryOwnerSource.Type;
export interface TelemetryOwner {
    readonly source: TelemetryOwnerSource;
    /** `hashTelemetryId` of the source's raw id. */
    readonly ownerId: string;
}
export declare const TelemetryIdentitySource: Schema.Literals<readonly ["codex", "claude", "anonymous"]>;
export type TelemetryIdentitySource = typeof TelemetryIdentitySource.Type;
declare const TelemetryAnonymousIdGenerationError_base: Schema.Class<TelemetryAnonymousIdGenerationError, Schema.TaggedStruct<"TelemetryAnonymousIdGenerationError", {
    readonly source: Schema.Literal<"anonymous">;
    readonly filePath: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class TelemetryAnonymousIdGenerationError extends TelemetryAnonymousIdGenerationError_base {
    get message(): string;
}
declare const TelemetryAnonymousIdPersistenceError_base: Schema.Class<TelemetryAnonymousIdPersistenceError, Schema.TaggedStruct<"TelemetryAnonymousIdPersistenceError", {
    readonly source: Schema.Literal<"anonymous">;
    readonly filePath: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class TelemetryAnonymousIdPersistenceError extends TelemetryAnonymousIdPersistenceError_base {
    get message(): string;
}
/**
 * The OpenAI account id in a ChatGPT id_token, read without verifying it:
 * analytics needs only a stable id. Codex CLI and T3's own sign-in both use it.
 */
export declare const openAiUserId: (idToken: string) => Option.Option<string>;
/**
 * `distinctId` preserves legacy priority: hashed Codex account_id, Claude userID, then anonymous id.
 * It can change on login or be shared by a Codex Team; hashed `installId` stays stable per install.
 * A null `distinctId` disables telemetry. Missing files and API-key-only Codex auth fall through;
 * only unreadable or malformed files warn.
 */
export declare const getTelemetryIdentityForHome: (homeDirectory: string) => Effect.Effect<{
    distinctId: string | null;
    installId: string | null;
}, never, Crypto.Crypto | FileSystem.FileSystem | Path.Path | ServerConfig.ServerConfig>;
export declare const getTelemetryIdentity: Effect.Effect<{
    distinctId: string | null;
    installId: string | null;
}, never, Crypto.Crypto | FileSystem.FileSystem | Path.Path | ServerConfig.ServerConfig>;
/**
 * Owners the server can read without a client: the linked T3 Connect account
 * and the provider logins under `homeDirectory`. Clients add `connect` and
 * `device` owners when they connect.
 */
export declare const getServerOwnersForHome: (homeDirectory: string) => Effect.Effect<TelemetryOwner[], never, FileSystem.FileSystem | Path.Path | ServerSecretStore.ServerSecretStore>;
export declare const getServerOwners: Effect.Effect<TelemetryOwner[], never, FileSystem.FileSystem | Path.Path | ServerSecretStore.ServerSecretStore>;
export {};
