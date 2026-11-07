/**
 * Discovers fx skills for the `$` picker by scanning the SKILL.md folders fx
 * reads (fx 0.0.13, src/builtins/skills.zig), so no `fx acp` session starts
 * for a composer menu.
 *
 * @module provider-fx/server/skills
 */
import type { ServerProviderSkill } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
/**
 * Skills in fx's menu order. Like fx, a folder reached twice (a symlinked
 * root) counts once. When two different skills share a name, `$name` lets
 * the model choose from fx's catalog, which lists them in scan order; it
 * takes the first copy, so that is the one listed here.
 */
export declare const discoverFxSkills: (input: {
    readonly cwd: string;
    readonly environment: NodeJS.ProcessEnv;
}) => Effect.Effect<ReadonlyArray<ServerProviderSkill>, never, FileSystem.FileSystem | Path.Path>;
