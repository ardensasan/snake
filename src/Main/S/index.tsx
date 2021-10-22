import Konva from "konva";
import { useEffect, useRef } from "react";
import { Layer } from "react-konva";
import { makeFood } from "../../utils/food";
import { addSnakeKeyPressListener, removeSnakeKeyPressListener } from "../../utils/listeners";
import { addSegment } from "../../utils/segments";
import { animateSnake, makeHead } from "../../utils/snake";

const S = () => {
  const head = makeHead();
  const food = makeFood();
  const headRef = useRef<any>(head);
  const foodRef = useRef<Konva.Rect>(food);
  const layerRef = useRef<Konva.Layer>(null);
  const rotateRef = useRef<Array<any>>([]); //list of points where segments rotate
  const segmentRef = useRef<Array<any>>([]);


  useEffect(() => {
    const { current: head } = headRef;
    const { current: foodRect } = foodRef;
    const { current: layer } = layerRef;
    const { current: segmentList } = segmentRef;
    const { current: rotateList } = rotateRef;
    layer?.add(head.rect);
    layer?.add(foodRect)
    addSegment(segmentList,layer)
    animateSnake({foodRect,head,layer,segmentList,rotateList});
    return removeSnakeKeyPressListener(headRef,rotateRef)
  });

  addSnakeKeyPressListener(headRef,rotateRef);

  return <Layer ref={layerRef} />;
};

export default S;
