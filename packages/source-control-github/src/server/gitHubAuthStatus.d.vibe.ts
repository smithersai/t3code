import type { GitHubSettings } from "../shared/definition.js";
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
export declare function parseGitHubAuthStatus(text: string): GitHubAuthStatus;
export declare function findAuthenticatedGitHubAccount(accounts: ReadonlyArray<GitHubAuthStatusAccount>): GitHubAuthStatusAccount | undefined;
export declare function effectiveGitHubAccount(host: string, accounts: ReadonlyArray<GitHubAuthStatusAccount>, settings: GitHubSettings): GitHubAuthStatusAccount | undefined;
