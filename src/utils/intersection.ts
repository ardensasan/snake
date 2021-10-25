export const checkHeadSegmentIntersection = (
  segmentList: Array<any>,
  head: any
) => {
  const intersection = segmentList.find(({ rect }) =>
    doesHeadIntersectWithSegment(head, rect)
  );
  return !!intersection;
};

const doesHeadIntersectWithSegment = (head: any, segmentRect: any) => {
  return false;
};

export const checkHeadFoodIntersection = (headRect: any, foodRect: any) => {
  return (
    headRect.attrs.x < foodRect.attrs.x + 50 &&
    headRect.attrs.x + 50 > foodRect.attrs.x &&
    headRect.attrs.y < foodRect.attrs.y + 50 &&
    50 + headRect.attrs.y > foodRect.attrs.y
  );
};
