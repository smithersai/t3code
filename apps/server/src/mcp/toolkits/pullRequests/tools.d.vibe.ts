import { McpCapabilityUnavailableError, OrchestratorMcpFailure } from "@t3tools/contracts";
import * as Schema from "effect/Schema";
import * as Tool from "effect/ai/Tool";
import * as Toolkit from "effect/ai/Toolkit";
import * as McpInvocationContext from "../../McpInvocationContext.ts";
import * as Orchestrator from "../../../orchestration-v2/Orchestrator.ts";
import * as ThreadManagementService from "../../../orchestration-v2/ThreadManagementService.ts";
import * as ProjectService from "../../../project/ProjectService.ts";
import * as PullRequestReviewGuideService from "../../../pullRequest/PullRequestReviewGuideService.ts";
export declare const PullRequestTargetInput: Schema.Struct<{
    readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
    readonly threadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
    readonly url: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly repository: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly number: Schema.optional<Schema.Int>;
    readonly host: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
}>;
export type PullRequestTargetInput = typeof PullRequestTargetInput.Type;
declare const PullRequestUrlInvalidError_base: Schema.Class<PullRequestUrlInvalidError, Schema.TaggedStruct<"PullRequestUrlInvalidError", {}>, import("effect/Cause").YieldableError>;
export declare class PullRequestUrlInvalidError extends PullRequestUrlInvalidError_base {
    get message(): string;
}
declare const PullRequestTargetIncompleteError_base: Schema.Class<PullRequestTargetIncompleteError, Schema.TaggedStruct<"PullRequestTargetIncompleteError", {}>, import("effect/Cause").YieldableError>;
export declare class PullRequestTargetIncompleteError extends PullRequestTargetIncompleteError_base {
    get message(): string;
}
declare const PullRequestHostRequiredError_base: Schema.Class<PullRequestHostRequiredError, Schema.TaggedStruct<"PullRequestHostRequiredError", {}>, import("effect/Cause").YieldableError>;
export declare class PullRequestHostRequiredError extends PullRequestHostRequiredError_base {
    get message(): string;
}
declare const PullRequestUrlUnavailableError_base: Schema.Class<PullRequestUrlUnavailableError, Schema.TaggedStruct<"PullRequestUrlUnavailableError", {}>, import("effect/Cause").YieldableError>;
export declare class PullRequestUrlUnavailableError extends PullRequestUrlUnavailableError_base {
    get message(): string;
}
declare const PullRequestThreadRequiredError_base: Schema.Class<PullRequestThreadRequiredError, Schema.TaggedStruct<"PullRequestThreadRequiredError", {}>, import("effect/Cause").YieldableError>;
export declare class PullRequestThreadRequiredError extends PullRequestThreadRequiredError_base {
    get message(): string;
}
declare const PullRequestThreadNotFoundError_base: Schema.Class<PullRequestThreadNotFoundError, Schema.TaggedStruct<"PullRequestThreadNotFoundError", {
    readonly threadId: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class PullRequestThreadNotFoundError extends PullRequestThreadNotFoundError_base {
    get message(): string;
}
declare const PullRequestLinkFailedError_base: Schema.Class<PullRequestLinkFailedError, Schema.TaggedStruct<"PullRequestLinkFailedError", {
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class PullRequestLinkFailedError extends PullRequestLinkFailedError_base {
    get message(): string;
}
declare const PullRequestUnlinkFailedError_base: Schema.Class<PullRequestUnlinkFailedError, Schema.TaggedStruct<"PullRequestUnlinkFailedError", {
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class PullRequestUnlinkFailedError extends PullRequestUnlinkFailedError_base {
    get message(): string;
}
declare const PullRequestWatchFailedError_base: Schema.Class<PullRequestWatchFailedError, Schema.TaggedStruct<"PullRequestWatchFailedError", {
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class PullRequestWatchFailedError extends PullRequestWatchFailedError_base {
    get message(): string;
}
declare const PullRequestNotOpenError_base: Schema.Class<PullRequestNotOpenError, Schema.TaggedStruct<"PullRequestNotOpenError", {
    readonly state: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class PullRequestNotOpenError extends PullRequestNotOpenError_base {
    get message(): string;
}
declare const PullRequestWatchFromSubagentError_base: Schema.Class<PullRequestWatchFromSubagentError, Schema.TaggedStruct<"PullRequestWatchFromSubagentError", {}>, import("effect/Cause").YieldableError>;
export declare class PullRequestWatchFromSubagentError extends PullRequestWatchFromSubagentError_base {
    get message(): string;
}
declare const PullRequestListFailedError_base: Schema.Class<PullRequestListFailedError, Schema.TaggedStruct<"PullRequestListFailedError", {
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class PullRequestListFailedError extends PullRequestListFailedError_base {
    get message(): string;
}
declare const PullRequestProjectNotFoundError_base: Schema.Class<PullRequestProjectNotFoundError, Schema.TaggedStruct<"PullRequestProjectNotFoundError", {
    readonly repository: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class PullRequestProjectNotFoundError extends PullRequestProjectNotFoundError_base {
    get message(): string;
}
declare const PullRequestGuideFailedError_base: Schema.Class<PullRequestGuideFailedError, Schema.TaggedStruct<"PullRequestGuideFailedError", {
    readonly detail: Schema.String;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class PullRequestGuideFailedError extends PullRequestGuideFailedError_base {
    get message(): string;
}
export declare const PullRequestToolError: Schema.Union<readonly [typeof OrchestratorMcpFailure, typeof McpCapabilityUnavailableError, typeof PullRequestUrlInvalidError, typeof PullRequestTargetIncompleteError, typeof PullRequestHostRequiredError, typeof PullRequestUrlUnavailableError, typeof PullRequestThreadRequiredError, typeof PullRequestThreadNotFoundError, typeof PullRequestLinkFailedError, typeof PullRequestUnlinkFailedError, typeof PullRequestListFailedError, typeof PullRequestWatchFailedError, typeof PullRequestNotOpenError, typeof PullRequestWatchFromSubagentError, typeof PullRequestProjectNotFoundError, typeof PullRequestGuideFailedError]>;
export type PullRequestToolError = typeof PullRequestToolError.Type;
/** A delegated child's report is how its parent learns the PR, so the link result asks for it. */
export declare const CHILD_PULL_REQUEST_REPORT_NEXT = "End your reply with: PR <full URL>, head <SHA>, checks and reviews <state>.";
export declare const LinkPullRequestResult: Schema.Struct<{
    readonly host: Schema.String;
    readonly repository: Schema.String;
    readonly number: Schema.Int;
    readonly url: Schema.String;
    readonly alreadyLinked: Schema.Boolean;
    readonly next: Schema.optional<Schema.String>;
}>;
export type LinkPullRequestResult = typeof LinkPullRequestResult.Type;
export declare const UnlinkPullRequestResult: Schema.Struct<{
    readonly host: Schema.String;
    readonly repository: Schema.String;
    readonly number: Schema.Int;
    readonly wasLinked: Schema.Boolean;
}>;
export type UnlinkPullRequestResult = typeof UnlinkPullRequestResult.Type;
export declare const WatchPullRequestResult: Schema.Struct<{
    readonly host: Schema.String;
    readonly repository: Schema.String;
    readonly number: Schema.Int;
    readonly url: Schema.String;
    readonly watching: Schema.Boolean;
    readonly wasWatching: Schema.Boolean;
}>;
export type WatchPullRequestResult = typeof WatchPullRequestResult.Type;
export declare const ThreadPullRequestEntry: Schema.Struct<{
    readonly host: Schema.String;
    readonly repository: Schema.String;
    readonly number: Schema.Int;
    readonly url: Schema.String;
    readonly source: Schema.Literals<readonly ["manual", "created", "agent", "stack", "stack-dismissed"]>;
    readonly watching: Schema.Boolean;
    readonly state: Schema.NullOr<Schema.Literals<readonly ["open", "closed", "merged"]>>;
    readonly title: Schema.NullOr<Schema.String>;
    readonly headBranch: Schema.NullOr<Schema.String>;
    readonly baseBranch: Schema.NullOr<Schema.String>;
    readonly isDraft: Schema.NullOr<Schema.Boolean>;
    readonly stack: Schema.NullOr<Schema.Struct<{
        readonly kind: Schema.Literals<readonly ["native", "derived"]>;
        /** 1-based layer from the bottom; siblings share a layer. */
        readonly position: Schema.Int;
        readonly size: Schema.Int;
    }>>;
}>;
export type ThreadPullRequestEntry = typeof ThreadPullRequestEntry.Type;
export declare const ListThreadPullRequestsResult: Schema.Struct<{
    readonly pullRequests: Schema.$Array<Schema.Struct<{
        readonly host: Schema.String;
        readonly repository: Schema.String;
        readonly number: Schema.Int;
        readonly url: Schema.String;
        readonly source: Schema.Literals<readonly ["manual", "created", "agent", "stack", "stack-dismissed"]>;
        readonly watching: Schema.Boolean;
        readonly state: Schema.NullOr<Schema.Literals<readonly ["open", "closed", "merged"]>>;
        readonly title: Schema.NullOr<Schema.String>;
        readonly headBranch: Schema.NullOr<Schema.String>;
        readonly baseBranch: Schema.NullOr<Schema.String>;
        readonly isDraft: Schema.NullOr<Schema.Boolean>;
        readonly stack: Schema.NullOr<Schema.Struct<{
            readonly kind: Schema.Literals<readonly ["native", "derived"]>;
            /** 1-based layer from the bottom; siblings share a layer. */
            readonly position: Schema.Int;
            readonly size: Schema.Int;
        }>>;
    }>>;
    readonly chains: Schema.$Array<Schema.Struct<{
        readonly kind: Schema.Literals<readonly ["native", "derived"]>;
        /** Bottom to top; each pull request comes before the ones built on it. */
        readonly numbers: Schema.$Array<Schema.Int>;
    }>>;
}>;
export type ListThreadPullRequestsResult = typeof ListThreadPullRequestsResult.Type;
export declare const WritePullRequestGuidesResult: Schema.Struct<{
    readonly guides: Schema.$Array<Schema.Struct<{
        readonly host: Schema.String;
        readonly repository: Schema.String;
        readonly number: Schema.Int;
        readonly url: Schema.String;
        readonly outcome: Schema.Literals<readonly ["started", "running", "failed"]>;
        readonly detail: Schema.NullOr<Schema.String>;
    }>>;
}>;
export type WritePullRequestGuidesResult = typeof WritePullRequestGuidesResult.Type;
export declare const ReadPullRequestGuideResult: Schema.Struct<{
    readonly host: Schema.String;
    readonly repository: Schema.String;
    readonly number: Schema.Int;
    readonly url: Schema.String;
    readonly guide: Schema.NullOr<Schema.Struct<{
        readonly headSha: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly generatedAt: Schema.String;
        readonly modelSelection: Schema.decodeTo<Schema.Struct<{
            readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
            readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
            }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
                readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
            }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
        }>, Schema.Struct<{
            readonly provider: Schema.optional<Schema.Unknown>;
            readonly instanceId: Schema.optional<Schema.Unknown>;
            readonly model: Schema.Unknown;
            readonly options: Schema.optional<Schema.Unknown>;
        }>, never, never>;
        readonly stops: Schema.$Array<Schema.Struct<{
            readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly summary: Schema.String;
            readonly attention: Schema.NullOr<Schema.Struct<{
                readonly kind: Schema.Literals<readonly ["tradeoff", "contract", "product", "risk", "accessibility"]>;
                readonly note: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>>;
            readonly excerpts: Schema.$Array<Schema.Struct<{
                readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly side: Schema.Literals<readonly ["new", "old"]>;
                readonly start: Schema.Int;
                readonly end: Schema.Int;
                readonly caption: Schema.String;
            }>>;
            readonly files: Schema.$Array<Schema.Struct<{
                readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly note: Schema.optionalKey<Schema.String>;
            }>>;
            readonly notes: Schema.$Array<Schema.Struct<{
                readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly line: Schema.Int;
                readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly body: Schema.String;
            }>>;
            readonly questions: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>>;
    }>>;
    readonly run: Schema.NullOr<Schema.Union<readonly [Schema.TaggedStruct<"Running", {
        readonly headSha: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly startedAt: Schema.String;
    }>, Schema.TaggedStruct<"Failed", {
        readonly headSha: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly failedAt: Schema.String;
        readonly detail: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    }>]>>;
    readonly currentHeadSha: Schema.NullOr<Schema.String>;
    readonly stale: Schema.Boolean;
}>;
export type ReadPullRequestGuideResult = typeof ReadPullRequestGuideResult.Type;
export declare const PullRequestsToolkit: Toolkit.Toolkit<{
    readonly link_pull_request: Tool.Tool<"link_pull_request", {
        readonly parameters: Schema.Struct<{
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly threadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
            readonly url: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly repository: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly number: Schema.optional<Schema.Int>;
            readonly host: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly success: Schema.Struct<{
            readonly host: Schema.String;
            readonly repository: Schema.String;
            readonly number: Schema.Int;
            readonly url: Schema.String;
            readonly alreadyLinked: Schema.Boolean;
            readonly next: Schema.optional<Schema.String>;
        }>;
        readonly failure: Schema.Union<readonly [typeof OrchestratorMcpFailure, typeof McpCapabilityUnavailableError, typeof PullRequestUrlInvalidError, typeof PullRequestTargetIncompleteError, typeof PullRequestHostRequiredError, typeof PullRequestUrlUnavailableError, typeof PullRequestThreadRequiredError, typeof PullRequestThreadNotFoundError, typeof PullRequestLinkFailedError, typeof PullRequestUnlinkFailedError, typeof PullRequestListFailedError, typeof PullRequestWatchFailedError, typeof PullRequestNotOpenError, typeof PullRequestWatchFromSubagentError, typeof PullRequestProjectNotFoundError, typeof PullRequestGuideFailedError]>;
        readonly failureMode: "error";
    }, McpInvocationContext.McpInvocationContext | Orchestrator.OrchestratorV2 | ProjectService.ProjectService | ThreadManagementService.ThreadManagementService>;
    readonly list_thread_pull_requests: Tool.Tool<"list_thread_pull_requests", {
        readonly parameters: Schema.Struct<{
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly threadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
        }>;
        readonly success: Schema.Struct<{
            readonly pullRequests: Schema.$Array<Schema.Struct<{
                readonly host: Schema.String;
                readonly repository: Schema.String;
                readonly number: Schema.Int;
                readonly url: Schema.String;
                readonly source: Schema.Literals<readonly ["manual", "created", "agent", "stack", "stack-dismissed"]>;
                readonly watching: Schema.Boolean;
                readonly state: Schema.NullOr<Schema.Literals<readonly ["open", "closed", "merged"]>>;
                readonly title: Schema.NullOr<Schema.String>;
                readonly headBranch: Schema.NullOr<Schema.String>;
                readonly baseBranch: Schema.NullOr<Schema.String>;
                readonly isDraft: Schema.NullOr<Schema.Boolean>;
                readonly stack: Schema.NullOr<Schema.Struct<{
                    readonly kind: Schema.Literals<readonly ["native", "derived"]>;
                    /** 1-based layer from the bottom; siblings share a layer. */
                    readonly position: Schema.Int;
                    readonly size: Schema.Int;
                }>>;
            }>>;
            readonly chains: Schema.$Array<Schema.Struct<{
                readonly kind: Schema.Literals<readonly ["native", "derived"]>;
                /** Bottom to top; each pull request comes before the ones built on it. */
                readonly numbers: Schema.$Array<Schema.Int>;
            }>>;
        }>;
        readonly failure: Schema.Union<readonly [typeof OrchestratorMcpFailure, typeof McpCapabilityUnavailableError, typeof PullRequestUrlInvalidError, typeof PullRequestTargetIncompleteError, typeof PullRequestHostRequiredError, typeof PullRequestUrlUnavailableError, typeof PullRequestThreadRequiredError, typeof PullRequestThreadNotFoundError, typeof PullRequestLinkFailedError, typeof PullRequestUnlinkFailedError, typeof PullRequestListFailedError, typeof PullRequestWatchFailedError, typeof PullRequestNotOpenError, typeof PullRequestWatchFromSubagentError, typeof PullRequestProjectNotFoundError, typeof PullRequestGuideFailedError]>;
        readonly failureMode: "error";
    }, McpInvocationContext.McpInvocationContext | Orchestrator.OrchestratorV2 | ProjectService.ProjectService | ThreadManagementService.ThreadManagementService>;
    readonly read_pull_request_guide: Tool.Tool<"read_pull_request_guide", {
        readonly parameters: Schema.Struct<{
            readonly url: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly repository: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly number: Schema.optional<Schema.Int>;
            readonly host: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
        }>;
        readonly success: Schema.Struct<{
            readonly host: Schema.String;
            readonly repository: Schema.String;
            readonly number: Schema.Int;
            readonly url: Schema.String;
            readonly guide: Schema.NullOr<Schema.Struct<{
                readonly headSha: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly generatedAt: Schema.String;
                readonly modelSelection: Schema.decodeTo<Schema.Struct<{
                    readonly instanceId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProviderInstanceId">;
                    readonly model: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly options: Schema.optionalKey<Schema.Union<readonly [Schema.$Array<Schema.Struct<{
                        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
                    }>>, Schema.decodeTo<Schema.$Array<Schema.Struct<{
                        readonly id: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly value: Schema.Union<readonly [Schema.decodeTo<Schema.String, Schema.String, never, never>, Schema.Boolean]>;
                    }>>, Schema.$Record<Schema.String, Schema.Unknown>, never, never>]>>;
                }>, Schema.Struct<{
                    readonly provider: Schema.optional<Schema.Unknown>;
                    readonly instanceId: Schema.optional<Schema.Unknown>;
                    readonly model: Schema.Unknown;
                    readonly options: Schema.optional<Schema.Unknown>;
                }>, never, never>;
                readonly stops: Schema.$Array<Schema.Struct<{
                    readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    readonly summary: Schema.String;
                    readonly attention: Schema.NullOr<Schema.Struct<{
                        readonly kind: Schema.Literals<readonly ["tradeoff", "contract", "product", "risk", "accessibility"]>;
                        readonly note: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                    }>>;
                    readonly excerpts: Schema.$Array<Schema.Struct<{
                        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly side: Schema.Literals<readonly ["new", "old"]>;
                        readonly start: Schema.Int;
                        readonly end: Schema.Int;
                        readonly caption: Schema.String;
                    }>>;
                    readonly files: Schema.$Array<Schema.Struct<{
                        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly note: Schema.optionalKey<Schema.String>;
                    }>>;
                    readonly notes: Schema.$Array<Schema.Struct<{
                        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly line: Schema.Int;
                        readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                        readonly body: Schema.String;
                    }>>;
                    readonly questions: Schema.$Array<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                }>>;
            }>>;
            readonly run: Schema.NullOr<Schema.Union<readonly [Schema.TaggedStruct<"Running", {
                readonly headSha: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly startedAt: Schema.String;
            }>, Schema.TaggedStruct<"Failed", {
                readonly headSha: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly failedAt: Schema.String;
                readonly detail: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            }>]>>;
            readonly currentHeadSha: Schema.NullOr<Schema.String>;
            readonly stale: Schema.Boolean;
        }>;
        readonly failure: Schema.Union<readonly [typeof OrchestratorMcpFailure, typeof McpCapabilityUnavailableError, typeof PullRequestUrlInvalidError, typeof PullRequestTargetIncompleteError, typeof PullRequestHostRequiredError, typeof PullRequestUrlUnavailableError, typeof PullRequestThreadRequiredError, typeof PullRequestThreadNotFoundError, typeof PullRequestLinkFailedError, typeof PullRequestUnlinkFailedError, typeof PullRequestListFailedError, typeof PullRequestWatchFailedError, typeof PullRequestNotOpenError, typeof PullRequestWatchFromSubagentError, typeof PullRequestProjectNotFoundError, typeof PullRequestGuideFailedError]>;
        readonly failureMode: "error";
    }, McpInvocationContext.McpInvocationContext | Orchestrator.OrchestratorV2 | ProjectService.ProjectService | PullRequestReviewGuideService.PullRequestReviewGuideService | ThreadManagementService.ThreadManagementService>;
    readonly unlink_pull_request: Tool.Tool<"unlink_pull_request", {
        readonly parameters: Schema.Struct<{
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly threadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
            readonly url: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly repository: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly number: Schema.optional<Schema.Int>;
            readonly host: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly success: Schema.Struct<{
            readonly host: Schema.String;
            readonly repository: Schema.String;
            readonly number: Schema.Int;
            readonly wasLinked: Schema.Boolean;
        }>;
        readonly failure: Schema.Union<readonly [typeof OrchestratorMcpFailure, typeof McpCapabilityUnavailableError, typeof PullRequestUrlInvalidError, typeof PullRequestTargetIncompleteError, typeof PullRequestHostRequiredError, typeof PullRequestUrlUnavailableError, typeof PullRequestThreadRequiredError, typeof PullRequestThreadNotFoundError, typeof PullRequestLinkFailedError, typeof PullRequestUnlinkFailedError, typeof PullRequestListFailedError, typeof PullRequestWatchFailedError, typeof PullRequestNotOpenError, typeof PullRequestWatchFromSubagentError, typeof PullRequestProjectNotFoundError, typeof PullRequestGuideFailedError]>;
        readonly failureMode: "error";
    }, McpInvocationContext.McpInvocationContext | Orchestrator.OrchestratorV2 | ProjectService.ProjectService | ThreadManagementService.ThreadManagementService>;
    readonly unwatch_pull_request: Tool.Tool<"unwatch_pull_request", {
        readonly parameters: Schema.Struct<{
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly threadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
            readonly url: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly repository: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly number: Schema.optional<Schema.Int>;
            readonly host: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly success: Schema.Struct<{
            readonly host: Schema.String;
            readonly repository: Schema.String;
            readonly number: Schema.Int;
            readonly url: Schema.String;
            readonly watching: Schema.Boolean;
            readonly wasWatching: Schema.Boolean;
        }>;
        readonly failure: Schema.Union<readonly [typeof OrchestratorMcpFailure, typeof McpCapabilityUnavailableError, typeof PullRequestUrlInvalidError, typeof PullRequestTargetIncompleteError, typeof PullRequestHostRequiredError, typeof PullRequestUrlUnavailableError, typeof PullRequestThreadRequiredError, typeof PullRequestThreadNotFoundError, typeof PullRequestLinkFailedError, typeof PullRequestUnlinkFailedError, typeof PullRequestListFailedError, typeof PullRequestWatchFailedError, typeof PullRequestNotOpenError, typeof PullRequestWatchFromSubagentError, typeof PullRequestProjectNotFoundError, typeof PullRequestGuideFailedError]>;
        readonly failureMode: "error";
    }, McpInvocationContext.McpInvocationContext | Orchestrator.OrchestratorV2 | ProjectService.ProjectService | ThreadManagementService.ThreadManagementService>;
    readonly watch_pull_request: Tool.Tool<"watch_pull_request", {
        readonly parameters: Schema.Struct<{
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly threadId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
            readonly url: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly repository: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly number: Schema.optional<Schema.Int>;
            readonly host: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>;
        readonly success: Schema.Struct<{
            readonly host: Schema.String;
            readonly repository: Schema.String;
            readonly number: Schema.Int;
            readonly url: Schema.String;
            readonly watching: Schema.Boolean;
            readonly wasWatching: Schema.Boolean;
        }>;
        readonly failure: Schema.Union<readonly [typeof OrchestratorMcpFailure, typeof McpCapabilityUnavailableError, typeof PullRequestUrlInvalidError, typeof PullRequestTargetIncompleteError, typeof PullRequestHostRequiredError, typeof PullRequestUrlUnavailableError, typeof PullRequestThreadRequiredError, typeof PullRequestThreadNotFoundError, typeof PullRequestLinkFailedError, typeof PullRequestUnlinkFailedError, typeof PullRequestListFailedError, typeof PullRequestWatchFailedError, typeof PullRequestNotOpenError, typeof PullRequestWatchFromSubagentError, typeof PullRequestProjectNotFoundError, typeof PullRequestGuideFailedError]>;
        readonly failureMode: "error";
    }, McpInvocationContext.McpInvocationContext | Orchestrator.OrchestratorV2 | ProjectService.ProjectService | ThreadManagementService.ThreadManagementService>;
    readonly write_pull_request_guides: Tool.Tool<"write_pull_request_guides", {
        readonly parameters: Schema.Struct<{
            readonly environmentId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "EnvironmentId">>;
            readonly pullRequests: Schema.$Array<Schema.Struct<{
                readonly url: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly repository: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
                readonly number: Schema.optional<Schema.Int>;
                readonly host: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            }>>;
        }>;
        readonly success: Schema.Struct<{
            readonly guides: Schema.$Array<Schema.Struct<{
                readonly host: Schema.String;
                readonly repository: Schema.String;
                readonly number: Schema.Int;
                readonly url: Schema.String;
                readonly outcome: Schema.Literals<readonly ["started", "running", "failed"]>;
                readonly detail: Schema.NullOr<Schema.String>;
            }>>;
        }>;
        readonly failure: Schema.Union<readonly [typeof OrchestratorMcpFailure, typeof McpCapabilityUnavailableError, typeof PullRequestUrlInvalidError, typeof PullRequestTargetIncompleteError, typeof PullRequestHostRequiredError, typeof PullRequestUrlUnavailableError, typeof PullRequestThreadRequiredError, typeof PullRequestThreadNotFoundError, typeof PullRequestLinkFailedError, typeof PullRequestUnlinkFailedError, typeof PullRequestListFailedError, typeof PullRequestWatchFailedError, typeof PullRequestNotOpenError, typeof PullRequestWatchFromSubagentError, typeof PullRequestProjectNotFoundError, typeof PullRequestGuideFailedError]>;
        readonly failureMode: "error";
    }, McpInvocationContext.McpInvocationContext | Orchestrator.OrchestratorV2 | ProjectService.ProjectService | PullRequestReviewGuideService.PullRequestReviewGuideService | ThreadManagementService.ThreadManagementService>;
}>;
export {};
