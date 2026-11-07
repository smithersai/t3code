import * as NodeAssert from "node:assert/strict";
import * as NodeChildProcess from "node:child_process";
import * as NodeFS from "node:fs";
import * as NodePath from "node:path";
import * as NodeURL from "node:url";
import * as NodeTest from "node:test";

import fc from "fast-check";
import ts from "typescript-legacy";

const sourceUrl = new URL("./release-smoke.ts", import.meta.url);
const sourcePath = NodeURL.fileURLToPath(sourceUrl);
const repoRoot = NodePath.resolve(NodePath.dirname(sourcePath), "..");
const source = NodeFS.readFileSync(sourcePath, "utf8");
const tree = ts.createSourceFile(sourcePath, source, ts.ScriptTarget.Latest, true);
const bindings = new Set(["repoRoot", "vibelangRegister", "nativeNodeArgs"]);
const prelude = tree.statements
  .filter(
    (statement) =>
      (ts.isVariableStatement(statement) &&
        statement.declarationList.declarations.some(
          (declaration) => ts.isIdentifier(declaration.name) && bindings.has(declaration.name.text),
        )) ||
      (ts.isFunctionDeclaration(statement) && statement.name?.text === "quoteShellArgument"),
  )
  .map((statement) => statement.getText(tree))
  .join("\n");
const launchers = [];
function visit(node) {
  if (
    ts.isCallExpression(node) &&
    node.expression.getText(tree) === "NodeChildProcess.execFileSync" &&
    ts.isArrayLiteralExpression(node.arguments[1])
  ) {
    const command = node.arguments[0].getText(tree);
    const args = node.arguments[1];
    if (
      command === "process.execPath" &&
      /scripts\/[^"']+\.(?:ts|vibe)["']/.test(args.getText(tree))
    ) {
      launchers.push({ kind: "node", expression: args.getText(tree) });
    } else if (command === '"bash"') {
      launchers.push({ kind: "bash", expression: args.elements[1].getText(tree) });
    }
  }
  ts.forEachChild(node, visit);
}
visit(tree);
NodeAssert.equal(launchers.length, 4);

function evaluate(expression, root, childPath) {
  // Evaluate the real launcher expressions without running the manifest fixture setup.
  const body = ts.transpileModule(
    (prelude + "\nconst result = (" + expression + ");\nreturn result;").replaceAll(
      "import.meta",
      "importMeta",
    ),
    { compilerOptions: { target: ts.ScriptTarget.ESNext, module: ts.ModuleKind.ESNext } },
  ).outputText;
  const path = {
    ...NodePath,
    resolve: (...parts) =>
      parts.some((part) => /^scripts\/.+\.(?:ts|vibe)$/.test(part))
        ? childPath
        : NodePath.resolve(...parts),
  };
  return new Function(
    "NodePath",
    "NodeURL",
    "importMeta",
    "process",
    "tempRoot",
    "arm64Path",
    "x64Path",
    body,
  )(
    path,
    NodeURL,
    { url: sourceUrl.href, resolve: import.meta.resolve },
    process,
    root,
    NodePath.join(root, "arm64.yml"),
    NodePath.join(root, "x64.yml"),
  );
}

function checkLaunchers(label, answer) {
  const root = NodeFS.mkdtempSync(NodePath.join(repoRoot, ".release-native-loader-"));
  try {
    const directory = NodePath.join(root, "case-" + label + "-x");
    NodeFS.mkdirSync(directory, { recursive: true });
    NodeFS.writeFileSync(NodePath.join(root, "package.json"), '{"type":"module"}\n');
    NodeFS.writeFileSync(
      NodePath.join(root, "tsconfig.json"),
      JSON.stringify({
        compilerOptions: {
          target: "ESNext",
          module: "ESNext",
          moduleResolution: "Bundler",
          skipLibCheck: true,
        },
        files: [NodePath.relative(root, NodePath.join(directory, "leaf.vibe"))],
      }),
    );
    NodeFS.writeFileSync(
      NodePath.join(directory, "leaf.vibe"),
      "export const answer = " + answer + ";\n",
    );
    const child = NodePath.join(directory, "child.ts");
    NodeFS.writeFileSync(
      child,
      'import { answer } from "./leaf.vibe";\nconsole.log("answer=" + answer);\n',
    );
    const env = { ...process.env };
    delete env.NODE_OPTIONS;
    for (const launcher of launchers) {
      const args = evaluate(launcher.expression, root, child);
      if (launcher.kind === "bash") {
        const assets = NodePath.join(root, "release-assets");
        NodeFS.mkdirSync(assets, { recursive: true });
        for (const architecture of ["arm64", "x64"]) {
          NodeFS.writeFileSync(
            NodePath.join(assets, "latest-win-" + architecture + ".yml"),
            "fixture",
          );
        }
      }
      const result = NodeChildProcess.spawnSync(
        launcher.kind === "bash" ? "bash" : process.execPath,
        launcher.kind === "bash" ? ["-lc", args] : args,
        { cwd: repoRoot, env, encoding: "utf8" },
      );
      NodeAssert.ifError(result.error);
      NodeAssert.equal(result.status, 0, result.stderr);
      NodeAssert.equal(result.stdout, "answer=" + answer + "\n");
    }
  } finally {
    NodeFS.rmSync(root, { recursive: true, force: true });
  }
}

NodeTest.test(
  "release child launchers load native dependencies with no inherited loader options",
  () => {
    checkLaunchers("plain", 42);
  },
);

NodeTest.test("native child arguments preserve quoted, Unicode and shell-sensitive paths", () => {
  const label = fc
    .array(
      fc.constantFrom("a", "Z", " ", "'", '"', "$", String.fromCharCode(96), "é", "界", "_", "-"),
      {
        minLength: 0,
        maxLength: 8,
      },
    )
    .map((characters) => characters.join(""));
  fc.assert(
    fc.property(label, fc.integer({ min: -10000, max: 10000 }), (name, answer) => {
      checkLaunchers(name, answer);
    }),
    { numRuns: 20 },
  );
});

NodeTest.test("release manifest fixtures include their local toolchain dependencies", () => {
  const root = NodeFS.mkdtempSync(NodePath.join(repoRoot, ".release-manifest-fixture-"));
  try {
    const setup = tree.statements
      .filter(
        (statement) =>
          (ts.isVariableStatement(statement) &&
            statement.declarationList.declarations.some(
              (declaration) =>
                ts.isIdentifier(declaration.name) && declaration.name.text === "workspaceFiles",
            )) ||
          (ts.isFunctionDeclaration(statement) &&
            statement.name?.text === "copyWorkspaceManifestFixture"),
      )
      .map((statement) => statement.getText(tree))
      .join("\n");
    const body = ts.transpileModule(setup + "\ncopyWorkspaceManifestFixture(targetRoot);", {
      compilerOptions: { target: ts.ScriptTarget.ESNext, module: ts.ModuleKind.ESNext },
    }).outputText;
    new Function("NodeFS", "NodePath", "repoRoot", "targetRoot", body)(
      NodeFS,
      NodePath,
      repoRoot,
      root,
    );
    const manifest = JSON.parse(NodeFS.readFileSync(NodePath.join(root, "package.json"), "utf8"));
    const localDependencies = Object.values(manifest.devDependencies).filter(
      (value) => typeof value === "string" && value.startsWith("file:"),
    );
    NodeAssert.ok(localDependencies.length > 0);
    for (const dependency of localDependencies) {
      const relativePath = dependency.slice("file:".length);
      NodeAssert.deepEqual(
        NodeFS.readFileSync(NodePath.resolve(root, relativePath)),
        NodeFS.readFileSync(NodePath.resolve(repoRoot, relativePath)),
      );
    }
  } finally {
    NodeFS.rmSync(root, { recursive: true, force: true });
  }
});
