export const addSnakeKeyPressListener = (headRef: any, rotateRef: any) => {
  window.addEventListener("keypress", ({ code }) => {
    const { current: head } = headRef;
    const { current: rotateList } = rotateRef;
    if (code === "KeyW") {
      if (
        (head.direction[0] === 1 && head.direction[1] === 0) ||
        (head.direction[0] === -1 && head.direction[1] === 0)
      ) {
        rotateList.push({
          position: [head.rect.attrs.x - 25, head.rect.attrs.y - 25],
          direction: [0, 1],
          segmentsPassed: 0,
        });
        head.rect.rotate(head.direction[0] * -90);
        head.direction = [0, 1];
      }
    } else if (code === "KeyS") {
      if (
        (head.direction[0] === 1 && head.direction[1] === 0) ||
        (head.direction[0] === -1 && head.direction[1] === 0)
      ) {
        rotateList.push({
          position: [head.rect.attrs.x - 25, head.rect.attrs.y - 25],
          direction: [0, -1],
          segmentsPassed: 0,
        });
        head.rect.rotate(head.direction[0] * 90);
        head.direction = [0, -1];
      }
    } else if (code === "KeyA") {
      if (
        (head.direction[0] === 0 && head.direction[1] === 1) ||
        (head.direction[0] === 0 && head.direction[1] === -1)
      ) {
        rotateList.push({
          position: [head.rect.attrs.x - 25, head.rect.attrs.y - 25],
          direction: [-1, 0],
          segmentsPassed: 0,
        });
        head.rect.rotate(head.direction[1] * -90);
        head.direction = [-1, 0];
      }
    } else if (code === "KeyD") {
      if (
        (head.direction[0] === 0 && head.direction[1] === 1) ||
        (head.direction[0] === 0 && head.direction[1] === -1)
      ) {
        rotateList.push({
          position: [head.rect.attrs.x - 25, head.rect.attrs.y - 25],
          direction: [1, 0],
          segmentsPassed: 0,
        });
        head.rect.rotate(head.direction[1] * 90);
        head.direction = [1, 0];
      }
    }
  });
};

export const removeSnakeKeyPressListener = (headRef: any, rotateRef: any) => {
  window.removeEventListener("keypress", ({ code }) => {
    const { current: head } = headRef;
    const { current: rotateList } = rotateRef;
    if (code === "KeyW") {
      if (
        (head.direction[0] === 1 && head.direction[1] === 0) ||
        (head.direction[0] === -1 && head.direction[1] === 0)
      ) {
        rotateList.push({
          position: [head.rect.attrs.x - 25, head.rect.attrs.y - 25],
          direction: [0, 1],
          segmentsPassed: 0,
        });
        head.rect.rotate(head.direction[0] * -90);
        head.direction = [0, 1];
      }
    } else if (code === "KeyS") {
      if (
        (head.direction[0] === 1 && head.direction[1] === 0) ||
        (head.direction[0] === -1 && head.direction[1] === 0)
      ) {
        rotateList.push({
          position: [head.rect.attrs.x - 25, head.rect.attrs.y - 25],
          direction: [0, -1],
          segmentsPassed: 0,
        });
        head.rect.rotate(head.direction[0] * 90);
        head.direction = [0, -1];
      }
    } else if (code === "KeyA") {
      if (
        (head.direction[0] === 0 && head.direction[1] === 1) ||
        (head.direction[0] === 0 && head.direction[1] === -1)
      ) {
        rotateList.push({
          position: [head.rect.attrs.x - 25, head.rect.attrs.y - 25],
          direction: [-1, 0],
          segmentsPassed: 0,
        });
        head.rect.rotate(head.direction[1] * -90);
        head.direction = [-1, 0];
      }
    } else if (code === "KeyD") {
      if (
        (head.direction[0] === 0 && head.direction[1] === 1) ||
        (head.direction[0] === 0 && head.direction[1] === -1)
      ) {
        rotateList.push({
          position: [head.rect.attrs.x - 25, head.rect.attrs.y - 25],
          direction: [1, 0],
          segmentsPassed: 0,
        });
        head.rect.rotate(head.direction[1] * 90);
        head.direction = [1, 0];
      }
    }
  });
};
