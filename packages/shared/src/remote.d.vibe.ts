import * as Schema from "effect/Schema";
/** @throws {never} */
export declare const readHashParams: (url: URL) => URLSearchParams;
declare const RemoteBackendUrlMissingError_base: Schema.Class<RemoteBackendUrlMissingError, Schema.TaggedStruct<"RemoteBackendUrlMissingError", {}>, import("effect/Cause").YieldableError>;
export declare class RemoteBackendUrlMissingError extends RemoteBackendUrlMissingError_base {
    get message(): string;
}
declare const RemotePairingUrlInvalidError_base: Schema.Class<RemotePairingUrlInvalidError, Schema.TaggedStruct<"RemotePairingUrlInvalidError", {
    readonly cause: Schema.optional<Schema.Defect>;
    readonly protocol: Schema.optional<Schema.String>;
}>, import("effect/Cause").YieldableError>;
export declare class RemotePairingUrlInvalidError extends RemotePairingUrlInvalidError_base {
    get message(): string;
}
declare const RemoteBackendUrlInvalidError_base: Schema.Class<RemoteBackendUrlInvalidError, Schema.TaggedStruct<"RemoteBackendUrlInvalidError", {
    readonly source: Schema.Literals<readonly ["direct-host", "hosted-pairing-host"]>;
    readonly cause: Schema.optional<Schema.Defect>;
    readonly protocol: Schema.optional<Schema.String>;
}>, import("effect/Cause").YieldableError>;
export declare class RemoteBackendUrlInvalidError extends RemoteBackendUrlInvalidError_base {
    get message(): string;
}
declare const RemotePairingTokenMissingError_base: Schema.Class<RemotePairingTokenMissingError, Schema.TaggedStruct<"RemotePairingTokenMissingError", {
    readonly host: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class RemotePairingTokenMissingError extends RemotePairingTokenMissingError_base {
    get message(): string;
}
declare const RemotePairingCodeMissingError_base: Schema.Class<RemotePairingCodeMissingError, Schema.TaggedStruct<"RemotePairingCodeMissingError", {
    readonly host: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class RemotePairingCodeMissingError extends RemotePairingCodeMissingError_base {
    get message(): string;
}
export declare const RemotePairingTargetError: Schema.Union<readonly [typeof RemoteBackendUrlMissingError, typeof RemotePairingUrlInvalidError, typeof RemoteBackendUrlInvalidError, typeof RemotePairingTokenMissingError, typeof RemotePairingCodeMissingError]>;
export type RemotePairingTargetError = typeof RemotePairingTargetError.Type;
export interface ResolvedRemotePairingTarget {
    readonly credential: string;
    readonly httpBaseUrl: string;
    readonly wsBaseUrl: string;
}
export interface HostedPairingRequest {
    readonly host: string;
    readonly token: string;
    readonly label: string;
}
/** @throws {never} */
export declare const getPairingTokenFromUrl: (url: URL) => string | null;
/** @throws {never} */
export declare const stripPairingTokenFromUrl: (url: URL) => URL;
/** @throws {never} */
export declare const setPairingTokenOnUrl: (url: URL, credential: string) => URL;
/** @throws {never} */
export declare const readHostedPairingRequest: (url: URL) => HostedPairingRequest | null;
/**
 * Wraps a pairing URL in the `t3code://pair` link that desktop opens and mobile scans.
 * @throws {never}
 */
export declare const buildPairingAppLink: (pairingUrl: string) => string;
/**
 * Reads the pairing URL from a `t3code://pair` link on any app channel scheme.
 * @throws {never}
 */
export declare const readPairingAppLink: (value: string) => string | null;
/** @throws {never} */
export declare const resolveRemotePairingTarget: (input: {
    readonly pairingUrl?: string;
    readonly host?: string;
    readonly pairingCode?: string;
}) => ResolvedRemotePairingTarget;
export {};
