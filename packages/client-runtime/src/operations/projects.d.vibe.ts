import type { EnvironmentConnectionPhase } from "../connection/presentation.js";
import type { CommandId, EnvironmentId, ProjectId, ProjectMutation, ServerConfig, SourceControlDiscoveryResult, SourceControlRepositoryInfo } from "@t3tools/contracts";
import { SourceControlProviderKind } from "@t3tools/contracts";
import type { EnvironmentProject } from "../state/models.vibe";
import type { SourceControlDefinition } from "../sourceControlClients.js";
export type AddProjectRemoteSource = SourceControlProviderKind | "url";
export declare function canCreateProjectInEnvironment(connectionPhase: EnvironmentConnectionPhase | null | undefined): boolean;
export declare function availableScratchWorkspaceRoot(connectionPhase: EnvironmentConnectionPhase | null | undefined, serverConfig: Pick<ServerConfig, "scratchWorkspaceRoot"> | null | undefined): string | null;
export interface AddProjectRemoteSourceReadinessEntry {
    readonly ready: boolean;
    readonly hint: string | null;
}
export type AddProjectRemoteSourceReadiness = (source: AddProjectRemoteSource) => AddProjectRemoteSourceReadinessEntry;
export type AddProjectCloneFlow = {
    readonly step: "repository";
    readonly environmentId: EnvironmentId;
    readonly source: AddProjectRemoteSource;
} | {
    readonly step: "confirm";
    readonly environmentId: EnvironmentId;
    readonly source: AddProjectRemoteSource;
    readonly repositoryInput: string;
    readonly repository: SourceControlRepositoryInfo | null;
    readonly remoteUrl: string;
};
export declare function addProjectRemoteSourceLabel(source: AddProjectRemoteSource): string;
export declare function addProjectRemoteSourcePathHint(source: AddProjectRemoteSource): string;
export declare function addProjectRemoteSourceProvider(source: AddProjectRemoteSource): SourceControlProviderKind | null;
export declare function parseAddProjectRemoteSource(value: string | null | undefined): AddProjectRemoteSource;
/**
 * The clone URL of `owner/name` on the public host of the host a repository reads as before it
 * reports one. Null when that host has no public host.
 */
export declare function defaultHostCloneUrl(repository: string): string | null;
export declare function normalizePastedCloneUrl(input: string): string;
export declare function getDefaultCloneUrl(repository: Pick<SourceControlRepositoryInfo, "provider" | "url" | "sshUrl">): string;
export declare function sortAddProjectProviderSources(readiness: AddProjectRemoteSourceReadiness): ReadonlyArray<SourceControlProviderKind>;
export declare function buildAddProjectRemoteSourceReadiness(discovery: SourceControlDiscoveryResult | null): AddProjectRemoteSourceReadiness;
export declare function getAddProjectInitialQuery(baseDirectory: string | null | undefined): string;
export declare function getCloneDirectoryName(repositoryOrRemoteUrl: string | null | undefined): string;
export declare function getCloneDestinationPath(directoryPath: string, directoryName: string | null | undefined): string;
export declare function getNewProjectPathPreview(newProjectsRoot: string, name: string): string;
export interface NewProjectPublishTarget {
    readonly definition: SourceControlDefinition;
    readonly owner: string | null;
}
export declare function getNewProjectPublishTargets(discovery: SourceControlDiscoveryResult | null): ReadonlyArray<NewProjectPublishTarget>;
export declare function getNewProjectPublishTarget(targets: ReadonlyArray<NewProjectPublishTarget>, kind: SourceControlProviderKind | null): NewProjectPublishTarget | null;
export declare function getNewProjectRepository(target: Pick<NewProjectPublishTarget, "owner">, workspaceRoot: string): string;
export declare function getCloneDestinationBrowsePath(input: {
    readonly browseDirectoryPath: string;
    readonly selectedDirectoryName: string;
    readonly cloneDirectoryName: string;
    readonly caseSensitive: boolean;
}): string;
export declare function resolveAddProjectPath(input: {
    readonly rawPath: string;
    readonly currentProjectCwd?: string | null;
    readonly platform: string;
}): {
    readonly ok: true;
    readonly path: string;
} | {
    readonly ok: false;
    readonly error: string;
};
export declare function findExistingAddProject(input: {
    readonly projects: ReadonlyArray<EnvironmentProject>;
    readonly environmentId: EnvironmentId;
    readonly path: string;
}): EnvironmentProject | null;
export declare function buildProjectCreateCommand(input: {
    readonly commandId: CommandId;
    readonly projectId: ProjectId;
    readonly workspaceRoot: string;
}): Extract<ProjectMutation, {
    type: "project.create";
}>;
