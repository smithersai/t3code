// @effect-diagnostics globalConsole:off -- Preserve existing callback logging at the platform boundary.
export function warnOnPlatform(...values: unknown[]): void {
  console.warn(...values);
}
