import Konva from "konva";
import { useEffect, useRef } from "react";
import { Layer } from "react-konva";

const S = () => {
  const rectRef: any = useRef();
  const direction = useRef([1, 0]);
  let segment = new Konva.Rect({
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    fill: "#00D2FF",
    stroke: "black",
    strokeWidth: 0.5,
  });

  const segments = useRef([{ segment, direction: [1, 0] }]);
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
    x: 75,
    y: 25,
    offset: {
      x: 25,
      y: 25,
    },
  });

  useEffect(() => {
    rectRef.current.add(head);
    rectRef.current.add(segments.current[0].segment);
    var anim = new Konva.Animation(function (frame: any) {
      head.x(head.attrs.x + direction.current[0]);
      head.y(head.attrs.y - direction.current[1]);
      segments.current.forEach(element => {
          
      });
    }, rectRef);
    anim.start();
  });

  window.addEventListener("keypress", ({ code }) => {
    if (code === "KeyW") {
      if (
        (direction.current[0] === 1 && direction.current[1] === 0) ||
        (direction.current[0] === -1 && direction.current[1] === 0)
      ) {
        head.y(head.attrs.y-50)
        head.rotate(direction.current[0] * -90);
        direction.current = [0, 1];
      }
    } else if (code === "KeyS") {
      if (
        (direction.current[0] === 1 && direction.current[1] === 0) ||
        (direction.current[0] === -1 && direction.current[1] === 0)
      ) {
        head.y(head.attrs.y+50)
        head.rotate(direction.current[0] * 90);
        direction.current = [0, -1];
      }
    } else if (code === "KeyA") {
      if (
        (direction.current[0] === 0 && direction.current[1] === 1) ||
        (direction.current[0] === 0 && direction.current[1] === -1)
      ) {
        head.x(head.attrs.x-50)
        head.rotate(direction.current[1] * -90);
        direction.current = [-1, 0];
      }
    } else if (code === "KeyD") {
      if (
        (direction.current[0] === 0 && direction.current[1] === 1) ||
        (direction.current[0] === 0 && direction.current[1] === -1)
      ) {
        head.x(head.attrs.x+50)
        head.rotate(direction.current[1] * 90);
        direction.current = [1, 0];
      }
    }
  });

  return <Layer ref={rectRef}></Layer>;
};

export default S;
