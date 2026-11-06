import type { PgClient } from "@effect/sql-pg/PgClient";
import * as Cloudflare from "@alchemy.run/cloudflare";
import * as Drizzle from "@alchemy.run/drizzle";
import * as Planetscale from "@alchemy.run/planetscale";
import * as Alchemy from "alchemy";
import type { EffectPgDatabase } from "drizzle-orm/effect-postgres";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
declare const RelayDb_base: Context.ServiceClass<RelayDb, "t3code-relay/db/RelayDb", EffectPgDatabase & {
    readonly $client: PgClient;
}>;
export declare class RelayDb extends RelayDb_base {
}
declare const RelayTransactions_base: Context.ServiceClass<RelayTransactions, "t3code-relay/db/RelayTransactions", {
    readonly withTransaction: RelayDb["Service"]["$client"]["withTransaction"];
}>;
export declare class RelayTransactions extends RelayTransactions_base {
    static readonly layer: Layer.Layer<RelayTransactions, never, RelayDb>;
}
export declare const PlanetscaleDatabase: Effect.Effect<{
    branch: Planetscale.PostgresBranch | undefined;
    database: Planetscale.PostgresDatabase;
    runtimeRole: Planetscale.PostgresRole;
}, never, Drizzle.Providers | Planetscale.Providers | Alchemy.Stack>;
export declare const RelayHyperdrive: Effect.Effect<Cloudflare.Hyperdrive.Connection, never, Cloudflare.Providers | Drizzle.Providers | Planetscale.Providers | Alchemy.Stack>;
export {};
