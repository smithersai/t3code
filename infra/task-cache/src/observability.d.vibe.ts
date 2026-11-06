import * as Axiom from "@alchemy.run/axiom";
import * as Effect from "effect/Effect";
/** @throws {never} */
export declare const savingsQuery: (dataset: string, group?: "developer" | "host" | "ci", lifetime?: boolean) => string;
export declare const Observability: Effect.Effect<{
    traces: Axiom.Dataset;
    token: Axiom.ApiToken;
    dashboard: Axiom.Dashboard;
}, never, Axiom.Providers | import("alchemy").Stack>;
