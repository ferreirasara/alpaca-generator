import { useEffect, useMemo, useRef } from "react"
import { SelectedProperties } from "../App"
import { ACCESSORIE_LINKS, BACKGROUND_LINKS, EAR_LINKS, EYE_LINKS, HAIR_LINKS, LEG_LINKS, MOUTH_LINKS, NECK_LINKS, NOSE_LINKS } from "../utils/assetsLinks"

const IMG_SIZE = 720

type AlpacaProps = {
  selectedProperties: SelectedProperties
}
export const Alpaca = ({ selectedProperties }: AlpacaProps) => {
  const allImageUrls = useMemo(() => [
    BACKGROUND_LINKS?.[selectedProperties.background],
    EAR_LINKS?.[selectedProperties.ear],
    HAIR_LINKS?.[selectedProperties.hair],
    LEG_LINKS?.[selectedProperties.leg],
    NECK_LINKS?.[selectedProperties.neck],
    ACCESSORIE_LINKS?.[selectedProperties.accessorie],
    NOSE_LINKS?.[selectedProperties.nose],
    EYE_LINKS?.[selectedProperties.eye],
    MOUTH_LINKS?.[selectedProperties.mouth],
  ], [selectedProperties]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d');

    if (context) {
      context.clearRect(0, 0, IMG_SIZE, IMG_SIZE)
      allImageUrls?.forEach(url => {
        const imgObj = new Image();
        imgObj.src = url;
        imgObj.crossOrigin = "anonymous"
        imgObj.onload = () => context?.drawImage(imgObj, 0, 0);
      });
    };
  }, [allImageUrls]);

  return <canvas id="canvas" ref={canvasRef} height={IMG_SIZE} width={IMG_SIZE} />
}