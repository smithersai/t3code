export function assertNever(value: never): never {
  throw new Error(`Unhandled Claude SDK variant: ${jsonStringifyForTool(value)}`);
}

export function jsonStringifyForTool(value: unknown): string {
  if (typeof value === "string") {
    return value;
  }
  return JSON.stringify(value) ?? String(value);
}
