import type { RelayEnvironmentEndpointFailure } from "@t3tools/contracts/relay";
import * as Effect from "effect/Effect";
export interface EndpointFailureDiagnosis {
    readonly endpointFailure: RelayEnvironmentEndpointFailure;
    readonly endpointStatus?: number;
}
/**
 * Cloudflare answers a Worker subrequest it cannot route with a plain-text body
 * such as `error code: 1033`. 1033 means no cloudflared connector is running for
 * the tunnel; 1016 means the origin hostname did not resolve.
 * @throws {never}
 */
export declare function classifyEndpointResponse(status: number, body: string): RelayEnvironmentEndpointFailure;
/**
 * Reads the error code from the transport failure's cause chain, such as undici's `ECONNREFUSED`.
 * @throws {never}
 */
export declare function classifyTransportFailure(cause: unknown): RelayEnvironmentEndpointFailure;
/** Turns a failed environment request into the cause the client shows the user. */
export declare const diagnoseEndpointFailure: (cause: unknown) => Effect.Effect<{
    endpointFailure: "dns" | "invalid_response" | "origin_unreachable" | "refused" | "timeout" | "tls" | "tunnel_down" | "unknown";
    endpointStatus?: never;
} | {
    endpointFailure: "dns" | "invalid_response" | "origin_unreachable" | "refused" | "timeout" | "tls" | "tunnel_down" | "unknown";
    endpointStatus: number;
}, never, never>;
