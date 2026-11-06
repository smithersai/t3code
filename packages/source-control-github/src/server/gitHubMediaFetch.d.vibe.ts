import type { SourceControlMediaRequest } from "@t3tools/source-control-core/server/driver";
import * as Effect from "effect/Effect";
import { HttpClient, type HttpClientResponse } from "effect/http";
import * as GitHubCredentials from "./GitHubCredentials.vibe";
export declare const make: Effect.Effect<(request: SourceControlMediaRequest) => Effect.Effect<HttpClientResponse.HttpClientResponse | null, import("effect/http/HttpClientError").HttpClientError, import("effect/Scope").Scope>, never, GitHubCredentials.GitHubCredentials | HttpClient.HttpClient>;
