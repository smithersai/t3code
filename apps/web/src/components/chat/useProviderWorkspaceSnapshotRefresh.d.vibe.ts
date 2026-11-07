import { type EnvironmentId, type ProviderInstanceId } from "@t3tools/contracts";
/**
 * Keeps the selected provider's workspace snapshot fresh for the composer's
 * cwd while mounted. Returns a check to run when the user types.
 */
export declare function useProviderWorkspaceSnapshotRefresh(input: {
    readonly environmentId: EnvironmentId;
    readonly gitCwd: string | null;
    readonly instanceId: ProviderInstanceId | undefined;
}): () => void;
