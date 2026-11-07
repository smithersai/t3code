import * as Data from "effect/Data";
import * as Effect from "effect/Effect";
import type { OtlpEndpointSource } from "@t3tools/contracts";
import { OtlpProtocol, type SignalExport } from "./observability.ts";
export type OtelSignal = Data.TaggedEnum<{
    Unset: {};
    Off: {};
    Export: {
        readonly url: string;
        readonly variable: string;
        readonly protocol: OtlpProtocol;
        readonly headers: Readonly<Record<string, string>> | undefined;
    };
}>;
export declare const OtelSignal: Data.TaggedEnum.Constructor<{
    readonly _tag: "Export";
    readonly url: string;
    readonly variable: string;
    readonly protocol: OtlpProtocol;
    readonly headers: Readonly<Record<string, string>> | undefined;
} | {
    readonly _tag: "Off";
} | {
    readonly _tag: "Unset";
}>;
export interface OtelEnvironment {
    readonly disabled: boolean;
    readonly warnings: ReadonlyArray<string>;
    readonly resourceAttributes: Readonly<Record<string, string>>;
    readonly traces: OtelSignal;
    readonly metrics: OtelSignal;
    readonly logs: OtelSignal;
}
export declare const load: Effect.Effect<OtelEnvironment>;
/** @throws {never} */
export declare const isRelayTracingEnabled: (env: Readonly<Record<string, string | undefined>>) => boolean;
export type SignalName = "traces" | "metrics" | "logs";
export interface SignalEndpoint {
    readonly url: string;
    readonly export: SignalExport;
    readonly source: OtlpEndpointSource;
    /** The environment variable that set the endpoint, when `source` is `environment`. */
    readonly variable?: string;
}
/** @throws {never} */
export declare const resolveSignalEndpoint: (otel: OtelEnvironment, signal: SignalName, t3: {
    readonly url: string | undefined;
    readonly export: SignalExport;
}, fallback: {
    readonly bootstrapUrl: string | undefined;
    readonly settingsUrl: string | undefined;
}) => SignalEndpoint | undefined;
/** Give OTLP exporters the accepted resource attributes so their own decoding cannot fail. */
export declare const layerResourceAttributes: (attributes: Readonly<Record<string, string>>) => import("effect/Layer").Layer<never, never, never>;
export declare const none: OtelEnvironment;
