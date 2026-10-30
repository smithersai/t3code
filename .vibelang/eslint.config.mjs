import parser from "vibelang/eslint";
import { createRequire } from "node:module";
import t3codePlugin from "../oxlint-plugin-t3code/index.ts";
import config from "../vite.config.ts";

const { eslintCompatPlugin } = createRequire(new URL("../oxlint-plugin-t3code/package.json", import.meta.url))("@oxlint/plugins");

// typescript-eslint refuses TypeScript 7, so .vibe files get the rules ESLint can run itself and t3code's own plugin.
const t3codeRules = Object.fromEntries(
  Object.entries(config.lint.rules ?? {}).filter(([name]) => name.startsWith("t3code/")),
);

export default [
  { ignores: ["**/node_modules/**", "**/dist/**", "**/build/**"] },
  {
    files: ["**/*.vibe"],
    languageOptions: { parser },
    plugins: { t3code: eslintCompatPlugin(t3codePlugin) },
    rules: { "no-debugger": "error", "no-dupe-keys": "error", "no-unreachable": "error", ...t3codeRules },
  },
];
