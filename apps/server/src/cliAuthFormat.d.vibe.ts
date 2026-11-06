import type { AuthClientSession, AuthPairingLink } from "@t3tools/contracts";
import type { IssuedBearerSession, IssuedPairingLink } from "./auth/EnvironmentAuth.ts";
/** @throws {never} */
export declare function formatIssuedPairingCredential(credential: IssuedPairingLink, options?: {
    readonly json?: boolean;
    readonly baseUrl?: string;
}): string;
/** @throws {never} */
export declare function formatPairingCredentialList(credentials: ReadonlyArray<AuthPairingLink>, options?: {
    readonly json?: boolean;
}): string;
/** @throws {never} */
export declare function formatIssuedSession(session: IssuedBearerSession, options?: {
    readonly json?: boolean;
    readonly tokenOnly?: boolean;
}): string;
/** @throws {never} */
export declare function formatSessionList(sessions: ReadonlyArray<AuthClientSession>, options?: {
    readonly json?: boolean;
}): string;
