import { assert, describe, it } from "@effect/vitest";
import * as Effect from "effect/Effect";
import * as Schema from "effect/Schema";
import { SshPasswordPromptError } from "@t3tools/ssh/errors";

import * as Prompts from "./DesktopSshPasswordPrompts.vibe";
import { toSshPasswordPromptError } from "./desktopSshPromptError.ts";

describe("desktop SSH prompt error boundary", () => {
  it.effect.prop(
    "retains every prompt failure and its user-facing message",
    { destination: Schema.String, requestId: Schema.String },
    ({ destination, requestId }) =>
      Effect.sync(() => {
        const failures = [
          new Prompts.DesktopSshPromptRequestIdGenerationError({
            destination,
            cause: "randomness",
          }),
          new Prompts.DesktopSshPromptWindowUnavailableError({
            destination,
            requestId,
            stage: "before-request",
          }),
          new Prompts.DesktopSshPromptPresentationError({
            destination,
            requestId,
            operation: "send-prompt-request",
            cause: "window",
          }),
          new Prompts.DesktopSshPromptTimedOutError({ destination, requestId }),
          new Prompts.DesktopSshPromptCancelledError({ destination, requestId }),
          new Prompts.DesktopSshPromptWindowClosedError({ destination, requestId }),
          new Prompts.DesktopSshPromptServiceStoppedError({ destination, requestId }),
        ];
        for (const cause of failures) {
          const error = toSshPasswordPromptError(cause);
          assert.instanceOf(error, SshPasswordPromptError);
          assert.strictEqual(error.cause, cause);
          assert.strictEqual(
            error.message,
            cause._tag === "DesktopSshPromptWindowUnavailableError" ||
              cause._tag === "DesktopSshPromptPresentationError"
              ? "T3 Code window is not available for SSH authentication."
              : cause.message,
          );
        }
      }),
  );
});
