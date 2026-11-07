import { type ConnectionDiagnosis } from "@t3tools/client-runtime/connection";
import { type EnvironmentPresentation } from "../../state/environments.vibe";
/**
 * What failed on the way to an environment, or null while it is connected, off,
 * or has not failed. Reads the supervisor state itself so callers that only need
 * the headline do not re-render on every attempt.
 * @throws {never}
 */
export declare function useConnectionDiagnosis(environment: EnvironmentPresentation): {
    diagnosis: ConnectionDiagnosis | null;
    state: import("@t3tools/client-runtime/connection").SupervisorConnectionState;
    relayOnly: boolean;
};
/**
 * The failure headline alone, for banners outside Settings.
 * @throws {never}
 */
export declare function ConnectionDiagnosisHeadline({ environment, }: {
    readonly environment: EnvironmentPresentation;
}): string | null;
/**
 * The collapsed failure: the full headline, then the retry state and a Details toggle.
 * @throws {never}
 */
export declare function ConnectionDiagnosisSummary({ diagnosis, retryAt, attempt, expanded, onToggle, }: {
    readonly diagnosis: ConnectionDiagnosis;
    readonly retryAt: number | null;
    readonly attempt: number;
    readonly expanded: boolean;
    /** @throws {never} */
    readonly onToggle: () => void;
}): import("react").JSX.Element;
/**
 * Hops in order, what to try, the facts, and the actions.
 * @throws {never}
 */
export declare function ConnectionDiagnosisPanel({ hostLabel, diagnosis, onRetry, onAddRoute, }: {
    readonly hostLabel: string;
    readonly diagnosis: ConnectionDiagnosis;
    /** @throws {never} */
    readonly onRetry: () => void;
    readonly onAddRoute: (
    /** @throws {never} */
    () => void) | null;
}): import("react").JSX.Element;
