import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import * as SqlClient from "effect/sql/SqlClient";
declare const _default: Effect.Effect<void, Schema.SchemaError | import("effect/sql/SqlError").SqlError, SqlClient.SqlClient>;
export default _default;
