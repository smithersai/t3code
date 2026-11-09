// @effect-diagnostics nodeBuiltinImport:off
import * as NodeFS from "node:fs";
import * as NodePath from "node:path";

/** @throws {never} */
export function isExistingFile(filePath: string): boolean {
  try {
    return NodeFS.statSync(filePath).isFile();
  } catch {
    return false;
  }
}

/** @throws {never} */
export function win32Extname(filePath: string): string {
  return NodePath.win32.extname(filePath);
}

/** @throws {never} */
export function win32Dirname(filePath: string): string {
  return NodePath.win32.dirname(filePath);
}

/** @throws {never} */
export function win32Join(...segments: ReadonlyArray<string>): string {
  return NodePath.win32.join(...segments);
}
