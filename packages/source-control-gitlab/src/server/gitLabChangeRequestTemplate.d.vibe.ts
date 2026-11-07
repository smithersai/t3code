import * as Effect from "effect/Effect";
import * as Option from "effect/Option";
import type * as SourceControlHost from "@t3tools/source-control-core/server/SourceControlHost";
type ExecuteGit = SourceControlHost.SourceControlHost["Service"]["git"]["execute"];
export declare const detect: (cwd: string, treeish: string, executeGit: ExecuteGit) => Effect.Effect<Option.None<string> | Option.Some<string> | Option.Option<never>, never, never>;
export {};
