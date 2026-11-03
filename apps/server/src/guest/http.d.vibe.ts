import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import { HttpRouter, HttpServerRequest } from "effect/http";
import type { GuestUpload } from "./guestAttachments.ts";
import { GuestShareAccessError, GuestShareService } from "./GuestShareService.ts";
/** A message as JSON (text only), or as multipart form data with `file` parts. */
export declare const readSubmission: Effect.Effect<{
    fields: {
        readonly shareId: string & import("effect/Brand").Brand<"GuestShareId">;
        readonly text: string;
    };
    uploads: readonly GuestUpload[];
} | null, GuestShareAccessError, import("effect/FileSystem").FileSystem | HttpServerRequest.HttpServerRequest | import("effect/Path").Path | import("effect/Scope").Scope>;
export declare const layer: Layer.Layer<never, never, HttpRouter.HttpRouter | HttpRouter.Request<"Error", import("effect/http/HttpBody").HttpBodyError> | HttpRouter.Request<"Requires", import("effect/FileSystem").FileSystem> | HttpRouter.Request<"Requires", GuestShareService> | HttpRouter.Request<"Requires", import("effect/http/HttpPlatform").HttpPlatform> | HttpRouter.Request<"Requires", import("effect/Path").Path>>;
