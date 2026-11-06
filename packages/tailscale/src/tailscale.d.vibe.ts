import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import { HttpClient } from "effect/http";
import { ChildProcessSpawner } from "effect/process";
export declare const DEFAULT_TAILSCALE_SERVE_PORT = 443;
/**
 * Failure kinds we can name without quoting the CLI. Anything unrecognized
 * becomes "unknown" rather than falling back to raw text — stderr can contain
 * auth keys (`tskey-…`) and node names, and these labels are logged.
 */
export declare const TailscaleStderrDiagnostic: Schema.Literals<readonly ["no-existing-handler", "not-logged-in", "permission-denied", "unknown"]>;
export type TailscaleStderrDiagnostic = typeof TailscaleStderrDiagnostic.Type;
declare const TailscaleCommandSpawnError_base: Schema.Class<TailscaleCommandSpawnError, Schema.TaggedStruct<"TailscaleCommandSpawnError", {
    readonly executable: Schema.Literals<readonly ["tailscale", "tailscale.exe"]>;
    readonly subcommand: Schema.Literals<readonly ["status", "serve", "debug"]>;
    readonly argumentCount: Schema.Number;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class TailscaleCommandSpawnError extends TailscaleCommandSpawnError_base {
    get message(): string;
}
declare const TailscaleCommandOutputError_base: Schema.Class<TailscaleCommandOutputError, Schema.TaggedStruct<"TailscaleCommandOutputError", {
    readonly executable: Schema.Literals<readonly ["tailscale", "tailscale.exe"]>;
    readonly subcommand: Schema.Literals<readonly ["status", "serve", "debug"]>;
    readonly argumentCount: Schema.Number;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
declare class TailscaleCommandOutputError extends TailscaleCommandOutputError_base {
    get message(): string;
}
declare const TailscaleCommandExitError_base: Schema.Class<TailscaleCommandExitError, Schema.TaggedStruct<"TailscaleCommandExitError", {
    readonly executable: Schema.Literals<readonly ["tailscale", "tailscale.exe"]>;
    readonly subcommand: Schema.Literals<readonly ["status", "serve", "debug"]>;
    readonly argumentCount: Schema.Number;
    readonly exitCode: Schema.Number;
    readonly stdoutLength: Schema.optional<Schema.Number>;
    readonly stderrLength: Schema.Number;
    readonly stderrDiagnostic: Schema.optional<Schema.Literals<readonly ["no-existing-handler", "not-logged-in", "permission-denied", "unknown"]>>;
}>, import("effect/Cause").YieldableError>;
export declare class TailscaleCommandExitError extends TailscaleCommandExitError_base {
    get message(): string;
}
declare const TailscaleCommandTimeoutError_base: Schema.Class<TailscaleCommandTimeoutError, Schema.TaggedStruct<"TailscaleCommandTimeoutError", {
    readonly executable: Schema.Literals<readonly ["tailscale", "tailscale.exe"]>;
    readonly subcommand: Schema.Literals<readonly ["status", "serve", "debug"]>;
    readonly argumentCount: Schema.Number;
    readonly timeoutMs: Schema.Number;
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class TailscaleCommandTimeoutError extends TailscaleCommandTimeoutError_base {
    get message(): string;
}
export type TailscaleCommandError = TailscaleCommandSpawnError | TailscaleCommandOutputError | TailscaleCommandExitError | TailscaleCommandTimeoutError;
declare const TailscaleStatusParseError_base: Schema.Class<TailscaleStatusParseError, Schema.TaggedStruct<"TailscaleStatusParseError", {
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class TailscaleStatusParseError extends TailscaleStatusParseError_base {
    get message(): string;
}
declare const TailscaleStatusJson: Schema.Struct<{
    readonly Self: Schema.optional<Schema.Struct<{
        readonly DNSName: Schema.optional<Schema.Unknown>;
        readonly TailscaleIPs: Schema.optional<Schema.Unknown>;
        readonly CapMap: Schema.optional<Schema.Unknown>;
    }>>;
}>;
export type TailscaleStatusJson = typeof TailscaleStatusJson.Type;
export interface TailscaleStatus {
    readonly magicDnsName: string | null;
    readonly tailnetIpv4Addresses: readonly string[];
    /**
     * `tailscale serve --https` needs the `https` capability, which the control
     * plane grants once the tailnet enables HTTPS certificates. `null` when the
     * CLI reports no capability map (older CLI), so callers still attempt serve.
     */
    readonly httpsServeEnabled: boolean | null;
}
/** @throws {never} */
export declare function isTailscaleIpv4Address(address: string): boolean;
export declare const parseTailscaleStatus: (rawStatusJson: string) => Effect.Effect<TailscaleStatus, TailscaleStatusParseError>;
export declare const readTailscaleStatus: Effect.Effect<TailscaleStatus, TailscaleCommandExitError | TailscaleCommandOutputError | TailscaleCommandSpawnError | TailscaleCommandTimeoutError | TailscaleStatusParseError, ChildProcessSpawner.ChildProcessSpawner>;
export interface TailscaleExitNode {
    readonly name: string | null;
    readonly online: boolean;
}
/**
 * `ExitNodeStatus` is present only while an exit node is in use, but it has no
 * name. The name comes from the peer marked `ExitNode: true`.
 */
export declare const parseTailscaleExitNode: (rawStatusJson: string) => Effect.Effect<TailscaleExitNode | null, TailscaleStatusParseError>;
export declare const readTailscaleExitNode: Effect.Effect<TailscaleExitNode | null, TailscaleCommandExitError | TailscaleCommandOutputError | TailscaleCommandSpawnError | TailscaleCommandTimeoutError | TailscaleStatusParseError, ChildProcessSpawner.ChildProcessSpawner>;
/**
 * `tailscale status --json` does not report this for the local node. `tailscale
 * down` clears WantRunning but keeps RunSSH, so check both.
 */
export declare const parseTailscaleSshEnabled: (rawPrefsJson: string) => Effect.Effect<boolean, TailscaleStatusParseError>;
export declare const readTailscaleSshEnabled: Effect.Effect<boolean, TailscaleCommandExitError | TailscaleCommandOutputError | TailscaleCommandSpawnError | TailscaleCommandTimeoutError | TailscaleStatusParseError, ChildProcessSpawner.ChildProcessSpawner>;
/** @throws {never} */
export declare function buildTailscaleHttpsBaseUrl(input: {
    readonly magicDnsName: string;
    readonly servePort?: number;
}): string;
export declare const ensureTailscaleServe: (input: {
    readonly localPort: number;
    readonly servePort?: number;
    readonly localHost?: string;
}) => Effect.Effect<void, TailscaleCommandError, ChildProcessSpawner.ChildProcessSpawner>;
export declare const disableTailscaleServe: (input?: {
    readonly servePort?: number;
} | undefined) => Effect.Effect<void, TailscaleCommandError, ChildProcessSpawner.ChildProcessSpawner>;
export declare const probeTailscaleHttpsEndpoint: (input: {
    readonly baseUrl: string;
    readonly timeout?: Duration.Input;
}) => Effect.Effect<boolean, never, HttpClient.HttpClient>;
export {};
