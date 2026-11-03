import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import { type VcsError, type VcsInitInput } from "@t3tools/contracts";
import * as VcsDriverRegistry from "./VcsDriverRegistry.ts";
declare const VcsProvisioningService_base: Context.ServiceClass<VcsProvisioningService, "t3/vcs/VcsProvisioningService", {
    readonly initRepository: (input: VcsInitInput) => Effect.Effect<void, VcsError>;
}>;
export declare class VcsProvisioningService extends VcsProvisioningService_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly initRepository: (input: VcsInitInput) => Effect.Effect<void, VcsError>;
}, never, VcsDriverRegistry.VcsDriverRegistry>;
export declare const layer: Layer.Layer<VcsProvisioningService, never, VcsDriverRegistry.VcsDriverRegistry>;
export {};
