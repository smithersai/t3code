import * as Effect from "effect/Effect";
import * as SqlClient from "effect/sql/SqlClient";
/**
 * Trigrams match 3+ character substrings without a scan, ignoring case and accents.
 * Generated user-role notices would flood results and appear as "You".
 * VACUUM can change rowids, so `t3 doctor` must rebuild this contentless index afterward.
 * Index only finished messages, folding apostrophes as queries do; scan if the index is missing.
 */
declare const _default: Effect.Effect<void, import("effect/sql/SqlError").SqlError, SqlClient.SqlClient>;
export default _default;
