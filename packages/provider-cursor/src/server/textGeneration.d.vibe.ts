import * as FileSystem from "effect/FileSystem";
import * as Effect from "effect/Effect";
import { type ProviderSetupError } from "@t3tools/contracts";
import type { CursorAuth } from "./auth.vibe";
import * as CursorSdk from "./CursorSdk.ts";
export declare const makeCursorTextGeneration: (cursorSettings: {
    readonly enabled: boolean;
    readonly binaryPath?: string;
    readonly apiEndpoint?: string;
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
}, environment?: NodeJS.ProcessEnv | undefined, resolveApiKey?: Effect.Effect<string, ProviderSetupError, never> | undefined, withAccess?: (CursorAuth["withAccess"]) | undefined) => Effect.Effect<import("@t3tools/provider-core/server/textGeneration").ProviderTextGeneration, never, CursorSdk.CursorSdk | FileSystem.FileSystem>;
