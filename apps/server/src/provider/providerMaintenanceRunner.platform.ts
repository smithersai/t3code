import * as NodeUtil from "node:util";

/** @throws {never} */
export function stripControlCharacters(line: string): string {
  return NodeUtil.stripVTControlCharacters(line);
}
