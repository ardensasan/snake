import Konva from "konva";

export const addSegment = (segmentList: Array<any>, segment: any,layer:Konva.Layer) => {
  segmentList.push(segment);
  layer.add(segment.rect) //add segment to layer
};
