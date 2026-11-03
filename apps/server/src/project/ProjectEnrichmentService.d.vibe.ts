import type { RepositoryIdentity } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as PubSub from "effect/PubSub";
import type * as Scope from "effect/Scope";
import * as ProjectFaviconResolver from "./ProjectFaviconResolver.vibe";
import * as RepositoryIdentityResolver from "./RepositoryIdentityResolver.vibe";
export interface ProjectEnrichment {
    readonly repositoryIdentity: RepositoryIdentity | null;
    readonly faviconPath: string | null;
    readonly repositoryIdentityResolved: boolean;
}
export interface ProjectEnrichmentChange {
    readonly workspaceRoot: string;
    readonly enrichment: ProjectEnrichment;
    readonly repositoryIdentityResolved: boolean;
}
export interface ProjectEnrichmentServiceOptions {
    readonly cacheCapacity?: number;
    readonly maxPending?: number;
    readonly concurrency?: number;
    readonly successTtl?: Duration.Input;
    readonly faviconTtl?: Duration.Input;
    readonly failureTtl?: Duration.Input;
}
declare const ProjectEnrichmentService_base: Context.ServiceClass<ProjectEnrichmentService, "t3/project/ProjectEnrichmentService", {
    readonly peek: (workspaceRoot: string) => Effect.Effect<ProjectEnrichment>;
    readonly request: (workspaceRoot: string) => Effect.Effect<void>;
    readonly getAvailable: (workspaceRoot: string) => Effect.Effect<ProjectEnrichment>;
    readonly readRepositoryIdentity: (workspaceRoot: string) => Effect.Effect<RepositoryIdentity | null>;
    readonly invalidate: (workspaceRoots: Iterable<string>) => Effect.Effect<void>;
    readonly subscribeChanges: Effect.Effect<PubSub.Subscription<ProjectEnrichmentChange>, never, Scope.Scope>;
}>;
export declare class ProjectEnrichmentService extends ProjectEnrichmentService_base {
}
export declare const make: (options?: ProjectEnrichmentServiceOptions) => Effect.Effect<{
    readonly peek: (workspaceRoot: string) => Effect.Effect<ProjectEnrichment>;
    readonly request: (workspaceRoot: string) => Effect.Effect<void>;
    readonly getAvailable: (workspaceRoot: string) => Effect.Effect<ProjectEnrichment>;
    readonly readRepositoryIdentity: (workspaceRoot: string) => Effect.Effect<RepositoryIdentity | null>;
    readonly invalidate: (workspaceRoots: Iterable<string>) => Effect.Effect<void>;
    readonly subscribeChanges: Effect.Effect<PubSub.Subscription<ProjectEnrichmentChange>, never, Scope.Scope>;
}, never, ProjectFaviconResolver.ProjectFaviconResolver | RepositoryIdentityResolver.RepositoryIdentityResolver | Scope.Scope>;
export declare const layer: Layer.Layer<ProjectEnrichmentService, never, ProjectFaviconResolver.ProjectFaviconResolver | RepositoryIdentityResolver.RepositoryIdentityResolver>;
export {};
