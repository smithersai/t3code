import type { EnvironmentId, ThreadId, ProjectId, ModelSelection, RuntimeMode, ProviderInteractionMode } from "@t3tools/contracts";
export declare function draftThreadShell(input: {
    readonly environmentId: EnvironmentId;
    readonly threadId: ThreadId;
    readonly projectId: ProjectId;
    readonly modelSelection: ModelSelection;
    readonly runtimeMode: RuntimeMode;
    readonly interactionMode: ProviderInteractionMode;
    readonly branch: string | null;
    readonly worktreePath: string | null;
    readonly createdAt: string;
}): import("@t3tools/client-runtime/state/models").EnvironmentThreadShell;
