import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import * as Schema from "effect/Schema";
export interface CursorSkillFrontmatter {
    readonly description?: string;
    readonly displayName?: string;
    readonly userInvocationOnly?: boolean;
    readonly userInvocable?: boolean;
    readonly cliVisible: boolean;
}
export interface CursorSkillScanBudget {
    remainingEntries: number;
    remainingBytes: bigint;
    exhausted: boolean;
    incomplete: boolean;
}
declare const CursorSkillsProbeError_base: Schema.Class<CursorSkillsProbeError, Schema.TaggedStruct<"CursorSkillsProbeError", {
    readonly reason: Schema.Literals<readonly ["scan-budget-exhausted", "filesystem-error"]>;
    readonly cwd: Schema.optional<Schema.String>;
}>, import("effect/Cause").YieldableError>;
export declare class CursorSkillsProbeError extends CursorSkillsProbeError_base {
    get message(): string;
}
export declare function parseFrontmatterBoolean(value: unknown): boolean | undefined;
export declare function parseSkillFrontmatter(contents: string): CursorSkillFrontmatter | undefined;
export declare const discoverCursorSkills: (cwd?: string | undefined, environment?: NodeJS.ProcessEnv | undefined) => Effect.Effect<{
    readonly name: string;
    readonly description?: string | undefined;
    readonly path: string;
    readonly scope?: string | undefined;
    readonly enabled: boolean;
    readonly displayName?: string | undefined;
    readonly shortDescription?: string | undefined;
    readonly userInvocationOnly?: boolean | undefined;
    readonly userInvocable?: boolean | undefined;
}[], never, FileSystem.FileSystem | Path.Path>;
export declare const probeCursorSkills: (cwd?: string | undefined, environment?: NodeJS.ProcessEnv | undefined) => Effect.Effect<{
    readonly name: string;
    readonly description?: string | undefined;
    readonly path: string;
    readonly scope?: string | undefined;
    readonly enabled: boolean;
    readonly displayName?: string | undefined;
    readonly shortDescription?: string | undefined;
    readonly userInvocationOnly?: boolean | undefined;
    readonly userInvocable?: boolean | undefined;
}[], CursorSkillsProbeError, FileSystem.FileSystem | Path.Path>;
export {};
