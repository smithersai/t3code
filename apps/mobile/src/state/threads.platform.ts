/** A release callback; it may throw, as the timer callback it replaces could. */
export type OpeningThreadRelease = {
  /** @throws {unknown} */
  (): void;
};

/** @throws {never} */
export function scheduleOpeningThreadRelease(release: OpeningThreadRelease, ms: number): void {
  setTimeout(release, ms);
}
