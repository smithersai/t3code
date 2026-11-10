import type { ProjectIconColor } from "@t3tools/contracts";

import type { ProjectIconGlyph } from "../lib/projectIcon";

export function decodeGlyphKey(key: string): ProjectIconGlyph {
  const [kind, text, color] = JSON.parse(key) as [string, string, ProjectIconColor];
  return kind === "emoji" ? { kind: "emoji", emoji: text } : { kind: "monogram", text, color };
}
