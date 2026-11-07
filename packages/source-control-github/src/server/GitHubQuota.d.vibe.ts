import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as SourceControlRateLimit from "@t3tools/source-control-core/server/SourceControlRateLimit";
type GitHubQuotaResource = string;
declare const GitHubQuota_base: Context.ServiceClass<GitHubQuota, "@t3tools/source-control-github/server/GitHubQuota", {
    readonly admit: (host: string, resource: GitHubQuotaResource, options?: {
        readonly allowReserve: boolean;
    }) => Effect.Effect<void, SourceControlRateLimit.SourceControlRateLimitPausedError>;
    readonly observe: (host: string, headers: Readonly<Record<string, string | undefined>>) => Effect.Effect<void>;
}>;
/** Local debits would drift: 304s and requests that never reach GitHub spend nothing. */
export declare class GitHubQuota extends GitHubQuota_base {
}
export declare const layer: Layer.Layer<GitHubQuota, never, never>;
export {};
