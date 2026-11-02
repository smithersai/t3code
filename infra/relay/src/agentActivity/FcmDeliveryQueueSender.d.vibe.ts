import { Context } from "effect";
import type * as Cloudflare from "@alchemy.run/cloudflare";
import type * as Effect from "effect/Effect";
import type * as FcmDeliveries from "./FcmDeliveries.ts";
declare const FcmDeliveryQueueSender_base: Context.ServiceClass<FcmDeliveryQueueSender, "t3code-relay/agentActivity/FcmDeliveryQueueSender", {
    readonly send: (body: FcmDeliveries.FcmDeliveryJob) => Effect.Effect<void, Cloudflare.Queues.SendError>;
}>;
export declare class FcmDeliveryQueueSender extends FcmDeliveryQueueSender_base {
}
export {};
