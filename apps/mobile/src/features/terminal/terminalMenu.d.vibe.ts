import { type KnownTerminalSession } from "@t3tools/client-runtime/state/terminal";
import { type ProjectScript } from "@t3tools/contracts";
export { getTerminalLabel, nextTerminalId, resolveTerminalSessionLabel, } from "@t3tools/shared/terminalLabels";
export interface TerminalMenuSession {
    readonly terminalId: string;
    readonly cwd: string | null;
    readonly status: "starting" | "running" | "exited" | "error" | "closed";
    readonly hasRunningSubprocess: boolean;
    readonly displayLabel: string;
    readonly updatedAt: string | null;
}
export declare function basename(input: string | null): string | null;
export declare function getTerminalStatusLabel(input: {
    readonly status: TerminalMenuSession["status"];
    readonly hasRunningSubprocess?: boolean;
}): string;
/** Count the mounted terminal before sessions load, or new-terminal navigation may replace it with itself. */
export declare function nextOpenTerminalId(input: {
    readonly listedTerminalIds: ReadonlyArray<string>;
    readonly activeRouteTerminalId?: string | null;
    readonly uniqueSuffix?: string;
}): string;
export declare function buildTerminalMenuSessions(input: {
    readonly knownSessions: ReadonlyArray<KnownTerminalSession>;
    readonly workspaceRoot: string | null;
    readonly currentSession?: TerminalMenuSession | null;
}): ReadonlyArray<TerminalMenuSession>;
/** Returns null when no other live session remains; dismiss the terminal UI. */
export declare function previousLiveTerminalId(input: {
    readonly sessions: ReadonlyArray<TerminalMenuSession>;
    readonly exitedTerminalId: string;
}): string | null;
export declare function resolveProjectScriptTerminalId(input: {
    readonly existingTerminalIds: ReadonlyArray<string>;
    readonly hasRunningTerminal: boolean;
    readonly uniqueSuffix?: string;
}): string;
export declare function projectScriptMenuIcon(icon: ProjectScript["icon"]): "checklist" | "flask" | "hammer" | "ladybug" | "play" | "wrench.and.screwdriver";
