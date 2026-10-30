import { type ServerProviderSkill, type ServerProviderSlashCommand } from "@t3tools/contracts";
export interface PiCompactCommand {
    readonly customInstructions?: string;
}
export declare function parsePiCompactCommand(text: string): PiCompactCommand | null;
export declare function withPiBuiltinSlashCommands(commands: ReadonlyArray<ServerProviderSlashCommand>): ReadonlyArray<ServerProviderSlashCommand>;
export interface PiDiscoveredCommands {
    readonly slashCommands: ReadonlyArray<ServerProviderSlashCommand>;
    readonly skills: ReadonlyArray<ServerProviderSkill>;
}
export declare function parsePiDiscoveredCommands(data: unknown): PiDiscoveredCommands;
