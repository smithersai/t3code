import * as Effect from "effect/Effect";
import * as PlatformError from "effect/PlatformError";
import * as Schema from "effect/Schema";
declare const ReplayFixtureGitCommandError_base: Schema.Class<ReplayFixtureGitCommandError, Schema.TaggedStruct<"ReplayFixtureGitCommandError", {
    readonly command: Schema.String;
    readonly exitCode: Schema.Number;
}>, import("effect/Cause").YieldableError>;
declare class ReplayFixtureGitCommandError extends ReplayFixtureGitCommandError_base {
    get message(): string;
}
export type ReplayWorkspaceFiles = Readonly<Record<string, string>>;
export declare const checkpointWorkspace: (fixtureName: string, files?: ReplayWorkspaceFiles) => Effect.Effect<string, PlatformError.PlatformError | ReplayFixtureGitCommandError, import("effect/Scope").Scope>;
export declare function makeCheckpointWorkspace(fixtureName: string, files?: ReplayWorkspaceFiles): Promise<string>;
export {};
