import { type OrchestrationProjectShell } from "@t3tools/contracts";
import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Option from "effect/Option";
import type * as Scope from "effect/Scope";
import * as BackgroundPolicy from "../background/BackgroundPolicy.ts";
import * as GitManager from "../git/GitManager.ts";
import * as ProjectStore from "./ProjectStore.ts";
import * as PullRequestService from "../pullRequest/PullRequestService.ts";
import * as RepositoryIdentityResolver from "../project/RepositoryIdentityResolver.ts";
import * as Orchestrator from "./Orchestrator.ts";
export declare function projectWorkspaceMatchesSnapshot(currentProject: Option.Option<Pick<OrchestrationProjectShell, "workspaceRoot">>, expectedWorkspaceRoot: string): boolean;
export declare const make: Effect.Effect<{
    start: () => Effect.Effect<void, never, Scope.Scope>;
    drain: Effect.Effect<void, never, never>;
}, never, BackgroundPolicy.BackgroundPolicy | Crypto.Crypto | FileSystem.FileSystem | GitManager.GitManager | Orchestrator.OrchestratorV2 | ProjectStore.ProjectStoreV2 | PullRequestService.PullRequestService | RepositoryIdentityResolver.RepositoryIdentityResolver | Scope.Scope>;
