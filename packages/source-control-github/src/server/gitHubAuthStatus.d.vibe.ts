import type { GitHubSettings } from "../shared/definition.ts";
export interface GitHubAuthStatusAccount {
    readonly host: string;
    readonly account: string;
    readonly authenticated: boolean;
    readonly active: boolean;
    readonly error: string | null;
    readonly environmentVariable: string | null;
}
export interface GitHubAuthStatus {
    readonly parsed: boolean;
    readonly accounts: ReadonlyArray<GitHubAuthStatusAccount>;
}
/** @throws {never} */
export declare function parseGitHubAuthStatus(text: string): GitHubAuthStatus;
/** @throws {never} */
export declare function findAuthenticatedGitHubAccount(accounts: ReadonlyArray<GitHubAuthStatusAccount>): GitHubAuthStatusAccount | undefined;
/** @throws {never} */
export declare function effectiveGitHubAccount(host: string, accounts: ReadonlyArray<GitHubAuthStatusAccount>, settings: GitHubSettings): GitHubAuthStatusAccount | undefined;
