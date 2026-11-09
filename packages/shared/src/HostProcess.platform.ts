import * as Effect from "effect/Effect";
import * as NodeDns from "node:dns";
import * as NodeOS from "node:os";
import * as NodeSea from "node:sea";

/** @throws {never} */
export const readPlatform = (): NodeJS.Platform => process.platform;

/** @throws {never} */
export const readArchitecture = (): NodeJS.Architecture => process.arch;

export const readHostname = (): string => NodeOS.hostname();

export const readUserInfoUsername = (): string => NodeOS.userInfo().username;

export const readHomeDirectory = (): string => NodeOS.homedir();

/** @throws {never} */
export const readEnvironment = (): NodeJS.ProcessEnv => process.env;

export const readWorkingDirectory = (): string => process.cwd();

/** @throws {never} */
export const readExecutablePath = (): string => process.execPath;

/** @throws {never} */
export const readArguments = (): ReadonlyArray<string> => process.argv;

/** @throws {never} */
export const readInvokedAs = (): string => process.argv0;

/** @throws {never} */
export const readIsExecutable = (): boolean => NodeSea.isSea();

/** @throws {never} */
export const readUserId = (): number | undefined => process.getuid?.();

export const readNetworkInterfaces = Effect.sync(() => NodeOS.networkInterfaces());

export const lookupHostnameAddresses = () =>
  NodeDns.promises.lookup(NodeOS.hostname(), { all: true });
