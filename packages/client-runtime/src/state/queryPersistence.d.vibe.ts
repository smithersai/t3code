import type { EnvironmentId } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Option from "effect/Option";
import * as Schema from "effect/Schema";
declare const EnvironmentQueryStore_base: Context.Reference<{
    readonly load: (environmentId: EnvironmentId, key: string) => Effect.Effect<Option.Option<string>>;
    readonly save: (environmentId: EnvironmentId, key: string, payload: string) => Effect.Effect<void>;
} | null>;
export declare class EnvironmentQueryStore extends EnvironmentQueryStore_base {
}
export interface QueryPersistence<A> {
    readonly load: (environmentId: EnvironmentId, key: string) => Effect.Effect<Option.Option<A>>;
    readonly save: (environmentId: EnvironmentId, key: string, value: A) => Effect.Effect<void>;
}
export declare function persistQuery<A, I>(schema: Schema.Codec<A, I>): QueryPersistence<A>;
export {};
