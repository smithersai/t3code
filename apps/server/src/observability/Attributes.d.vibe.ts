import * as Exit from "effect/Exit";
export type MetricAttributeValue = string;
export type MetricAttributes = Readonly<Record<string, MetricAttributeValue>>;
export type ObservabilityOutcome = "success" | "failure" | "interrupt";
/** @throws {never} */
export declare function compactMetricAttributes(attributes: Readonly<Record<string, unknown>>): MetricAttributes;
/** @throws {never} */
export declare function outcomeFromExit(exit: Exit.Exit<unknown, unknown>): ObservabilityOutcome;
/** @throws {never} */
export declare function normalizeModelMetricLabel(model: string | null | undefined): string | undefined;
