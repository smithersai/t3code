import * as Effect from "effect/Effect";
import * as HttpClient from "effect/http/HttpClient";
import * as OpenCodeRuntime from "./OpenCodeRuntime.ts";
import type { ProbedOpenCode } from "./versionProbe.vibe.platform.js";
export type { ProbedOpenCode } from "./versionProbe.vibe.platform.js";
/** @throws {never} */
export declare const classifyOpenCodeCliVersion: (output: string) => ProbedOpenCode | undefined;
export declare const probeOpenCodeRuntime: (settings: {
    readonly binaryPath: string;
    readonly serverUrl: string;
    readonly serverPassword: string;
}, environment?: NodeJS.ProcessEnv) => Effect.Effect<ProbedOpenCode, OpenCodeRuntime.OpenCodeRuntimeError, HttpClient.HttpClient | OpenCodeRuntime.OpenCodeRuntime>;
export declare const makeOpenCodeRuntimeProbe: <E>(probe: Effect.Effect<ProbedOpenCode, E>) => Effect.Effect<{
    get: Effect.Effect<ProbedOpenCode, E, never>;
    refresh: Effect.Effect<ProbedOpenCode, E, never>;
    lastSuccess: Effect.Effect<import("effect/Option").Option<ProbedOpenCode>, never, never>;
}, never, never>;
