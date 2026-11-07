import { Effect } from "effect";
import type * as SqlClient from "effect/sql/SqlClient";
/**
 * Exclude generated notices and subagent threads: search hides them, and ACP subagents rewrite
 * their finished answer on every streamed chunk.
 * Migration triggers, backfill, rebuild and scans share this predicate; `row` may be `new`.
 * @throws {never}
 */
export declare const indexedMessageCondition: (sql: SqlClient.SqlClient, row?: string) => import("effect/sql/Statement").Fragment;
/**
 * What the index stores for a message: its text with curly apostrophes
 * straight, as search folds a query, since iOS keyboards type "’" and others
 * type "'". Migration 69's triggers use it too. `payload` is the message's
 * JSON column.
 * @throws {never}
 */
export declare const indexedMessageText: (sql: SqlClient.SqlClient, payload: string) => import("effect/sql/Statement").Fragment;
/**
 * Refills the search index from the messages table. The index is keyed by
 * message rowid, so anything that may renumber or copy rows (VACUUM, a dev
 * database copy) rebuilds it instead of trusting it. Databases from before
 * migration 69, or on an SQLite without FTS5 trigrams, have no index.
 */
export declare const rebuildMessageSearch: (sql: SqlClient.SqlClient) => Effect.Effect<void, import("effect/sql/SqlError").SqlError, never>;
