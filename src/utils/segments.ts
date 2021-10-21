import Konva from "konva";

export const addSegment = (
  segmentList: Array<any>,
  layer: Konva.Layer
) => {
  if(!segmentList.length){
    let rect = new Konva.Rect({
      x: 50,
      y: 0,
      width: 50,
      height: 50,
      fill: "#00D2FF",
      stroke: "black",
      strokeWidth: 0.5,
    });
    const segment = {rect,direction:[1,0]}
    segmentList.push(segment);
    layer.add(segment.rect);
    return;
  }
  const {rect:lastRect,direction} = segmentList[segmentList.length-1];
  let rect = new Konva.Rect({
    x: lastRect.attrs.x-(direction[0]*lastRect.attrs.width),
    y: lastRect.attrs.y+(direction[1]*lastRect.attrs.height),
    width: 50,
    height: 50,
    fill: "#00D2FF",
    stroke: "black",
    strokeWidth: 0.5,
  });
  const segment = {rect,direction}
  segmentList.push(segment);
  layer.add(segment.rect); //add segment to 
};

//update segments when head changes direction
export const updateSegment = (
  segmentList: Array<any>,
  head: any,
  direction: any
) => {
  segmentList.forEach((segment: any, index: number) => {
    if (index === 0) {
      segment.rect.x(head.attrs.x-25);
      segment.rect.y(head.attrs.y-25);
      segment.direction = direction;
    }else{
      segment.rect.x(segmentList[index-(segmentList.length-1)].rect.attrs.x);
      segment.rect.y(segmentList[index-(segmentList.length-1)].rect.attrs.y);
      segment.direction = direction;
    }
  });
};
