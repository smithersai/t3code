import { EnvironmentId } from "@t3tools/contracts";
import * as Schema from "effect/Schema";
declare const PrimaryConnectionTarget_base: Schema.Class<PrimaryConnectionTarget, Schema.TaggedStruct<"PrimaryConnectionTarget", {
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly label: Schema.String;
    readonly httpBaseUrl: Schema.String;
    readonly wsBaseUrl: Schema.String;
}>, {}>;
export declare class PrimaryConnectionTarget extends PrimaryConnectionTarget_base {
}
declare const BearerConnectionTarget_base: Schema.Class<BearerConnectionTarget, Schema.TaggedStruct<"BearerConnectionTarget", {
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly label: Schema.String;
    readonly connectionId: Schema.String;
}>, {}>;
export declare class BearerConnectionTarget extends BearerConnectionTarget_base {
}
declare const RelayConnectionTarget_base: Schema.Class<RelayConnectionTarget, Schema.TaggedStruct<"RelayConnectionTarget", {
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly label: Schema.String;
}>, {}>;
export declare class RelayConnectionTarget extends RelayConnectionTarget_base {
}
declare const SshConnectionTarget_base: Schema.Class<SshConnectionTarget, Schema.TaggedStruct<"SshConnectionTarget", {
    readonly environmentId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">;
    readonly label: Schema.String;
    readonly connectionId: Schema.String;
}>, {}>;
export declare class SshConnectionTarget extends SshConnectionTarget_base {
}
export declare const ConnectionTarget: Schema.Union<readonly [typeof PrimaryConnectionTarget, typeof BearerConnectionTarget, typeof RelayConnectionTarget, typeof SshConnectionTarget]>;
export type ConnectionTarget = typeof ConnectionTarget.Type;
export declare const PersistedConnectionTarget: Schema.Union<readonly [typeof BearerConnectionTarget, typeof RelayConnectionTarget, typeof SshConnectionTarget]>;
export type PersistedConnectionTarget = typeof PersistedConnectionTarget.Type;
export type ConnectionTargetKind = ConnectionTarget["_tag"];
export type NetworkStatus = "unknown" | "offline" | "online";
export declare const ConnectionTransientReason: Schema.Literals<readonly ["network", "timeout", "transport", "endpoint-unavailable", "relay-unavailable", "remote-unavailable", "session-pending"]>;
export type ConnectionTransientReason = typeof ConnectionTransientReason.Type;
export declare const ConnectionBlockedReason: Schema.Literals<readonly ["authentication", "configuration", "permission", "unsupported"]>;
export type ConnectionBlockedReason = typeof ConnectionBlockedReason.Type;
/** A part of the path to an environment: this device, T3 Connect, the host's tunnel, or T3 Code on the host. */
export declare const ConnectionHop: Schema.Literals<readonly ["device", "relay", "tunnel", "server"]>;
export type ConnectionHop = typeof ConnectionHop.Type;
/** The relay's endpoint failures plus the causes the client can name from other errors. */
export declare const ConnectionFailureCause: Schema.Literals<readonly ["tunnel_down", "origin_unreachable", "dns", "tls", "refused", "timeout", "invalid_response", "unknown", "clock_skew", "not_linked", "relay_error", "tunnel_pending", "tunnel_not_enabled"]>;
export type ConnectionFailureCause = typeof ConnectionFailureCause.Type;
declare const ConnectionTransientError_base: Schema.Class<ConnectionTransientError, Schema.TaggedStruct<"ConnectionTransientError", {
    readonly hop: Schema.optionalKey<Schema.Literals<readonly ["device", "relay", "tunnel", "server"]>>;
    readonly via: Schema.optionalKey<Schema.Literals<readonly ["relay", "direct"]>>;
    readonly failureCause: Schema.optionalKey<Schema.Literals<readonly ["tunnel_down", "origin_unreachable", "dns", "tls", "refused", "timeout", "invalid_response", "unknown", "clock_skew", "not_linked", "relay_error", "tunnel_pending", "tunnel_not_enabled"]>>;
    readonly httpStatus: Schema.optionalKey<Schema.Number>;
    readonly reason: Schema.Literals<readonly ["network", "timeout", "transport", "endpoint-unavailable", "relay-unavailable", "remote-unavailable", "session-pending"]>;
    readonly detail: Schema.String;
    readonly traceId: Schema.optionalKey<Schema.String>;
}>, import("effect/Cause").YieldableError>;
export declare class ConnectionTransientError extends ConnectionTransientError_base {
    get message(): string;
}
declare const ConnectionBlockedError_base: Schema.Class<ConnectionBlockedError, Schema.TaggedStruct<"ConnectionBlockedError", {
    readonly hop: Schema.optionalKey<Schema.Literals<readonly ["device", "relay", "tunnel", "server"]>>;
    readonly via: Schema.optionalKey<Schema.Literals<readonly ["relay", "direct"]>>;
    readonly failureCause: Schema.optionalKey<Schema.Literals<readonly ["tunnel_down", "origin_unreachable", "dns", "tls", "refused", "timeout", "invalid_response", "unknown", "clock_skew", "not_linked", "relay_error", "tunnel_pending", "tunnel_not_enabled"]>>;
    readonly httpStatus: Schema.optionalKey<Schema.Number>;
    readonly reason: Schema.Literals<readonly ["authentication", "configuration", "permission", "unsupported"]>;
    readonly detail: Schema.String;
    readonly traceId: Schema.optionalKey<Schema.String>;
    readonly serverUpdateRequired: Schema.optionalKey<Schema.Boolean>;
}>, import("effect/Cause").YieldableError>;
export declare class ConnectionBlockedError extends ConnectionBlockedError_base {
    get message(): string;
}
export type ConnectionAttemptError = ConnectionTransientError | ConnectionBlockedError;
export declare const DPOP_ACCESS_TOKEN_REFRESH_SKEW_MS = 60000;
export type PreparedHttpAuthorization = {
    readonly _tag: "Bearer";
    readonly token: string;
} | {
    readonly _tag: "Dpop";
    readonly accessToken: string;
    readonly expiresAtEpochMs: number;
};
export interface PreparedConnection {
    readonly environmentId: EnvironmentId;
    readonly label: string;
    readonly httpBaseUrl: string;
    readonly socketUrl: string;
    readonly httpAuthorization: PreparedHttpAuthorization | null;
    readonly target: ConnectionTarget;
}
export type SupervisorConnectionPhase = "available" | "offline" | "connecting" | "backoff" | "connected" | "blocked";
export type ConnectionAttemptStage = "preparing" | "opening" | "synchronizing";
export interface SupervisorConnectionState {
    readonly desired: boolean;
    readonly network: NetworkStatus;
    readonly phase: SupervisorConnectionPhase;
    readonly stage: ConnectionAttemptStage | null;
    readonly attempt: number;
    readonly generation: number;
    readonly lastFailure: ConnectionAttemptError | null;
    readonly retryAt: number | null;
}
export type ConnectionProjectionPhase = "disconnected" | "synchronizing" | "ready";
export declare function connectionProjectionPhase(state: SupervisorConnectionState): ConnectionProjectionPhase;
export declare const AVAILABLE_CONNECTION_STATE: SupervisorConnectionState;
export {};
