export function callQueueMicrotask(...args: Parameters<typeof queueMicrotask>) {
  return queueMicrotask(...args);
}

export function callRequestAnimationFrame(...args: Parameters<typeof requestAnimationFrame>) {
  return requestAnimationFrame(...args);
}
