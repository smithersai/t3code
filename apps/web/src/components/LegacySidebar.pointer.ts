import { PointerSensor, type PointerSensorProps } from "@dnd-kit/core";

type ProjectPointerSensorClass = {
  /** @throws {never} */
  new (props: PointerSensorProps): PointerSensor;
  activators: typeof PointerSensor.activators;
};

/** dnd-kit's PointerSensor. Its constructor stores props and attaches listeners. */
export const ProjectPointerSensor: ProjectPointerSensorClass = PointerSensor;
