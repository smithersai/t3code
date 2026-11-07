import { type SourceControlProviderAuth, type SourceControlProviderDiscoveryItem, type SourceControlProviderInfo, type SourceControlProviderKind } from "@t3tools/contracts";
import type * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Option from "effect/Option";
import type * as SourceControlProvider from "./SourceControlProvider.vibe";
import type * as SourceControlHost from "./SourceControlHost.vibe";
export interface SourceControlAuthProbeInput {
    readonly stdout: string;
    readonly stderr: string;
    readonly exitCode: SourceControlHost.SourceControlProcessOutput["exitCode"];
}
export interface SourceControlUnknownRemoteRefinementInput {
    readonly cwd: string;
    readonly context: SourceControlProvider.SourceControlProviderContext;
    readonly auth: SourceControlAuthProbeInput;
}
interface SourceControlDiscoverySpecBase {
    readonly kind: SourceControlProviderKind;
    readonly label: string;
    readonly installHint: string;
}
export type SourceControlCliDiscoverySpec = SourceControlDiscoverySpecBase & {
    readonly type: "cli";
    readonly executable: string;
    readonly versionArgs: ReadonlyArray<string>;
    readonly authArgs: ReadonlyArray<string>;
    /** @throws {never} */
    readonly remoteRefinementArgs?: (context: SourceControlProvider.SourceControlProviderContext) => ReadonlyArray<string>;
    readonly probeTimeoutMs?: number;
    /** @throws {never} */
    readonly parseAuth: (input: SourceControlAuthProbeInput) => SourceControlProviderAuth;
    /**
     * `null` when the CLI holds nothing for the remote; `undefined` when its output cannot say.
     * @throws {never}
     */
    readonly refineUnknownRemote?: (input: SourceControlUnknownRemoteRefinementInput) => SourceControlProviderInfo | null | undefined;
};
export type SourceControlApiDiscoverySpec = SourceControlDiscoverySpecBase & {
    readonly type: "api";
    readonly probeAuth: Effect.Effect<SourceControlProviderAuth, never>;
};
export type SourceControlManagedCliDiscoverySpec = SourceControlDiscoverySpecBase & {
    readonly type: "managed-cli";
    readonly probe: (cwd: string) => Effect.Effect<SourceControlProviderDiscoveryItem>;
    /** Null includes missing CLIs. Failure means unknown and must not be cached by the registry. */
    readonly refineUnknownRemote: (input: {
        readonly cwd: string;
        readonly context: SourceControlProvider.SourceControlProviderContext;
    }) => Effect.Effect<SourceControlProviderInfo | null, Cause.YieldableError>;
};
export type SourceControlProviderDiscoverySpec = SourceControlCliDiscoverySpec | SourceControlManagedCliDiscoverySpec | SourceControlApiDiscoverySpec;
/** @throws {never} */
export declare function firstNonEmptyLine(text: string): Option.Option<string>;
/** @throws {never} */
export declare function detailFromCause(cause: unknown): Option.Option<string>;
/** @throws {never} */
export declare function providerAuth(input: {
    readonly status: SourceControlProviderAuth["status"];
    readonly account?: string | undefined;
    readonly host?: string | undefined;
    readonly detail?: string | undefined;
}): SourceControlProviderAuth;
/** @throws {never} */
export declare function combinedAuthOutput(input: SourceControlAuthProbeInput): string;
/** @throws {never} */
export declare function firstSafeAuthLine(text: string): string | undefined;
/** @throws {never} */
export declare function parseCliHost(text: string): string | undefined;
/** @throws {never} */
export declare function matchFirst(text: string, patterns: ReadonlyArray<RegExp>): string | undefined;
export declare function probeSourceControlProvider(input: {
    readonly spec: SourceControlProviderDiscoverySpec;
    readonly process: SourceControlHost.SourceControlHost["Service"]["process"];
    readonly cwd: string;
}): Effect.Effect<SourceControlProviderDiscoveryItem>;
/**
 * The spawner checks cwd first, so ChildProcess NotFound identifies the executable.
 * @throws {never}
 */
export declare function isMissingExecutable(error: unknown): boolean;
export interface UnknownRemoteVerdict {
    readonly provider: SourceControlProviderInfo | null;
    readonly settled: boolean;
}
export declare const refineUnknownRemoteProvider: (input: {
    readonly specs: ReadonlyArray<SourceControlProviderDiscoverySpec>;
    readonly process: SourceControlHost.SourceControlHost["Service"]["process"];
    readonly cwd: string;
    readonly context: SourceControlProvider.SourceControlProviderContext;
}) => Effect.Effect<UnknownRemoteVerdict>;
export {};
