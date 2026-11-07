import { type ServerProviderSkill, type ServerProviderSlashCommand } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import { type ServerProviderDraft } from "@t3tools/provider-core/server/snapshotProbe";
import * as OpenCodeRuntime from "./OpenCodeRuntime.ts";
import type { ProbedOpenCode } from "./versionProbe.vibe";
import * as OpenCodeServerOwner from "./OpenCodeServerOwner.vibe";
interface OpenCodeRelease {
    readonly providerID: string;
    readonly family?: string | undefined;
    readonly released?: number | undefined;
    readonly deprecated?: boolean | undefined;
}
/** @throws {never} */
export declare function openCodeSkillsToServerProviderSkills(input: OpenCodeRuntime.OpenCodeInventory["skills"] | undefined): ReadonlyArray<ServerProviderSkill>;
/** @throws {never} */
export declare function openCodeCommandsToServerProviderSlashCommands(input: OpenCodeRuntime.OpenCodeInventory["commands"]): ReadonlyArray<ServerProviderSlashCommand>;
export declare const makePendingOpenCodeProvider: (openCodeSettings: {
    readonly enabled: boolean;
    readonly binaryPath: string;
    readonly serverUrl: string;
    readonly serverPassword: string;
    readonly customModels: readonly (string | {
        readonly slug: string;
        readonly name?: string | undefined;
        readonly capabilities?: {
            readonly optionDescriptors?: readonly ({
                readonly id: string;
                readonly label: string;
                readonly description?: string | undefined;
                readonly type: "select";
                readonly options: readonly {
                    readonly id: string;
                    readonly label: string;
                    readonly description?: string | undefined;
                    readonly isDefault?: boolean | undefined;
                }[];
                readonly currentValue?: string | undefined;
                readonly promptInjectedValues?: readonly string[] | undefined;
            } | {
                readonly id: string;
                readonly label: string;
                readonly description?: string | undefined;
                readonly type: "boolean";
                readonly currentValue?: boolean | undefined;
            })[] | undefined;
        } | undefined;
    })[];
}) => Effect.Effect<ServerProviderDraft>;
export interface OpenCode2Model extends OpenCodeRelease {
    readonly id: string;
    readonly name: string;
    readonly providerName?: string;
    readonly variants: ReadonlyArray<{
        readonly id: string;
    }>;
}
/** A cold server can list a partial catalog; two agreeing reads reduce that startup race. */
export declare const makeOpenCode2ModelLoader: <E>(list: Effect.Effect<ReadonlyArray<OpenCode2Model>, E>) => Effect.Effect<Effect.Effect<readonly OpenCode2Model[], E, never>, never, never>;
export interface OpenCode2Workspace {
    readonly skills: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
        readonly path: string;
        readonly description?: string | undefined;
    }>;
    readonly commands: ReadonlyArray<{
        readonly name: string;
        readonly description?: string | undefined;
    }>;
}
/**
 * A server scans a directory it has not served yet in the background: its first read lists
 * no commands at all (not even the built-ins), and `command.updated` plus `skill.updated`
 * for the directory end the scan. `scanned` must be listening before `read` runs, since
 * the read is what starts the scan.
 */
export declare const loadOpenCode2Workspace: <E>(read: Effect.Effect<OpenCode2Workspace, E, never>, scanned: Effect.Effect<void, never, never>) => Effect.Effect<OpenCode2Workspace, E, never>;
/** @throws {never} */
export declare function openCode2SkillsToServerProviderSkills(skills: OpenCode2Workspace["skills"]): ReadonlyArray<ServerProviderSkill>;
/** @throws {never} */
export declare function openCode2CommandsToServerProviderSlashCommands(commands: OpenCode2Workspace["commands"]): ReadonlyArray<ServerProviderSlashCommand>;
export declare const checkOpenCodeProviderStatus: (openCodeSettings: {
    readonly enabled: boolean;
    readonly binaryPath: string;
    readonly serverUrl: string;
    readonly serverPassword: string;
    readonly customModels: readonly (string | {
        readonly slug: string;
        readonly name?: string | undefined;
        readonly capabilities?: {
            readonly optionDescriptors?: readonly ({
                readonly id: string;
                readonly label: string;
                readonly description?: string | undefined;
                readonly type: "select";
                readonly options: readonly {
                    readonly id: string;
                    readonly label: string;
                    readonly description?: string | undefined;
                    readonly isDefault?: boolean | undefined;
                }[];
                readonly currentValue?: string | undefined;
                readonly promptInjectedValues?: readonly string[] | undefined;
            } | {
                readonly id: string;
                readonly label: string;
                readonly description?: string | undefined;
                readonly type: "boolean";
                readonly currentValue?: boolean | undefined;
            })[] | undefined;
        } | undefined;
    })[];
}, cwd: string, probeRuntime: Effect.Effect<ProbedOpenCode, OpenCodeRuntime.OpenCodeRuntimeError, never>, loadOpenCode2Models: Effect.Effect<readonly OpenCode2Model[], OpenCodeRuntime.OpenCodeRuntimeError, never>) => Effect.Effect<ServerProviderDraft, never, OpenCodeRuntime.OpenCodeRuntime | OpenCodeServerOwner.OpenCodeServerOwner>;
export {};
