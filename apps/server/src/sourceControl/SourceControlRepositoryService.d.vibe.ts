import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Path from "effect/Path";
import { SourceControlRepositoryError, type SourceControlCloneRepositoryInput, type SourceControlCloneRepositoryResult, type SourceControlPublishRepositoryInput, type SourceControlPublishRepositoryResult, type SourceControlRepositoryInfo, type SourceControlRepositoryLookupInput } from "@t3tools/contracts";
import * as ServerConfig from "../config.ts";
import { type GitCloneProgressLine } from "../project/gitCloneProgress.ts";
import * as GitVcsDriver from "../vcs/GitVcsDriver.ts";
import * as SourceControlProviderRegistry from "./SourceControlProviderRegistry.vibe";
declare const SourceControlRepositoryService_base: Context.ServiceClass<SourceControlRepositoryService, "t3/sourceControl/SourceControlRepositoryService", {
    readonly lookupRepository: (input: SourceControlRepositoryLookupInput) => Effect.Effect<SourceControlRepositoryInfo, SourceControlRepositoryError>;
    readonly prepareClone: (input: SourceControlCloneRepositoryInput) => Effect.Effect<SourceControlPreparedClone, SourceControlRepositoryError>;
    readonly cloneRepository: (input: SourceControlCloneRepositoryInput, options?: SourceControlCloneOptions) => Effect.Effect<SourceControlCloneRepositoryResult, SourceControlRepositoryError>;
    readonly discardClone: (destinationPath: string) => Effect.Effect<void, SourceControlRepositoryError>;
    readonly publishRepository: (input: SourceControlPublishRepositoryInput) => Effect.Effect<SourceControlPublishRepositoryResult, SourceControlRepositoryError>;
}>;
export declare class SourceControlRepositoryService extends SourceControlRepositoryService_base {
}
export interface SourceControlPreparedClone {
    readonly destinationPath: string;
    readonly remoteUrl: string;
    readonly cloneUrl: string;
    readonly repository: SourceControlRepositoryInfo | null;
}
export interface SourceControlCloneOptions {
    readonly onProgress?: (line: GitCloneProgressLine) => Effect.Effect<void>;
    /** Overrides the default clone budget; `null` disables the deadline. */
    readonly timeoutMs?: number | null;
}
/** @public */
export declare const make: Effect.Effect<{
    readonly lookupRepository: (input: SourceControlRepositoryLookupInput) => Effect.Effect<SourceControlRepositoryInfo, SourceControlRepositoryError>;
    readonly prepareClone: (input: SourceControlCloneRepositoryInput) => Effect.Effect<SourceControlPreparedClone, SourceControlRepositoryError>;
    readonly cloneRepository: (input: SourceControlCloneRepositoryInput, options?: SourceControlCloneOptions) => Effect.Effect<SourceControlCloneRepositoryResult, SourceControlRepositoryError>;
    readonly discardClone: (destinationPath: string) => Effect.Effect<void, SourceControlRepositoryError>;
    readonly publishRepository: (input: SourceControlPublishRepositoryInput) => Effect.Effect<SourceControlPublishRepositoryResult, SourceControlRepositoryError>;
}, never, FileSystem.FileSystem | GitVcsDriver.GitVcsDriver | Path.Path | ServerConfig.ServerConfig | SourceControlProviderRegistry.SourceControlProviderRegistry>;
export declare const layer: Layer.Layer<SourceControlRepositoryService, never, FileSystem.FileSystem | GitVcsDriver.GitVcsDriver | Path.Path | ServerConfig.ServerConfig | SourceControlProviderRegistry.SourceControlProviderRegistry>;
export {};
