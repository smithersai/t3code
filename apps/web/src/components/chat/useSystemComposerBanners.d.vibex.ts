import { type EnvironmentId } from "@t3tools/contracts";
import { type EnvironmentConnectionPresentation } from "@t3tools/client-runtime/connection";
import { type EnvironmentPresentation } from "../../state/environments.vibe";
import type { ComposerBannerStackItem } from "./ComposerBannerStack";
export type EnvironmentUnavailableState = {
    readonly environmentId: EnvironmentId;
    readonly label: string;
    readonly connection: EnvironmentConnectionPresentation;
};
interface SystemComposerBannersInput {
    readonly activeEnvironment: EnvironmentPresentation | null;
    readonly activeEnvironmentUnavailable: boolean;
    readonly activeEnvironmentUnavailableState: EnvironmentUnavailableState | null;
    readonly activeThreadEnvironmentId: EnvironmentId | null;
    readonly serverConfig: EnvironmentPresentation["serverConfig"] | null;
    readonly hasMultipleRegisteredEnvironments: boolean;
    readonly automaticEnvironment: boolean;
    readonly autoUpdateEnvironments: ReadonlyArray<EnvironmentPresentation>;
}
/**
 * The composer banners about the machine itself: offline or reconnecting,
 * a server update, and auto-balanced machines that need one.
 * @throws {never}
 */
export declare function useSystemComposerBanners(input: SystemComposerBannersInput): ComposerBannerStackItem[];
export {};
