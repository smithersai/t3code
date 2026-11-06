import { type ServerProviderModel } from "@t3tools/contracts";
import type { FxSettings } from "../settings.vibe";
import * as Effect from "effect/Effect";
import type * as ChildProcessSpawner from "effect/process/ChildProcessSpawner";
import { type ServerProviderDraft } from "@t3tools/provider-core/server/snapshotProbe";
export declare const buildInitialFxProviderSnapshot: (settings: FxSettings) => Effect.Effect<ServerProviderDraft>;
/**
 * Reads `fx --version`, `fx status --json` (login and default model) and
 * `fx models --json`. None of them opens an ACP session, which fx would save.
 */
export declare const checkFxProviderStatus: (settings: {
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
}, environment: NodeJS.ProcessEnv) => Effect.Effect<ServerProviderDraft, never, ChildProcessSpawner.ChildProcessSpawner>;
/**
 * fx's id for "Default": the alias the snapshot gave it, if `fx status` reported one.
 * @throws {never}
 */
export declare const fxDefaultModelId: (models: ReadonlyArray<ServerProviderModel>) => string | undefined;
