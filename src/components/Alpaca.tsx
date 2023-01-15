const IMG_SIZE = 360

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
  return <div style={{ position: 'relative' }}>
    <img height={IMG_SIZE} width={IMG_SIZE} src={backgroundImgLink} style={{ position: 'absolute' }} ></img>
    <img height={IMG_SIZE} width={IMG_SIZE} src={earImgLink} style={{ position: 'absolute' }} ></img>
    <img height={IMG_SIZE} width={IMG_SIZE} src={hairImgLink} style={{ position: 'absolute' }} ></img>
    <img height={IMG_SIZE} width={IMG_SIZE} src={legImgLink} style={{ position: 'absolute' }} ></img>
    <img height={IMG_SIZE} width={IMG_SIZE} src={neckImgLink} style={{ position: 'absolute' }} ></img>
    <img height={IMG_SIZE} width={IMG_SIZE} src={noseImgLink} style={{ position: 'absolute' }} ></img>
    <img height={IMG_SIZE} width={IMG_SIZE} src={accessorieImgLink} style={{ position: 'absolute' }} ></img>
    <img height={IMG_SIZE} width={IMG_SIZE} src={eyeImgLink} style={{ position: 'absolute' }} ></img>
    <img height={IMG_SIZE} width={IMG_SIZE} src={mouthImgLink} style={{ position: 'absolute' }} ></img>
  </div>
}