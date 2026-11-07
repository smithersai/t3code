export declare const listeners: Map<string, AbortController>;
/** Receive an authorization code locally. Credentials and PKCE stay on the target environment. */
export declare function receiveCodexAuthCallback(authorizationUrl: string, openBrowser: (url: string) => Promise<boolean>, destination?: (callbackUrl: string) => string, signal?: AbortSignal): Promise<string>;
