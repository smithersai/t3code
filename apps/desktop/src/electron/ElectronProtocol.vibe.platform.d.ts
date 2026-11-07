import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import * as Schema from "effect/Schema";
export declare const DESKTOP_HOST = "app";
export declare function withContentSecurityPolicy(response: Response, policy: string): Response;
declare const ElectronProtocolFetchError_base: Schema.Class<ElectronProtocolFetchError, Schema.TaggedStruct<"ElectronProtocolFetchError", {
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class ElectronProtocolFetchError extends ElectronProtocolFetchError_base {
}
export declare const proxyRequest: (request: Request, targetOrigin: URL, contentSecurityPolicy: string) => Effect.Effect<Response, ElectronProtocolFetchError, never>;
export declare const serveDesktopAsset: (request: Request, assetDirectory: string) => Effect.Effect<Response, never, FileSystem.FileSystem | Path.Path>;
export {};
