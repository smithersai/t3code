import * as Schema from "effect/Schema";
import { ForwardCompatibleArray } from "./baseSchemas.js";
export declare const MIN_SCHEDULED_TASK_INTERVAL_MS = 60000;
export declare const ScheduledTaskWebhookSignature: Schema.Struct<{
    header: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    encoding: Schema.Literals<readonly ["hex", "base64"]>;
    prefix: Schema.String;
}>;
export type ScheduledTaskWebhookSignature = typeof ScheduledTaskWebhookSignature.Type;
/** Matches how long the relay holds a request for an offline environment. */
export declare const MAX_WEBHOOK_DELIVERY_AGE_MINUTES: number;
export declare function isWebhookDedupeTemplate(template: string): boolean;
export declare const MAX_WEBHOOK_FILTERS = 16;
export declare const ScheduledTaskWebhookFilter: Schema.Union<readonly [Schema.Struct<{
    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly op: Schema.Literals<readonly ["equals", "notEquals", "startsWith"]>;
    readonly value: Schema.String;
}>, Schema.Struct<{
    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly op: Schema.Literal<"in">;
    readonly value: Schema.$Array<Schema.String>;
}>, Schema.Struct<{
    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly op: Schema.Literal<"exists">;
}>]>;
export type ScheduledTaskWebhookFilter = typeof ScheduledTaskWebhookFilter.Type;
export type ScheduledTaskWebhookFilterOp = ScheduledTaskWebhookFilter["op"];
/** Accept legacy sub-minute schedules so users can still manage them. */
export declare const ScheduledTaskSchedule: Schema.Union<readonly [Schema.Struct<{
    readonly type: Schema.Literal<"interval">;
    readonly everyMs: Schema.Int;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"fixed_time">;
    readonly timeOfDay: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly weekdays: Schema.optional<Schema.$Array<Schema.Int>>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"webhook">;
    readonly signature: Schema.NullOr<Schema.Struct<{
        header: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        encoding: Schema.Literals<readonly ["hex", "base64"]>;
        prefix: Schema.String;
    }>>;
    readonly maxDeliveryAgeMinutes: Schema.optional<Schema.NullOr<Schema.Int>>;
    readonly dedupe: Schema.optional<Schema.Struct<{
        readonly replayKey: Schema.optional<Schema.String>;
        readonly coalesceKey: Schema.optional<Schema.String>;
        readonly coalesceWindowSeconds: Schema.optional<Schema.Int>;
    }>>;
    readonly filters: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly op: Schema.Literals<readonly ["equals", "notEquals", "startsWith"]>;
        readonly value: Schema.String;
    }>, Schema.Struct<{
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly op: Schema.Literal<"in">;
        readonly value: Schema.$Array<Schema.String>;
    }>, Schema.Struct<{
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly op: Schema.Literal<"exists">;
    }>]>>>;
}>]>;
export type ScheduledTaskSchedule = typeof ScheduledTaskSchedule.Type;
export declare const ScheduledTaskUpsertSchedule: Schema.Union<readonly [Schema.Struct<{
    readonly type: Schema.Literal<"interval">;
    readonly everyMs: Schema.Int;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"fixed_time">;
    readonly timeOfDay: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly weekdays: Schema.optional<Schema.$Array<Schema.Int>>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"webhook">;
    readonly signature: Schema.optional<Schema.NullOr<Schema.Struct<{
        readonly header: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly encoding: Schema.Literals<readonly ["hex", "base64"]>;
        readonly prefix: Schema.String;
        readonly secret: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly secretRef: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SecretRef">>;
    }>>>;
    readonly maxDeliveryAgeMinutes: Schema.optional<Schema.NullOr<Schema.Int>>;
    readonly dedupe: Schema.optional<Schema.Struct<{
        readonly replayKey: Schema.optional<Schema.String>;
        readonly coalesceKey: Schema.optional<Schema.String>;
        readonly coalesceWindowSeconds: Schema.optional<Schema.Int>;
    }>>;
    readonly filters: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly op: Schema.Literals<readonly ["equals", "notEquals", "startsWith"]>;
        readonly value: Schema.String;
    }>, Schema.Struct<{
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly op: Schema.Literal<"in">;
        readonly value: Schema.$Array<Schema.String>;
    }>, Schema.Struct<{
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly op: Schema.Literal<"exists">;
    }>]>>>;
}>]>;
export type ScheduledTaskUpsertSchedule = typeof ScheduledTaskUpsertSchedule.Type;
export declare const ScheduledTaskRunStatus: Schema.Literals<readonly ["never", "running", "succeeded", "failed"]>;
export type ScheduledTaskRunStatus = typeof ScheduledTaskRunStatus.Type;
export declare const ScheduledTaskWebhookEndpoint: Schema.Struct<{
    readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly url: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    readonly hasSecret: Schema.Boolean;
}>;
export type ScheduledTaskWebhookEndpoint = typeof ScheduledTaskWebhookEndpoint.Type;
export declare const ScheduledTask: Schema.Struct<{
    readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">;
    readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly prompt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly enabled: Schema.Boolean;
    readonly schedule: Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"interval">;
        readonly everyMs: Schema.Int;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"fixed_time">;
        readonly timeOfDay: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly weekdays: Schema.optional<Schema.$Array<Schema.Int>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"webhook">;
        readonly signature: Schema.NullOr<Schema.Struct<{
            header: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            encoding: Schema.Literals<readonly ["hex", "base64"]>;
            prefix: Schema.String;
        }>>;
        readonly maxDeliveryAgeMinutes: Schema.optional<Schema.NullOr<Schema.Int>>;
        readonly dedupe: Schema.optional<Schema.Struct<{
            readonly replayKey: Schema.optional<Schema.String>;
            readonly coalesceKey: Schema.optional<Schema.String>;
            readonly coalesceWindowSeconds: Schema.optional<Schema.Int>;
        }>>;
        readonly filters: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
            readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly op: Schema.Literals<readonly ["equals", "notEquals", "startsWith"]>;
            readonly value: Schema.String;
        }>, Schema.Struct<{
            readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly op: Schema.Literal<"in">;
            readonly value: Schema.$Array<Schema.String>;
        }>, Schema.Struct<{
            readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly op: Schema.Literal<"exists">;
        }>]>>>;
    }>]>;
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly threadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
    readonly workspaceStrategy: Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"root">;
        readonly branch: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"existing_worktree">;
        readonly worktreePath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly branch: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"worktree">;
        readonly baseRef: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly branch: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly startFromOrigin: Schema.optional<Schema.Boolean>;
    }>]>;
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
    readonly runtimeMode: Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>;
    readonly interactionMode: Schema.Literals<readonly ["default", "plan"]>;
    readonly createdBy: Schema.Literals<readonly ["user", "agent", "system"]>;
    readonly creationSource: Schema.Literals<readonly ["web", "mobile", "mcp", "provider", "server"]>;
    readonly createdAt: Schema.String;
    readonly updatedAt: Schema.String;
    readonly nextRunAt: Schema.NullOr<Schema.String>;
    readonly lastRunAt: Schema.NullOr<Schema.String>;
    readonly lastRunStatus: Schema.Literals<readonly ["never", "running", "succeeded", "failed"]>;
    readonly lastRunError: Schema.NullOr<Schema.String>;
    readonly runCount: Schema.Int;
    readonly webhook: Schema.optional<Schema.Struct<{
        readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly url: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly hasSecret: Schema.Boolean;
    }>>;
}>;
export type ScheduledTask = typeof ScheduledTask.Type;
export declare const ScheduledTaskListInput: Schema.Struct<{}>;
export type ScheduledTaskListInput = typeof ScheduledTaskListInput.Type;
export declare const ScheduledTaskListResult: Schema.Struct<{
    readonly tasks: ForwardCompatibleArray<Schema.Struct<{
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">;
        readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly prompt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly enabled: Schema.Boolean;
        readonly schedule: Schema.Union<readonly [Schema.Struct<{
            readonly type: Schema.Literal<"interval">;
            readonly everyMs: Schema.Int;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"fixed_time">;
            readonly timeOfDay: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly weekdays: Schema.optional<Schema.$Array<Schema.Int>>;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"webhook">;
            readonly signature: Schema.NullOr<Schema.Struct<{
                header: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                encoding: Schema.Literals<readonly ["hex", "base64"]>;
                prefix: Schema.String;
            }>>;
            readonly maxDeliveryAgeMinutes: Schema.optional<Schema.NullOr<Schema.Int>>;
            readonly dedupe: Schema.optional<Schema.Struct<{
                readonly replayKey: Schema.optional<Schema.String>;
                readonly coalesceKey: Schema.optional<Schema.String>;
                readonly coalesceWindowSeconds: Schema.optional<Schema.Int>;
            }>>;
            readonly filters: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly op: Schema.Literals<readonly ["equals", "notEquals", "startsWith"]>;
                readonly value: Schema.String;
            }>, Schema.Struct<{
                readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly op: Schema.Literal<"in">;
                readonly value: Schema.$Array<Schema.String>;
            }>, Schema.Struct<{
                readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly op: Schema.Literal<"exists">;
            }>]>>>;
        }>]>;
        readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
        readonly threadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
        readonly workspaceStrategy: Schema.Union<readonly [Schema.Struct<{
            readonly type: Schema.Literal<"root">;
            readonly branch: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"existing_worktree">;
            readonly worktreePath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly branch: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"worktree">;
            readonly baseRef: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly branch: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly startFromOrigin: Schema.optional<Schema.Boolean>;
        }>]>;
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
        readonly runtimeMode: Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>;
        readonly interactionMode: Schema.Literals<readonly ["default", "plan"]>;
        readonly createdBy: Schema.Literals<readonly ["user", "agent", "system"]>;
        readonly creationSource: Schema.Literals<readonly ["web", "mobile", "mcp", "provider", "server"]>;
        readonly createdAt: Schema.String;
        readonly updatedAt: Schema.String;
        readonly nextRunAt: Schema.NullOr<Schema.String>;
        readonly lastRunAt: Schema.NullOr<Schema.String>;
        readonly lastRunStatus: Schema.Literals<readonly ["never", "running", "succeeded", "failed"]>;
        readonly lastRunError: Schema.NullOr<Schema.String>;
        readonly runCount: Schema.Int;
        readonly webhook: Schema.optional<Schema.Struct<{
            readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly url: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly hasSecret: Schema.Boolean;
        }>>;
    }>>;
}>;
export type ScheduledTaskListResult = typeof ScheduledTaskListResult.Type;
export declare const ScheduledTaskUpsertInput: Schema.Struct<{
    readonly id: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">>;
    readonly requireExisting: Schema.optional<Schema.Boolean>;
    readonly commandId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "CommandId">>;
    readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly prompt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly enabled: Schema.Boolean;
    readonly schedule: Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"interval">;
        readonly everyMs: Schema.Int;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"fixed_time">;
        readonly timeOfDay: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly weekdays: Schema.optional<Schema.$Array<Schema.Int>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"webhook">;
        readonly signature: Schema.optional<Schema.NullOr<Schema.Struct<{
            readonly header: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly encoding: Schema.Literals<readonly ["hex", "base64"]>;
            readonly prefix: Schema.String;
            readonly secret: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly secretRef: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "SecretRef">>;
        }>>>;
        readonly maxDeliveryAgeMinutes: Schema.optional<Schema.NullOr<Schema.Int>>;
        readonly dedupe: Schema.optional<Schema.Struct<{
            readonly replayKey: Schema.optional<Schema.String>;
            readonly coalesceKey: Schema.optional<Schema.String>;
            readonly coalesceWindowSeconds: Schema.optional<Schema.Int>;
        }>>;
        readonly filters: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
            readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly op: Schema.Literals<readonly ["equals", "notEquals", "startsWith"]>;
            readonly value: Schema.String;
        }>, Schema.Struct<{
            readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly op: Schema.Literal<"in">;
            readonly value: Schema.$Array<Schema.String>;
        }>, Schema.Struct<{
            readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly op: Schema.Literal<"exists">;
        }>]>>>;
    }>]>;
    readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
    readonly threadId: Schema.optional<Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>>;
    readonly workspaceStrategy: Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"root">;
        readonly branch: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"existing_worktree">;
        readonly worktreePath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly branch: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"worktree">;
        readonly baseRef: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly branch: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        readonly startFromOrigin: Schema.optional<Schema.Boolean>;
    }>]>;
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
    readonly runtimeMode: Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>;
    readonly interactionMode: Schema.Literals<readonly ["default", "plan"]>;
    readonly createdBy: Schema.optional<Schema.Literals<readonly ["user", "agent", "system"]>>;
    readonly creationSource: Schema.optional<Schema.Literals<readonly ["web", "mobile", "mcp", "provider", "server"]>>;
}>;
export type ScheduledTaskUpsertInput = typeof ScheduledTaskUpsertInput.Type;
export declare const ScheduledTaskSetEnabledInput: Schema.Struct<{
    readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">;
    readonly enabled: Schema.Boolean;
}>;
export type ScheduledTaskSetEnabledInput = typeof ScheduledTaskSetEnabledInput.Type;
export declare const ScheduledTaskDeleteInput: Schema.Struct<{
    readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">;
}>;
export type ScheduledTaskDeleteInput = typeof ScheduledTaskDeleteInput.Type;
export declare const ScheduledTaskRunNowInput: Schema.Struct<{
    readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">;
}>;
export type ScheduledTaskRunNowInput = typeof ScheduledTaskRunNowInput.Type;
export declare const ScheduledTaskRotateWebhookTokenInput: Schema.Struct<{
    readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">;
}>;
export type ScheduledTaskRotateWebhookTokenInput = typeof ScheduledTaskRotateWebhookTokenInput.Type;
export declare const ScheduledTaskWebhookDeliveryId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskWebhookDeliveryId">;
export type ScheduledTaskWebhookDeliveryId = typeof ScheduledTaskWebhookDeliveryId.Type;
export declare const ScheduledTaskWebhookDeliveryOutcome: Schema.Literals<readonly ["accepted", "dispatch_failed", "duplicate", "coalesced", "rejected_signature", "disabled", "rate_limited", "expired", "filtered"]>;
export type ScheduledTaskWebhookDeliveryOutcome = typeof ScheduledTaskWebhookDeliveryOutcome.Type;
export declare const ScheduledTaskWebhookDeliverySummary: Schema.Struct<{
    readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskWebhookDeliveryId">;
    readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">;
    readonly receivedAt: Schema.String;
    readonly method: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly contentType: Schema.NullOr<Schema.String>;
    readonly bodyBytes: Schema.Int;
    readonly outcome: Schema.Union<readonly [Schema.Literals<readonly ["accepted", "dispatch_failed", "duplicate", "coalesced", "rejected_signature", "disabled", "rate_limited", "expired", "filtered"]>, Schema.String]>;
    readonly signatureVerified: Schema.Boolean;
    readonly pendingWindow: Schema.optional<Schema.Boolean>;
    readonly missingFields: Schema.$Array<Schema.String>;
    readonly error: Schema.NullOr<Schema.String>;
}>;
export type ScheduledTaskWebhookDeliverySummary = typeof ScheduledTaskWebhookDeliverySummary.Type;
export declare const ScheduledTaskWebhookDelivery: Schema.Struct<{
    readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskWebhookDeliveryId">;
    readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">;
    readonly receivedAt: Schema.String;
    readonly method: Schema.decodeTo<Schema.String, Schema.String, never, never>;
    readonly contentType: Schema.NullOr<Schema.String>;
    readonly bodyBytes: Schema.Int;
    readonly outcome: Schema.Union<readonly [Schema.Literals<readonly ["accepted", "dispatch_failed", "duplicate", "coalesced", "rejected_signature", "disabled", "rate_limited", "expired", "filtered"]>, Schema.String]>;
    readonly signatureVerified: Schema.Boolean;
    readonly pendingWindow: Schema.optional<Schema.Boolean>;
    readonly missingFields: Schema.$Array<Schema.String>;
    readonly error: Schema.NullOr<Schema.String>;
    readonly query: Schema.String;
    readonly headers: Schema.$Record<Schema.String, Schema.String>;
    readonly body: Schema.String;
    readonly bodyTruncated: Schema.Boolean;
    readonly renderedPrompt: Schema.NullOr<Schema.String>;
}>;
export type ScheduledTaskWebhookDelivery = typeof ScheduledTaskWebhookDelivery.Type;
export declare const ScheduledTaskListWebhookDeliveriesInput: Schema.Struct<{
    readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">;
    /**
     * Sent by clients that decode any outcome. Shipped clients decode a closed
     * list and fail on the whole response, so without it the server leaves out
     * rows with outcomes they don't know.
     */
    readonly acceptAnyOutcome: Schema.optional<Schema.Boolean>;
}>;
export type ScheduledTaskListWebhookDeliveriesInput = typeof ScheduledTaskListWebhookDeliveriesInput.Type;
export declare const ScheduledTaskListWebhookDeliveriesResult: Schema.Struct<{
    readonly deliveries: Schema.$Array<Schema.Struct<{
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskWebhookDeliveryId">;
        readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">;
        readonly receivedAt: Schema.String;
        readonly method: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly contentType: Schema.NullOr<Schema.String>;
        readonly bodyBytes: Schema.Int;
        readonly outcome: Schema.Union<readonly [Schema.Literals<readonly ["accepted", "dispatch_failed", "duplicate", "coalesced", "rejected_signature", "disabled", "rate_limited", "expired", "filtered"]>, Schema.String]>;
        readonly signatureVerified: Schema.Boolean;
        readonly pendingWindow: Schema.optional<Schema.Boolean>;
        readonly missingFields: Schema.$Array<Schema.String>;
        readonly error: Schema.NullOr<Schema.String>;
    }>>;
}>;
export type ScheduledTaskListWebhookDeliveriesResult = typeof ScheduledTaskListWebhookDeliveriesResult.Type;
export declare const ScheduledTaskGetWebhookDeliveryInput: Schema.Struct<{
    readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">;
    readonly deliveryId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskWebhookDeliveryId">;
    readonly acceptAnyOutcome: Schema.optional<Schema.Boolean>;
}>;
export type ScheduledTaskGetWebhookDeliveryInput = typeof ScheduledTaskGetWebhookDeliveryInput.Type;
export declare const ScheduledTaskGetWebhookDeliveryResult: Schema.Struct<{
    readonly delivery: Schema.Struct<{
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskWebhookDeliveryId">;
        readonly taskId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">;
        readonly receivedAt: Schema.String;
        readonly method: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly contentType: Schema.NullOr<Schema.String>;
        readonly bodyBytes: Schema.Int;
        readonly outcome: Schema.Union<readonly [Schema.Literals<readonly ["accepted", "dispatch_failed", "duplicate", "coalesced", "rejected_signature", "disabled", "rate_limited", "expired", "filtered"]>, Schema.String]>;
        readonly signatureVerified: Schema.Boolean;
        readonly pendingWindow: Schema.optional<Schema.Boolean>;
        readonly missingFields: Schema.$Array<Schema.String>;
        readonly error: Schema.NullOr<Schema.String>;
        readonly query: Schema.String;
        readonly headers: Schema.$Record<Schema.String, Schema.String>;
        readonly body: Schema.String;
        readonly bodyTruncated: Schema.Boolean;
        readonly renderedPrompt: Schema.NullOr<Schema.String>;
    }>;
}>;
export type ScheduledTaskGetWebhookDeliveryResult = typeof ScheduledTaskGetWebhookDeliveryResult.Type;
export declare const ScheduledTaskMutationResult: Schema.Struct<{
    readonly task: Schema.Struct<{
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">;
        readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly prompt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly enabled: Schema.Boolean;
        readonly schedule: Schema.Union<readonly [Schema.Struct<{
            readonly type: Schema.Literal<"interval">;
            readonly everyMs: Schema.Int;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"fixed_time">;
            readonly timeOfDay: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly weekdays: Schema.optional<Schema.$Array<Schema.Int>>;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"webhook">;
            readonly signature: Schema.NullOr<Schema.Struct<{
                header: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                encoding: Schema.Literals<readonly ["hex", "base64"]>;
                prefix: Schema.String;
            }>>;
            readonly maxDeliveryAgeMinutes: Schema.optional<Schema.NullOr<Schema.Int>>;
            readonly dedupe: Schema.optional<Schema.Struct<{
                readonly replayKey: Schema.optional<Schema.String>;
                readonly coalesceKey: Schema.optional<Schema.String>;
                readonly coalesceWindowSeconds: Schema.optional<Schema.Int>;
            }>>;
            readonly filters: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly op: Schema.Literals<readonly ["equals", "notEquals", "startsWith"]>;
                readonly value: Schema.String;
            }>, Schema.Struct<{
                readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly op: Schema.Literal<"in">;
                readonly value: Schema.$Array<Schema.String>;
            }>, Schema.Struct<{
                readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly op: Schema.Literal<"exists">;
            }>]>>>;
        }>]>;
        readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
        readonly threadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
        readonly workspaceStrategy: Schema.Union<readonly [Schema.Struct<{
            readonly type: Schema.Literal<"root">;
            readonly branch: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"existing_worktree">;
            readonly worktreePath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly branch: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"worktree">;
            readonly baseRef: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly branch: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly startFromOrigin: Schema.optional<Schema.Boolean>;
        }>]>;
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
        readonly runtimeMode: Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>;
        readonly interactionMode: Schema.Literals<readonly ["default", "plan"]>;
        readonly createdBy: Schema.Literals<readonly ["user", "agent", "system"]>;
        readonly creationSource: Schema.Literals<readonly ["web", "mobile", "mcp", "provider", "server"]>;
        readonly createdAt: Schema.String;
        readonly updatedAt: Schema.String;
        readonly nextRunAt: Schema.NullOr<Schema.String>;
        readonly lastRunAt: Schema.NullOr<Schema.String>;
        readonly lastRunStatus: Schema.Literals<readonly ["never", "running", "succeeded", "failed"]>;
        readonly lastRunError: Schema.NullOr<Schema.String>;
        readonly runCount: Schema.Int;
        readonly webhook: Schema.optional<Schema.Struct<{
            readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly url: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly hasSecret: Schema.Boolean;
        }>>;
    }>;
}>;
export type ScheduledTaskMutationResult = typeof ScheduledTaskMutationResult.Type;
export declare const ScheduledTaskDeleteResult: Schema.Struct<{
    readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">;
}>;
export type ScheduledTaskDeleteResult = typeof ScheduledTaskDeleteResult.Type;
export declare const ScheduledTaskRunNowResult: Schema.Struct<{
    readonly task: Schema.Struct<{
        readonly id: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">;
        readonly title: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly prompt: Schema.decodeTo<Schema.String, Schema.String, never, never>;
        readonly enabled: Schema.Boolean;
        readonly schedule: Schema.Union<readonly [Schema.Struct<{
            readonly type: Schema.Literal<"interval">;
            readonly everyMs: Schema.Int;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"fixed_time">;
            readonly timeOfDay: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly weekdays: Schema.optional<Schema.$Array<Schema.Int>>;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"webhook">;
            readonly signature: Schema.NullOr<Schema.Struct<{
                header: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                encoding: Schema.Literals<readonly ["hex", "base64"]>;
                prefix: Schema.String;
            }>>;
            readonly maxDeliveryAgeMinutes: Schema.optional<Schema.NullOr<Schema.Int>>;
            readonly dedupe: Schema.optional<Schema.Struct<{
                readonly replayKey: Schema.optional<Schema.String>;
                readonly coalesceKey: Schema.optional<Schema.String>;
                readonly coalesceWindowSeconds: Schema.optional<Schema.Int>;
            }>>;
            readonly filters: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly op: Schema.Literals<readonly ["equals", "notEquals", "startsWith"]>;
                readonly value: Schema.String;
            }>, Schema.Struct<{
                readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly op: Schema.Literal<"in">;
                readonly value: Schema.$Array<Schema.String>;
            }>, Schema.Struct<{
                readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
                readonly op: Schema.Literal<"exists">;
            }>]>>>;
        }>]>;
        readonly projectId: Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ProjectId">;
        readonly threadId: Schema.NullOr<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ThreadId">>;
        readonly workspaceStrategy: Schema.Union<readonly [Schema.Struct<{
            readonly type: Schema.Literal<"root">;
            readonly branch: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"existing_worktree">;
            readonly worktreePath: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly branch: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"worktree">;
            readonly baseRef: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly branch: Schema.optional<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly startFromOrigin: Schema.optional<Schema.Boolean>;
        }>]>;
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
        readonly runtimeMode: Schema.Literals<readonly ["approval-required", "auto-accept-edits", "auto", "full-access"]>;
        readonly interactionMode: Schema.Literals<readonly ["default", "plan"]>;
        readonly createdBy: Schema.Literals<readonly ["user", "agent", "system"]>;
        readonly creationSource: Schema.Literals<readonly ["web", "mobile", "mcp", "provider", "server"]>;
        readonly createdAt: Schema.String;
        readonly updatedAt: Schema.String;
        readonly nextRunAt: Schema.NullOr<Schema.String>;
        readonly lastRunAt: Schema.NullOr<Schema.String>;
        readonly lastRunStatus: Schema.Literals<readonly ["never", "running", "succeeded", "failed"]>;
        readonly lastRunError: Schema.NullOr<Schema.String>;
        readonly runCount: Schema.Int;
        readonly webhook: Schema.optional<Schema.Struct<{
            readonly path: Schema.decodeTo<Schema.String, Schema.String, never, never>;
            readonly url: Schema.NullOr<Schema.decodeTo<Schema.String, Schema.String, never, never>>;
            readonly hasSecret: Schema.Boolean;
        }>>;
    }>;
}>;
export type ScheduledTaskRunNowResult = typeof ScheduledTaskRunNowResult.Type;
declare const ScheduledTaskError_base: Schema.Class<ScheduledTaskError, Schema.TaggedStruct<"ScheduledTaskError", {
    readonly message: Schema.String;
    readonly taskId: Schema.optional<Schema.brand<Schema.decodeTo<Schema.String, Schema.String, never, never>, "ScheduledTaskId">>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class ScheduledTaskError extends ScheduledTaskError_base {
}
export {};
