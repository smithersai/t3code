import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import { HttpClient } from "effect/http";
import * as RemoteEnvironmentAuthorization from "../authorization/service.ts";
import type { PreparedConnection } from "../connection/model.vibe";
import * as ManagedRelay from "../relay/managedRelay.vibe";
import { type DeferredShellSnapshot } from "./shellPullRequests.vibe";
export declare const fetchEnvironmentShellSnapshot: (input: {
    readonly prepared: PreparedConnection;
    readonly signer: Option.Option<ManagedRelay.ManagedRelayDpopSigner["Service"]>;
    readonly remoteAuthorization?: Option.Option<RemoteEnvironmentAuthorization.RemoteEnvironmentAuthorization["Service"]>;
    readonly timeoutMs?: number;
    readonly omitIdleSubagents?: boolean;
    readonly omitOlderSettled?: boolean;
}) => Effect.Effect<DeferredShellSnapshot, import("../rpc/http.ts").RemoteEnvironmentRequestError, HttpClient.HttpClient>;
declare const ShellSnapshotLoader_base: Context.ServiceClass<ShellSnapshotLoader, "@t3tools/client-runtime/state/shellSnapshotHttp/ShellSnapshotLoader", {
    readonly load: (prepared: PreparedConnection, options?: {
        readonly omitIdleSubagents?: boolean;
        readonly omitOlderSettled?: boolean;
    }) => Effect.Effect<Option.Option<DeferredShellSnapshot>>;
}>;
export declare class ShellSnapshotLoader extends ShellSnapshotLoader_base {
}
export declare const layer: Layer.Layer<ShellSnapshotLoader, never, HttpClient.HttpClient>;
export {};
