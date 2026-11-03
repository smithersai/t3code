import * as Context from "effect/Context";
import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Scope from "effect/Scope";
import * as Stream from "effect/Stream";
import type { GitManagerServiceError, VcsStatusInput, VcsStatusLocalResult, VcsStatusRemoteResult, VcsStatusResult, VcsStatusStreamEvent, VcsStatusSubscriptionInput } from "@t3tools/contracts";
import * as BackgroundPolicy from "../background/BackgroundPolicy.ts";
import * as GitWorkflowService from "../git/GitWorkflowService.ts";
import * as ProjectStore from "../orchestration-v2/ProjectStore.ts";
import * as ServerSettings from "../serverSettings.ts";
declare const VcsAutomaticFetchInterval_base: Context.Reference<Effect.Effect<Duration.Duration, never, never>>;
export declare class VcsAutomaticFetchInterval extends VcsAutomaticFetchInterval_base {
}
export declare const layerAutomaticFetchInterval: Layer.Layer<never, never, ServerSettings.ServerSettingsService>;
declare const VcsAutoPullPolicy_base: Context.Reference<{
    readonly isEnabled: (cwd: string) => Effect.Effect<boolean, never>;
}>;
export declare class VcsAutoPullPolicy extends VcsAutoPullPolicy_base {
}
export declare const layerAutoPullPolicy: Layer.Layer<never, never, ProjectStore.ProjectStoreV2 | ServerSettings.ServerSettingsService>;
declare const VcsStatusBroadcaster_base: Context.ServiceClass<VcsStatusBroadcaster, "t3/vcs/VcsStatusBroadcaster", {
    readonly getStatus: (input: VcsStatusInput) => Effect.Effect<VcsStatusResult, GitManagerServiceError>;
    readonly refreshLocalStatus: (cwd: string) => Effect.Effect<VcsStatusLocalResult, GitManagerServiceError>;
    readonly refreshStatus: (cwd: string, options?: {
        readonly localOnly?: boolean;
    }) => Effect.Effect<VcsStatusResult, GitManagerServiceError>;
    readonly refreshPullRequestStatus: (cwd: string) => Effect.Effect<VcsStatusRemoteResult | null, GitManagerServiceError>;
    readonly streamStatus: (input: VcsStatusSubscriptionInput) => Stream.Stream<VcsStatusStreamEvent, GitManagerServiceError>;
}>;
export declare class VcsStatusBroadcaster extends VcsStatusBroadcaster_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly getStatus: (input: VcsStatusInput) => Effect.Effect<VcsStatusResult, GitManagerServiceError>;
    readonly refreshLocalStatus: (cwd: string) => Effect.Effect<VcsStatusLocalResult, GitManagerServiceError>;
    readonly refreshStatus: (cwd: string, options?: {
        readonly localOnly?: boolean;
    }) => Effect.Effect<VcsStatusResult, GitManagerServiceError>;
    readonly refreshPullRequestStatus: (cwd: string) => Effect.Effect<VcsStatusRemoteResult | null, GitManagerServiceError>;
    readonly streamStatus: (input: VcsStatusSubscriptionInput) => Stream.Stream<VcsStatusStreamEvent, GitManagerServiceError>;
}, never, BackgroundPolicy.BackgroundPolicy | FileSystem.FileSystem | GitWorkflowService.GitWorkflowService | Scope.Scope>;
export declare const layer: Layer.Layer<VcsStatusBroadcaster, never, BackgroundPolicy.BackgroundPolicy | FileSystem.FileSystem | GitWorkflowService.GitWorkflowService>;
export {};
