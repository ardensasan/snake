export const checkHeadSegmentIntersection = (
  segmentList: Array<any>,
  head: any
) => {
  const intersection = segmentList.find((segment) => doesHeadIntersectWithSegment(head,segment));
  return !!intersection
};

const doesHeadIntersectWithSegment = (head: any, segment: any) => {
  return (
    head.attrs.x > segment.rect.attrs.x &&
    head.attrs.x < segment.rect.attrs.x + 50 &&
    head.attrs.y > segment.rect.attrs.y &&
    head.attrs.y < segment.rect.attrs.y + 50
  );
}

export const checkHeadFoodIntersection = (headRect:any,foodRect:any) =>{
  return (
    headRect.attrs.x > foodRect.attrs.x &&
    headRect.attrs.x < foodRect.attrs.x + 50 &&
    headRect.attrs.y > foodRect.attrs.y &&
    headRect.attrs.y < foodRect.attrs.y + 50
  )
}
