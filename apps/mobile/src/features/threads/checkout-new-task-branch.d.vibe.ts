import type { EnvironmentProject } from "@t3tools/client-runtime/state/shell";
import type { VcsRef } from "@t3tools/client-runtime/state/vcs";
import { type AtomCommandResult } from "@t3tools/client-runtime/state/runtime";
import type { VcsListRefsInput, VcsListRefsResult, VcsSwitchRefInput, VcsSwitchRefResult } from "@t3tools/contracts";
/** @throws {never} */
export declare function checkoutNewTaskBranch<E>(input: {
    readonly branch: VcsRef;
    readonly project: Pick<EnvironmentProject, "environmentId" | "workspaceRoot"> | null;
    readonly workspaceMode: "local" | "worktree";
    readonly readRefs: (request: {
        readonly environmentId: EnvironmentProject["environmentId"];
        readonly input: VcsListRefsInput;
    }) => Promise<AtomCommandResult<VcsListRefsResult, E>>;
    readonly switchRef: (request: {
        readonly environmentId: EnvironmentProject["environmentId"];
        readonly input: VcsSwitchRefInput;
    }) => Promise<AtomCommandResult<VcsSwitchRefResult, E>>;
}): Promise<AtomCommandResult<VcsRef, E | Error>>;
