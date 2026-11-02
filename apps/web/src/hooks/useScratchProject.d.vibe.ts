import type { EnvironmentProject } from "@t3tools/client-runtime/state/shell";
import type { EnvironmentId } from "@t3tools/contracts";
import type { AtomRegistry } from "effect/reactivity";
import { type EnvironmentPresentation } from "~/state/environments";
import { type NewThreadHandler } from "./useHandleNewThread.ts";
type ScratchEnvironment = Pick<EnvironmentPresentation, "connection" | "serverConfig"> & {
    readonly environmentId: EnvironmentId;
};
export declare function createScratchProjectActions(input: {
    readonly environments: () => Iterable<ScratchEnvironment>;
    readonly registry: AtomRegistry.AtomRegistry;
    readonly handleNewThread: NewThreadHandler;
}): {
    scratchWorkspaceRootFor: (environmentId: EnvironmentId | null) => string | null;
    scratchEnvironmentId: (current: EnvironmentId | null) => EnvironmentId | null;
    openScratchProject: (environmentId: EnvironmentId, failureTitle?: string) => Promise<EnvironmentProject | null>;
    startScratchThread: (environmentId: EnvironmentId) => Promise<void>;
};
export declare function useScratchProject(): {
    scratchWorkspaceRootFor: (environmentId: EnvironmentId | null) => string | null;
    scratchEnvironmentId: (current: EnvironmentId | null) => EnvironmentId | null;
    openScratchProject: (environmentId: EnvironmentId, failureTitle?: string) => Promise<EnvironmentProject | null>;
    startScratchThread: (environmentId: EnvironmentId) => Promise<void>;
};
export {};
