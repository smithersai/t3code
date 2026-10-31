import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Path from "effect/Path";
import * as ChildProcessSpawner from "effect/process/ChildProcessSpawner";
declare const OpenCodeServerLedger_base: Context.ServiceClass<OpenCodeServerLedger, "@t3tools/provider-opencode/server/OpenCodeServerLedger", {
    readonly track: (server: {
        readonly pid: number;
        readonly port: number;
        readonly args: ReadonlyArray<string>;
    }) => Effect.Effect<Effect.Effect<void>>;
}>;
export declare class OpenCodeServerLedger extends OpenCodeServerLedger_base {
}
export declare const make: (input: {
    readonly stateDir: string;
    readonly ownerPid?: number;
}) => Effect.Effect<{
    track: (server: {
        readonly pid: number;
        readonly port: number;
        readonly args: ReadonlyArray<string>;
    }) => Effect.Effect<Effect.Effect<void>>;
    reapOrphans: Effect.Effect<void, never, never>;
}, never, ChildProcessSpawner.ChildProcessSpawner | FileSystem.FileSystem | Path.Path>;
export declare const layer: (input: {
    readonly stateDir: string;
}) => Layer.Layer<OpenCodeServerLedger, never, ChildProcessSpawner.ChildProcessSpawner | FileSystem.FileSystem | Path.Path>;
export declare const layerTest: Layer.Layer<OpenCodeServerLedger, never, never>;
export {};
