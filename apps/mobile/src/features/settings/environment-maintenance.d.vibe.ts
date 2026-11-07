import { type AuthSessionState, type ExecutionEnvironmentCapabilities, type ServerProvider } from "@t3tools/contracts";
/** @throws {never} */
export declare function canMaintainEnvironment(session: AuthSessionState | null, connected: boolean): boolean;
/** @throws {never} */
export declare function supportsEnvironmentUpdate(capabilities: Pick<ExecutionEnvironmentCapabilities, "serverSelfUpdate" | "desktopAppUpdate">): boolean;
/** @throws {never} */
export declare function canUpdateEnvironmentProvider(provider: ServerProvider): boolean;
/** @throws {never} */
export declare function findEnvironmentUpdate(currentVersion: string, signal: AbortSignal): Promise<string | null>;
