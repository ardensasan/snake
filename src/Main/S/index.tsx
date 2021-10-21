import Konva from "konva";
import { useEffect, useRef } from "react";
import { Layer } from "react-konva";
import { clearRotation } from "../../utils/rotations";

const S = () => {
  const rectRef: any = useRef();
  const directionRef = useRef([1, 0]);
  const rotateRef = useRef<Array<any>>([]);
  let rect = new Konva.Rect({
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    fill: "#00D2FF",
    stroke: "black",
    strokeWidth: 0.5,
  });

  let rect2 = new Konva.Rect({
    x: 50,
    y: 0,
    width: 50,
    height: 50,
    fill: "#00D2FF",
    stroke: "black",
    strokeWidth: 0.5,
  });
  const segmentList = useRef([
    { rect, direction: [1, 0] },
    { rect: rect2, direction: [1, 0] },
  ]);
  var head = new Konva.Shape({
    sceneFunc: function (context, shape) {
      context.beginPath();
      context.moveTo(50, 25);
      context.lineTo(25, 50);
      context.lineTo(0, 50);
      context.lineTo(0, 0);
      context.lineTo(25, 0);
      context.closePath();
      context.fillStrokeShape(shape);
    },
    fill: "#00D2FF",
    stroke: "black",
    strokeWidth: 0.5,
    x: 125,
    y: 25,
    offset: {
      x: 25,
      y: 25,
    },
  });

  useEffect(() => {
    rectRef.current.add(head);
    rectRef.current.add(segmentList.current[0].rect);
    rectRef.current.add(segmentList.current[1].rect);
    var anim = new Konva.Animation((frame: any) => {
      head.x(head.attrs.x + directionRef.current[0]);
      head.y(head.attrs.y - directionRef.current[1]);
      segmentList.current.forEach((segment, index: number) => {
        rotateRef.current.forEach((element) => {
          if (
            segment.rect.attrs.x === element.position[0] &&
            segment.rect.attrs.y === element.position[1]
          ) {
            element.segmentsPassed = element.segmentsPassed + 1;
            segment.direction = element.direction;
          }
        });
        segment.rect.x(segment.rect.attrs.x + segment.direction[0]);
        segment.rect.y(segment.rect.attrs.y - segment.direction[1]);
      });
      clearRotation(rotateRef.current, segmentList.current.length - 1);
    }, rectRef);
    anim.start();
  });

  window.addEventListener("keypress", ({ code }) => {
    if (code === "KeyW") {
      if (
        (directionRef.current[0] === 1 && directionRef.current[1] === 0) ||
        (directionRef.current[0] === -1 && directionRef.current[1] === 0)
      ) {
        rotateRef.current.push({
          position: [head.attrs.x - 25, head.attrs.y - 25],
          direction: [0, 1],
          segmentsPassed: 0,
        });
        head.rotate(directionRef.current[0] * -90);
        directionRef.current = [0, 1];
      }
    } else if (code === "KeyS") {
      if (
        (directionRef.current[0] === 1 && directionRef.current[1] === 0) ||
        (directionRef.current[0] === -1 && directionRef.current[1] === 0)
      ) {
        rotateRef.current.push({
          position: [head.attrs.x - 25, head.attrs.y - 25],
          direction: [0, -1],
          segmentsPassed: 0,
        });
        head.rotate(directionRef.current[0] * 90);
        directionRef.current = [0, -1];
      }
    } else if (code === "KeyA") {
      if (
        (directionRef.current[0] === 0 && directionRef.current[1] === 1) ||
        (directionRef.current[0] === 0 && directionRef.current[1] === -1)
      ) {
        rotateRef.current.push({
          position: [head.attrs.x - 25, head.attrs.y - 25],
          direction: [-1, 0],
          segmentsPassed: 0,
        });
        head.rotate(directionRef.current[1] * -90);
        directionRef.current = [-1, 0];
      }
    } else if (code === "KeyD") {
      if (
        (directionRef.current[0] === 0 && directionRef.current[1] === 1) ||
        (directionRef.current[0] === 0 && directionRef.current[1] === -1)
      ) {
        rotateRef.current.push({
          position: [head.attrs.x - 25, head.attrs.y - 25],
          direction: [1, 0],
          segmentsPassed: 0,
        });
        head.rotate(directionRef.current[1] * 90);
        directionRef.current = [1, 0];
      }
    }
  });

  return <Layer ref={rectRef} />;
};

export default S;
