import { Easing, ReduceMotion } from "react-native-reanimated";

import { USER_INPUT_TOGGLE_DURATION_MS } from "./pendingUserInputLayout";

// Reanimated runs these easings on the UI thread, so they stay Reanimated's own worklets.
export const USER_INPUT_TOGGLE_TIMING = {
  duration: USER_INPUT_TOGGLE_DURATION_MS,
  easing: Easing.out(Easing.cubic),
};

export const COMPOSER_POPOVER_LIFT_TIMING = {
  duration: 180,
  easing: Easing.out(Easing.cubic),
  reduceMotion: ReduceMotion.System,
};
