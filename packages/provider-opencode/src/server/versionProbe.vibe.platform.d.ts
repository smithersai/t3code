import * as Effect from "effect/Effect";
import * as HttpClient from "effect/http/HttpClient";
import * as OpenCodeRuntime from "./OpenCodeRuntime.ts";
export interface ProbedOpenCode {
    readonly generation: "v1" | "v2";
    readonly version: string;
}
export declare function probed(version: string | null | undefined): ProbedOpenCode | undefined;
export declare function classifyOpenCodeProbeResponse(path: "/api/info" | "/global/health", response: {
    readonly status: number;
    readonly contentType: string | undefined;
    readonly body: string;
}): ProbedOpenCode | "unauthorized" | undefined;
export declare const probeOpenCodeServer: (serverUrl: string, serverPassword: string) => Effect.Effect<ProbedOpenCode, OpenCodeRuntime.OpenCodeRuntimeError, HttpClient.HttpClient>;
