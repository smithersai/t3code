import * as Context from "effect/Context";
import * as Layer from "effect/Layer";
import type * as Stream from "effect/Stream";
export type ConnectionWakeup = "application-active" | "application-active-probe" | "application-active-long" | "credentials-changed" | "network-changed";
export declare function resetsRetryBackoff(reason: ConnectionWakeup): boolean;
export declare function shouldResubscribeAfterWakeup(reason: ConnectionWakeup): boolean;
declare const ConnectionWakeups_base: Context.ServiceClass<ConnectionWakeups, "@t3tools/client-runtime/connection/wakeups/ConnectionWakeups", {
    readonly changes: Stream.Stream<ConnectionWakeup>;
}>;
export declare class ConnectionWakeups extends ConnectionWakeups_base {
}
export declare const layer: (service: ConnectionWakeups["Service"]) => Layer.Layer<ConnectionWakeups, never, never>;
export {};
