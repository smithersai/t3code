import { AsyncResult, Atom } from "effect/reactivity";
import { type EnvironmentId, type ProjectListEntriesResult, ProjectReadFileError, type ProjectReadFileResult } from "@t3tools/contracts";
export declare function optimisticFileAtom(environmentId: EnvironmentId, cwd: string, relativePath: string): Atom.Writable<import("@t3tools/client-runtime/state/projects").OptimisticProjectFile | null, import("@t3tools/client-runtime/state/projects").OptimisticProjectFile | null>;
interface ProjectQueryState<A> {
    readonly data: A | null;
    readonly error: string | null;
    readonly isPending: boolean;
    readonly refresh: () => void;
}
interface ProjectFileQueryState extends ProjectQueryState<ProjectReadFileResult> {
    readonly readError: ProjectReadFileError | null;
    readonly isNotFile: boolean;
    readonly isFile: boolean;
}
export declare function getProjectFileQueryAtom(environmentId: EnvironmentId, cwd: string, relativePath: string | null): Atom.Atom<AsyncResult.AsyncResult<{
    readonly relativePath: string;
    readonly contents: string;
    readonly byteLength: number;
    readonly truncated: boolean;
    readonly exists?: boolean | undefined;
}, import("@t3tools/client-runtime/platform").ConnectionPersistenceError | import("@t3tools/contracts").EnvironmentAuthorizationError | import("@t3tools/client-runtime/rpc").EnvironmentRpcUnavailableError | Error | ProjectReadFileError | import("effect/rpc/RpcClientError").RpcClientError | import("@t3tools/client-runtime/connection").ConnectionAttemptError>>;
export declare function setProjectFileQueryData(environmentId: EnvironmentId, cwd: string, relativePath: string, contents: string): void;
export declare function getOptimisticProjectFileQueryData(environmentId: EnvironmentId, cwd: string, relativePath: string): ProjectReadFileResult | null;
export declare function getProjectFileContents(environmentId: EnvironmentId, cwd: string, relativePath: string): string | undefined;
export declare function getUnsavedProjectFileQueryData(environmentId: EnvironmentId, cwd: string, relativePath: string): ProjectReadFileResult | null;
export declare function confirmProjectFileQueryData(environmentId: EnvironmentId, cwd: string, relativePath: string, contents: string): boolean;
export declare function resolveProjectFileQueryData(environmentId: EnvironmentId, cwd: string, relativePath: string | null, data: ProjectReadFileResult | null): ProjectReadFileResult | null;
export declare function clearProjectFileQueryData(environmentId: EnvironmentId, cwd: string, relativePath: string): void;
/** `revision` is the workspace mutation id; a new one refetches the listing. */
export declare function useProjectEntriesQuery(environmentId: EnvironmentId, cwd: string, directoryPath?: string, revision?: string | null): ProjectQueryState<ProjectListEntriesResult>;
/** Empty queries return frecency-ranked files without transferring the full workspace listing. */
export declare function useProjectFilePickerQuery(environmentId: EnvironmentId, cwd: string, query: string, limit: number, options?: {
    readonly imageOnly?: boolean;
}): {
    entries: readonly {
        readonly path: string;
        readonly kind: "directory" | "file";
        readonly ignored?: boolean | undefined;
    }[];
    error: string | null;
    isPending: boolean;
    matchedQuery: string;
};
export declare function useProjectFileQuery(environmentId: EnvironmentId, cwd: string, relativePath: string | null, enabled?: boolean): ProjectFileQueryState;
export {};
