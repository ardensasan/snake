export const clearRotation = (rotationList: any, segments: number) => {
  rotationList = rotationList.filter(
    ({ segmentsPassed }: any) => segmentsPassed < segments
  );
};
