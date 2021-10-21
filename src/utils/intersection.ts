export const checkHeadSegmentIntersection = (
  segmentList: Array<any>,
  head: any
) => {
  const intersection = segmentList.find((segment) => doesHeadIntersectWithSegment(head,segment));
  return !!intersection
};

function doesHeadIntersectWithSegment(head: any, segment: any) {
  return (
    head.attrs.x > segment.rect.attrs.x &&
    head.attrs.x < segment.rect.attrs.x + 50 &&
    head.attrs.y > segment.rect.attrs.y &&
    head.attrs.y < segment.rect.attrs.y + 50
  );
}
