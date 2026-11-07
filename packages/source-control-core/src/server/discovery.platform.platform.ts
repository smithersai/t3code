// The platform code of discovery.platform.vibe, which a .vibe file does not import as a value (EK4402).

import * as NodeUtil from "node:util";
import * as Option from "effect/Option";

export function firstNonEmptyLine(text: string): Option.Option<string> {
  const line = NodeUtil.stripVTControlCharacters(text)
    .split(/\r?\n/)
    .map((entry) => entry.trim())
    .find((entry) => entry.length > 0);
  return line === undefined ? Option.none() : Option.some(line);
}
