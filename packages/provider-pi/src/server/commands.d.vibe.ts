import { type ServerProviderSkill, type ServerProviderSlashCommand } from "@t3tools/contracts";
export interface PiCompactCommand {
    readonly customInstructions?: string;
}
/** @throws {never} */
export declare function parsePiCompactCommand(text: string): PiCompactCommand | null;
/** @throws {never} */
export declare function withPiBuiltinSlashCommands(commands: ReadonlyArray<ServerProviderSlashCommand>): ReadonlyArray<ServerProviderSlashCommand>;
export interface PiDiscoveredCommands {
    readonly slashCommands: ReadonlyArray<ServerProviderSlashCommand>;
    readonly skills: ReadonlyArray<ServerProviderSkill>;
}
/** @throws {never} */
export declare function parsePiDiscoveredCommands(data: unknown): PiDiscoveredCommands;
