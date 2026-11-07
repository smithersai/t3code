import { Effect } from "effect";
import * as SqlClient from "effect/sql/SqlClient";
/** Role-bearing credentials and sessions cannot safely receive new capabilities implicitly. */
declare const _default: Effect.Effect<void, import("effect/sql/SqlError").SqlError, SqlClient.SqlClient>;
export default _default;
