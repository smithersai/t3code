import * as Effect from "effect/Effect";
import type { OrchestrationV2ThreadProjection, ThreadId } from "@t3tools/contracts";
import { threadHtmlRenderAttachmentIds } from "../attachmentStore.ts";

/** @throws {SyntaxError} */
function parseEncodedPayload(json: string): Record<string, unknown> {
  return JSON.parse(json) as Record<string, unknown>;
}

export const decodeProjectionPayload = (json: string) =>
  Effect.sync(() => parseEncodedPayload(json));

export const collectProjectionAttachmentIds = (
  threadId: ThreadId,
  messages: ReadonlyArray<{ readonly id: string }>,
  renders: ReadonlyArray<{ readonly payload_json: string }>,
  guestFiles: ReadonlyArray<{ readonly id: string }>,
) =>
  Effect.sync(() => [
    ...new Set([
      ...messages.map((row) => row.id),
      ...guestFiles.map((row) => row.id),
      ...threadHtmlRenderAttachmentIds(
        threadId,
        renders.map((row) => {
          const item = parseEncodedPayload(row.payload_json);
          return {
            toolName: typeof item.toolName === "string" ? item.toolName : null,
            output: item.output,
          };
        }),
      ),
    ]),
  ]);

export const collectReplayProjectionAttachmentIds = (
  threadId: ThreadId,
  projection: OrchestrationV2ThreadProjection,
) =>
  Effect.sync(() => [
    ...new Set([
      ...projection.messages.flatMap((message) =>
        message.attachments.map((attachment) => attachment.id),
      ),
      ...(projection.thread.guestShare?.messages ?? []).flatMap((message) =>
        message.status === "pending"
          ? (message.attachments ?? []).map((attachment) => attachment.id)
          : [],
      ),
      ...threadHtmlRenderAttachmentIds(
        threadId,
        projection.turnItems.flatMap((item) => (item.type === "dynamic_tool" ? [item] : [])),
      ),
    ]),
  ]);
