import * as Effect from "effect/Effect";
import { HttpClient } from "effect/http";
export declare const waitForHttpReady: <E>(input: {
    readonly baseUrl: string;
    readonly path?: string;
    readonly timeoutMs?: number;
    readonly intervalMs?: number;
    readonly probeTimeoutMs?: number;
    /** @throws {never} */
    readonly makeError: (info: {
        readonly requestUrl: string;
        readonly probeTimeoutMs: number;
        readonly attempt: number;
        readonly cause: unknown;
    }) => E;
}) => Effect.Effect<void, E, HttpClient.HttpClient>;
