import * as Crypto from "@t3tools/shared/Crypto";
import * as Effect from "effect/Effect";
import * as ChildProcessSpawner from "effect/process/ChildProcessSpawner";
export declare const makeGrokTextGeneration: (grokSettings: {
    readonly enabled: boolean;
    readonly binaryPath: string;
    readonly customModels: readonly (string | {
        readonly slug: string;
        readonly name?: string | undefined;
        readonly capabilities?: {
            readonly optionDescriptors?: readonly ({
                readonly id: string;
                readonly label: string;
                readonly description?: string | undefined;
                readonly type: "select";
                readonly options: readonly {
                    readonly id: string;
                    readonly label: string;
                    readonly description?: string | undefined;
                    readonly isDefault?: boolean | undefined;
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
}, environment?: NodeJS.ProcessEnv | undefined) => Effect.Effect<import("@t3tools/provider-core/server/textGeneration").ProviderTextGeneration, never, ChildProcessSpawner.ChildProcessSpawner | Crypto.Crypto>;
