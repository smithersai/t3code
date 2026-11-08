// @effect-diagnostics-next-line nodeBuiltinImport:off -- The fixture checks the installed TypeScript compiler.
import { spawnSync } from "node:child_process";
// @effect-diagnostics-next-line nodeBuiltinImport:off -- Resolution fixtures need real declaration files.
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
// @effect-diagnostics-next-line nodeBuiltinImport:off -- Each generated project has its own temporary directory.
import { tmpdir } from "node:os";
// @effect-diagnostics-next-line nodeBuiltinImport:off -- Fixtures also run on Windows.
import { dirname, join } from "node:path";
// @effect-diagnostics-next-line nodeBuiltinImport:off -- The compiler launcher is relative to this test.
import { fileURLToPath } from "node:url";

import fc from "fast-check";
import { parse } from "jsonc-parser";
import { expect, it } from "vite-plus/test";

const config = parse(readFileSync(new URL("../tsconfig.json", import.meta.url), "utf8")) as {
  compilerOptions: { moduleSuffixes: ReadonlyArray<string> };
};
const compiler = fileURLToPath(
  new URL("../../../node_modules/typescript/bin/tsc", import.meta.url),
);
const segment = fc.stringMatching(/^[a-z][a-z0-9]{0,8}$/).map((value) => `module_${value}`);
const modules = fc.uniqueArray(fc.array(segment, { minLength: 1, maxLength: 3 }), {
  minLength: 2,
  maxLength: 8,
  selector: (parts) => parts.join("/"),
});

it("resolves native sidecars for extensionless imports", () => {
  fc.assert(
    fc.property(modules, (paths) => {
      const directory = mkdtempSync(join(tmpdir(), "native-sidecars-"));
      try {
        const imports: string[] = [];
        for (const [index, parts] of paths.entries()) {
          const extension = index % 2 === 0 ? "vibe" : "vibex";
          const declaration = join(directory, `${parts.join("/")}.d.${extension}.ts`);
          mkdirSync(dirname(declaration), { recursive: true });
          writeFileSync(declaration, "export declare const value: number;\n");
          imports.push(`import { value as value${index} } from "./${parts.join("/")}";`);
          imports.push(`const checked${index}: number = value${index};`);
        }
        writeFileSync(join(directory, "entry.ts"), imports.join("\n"));
        writeFileSync(
          join(directory, "tsconfig.json"),
          JSON.stringify({
            compilerOptions: {
              module: "ESNext",
              moduleResolution: "Bundler",
              moduleSuffixes: config.compilerOptions.moduleSuffixes,
              strict: true,
              skipLibCheck: true,
              noEmit: true,
              types: [],
            },
            files: ["entry.ts"],
          }),
        );
        const result = spawnSync(
          process.execPath,
          [compiler, "-p", directory, "--singleThreaded", "--pretty", "false"],
          {
            encoding: "utf8",
            timeout: 10_000,
          },
        );
        expect(result.error).toBeUndefined();
        expect(result.status, result.stdout + result.stderr).toBe(0);
      } finally {
        rmSync(directory, { recursive: true, force: true });
      }
    }),
    { numRuns: 12, seed: 0x51decaf },
  );
}, 30_000);
