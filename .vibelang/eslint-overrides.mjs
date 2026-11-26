// Apply the repository's lint policy to each native filename's TypeScript identity.
const nativePattern = (pattern) =>
  pattern
    .replace(/\.tsx$/, ".vibex")
    .replace(/\.ts$/, ".vibe")
    .replace(/\{([^}]+)\}/g, (_, members) =>
      "{" + members.split(",").map((member) =>
        member === "ts" ? "vibe" : member === "tsx" ? "vibex" : member,
      ).join(",") + "}",
    );

const nativePatterns = (patterns) => [
  ...new Set(patterns.flatMap((pattern) => [pattern, nativePattern(pattern)])),
];

export const nativeOverrides = (overrides) =>
  overrides.flatMap((override) => {
    const rules = Object.fromEntries(
      Object.entries(override.rules ?? {}).filter(([name]) => name.startsWith("t3code/")),
    );
    if (Object.keys(rules).length === 0) return [];
    const excluded = override.excludedFiles ?? override.ignores;
    return [{
      files: nativePatterns(override.files ?? ["**/*"]).map((pattern) => [pattern, "**/*.{vibe,vibex}"]),
      ...(excluded ? { ignores: nativePatterns(excluded) } : {}),
      rules,
    }];
  });
