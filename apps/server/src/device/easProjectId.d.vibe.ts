import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Option from "effect/Option";
import * as Path from "effect/Path";
/**
 * The EAS project of a workspace's Expo app: its root, or one app below
 * `apps/` or `packages/`. None when there is none, a config is ambiguous, or
 * the apps disagree, so the caller asks for an explicit choice instead of
 * billing the wrong project.
 */
export declare const findEasProjectId: (workspaceRoot: string) => Effect.Effect<Option.Option<string>, never, FileSystem.FileSystem | Path.Path>;
