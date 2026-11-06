import type * as Alchemy from "alchemy";
import * as Cloudflare from "@alchemy.run/cloudflare";
import * as Effect from "effect/Effect";
import * as HookInboxStore from "./HookInboxStore.ts";
type Call<A> = Effect.Effect<A, never, Alchemy.RuntimeContext>;
declare const HookInboxObject_base: Effect.Effect<Cloudflare.DurableObject<HookInboxObject>, never, HookInboxObject | Cloudflare.Worker> & {
    new (_: never): {
        /** Holds a request for `baseUrl`; false when the inbox is full and nothing was stored. */
        readonly hold: (hook: HookInboxStore.HeldHook, baseUrl: string) => Call<boolean>;
        readonly wake: (baseUrl: string) => Call<boolean>;
        readonly clear: () => Call<void>;
    } & {
        "~alchemy/name": "HookInboxObject";
    };
    from(scriptName: Alchemy.Input<string>): Effect.Effect<Cloudflare.DurableObject<HookInboxObject>, never, Cloudflare.Worker>;
    from<Req = never>(worker: Alchemy.Dependencies<HookInboxObject> | Effect.Effect<Alchemy.Dependencies<HookInboxObject>, never, Req>): Effect.Effect<Cloudflare.DurableObject<HookInboxObject>, never, Req | Cloudflare.Worker>;
    make<Req = never>(impl: Effect.Effect<Effect.Effect<{
        /** Holds a request for `baseUrl`; false when the inbox is full and nothing was stored. */
        readonly hold: (hook: HookInboxStore.HeldHook, baseUrl: string) => Call<boolean>;
        readonly wake: (baseUrl: string) => Call<boolean>;
        readonly clear: () => Call<void>;
    }, never, Cloudflare.DurableObjectState | Alchemy.RuntimeContext | import("effect/Scope").Scope>, never, Req>): import("effect/Layer").Layer<HookInboxObject, never, Exclude<Req, Cloudflare.DurableObjectServices> | Cloudflare.Worker>;
};
export declare class HookInboxObject extends HookInboxObject_base {
}
export declare const layer: import("effect/Layer").Layer<HookInboxObject, never, Cloudflare.Worker>;
export {};
