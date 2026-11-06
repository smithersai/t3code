import { type NavigationState, type PartialState } from "@react-navigation/native";
/**
 * `new?prompt=…&repo=…` drops its params as it arrives, so the screen never sees them and each
 * opening resolves once. It resolves when its screen is on the navigation state that follows and
 * the shells have settled; a newer link replaces one still waiting.
 */
export declare function takeNewTaskPromptLink(state: PartialState<NavigationState> | undefined): PartialState<NavigationState> | undefined;
/** Wired to the navigation container's state changes. */
export declare function resolvePendingNewTaskPromptLink(state: NavigationState | undefined): void;
