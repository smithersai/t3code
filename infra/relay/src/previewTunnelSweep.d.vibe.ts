import { Resource } from "alchemy";
import * as Provider from "alchemy/Provider";
import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import * as Schema from "effect/Schema";
import * as HttpClient from "effect/http/HttpClient";
export interface PreviewTunnelSweepProps {
    readonly stage: string;
    readonly tunnelZoneName: string;
    readonly workerName: string;
}
export interface PreviewTunnelSweepAttributes {
    readonly stage: string;
    readonly tunnelZoneName: string;
    readonly workerName: string;
}
export type PreviewTunnelSweep = Resource<"T3CodeRelay.PreviewTunnelSweep", PreviewTunnelSweepProps, PreviewTunnelSweepAttributes>;
export declare const PreviewTunnelSweep: import("alchemy").ResourceClass<PreviewTunnelSweep>;
export declare const sweepPreviewStage: (input: {
    readonly stage: string;
    readonly tunnelZoneName: string;
    readonly accountId: string;
    readonly token: Redacted.Redacted<string>;
}) => Effect.Effect<void, import("effect/http/HttpClientError").HttpClientError | Schema.SchemaError, HttpClient.HttpClient>;
export declare const PreviewTunnelSweepProvider: () => import("effect/Layer").Layer<Provider.Provider<PreviewTunnelSweep>, never, never>;
