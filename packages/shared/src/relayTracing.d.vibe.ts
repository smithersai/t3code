import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Tracer from "effect/Tracer";
import type { HttpClient } from "effect/http";
export interface RelayClientTracingConfig {
    readonly tracesUrl: string;
    readonly tracesDataset: string;
    readonly tracesToken: string;
}
export interface RelayClientTracingResource {
    readonly serviceName: string;
    readonly serviceVersion?: string;
    readonly runtime: string;
    readonly serviceInstanceId: string;
    readonly client: string;
    readonly component?: string;
    readonly attributes?: Readonly<Record<string, string>> | undefined;
}
declare const RelayClientTracer_base: Context.Reference<Option.Option<Tracer.Tracer>>;
export declare class RelayClientTracer extends RelayClientTracer_base {
}
/** Export only T3 Connect spans; wrap local work with {@link withLocalTracing}. */
export declare const withRelayClientTracing: <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
/** Keep local work in the local trace without exporting machine details through relay spans. */
export declare const withLocalTracing: <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
export declare function layer(config: RelayClientTracingConfig | null, resource: RelayClientTracingResource): Layer.Layer<never, never, HttpClient.HttpClient>;
export {};
