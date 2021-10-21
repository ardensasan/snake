import Konva from "konva";

export const addSegment = (
  segmentList: Array<any>,
  segment: any,
  layer: Konva.Layer
) => {
  segmentList.push(segment);
  layer.add(segment.rect); //add segment to layer
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
