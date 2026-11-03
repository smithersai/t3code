import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Path from "effect/Path";
import type { VcsDriverKind, VcsError, VcsRepositoryIdentity } from "@t3tools/contracts";
import * as VcsProjectConfig from "./VcsProjectConfig.vibe";
import * as VcsDriver from "./VcsDriver.ts";
export interface VcsDriverResolveInput {
    readonly cwd: string;
    readonly requestedKind?: VcsDriverKind | "auto";
}
export interface VcsDriverHandle {
    readonly kind: VcsDriverKind;
    readonly repository: VcsRepositoryIdentity;
    readonly driver: VcsDriver.VcsDriver["Service"];
}
declare const VcsDriverRegistry_base: Context.ServiceClass<VcsDriverRegistry, "t3/vcs/VcsDriverRegistry", {
    readonly get: (kind: VcsDriverKind) => Effect.Effect<VcsDriver.VcsDriver["Service"], VcsError>;
    readonly detect: (input: VcsDriverResolveInput) => Effect.Effect<VcsDriverHandle | null, VcsError>;
    readonly resolve: (input: VcsDriverResolveInput) => Effect.Effect<VcsDriverHandle, VcsError>;
}>;
export declare class VcsDriverRegistry extends VcsDriverRegistry_base {
}
export declare const make: Effect.Effect<{
    readonly get: (kind: VcsDriverKind) => Effect.Effect<VcsDriver.VcsDriver["Service"], VcsError>;
    readonly detect: (input: VcsDriverResolveInput) => Effect.Effect<VcsDriverHandle | null, VcsError>;
    readonly resolve: (input: VcsDriverResolveInput) => Effect.Effect<VcsDriverHandle, VcsError>;
}, never, import("@t3tools/shared/Crypto").Crypto | FileSystem.FileSystem | Path.Path | import("./VcsProcess.ts").VcsProcess | VcsProjectConfig.VcsProjectConfig>;
export declare const layer: Layer.Layer<VcsDriverRegistry, never, import("@t3tools/shared/Crypto").Crypto | FileSystem.FileSystem | Path.Path | import("./VcsProcess.ts").VcsProcess>;
export {};
