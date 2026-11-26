import { createContext, use } from "react";

import type { AndroidNavigationStyle } from "../../../lib/androidNavigationStyle";
import type { ResolvedAppearance } from "../../../lib/appearancePreferences";
import type { readSystemColorPalettes } from "../../../lib/materialYouPalette";
import type {
  MobileThemeAppearance,
  MobileThemeId,
  MobileThemeIds,
  MobileThemeMode,
  MobileThemeVariables,
} from "../../../lib/mobileTheme";

export interface AppearancePreferencesContextValue {
  readonly appearance: ResolvedAppearance;
  readonly themeId: MobileThemeId;
  readonly themeIds: MobileThemeIds;
  readonly themeMode: MobileThemeMode;
  readonly androidNavigationStyle: AndroidNavigationStyle;
  readonly setAndroidNavigationStyle: (value: AndroidNavigationStyle) => void;
  readonly themeAppearance: MobileThemeAppearance;
  readonly systemColorsAvailable: boolean;
  readonly systemColorsActive: boolean;
  readonly themeVariables: MobileThemeVariables;
  readonly themeVariablesByAppearance: Readonly<
    Record<MobileThemeAppearance, MobileThemeVariables>
  >;
  readonly systemColorPalettes: ReturnType<typeof readSystemColorPalettes>;
  readonly isReady: boolean;
  readonly setThemeIdForAppearance: (
    appearance: MobileThemeAppearance,
    value: MobileThemeId,
  ) => void;
  readonly setThemeIdForBothAppearances: (value: MobileThemeId) => void;
  readonly setThemeMode: (value: MobileThemeMode) => void;
  readonly setBaseFontSize: (value: number) => void;
  readonly setTerminalFontSize: (value: number | null) => void;
  readonly setCodeFontSize: (value: number | null) => void;
  readonly setCodeWordBreak: (value: boolean) => void;
  readonly mathRenderingEnabled: boolean;
  readonly setMathRenderingEnabled: (value: boolean) => void;
}

export const AppearancePreferencesContext = createContext<AppearancePreferencesContextValue | null>(
  null,
);

export function useAppearancePreferences(): AppearancePreferencesContextValue {
  const context = use(AppearancePreferencesContext);
  if (!context) {
    throw new Error("useAppearancePreferences must be used within AppearancePreferencesProvider");
  }
  return context;
}
