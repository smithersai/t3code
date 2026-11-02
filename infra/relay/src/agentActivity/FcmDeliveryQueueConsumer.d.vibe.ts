import type * as Cloudflare from "@alchemy.run/cloudflare";
import * as Effect from "effect/Effect";
import * as FcmDeliveries from "./FcmDeliveries.ts";
export declare const processMessage: (message: Cloudflare.Queues.Message<unknown>) => Effect.Effect<void, never, FcmDeliveries.FcmDeliveries>;
