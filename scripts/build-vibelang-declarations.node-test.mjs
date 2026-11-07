import * as NodeAssert from "node:assert/strict";
import * as NodeChildProcess from "node:child_process";
import * as NodeFS from "node:fs";
import * as NodePath from "node:path";
import * as NodeTest from "node:test";
import * as NodeURL from "node:url";
import fc from "fast-check";
import ts from "typescript-legacy";
import { checkLoaderRecord } from "vibelang/project";

const scriptDirectory = NodeURL.fileURLToPath(new URL("./", import.meta.url));
const repoRoot = NodePath.resolve(scriptDirectory, "..");
const generator = NodePath.join(scriptDirectory, "build-vibelang-declarations.mjs");
const regressionCases = JSON.parse(
  NodeFS.readFileSync(
    new URL("./fixtures/t3code-declaration-bootstrap.json", import.meta.url),
    "utf8",
  ),
);

NodeTest.test("regenerates typed declarations with inherited project paths", async () => {
  NodeFS.mkdirSync(NodePath.join(repoRoot, ".t3"), { recursive: true });
  await fc.assert(
    fc.asyncProperty(
      fc.boolean(),
      fc.constantFrom("plain", "with space", "unicode-λ"),
      fc.integer({ min: -1000, max: 1000 }),
      async (explicitInclude, directoryName, value) => {
        const temporary = NodeFS.mkdtempSync(NodePath.join(repoRoot, ".t3", "declaration-test-"));
        const root = NodePath.join(temporary, directoryName);
        NodeFS.mkdirSync(NodePath.join(root, "src"), { recursive: true });
        try {
          NodeFS.symlinkSync(
            NodePath.join(scriptDirectory, "node_modules"),
            NodePath.join(root, "node_modules"),
            "dir",
          );
          NodeFS.writeFileSync(
            NodePath.join(root, "package.json"),
            JSON.stringify({
              name: "declaration-fixture",
              private: true,
              type: "module",
              imports: {
                "#fixture-value": {
                  "declaration-fixture": "./src/value.ts",
                  default: "./src/default.ts",
                },
              },
            }),
          );
          NodeFS.writeFileSync(
            NodePath.join(root, "base.json"),
            JSON.stringify({
              compilerOptions: {
                target: "ES2022",
                module: "ESNext",
                moduleResolution: "Bundler",
                strict: true,
                noEmit: true,
                skipLibCheck: true,
                types: [],
                allowArbitraryExtensions: true,
                customConditions: ["declaration-fixture"],
              },
              exclude: ["node_modules"],
            }),
          );
          NodeFS.writeFileSync(
            NodePath.join(root, "tsconfig.json"),
            JSON.stringify({
              extends: "./base.json",
              ...(explicitInclude ? { include: ["src/**/*", "*.ts"] } : {}),
            }),
          );
          NodeFS.writeFileSync(
            NodePath.join(root, "src/value.ts"),
            "export const chosen: number = " + value + ";\n",
          );
          NodeFS.writeFileSync(
            NodePath.join(root, "src/default.ts"),
            'export const chosen: string = "wrong condition";\n',
          );
          NodeFS.writeFileSync(
            NodePath.join(root, "src/model.vibe"),
            [
              'import { chosen } from "#fixture-value";',
              "export const value = chosen;",
              "export type Payload = { readonly name: string };",
              "",
            ].join("\n"),
          );
          const good = NodePath.join(root, "good.ts");
          const bad = NodePath.join(root, "bad.ts");
          NodeFS.writeFileSync(
            good,
            'import { value, type Payload } from "./src/model.vibe";\nconst result: number = value;\nconst payload: Payload = { name: "ok" };\n',
          );
          const options = {
            target: ts.ScriptTarget.ES2022,
            module: ts.ModuleKind.ESNext,
            moduleResolution: ts.ModuleResolutionKind.Bundler,
            strict: true,
            noEmit: true,
            skipLibCheck: true,
            types: [],
            allowArbitraryExtensions: true,
            customConditions: ["declaration-fixture"],
          };
          const diagnostics = (file) => ts.getPreEmitDiagnostics(ts.createProgram([file], options));
          NodeAssert.ok(diagnostics(good).some((item) => item.code === 2307 || item.code === 7016));
          const built = NodeChildProcess.spawnSync(process.execPath, [generator, "--package"], {
            cwd: root,
            env: process.env,
            encoding: "utf8",
          });
          NodeAssert.equal(built.status, 0, built.stdout + built.stderr);
          NodeAssert.ok(NodeFS.existsSync(NodePath.join(root, "src/model.d.vibe.ts")));
          NodeAssert.deepEqual(
            diagnostics(good).map((item) => item.code),
            [],
          );
          const recorded = NodeChildProcess.spawnSync(process.execPath, [generator, "--record"], {
            cwd: root,
            env: process.env,
            encoding: "utf8",
          });
          NodeAssert.equal(recorded.status, 0, recorded.stdout + recorded.stderr);
          const recordOptions = { project: NodePath.join(root, "tsconfig.json"), root };
          NodeAssert.ok("modules" in checkLoaderRecord(recordOptions));
          const nativeSource = NodePath.join(root, "src/model.vibe");
          NodeFS.writeFileSync(
            nativeSource,
            NodeFS.readFileSync(nativeSource, "utf8").replace(
              "export const value = chosen;",
              "export const value = chosen + 1;",
            ),
          );
          NodeAssert.ok("miss" in checkLoaderRecord(recordOptions));
          NodeFS.writeFileSync(
            bad,
            'import { value } from "./src/model.vibe";\nconst result: string = value;\n',
          );
          NodeAssert.deepEqual(
            diagnostics(bad).map((item) => item.code),
            [2322],
          );
          NodeAssert.deepEqual(
            NodeFS.readdirSync(root).filter((name) => name.startsWith(".vibelang-declarations-")),
            [],
          );
        } finally {
          NodeFS.rmSync(temporary, { recursive: true, force: true });
        }
      },
    ),
    {
      numRuns: 12,
      examples: regressionCases.examples,
    },
  );
});
