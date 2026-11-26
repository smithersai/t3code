#!/usr/bin/env node
export * from "./mobile-native-static-check.main.vibe";
if (import.meta.main) (await import("./mobile-native-static-check.main.vibe")).main();
