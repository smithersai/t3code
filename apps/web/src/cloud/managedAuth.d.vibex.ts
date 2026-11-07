import { type ReactNode } from "react";
/** @throws {never} */
export declare function deactivateManagedRelayAuthentication(): void;
/** @throws {never} */
export declare function activateManagedRelayAuthentication(accountId: string, readClerkToken: 
/** @throws {never} */
() => Promise<string | null>): void;
/** @throws {never} */
export declare function ManagedRelayAuthProvider({ children }: {
    readonly children: ReactNode;
}): ReactNode;
