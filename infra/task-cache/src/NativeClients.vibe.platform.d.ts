import type * as Cloudflare from "@cloudflare/workers-types";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
export declare const routePrefix = "/projects/t3code/native-clients/";
declare const NativeClientsError_base: Schema.Class<NativeClientsError, Schema.TaggedStruct<"NativeClientsError", {
    readonly status: Schema.Number;
    readonly reason: Schema.String;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class NativeClientsError extends NativeClientsError_base {
}
declare const Bindings_base: Context.ServiceClass<Bindings, "@t3tools/task-cache/NativeClients/Bindings", {
    readonly CLIENTS: Cloudflare.R2Bucket;
    readonly developerKeys: string;
    readonly readerKeys: string;
    readonly readLimit: Cloudflare.RateLimit;
    readonly storeLimit: Cloudflare.RateLimit;
}>;
export declare class Bindings extends Bindings_base {
}
declare const NativeClients_base: Context.ServiceClass<NativeClients, "@t3tools/task-cache/NativeClients", {
    readonly handle: (request: Request) => Effect.Effect<Response>;
}>;
export declare class NativeClients extends NativeClients_base {
}
export declare const make: Effect.Effect<{
    readonly handle: (request: Request) => Effect.Effect<Response>;
}, never, Bindings>;
export {};
