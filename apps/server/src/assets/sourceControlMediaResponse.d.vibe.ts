import * as Effect from "effect/Effect";
import { HttpServerResponse } from "effect/http";
import * as BuiltInDrivers from "../sourceControl/builtInDrivers.ts";
export declare const sourceControlMediaResponse: (asset: {
    readonly url: string;
    readonly cwd: string;
    readonly expiresAt: number;
}, requestHeaders: Record<string, string | undefined>) => Effect.Effect<HttpServerResponse.HttpServerResponse, import("effect/http/HttpClientError").HttpClientError, import("effect/Scope").Scope | BuiltInDrivers.SourceControlDrivers>;
