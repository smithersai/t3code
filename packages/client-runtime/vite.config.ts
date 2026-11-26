import "vite-plus/test/config";
import { defineConfig } from "vite-plus";
import vibelang from "vibelang-vite";

export default defineConfig({
  plugins: [vibelang({ register: true })],
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
    setupFiles: ["../shared/src/testing/longTempDir.ts", "../shared/src/testing/providerEnv.ts"],
  },
});
