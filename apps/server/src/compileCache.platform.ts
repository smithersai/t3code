import * as NodeModule from "node:module";

export function flushNodeCompileCache(): void {
  NodeModule.flushCompileCache();
}
