import Konva from "konva";

export const createFood = (
  layer: Konva.Layer | null
) => {
  if (!layer) return;
  let x = Math.floor(Math.random() * (window.innerWidth - 50));
  let y = Math.floor(Math.random() * (window.innerHeight - 50));
  let rect = new Konva.Rect({
    x: x,
    y: y,
    width: 50,
    height: 50,
    fill: "#DC143C",
    stroke: "black",
    strokeWidth: 0.5,
  });
  layer.add(rect);
};
