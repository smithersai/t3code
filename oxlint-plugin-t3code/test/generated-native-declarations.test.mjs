import * as NodeChildProcess from "node:child_process";
import * as NodeFS from "node:fs";
import * as NodePath from "node:path";
import * as NodeURL from "node:url";
import fc from "fast-check";
import { expect, it } from "vitest";

it("source lint ignores generated module declarations and still checks authored modules", () => {
  const root = NodeURL.fileURLToPath(new URL("../../", import.meta.url));
  const directory = NodeFS.mkdtempSync(NodePath.join(root, "generated-native-declarations-"));
  const names = fc.sample(fc.stringMatching(/^[a-z][a-z0-9_-]{0,12}$/), 12);
  try {
    for (const name of names) {
      for (const extension of ["vibe", "vibex"]) {
        for (const body of ["platform", "throwing"]) {
          const file = NodePath.join(directory, `generated-${name}.${extension}.${body}.d.ts`);
          NodeFS.writeFileSync(file, "export {};\n");
        }
      }
    }
    NodeFS.writeFileSync(NodePath.join(directory, "authored.ts"), "export {};\n");
    const result = NodeChildProcess.spawnSync(
      "pnpm",
      ["exec", "vp", "lint", "--threads=2", directory],
      { cwd: root, env: process.env, encoding: "utf8", maxBuffer: 4 * 1024 * 1024 },
    );
    expect(result.error).toBeUndefined();
    expect(result.signal).toBeNull();
    expect(result.status).toBe(1);
    const output = result.stdout + result.stderr;
    expect(output).toContain("authored.ts");
    expect(output).toContain("require-module-specifiers");
    expect(output).not.toMatch(/generated-[a-z0-9_-]+\.vibex?\.(?:platform|throwing)\.d\.ts/);
  } finally {
    NodeFS.rmSync(directory, { recursive: true, force: true });
  }
});
