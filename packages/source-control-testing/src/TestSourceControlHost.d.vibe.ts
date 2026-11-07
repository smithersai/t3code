import { type ServerSettings, type ServerSettingsPatch } from "@t3tools/contracts";
import * as SourceControlHost from "@t3tools/source-control-core/server/SourceControlHost";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as ChildProcessSpawner from "effect/process/ChildProcessSpawner";
export interface TestSourceControlHostOptions {
    readonly settings?: ServerSettings;
    readonly process?: Partial<SourceControlHost.SourceControlHost["Service"]["process"]>;
    readonly git?: Partial<SourceControlHost.SourceControlHost["Service"]["git"]>;
}
declare const TestSourceControlHostSettings_base: Context.ServiceClass<TestSourceControlHostSettings, "@t3tools/source-control-testing/TestSourceControlHost/TestSourceControlHostSettings", {
    readonly update: (patch: ServerSettingsPatch) => Effect.Effect<void>;
}>;
export declare class TestSourceControlHostSettings extends TestSourceControlHostSettings_base {
}
export declare const layer: (options?: TestSourceControlHostOptions) => Layer.Layer<SourceControlHost.SourceControlHost | TestSourceControlHostSettings>;
/** @throws {never} */
export declare const processOutput: (stdout: string, options?: {
    readonly stderr?: string;
    readonly exitCode?: ChildProcessSpawner.ExitCode;
}) => SourceControlHost.SourceControlProcessOutput;
/**
 * `layer` whose `process.run` and `git.execute` spawn real processes, for a forge test that needs
 * a real repository. Every other git operation still dies unless supplied.
 */
export declare const layerWithRealGit: (options?: TestSourceControlHostOptions) => Layer.Layer<SourceControlHost.SourceControlHost | TestSourceControlHostSettings>;
export {};
