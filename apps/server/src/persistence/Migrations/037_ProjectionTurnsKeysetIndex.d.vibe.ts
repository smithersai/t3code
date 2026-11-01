import * as Effect from "effect/Effect";
import * as SqlClient from "effect/sql/SqlClient";
/** Keyset pagination needs both requested_at and turn_id indexed to avoid sorting all turns before LIMIT. */
declare const _default: Effect.Effect<void, import("effect/sql/SqlError").SqlError, SqlClient.SqlClient>;
export default _default;
