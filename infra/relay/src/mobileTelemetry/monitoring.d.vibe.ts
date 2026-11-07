import * as Alchemy from "alchemy";
import * as Axiom from "@alchemy.run/axiom";
import * as Effect from "effect/Effect";
/**
 * Monitors follow the relay's: a deployment opts in by naming its paging notifier. The
 * dashboard also comes up on PR previews, so a change to mobile telemetry can be checked
 * there; the preview's teardown removes it.
 */
export declare const MobileMonitoring: (logs: Axiom.Dataset, traces: Axiom.Dataset) => Effect.Effect<void, import("effect/Config").ConfigError, Axiom.Providers | Alchemy.Stack>;
