import { type EnvironmentPresentation as BaseEnvironmentPresentation } from "@t3tools/client-runtime/connection";
import type { ComposerEnvironmentCandidate } from "@t3tools/client-runtime/composerThreadItems";
import { type EnvironmentId } from "@t3tools/contracts";
export interface EnvironmentPresentation extends BaseEnvironmentPresentation {
    readonly environmentId: EnvironmentId;
    readonly label: string;
    readonly displayUrl: string | null;
    readonly relayManaged: boolean;
}
export declare function projectEnvironmentPresentation(environmentId: EnvironmentId, presentation: BaseEnvironmentPresentation): EnvironmentPresentation;
export declare function useEnvironments(): {
    isReady: boolean;
    networkStatus: import("@t3tools/client-runtime/connection").NetworkStatus;
    environments: EnvironmentPresentation[];
    presentationById: ReadonlyMap<string & import("effect/Brand").Brand<"EnvironmentId">, BaseEnvironmentPresentation>;
};
export declare function useEnvironmentConnectionState(environmentId: EnvironmentId): import("./query.vibe").EnvironmentQueryView<import("@t3tools/client-runtime/connection").SupervisorConnectionState>;
/** The user's machines as `@` mention candidates, drawn with their machine kind. */
export declare function useMentionableEnvironments(): ReadonlyArray<ComposerEnvironmentCandidate>;
