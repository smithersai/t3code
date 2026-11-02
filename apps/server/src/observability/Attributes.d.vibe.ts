import * as Exit from "effect/Exit";
export type MetricAttributeValue = string;
export type MetricAttributes = Readonly<Record<string, MetricAttributeValue>>;
export type ObservabilityOutcome = "success" | "failure" | "interrupt";
export declare function compactMetricAttributes(attributes: Readonly<Record<string, unknown>>): MetricAttributes;
export declare function outcomeFromExit(exit: Exit.Exit<unknown, unknown>): ObservabilityOutcome;
export declare function normalizeModelMetricLabel(model: string | null | undefined): string | undefined;
