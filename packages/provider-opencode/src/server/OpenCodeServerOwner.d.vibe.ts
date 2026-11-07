import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Scope from "effect/Scope";
import * as OpenCodeRuntime from "./OpenCodeRuntime.ts";
declare const OpenCodeServerOwner_base: Context.ServiceClass<OpenCodeServerOwner, "@t3tools/provider-opencode/server/OpenCodeServerOwner", {
    readonly withServer: <A, E, R>(use: (server: OpenCodeRuntime.OpenCodeServerProcess) => Effect.Effect<A, E, R>) => Effect.Effect<A, E | OpenCodeRuntime.OpenCodeRuntimeError, R>;
}>;
export declare class OpenCodeServerOwner extends OpenCodeServerOwner_base {
}
export declare const make: (input: {
    readonly binaryPath: string;
    readonly directory: string;
    readonly serverPassword?: string;
    readonly environment?: NodeJS.ProcessEnv;
    readonly verify?: (url: string) => Effect.Effect<string, OpenCodeRuntime.OpenCodeRuntimeError>;
}) => Effect.Effect<{
    readonly withServer: <A, E, R>(use: (server: OpenCodeRuntime.OpenCodeServerProcess) => Effect.Effect<A, E, R>) => Effect.Effect<A, E | OpenCodeRuntime.OpenCodeRuntimeError, R>;
}, never, OpenCodeRuntime.OpenCodeRuntime | Scope.Scope>;
/** @public */
export declare const layer: (input: {
    readonly binaryPath: string;
    readonly directory: string;
    readonly serverPassword?: string;
    readonly environment?: NodeJS.ProcessEnv;
    readonly verify?: (url: string) => Effect.Effect<string, OpenCodeRuntime.OpenCodeRuntimeError>;
}) => Layer.Layer<OpenCodeServerOwner, never, OpenCodeRuntime.OpenCodeRuntime>;
export {};
