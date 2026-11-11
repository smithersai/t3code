export * from "./mobile-native-client.main.vibe";
if (import.meta.main) (await import("./mobile-native-client.main.vibe")).runCommandLine();
