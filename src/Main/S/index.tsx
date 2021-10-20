import Konva from "konva";
import { useEffect, useRef } from "react";
import { Layer, Rect } from "react-konva";

const S = () => {
  const rectRef: any = useRef();
  const direction = useRef([1, 0]);
  var head = new Konva.Shape({
    sceneFunc: function (context, shape) {
      context.beginPath();
      context.moveTo(50, 25);
      context.lineTo(25, 50);
      context.lineTo(25, 0);
      context.closePath();
      context.fillStrokeShape(shape);
    },
    fill: "#00D2FF",
    stroke: "black",
    strokeWidth: 0.5,
    x: 0,
    y: 75,
    offset: {
      x: 25,
      y: 25,
    },
  });

  useEffect(() => {
    rectRef.current.add(head);
    var anim = new Konva.Animation(function (frame: any) {
      head.x(head.attrs.x + direction.current[0]);
      head.y(head.attrs.y - direction.current[1]);
    }, rectRef);
    anim.start();
  });

  window.addEventListener("keypress", ({ code }) => {
    if (code === "KeyW") {
      if (
        (direction.current[0] === 1 && direction.current[1] === 0) || // right
        (direction.current[0] === -1 && direction.current[1] === 0) //left
      ) {
        head.rotate(direction.current[0] * -90);
        direction.current = [0, 1];
      }
    } else if (code === "KeyS") {
      if (
        (direction.current[0] === 1 && direction.current[1] === 0) ||
        (direction.current[0] === -1 && direction.current[1] === 0)
      ) {
        head.rotate(direction.current[0] * 90);
        direction.current = [0, -1];
      }
    } else if (code === "KeyA") {
      if (
        (direction.current[0] === 0 && direction.current[1] === 1) ||
        (direction.current[0] === 0 && direction.current[1] === -1)
      ) {
        head.rotate(direction.current[1] * -90);
        direction.current = [-1, 0];
      }
    } else if (code === "KeyD") {
      if (
        (direction.current[0] === 0 && direction.current[1] === 1) ||
        (direction.current[0] === 0 && direction.current[1] === -1)
      ) {
        head.rotate(direction.current[1] * 90);
        direction.current = [1, 0];
      }
    }
  });

  return (
    <Layer ref={rectRef}>
      <Rect width={50} height={50} fill="red" />
    </Layer>
  );
};

export default S;
