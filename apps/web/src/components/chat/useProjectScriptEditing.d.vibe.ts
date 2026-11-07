import type { ProjectScript, EnvironmentId } from "@t3tools/contracts";
import type { UnifiedSettings } from "@t3tools/contracts/settings";
import { type AtomCommandResult } from "@t3tools/client-runtime/state/runtime";
import type { EnvironmentProject } from "@t3tools/client-runtime/state/shell";
import { type NewProjectScriptInput } from "../ProjectScriptsControl";
/** Write script settings before reconciling shortcuts in environment keybindings. */
export declare function useProjectScriptEditing(input: {
    readonly environmentId: EnvironmentId;
    readonly project: EnvironmentProject | null;
    readonly scripts: ReadonlyArray<ProjectScript>;
    readonly settings: UnifiedSettings;
}): {
    saveProjectScript: (input: NewProjectScriptInput) => Promise<AtomCommandResult<void, unknown>>;
    updateProjectScript: (scriptId: string, input: NewProjectScriptInput) => Promise<AtomCommandResult<void, unknown>>;
    deleteProjectScript: (scriptId: string) => Promise<AtomCommandResult<void, unknown>>;
};
