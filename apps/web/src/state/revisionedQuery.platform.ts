export function callQueueMicrotask(...args: Parameters<typeof queueMicrotask>) {
  return queueMicrotask(...args);
}
