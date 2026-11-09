import * as NodeURL from "node:url";

/** @throws {never} */
export function readProcessEnv(): NodeJS.ProcessEnv {
  return process.env;
}

export function fileUrlHref(path: string): string {
  return NodeURL.pathToFileURL(path).href;
}

/** @throws {never} */
export function encodeUtf8Base64(text: string): string {
  return Buffer.from(text, "utf8").toString("base64");
}
