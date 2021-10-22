import Konva from "konva";
import { useEffect, useRef } from "react";
import { Layer } from "react-konva";
import { createFood } from "../../utils/food";
import { addSnakeKeyPressListener, removeSnakeKeyPressListener } from "../../utils/listeners";
import { addSegment } from "../../utils/segments";
import { animateSnake, makeHead } from "../../utils/snake";

const S = () => {
  const head = makeHead();
  const headRef = useRef<any>(head);
  const layerRef = useRef<Konva.Layer>(null);
  const rotateRef = useRef<Array<any>>([]); //list of points where segments rotate
  const segmentRef = useRef<Array<any>>([]);

  useEffect(() => {
    const { current: head } = headRef;
    const { current: layer } = layerRef;
    const { current: segmentList } = segmentRef;
    const { current: rotateList } = rotateRef;
    layer?.add(head.rect);
    addSegment(segmentList,layer)
    animateSnake({head,layer,segmentList,rotateList});
    createFood(layer)

    return removeSnakeKeyPressListener(headRef,rotateRef)
  });

  addSnakeKeyPressListener(headRef,rotateRef);

  return <Layer ref={layerRef} />;
};

export default S;
