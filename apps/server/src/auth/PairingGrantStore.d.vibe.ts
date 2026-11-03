import { type AuthEnvironmentScope, type AuthPairingLink, type ServerAuthBootstrapMethod } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Crypto from "@t3tools/shared/Crypto";
import * as DateTime from "effect/DateTime";
import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as Stream from "effect/Stream";
import * as ServerConfig from "../config.ts";
import * as AuthPairingLinks from "../persistence/AuthPairingLinks.ts";
export interface BootstrapGrant {
    readonly method: ServerAuthBootstrapMethod;
    readonly scopes: ReadonlyArray<AuthEnvironmentScope>;
    readonly subject: string;
    readonly label?: string;
    readonly proofKeyThumbprint?: string;
    readonly expiresAt: DateTime.DateTime;
}
declare const UnknownBootstrapCredentialError_base: Schema.Class<UnknownBootstrapCredentialError, Schema.TaggedStruct<"UnknownBootstrapCredentialError", {}>, import("effect/Cause").YieldableError>;
export declare class UnknownBootstrapCredentialError extends UnknownBootstrapCredentialError_base {
    get message(): string;
}
declare const ExpiredBootstrapCredentialError_base: Schema.Class<ExpiredBootstrapCredentialError, Schema.TaggedStruct<"ExpiredBootstrapCredentialError", {}>, import("effect/Cause").YieldableError>;
export declare class ExpiredBootstrapCredentialError extends ExpiredBootstrapCredentialError_base {
    get message(): string;
}
declare const BootstrapCredentialProofKeyMismatchError_base: Schema.Class<BootstrapCredentialProofKeyMismatchError, Schema.TaggedStruct<"BootstrapCredentialProofKeyMismatchError", {}>, import("effect/Cause").YieldableError>;
export declare class BootstrapCredentialProofKeyMismatchError extends BootstrapCredentialProofKeyMismatchError_base {
    get message(): string;
}
declare const UnavailableBootstrapCredentialError_base: Schema.Class<UnavailableBootstrapCredentialError, Schema.TaggedStruct<"UnavailableBootstrapCredentialError", {}>, import("effect/Cause").YieldableError>;
export declare class UnavailableBootstrapCredentialError extends UnavailableBootstrapCredentialError_base {
    get message(): string;
}
declare const BootstrapCredentialScopeNotGrantedError_base: Schema.Class<BootstrapCredentialScopeNotGrantedError, Schema.TaggedStruct<"BootstrapCredentialScopeNotGrantedError", {}>, import("effect/Cause").YieldableError>;
export declare class BootstrapCredentialScopeNotGrantedError extends BootstrapCredentialScopeNotGrantedError_base {
    get message(): string;
}
export declare const BootstrapCredentialInvalidError: Schema.Union<readonly [typeof UnknownBootstrapCredentialError, typeof ExpiredBootstrapCredentialError, typeof BootstrapCredentialProofKeyMismatchError, typeof UnavailableBootstrapCredentialError]>;
export type BootstrapCredentialInvalidError = typeof BootstrapCredentialInvalidError.Type;
declare const ActivePairingLinksLoadError_base: Schema.Class<ActivePairingLinksLoadError, Schema.TaggedStruct<"ActivePairingLinksLoadError", {
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ActivePairingLinksLoadError extends ActivePairingLinksLoadError_base {
    get message(): string;
}
declare const PairingLinkRevokeError_base: Schema.Class<PairingLinkRevokeError, Schema.TaggedStruct<"PairingLinkRevokeError", {
    readonly pairingLinkId: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class PairingLinkRevokeError extends PairingLinkRevokeError_base {
    get message(): string;
}
declare const PairingCredentialIssueError_base: Schema.Class<PairingCredentialIssueError, Schema.TaggedStruct<"PairingCredentialIssueError", {
    readonly pairingLinkId: Schema.String;
    readonly subject: Schema.String;
    readonly label: Schema.optional<Schema.String>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class PairingCredentialIssueError extends PairingCredentialIssueError_base {
    get message(): string;
}
declare const PairingCredentialRandomGenerationError_base: Schema.Class<PairingCredentialRandomGenerationError, Schema.TaggedStruct<"PairingCredentialRandomGenerationError", {
    readonly operation: Schema.Literals<readonly ["generate-id", "generate-token"]>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class PairingCredentialRandomGenerationError extends PairingCredentialRandomGenerationError_base {
    get message(): string;
}
declare const BootstrapCredentialConsumeError_base: Schema.Class<BootstrapCredentialConsumeError, Schema.TaggedStruct<"BootstrapCredentialConsumeError", {
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class BootstrapCredentialConsumeError extends BootstrapCredentialConsumeError_base {
    get message(): string;
}
declare const BootstrapCredentialConsumeAvailableError_base: Schema.Class<BootstrapCredentialConsumeAvailableError, Schema.TaggedStruct<"BootstrapCredentialConsumeAvailableError", {
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class BootstrapCredentialConsumeAvailableError extends BootstrapCredentialConsumeAvailableError_base {
    get message(): string;
}
declare const BootstrapCredentialLookupError_base: Schema.Class<BootstrapCredentialLookupError, Schema.TaggedStruct<"BootstrapCredentialLookupError", {
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class BootstrapCredentialLookupError extends BootstrapCredentialLookupError_base {
    get message(): string;
}
export declare const BootstrapCredentialInternalError: Schema.Union<readonly [typeof ActivePairingLinksLoadError, typeof PairingLinkRevokeError, typeof PairingCredentialIssueError, typeof PairingCredentialRandomGenerationError, typeof BootstrapCredentialConsumeError, typeof BootstrapCredentialConsumeAvailableError, typeof BootstrapCredentialLookupError]>;
export type BootstrapCredentialInternalError = typeof BootstrapCredentialInternalError.Type;
export declare const isBootstrapCredentialInternalError: <I>(input: I) => input is I & (ActivePairingLinksLoadError | BootstrapCredentialConsumeAvailableError | BootstrapCredentialConsumeError | BootstrapCredentialLookupError | PairingCredentialIssueError | PairingCredentialRandomGenerationError | PairingLinkRevokeError);
export declare const BootstrapCredentialError: Schema.Union<readonly [Schema.Union<readonly [typeof UnknownBootstrapCredentialError, typeof ExpiredBootstrapCredentialError, typeof BootstrapCredentialProofKeyMismatchError, typeof UnavailableBootstrapCredentialError]>, Schema.Union<readonly [typeof ActivePairingLinksLoadError, typeof PairingLinkRevokeError, typeof PairingCredentialIssueError, typeof PairingCredentialRandomGenerationError, typeof BootstrapCredentialConsumeError, typeof BootstrapCredentialConsumeAvailableError, typeof BootstrapCredentialLookupError]>, typeof BootstrapCredentialScopeNotGrantedError]>;
export type BootstrapCredentialError = typeof BootstrapCredentialError.Type;
export interface IssuedBootstrapCredential {
    readonly id: string;
    readonly credential: string;
    readonly label?: string;
    readonly proofKeyThumbprint?: string;
    readonly expiresAt: DateTime.Utc;
}
export type BootstrapCredentialChange = {
    readonly type: "pairingLinkUpserted";
    readonly pairingLink: AuthPairingLink;
} | {
    readonly type: "pairingLinkRemoved";
    readonly id: string;
};
declare const PairingGrantStore_base: Context.ServiceClass<PairingGrantStore, "t3/auth/PairingGrantStore", {
    readonly issueOneTimeToken: (input?: {
        readonly ttl?: Duration.Duration;
        readonly scopes?: readonly AuthEnvironmentScope[];
        readonly subject?: string;
        readonly label?: string;
        readonly proofKeyThumbprint?: string;
        readonly purpose?: "startup";
    }) => Effect.Effect<IssuedBootstrapCredential, BootstrapCredentialInternalError>;
    readonly listActive: () => Effect.Effect<readonly AuthPairingLink[], BootstrapCredentialInternalError>;
    readonly streamChanges: Stream.Stream<BootstrapCredentialChange>;
    readonly revoke: (id: string) => Effect.Effect<boolean, BootstrapCredentialInternalError>;
    readonly consume: (credential: string, input?: {
        readonly proofKeyThumbprint?: string;
        readonly requestedScopes?: readonly AuthEnvironmentScope[];
    }) => Effect.Effect<BootstrapGrant, BootstrapCredentialError>;
}>;
export declare class PairingGrantStore extends PairingGrantStore_base {
}
export declare const layer: Layer.Layer<AuthPairingLinks.AuthPairingLinkRepository | PairingGrantStore, never, Crypto.Crypto | ServerConfig.ServerConfig | import("effect/sql/SqlClient").SqlClient>;
export {};
