// @effect-diagnostics nodeBuiltinImport:off - Credential leases coordinate Node server processes.
import * as NodePath from "node:path";

export function sessionLockPath(directory: string, key: string): string {
  return NodePath.join(directory, `${key}.bin`);
}
