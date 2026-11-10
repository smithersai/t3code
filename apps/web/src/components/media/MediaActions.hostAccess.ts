import {
  AuthFilesystemReadScope,
  type EnvironmentId,
  sessionGrantsScope,
  type SessionGrantInput,
} from "@t3tools/contracts";
import * as Option from "effect/Option";
import { AsyncResult } from "effect/reactivity";

import { appAtomRegistry } from "../../rpc/atomRegistry.vibe";
import { environmentSession } from "../../state/session.vibe";

export function allowsHostMedia(session: SessionGrantInput | null) {
  return session === null || sessionGrantsScope(session, AuthFilesystemReadScope);
}

function canReadHostMedia(environmentId: EnvironmentId | null): boolean {
  if (environmentId === null) return true;
  const result = appAtomRegistry.get(environmentSession.sessionStateAtom(environmentId));
  return result._tag !== "Failure" && allowsHostMedia(Option.getOrNull(AsyncResult.value(result)));
}

// Media actions throw this to stop before reading host files the session may not read.
export function assertCanReadMedia(hostEnvironmentId: EnvironmentId | null) {
  if (!canReadHostMedia(hostEnvironmentId)) {
    throw new Error("This connection cannot read host files.");
  }
}
