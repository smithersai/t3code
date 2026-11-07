import { type ServerSettings } from "@t3tools/contracts";
import * as ProviderHost from "@t3tools/provider-core/server/ProviderHost";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Path from "effect/Path";
export interface TestProviderHostOptions {
    readonly cwd?: string;
    readonly settings?: ServerSettings;
    readonly runBackgroundWork?: boolean;
}
declare const TestProviderHostSettings_base: Context.ServiceClass<TestProviderHostSettings, "@t3tools/provider-testing/TestProviderHost/TestProviderHostSettings", {
    readonly set: (settings: ServerSettings) => Effect.Effect<void>;
}>;
export declare class TestProviderHostSettings extends TestProviderHostSettings_base {
}
export declare const layer: (options?: TestProviderHostOptions) => Layer.Layer<ProviderHost.ProviderHost | TestProviderHostSettings, never, FileSystem.FileSystem | Path.Path>;
export {};
