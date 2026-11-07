import * as NodeChildProcess from "node:child_process";
import * as NodeFS from "node:fs";
import * as NodeOS from "node:os";
import * as NodePath from "node:path";
import * as NodeURL from "node:url";
import { ESLint } from "eslint";
import fc from "fast-check";
import { expect, it } from "vitest";
import nativeConfig from "../../.vibelang/eslint.config.mjs";

const lint = JSON.parse(NodeFS.readFileSync(new URL("../../package.json", import.meta.url), "utf8"))
  .scripts.lint;
const nativeGlobs = [...lint.matchAll(/"([^"]+)"/g)]
  .map((match) => match[1])
  .filter((pattern) => pattern.includes("*") && pattern.includes("vibe"));
const sourcePath = fc
  .array(fc.stringMatching(/^[a-z][a-z0-9_-]{0,8}$/), { minLength: 1, maxLength: 3 })
  .map((parts) => NodePath.join("src", ...parts.map((part) => "native-" + part)));

it("the root lint command discovers native JSX and applies the configured rules", async () => {
  await fc.assert(
    fc.asyncProperty(sourcePath, async (relativePath) => {
      const directory = NodeFS.mkdtempSync(NodePath.join(NodeOS.tmpdir(), "native-lint-command-"));
      try {
        for (const [extension, source] of [
          ["vibe", "debugger; export const value = 1;"],
          ["vibex", "debugger; export const Element = () => <span />;"],
        ]) {
          const file = NodePath.join(directory, relativePath + "." + extension);
          NodeFS.mkdirSync(NodePath.dirname(file), { recursive: true });
          NodeFS.writeFileSync(file, source);
        }
        const eslint = new ESLint({
          cwd: directory,
          overrideConfigFile: true,
          overrideConfig: nativeConfig,
          errorOnUnmatchedPattern: false,
        });
        const results = await eslint.lintFiles(nativeGlobs);
        for (const extension of ["vibe", "vibex"]) {
          const files = results.filter((result) => result.filePath.endsWith("." + extension));
          expect(files).toHaveLength(1);
          expect(files[0].messages.map((message) => message.ruleId)).toContain("no-debugger");
        }
      } finally {
        NodeFS.rmSync(directory, { recursive: true, force: true });
      }
    }),
    { numRuns: 25 },
  );
});

it("the root native lint command loads its rules without inherited registration", () => {
  const root = NodeURL.fileURLToPath(new URL("../../", import.meta.url));
  const directory = NodeFS.mkdtempSync(NodePath.join(root, "native-lint-command-"));
  try {
    const file = NodePath.join(directory, "element.vibex");
    NodeFS.writeFileSync(file, "debugger; export const Element = () => <span />;");
    const pass = lint.split(" && ").find((command) => command.includes("eslint --config"));
    expect(pass).toBeDefined();
    const command = nativeGlobs.reduce(
      (command, pattern, index) =>
        command.replace(JSON.stringify(pattern), index === 0 ? JSON.stringify(file) : ""),
      pass,
    );
    const environment = { ...process.env };
    delete environment.NODE_OPTIONS;
    const result = NodeChildProcess.spawnSync("sh", ["-c", command + " --format=json"], {
      cwd: root,
      env: environment,
      encoding: "utf8",
      maxBuffer: 4 * 1024 * 1024,
    });
    expect(result.error).toBeUndefined();
    expect(result.signal).toBeNull();
    expect(result.status).toBe(1);
    expect(
      JSON.parse(result.stdout).flatMap((file) => file.messages.map((message) => message.ruleId)),
    ).toContain("no-debugger");
  } finally {
    NodeFS.rmSync(directory, { recursive: true, force: true });
  }
});
