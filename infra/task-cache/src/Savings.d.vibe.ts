import * as Effect from "effect/Effect";
import * as Context from "effect/Context";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import type * as Cloudflare from "@cloudflare/workers-types";
import type { Summary } from "./Summary.vibe";
declare const SavingsError_base: Schema.Class<SavingsError, Schema.TaggedStruct<"SavingsError", {
    readonly operation: Schema.Literals<readonly ["record", "read", "cleanup"]>;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class SavingsError extends SavingsError_base {
    get message(): string;
}
declare const Database_base: Context.ServiceClass<Database, "@t3tools/task-cache/Savings/Database", Cloudflare.D1Database>;
export declare class Database extends Database_base {
}
declare const Savings_base: Context.ServiceClass<Savings, "@t3tools/task-cache/Savings", {
    readonly record: (summary: typeof Summary.Type, developer: string) => Effect.Effect<void, SavingsError>;
    readonly emitTotals: (developer?: string, host?: string) => Effect.Effect<void, SavingsError>;
    readonly cleanup: Effect.Effect<void, SavingsError>;
}>;
export declare class Savings extends Savings_base {
}
export declare const layer: Layer.Layer<Savings, never, Database>;
export {};
