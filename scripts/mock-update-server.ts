export * from "./mock-update-server.main.vibe";
if (import.meta.main) (await import("./mock-update-server.main.vibe")).main();
