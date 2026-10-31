import type { ChatAttachment, ModelSelection, OrchestrationV2ContextHandoff, OrchestrationV2HistoricalMessage, OrchestrationV2ProviderThread, OrchestrationV2ThreadProjection, OrchestrationV2TurnItem, ThreadTokenUsageSnapshot } from "@t3tools/contracts";
import * as Config from "effect/Config";
export declare const DEFAULT_HANDOFF_TOKEN_CAP = 16000;
export declare const handoffTokenCapConfig: Config.Config<number>;
export declare function latestNativeContextUsage(projection: Pick<OrchestrationV2ThreadProjection, "providerTurns" | "attempts" | "runs">, providerThread: OrchestrationV2ProviderThread): {
    usage: ThreadTokenUsageSnapshot;
    modelSelection: ModelSelection;
    reportedAt: string;
} | undefined;
/** Native occupancy survives selection changes; the previous model window and compaction threshold do not. */
export declare function contextUsageForHandoff(input: {
    readonly sameNativeThread: boolean;
    readonly sameSelection: boolean;
    readonly reuseTelemetry: boolean;
    readonly previousUsage: ThreadTokenUsageSnapshot | null | undefined;
    readonly knownModelWindow?: number | undefined;
}): ThreadTokenUsageSnapshot | null;
export declare function attachmentTokenAllowance(attachments: ReadonlyArray<ChatAttachment>): number;
export declare function handoffBudget(input: {
    readonly tokenCap: number;
    readonly userText: string;
    readonly attachments: ReadonlyArray<ChatAttachment>;
    readonly providerThread: OrchestrationV2ProviderThread;
    readonly nativeContextEstimate: number;
    readonly modelContextWindow?: number | undefined;
}): number;
export declare function historicalMessage(item: OrchestrationV2TurnItem): OrchestrationV2HistoricalMessage | null;
export declare function historyResponseItems(messages: ReadonlyArray<OrchestrationV2HistoricalMessage>, context: string): {
    type: string;
    role: string;
    content: {
        type: string;
        text: string;
    }[];
}[];
export declare function renderHistory(messages: ReadonlyArray<OrchestrationV2HistoricalMessage>, context: string): string;
export declare function historyCost(messages: ReadonlyArray<OrchestrationV2HistoricalMessage>, context: string): number;
export declare function selectHistory(input: {
    readonly messages: ReadonlyArray<OrchestrationV2HistoricalMessage>;
    readonly coverage: string;
    readonly omittedItems?: number;
    readonly budget: number;
}): {
    messages: {
        readonly role: "assistant" | "user";
        readonly text: string;
        readonly runStatus?: string | undefined;
        readonly threadId: string & import("effect/Brand").Brand<"ThreadId">;
        readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
        readonly itemId: string & import("effect/Brand").Brand<"TurnItemId">;
        readonly providerThreadId: (string & import("effect/Brand").Brand<"ProviderThreadId">) | null;
        readonly status: string;
        readonly kind: string;
    }[];
    omittedItemIds: (string & import("effect/Brand").Brand<"TurnItemId">)[];
    context: string;
    omittedItems: number;
};
export declare function handoffCoverage(input: {
    readonly threadId: string;
    readonly coveredRunOrdinals: OrchestrationV2ContextHandoff["coveredRunOrdinals"];
    readonly items: ReadonlyArray<OrchestrationV2TurnItem>;
}): string;
