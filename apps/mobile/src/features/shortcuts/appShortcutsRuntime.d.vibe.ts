import type { NavigationState } from "@react-navigation/native";
export { createRecentThreadShortcuts } from "./appShortcutsRuntime.vibe.platform.js";
export type { RecentThreadShortcutsDependencies } from "./appShortcutsRuntime.vibe.platform.js";
/**
 * Wired to the root navigation container's state changes.
 * @throws {never}
 */
export declare function recordAppShortcutNavigationState(state: NavigationState): void;
/**
 * App-lifetime quick actions. `navigate` must queue until navigation is ready:
 * a cold-start shortcut arrives as the launch action, and pushing it over the
 * initial Home route makes back return home instead of exiting the app.
 * @throws {never}
 */
export declare function installAppShortcuts(navigate: 
/** @throws {never} */
(href: string) => void): 
/** @throws {never} */
() => void;
