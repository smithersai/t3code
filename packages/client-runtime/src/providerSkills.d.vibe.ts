import { type EnvironmentId, type ProviderInstanceId, type ServerProvider, type ServerProviderSkill, type ServerProviderSlashCommand } from "@t3tools/contracts";
import { Atom } from "effect/reactivity";
import { type AtomCommand } from "./state/runtime.ts";
export type ProviderSkillSourceKind = "app" | "repo" | "project" | "personal" | "system" | "other";
/** @throws {never} */
export declare function dedupeProviderSkillsByName(skills: ReadonlyArray<ServerProviderSkill>): ServerProviderSkill[];
/**
 * Exclude disabled and agent-only skills (Claude Code's `user-invocable: false`).
 * Skills the agent cannot start on its own can still be invoked by users in the provider's native form.
 * @throws {never}
 */
export declare function isProviderSkillUserInvocable(skill: Pick<ServerProviderSkill, "enabled" | "userInvocable">): boolean;
/** @throws {never} */
export declare function getProviderSkillsForSlashMenu(skills: ReadonlyArray<ServerProviderSkill>, showSkillsInSlashMenu: boolean): ServerProviderSkill[];
/** @throws {never} */
export declare function getProviderSlashCommandsForSlashMenu(slashCommands: ReadonlyArray<ServerProviderSlashCommand>, visibleSkills: ReadonlyArray<ServerProviderSkill>): ServerProviderSlashCommand[];
/** @throws {never} */
export declare function resolveProviderSkillSourceKind(skill: Pick<ServerProviderSkill, "path" | "scope">): ProviderSkillSourceKind;
/** @throws {never} */
export declare function hasCompleteProviderWorkspaceSnapshot(provider: ServerProvider | null | undefined, cwd: string | null | undefined): boolean;
/** @throws {never} */
export declare function resolveProviderSkillsForCwd(provider: ServerProvider, cwd: string | null | undefined): ServerProvider["skills"];
/** @throws {never} */
export declare function resolveProviderSlashCommandsForCwd(provider: ServerProvider, cwd: string | null | undefined): ServerProvider["slashCommands"];
interface ProviderWorkspaceSnapshotRefreshTarget {
    readonly environmentId: EnvironmentId;
    readonly instanceId: ProviderInstanceId;
    readonly cwd: string;
}
/**
 * Keeps one environment/provider/cwd workspace snapshot fresh while mounted:
 * reading scans when it is missing or stale, and refreshing re-checks (the
 * composer does as the user types). It owns the retry timer, so the timer dies
 * with the last subscriber.
 * @throws {never}
 */
export declare function createProviderWorkspaceSnapshotRefreshAtomFamily(input: {
    /** @throws {never} */
    readonly providers: (environmentId: EnvironmentId) => Atom.Atom<ReadonlyArray<ServerProvider> | null>;
    readonly refreshProviders: AtomCommand<{
        readonly environmentId: EnvironmentId;
        readonly input: {
            readonly instanceId: ProviderInstanceId;
            readonly cwd: string;
        };
    }, {
        readonly providers: ReadonlyArray<ServerProvider>;
    }, unknown>;
}): 
/** @throws {never} */
(target: ProviderWorkspaceSnapshotRefreshTarget) => Atom.Atom<unknown>;
export {};
