import type { ServerConfig, ServerConfigStreamEvent } from "@t3tools/contracts";
import * as Option from "effect/Option";
export interface ServerConfigProjection {
    readonly config: ServerConfig;
    readonly latestEvent: ServerConfigStreamEvent;
    readonly source: "cache" | "live";
}
/**
 * Published themes and usage-limit sources are current machine state, so a
 * cache could restore a set the machine no longer reports.
 */
export declare function withoutEnvironmentThemes(config: ServerConfig): ServerConfig;
/**
 * Provider pushes, reconnects, and settings writes resend unchanged data.
 * Reuse deep-equal objects so memoized UI can skip unchanged providers, models, and skills.
 */
export declare function reuseUnchanged<T>(previous: unknown, next: T): T;
export declare function applyServerConfigProjection(current: Option.Option<ServerConfigProjection>, event: ServerConfigStreamEvent): Option.Option<ServerConfigProjection>;
