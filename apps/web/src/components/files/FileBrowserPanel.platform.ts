export function callPerformanceNow() {
  return performance.now();
}

export function callQueueMicrotask(...args: Parameters<typeof queueMicrotask>) {
  return queueMicrotask(...args);
}
