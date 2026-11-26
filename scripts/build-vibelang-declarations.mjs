import * as NodeChildProcess from "node:child_process";
import * as NodeFS from "node:fs";
import * as NodePath from "node:path";
import * as NodeURL from "node:url";
import ts from "typescript-legacy";
import {
  compileProjectSync,
  formatDiagnostic,
  writeLoaderRecord,
  checkLoaderRecord,
} from "vibelang/project";

const script = NodeURL.fileURLToPath(import.meta.url);
const repoRoot = NodePath.resolve(NodePath.dirname(script), "..");

function hasNativeSource(directory) {
  return NodeFS.readdirSync(directory, { withFileTypes: true }).some((entry) => {
    if (entry.name.startsWith(".") || entry.name === "node_modules") return false;
    const path = NodePath.join(directory, entry.name);
    return entry.isDirectory()
      ? hasNativeSource(path)
      : entry.name.endsWith(".vibe") || entry.name.endsWith(".vibex");
  });
}

function buildPackage(root) {
  if (!hasNativeSource(root)) return;
  const original = NodePath.join(root, "tsconfig.json");
  const parsed = ts.getParsedCommandLineOfConfigFile(
    original,
    {},
    {
      ...ts.sys,
      onUnRecoverableConfigFileDiagnostic(diagnostic) {
        throw new Error(ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"));
      },
    },
  );
  if (!parsed) throw new Error("Unable to read the declaration project's configuration.");
  const conditions = [...new Set([...(parsed.options.customConditions ?? []), "vibelang-source"])];
  const project = NodePath.join(root, ".vibelang-declarations-" + process.pid + ".json");
  NodeFS.writeFileSync(
    project,
    JSON.stringify({
      extends: "./tsconfig.json",
      compilerOptions: { customConditions: conditions },
    }),
  );
  try {
    const result = compileProjectSync({ project, root, cache: false });
    for (const diagnostic of result.errors) console.error(formatDiagnostic(diagnostic));
    if (result.errors.length > 0) process.exitCode = 1;
    else console.log("VibeLang declarations:", NodePath.relative(repoRoot, root));
  } finally {
    NodeFS.rmSync(project, { force: true });
  }
}

function writePackageRecord(root) {
  if (!hasNativeSource(root)) return;
  const project = NodePath.join(root, "tsconfig.json");
  const result = writeLoaderRecord({ project, root });
  if ("errors" in result) {
    for (const diagnostic of result.errors) console.error(formatDiagnostic(diagnostic));
    process.exitCode = 1;
  } else {
    console.log("VibeLang loader record:", NodePath.relative(repoRoot, root));
  }
}

function checkPackageRecord(root) {
  if (!hasNativeSource(root)) return;
  const project = NodePath.join(root, "tsconfig.json");
  const result = checkLoaderRecord({ project, root });
  if ("miss" in result) {
    console.error(
      "VibeLang loader record is stale:",
      NodePath.relative(repoRoot, root),
      result.miss,
    );
    process.exitCode = 1;
  }
}

if (process.argv.includes("--package")) {
  buildPackage(process.cwd());
} else if (process.argv.includes("--record")) {
  writePackageRecord(process.cwd());
} else if (process.argv.includes("--check-record")) {
  checkPackageRecord(process.cwd());
} else {
  for (const phase of ["--package", "--record", "--check-record"]) {
    const result = NodeChildProcess.spawnSync(
      "pnpm",
      ["-r", "--workspace-concurrency=1", "exec", "node", script, phase],
      { stdio: "inherit", env: process.env },
    );
    if (result.error) throw result.error;
    if (result.status !== 0) {
      process.exitCode = result.status ?? 1;
      break;
    }
  }
}
