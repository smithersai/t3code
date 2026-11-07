import { type ThemeDefinition } from "../themePalette";
export declare function useEnvironmentThemeDefinitions(): ReadonlyArray<ThemeDefinition>;
/**
 * The palette is painted from a snapshot taken when the theme last changed, so new colors
 * only land if the active theme is re-applied.
 */
export declare function startEnvironmentThemeRepaint(): () => void;
