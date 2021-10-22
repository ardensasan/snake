import Konva from "konva";

export const makeFood = () => {
  let x = Math.floor(Math.random() * (window.innerWidth - 50));
  let y = Math.floor(Math.random() * (window.innerHeight - 50));
  let rect = new Konva.Rect({
    x,
    y,
    width: 50,
    height: 50,
    fill: "#DC143C",
    stroke: "black",
    strokeWidth: 0.5,
  });
  return rect;
};

export const repositionFood = (foodRect:any) =>{
    let x = Math.floor(Math.random() * (window.innerWidth - 50));
    let y = Math.floor(Math.random() * (window.innerHeight - 50));
    foodRect.x(x)
    foodRect.y(y)
}