import type { GitCommandError } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import * as Option from "effect/Option";
import type * as SourceControlHost from "@t3tools/source-control-core/server/SourceControlHost";
export declare const detect: (cwd: string, treeish: string, executeGit: (input: {
    readonly operation: string;
    readonly cwd: string;
    readonly args: ReadonlyArray<string>;
    readonly maxOutputBytes?: number;
    readonly appendTruncationMarker?: boolean;
}) => Effect.Effect<SourceControlHost.SourceControlGitOutput, GitCommandError>) => Effect.Effect<Option.None<string> | Option.Some<string> | Option.Option<never>, never, never>;
