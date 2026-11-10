import type { UsageRecord } from "@t3tools/provider-core/server/usage";

export type FieldValue = number | bigint | Uint8Array;
export type Fields = Map<number, FieldValue[]>;

export function fields(bytes: Uint8Array): Fields {
  let offset = 0;
  const result: Fields = new Map();
  const varint = () => {
    let value = 0n;
    for (let shift = 0n; shift < 70n; shift += 7n) {
      const byte = bytes[offset++];
      if (byte === undefined || (shift === 63n && byte > 1)) {
        throw new Error("Invalid Antigravity protobuf varint");
      }
      value |= BigInt(byte & 127) << shift;
      if (byte < 128) {
        return value > BigInt(Number.MAX_SAFE_INTEGER) ? value : Number(value);
      }
    }
    throw new Error("Invalid Antigravity protobuf varint");
  };
  while (offset < bytes.length) {
    const tag = varint();
    if (typeof tag !== "number") throw new Error("Invalid protobuf field");
    const number = Math.floor(tag / 8);
    const wire = tag % 8;
    if (number === 0) throw new Error("Invalid protobuf field");
    let value: FieldValue;
    if (wire === 0) {
      value = varint();
    } else if (wire === 1 || wire === 5 || wire === 2) {
      const length = wire === 2 ? varint() : wire === 1 ? 8 : 4;
      if (typeof length !== "number") throw new Error("Invalid protobuf field length");
      if (length > bytes.length - offset) throw new Error("Truncated protobuf field");
      value = bytes.subarray(offset, offset + length);
      offset += length;
      if (wire !== 2) continue;
    } else {
      throw new Error("Unsupported protobuf wire type");
    }
    const entries = result.get(number) ?? [];
    entries.push(value);
    result.set(number, entries);
  }
  return result;
}

export const numberAt = (value: Fields, key: number) => {
  const entry = value.get(key)?.[0];
  return typeof entry === "number" ? entry : 0;
};
export const bytesAt = (value: Fields, key: number) => {
  const entry = value.get(key)?.[0];
  return entry instanceof Uint8Array ? entry : undefined;
};
export const nested = (value: Fields, key: number) => {
  const bytes = bytesAt(value, key);
  return bytes === undefined ? new Map<number, FieldValue[]>() : fields(bytes);
};
export const textAt = (value: Fields, key: number) => {
  const bytes = bytesAt(value, key);
  return bytes === undefined ? "" : new TextDecoder("utf-8", { fatal: true }).decode(bytes).trim();
};
export const timestamp = (value: Fields) => {
  const seconds = numberAt(value, 1);
  return seconds > 0 ? seconds * 1000 + Math.floor(numberAt(value, 2) / 1_000_000) : null;
};

export const MODEL_IDS: Record<number, string> = {
  246: "gemini-2.5-pro",
  312: "gemini-2.5-flash",
  313: "gemini-2.5-flash-thinking",
  329: "gemini-2.5-flash-thinking",
  330: "gemini-2.5-flash-lite",
  281: "claude-sonnet-4",
  282: "claude-sonnet-4",
  290: "claude-opus-4",
  291: "claude-opus-4",
  333: "claude-sonnet-4-5",
  334: "claude-sonnet-4-5",
  340: "claude-haiku-4-5",
  341: "claude-haiku-4-5",
  1026: "claude-opus-4-6",
  1035: "claude-sonnet-4-6",
  1016: "gemini-3.1-pro",
  1036: "gemini-3.1-pro",
  1037: "gemini-3.1-pro",
  1018: "gemini-3-flash-preview",
  1084: "gemini-3-flash-preview",
  1047: "gemini-3-flash-preview",
};

export function modelName(name: string, id: number): string {
  if (name) {
    const normalized = name
      .toLowerCase()
      .replace(/\s*\([^)]*\)\s*$/, "")
      .replaceAll(" ", "-");
    if (normalized.startsWith("claude-")) {
      return normalized
        .replace(/^claude-(4(?:\.\d+)?)-(sonnet|opus|haiku)/, "claude-$2-$1")
        .replaceAll(".", "-");
    }
    return normalized;
  }
  return MODEL_IDS[id] ?? (id > 0 ? `antigravity-model-${id}` : "");
}

export interface Metadata {
  model: string;
  timestampMs: number | null;
  usages: Fields[];
}

export function metadata(bytes: Uint8Array, step: boolean): Metadata {
  const root = fields(bytes);
  if (!step && bytesAt(root, 1) === undefined) {
    throw new Error("Missing Antigravity generation metadata");
  }
  const data = step ? root : nested(root, 1);
  const model = step ? nested(data, 24) : data;
  const usage = bytesAt(data, step ? 9 : 4);
  // Copy the usage bytes: subarrays kept in usages would hold each row's whole blob alive.
  const usages = usage === undefined ? [] : [fields(usage.slice())];
  for (const retry of data.get(step ? 28 : 17) ?? []) {
    if (!(retry instanceof Uint8Array)) throw new Error("Invalid retry metadata");
    const retryUsage = bytesAt(fields(retry), 2);
    if (retryUsage !== undefined) usages.push(fields(retryUsage.slice()));
  }
  return {
    model: modelName(
      textAt(model, step ? 12 : 19) || textAt(model, step ? 8 : 21),
      numberAt(model, step ? 1 : 3),
    ),
    timestampMs: step
      ? (timestamp(nested(data, 8)) ?? timestamp(nested(data, 1)))
      : timestamp(nested(nested(data, 9), 4)),
    usages,
  };
}

export function blob(value: unknown): Uint8Array {
  if (!(value instanceof Uint8Array)) throw new Error("Invalid Antigravity metadata blob");
  return value;
}

export interface UsageCandidate {
  record: UsageRecord;
  keys: readonly string[];
  timestampQuality: number;
}

export function usageCandidates(
  sessionId: string,
  generations: ReadonlyArray<{ idx: number; entry: Metadata }>,
  steps: ReadonlyArray<{ idx: number; entry: Metadata }>,
  trajectoryTimestamp: number | null,
  fallbackTimestamp: number,
): UsageCandidate[] {
  const records: UsageCandidate[] = [];
  const generationModels = new Map(generations.map(({ idx, entry }) => [idx, entry.model]));
  for (const [source, entries] of [
    ["step", steps],
    ["generation", generations],
  ] as const) {
    for (const [index, { idx, entry }] of entries.entries()) {
      for (const [usageIndex, usage] of entry.usages.entries()) {
        const outputTokens = Math.max(numberAt(usage, 3), numberAt(usage, 9) + numberAt(usage, 10));
        const totals = {
          uncachedInputTokens: numberAt(usage, 2),
          cachedInputTokens: numberAt(usage, 5),
          cacheCreationTokens: numberAt(usage, 4),
          outputTokens,
          reasoningTokens: Math.min(outputTokens, numberAt(usage, 9)),
        };
        if (
          totals.uncachedInputTokens +
            totals.cachedInputTokens +
            totals.cacheCreationTokens +
            outputTokens ===
          0
        )
          continue;
        const keys = ([11, 12, 7] as const).flatMap((key) => {
          const id = textAt(usage, key);
          return id ? [`antigravity:${key}:${id}`] : [];
        });
        const record: UsageRecord = {
          provider: "antigravity",
          sessionId,
          timestampMs: entry.timestampMs ?? trajectoryTimestamp ?? fallbackTimestamp,
          model:
            MODEL_IDS[numberAt(usage, 1)] ||
            entry.model ||
            (source === "step" ? generationModels.get(idx) : "") ||
            modelName("", numberAt(usage, 1)) ||
            "antigravity-unknown",
          totals,
          reportedCostUsd: null,
          speed: "standard",
          dedupeKey: keys[0] ?? `antigravity:${sessionId}:${source}:${index}:${usageIndex}`,
        };
        records.push({
          record,
          keys,
          timestampQuality: entry.timestampMs !== null ? 2 : trajectoryTimestamp !== null ? 1 : 0,
        });
      }
    }
  }
  return records;
}
