import * as Alchemy from "alchemy";
import * as Axiom from "@alchemy.run/axiom";
import * as Config from "effect/Config";
import * as Effect from "effect/Effect";
import * as Option from "effect/Option";
/** @throws {never} */
export declare const notifierConfig: (name: string) => Config.Config<Option.Option<string>>;
/**
 * A deployment opts in by naming the notifier that pages (incident.io for
 * prod). Personal stages and forks leave it unset and get no monitors or
 * dashboard. Warnings go to their own notifier when one is set, and are only
 * visible in Axiom otherwise.
 */
export declare const RelayMonitoring: (traces: Axiom.Dataset) => Effect.Effect<void, Config.ConfigError, Axiom.Providers | Alchemy.Stack>;
