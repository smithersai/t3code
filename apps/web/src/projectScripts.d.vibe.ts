import { type KeybindingCommand, type ProjectScript } from "@t3tools/contracts";
export interface ProjectScriptInput {
    readonly name: ProjectScript["name"];
    readonly command: ProjectScript["command"];
    readonly icon: ProjectScript["icon"];
    readonly runOnWorktreeCreate: ProjectScript["runOnWorktreeCreate"];
    readonly waitForSetup: boolean;
    readonly runOnSettle: boolean;
    readonly previewUrl: Exclude<ProjectScript["previewUrl"], undefined> | null;
    readonly autoOpenPreview: boolean;
}
export declare function buildProjectScript(id: string, input: ProjectScriptInput): ProjectScript;
export declare function releaseClaimedRoles(script: ProjectScript, saved: ProjectScriptInput): ProjectScript;
export declare function commandForProjectScript(scriptId: string): KeybindingCommand | null;
export declare function projectScriptIdFromCommand(command: string): string | null;
export declare function nextProjectScriptId(name: string, existingIds: Iterable<string>): string;
export declare function primaryProjectScript(scripts: ReadonlyArray<ProjectScript>): ProjectScript | null;
