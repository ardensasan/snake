import Konva from "konva";
import { useEffect, useRef } from "react";
import { Layer } from "react-konva";
import { clearRotation } from "../../utils/rotations";
import { addSegment } from "../../utils/segments";

const S = () => {
  const rectRef: any = useRef();
  const directionRef = useRef([1, 0]);
  const rotateRef = useRef<Array<any>>([]);
  const segmentList = useRef<Array<any>>([]);
  var head = new Konva.Shape({
    sceneFunc: (context, shape) => {
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
    strokeWidth: 1,
    x: 125,
    y: 25,
    offset: {
      x: 25,
      y: 25,
    },
  });

  useEffect(() => {
    rectRef.current.add(head);
    addSegment(segmentList.current,rectRef.current)
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
    } else if (code === "KeyP") {
      addSegment(segmentList.current, rectRef.current);
    }
  });

  return <Layer ref={rectRef} />
};

export default S;
