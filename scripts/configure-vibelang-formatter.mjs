import * as NodeChildProcess from "node:child_process";
import * as NodeFS from "node:fs";
import * as NodePath from "node:path";

const packageDirectory = NodeFS.realpathSync(new URL("../node_modules/vibelang", import.meta.url));

NodeChildProcess.execFileSync(
  process.execPath,
  [NodePath.join(packageDirectory, "bin", "vibelang"), "--write-dprint-plugin", packageDirectory],
  { stdio: "inherit" },
);
