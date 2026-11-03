import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import { ChildProcessSpawner } from "effect/process";
import { type ClaudeModelCatalog } from "../provider/ClaudeModelCatalog.vibe";
export declare const makeClaudeTextGeneration: (claudeSettings: {
    readonly enabled: boolean;
    readonly binaryPath: string;
    readonly homePath: string;
    readonly customModels: readonly (string | {
        slug: string;
        name?: string | undefined;
        capabilities?: {
            optionDescriptors?: readonly ({
                readonly id: string;
                readonly label: string;
                readonly description?: string | undefined;
                readonly type: "select";
                readonly options: readonly {
                    id: string;
                    label: string;
                    description?: string | undefined;
                    isDefault?: boolean | undefined;
                }[];
                readonly currentValue?: string | undefined;
                readonly promptInjectedValues?: readonly string[] | undefined;
            } | {
                readonly id: string;
                readonly label: string;
                readonly description?: string | undefined;
                readonly type: "boolean";
                readonly currentValue?: boolean | undefined;
            })[] | undefined;
        } | undefined;
    })[];
    readonly launchArgs: string;
    readonly autoCompactWindow: string;
    readonly idleCompaction: "beforeCacheExpires" | "default" | "off" | "onReturn";
}, environment?: NodeJS.ProcessEnv | undefined, modelCatalog?: Effect.Effect<ClaudeModelCatalog, never, never>) => Effect.Effect<import("@t3tools/provider-core/server/textGeneration").ProviderTextGeneration, never, ChildProcessSpawner.ChildProcessSpawner | FileSystem.FileSystem | import("effect/Path").Path>;
