export const isArrayEqual = (array1: Array<number>, array2: Array<number>) => {
  return (
    Array.isArray(array1) &&
    Array.isArray(array2) &&
    array1.length === array2.length &&
    array1.every((val, index) => val === array2[index])
  );
};

export const addItemToRotationList = (
  head: any,
  rotateList: Array<any>,
  direction: Array<number>
) => {
  head.direction = direction;
  rotateList.push({
    position: [head.rect.attrs.x, head.rect.attrs.y],
    direction: direction,
    segmentsPassed: 0,
  });
};
