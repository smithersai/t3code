// Bundles the desktop verify job's scripts so that job needs no install. The
// scripts import VibeLang modules, which the esbuild CLI cannot load, so the
// bundle goes through VibeLang's esbuild plugin.
import { build } from "esbuild";
import vibelang from "vibelang-unplugin/esbuild";

const banner =
  "import{createRequire as __cr}from'node:module';const require=__cr(import.meta.url);";
const options = {
  bundle: true,
  platform: "node",
  format: "esm",
  target: "node24",
  banner: { js: banner },
  plugins: [vibelang()],
};

await build({
  ...options,
  entryPoints: ["scripts/verify-windows-desktop-artifact.ts"],
  // build-desktop-artifact.ts's own import.meta.main guard must not run its
  // CLI inside the verify bundle.
  define: { "import.meta.main": "false" },
  outfile: "verify/verify-windows-desktop-artifact.mjs",
});
await build({
  ...options,
  entryPoints: ["scripts/smoke-cli-archive.ts"],
  outfile: "verify/smoke-cli-archive.mjs",
});
