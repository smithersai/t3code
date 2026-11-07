import { type FilesystemBrowseEntry, type SessionGrantInput } from "@t3tools/contracts";
import { Atom } from "effect/reactivity";
import type { EnvironmentConnectionPhase, EnvironmentConnectionPresentation } from "../connection/presentation.vibe";
import type { EnvironmentRegistry } from "../connection/registry.ts";
/** @throws {never} */
export declare function resolveFilesystemReadAccess(input: {
    readonly isCatalogReady: boolean;
    readonly connection: Pick<EnvironmentConnectionPresentation, "phase" | "error"> | null;
    readonly session: SessionGrantInput | null;
    readonly sessionError: string | null;
}): {
    canReadFiles: boolean;
    isPending: boolean;
    error: string | null;
};
/** @throws {never} */
export declare function getFilesystemBrowsePath(query: string, platform?: string, enabled?: boolean): {
    isBrowsing: boolean;
    directoryPath: string;
    filterQuery: string;
    parentPath: string | null;
    canBrowseUp: boolean;
};
/** @throws {never} */
export declare function filterFilesystemBrowseEntries(entries: ReadonlyArray<FilesystemBrowseEntry>, query: string): {
    visibleEntries: {
        readonly name: string;
        readonly fullPath: string;
    }[];
    exactEntry: {
        readonly name: string;
        readonly fullPath: string;
    } | null;
};
/** @throws {never} */
export declare function createBrowseNavigationCoordinator(): {
    /** @throws {never} */
    invalidate: () => void;
    /** @throws {never} */
    run: (load: 
    /** @throws {never} */
    () => Promise<void>, commit: 
    /** @throws {never} */
    () => void) => Promise<boolean>;
};
/** @throws {never} */
export declare function canPreloadBrowsePath(connectionPhase: EnvironmentConnectionPhase | null | undefined): boolean;
/** @throws {never} */
export declare function createFilesystemEnvironmentAtoms<R, E>(runtime: Atom.AtomRuntime<EnvironmentRegistry | R, E>): {
    getMetadata: (target: {
        readonly environmentId: import("@t3tools/contracts").EnvironmentId;
        readonly input: {
            readonly paths: readonly string[];
        };
    }) => Atom.Atom<import("effect/reactivity/AsyncResult").AsyncResult<{
        readonly entries: readonly ({
            readonly kind: "directory" | "file" | "other";
            readonly byteLength?: number;
            readonly mimeType?: string;
        } | null)[];
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | import("effect/rpc/RpcClientError").RpcClientError>>;
    browse: (target: {
        readonly environmentId: import("@t3tools/contracts").EnvironmentId;
        readonly input: {
            readonly partialPath: string;
            readonly cwd?: string | undefined;
        };
    }) => Atom.Atom<import("effect/reactivity/AsyncResult").AsyncResult<{
        readonly parentPath: string;
        readonly entries: readonly {
            readonly name: string;
            readonly fullPath: string;
        }[];
    }, E | import("@t3tools/contracts").EnvironmentAuthorizationError | import("../rpc/client.vibe").EnvironmentRpcUnavailableError | Error | import("@t3tools/contracts").FilesystemBrowseError | import("effect/rpc/RpcClientError").RpcClientError>>;
};
