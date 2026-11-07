import * as Schema from "effect/Schema";
/**
 * A link from this environment to another one (the peer). This environment
 * signed in to the peer's `/mcp` as an outside agent, with a pairing code from
 * the peer, so its agents can work there. The peer enforces the access chosen
 * at linking, and revokes the link from its own Connections.
 */
export declare const PeerLink: Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly label: Schema.String;
    /** Addresses the peer was linked at, tried in order. */
    readonly urls: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly access: Schema.Literals<readonly ["read-only", "approval-required", "auto-accept-edits", "auto", "full-access"]>;
    readonly linkedAt: Schema.DateTimeUtc;
    readonly expiresAt: Schema.DateTimeUtc;
    readonly lastReachedAt: Schema.NullOr<Schema.DateTimeUtc>;
    readonly lastError: Schema.NullOr<Schema.String>;
}>;
export type PeerLink = typeof PeerLink.Type;
/** Whether a link can be used now, as worked out when it is listed. */
export declare const PeerLinkStatus: Schema.Literals<readonly ["reachable", "unreachable", "expired"]>;
export type PeerLinkStatus = typeof PeerLinkStatus.Type;
export declare const PeerLinkSummary: Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly label: Schema.String;
    /** Addresses the peer was linked at, tried in order. */
    readonly urls: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly access: Schema.Literals<readonly ["read-only", "approval-required", "auto-accept-edits", "auto", "full-access"]>;
    readonly linkedAt: Schema.DateTimeUtc;
    readonly expiresAt: Schema.DateTimeUtc;
    readonly lastReachedAt: Schema.NullOr<Schema.DateTimeUtc>;
    readonly lastError: Schema.NullOr<Schema.String>;
    readonly status: Schema.Literals<readonly ["reachable", "unreachable", "expired"]>;
}>;
export type PeerLinkSummary = typeof PeerLinkSummary.Type;
export declare const PeerLinkCreateInput: Schema.Struct<{
    /** Where the peer answers: an https, Tailscale, LAN or loopback base URL. */
    readonly url: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    /** More addresses for the same peer, tried after `url`. */
    readonly alternateUrls: Schema.optionalKey<Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>>;
    /** A pairing code from the peer (`t3 pair` there, or its Connections settings). */
    readonly pairingCode: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly access: Schema.Literals<readonly ["read-only", "approval-required", "auto-accept-edits", "auto", "full-access"]>;
    /**
     * The environment the user means. Addresses that answer as another one are
     * skipped, and only those that answer as this one are kept.
     */
    readonly expectedEnvironmentId: Schema.optionalKey<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
    /** What the user calls that environment, to name it when it cannot be reached. */
    readonly expectedLabel: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type PeerLinkCreateInput = typeof PeerLinkCreateInput.Type;
export declare const PeerLinkRemoveInput: Schema.Struct<{
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
}>;
export type PeerLinkRemoveInput = typeof PeerLinkRemoveInput.Type;
export declare const PeerLinkRemoveResult: Schema.Struct<{
    readonly removed: Schema.Boolean;
}>;
export type PeerLinkRemoveResult = typeof PeerLinkRemoveResult.Type;
declare const PeerLinkError_base: Schema.Class<PeerLinkError, Schema.TaggedStruct<"PeerLinkError", {
    readonly reason: Schema.Literals<readonly ["unreachable", "not_a_t3_environment", "incompatible", "self", "pairing_rejected", "expired", "unknown_link", "storage", "disabled"]>;
    readonly message: Schema.String;
    readonly cause: Schema.optionalKey<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
/** Why linking or calling a peer failed, in words a user can act on. */
export declare class PeerLinkError extends PeerLinkError_base {
}
/**
 * The user's answer to an agent asking to link an environment. The pairing
 * code is used once to link and is never recorded; the thread learns only the
 * outcome and the access the user chose.
 */
export declare const PeerLinkRequestAnswerInput: Schema.Struct<{
    readonly threadId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">;
    readonly turnItemId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "TurnItemId">;
    readonly answer: Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"link">;
        /** The machine the user picked, when they picked one rather than typing an address. */
        readonly environmentId: Schema.optionalKey<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
        /** What the client calls that machine. */
        readonly label: Schema.optionalKey<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        /** The addresses the client knows for that machine, most preferred first. */
        readonly urls: Schema.NonEmptyArray<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly access: Schema.Literals<readonly ["read-only", "approval-required", "auto-accept-edits", "auto", "full-access"]>;
        readonly pairingCode: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"use-existing">;
        readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"decline">;
    }>]>;
}>;
export type PeerLinkRequestAnswerInput = typeof PeerLinkRequestAnswerInput.Type;
export declare const PeerLinkRequestFailureReason: Schema.Literals<("already_answered" | "load_failed" | "not_found" | "record_failed")[]>;
export type PeerLinkRequestFailureReason = typeof PeerLinkRequestFailureReason.Type;
declare const PeerLinkRequestError_base: Schema.Class<PeerLinkRequestError, Schema.TaggedStruct<"PeerLinkRequestError", {
    readonly reason: Schema.Literals<("already_answered" | "load_failed" | "not_found" | "record_failed")[]>;
    readonly cause: Schema.optionalKey<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
/**
 * Answering a link request failed before anything was linked. A link the
 * other environment refused is not this error: the card records it as failed.
 */
export declare class PeerLinkRequestError extends PeerLinkRequestError_base {
    get message(): string;
}
export {};
