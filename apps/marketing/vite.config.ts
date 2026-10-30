import { defineConfig } from "vite-plus";
import vibelang from "vibelang-vite";

// Astro reads astro.config.mjs. This file only configures `vp run` tasks.
export default defineConfig({
  plugins: [vibelang({ register: true })],
  run: {
    tasks: {
      // `astro check` regenerates .astro/*.d.ts and then reads them, which
      // keeps a task out of the cache. Its real inputs are tracked as usual.
      typecheck: {
        command: "astro check",
        cache: { input: [{ auto: true }, "!.astro/**"] },
      },
    },
  },
});
