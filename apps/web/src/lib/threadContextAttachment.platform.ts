export function createFile(...args: ConstructorParameters<typeof File>) {
  return new File(...args);
}
