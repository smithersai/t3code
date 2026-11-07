import * as Alchemy from "alchemy";
import * as Cloudflare from "@alchemy.run/cloudflare";
import * as Effect from "effect/Effect";
export declare const cacheName: Effect.Effect<string, never, Alchemy.Stack>;
export declare const Index: Effect.Effect<Cloudflare.D1.Database, never, Cloudflare.Providers | Alchemy.Stack>;
export declare const Artifacts: Effect.Effect<Cloudflare.R2.Bucket, never, Cloudflare.Providers | Alchemy.Stack>;
export declare const NativeClients: Effect.Effect<Cloudflare.R2.Bucket, never, Cloudflare.Providers | Alchemy.Stack>;
export declare const Savings: Effect.Effect<Cloudflare.D1.Database, never, Cloudflare.Providers | Alchemy.Stack>;
