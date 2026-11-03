import { type OrchestrationV2ProjectedTurnItem, OrchestrationV2SearchThreadInput, type OrchestrationV2SearchThreadResult, type OrchestrationV2TurnItem, ThreadId, TurnItemId } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import * as Stream from "effect/Stream";
import * as SqlClient from "effect/sql/SqlClient";
import { ProjectionStoreReadError, ProjectionStoreThreadNotFoundError, type ProjectionStoreV2Error } from "./ProjectionStore.ts";
interface FindRow {
    readonly position: number;
    readonly visibility: OrchestrationV2ProjectedTurnItem["visibility"];
    readonly sourceThreadId: ThreadId;
    readonly sourceItemId: TurnItemId;
}
/** The memory projection uses the same match ordering as SQLite. */
export declare function findProjectedThreadItems(items: readonly OrchestrationV2ProjectedTurnItem[], input: OrchestrationV2SearchThreadInput, snapshotSequence: number, cwd?: string): OrchestrationV2SearchThreadResult;
export declare const makeThreadFind: (readIndex: (threadId: ThreadId) => Effect.Effect<readonly (Omit<FindRow, "position"> & {
    readonly item: Pick<OrchestrationV2TurnItem, "type">;
})[], ProjectionStoreV2Error>) => Effect.Effect<{
    searchThreadStream: (input: OrchestrationV2SearchThreadInput) => Stream.Stream<{
        readonly complete?: boolean;
        readonly snapshotSequence: number;
        readonly totalMatches: number;
        readonly activeIndex: number;
        readonly match: {
            readonly entryId: string;
            readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly occurrence: number;
        } | null;
        readonly navigation?: readonly {
            readonly entryId: string;
            readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly startIndex: number;
            readonly count: number;
        }[];
    }, ProjectionStoreReadError | ProjectionStoreThreadNotFoundError, never>;
    searchThread: (input: OrchestrationV2SearchThreadInput) => Effect.Effect<{
        readonly complete?: boolean;
        readonly snapshotSequence: number;
        readonly totalMatches: number;
        readonly activeIndex: number;
        readonly match: {
            readonly entryId: string;
            readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly occurrence: number;
        } | null;
        readonly navigation?: readonly {
            readonly entryId: string;
            readonly runId: (string & import("effect/Brand").Brand<"RunId">) | null;
            readonly startIndex: number;
            readonly count: number;
        }[];
    }, ProjectionStoreReadError | ProjectionStoreThreadNotFoundError, never>;
}, never, SqlClient.SqlClient>;
export {};
