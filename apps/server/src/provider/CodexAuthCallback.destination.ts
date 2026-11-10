import type { CodexAuthCallbackInput } from "@t3tools/contracts";
import { codexAuthorizationRequest } from "@t3tools/shared/codexAuthHandoff";
import { providerAuthReturnUrl } from "@t3tools/shared/providerAuthReturnUrl";
import { isLoopbackHost } from "@t3tools/shared/preview";

export function codexAuthCallbackDestination(input: CodexAuthCallbackInput) {
  codexAuthorizationRequest(input.authorizationUrl);
  const destination = providerAuthReturnUrl(input.returnUrl);
  if (!destination || !isLoopbackHost(new URL(destination).hostname))
    throw new Error("The local sign-in receiver needs a local T3 Code return address.");
  return destination;
}
