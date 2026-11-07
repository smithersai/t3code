import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as HttpClient from "effect/http/HttpClient";
import * as GitCafeCredentials from "./GitCafeCredentials.vibe";
export declare const GitCafeApiFailure: Schema.Literals<readonly ["missing-tool", "unauthenticated", "rate-limited", "not-found", "failed"]>;
declare const GitCafeApiError_base: Schema.Class<GitCafeApiError, Schema.TaggedStruct<"GitCafeApiError", {
    readonly host: Schema.String;
    readonly operation: Schema.String;
    readonly status: Schema.NullOr<Schema.Int>;
    readonly reason: Schema.Literals<readonly ["missing-tool", "unauthenticated", "rate-limited", "not-found", "failed"]>;
    readonly detail: Schema.String;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class GitCafeApiError extends GitCafeApiError_base {
    get message(): string;
}
export interface GitCafeApiRequest {
    readonly host: string;
    readonly operation: string;
    readonly method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    readonly path: string;
    readonly body?: unknown;
}
declare const GitCafeApi_base: Context.ServiceClass<GitCafeApi, "@t3tools/source-control-gitcafe/server/GitCafeApi", {
    readonly request: (input: GitCafeApiRequest) => Effect.Effect<string, GitCafeApiError>;
}>;
export declare class GitCafeApi extends GitCafeApi_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly request: (input: GitCafeApiRequest) => Effect.Effect<string, GitCafeApiError>;
}, never, GitCafeCredentials.GitCafeCredentials | HttpClient.HttpClient>;
export declare const layer: Layer.Layer<GitCafeApi, never, GitCafeCredentials.GitCafeCredentials | HttpClient.HttpClient>;
export {};
