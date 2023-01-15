import { useEffect, useRef } from "react"

const IMG_SIZE = 720

type AlpacaProps = {
  accessorieImgLink: string
  backgroundImgLink: string
  earImgLink: string
  eyeImgLink: string
  hairImgLink: string
  legImgLink: string
  mouthImgLink: string
  neckImgLink: string
  noseImgLink: string
}
export const Alpaca = ({ accessorieImgLink, backgroundImgLink, earImgLink, eyeImgLink, hairImgLink, legImgLink, mouthImgLink, neckImgLink, noseImgLink }: AlpacaProps) => {
  const allImageUrls = [backgroundImgLink, earImgLink, hairImgLink, legImgLink, neckImgLink, noseImgLink, accessorieImgLink, eyeImgLink, mouthImgLink];
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d');

    if (context) {
      context.clearRect(0, 0, IMG_SIZE, IMG_SIZE)
      allImageUrls?.forEach(url => {
        const imgObj = new Image();
        imgObj.src = url;
        imgObj.onload = () => context?.drawImage(imgObj, 0, 0);
      });
    };
  }, [accessorieImgLink, backgroundImgLink, earImgLink, eyeImgLink, hairImgLink, legImgLink, mouthImgLink, neckImgLink, noseImgLink, allImageUrls]);

  return <canvas ref={canvasRef} height={IMG_SIZE} width={IMG_SIZE} />
}