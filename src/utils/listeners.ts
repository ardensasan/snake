import { Direction } from "../common/snake";
import { addItemToRotationList, isArrayEqual } from "./array";

export const addSnakeKeyPressListener = (headRef: any, rotateRef: any) => {
  window.addEventListener("keypress", ({ code }) => {
    const { current: head } = headRef;
    const { current: rotateList } = rotateRef;
    if (
      isArrayEqual(head.direction, Direction.Left) ||
      isArrayEqual(head.direction, Direction.Right)
    ) {
      if (code === "KeyS") {
        addItemToRotationList(head, rotateList, Direction.Down);
      } else if (code === "KeyW") {
        addItemToRotationList(head, rotateList, Direction.Up);
      }
    } else if (
      isArrayEqual(head.direction, Direction.Up) ||
      isArrayEqual(head.direction, Direction.Down)
    ) {
      if (code === "KeyA") {
        addItemToRotationList(head, rotateList, Direction.Left);
      } else if (code === "KeyD") {
        addItemToRotationList(head, rotateList, Direction.Right);
      }
    }
  });
};

export const removeSnakeKeyPressListener = (headRef: any, rotateRef: any) => {
  window.addEventListener("keypress", ({ code }) => {
    const { current: head } = headRef;
    const { current: rotateList } = rotateRef;
    if (
      isArrayEqual(head.direction, Direction.Left) ||
      isArrayEqual(head.direction, Direction.Right)
    ) {
      if (code === "KeyS") {
        addItemToRotationList(head, rotateList, Direction.Down);
      } else if (code === "KeyW") {
        addItemToRotationList(head, rotateList, Direction.Up);
      }
    } else if (
      isArrayEqual(head.direction, Direction.Up) ||
      isArrayEqual(head.direction, Direction.Down)
    ) {
      if (code === "KeyA") {
        addItemToRotationList(head, rotateList, Direction.Left);
      } else if (code === "KeyD") {
        addItemToRotationList(head, rotateList, Direction.Right);
      }
    }
  });
};
