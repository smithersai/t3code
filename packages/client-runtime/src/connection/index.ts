export * from "#vibelang/emitted/src/connection/catalog";
export * from "#vibelang/emitted/src/connection/diagnosis";
export * as Connectivity from "#vibelang/emitted/src/connection/connectivity";
export * as CredentialStore from "#vibelang/emitted/src/connection/credentialStore";
export { type ConnectionDriverProgress, type EnvironmentConnectionLease } from "./driver.vibe";
export * from "./errors.ts";
export * from "#vibelang/emitted/src/connection/pullRequestRoutingPermissions";
export * from "./hostFreeze.ts";
export * as Connection from "#vibelang/emitted/src/connection/layer";
export * from "#vibelang/emitted/src/connection/model";
export * as ConnectionOnboarding from "./onboarding.ts";
export * from "#vibelang/emitted/src/connection/presentation";
export * as ProfileStore from "#vibelang/emitted/src/connection/profileStore";
export * from "#vibelang/emitted/src/connection/routes";
export { type RouteCheck } from "./driver.vibe";
export * as EnvironmentRegistry from "#vibelang/emitted/src/connection/registry";
// Flat so consumers' inferred types can name them.
export {
  EnvironmentNotRegisteredError,
  PlatformEnvironmentRemovalError,
} from "#vibelang/emitted/src/connection/registry";
export * as EnvironmentSupervisor from "./supervisor.ts";
export * as Wakeups from "#vibelang/emitted/src/connection/wakeups";

export { orchestrationProtocolCompatibilityError } from "./compatibility.ts";
// Flat so consumers' inferred command types can name it.
export { OutdatedHostUpdateError } from "#vibelang/emitted/src/connection/outdatedHostUpdate";
