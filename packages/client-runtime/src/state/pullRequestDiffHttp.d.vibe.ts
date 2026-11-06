import { EnvironmentAuthInvalidError, type PullRequestDiffInput, type PullRequestDiffResult } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Schema from "effect/Schema";
import { HttpClient } from "effect/http";
import * as RemoteEnvironmentAuthorization from "../authorization/service.ts";
import type { PreparedConnection } from "../connection/model.vibe";
import * as ManagedRelay from "../relay/managedRelay.ts";
import { type RemoteEnvironmentRequestError } from "../rpc/http.ts";
declare const PullRequestDiffCredentialRejectedError_base: Schema.Class<PullRequestDiffCredentialRejectedError, Schema.TaggedStruct<"PullRequestDiffCredentialRejectedError", {
    readonly repository: Schema.String;
    readonly number: Schema.Number;
    readonly traceId: Schema.String;
    readonly cause: typeof EnvironmentAuthInvalidError;
}>, import("effect/Cause").YieldableError>;
export declare class PullRequestDiffCredentialRejectedError extends PullRequestDiffCredentialRejectedError_base {
    get message(): string;
}
export type PullRequestDiffLoadError = RemoteEnvironmentRequestError | PullRequestDiffCredentialRejectedError;
export declare const fetchEnvironmentPullRequestDiff: (input: {
    readonly prepared: PreparedConnection;
    readonly diff: PullRequestDiffInput;
    readonly signer: Option.Option<ManagedRelay.ManagedRelayDpopSigner["Service"]>;
    readonly remoteAuthorization?: Option.Option<RemoteEnvironmentAuthorization.RemoteEnvironmentAuthorization["Service"]>;
    readonly timeoutMs?: number;
}) => Effect.Effect<{
    readonly patch: string;
    readonly truncated: boolean;
    readonly nextCursor: string | null;
    readonly omittedFileStats?: readonly {
        readonly path: string;
        readonly additions: number;
        readonly deletions: number;
    }[] | undefined;
}, PullRequestDiffCredentialRejectedError | RemoteEnvironmentRequestError, HttpClient.HttpClient>;
declare const PullRequestDiffLoader_base: Context.ServiceClass<PullRequestDiffLoader, "@t3tools/client-runtime/state/pullRequestDiffHttp/PullRequestDiffLoader", {
    readonly load: (prepared: PreparedConnection, input: PullRequestDiffInput) => Effect.Effect<PullRequestDiffResult, PullRequestDiffLoadError>;
}>;
export declare class PullRequestDiffLoader extends PullRequestDiffLoader_base {
}
export declare const layer: Layer.Layer<PullRequestDiffLoader, never, HttpClient.HttpClient>;
export {};
