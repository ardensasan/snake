import Konva from "konva";
import { checkHeadSegmentIntersection } from "./intersection";
import { updateRotationList, updateSegment, updateSegmentRotationDirection } from "./segments";
export const makeHead = () => {
  var rect = new Konva.Shape({
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

  const direction = [1, 0];

  return {rect,direction}
};


export const animateSnake = ({head,layer,segmentList,rotateList}:any) =>{
  var anim = new Konva.Animation((frame: any) => {
    head.rect.x(head.rect.attrs.x + head.direction[0]);
    head.rect.y(head.rect.attrs.y - head.direction[1]);
    segmentList.forEach((segment:any) => {
      rotateList.forEach((rotation:any) => {
        updateSegmentRotationDirection(segment,rotation)
      });
      updateSegment(segment)
      if (checkHeadSegmentIntersection(segmentList, head.rect)) anim.stop();
    });
    updateRotationList(rotateList, segmentList.length - 1);
  }, layer);
  anim.start();
}