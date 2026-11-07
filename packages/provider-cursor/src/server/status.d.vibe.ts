import type { SDKModel } from "@cursor/sdk";
import type { ModelCapabilities, ServerProviderAuth, ServerProviderModel, ServerProviderState } from "@t3tools/contracts";
import type { CursorSettings } from "../settings.vibe";
import * as Effect from "effect/Effect";
import { type ServerProviderDraft } from "@t3tools/provider-core/server/snapshotProbe";
import * as CursorSdkCatalog from "./CursorSdkCatalog.vibe";
export declare const buildInitialCursorProviderSnapshot: (cursorSettings: {
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
}) => Effect.Effect<ServerProviderDraft>;
/** @throws {never} */
export declare function buildCursorCapabilitiesFromSdkModel(model: SDKModel): ModelCapabilities;
/** @throws {never} */
export declare function buildCursorDiscoveredModelsFromSdk(models: ReadonlyArray<SDKModel>): ReadonlyArray<ServerProviderModel>;
interface CursorProviderProbeResult {
    readonly version: string | null;
    readonly status: Exclude<ServerProviderState, "disabled">;
    readonly auth: ServerProviderAuth;
    readonly message?: string;
}
/** @throws {never} */
export declare function buildCursorProviderSnapshot(input: {
    readonly checkedAt: string;
    readonly cursorSettings: CursorSettings;
    readonly parsed: CursorProviderProbeResult;
    readonly discoveredModels?: ReadonlyArray<ServerProviderModel>;
    readonly discoveryWarning?: string;
}): ServerProviderDraft;
export declare const checkCursorProviderStatus: (cursorSettings: {
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
}, environment?: NodeJS.ProcessEnv | undefined, authenticationType?: "api-key" | "browser" | undefined) => Effect.Effect<ServerProviderDraft, never, CursorSdkCatalog.CursorSdkCatalog>;
export {};
