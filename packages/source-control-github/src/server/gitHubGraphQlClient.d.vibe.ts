import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import { HttpClient } from "effect/http";
import { GraphQLMiddleware, GraphQLProtocol } from "effect/graphql";
import * as GitHubRequestPolicy from "./GitHubRequestPolicy.vibe";
import { GitHubGraphQlTarget } from "./gitHubGraphQlClient.vibe.platform.js";
export { GitHubGraphQlTarget } from "./gitHubGraphQlClient.vibe.platform.js";
/** @throws {never} */
export declare const isNotFoundOnly: (error: unknown) => boolean;
declare const GitHubGraphQlAuth_base: GraphQLMiddleware.ServiceClass<GitHubGraphQlAuth, "@t3tools/source-control-github/server/gitHubGraphQlClient/GitHubGraphQlAuth", GitHubRequestPolicy.GitHubApiError, GitHubGraphQlTarget>;
/** Share REST's credentials/slots/quota/pause; leave non-rate-limit errors to each lookup. */
export declare class GitHubGraphQlAuth extends GitHubGraphQlAuth_base {
    static readonly layer: Layer.Layer<GitHubGraphQlAuth, never, GitHubRequestPolicy.GitHubRequestPolicy>;
}
export declare const layer: Layer.Layer<GitHubGraphQlAuth | GraphQLProtocol.GraphQLProtocol, never, GitHubRequestPolicy.GitHubRequestPolicy | HttpClient.HttpClient>;
/**
 * Isolate credentials/rate-limit scopes; transport URLs already separate hosts.
 * @throws {never}
 */
export declare const batchKey: (context: Context.Context<GitHubGraphQlTarget>) => string;
/** Map response errors to policy errors; callers map decode errors to read errors. */
export declare const call: {
    /** @throws {never} */
    (target: GitHubGraphQlTarget["Service"]): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E | GitHubRequestPolicy.GitHubApiNotFoundError | GitHubRequestPolicy.GitHubApiResponseError, Exclude<R, GitHubGraphQlTarget>>;
    <A, E, R>(effect: Effect.Effect<A, E, R>, target: GitHubGraphQlTarget["Service"]): Effect.Effect<A, E | GitHubRequestPolicy.GitHubApiNotFoundError | GitHubRequestPolicy.GitHubApiResponseError, Exclude<R, GitHubGraphQlTarget>>;
};
