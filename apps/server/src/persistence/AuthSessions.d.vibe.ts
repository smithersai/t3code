import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Schema from "effect/Schema";
import * as SqlClient from "effect/sql/SqlClient";
import { AuthSessionId } from "@t3tools/contracts";
import { type AuthSessionRepositoryError } from "./Errors.vibe";
export declare const AuthSessionClientMetadataRecord: Schema.Struct<{
    readonly label: Schema.NullOr<Schema.String>;
    readonly ipAddress: Schema.NullOr<Schema.String>;
    readonly userAgent: Schema.NullOr<Schema.String>;
    readonly deviceType: Schema.Literals<readonly ["desktop", "mobile", "tablet", "bot", "unknown"]>;
    readonly os: Schema.NullOr<Schema.String>;
    readonly browser: Schema.NullOr<Schema.String>;
}>;
export type AuthSessionClientMetadataRecord = typeof AuthSessionClientMetadataRecord.Type;
export declare const AuthSessionRecord: Schema.Struct<{
    readonly sessionId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "AuthSessionId">;
    readonly subject: Schema.String;
    readonly scopes: Schema.$Array<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>;
    readonly method: Schema.Literals<readonly ["browser-session-cookie", "bearer-access-token", "dpop-access-token"]>;
    readonly client: Schema.Struct<{
        readonly label: Schema.NullOr<Schema.String>;
        readonly ipAddress: Schema.NullOr<Schema.String>;
        readonly userAgent: Schema.NullOr<Schema.String>;
        readonly deviceType: Schema.Literals<readonly ["desktop", "mobile", "tablet", "bot", "unknown"]>;
        readonly os: Schema.NullOr<Schema.String>;
        readonly browser: Schema.NullOr<Schema.String>;
    }>;
    readonly issuedAt: Schema.DateTimeUtcFromString;
    readonly expiresAt: Schema.DateTimeUtcFromString;
    readonly lastConnectedAt: Schema.NullOr<Schema.DateTimeUtcFromString>;
    readonly revokedAt: Schema.NullOr<Schema.DateTimeUtcFromString>;
}>;
export type AuthSessionRecord = typeof AuthSessionRecord.Type;
export declare const CreateAuthSessionInput: Schema.Struct<{
    readonly sessionId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "AuthSessionId">;
    readonly subject: Schema.String;
    readonly scopes: Schema.$Array<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>;
    readonly method: Schema.Literals<readonly ["browser-session-cookie", "bearer-access-token", "dpop-access-token"]>;
    readonly client: Schema.Struct<{
        readonly label: Schema.NullOr<Schema.String>;
        readonly ipAddress: Schema.NullOr<Schema.String>;
        readonly userAgent: Schema.NullOr<Schema.String>;
        readonly deviceType: Schema.Literals<readonly ["desktop", "mobile", "tablet", "bot", "unknown"]>;
        readonly os: Schema.NullOr<Schema.String>;
        readonly browser: Schema.NullOr<Schema.String>;
    }>;
    readonly issuedAt: Schema.DateTimeUtcFromString;
    readonly expiresAt: Schema.DateTimeUtcFromString;
}>;
export type CreateAuthSessionInput = typeof CreateAuthSessionInput.Type;
export declare const CreateReplacingActiveAuthSessionInput: Schema.Struct<{
    readonly session: Schema.Struct<{
        readonly sessionId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "AuthSessionId">;
        readonly subject: Schema.String;
        readonly scopes: Schema.$Array<Schema.Literals<readonly ["orchestration:read", "orchestration:operate", "settings:write", "providers:manage", "environment:maintain", "preview:operate", "diagnostics:read", "terminal:read", "terminal:operate", "filesystem:read", "filesystem:write", "review:write", "source-control:write", "access:read", "access:write", "relay:read", "relay:write"]>>;
        readonly method: Schema.Literals<readonly ["browser-session-cookie", "bearer-access-token", "dpop-access-token"]>;
        readonly client: Schema.Struct<{
            readonly label: Schema.NullOr<Schema.String>;
            readonly ipAddress: Schema.NullOr<Schema.String>;
            readonly userAgent: Schema.NullOr<Schema.String>;
            readonly deviceType: Schema.Literals<readonly ["desktop", "mobile", "tablet", "bot", "unknown"]>;
            readonly os: Schema.NullOr<Schema.String>;
            readonly browser: Schema.NullOr<Schema.String>;
        }>;
        readonly issuedAt: Schema.DateTimeUtcFromString;
        readonly expiresAt: Schema.DateTimeUtcFromString;
    }>;
    readonly revokedAt: Schema.DateTimeUtcFromString;
    readonly replaceSessionId: Schema.optionalKey<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "AuthSessionId">>;
}>;
export type CreateReplacingActiveAuthSessionInput = typeof CreateReplacingActiveAuthSessionInput.Type;
export declare const GetAuthSessionByIdInput: Schema.Struct<{
    readonly sessionId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "AuthSessionId">;
}>;
export type GetAuthSessionByIdInput = typeof GetAuthSessionByIdInput.Type;
export declare const ListActiveAuthSessionsInput: Schema.Struct<{
    readonly now: Schema.DateTimeUtcFromString;
    readonly connectedSessionIds: Schema.optionalKey<Schema.$Array<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "AuthSessionId">>>;
}>;
export type ListActiveAuthSessionsInput = typeof ListActiveAuthSessionsInput.Type;
export declare const RevokeAuthSessionInput: Schema.Struct<{
    readonly sessionId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "AuthSessionId">;
    readonly revokedAt: Schema.DateTimeUtcFromString;
}>;
export type RevokeAuthSessionInput = typeof RevokeAuthSessionInput.Type;
export declare const RevokeOtherAuthSessionsInput: Schema.Struct<{
    readonly currentSessionId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "AuthSessionId">;
    readonly revokedAt: Schema.DateTimeUtcFromString;
}>;
export type RevokeOtherAuthSessionsInput = typeof RevokeOtherAuthSessionsInput.Type;
export declare const SetAuthSessionLastConnectedAtInput: Schema.Struct<{
    readonly sessionId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "AuthSessionId">;
    readonly lastConnectedAt: Schema.DateTimeUtcFromString;
}>;
export type SetAuthSessionLastConnectedAtInput = typeof SetAuthSessionLastConnectedAtInput.Type;
export declare const SetAuthSessionClientConnectionInput: Schema.Struct<{
    readonly sessionId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "AuthSessionId">;
    readonly surface: Schema.NullOr<Schema.Literals<readonly ["web", "desktop", "mobile", "cli"]>>;
    readonly appVersion: Schema.NullOr<Schema.String>;
}>;
export type SetAuthSessionClientConnectionInput = typeof SetAuthSessionClientConnectionInput.Type;
declare const AuthSessionRepository_base: Context.ServiceClass<AuthSessionRepository, "t3/persistence/AuthSessions/AuthSessionRepository", {
    readonly create: (input: CreateAuthSessionInput) => Effect.Effect<void, AuthSessionRepositoryError>;
    readonly createReplacingActive: (input: CreateReplacingActiveAuthSessionInput) => Effect.Effect<readonly AuthSessionId[], AuthSessionRepositoryError>;
    readonly createIfAbsent: (input: CreateAuthSessionInput) => Effect.Effect<void, AuthSessionRepositoryError>;
    readonly getById: (input: GetAuthSessionByIdInput) => Effect.Effect<Option.Option<AuthSessionRecord>, AuthSessionRepositoryError>;
    readonly listActive: (input: ListActiveAuthSessionsInput) => Effect.Effect<readonly AuthSessionRecord[], AuthSessionRepositoryError>;
    readonly revoke: (input: RevokeAuthSessionInput) => Effect.Effect<boolean, AuthSessionRepositoryError>;
    readonly revokeAllExcept: (input: RevokeOtherAuthSessionsInput) => Effect.Effect<readonly AuthSessionId[], AuthSessionRepositoryError>;
    readonly setLastConnectedAt: (input: SetAuthSessionLastConnectedAtInput) => Effect.Effect<void, AuthSessionRepositoryError>;
    readonly setClientConnection: (input: SetAuthSessionClientConnectionInput) => Effect.Effect<void, AuthSessionRepositoryError>;
}>;
export declare class AuthSessionRepository extends AuthSessionRepository_base {
}
/** @public */
export declare const make: Effect.Effect<{
    create: (input: CreateAuthSessionInput) => Effect.Effect<void, AuthSessionRepositoryError>;
    createReplacingActive: (input: CreateReplacingActiveAuthSessionInput) => Effect.Effect<ReadonlyArray<AuthSessionId>, AuthSessionRepositoryError>;
    createIfAbsent: (input: CreateAuthSessionInput) => Effect.Effect<void, AuthSessionRepositoryError>;
    getById: (input: GetAuthSessionByIdInput) => Effect.Effect<Option.Option<AuthSessionRecord>, AuthSessionRepositoryError>;
    listActive: (input: ListActiveAuthSessionsInput) => Effect.Effect<ReadonlyArray<AuthSessionRecord>, AuthSessionRepositoryError>;
    revoke: (input: RevokeAuthSessionInput) => Effect.Effect<boolean, AuthSessionRepositoryError>;
    revokeAllExcept: (input: RevokeOtherAuthSessionsInput) => Effect.Effect<ReadonlyArray<AuthSessionId>, AuthSessionRepositoryError>;
    setLastConnectedAt: (input: SetAuthSessionLastConnectedAtInput) => Effect.Effect<void, AuthSessionRepositoryError>;
    setClientConnection: (input: SetAuthSessionClientConnectionInput) => Effect.Effect<void, AuthSessionRepositoryError>;
}, never, SqlClient.SqlClient>;
export declare const layer: Layer.Layer<AuthSessionRepository, never, SqlClient.SqlClient>;
export {};
