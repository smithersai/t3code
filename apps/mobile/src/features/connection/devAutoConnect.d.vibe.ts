import type { NavigationState, PartialState } from "@react-navigation/native";
import { Atom } from "effect/reactivity";
export type DevAutoConnectAttempt = {
    readonly pairingUrl: string;
    readonly status: "connecting";
} | {
    readonly pairingUrl: string;
    readonly status: "failed";
    readonly error: string | null;
};
/** The pairing the dev deep link started, so the form it opens can show its progress. */
export declare const devAutoConnectAttemptAtom: Atom.Writable<DevAutoConnectAttempt | null, DevAutoConnectAttempt | null>;
/**
 * What the form opened by `routePairingUrl` shows of the dev auto-connect. Editing or submitting
 * (`dismissed`) hides a failure, but a pairing still running keeps Connect busy, so the user
 * cannot start a second pairing beside it.
 */
export declare function autoConnectReport(attempt: DevAutoConnectAttempt | null, routePairingUrl: string, dismissed: boolean): {
    readonly connecting: boolean;
    readonly error: string | null;
};
/**
 * `connections/new?pairingUrl=…&autoConnect=1` (or `settings/environment-new?…`) pairs from the
 * link itself, so a remount of the form never pairs twice. Production builds ignore the flag so
 * a link can never pair with an attacker-chosen host.
 */
export declare function startDevAutoConnect(state: PartialState<NavigationState> | undefined): PartialState<NavigationState> | undefined;
/**
 * A pairing link that lands on an open pairing form fills that form. React Navigation would push
 * `ConnectionsNew` over the Settings page's `SettingsEnvironmentNew`, stacking two copies of the
 * same form. The form keys on the link's pairing URL, so new params remount it with the prefill.
 */
export declare function pairingFormLinkAction(link: PartialState<NavigationState>, current: NavigationState | undefined): {
    type: "REPLACE_PARAMS";
    payload: {
        readonly params: object;
    };
    source: string;
    target: string;
} | undefined;
