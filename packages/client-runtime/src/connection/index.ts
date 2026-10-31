export * from "./catalog.vibe";
export * from "./diagnosis.vibe";
export * as Connectivity from "./connectivity.vibe";
export * as CredentialStore from "./credentialStore.vibe";
export { type ConnectionDriverProgress, type EnvironmentConnectionLease } from "./driver.ts";
export * from "./errors.ts";
export * from "./pullRequestRoutingPermissions.ts";
export * from "./hostFreeze.ts";
export * as Connection from "./layer.ts";
export * from "./model.vibe";
export * as ConnectionOnboarding from "./onboarding.ts";
export * from "./presentation.ts";
export * as ProfileStore from "./profileStore.vibe";
export * from "./routes.ts";
export { type RouteCheck } from "./driver.ts";
export * as EnvironmentRegistry from "./registry.ts";
// Flat so consumers' inferred types can name them.
export { EnvironmentNotRegisteredError, PlatformEnvironmentRemovalError } from "./registry.ts";
export * as EnvironmentSupervisor from "./supervisor.ts";
export * as Wakeups from "./wakeups.vibe";

export { orchestrationProtocolCompatibilityError } from "./compatibility.ts";
// Flat so consumers' inferred command types can name it.
export { OutdatedHostUpdateError } from "./outdatedHostUpdate.ts";
