import * as RpcSerialization from "effect/rpc/RpcSerialization";

// ndJsonRpc skips lines that are not JSON. A malformed agent line has to end the
// session, so frames are split here and each one goes through the strict codec.
/**
 * Its `decode` throws on a malformed line; callers run it in `Effect.try`.
 *
 * @throws {never}
 */
export const makeStrictNdJsonRpcParser = () => {
  const codec = RpcSerialization.jsonRpc().makeUnsafe();
  const decoder = new TextDecoder();
  let buffer = "";
  return {
    decode: (bytes: Uint8Array | string): ReadonlyArray<unknown> => {
      buffer += typeof bytes === "string" ? bytes : decoder.decode(bytes, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";
      return lines.flatMap((line) => codec.decode(line));
    },
    encode: (response: Parameters<typeof codec.encode>[0]) => {
      const encoded = codec.encode(response);
      return encoded === undefined ? undefined : `${encoded}\n`;
    },
  };
};
