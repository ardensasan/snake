import Konva from "konva";

export const addSegment = (
  segmentList: Array<any>,
  layer: Konva.Layer | null
) => {
  if (!layer) return;
  if (!segmentList.length) {
    let rect = new Konva.Rect({
      x: 50,
      y: 0,
      width: 50,
      height: 50,
      fill: "#00D2FF",
      stroke: "black",
      strokeWidth: 0.5,
    });
    const segment = { rect, direction: [1, 0] };
    segmentList.push(segment);
    layer.add(segment.rect);
    return;
  }
  const { rect: lastRect, direction } = segmentList[segmentList.length - 1];
  let rect = new Konva.Rect({
    x: lastRect.attrs.x - direction[0] * lastRect.attrs.width,
    y: lastRect.attrs.y + direction[1] * lastRect.attrs.height,
    width: 50,
    height: 50,
    fill: "#00D2FF",
    stroke: "black",
    strokeWidth: 0.5,
  });
  const segment = { rect, direction };
  segmentList.push(segment);
  layer.add(segment.rect); //add segment to
};

//update position of segment
export const updateSegment = (segment:any)=>{
  segment.rect.x(segment.rect.attrs.x + segment.direction[0]*2);
  segment.rect.y(segment.rect.attrs.y + segment.direction[1]*2);
};

export const updateSegmentRotationDirection = (segment:any,rotation:any) =>{ 
  if (
    segment.rect.attrs.x === rotation.position[0] &&
    segment.rect.attrs.y === rotation.position[1]
  ) {
    rotation.segmentsPassed = rotation.segmentsPassed + 1;
    segment.direction = rotation.direction;
  }
}

export const updateRotationList = (rotationList: any, segments: number) => { //remove from rotation list when all segments passed the point
  rotationList = rotationList.filter(
    ({ segmentsPassed }: any) => segmentsPassed < segments
  );
};
