import { type EnvironmentId, type ProjectScript, type T3ProjectFileScript } from "@t3tools/contracts";
import React from "react";
import { type NewProjectScriptInput, type ProjectScriptActionResult } from "./projectScriptEditor";
export type { NewProjectScriptInput, ProjectScriptActionResult };
interface ProjectScriptsControlProps {
    displayMode?: "toolbar" | "panel";
    presentation?: "toolbar" | "menu";
    /** @throws {never} */
    onRequestMenuClose?: () => void;
    environmentId: EnvironmentId;
    scripts: ReadonlyArray<ProjectScript>;
    fileScripts?: ReadonlyArray<T3ProjectFileScript>;
    preferredScriptId?: string | null;
    onRunScript?: (
    /** @throws {never} */
    (script: ProjectScript) => void) | undefined;
    /** @throws {never} */
    onAddScript: (input: NewProjectScriptInput) => Promise<ProjectScriptActionResult>;
    /** @throws {never} */
    onUpdateScript: (scriptId: string, input: NewProjectScriptInput) => Promise<ProjectScriptActionResult>;
    /** @throws {never} */
    onDeleteScript: (scriptId: string) => Promise<ProjectScriptActionResult>;
}
/** @throws {never} */
export default function ProjectScriptsControl({ displayMode, presentation, onRequestMenuClose, environmentId, scripts, fileScripts, preferredScriptId, onRunScript, onAddScript, onUpdateScript, onDeleteScript, }: ProjectScriptsControlProps): React.JSX.Element;
