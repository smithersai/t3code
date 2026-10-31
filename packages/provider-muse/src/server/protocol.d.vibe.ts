import type { ProviderApprovalDecision } from "@t3tools/contracts";
import * as Schema from "effect/Schema";
export declare const MuseItem: Schema.Struct<{
    readonly entryId: Schema.optional<Schema.String>;
    readonly children: Schema.optional<Schema.$Array<Schema.Struct<{
        readonly childId: Schema.String;
        readonly attempt: Schema.Int;
        readonly status: Schema.String;
        readonly label: Schema.optional<Schema.String>;
        readonly terminal: Schema.optional<Schema.String>;
        readonly durationMs: Schema.optional<Schema.Finite>;
        /** Present on a failed attempt, even one whose `terminal` is `completed`. */
        readonly failureKind: Schema.optional<Schema.String>;
        readonly failureReason: Schema.optional<Schema.String>;
    }>>>;
    readonly finalSummary: Schema.optional<Schema.String>;
    readonly itemId: Schema.String;
    readonly kind: Schema.String;
    readonly revision: Schema.Int;
    readonly status: Schema.String;
    readonly turnId: Schema.optional<Schema.NullOr<Schema.String>>;
    readonly text: Schema.optional<Schema.String>;
    readonly summary: Schema.optional<Schema.$Array<Schema.String>>;
    readonly tool: Schema.optional<Schema.String>;
    readonly args: Schema.optional<Schema.String>;
    readonly visibleOutput: Schema.optional<Schema.String>;
    readonly truncated: Schema.optional<Schema.Boolean>;
    readonly failureReason: Schema.optional<Schema.String>;
    readonly fallbackText: Schema.optional<Schema.String>;
    readonly commandText: Schema.optional<Schema.String>;
    readonly exitCode: Schema.optional<Schema.Int>;
    readonly durationMs: Schema.optional<Schema.Finite>;
    readonly subagentId: Schema.optional<Schema.String>;
    readonly childSessionId: Schema.optional<Schema.String>;
    readonly objective: Schema.optional<Schema.String>;
    readonly role: Schema.optional<Schema.String>;
    readonly controlStatus: Schema.optional<Schema.String>;
    readonly result: Schema.optional<Schema.Struct<{
        readonly summary: Schema.String;
        readonly text: Schema.optional<Schema.String>;
    }>>;
    readonly usage: Schema.optional<Schema.Struct<{
        readonly inputTokens: Schema.Int;
        readonly outputTokens: Schema.Int;
        readonly cachedTokens: Schema.Int;
        readonly reasoningTokens: Schema.Int;
        readonly cacheReadTokens: Schema.optional<Schema.Int>;
        readonly cacheWriteTokens: Schema.optional<Schema.Int>;
    }>>;
    readonly outcome: Schema.optional<Schema.String>;
    readonly trigger: Schema.optional<Schema.String>;
    readonly reason: Schema.optional<Schema.String>;
}>;
export type MuseItem = typeof MuseItem.Type;
export declare const MuseSessionResult: Schema.Struct<{
    readonly session: Schema.Struct<{
        readonly sessionId: Schema.String;
        readonly modelId: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly activeTurnId: Schema.optional<Schema.NullOr<Schema.String>>;
    }>;
    readonly history: Schema.optional<Schema.Struct<{
        readonly items: Schema.NullOr<Schema.$Array<Schema.Struct<{
            readonly entryId: Schema.optional<Schema.String>;
            readonly children: Schema.optional<Schema.$Array<Schema.Struct<{
                readonly childId: Schema.String;
                readonly attempt: Schema.Int;
                readonly status: Schema.String;
                readonly label: Schema.optional<Schema.String>;
                readonly terminal: Schema.optional<Schema.String>;
                readonly durationMs: Schema.optional<Schema.Finite>;
                /** Present on a failed attempt, even one whose `terminal` is `completed`. */
                readonly failureKind: Schema.optional<Schema.String>;
                readonly failureReason: Schema.optional<Schema.String>;
            }>>>;
            readonly finalSummary: Schema.optional<Schema.String>;
            readonly itemId: Schema.String;
            readonly kind: Schema.String;
            readonly revision: Schema.Int;
            readonly status: Schema.String;
            readonly turnId: Schema.optional<Schema.NullOr<Schema.String>>;
            readonly text: Schema.optional<Schema.String>;
            readonly summary: Schema.optional<Schema.$Array<Schema.String>>;
            readonly tool: Schema.optional<Schema.String>;
            readonly args: Schema.optional<Schema.String>;
            readonly visibleOutput: Schema.optional<Schema.String>;
            readonly truncated: Schema.optional<Schema.Boolean>;
            readonly failureReason: Schema.optional<Schema.String>;
            readonly fallbackText: Schema.optional<Schema.String>;
            readonly commandText: Schema.optional<Schema.String>;
            readonly exitCode: Schema.optional<Schema.Int>;
            readonly durationMs: Schema.optional<Schema.Finite>;
            readonly subagentId: Schema.optional<Schema.String>;
            readonly childSessionId: Schema.optional<Schema.String>;
            readonly objective: Schema.optional<Schema.String>;
            readonly role: Schema.optional<Schema.String>;
            readonly controlStatus: Schema.optional<Schema.String>;
            readonly result: Schema.optional<Schema.Struct<{
                readonly summary: Schema.String;
                readonly text: Schema.optional<Schema.String>;
            }>>;
            readonly usage: Schema.optional<Schema.Struct<{
                readonly inputTokens: Schema.Int;
                readonly outputTokens: Schema.Int;
                readonly cachedTokens: Schema.Int;
                readonly reasoningTokens: Schema.Int;
                readonly cacheReadTokens: Schema.optional<Schema.Int>;
                readonly cacheWriteTokens: Schema.optional<Schema.Int>;
            }>>;
            readonly outcome: Schema.optional<Schema.String>;
            readonly trigger: Schema.optional<Schema.String>;
            readonly reason: Schema.optional<Schema.String>;
        }>>>;
        readonly snapshot: Schema.optional<Schema.NullOr<Schema.Struct<{
            readonly schemaVersion: Schema.optional<Schema.Int>;
            readonly state: Schema.Struct<{
                readonly items: Schema.$Array<Schema.Struct<{
                    readonly entryId: Schema.optional<Schema.String>;
                    readonly children: Schema.optional<Schema.$Array<Schema.Struct<{
                        readonly childId: Schema.String;
                        readonly attempt: Schema.Int;
                        readonly status: Schema.String;
                        readonly label: Schema.optional<Schema.String>;
                        readonly terminal: Schema.optional<Schema.String>;
                        readonly durationMs: Schema.optional<Schema.Finite>;
                        /** Present on a failed attempt, even one whose `terminal` is `completed`. */
                        readonly failureKind: Schema.optional<Schema.String>;
                        readonly failureReason: Schema.optional<Schema.String>;
                    }>>>;
                    readonly finalSummary: Schema.optional<Schema.String>;
                    readonly itemId: Schema.String;
                    readonly kind: Schema.String;
                    readonly revision: Schema.Int;
                    readonly status: Schema.String;
                    readonly turnId: Schema.optional<Schema.NullOr<Schema.String>>;
                    readonly text: Schema.optional<Schema.String>;
                    readonly summary: Schema.optional<Schema.$Array<Schema.String>>;
                    readonly tool: Schema.optional<Schema.String>;
                    readonly args: Schema.optional<Schema.String>;
                    readonly visibleOutput: Schema.optional<Schema.String>;
                    readonly truncated: Schema.optional<Schema.Boolean>;
                    readonly failureReason: Schema.optional<Schema.String>;
                    readonly fallbackText: Schema.optional<Schema.String>;
                    readonly commandText: Schema.optional<Schema.String>;
                    readonly exitCode: Schema.optional<Schema.Int>;
                    readonly durationMs: Schema.optional<Schema.Finite>;
                    readonly subagentId: Schema.optional<Schema.String>;
                    readonly childSessionId: Schema.optional<Schema.String>;
                    readonly objective: Schema.optional<Schema.String>;
                    readonly role: Schema.optional<Schema.String>;
                    readonly controlStatus: Schema.optional<Schema.String>;
                    readonly result: Schema.optional<Schema.Struct<{
                        readonly summary: Schema.String;
                        readonly text: Schema.optional<Schema.String>;
                    }>>;
                    readonly usage: Schema.optional<Schema.Struct<{
                        readonly inputTokens: Schema.Int;
                        readonly outputTokens: Schema.Int;
                        readonly cachedTokens: Schema.Int;
                        readonly reasoningTokens: Schema.Int;
                        readonly cacheReadTokens: Schema.optional<Schema.Int>;
                        readonly cacheWriteTokens: Schema.optional<Schema.Int>;
                    }>>;
                    readonly outcome: Schema.optional<Schema.String>;
                    readonly trigger: Schema.optional<Schema.String>;
                    readonly reason: Schema.optional<Schema.String>;
                }>>;
            }>;
        }>>>;
    }>>;
}>;
export declare const MuseTurnStartResult: Schema.Struct<{
    readonly turnId: Schema.String;
}>;
export declare const MuseApproval: Schema.Struct<{
    readonly approvalId: Schema.String;
    readonly protectedWrite: Schema.optional<Schema.Boolean>;
    readonly judgeEscalated: Schema.optional<Schema.Boolean>;
    readonly sessionId: Schema.String;
    readonly turnId: Schema.optional<Schema.String>;
    readonly itemId: Schema.optional<Schema.String>;
    readonly toolName: Schema.optional<Schema.String>;
    readonly rawArgs: Schema.optional<Schema.String>;
    /** Set when a workflow child asks; `turnId` is then the child's run, not a session turn. */
    readonly subagentOrigin: Schema.optional<Schema.Struct<{
        readonly subagentId: Schema.String;
    }>>;
    readonly currentRequirementId: Schema.Struct<{
        readonly approvalId: Schema.String;
        readonly sourceIndex: Schema.Int;
    }>;
    readonly availableChoices: Schema.$Array<Schema.Struct<{
        readonly choiceId: Schema.String;
        readonly label: Schema.String;
        readonly decision: Schema.String;
        readonly scope: Schema.String;
    }>>;
    readonly subject: Schema.Struct<{
        readonly kind: Schema.String;
        readonly access: Schema.optional<Schema.String>;
        readonly command: Schema.optional<Schema.String>;
        readonly path: Schema.optional<Schema.String>;
        readonly host: Schema.optional<Schema.String>;
        readonly target: Schema.optional<Schema.String>;
    }>;
}>;
export type MuseApproval = typeof MuseApproval.Type;
export declare const MuseUserInput: Schema.Struct<{
    readonly userInputId: Schema.String;
    readonly sessionId: Schema.String;
    readonly turnId: Schema.String;
    readonly questions: Schema.$Array<Schema.Struct<{
        readonly id: Schema.String;
        readonly header: Schema.String;
        readonly question: Schema.String;
        readonly options: Schema.$Array<Schema.Struct<{
            readonly label: Schema.String;
            readonly description: Schema.optional<Schema.String>;
        }>>;
        readonly selection: Schema.Struct<{
            readonly mode: Schema.Literals<readonly ["single", "multiple"]>;
            readonly minSelections: Schema.optional<Schema.Int>;
            readonly maxSelections: Schema.optional<Schema.Int>;
        }>;
    }>>;
}>;
export type MuseUserInput = typeof MuseUserInput.Type;
export declare const MuseTokenUsageEvent: Schema.Struct<{
    readonly turnId: Schema.String;
    readonly promptTokens: Schema.Int;
    readonly usage: Schema.Struct<{
        readonly inputTokens: Schema.Int;
        readonly outputTokens: Schema.Int;
        readonly cachedTokens: Schema.Int;
        readonly reasoningTokens: Schema.Int;
        readonly cacheReadTokens: Schema.optional<Schema.Int>;
        readonly cacheWriteTokens: Schema.optional<Schema.Int>;
    }>;
}>;
export declare const MuseContextUsage: Schema.Struct<{
    readonly usedTokens: Schema.Int;
    readonly windowTokens: Schema.optional<Schema.Int>;
}>;
export declare const MuseTodoList: Schema.Struct<{
    readonly items: Schema.$Array<Schema.Struct<{
        readonly text: Schema.String;
        readonly status: Schema.String;
    }>>;
}>;
export declare const MuseTurnCompleted: Schema.Struct<{
    readonly turnId: Schema.String;
    readonly terminal: Schema.String;
    readonly reason: Schema.optional<Schema.String>;
    readonly error: Schema.optional<Schema.Struct<{
        readonly message: Schema.String;
        readonly quota: Schema.optional<Schema.Struct<{
            readonly resetsAtMs: Schema.Finite;
        }>>;
    }>>;
    readonly usage: Schema.optional<Schema.Struct<{
        readonly inputTokens: Schema.Int;
        readonly outputTokens: Schema.Int;
        readonly cachedTokens: Schema.Int;
        readonly reasoningTokens: Schema.Int;
        readonly cacheReadTokens: Schema.optional<Schema.Int>;
        readonly cacheWriteTokens: Schema.optional<Schema.Int>;
    }>>;
}>;
/** The latest instant a JavaScript Date holds; formatting a later one throws. */
export declare const LATEST_DATE_MS = 8640000000000000;
/** Latest response subscription windows; verbatim Meta percentages may exceed 100. */
export declare const MuseSubscriptionUsage: Schema.Struct<{
    readonly observedAtMs: Schema.Finite;
    readonly tier: Schema.String;
    readonly window: Schema.Struct<{
        readonly usedPercent: Schema.Finite;
        readonly windowDurationMins: Schema.Finite;
        readonly resetsAtMs: Schema.Finite;
    }>;
    readonly weekly: Schema.Struct<{
        readonly usedPercent: Schema.Finite;
        readonly resetsAtMs: Schema.Finite;
    }>;
}>;
export type MuseSubscriptionUsage = typeof MuseSubscriptionUsage.Type;
export declare const MuseTurnRetryScheduled: Schema.Struct<{
    readonly turnId: Schema.String;
    readonly nextAttempt: Schema.Int;
    readonly maxAttempts: Schema.Int;
    readonly reason: Schema.String;
    readonly retryDelayMs: Schema.Finite;
}>;
export declare const MuseCompactResult: Schema.Struct<{
    readonly status: Schema.String;
    readonly reason: Schema.optional<Schema.String>;
}>;
export declare const MuseItemEvent: Schema.Struct<{
    readonly item: Schema.Struct<{
        readonly entryId: Schema.optional<Schema.String>;
        readonly children: Schema.optional<Schema.$Array<Schema.Struct<{
            readonly childId: Schema.String;
            readonly attempt: Schema.Int;
            readonly status: Schema.String;
            readonly label: Schema.optional<Schema.String>;
            readonly terminal: Schema.optional<Schema.String>;
            readonly durationMs: Schema.optional<Schema.Finite>;
            /** Present on a failed attempt, even one whose `terminal` is `completed`. */
            readonly failureKind: Schema.optional<Schema.String>;
            readonly failureReason: Schema.optional<Schema.String>;
        }>>>;
        readonly finalSummary: Schema.optional<Schema.String>;
        readonly itemId: Schema.String;
        readonly kind: Schema.String;
        readonly revision: Schema.Int;
        readonly status: Schema.String;
        readonly turnId: Schema.optional<Schema.NullOr<Schema.String>>;
        readonly text: Schema.optional<Schema.String>;
        readonly summary: Schema.optional<Schema.$Array<Schema.String>>;
        readonly tool: Schema.optional<Schema.String>;
        readonly args: Schema.optional<Schema.String>;
        readonly visibleOutput: Schema.optional<Schema.String>;
        readonly truncated: Schema.optional<Schema.Boolean>;
        readonly failureReason: Schema.optional<Schema.String>;
        readonly fallbackText: Schema.optional<Schema.String>;
        readonly commandText: Schema.optional<Schema.String>;
        readonly exitCode: Schema.optional<Schema.Int>;
        readonly durationMs: Schema.optional<Schema.Finite>;
        readonly subagentId: Schema.optional<Schema.String>;
        readonly childSessionId: Schema.optional<Schema.String>;
        readonly objective: Schema.optional<Schema.String>;
        readonly role: Schema.optional<Schema.String>;
        readonly controlStatus: Schema.optional<Schema.String>;
        readonly result: Schema.optional<Schema.Struct<{
            readonly summary: Schema.String;
            readonly text: Schema.optional<Schema.String>;
        }>>;
        readonly usage: Schema.optional<Schema.Struct<{
            readonly inputTokens: Schema.Int;
            readonly outputTokens: Schema.Int;
            readonly cachedTokens: Schema.Int;
            readonly reasoningTokens: Schema.Int;
            readonly cacheReadTokens: Schema.optional<Schema.Int>;
            readonly cacheWriteTokens: Schema.optional<Schema.Int>;
        }>>;
        readonly outcome: Schema.optional<Schema.String>;
        readonly trigger: Schema.optional<Schema.String>;
        readonly reason: Schema.optional<Schema.String>;
    }>;
}>;
export declare const MuseDelta: Schema.Struct<{
    readonly itemId: Schema.String;
    readonly delta: Schema.String;
    readonly field: Schema.optional<Schema.String>;
}>;
export declare function museApprovalDecision(choice: Pick<MuseApproval["availableChoices"][number], "decision" | "scope">): ProviderApprovalDecision | undefined;
/** Shell approvals offer abort instead of denied; decline falls back to abort. */
export declare function museApprovalChoices(approval: Pick<MuseApproval, "availableChoices">): Map<"accept" | "acceptAlways" | "acceptForSession" | "cancel" | "decline", {
    readonly choiceId: string;
    readonly label: string;
    readonly decision: string;
    readonly scope: string;
}>;
export declare function museApprovalOptions(approval: Pick<MuseApproval, "availableChoices">): {
    decision: "accept" | "acceptAlways" | "acceptForSession" | "cancel" | "decline";
    label: string;
}[];
