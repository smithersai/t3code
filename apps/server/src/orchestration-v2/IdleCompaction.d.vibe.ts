import type { OrchestrationV2ThreadProjection } from "@t3tools/contracts";
export type IdleCompactionRecords = Pick<OrchestrationV2ThreadProjection, "thread" | "runs" | "messages" | "providerThreads" | "providerTurns" | "runtimeRequests" | "turnItems" | "contextTransfers">;
/**
 * When an idle Claude thread should compact, or null when it should not. The
 * window ends when the prompt cache of Claude's last request expires (1h on
 * subscriptions, 5m on API keys); compacting after that pays a full uncached
 * read.
 */
export declare function idleCompactionWindow({ thread, runs, messages, providerThreads, providerTurns, runtimeRequests, turnItems, contextTransfers, }: IdleCompactionRecords, nowMs: number): {
    readonly runId: (typeof runs)[number]["id"];
    readonly startMs: number;
    readonly endMs: number;
} | null;
