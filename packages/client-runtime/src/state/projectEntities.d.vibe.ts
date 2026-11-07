import type { EnvironmentId, OrchestrationV2ShellSnapshot, ScopedProjectRef, ServerConfig } from "@t3tools/contracts";
import { Atom } from "effect/reactivity";
import type { EnvironmentProject } from "./models.vibe";
import { type EnvironmentCatalogState } from "./connections.vibe";
/** @throws {never} */
export declare function createEnvironmentProjectAtoms(input: {
    readonly catalogValueAtom: Atom.Atom<EnvironmentCatalogState>;
    /** @throws {never} */
    readonly snapshotAtom: (environmentId: EnvironmentId) => Atom.Atom<OrchestrationV2ShellSnapshot | null>;
    /** @throws {never} */
    readonly serverConfigValueAtom?: (environmentId: EnvironmentId) => Atom.Atom<Pick<ServerConfig, "scratchWorkspaceRoot"> | null>;
}): {
    environmentProjectsAtom: (arg: string & import("effect/Brand").Brand<"EnvironmentId">) => Atom.Atom<readonly {
        readonly id: string & import("effect/Brand").Brand<"ProjectId">;
        readonly title: string;
        readonly workspaceRoot: string;
        readonly repositoryIdentity?: {
            readonly canonicalKey: string;
            readonly locator: {
                readonly source: "git-remote";
                readonly remoteName: string;
                readonly remoteUrl: string;
            };
            readonly webUrl?: string;
            readonly rootPath?: string;
            readonly displayName?: string;
            readonly provider?: string & import("effect/Brand").Brand<"SourceControlProviderKind">;
            readonly owner?: string;
            readonly name?: string;
            readonly origin?: {
                readonly canonicalKey: string;
                readonly remoteUrl?: string;
                readonly displayName?: string;
            };
        } | null | undefined;
        readonly defaultModelSelection: {
            readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
            readonly model: string;
            readonly options?: readonly {
                readonly id: string;
                readonly value: string | boolean;
            }[];
        } | null;
        readonly defaultThreadEnvMode?: "local" | "worktree" | null | undefined;
        readonly autoPull?: boolean | undefined;
        readonly faviconPath?: string | null | undefined;
        readonly projectIcon?: {
            readonly kind: "lucide";
            readonly name: string;
            readonly color: "amber" | "blue" | "cyan" | "emerald" | "fuchsia" | "gray" | "green" | "indigo" | "lime" | "orange" | "pink" | "purple" | "red" | "rose" | "sky" | "teal" | "violet" | "yellow";
        } | {
            readonly kind: "emoji";
            readonly emoji: string;
        } | {
            readonly kind: "monogram";
            readonly text: string;
            readonly color: "amber" | "blue" | "cyan" | "emerald" | "fuchsia" | "gray" | "green" | "indigo" | "lime" | "orange" | "pink" | "purple" | "red" | "rose" | "sky" | "teal" | "violet" | "yellow";
        } | null | undefined;
        readonly scripts: readonly {
            readonly id: string;
            readonly name: string;
            readonly command: string;
            readonly icon: "build" | "configure" | "debug" | "lint" | "play" | "test";
            readonly runOnWorktreeCreate: boolean;
            readonly runOnSettle?: boolean | undefined;
            readonly async?: boolean | undefined;
            readonly previewUrl?: string | undefined;
            readonly autoOpenPreview?: boolean | undefined;
        }[];
        readonly createdAt: string;
        readonly updatedAt: string;
    }[]>;
    environmentProjectIndexAtom: (arg: string & import("effect/Brand").Brand<"EnvironmentId">) => Atom.Atom<ReadonlyMap<string & import("effect/Brand").Brand<"ProjectId">, {
        readonly id: string & import("effect/Brand").Brand<"ProjectId">;
        readonly title: string;
        readonly workspaceRoot: string;
        readonly repositoryIdentity?: {
            readonly canonicalKey: string;
            readonly locator: {
                readonly source: "git-remote";
                readonly remoteName: string;
                readonly remoteUrl: string;
            };
            readonly webUrl?: string;
            readonly rootPath?: string;
            readonly displayName?: string;
            readonly provider?: string & import("effect/Brand").Brand<"SourceControlProviderKind">;
            readonly owner?: string;
            readonly name?: string;
            readonly origin?: {
                readonly canonicalKey: string;
                readonly remoteUrl?: string;
                readonly displayName?: string;
            };
        } | null | undefined;
        readonly defaultModelSelection: {
            readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
            readonly model: string;
            readonly options?: readonly {
                readonly id: string;
                readonly value: string | boolean;
            }[];
        } | null;
        readonly defaultThreadEnvMode?: "local" | "worktree" | null | undefined;
        readonly autoPull?: boolean | undefined;
        readonly faviconPath?: string | null | undefined;
        readonly projectIcon?: {
            readonly kind: "lucide";
            readonly name: string;
            readonly color: "amber" | "blue" | "cyan" | "emerald" | "fuchsia" | "gray" | "green" | "indigo" | "lime" | "orange" | "pink" | "purple" | "red" | "rose" | "sky" | "teal" | "violet" | "yellow";
        } | {
            readonly kind: "emoji";
            readonly emoji: string;
        } | {
            readonly kind: "monogram";
            readonly text: string;
            readonly color: "amber" | "blue" | "cyan" | "emerald" | "fuchsia" | "gray" | "green" | "indigo" | "lime" | "orange" | "pink" | "purple" | "red" | "rose" | "sky" | "teal" | "violet" | "yellow";
        } | null | undefined;
        readonly scripts: readonly {
            readonly id: string;
            readonly name: string;
            readonly command: string;
            readonly icon: "build" | "configure" | "debug" | "lint" | "play" | "test";
            readonly runOnWorktreeCreate: boolean;
            readonly runOnSettle?: boolean | undefined;
            readonly async?: boolean | undefined;
            readonly previewUrl?: string | undefined;
            readonly autoOpenPreview?: boolean | undefined;
        }[];
        readonly createdAt: string;
        readonly updatedAt: string;
    }>>;
    environmentProjectRefsAtom: (arg: string & import("effect/Brand").Brand<"EnvironmentId">) => Atom.Atom<readonly {
        readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
        readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
    }[]>;
    projectRefsAtom: Atom.Atom<readonly {
        readonly environmentId: string & import("effect/Brand").Brand<"EnvironmentId">;
        readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
    }[]>;
    projectsAtom: Atom.Atom<readonly EnvironmentProject[]>;
    projectConfigsReadyAtom: Atom.Atom<boolean>;
    /** @throws {never} */
    projectAtom: (ref: ScopedProjectRef) => Atom.Atom<EnvironmentProject | null>;
};
