import * as Schema from "effect/Schema";
import type { LinuxWindowSnapshot } from "./LinuxSnapShot.vibe";
export declare const Window: Schema.Struct<{
    readonly id: Schema.Int;
    readonly title: Schema.NullOr<Schema.String>;
    readonly app_id: Schema.NullOr<Schema.String>;
    readonly pid: Schema.NullOr<Schema.Int>;
    readonly layout: Schema.Struct<{
        readonly window_size: Schema.Tuple<readonly [Schema.Int, Schema.Int]>;
    }>;
}>;
export declare function niriSocketPath(env?: NodeJS.ProcessEnv): string | undefined;
export declare class NiriConnection {
    private readonly socket;
    private readonly listeners;
    private readonly failures;
    private failure;
    constructor(path: string);
    waitFor<T>(select: (value: unknown) => T | undefined): Promise<T>;
    send(request: unknown): void;
    close(error?: Error): void;
}
export declare function request(path: string, message: unknown): Promise<unknown>;
export declare function activateNiriWindow(path: string, title: string, signal: AbortSignal): Promise<void>;
export declare function captureNiriWindow(path: string): Promise<LinuxWindowSnapshot>;
