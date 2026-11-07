import type * as Electron from "electron";
import { SettingsWindow } from "./MacSettingsWindow.vibe.platform.js";
export { watchMacSettingsWindow } from "./MacSettingsWindow.vibe.platform.js";
export type { SettingsWindow } from "./MacSettingsWindow.vibe.platform.js";
/** @throws {never} */
export declare function settingsHelperBounds(settings: NonNullable<SettingsWindow>): Electron.Rectangle;
