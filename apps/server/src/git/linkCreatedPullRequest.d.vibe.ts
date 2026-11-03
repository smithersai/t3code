import { type CommandId, type GitRunStackedActionResult, type OrchestrationProjectShell, type ThreadId } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import * as Orchestrator from "../orchestration-v2/Orchestrator.ts";
import * as ProjectService from "../project/ProjectService.ts";
export interface CreatedPullRequestKey {
    readonly host: string;
    readonly repository: string;
    readonly number: number;
    readonly url: string;
}
export declare function createdPullRequestKey(result: Pick<GitRunStackedActionResult, "pr">, project: OrchestrationProjectShell | undefined): CreatedPullRequestKey | null;
/**
 * Never fails: the git action already succeeded and its result is on its way to the client, so
 * a link that cannot be made is logged and dropped.
 */
export declare const linkCreatedPullRequest: <E>(input: {
    readonly threadId: ThreadId;
    readonly result: Pick<GitRunStackedActionResult, "pr">;
    readonly commandId: Effect.Effect<CommandId, E>;
}) => Effect.Effect<void, never, Orchestrator.OrchestratorV2 | ProjectService.ProjectService>;
