import * as Duration from "effect/Duration";
import * as Effect from "effect/Effect";
import * as Metric from "effect/Metric";
import { outcomeFromExit } from "./Attributes.vibe";
export declare const rpcRequestsTotal: Metric.Counter<number>;
export declare const rpcRequestDuration: Metric.Histogram<Duration.Duration>;
export declare const orchestrationCommandsTotal: Metric.Counter<number>;
export declare const orchestrationCommandDuration: Metric.Histogram<Duration.Duration>;
export declare const orchestrationEffectClaimsTotal: Metric.Counter<number>;
export declare const orchestrationEffectQueueWait: Metric.Histogram<Duration.Duration>;
export declare const providerSessionsTotal: Metric.Counter<number>;
export declare const providerTurnsTotal: Metric.Counter<number>;
export declare const providerTurnDuration: Metric.Histogram<Duration.Duration>;
export declare const serverResidentBytes: Metric.Gauge<number>;
export declare const serverHeapUsedBytes: Metric.Gauge<number>;
export declare const serverCpuUtilization: Metric.Gauge<number>;
export declare const serverEventLoopUtilization: Metric.Gauge<number>;
export declare const serverEventLoopDelayMax: Metric.Gauge<number>;
export declare const runsTotal: Metric.Counter<number>;
export declare const runDuration: Metric.Histogram<Duration.Duration>;
export declare const runQueueWait: Metric.Histogram<Duration.Duration>;
export declare const gitCommandsTotal: Metric.Counter<number>;
export declare const gitCommandDuration: Metric.Histogram<Duration.Duration>;
export declare const terminalSessionsTotal: Metric.Counter<number>;
export declare const terminalRestartsTotal: Metric.Counter<number>;
export declare const webhookDeliveriesTotal: Metric.Counter<number>;
export declare const webhookDeliveryDuration: Metric.Histogram<Duration.Duration>;
export declare const webhookHeldDelay: Metric.Histogram<Duration.Duration>;
export declare const webhookRunsTotal: Metric.Counter<number>;
export declare const secretRequestsTotal: Metric.Counter<number>;
export declare const secretRefsConsumedTotal: Metric.Counter<number>;
/** @throws {never} */
export declare const metricAttributes: (attributes: Readonly<Record<string, unknown>>) => ReadonlyArray<[string, string]>;
export declare const increment: (metric: Metric.Metric<number, unknown>, attributes: Readonly<Record<string, unknown>>, amount?: number) => Effect.Effect<void, never, never>;
export interface WithMetricsOptions {
    readonly counter?: Metric.Metric<number, unknown>;
    readonly timer?: Metric.Metric<Duration.Duration, unknown>;
    readonly attributes?: Readonly<Record<string, unknown>> | (
    /** @throws {never} */
    () => Readonly<Record<string, unknown>>);
    /** @throws {never} */
    readonly outcomeAttributes?: (outcome: ReturnType<typeof outcomeFromExit>) => Readonly<Record<string, unknown>>;
}
export declare const withMetrics: {
    /** @throws {never} */
    (options: WithMetricsOptions): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
    <A, E, R>(effect: Effect.Effect<A, E, R>, options: WithMetricsOptions): Effect.Effect<A, E, R>;
};
export declare const withCommandMetrics: <A, E, R>(effect: Effect.Effect<A, E, R>, command: {
    readonly type: string;
}) => Effect.Effect<A, E, R>;
