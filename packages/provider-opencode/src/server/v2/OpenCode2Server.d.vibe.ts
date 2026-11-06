import type { OpenCodeClient } from "@opencode/client/effect";
import * as Context from "effect/Context";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import * as OpenCodeRuntime from "../OpenCodeRuntime.ts";
import * as OpenCode2Client from "./OpenCode2Client.vibe";
export interface OpenCode2Connection extends OpenCode2Client.OpenCode2Api {
    readonly url: string;
    readonly version: string;
    readonly external: boolean;
}
declare const OpenCode2Server_base: Context.ServiceClass<OpenCode2Server, "@t3tools/provider-opencode/server/v2/OpenCode2Server", {
    readonly withConnection: <A, E, R>(use: (connection: OpenCode2Connection) => Effect.Effect<A, E, R>) => Effect.Effect<A, E | OpenCodeRuntime.OpenCodeRuntimeError, R>;
}>;
export declare class OpenCode2Server extends OpenCode2Server_base {
}
/**
 * OPENCODE_PASSWORD overrides OPENCODE_SERVER_PASSWORD; drop the inherited 1.x variable.
 * @throws {never}
 */
export declare const serverEnvironment: (environment: NodeJS.ProcessEnv, password: Redacted.Redacted) => NodeJS.ProcessEnv;
/** Only server info proves readiness; keep credential-bearing failure details out of client text. */
export declare const verifyServer: (client: OpenCodeClient) => Effect.Effect<string, OpenCodeRuntime.OpenCodeRuntimeError, never>;
export declare const make: (input: {
    readonly binaryPath: string;
    readonly serverUrl: string;
    readonly serverPassword: string;
    readonly directory: string;
    readonly environment: NodeJS.ProcessEnv;
}) => Effect.Effect<{
    readonly withConnection: <A, E, R>(use: (connection: OpenCode2Connection) => Effect.Effect<A, E, R>) => Effect.Effect<A, E | OpenCodeRuntime.OpenCodeRuntimeError, R>;
}, never, Crypto.Crypto | OpenCode2Client.OpenCode2Client | OpenCodeRuntime.OpenCodeRuntime | import("effect/Scope").Scope>;
export {};
