export function checkAborted(signal: AbortSignal): void {
  if (signal.aborted) throw new Error("Context import cancelled");
}
