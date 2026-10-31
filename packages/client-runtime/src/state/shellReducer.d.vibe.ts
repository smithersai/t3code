import { type OrchestrationV2ShellSnapshot, type OrchestrationV2ShellStreamItem, OrchestrationV2ThreadShell } from "@t3tools/contracts";
export declare function sameThreadPullRequests(left: OrchestrationV2ThreadShell["pullRequests"], right: OrchestrationV2ThreadShell["pullRequests"]): boolean;
/**
 * Links are compared apart from the rest of the row because a deferred snapshot arrives without
 * them; such a row keeps its links until they fill in.
 */
export declare function reuseUnchangedThreadShells(previous: OrchestrationV2ShellSnapshot | null, next: OrchestrationV2ShellSnapshot): OrchestrationV2ShellSnapshot;
export interface MergeShellSnapshotOptions {
    /**
     * Metadata-only enrichment refresh: structure and sequence never change;
     * listed roots accept identity exactly (including null).
     * Omit this options object for authoritative HTTP/initial WebSocket snapshots.
     */
    readonly resolvedRepositoryIdentityRoots: ReadonlyArray<string>;
}
export declare function mergeShellSnapshotProjects(previous: OrchestrationV2ShellSnapshot | null | undefined, next: OrchestrationV2ShellSnapshot, options?: MergeShellSnapshotOptions): OrchestrationV2ShellSnapshot;
export declare function applyShellStreamEvent(snapshot: OrchestrationV2ShellSnapshot, event: Exclude<OrchestrationV2ShellStreamItem, {
    readonly kind: "snapshot";
} | {
    readonly kind: "synchronized";
}>): OrchestrationV2ShellSnapshot;
