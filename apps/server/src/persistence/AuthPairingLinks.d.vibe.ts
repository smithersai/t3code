import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Schema from "effect/Schema";
import * as SqlClient from "effect/sql/SqlClient";
import { type AuthPairingLinkRepositoryError } from "./Errors.vibe";
export declare const AuthPairingLinkRecord: Schema.Struct<{
    readonly id: Schema.String;
    readonly credential: Schema.String;
    readonly method: Schema.Literals<readonly ["desktop-bootstrap", "one-time-token"]>;
    readonly scopes: Schema.fromJsonString<Schema.$Array<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>>;
    readonly subject: Schema.String;
    readonly label: Schema.NullOr<Schema.String>;
    readonly proofKeyThumbprint: Schema.NullOr<Schema.String>;
    readonly createdAt: Schema.DateTimeUtcFromString;
    readonly expiresAt: Schema.DateTimeUtcFromString;
    readonly consumedAt: Schema.NullOr<Schema.DateTimeUtcFromString>;
    readonly revokedAt: Schema.NullOr<Schema.DateTimeUtcFromString>;
}>;
export type AuthPairingLinkRecord = typeof AuthPairingLinkRecord.Type;
export declare const CreateAuthPairingLinkInput: Schema.Struct<{
    readonly id: Schema.String;
    readonly credential: Schema.String;
    readonly method: Schema.Literals<readonly ["desktop-bootstrap", "one-time-token"]>;
    readonly scopes: Schema.$Array<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>;
    readonly subject: Schema.String;
    readonly label: Schema.NullOr<Schema.String>;
    readonly proofKeyThumbprint: Schema.NullOr<Schema.String>;
    readonly createdAt: Schema.DateTimeUtcFromString;
    readonly expiresAt: Schema.DateTimeUtcFromString;
}>;
export type CreateAuthPairingLinkInput = typeof CreateAuthPairingLinkInput.Type;
export declare const ConsumeAuthPairingLinkInput: Schema.Struct<{
    readonly credential: Schema.String;
    readonly proofKeyThumbprint: Schema.NullOr<Schema.String>;
    readonly requestedScopes: Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>>;
    readonly consumedAt: Schema.DateTimeUtcFromString;
    readonly now: Schema.DateTimeUtcFromString;
}>;
export type ConsumeAuthPairingLinkInput = typeof ConsumeAuthPairingLinkInput.Type;
export declare const ListActiveAuthPairingLinksInput: Schema.Struct<{
    readonly now: Schema.DateTimeUtcFromString;
}>;
export type ListActiveAuthPairingLinksInput = typeof ListActiveAuthPairingLinksInput.Type;
export declare const RevokeAuthPairingLinkInput: Schema.Struct<{
    readonly id: Schema.String;
    readonly revokedAt: Schema.DateTimeUtcFromString;
}>;
export type RevokeAuthPairingLinkInput = typeof RevokeAuthPairingLinkInput.Type;
export declare const GetAuthPairingLinkByCredentialInput: Schema.Struct<{
    readonly credential: Schema.String;
}>;
export type GetAuthPairingLinkByCredentialInput = typeof GetAuthPairingLinkByCredentialInput.Type;
declare const AuthPairingLinkRepository_base: Context.ServiceClass<AuthPairingLinkRepository, "t3/persistence/AuthPairingLinks/AuthPairingLinkRepository", {
    readonly create: (input: CreateAuthPairingLinkInput) => Effect.Effect<void, AuthPairingLinkRepositoryError>;
    readonly consumeAvailable: (input: ConsumeAuthPairingLinkInput) => Effect.Effect<Option.Option<AuthPairingLinkRecord>, AuthPairingLinkRepositoryError>;
    readonly listActive: (input: ListActiveAuthPairingLinksInput) => Effect.Effect<readonly AuthPairingLinkRecord[], AuthPairingLinkRepositoryError>;
    readonly revoke: (input: RevokeAuthPairingLinkInput) => Effect.Effect<boolean, AuthPairingLinkRepositoryError>;
    readonly getByCredential: (input: GetAuthPairingLinkByCredentialInput) => Effect.Effect<Option.Option<AuthPairingLinkRecord>, AuthPairingLinkRepositoryError>;
}>;
export declare class AuthPairingLinkRepository extends AuthPairingLinkRepository_base {
}
/** @public */
export declare const make: Effect.Effect<{
    create: (input: CreateAuthPairingLinkInput) => Effect.Effect<void, AuthPairingLinkRepositoryError>;
    consumeAvailable: (input: ConsumeAuthPairingLinkInput) => Effect.Effect<Option.Option<AuthPairingLinkRecord>, AuthPairingLinkRepositoryError>;
    listActive: (input: ListActiveAuthPairingLinksInput) => Effect.Effect<ReadonlyArray<AuthPairingLinkRecord>, AuthPairingLinkRepositoryError>;
    revoke: (input: RevokeAuthPairingLinkInput) => Effect.Effect<boolean, AuthPairingLinkRepositoryError>;
    getByCredential: (input: GetAuthPairingLinkByCredentialInput) => Effect.Effect<Option.Option<AuthPairingLinkRecord>, AuthPairingLinkRepositoryError>;
}, never, SqlClient.SqlClient>;
export declare const layer: Layer.Layer<AuthPairingLinkRepository, never, SqlClient.SqlClient>;
export {};
