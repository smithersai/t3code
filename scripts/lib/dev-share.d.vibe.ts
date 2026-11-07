/** Vite proxies the backend, so only the web port needs a share mapping. */
import { type TailscaleCommandError } from "@t3tools/tailscale";
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import type { ChildProcessSpawner } from "effect/process";
declare const TailscaleUnavailableError_base: Schema.Class<TailscaleUnavailableError, Schema.TaggedStruct<"TailscaleUnavailableError", {
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class TailscaleUnavailableError extends TailscaleUnavailableError_base {
    get message(): string;
    get hint(): string;
}
declare const TailnetNameMissingError_base: Schema.Class<TailnetNameMissingError, Schema.TaggedStruct<"TailnetNameMissingError", {}>, import("effect/Cause").YieldableError>;
export declare class TailnetNameMissingError extends TailnetNameMissingError_base {
    get message(): string;
    get hint(): string;
}
declare const DevServeFailedError_base: Schema.Class<DevServeFailedError, Schema.TaggedStruct<"DevServeFailedError", {
    readonly stage: Schema.Literals<readonly ["clear-existing", "serve"]>;
    readonly webPort: Schema.Number;
    readonly explanation: Schema.optional<Schema.String>;
    readonly cause: Schema.optional<Schema.Defect>;
}>, import("effect/Cause").YieldableError>;
export declare class DevServeFailedError extends DevServeFailedError_base {
    get message(): string;
    get hint(): undefined;
}
export type DevShareError = TailscaleUnavailableError | TailnetNameMissingError | DevServeFailedError;
/** Finalizer cleanup must be uninterruptible or cancellation can leave stale mappings. */
export declare const unshareDevServer: (webPort: number) => Effect.Effect<{
    readonly cleared: boolean;
    readonly explanation?: string | undefined;
    readonly cause?: TailscaleCommandError | undefined;
}, never, ChildProcessSpawner.ChildProcessSpawner>;
export interface DevShareResult {
    readonly url: string;
    readonly host: string;
}
/**
 * Publishes `webPort` on the tailnet. The tailnet port always matches the web
 * port so the URL is stable; `localTarget` points it at the backend instead
 * when the backend serves a built client (`--built`).
 */
export declare const shareDevServer: (input: {
    readonly webPort: number;
    readonly localTarget?: {
        readonly port: number;
        readonly host: string;
    };
}) => Effect.Effect<{
    url: string;
    host: string;
}, DevServeFailedError | TailnetNameMissingError | TailscaleUnavailableError, ChildProcessSpawner.ChildProcessSpawner>;
export {};
