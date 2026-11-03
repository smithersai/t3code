import * as Effect from "effect/Effect";
import { type ProjectService } from "./ProjectService.ts";
type ProjectMutations = Pick<ProjectService["Service"], "create" | "delete" | "update">;
export declare const projectMutationOperation: (projects: ProjectMutations, mutation: {
    readonly title: string;
    readonly workspaceRoot: string;
    readonly createWorkspaceRootIfMissing?: boolean | undefined;
    readonly defaultModelSelection?: {
        readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly model: string;
        readonly options?: readonly {
            id: string;
            value: string | boolean;
        }[];
    } | null | undefined;
    readonly scripts?: readonly {
        id: string;
        name: string;
        command: string;
        icon: "build" | "configure" | "debug" | "lint" | "play" | "test";
        runOnWorktreeCreate: boolean;
        runOnSettle?: boolean | undefined;
        async?: boolean | undefined;
        previewUrl?: string | undefined;
        autoOpenPreview?: boolean | undefined;
    }[] | undefined;
    readonly type: "project.create";
    readonly commandId: string & import("effect/Brand").Brand<"CommandId">;
    readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
} | {
    readonly title?: string | undefined;
    readonly workspaceRoot?: string | undefined;
    readonly defaultModelSelection?: {
        readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly model: string;
        readonly options?: readonly {
            id: string;
            value: string | boolean;
        }[];
    } | null | undefined;
    readonly autoPull?: boolean | undefined;
    readonly projectIcon?: {
        kind: "lucide";
        name: string;
        color: "amber" | "blue" | "cyan" | "emerald" | "fuchsia" | "gray" | "green" | "indigo" | "lime" | "orange" | "pink" | "purple" | "red" | "rose" | "sky" | "teal" | "violet" | "yellow";
    } | {
        kind: "emoji";
        emoji: string;
    } | {
        kind: "monogram";
        text: string;
        color: "amber" | "blue" | "cyan" | "emerald" | "fuchsia" | "gray" | "green" | "indigo" | "lime" | "orange" | "pink" | "purple" | "red" | "rose" | "sky" | "teal" | "violet" | "yellow";
    } | null | undefined;
    readonly faviconPath?: string | null | undefined;
    readonly defaultThreadEnvMode?: "local" | "worktree" | null | undefined;
    readonly scripts?: readonly {
        id: string;
        name: string;
        command: string;
        icon: "build" | "configure" | "debug" | "lint" | "play" | "test";
        runOnWorktreeCreate: boolean;
        runOnSettle?: boolean | undefined;
        async?: boolean | undefined;
        previewUrl?: string | undefined;
        autoOpenPreview?: boolean | undefined;
    }[] | undefined;
    readonly type: "project.update";
    readonly commandId: string & import("effect/Brand").Brand<"CommandId">;
    readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
} | {
    readonly type: "project.delete";
    readonly commandId: string & import("effect/Brand").Brand<"CommandId">;
    readonly projectId: string & import("effect/Brand").Brand<"ProjectId">;
    readonly force?: boolean | undefined;
}) => Effect.Effect<{
    readonly id: string & import("effect/Brand").Brand<"ProjectId">;
    readonly title: string;
    readonly workspaceRoot: string;
    readonly repositoryIdentity?: {
        readonly canonicalKey: string;
        readonly locator: {
            source: "git-remote";
            remoteName: string;
            remoteUrl: string;
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
    readonly faviconPath?: string | null | undefined;
    readonly projectIcon?: {
        kind: "lucide";
        name: string;
        color: "amber" | "blue" | "cyan" | "emerald" | "fuchsia" | "gray" | "green" | "indigo" | "lime" | "orange" | "pink" | "purple" | "red" | "rose" | "sky" | "teal" | "violet" | "yellow";
    } | {
        kind: "emoji";
        emoji: string;
    } | {
        kind: "monogram";
        text: string;
        color: "amber" | "blue" | "cyan" | "emerald" | "fuchsia" | "gray" | "green" | "indigo" | "lime" | "orange" | "pink" | "purple" | "red" | "rose" | "sky" | "teal" | "violet" | "yellow";
    } | null | undefined;
    readonly defaultModelSelection: {
        readonly instanceId: string & import("effect/Brand").Brand<"ProviderInstanceId">;
        readonly model: string;
        readonly options?: readonly {
            id: string;
            value: string | boolean;
        }[];
    } | null;
    readonly defaultThreadEnvMode?: "local" | "worktree" | null | undefined;
    readonly autoPull?: boolean | undefined;
    readonly scripts: readonly {
        id: string;
        name: string;
        command: string;
        icon: "build" | "configure" | "debug" | "lint" | "play" | "test";
        runOnWorktreeCreate: boolean;
        runOnSettle?: boolean | undefined;
        async?: boolean | undefined;
        previewUrl?: string | undefined;
        autoOpenPreview?: boolean | undefined;
    }[];
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly deletedAt: string | null;
}, import("./ProjectService.ts").ProjectServiceError, never>;
export {};
