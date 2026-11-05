import { type ProjectMutation } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import { type ProjectService } from "./ProjectService.ts";
type ProjectMutations = Pick<ProjectService["Service"], "create" | "delete" | "update">;
export declare const projectMutationOperation: (projects: ProjectMutations, mutation: ProjectMutation) => Effect.Effect<{
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
    readonly deletedAt: string | null;
}, import("./ProjectService.ts").ProjectServiceError, never>;
export {};
