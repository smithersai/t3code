import { withLocalTracing } from "@t3tools/shared/relayTracing";
import * as Effect from "effect/Effect";
import { HttpServerRequest } from "effect/http";
export declare const traceRelayRequest: <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
/** Call only after T3 Connect verification to prevent trace injection. Authenticate on the local tracer and record its timing here. */
export declare const traceAuthenticatedRelayRequest: <A, E, R>(effect: Effect.Effect<A, E, R>, authentication: {
    readonly startTime: bigint;
    readonly endTime: bigint;
}) => Effect.Effect<A, E, R | HttpServerRequest.HttpServerRequest>;
export declare const traceLocalHandlerWork: typeof withLocalTracing;
