import { type RemoteOpenTarget } from "@t3tools/contracts";
import * as NetService from "@t3tools/shared/Net";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ChildProcessSpawner from "effect/process/ChildProcessSpawner";
declare const RemoteOpenTargets_base: Context.ServiceClass<RemoteOpenTargets, "t3/environment/RemoteOpenTargets", {
    readonly resolveTargets: () => Effect.Effect<readonly RemoteOpenTarget[]>;
}>;
export declare class RemoteOpenTargets extends RemoteOpenTargets_base {
}
/** @public */
export declare const make: Effect.Effect<{
    readonly resolveTargets: () => Effect.Effect<ReadonlyArray<RemoteOpenTarget>>;
}, never, ChildProcessSpawner.ChildProcessSpawner | NetService.NetService>;
export declare const layer: Layer.Layer<RemoteOpenTargets, never, ChildProcessSpawner.ChildProcessSpawner | NetService.NetService>;
export {};
