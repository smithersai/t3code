import type { SourceControlDriver, SourceControlDriverInstance } from "@t3tools/source-control-core/server/driver";
import * as SourceControlRateLimit from "@t3tools/source-control-core/server/SourceControlRateLimit";
import * as Context from "effect/Context";
import * as Layer from "effect/Layer";
export interface SourceControlDriverEntry {
    readonly driver: Pick<SourceControlDriver, "kind" | "definition">;
    readonly instance: SourceControlDriverInstance;
}
declare const SourceControlDrivers_base: Context.ServiceClass<SourceControlDrivers, "t3/sourceControl/builtInDrivers/SourceControlDrivers", readonly SourceControlDriverEntry[]>;
/** Every driver's instance, in registry order. Everything that reads a host reads it here. */
export declare class SourceControlDrivers extends SourceControlDrivers_base {
}
export declare const layer: Layer.Layer<SourceControlDrivers | import("@t3tools/source-control-core/server/SourceControlHost").SourceControlHost | SourceControlRateLimit.SourceControlRateLimit, never, import("@t3tools/shared/Crypto").Crypto | import("effect/FileSystem").FileSystem | import("../vcs/GitVcsDriver.ts").GitVcsDriver | import("effect/http/HttpClient").HttpClient | import("../serverSettings.ts").ServerSettingsService | import("../vcs/VcsDriverRegistry.ts").VcsDriverRegistry | import("../vcs/VcsProcess.ts").VcsProcess>;
export {};
