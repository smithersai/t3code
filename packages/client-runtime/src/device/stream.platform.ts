// @effect-diagnostics globalFetch:off globalTimers:off - This browser and WebView transport runs without an Effect runtime.

/** Sixteen bytes stay far below the Web Crypto quota. @throws {never} */
export const getRandomValues = (bytes: Uint8Array<ArrayBuffer>): Uint8Array<ArrayBuffer> =>
  globalThis.crypto.getRandomValues(bytes);

/** @throws {never} */
export const isWebCodecsSupported = (): boolean =>
  typeof globalThis !== "undefined" &&
  "VideoDecoder" in globalThis &&
  "EncodedVideoChunk" in globalThis;

export const readWebSocketOpen = (): number => WebSocket.OPEN;

/** @throws {never} */
export const isPeerConnectionUnavailable = (): boolean => typeof RTCPeerConnection === "undefined";

/** @throws {never} */
export const startTimeout = (callback: () => void, ms: number): ReturnType<typeof setTimeout> =>
  setTimeout(callback, ms);

/** @throws {never} */
export const cancelTimeout = (handle: ReturnType<typeof setTimeout>): void => clearTimeout(handle);

/** @throws {never} */
export const startInterval = (callback: () => void, ms: number): ReturnType<typeof setInterval> =>
  setInterval(callback, ms);

/** @throws {never} */
export const cancelInterval = (handle: ReturnType<typeof setInterval>): void =>
  clearInterval(handle);

export const fetchUrl = (input: string, init?: RequestInit): Promise<Response> =>
  fetch(input, init);

export const createVideoDecoder = (init: VideoDecoderInit): VideoDecoder => new VideoDecoder(init);

export const isVideoDecoderConfigSupported = (
  config: VideoDecoderConfig,
): Promise<VideoDecoderSupport> => VideoDecoder.isConfigSupported(config);

export const createEncodedVideoChunk = (init: EncodedVideoChunkInit): EncodedVideoChunk =>
  new EncodedVideoChunk(init);

export const createImageBitmapFromBlob = (
  parts: BlobPart[],
  options: BlobPropertyBag,
): Promise<ImageBitmap> => createImageBitmap(new Blob(parts, options));

export const createPeerConnection = (configuration: RTCConfiguration): RTCPeerConnection =>
  new RTCPeerConnection(configuration);

export const createVideoElement = (): HTMLVideoElement => document.createElement("video");

export const appendToDocumentBody = (node: Node): void => document.body.append(node);

export const getReceiverCapabilities = (kind: string): RTCRtpCapabilities | null =>
  RTCRtpReceiver.getCapabilities(kind);

export const createMediaStream = (tracks: MediaStreamTrack[]): MediaStream =>
  new MediaStream(tracks);

export const openWebSocket = (url: string): WebSocket => new WebSocket(url);
