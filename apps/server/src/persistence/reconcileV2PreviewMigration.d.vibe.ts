import { Effect } from "effect";
import * as Migrator from "effect/sql/Migrator";
import * as SqlClient from "effect/sql/SqlClient";
export declare const reconcileV2PreviewMigration: () => Effect.Effect<(readonly [number, string])[], Migrator.MigrationError | import("effect/sql/SqlError").SqlError, SqlClient.SqlClient>;
