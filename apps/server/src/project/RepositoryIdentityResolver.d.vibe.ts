import type { RepositoryIdentity, SourceControlProviderError } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ProcessRunner from "../processRunner.ts";
export interface RepositoryIdentityResolverOptions {
    readonly cacheCapacity?: number;
    readonly positiveCacheTtl?: Duration.Input;
    readonly negativeCacheTtl?: Duration.Input;
    readonly refine?: (identity: RepositoryIdentity) => Effect.Effect<RepositoryIdentity, SourceControlProviderError>;
}
declare const RepositoryIdentityResolver_base: Context.ServiceClass<RepositoryIdentityResolver, "t3/project/RepositoryIdentityResolver", {
    readonly resolve: (cwd: string, options?: {
        readonly refresh?: boolean;
    }) => Effect.Effect<RepositoryIdentity | null>;
}>;
export declare class RepositoryIdentityResolver extends RepositoryIdentityResolver_base {
}
export declare const make: (options?: RepositoryIdentityResolverOptions) => Effect.Effect<{
    readonly resolve: (cwd: string, options?: {
        readonly refresh?: boolean;
    }) => Effect.Effect<RepositoryIdentity | null>;
}, never, ProcessRunner.ProcessRunner>;
export declare const layer: Layer.Layer<RepositoryIdentityResolver, never, import("effect/process/ChildProcessSpawner").ChildProcessSpawner>;
export {};
