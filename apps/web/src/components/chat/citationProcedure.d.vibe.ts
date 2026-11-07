import { type AtomCommandSuccess } from "@t3tools/client-runtime/state/runtime";
import { Atom } from "effect/reactivity";
import type { TimelineEntry } from "../../session-logic.vibe";
import { environmentThreadDetails, threadEnvironment } from "../../state/threads";
import type { AssistantCitationRequest } from "./AssistantCitationSource";
import type { MessagesTimelineRow } from "./MessagesTimeline.logic.vibe";
/** Whether the cited response is in the loaded history, after paging toward it. */
export type CitedHistory = {
    readonly _tag: "loading";
} | {
    readonly _tag: "found";
} | {
    readonly _tag: "failed";
};
export type CitationPhase = {
    readonly _tag: "loading";
} | {
    readonly _tag: "expanding";
} | {
    readonly _tag: "ready";
    readonly rowId: string;
} | {
    readonly _tag: "failed";
};
export interface CitedThreadSnapshot {
    readonly message: "assistant" | "other" | null;
    readonly hasMoreHistory: boolean;
    readonly loadFailed?: true;
}
export type CitedHistoryOutcome = {
    readonly _tag: "found";
} | {
    readonly _tag: "failed";
    readonly title: string;
    readonly description: string;
} | {
    readonly _tag: "aborted";
};
type HistoryPageResult = AtomCommandSuccess<Awaited<ReturnType<typeof threadEnvironment.loadEarlierHistory.run>>>;
/**
 * Pages history toward the cited message until it is loaded, the thread runs
 * out of history, or loading fails. `readThread` resolves once the thread
 * detail is settled (loaded and no history page in flight), or with null when
 * the signal aborts.
 * @throws {never}
 */
export declare function loadCitedHistory(input: {
    readonly signal: AbortSignal;
    readonly readThread: () => Promise<CitedThreadSnapshot | null>;
    readonly loadThrough: () => Promise<HistoryPageResult>;
}): Promise<CitedHistoryOutcome>;
/** Where the citation stands for the rows the timeline currently shows. */
export declare function resolveCitationPhase(input: {
    readonly history: CitedHistory;
    readonly messageId: string;
    readonly entries: ReadonlyArray<TimelineEntry>;
    readonly rows: ReadonlyArray<MessagesTimelineRow>;
}): CitationPhase;
type ThreadDetail<K extends keyof typeof environmentThreadDetails> = Atom.Type<ReturnType<(typeof environmentThreadDetails)[K]>>;
/**
 * The cited thread as `loadCitedHistory` reads it, or null while it is still
 * settling. A thread that failed to load before any projection arrived counts
 * as settled, so the citation fails instead of waiting on the stream's retries.
 */
export declare function citedThreadSnapshot(input: {
    readonly thread: ThreadDetail<"quietThreadAtom">;
    readonly history: ThreadDetail<"historyAtom">;
    readonly status: ThreadDetail<"statusAtom">;
    readonly error: ThreadDetail<"errorAtom">;
    readonly messageId: string;
}): CitedThreadSnapshot | null;
export declare function useCitedHistory(request: AssistantCitationRequest | null): CitedHistory;
export {};
