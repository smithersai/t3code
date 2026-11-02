import { type AtomCommandResult } from "@t3tools/client-runtime/state/runtime";
import { type EnvironmentId, type ProjectId, type ProjectScript, type ResolvedKeybindingsConfig, type ServerSettings } from "@t3tools/contracts";
import type { NewProjectScriptInput } from "../projectScriptEditor";
export declare function useProjectScriptSettings(targets: readonly {
    environmentId: EnvironmentId;
    settings: ServerSettings;
    keybindings: ResolvedKeybindingsConfig;
    project?: {
        id: ProjectId;
        scripts: readonly ProjectScript[];
    };
}[]): {
    saving: boolean;
    persist: (transform: (current: readonly ProjectScript[]) => readonly ProjectScript[] | null, scriptId?: string, keybinding?: string | null) => Promise<AtomCommandResult<void, unknown>>;
    submit: (scriptId: string | null, input: NewProjectScriptInput) => Promise<AtomCommandResult<void, unknown>>;
};
