import type { RelayManagedEndpointRuntimeConfig } from "@t3tools/contracts/relay";
import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
export type ManagedTunnelRegistrationResult = {
    readonly status: "not_linked" | "ready" | "unavailable" | "superseded" | "revoked";
} | {
    readonly status: "recovery_required";
    readonly config: RelayManagedEndpointRuntimeConfig;
};
export type ManagedTunnelStartupAction = {
    readonly action: "none";
} | {
    readonly action: "reconcile_link";
} | {
    readonly action: "request_recovery";
    readonly config: RelayManagedEndpointRuntimeConfig;
};
export declare function managedTunnelStartupAction(input: {
    readonly wantsCliLink: boolean;
    readonly registration: ManagedTunnelRegistrationResult;
}): ManagedTunnelStartupAction;
export declare const retryManagedTunnelRegistration: <A, E, R>(registration: Effect.Effect<A, E, R>, isRetryable: (error: E) => boolean, onRetryWindowExhausted?: Effect.Effect<void, never, R>) => Effect.Effect<A, E, R>;
/**
 * Relinks a desired link at startup. Past the retry window it keeps going only
 * while the relay itself is unavailable: a headless host has nobody to restart
 * it once the relay recovers, but a local failure (cloudflared that cannot run)
 * would otherwise relink, and provision a tunnel, forever.
 */
export declare const retryDesiredLinkReconcile: <A, E, R>(reconcile: Effect.Effect<A, E, R>, isRetryable: (error: E) => boolean, onRetryWindowExhausted: (error: E) => Effect.Effect<void, never, R>) => Effect.Effect<A, E, R>;
export declare const MANAGED_TUNNEL_FIRST_REGISTRATION_JITTER: Duration.Duration;
/**
 * Runs one recovery per request, one at a time: waits out the current
 * cooldown, then calls the relay, retrying it while it stays unavailable.
 */
export declare const makeManagedTunnelRecovery: <A, E, R>(options: {
    readonly recover: (config: RelayManagedEndpointRuntimeConfig) => Effect.Effect<A, E, R>;
    readonly isRetryable: (error: E) => boolean;
}) => Effect.Effect<(config: RelayManagedEndpointRuntimeConfig) => Effect.Effect<A, E, R>, never, never>;
