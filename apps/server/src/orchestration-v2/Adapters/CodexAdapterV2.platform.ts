import * as Effect from "effect/Effect";
import type * as DateTime from "effect/DateTime";
import type { OrchestrationV2ProviderSession, ProviderInstanceId } from "@t3tools/contracts";

export const makeProviderSession = (
  input: {
    readonly providerSessionId: OrchestrationV2ProviderSession["id"];
    readonly providerInstanceId: ProviderInstanceId;
    readonly cwd: string | null;
    readonly model: string;
    readonly now: DateTime.Utc;
  },
  driver: OrchestrationV2ProviderSession["driver"],
  capabilities: OrchestrationV2ProviderSession["capabilities"],
) =>
  Effect.sync((): OrchestrationV2ProviderSession => {
    return {
      id: input.providerSessionId,
      driver,
      providerInstanceId: input.providerInstanceId,
      status: "ready",
      cwd: input.cwd ?? process.cwd(),
      model: input.model,
      capabilities,
      createdAt: input.now,
      updatedAt: input.now,
      lastError: null,
    };
  });

export const encodeBase64 = (bytes: Uint8Array) =>
  Effect.sync(() => Buffer.from(bytes).toString("base64"));
