import type { NavigationState, PartialState } from "@react-navigation/native";
/**
 * `threads/<environment>/<thread>?prompt=…` fills that thread's composer draft. The param is
 * dropped as the link arrives, so the thread screen never sees it and a later visit cannot apply
 * it again. The draft is written only once the thread's screen shows a thread that exists: a
 * screen for an unknown thread replaces itself with a new-thread draft, which drops the link.
 */
export declare function takeThreadPromptLink(state: PartialState<NavigationState> | undefined): PartialState<NavigationState> | undefined;
/** Wired to the navigation container's state changes. */
export declare function resolvePendingThreadPromptLink(state: NavigationState | undefined): void;
