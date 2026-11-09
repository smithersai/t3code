import * as NodeURL from "node:url";

export function fileUrlHref(path: string): string {
  return NodeURL.pathToFileURL(path).href;
}
