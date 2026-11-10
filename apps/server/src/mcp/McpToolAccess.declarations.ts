import {
  type EnvironmentId,
  OrchestratorMcpEnvironmentTarget,
  OrchestratorMcpFailure,
} from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import type * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Predicate from "effect/Predicate";
import type * as Scope from "effect/Scope";
import * as Struct from "effect/Struct";
import type { Tool, Toolkit } from "effect/ai";

import * as PeerForwarding from "../peer/PeerForwarding.vibe";
import * as McpInvocationContext from "./McpInvocationContext.vibe";
import type { assertLiveCaller, loadCaller } from "./threadAccess.vibe";

/** What `writingCaller` in McpToolAccess needs. */
type WritingCallerServices =
  | McpInvocationContext.McpInvocationContext
  | Effect.Services<ReturnType<typeof loadCaller>>
  | Effect.Services<ReturnType<typeof assertLiveCaller>>;

/** Private constructors only enforce types; the token also blocks runtime construction. */
const builtHere: unique symbol = Symbol("t3/mcp/McpToolAccess/builtHere");

const refuseOutsideConstruction = (token: symbol) => {
  if (token !== builtHere) {
    throw new TypeError("Only McpToolAccess builds MCP tool declarations and handler layers.");
  }
};

export let declare: <P, A, E, R>(
  handle: (params: P) => Effect.Effect<A, E, R>,
  remote: RemoteCheck<P> | undefined,
) => Declaration<(params: P) => Effect.Effect<A, E, R>>;

/**
 * What a call bound for a linked environment checks here before it goes: the
 * caller, not the thread or project it names, which live there and are
 * checked there. `undefined` for tools that act as the calling thread itself.
 */
export type RemoteCheck<P> = (
  params: P,
) => Effect.Effect<unknown, OrchestratorMcpFailure, WritingCallerServices>;
export let remoteCheckOf: <Handler>(
  declaration: Declaration<Handler>,
) => RemoteCheck<never> | undefined;

type CheckedHandlerOf<D> = D extends Declaration<infer Handler> ? Handler : never;

interface CheckedHandler extends Struct.Lambda {
  <Handler>(declaration: Declaration<Handler>): Handler;
  readonly "~lambda.out": CheckedHandlerOf<this["~lambda.in"]>;
}
export let checkedHandler: CheckedHandler;

export let handlersLayer: <Tools extends Record<string, Tool.Any>, EX, RX>(
  layer: Layer.Layer<Tool.HandlersFor<Tools>, EX, RX>,
) => HandlersLayer<Tools, EX, RX>;

/** t3code/no-raw-mcp-registration confines Effect's unchecked registration API to McpHttpServer. */
export class Declaration<out Handler> {
  readonly #handle: Handler;
  readonly #remote: RemoteCheck<never> | undefined;
  private constructor(
    token: typeof builtHere,
    handle: Handler,
    remote: RemoteCheck<never> | undefined,
  ) {
    refuseOutsideConstruction(token);
    this.#handle = handle;
    this.#remote = remote;
  }
  static {
    declare = (handle, remote) => new Declaration(builtHere, handle, remote);
    checkedHandler = Struct.lambda<CheckedHandler>((declaration) => declaration.#handle);
    remoteCheckOf = (declaration) => declaration.#remote;
  }
}

export class HandlersLayer<Tools extends Record<string, Tool.Any>, EX = never, RX = never> {
  readonly #layer: Layer.Layer<Tool.HandlersFor<Tools>, EX, RX>;
  private constructor(
    token: typeof builtHere,
    layer: Layer.Layer<Tool.HandlersFor<Tools>, EX, RX>,
  ) {
    refuseOutsideConstruction(token);
    this.#layer = layer;
  }
  static {
    handlersLayer = (layer) => new HandlersLayer(builtHere, layer);
  }
  static layer<Tools extends Record<string, Tool.Any>, EX, RX>(
    handlers: HandlersLayer<Tools, EX, RX>,
  ) {
    return handlers.#layer;
  }
}

type Declarations<Handlers> = {
  readonly [Name in keyof Handlers]: Declaration<Handlers[Name]> & NotCallable;
};

type NotCallable = { readonly call?: never } & { readonly apply?: never };

export type Handlers<Tools extends Record<string, Tool.Any>> = Declarations<
  Toolkit.HandlersFrom<Tools>
>;

const checkedHandlers = <Handlers>(declarations: Declarations<Handlers>): Handlers =>
  Struct.map(declarations, checkedHandler);

/**
 * A tool runs in a linked environment when its parameters take this target
 * as `environmentId`. Other tools may name an environment for their own
 * reasons, such as the one to link or to move a thread to.
 */
const takesLinkedEnvironment = (tool: Tool.Any) => {
  const parameters: unknown = tool.parametersSchema;
  return (
    Predicate.hasProperty(parameters, "fields") &&
    Predicate.hasProperty(parameters.fields, "environmentId") &&
    parameters.fields.environmentId === OrchestratorMcpEnvironmentTarget
  );
};

const linksUnavailable = new OrchestratorMcpFailure({
  code: "orchestration_error",
  message: "This environment cannot reach linked environments.",
});

/**
 * Every tool that takes a linked environment runs there the same way: its
 * declaration checks the caller here, and the same call goes to the other
 * environment, which checks the rest. The handler here never sees
 * `environmentId`, so it cannot leak into what it writes.
 */
const routed = Effect.fn("McpToolAccess.routed")(function* <Tools extends Record<string, Tool.Any>>(
  toolkit: Toolkit.Toolkit<Tools>,
  declarations: Handlers<Tools>,
  checked: Toolkit.HandlersFrom<Tools>,
) {
  // Optional so toolkits that never leave this environment build without it.
  const forwarding = yield* Effect.serviceOption(PeerForwarding.PeerForwarding);
  const handlers: Record<string, unknown> = { ...checked };
  for (const [name, declaration] of Object.entries<Declaration<unknown>>(declarations)) {
    const tool = toolkit.tools[name];
    if (tool === undefined || !takesLinkedEnvironment(tool)) continue;
    const remote = remoteCheckOf(declaration);
    if (remote === undefined)
      return yield* Effect.die(
        `${name} takes a linked environment, but it acts as its calling thread, which is here.`,
      );
    const here = handlers[name] as (
      params: object,
    ) => Effect.Effect<unknown, Tool.Failure<Tools[keyof Tools]>>;
    handlers[name] = ({ environmentId, ...params }: { readonly environmentId?: EnvironmentId }) =>
      Effect.gen(function* () {
        const scope = yield* McpInvocationContext.McpInvocationContext;
        const target = PeerForwarding.remoteTarget(scope, environmentId);
        if (target === undefined) return yield* here(params);
        if (scope.linkedEnvironments === false) return yield* PeerForwarding.linkedEnvironmentsOff;
        yield* (remote as RemoteCheck<typeof params>)(params);
        if (Option.isNone(forwarding)) return yield* linksUnavailable;
        return yield* forwarding.value.call(scope, tool, target, { ...params, environmentId });
      });
  }
  return handlers as Toolkit.HandlersFrom<Tools>;
});

export const toLayer = <Tools extends Record<string, Tool.Any>, EX = never, RX = never>(
  toolkit: Toolkit.Toolkit<Tools>,
  build: Handlers<Tools> | Effect.Effect<Handlers<Tools>, EX, RX>,
): HandlersLayer<Tools, EX, Exclude<RX, Scope.Scope>> => {
  // Checked as soon as they are given, so a forged declaration fails here.
  const withDeclarations = (declarations: Handlers<Tools>) =>
    routed(toolkit, declarations, checkedHandlers(declarations));
  return handlersLayer(
    toolkit.toLayer(
      Effect.isEffect(build) ? Effect.flatMap(build, withDeclarations) : withDeclarations(build),
    ),
  );
};

/** One tool with two access rules, picked per call, such as create versus update. */
export const either = <P, A, E, R, A2, E2, R2>(
  useFirst: (params: P) => boolean,
  first: Declaration<(params: P) => Effect.Effect<A, E, R>>,
  second: Declaration<(params: P) => Effect.Effect<A2, E2, R2>>,
) => {
  const remotes = [remoteCheckOf(first), remoteCheckOf(second)] as ReadonlyArray<
    RemoteCheck<P> | undefined
  >;
  return declare(
    (params: P): Effect.Effect<A | A2, E | E2, R | R2> =>
      useFirst(params) ? checkedHandler(first)(params) : checkedHandler(second)(params),
    (params) =>
      remotes[useFirst(params) ? 0 : 1]?.(params) ??
      Effect.fail(
        new OrchestratorMcpFailure({
          code: "invalid_request",
          message: "This action acts as the calling thread, which is here. Omit environmentId.",
        }),
      ),
  );
};
