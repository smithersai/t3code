export function callFetch(...args: Parameters<typeof fetch>) {
  return fetch(...args);
}

export function createEventSource(...args: ConstructorParameters<typeof EventSource>) {
  return new EventSource(...args);
}

/** @throws {never} */
export function readEventSourceCLOSED() {
  return EventSource.CLOSED;
}
