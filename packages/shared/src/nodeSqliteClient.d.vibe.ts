import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Client from "effect/sql/SqlClient";
import { SqlError } from "effect/sql/SqlError";
import type { SqliteClientConfig } from "./nodeSqliteClient.vibe.platform.js";
export { UnsupportedNodeSqliteOperationError, UnsupportedNodeSqliteVersionError } from "./nodeSqliteClient.vibe.platform.js";
export type { SqliteClientConfig } from "./nodeSqliteClient.vibe.platform.js";
/** Wrap the whole transaction; existing write transactions retain the writer, and writes on the reader fail as readonly. */
export declare const readOnly: <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
export declare const layer: (config: SqliteClientConfig) => Layer.Layer<Client.SqlClient, SqlError>;
