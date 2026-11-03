import * as Layer from "effect/Layer";
import * as IdAllocator from "@t3tools/provider-core/server/IdAllocator";
import * as ThreadManagementService from "./ThreadManagementService.ts";
export declare const layer: Layer.Layer<never, never, IdAllocator.IdAllocatorV2 | ThreadManagementService.ThreadManagementService>;
