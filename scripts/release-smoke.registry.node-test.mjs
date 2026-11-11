import * as NodeAssert from "node:assert/strict";
import * as NodeFS from "node:fs";
import * as NodeOS from "node:os";
import * as NodePath from "node:path";
import * as NodeTest from "node:test";
import fc from "fast-check";
import ts from "typescript-legacy";

const source = NodeFS.readFileSync(new URL("./release-smoke.ts", import.meta.url), "utf8");
const tree = ts.createSourceFile("release-smoke.ts", source, ts.ScriptTarget.Latest, true);
const helper = tree.statements.find(
  (statement) =>
    ts.isFunctionDeclaration(statement) && statement.name?.text === "copyWorkspaceManifestFixture",
);
NodeAssert.ok(helper);
const body = ts.transpileModule(helper.getText(tree), {
  compilerOptions: { target: ts.ScriptTarget.ESNext, module: ts.ModuleKind.ESNext },
}).outputText;
const copy = new Function(
  "NodeFS",
  "NodePath",
  "repoRoot",
  "workspaceFiles",
  "targetRoot",
  body + "\ncopyWorkspaceManifestFixture(targetRoot);",
);

NodeTest.test(
  "release manifest fixtures preserve registry and local SDK dependency layouts",
  () => {
    fc.assert(
      fc.property(fc.boolean(), fc.uint8Array({ minLength: 1, maxLength: 64 }), (local, bytes) => {
        const temporary = NodeFS.mkdtempSync(
          NodePath.join(NodeOS.tmpdir(), "release-registry-fixture-"),
        );
        const original = NodePath.join(temporary, "source");
        const target = NodePath.join(temporary, "target");
        const files = [
          "package.json",
          "pnpm-lock.yaml",
          "pnpm-workspace.yaml",
          "apps/server/package.json",
        ];
        try {
          for (const file of files) {
            const destination = NodePath.join(original, file);
            NodeFS.mkdirSync(NodePath.dirname(destination), { recursive: true });
            NodeFS.writeFileSync(destination, "{}");
          }
          const manifest = {
            devDependencies: {
              vibelang: local ? "file:./.vibelang-toolchain/compiler.tgz" : "1.2.3",
            },
          };
          NodeFS.writeFileSync(NodePath.join(original, "package.json"), JSON.stringify(manifest));
          if (local) {
            NodeFS.mkdirSync(NodePath.join(original, ".vibelang-toolchain"), { recursive: true });
            NodeFS.writeFileSync(
              NodePath.join(original, ".vibelang-toolchain/compiler.tgz"),
              bytes,
            );
          }
          copy(NodeFS, NodePath, original, files, target);
          NodeAssert.deepEqual(
            JSON.parse(NodeFS.readFileSync(NodePath.join(target, "package.json"), "utf8")),
            manifest,
          );
          for (const file of files) {
            NodeAssert.deepEqual(
              NodeFS.readFileSync(NodePath.join(target, file)),
              NodeFS.readFileSync(NodePath.join(original, file)),
            );
          }
          if (local) {
            NodeAssert.deepEqual(
              new Uint8Array(
                NodeFS.readFileSync(NodePath.join(target, ".vibelang-toolchain/compiler.tgz")),
              ),
              bytes,
            );
          } else {
            NodeAssert.equal(
              NodeFS.existsSync(NodePath.join(target, ".vibelang-toolchain")),
              false,
            );
          }
        } finally {
          NodeFS.rmSync(temporary, { recursive: true, force: true });
        }
      }),
      {
        numRuns: 50,
        examples: [
          [false, new Uint8Array([1, 2, 3])],
          [true, new Uint8Array([4, 5, 6])],
        ],
      },
    );
  },
);
