import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import * as DesktopEnvironment from "../app/DesktopEnvironment.ts";
export type WslServerTreeResult = {
    readonly ok: true;
    readonly root: string;
} | {
    readonly ok: false;
    readonly reason: string;
    readonly fatal: boolean;
};
declare const DesktopWslServerTreeExtractError_base: Schema.Class<DesktopWslServerTreeExtractError, Schema.TaggedStruct<"DesktopWslServerTreeExtractError", {
    readonly targetDir: Schema.String;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class DesktopWslServerTreeExtractError extends DesktopWslServerTreeExtractError_base {
    get message(): string;
}
declare const DesktopWslServerTree_base: Context.ServiceClass<DesktopWslServerTree, "@t3tools/desktop/wsl/DesktopWslServerTree", {
    readonly ensure: Effect.Effect<WslServerTreeResult>;
    readonly cleanupLegacy: Effect.Effect<void>;
}>;
export declare class DesktopWslServerTree extends DesktopWslServerTree_base {
}
export declare const forEachBoundedTree: <Node, E, R>(roots: readonly Node[], visit: (node: Node) => Effect.Effect<ReadonlyArray<Node>, E, R>) => Effect.Effect<void, E, R>;
/** @public */
export declare const make: Effect.Effect<{
    readonly ensure: Effect.Effect<WslServerTreeResult>;
    readonly cleanupLegacy: Effect.Effect<void>;
}, never, DesktopEnvironment.DesktopEnvironment | FileSystem.FileSystem>;
export declare const layer: Layer.Layer<DesktopWslServerTree, never, DesktopEnvironment.DesktopEnvironment | FileSystem.FileSystem>;
export interface DesktopWslServerTreeTestStub {
    readonly result?: WslServerTreeResult;
    readonly cleanupLegacy?: Effect.Effect<void>;
}
export declare const layerTest: (stub?: DesktopWslServerTreeTestStub) => Layer.Layer<DesktopWslServerTree, never, DesktopEnvironment.DesktopEnvironment>;
export {};
