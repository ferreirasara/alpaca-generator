import { useState } from "react";
import { AccessorieSelect } from "./components/AccessorieSelect";
import { Alpaca } from "./components/Alpaca";
import { BackgroundSelect } from "./components/BackgroundSelect";
import { EarSelect } from "./components/EarSelect";
import { EyeSelect } from "./components/EyeSelect";
import { HairSelect } from "./components/HairSelect";
import { Layout } from "./components/Layout";
import { LegSelect } from "./components/LegSelect";
import { MouthSelect } from "./components/MouthSelect";
import { NeckSelect } from "./components/NeckSelect";
import { NoseSelect } from "./components/NoseSelect";
import { ACCESSORIE_NAMES, BACKGROUND_NAMES, EAR_NAMES, EYE_NAMES, HAIR_NAMES, LEG_NAMES, MOUTH_NAMES, NECK_NAMES, NOSE_NAMES } from "./utils/assetsNames";
import { getRandomElement } from "./utils/utils";
import './app.css';

export type SelectedProperties = {
  accessorie: string
  background: string
  ear: string
  eye: string
  hair: string
  leg: string
  mouth: string
  neck: string
  nose: string
}

export const App = () => {
  const [selectedProperties, setSelectedProperties] = useState<SelectedProperties>({
    accessorie: getRandomElement(ACCESSORIE_NAMES),
    background: getRandomElement(BACKGROUND_NAMES),
    ear: getRandomElement(EAR_NAMES),
    eye: getRandomElement(EYE_NAMES),
    hair: getRandomElement(HAIR_NAMES),
    leg: getRandomElement(LEG_NAMES),
    mouth: getRandomElement(MOUTH_NAMES),
    neck: getRandomElement(NECK_NAMES),
    nose: getRandomElement(NOSE_NAMES),
  });

  const randomAlpaca = async () => {
    const randomProperties = {
      accessorie: getRandomElement(ACCESSORIE_NAMES),
      background: getRandomElement(BACKGROUND_NAMES),
      ear: getRandomElement(EAR_NAMES),
      eye: getRandomElement(EYE_NAMES),
      hair: getRandomElement(HAIR_NAMES),
      leg: getRandomElement(LEG_NAMES),
      mouth: getRandomElement(MOUTH_NAMES),
      neck: getRandomElement(NECK_NAMES),
      nose: getRandomElement(NOSE_NAMES),
    }
    setSelectedProperties({ ...randomProperties })
  }

  const downloadAlpaca = () => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const image = canvas?.toDataURL("image/png");
    const link = document.createElement('a');
    link.download = "cool-alpaca.png";
    link.href = image;
    link.click();
  }

  return (
    <Layout>
      <h1>ALPACA GENERATOR</h1>
      <div className="content">
        <form>
          <AccessorieSelect
            selectedAccessorie={selectedProperties.accessorie}
            onSelect={(value) => setSelectedProperties({ ...selectedProperties, accessorie: value })}
          />
          <BackgroundSelect
            selectedBackground={selectedProperties.background}
            onSelect={(value) => setSelectedProperties({ ...selectedProperties, background: value })}
          />
          <EarSelect
            selectedEar={selectedProperties.ear}
            onSelect={(value) => setSelectedProperties({ ...selectedProperties, ear: value })}
          />
          <EyeSelect
            selectedEye={selectedProperties.eye}
            onSelect={(value) => setSelectedProperties({ ...selectedProperties, eye: value })}
          />
          <HairSelect
            selectedHair={selectedProperties.hair}
            onSelect={(value) => setSelectedProperties({ ...selectedProperties, hair: value })}
          />
          <LegSelect
            selectedLeg={selectedProperties.leg}
            onSelect={(value) => setSelectedProperties({ ...selectedProperties, leg: value })}
          />
          <MouthSelect
            selectedMouth={selectedProperties.mouth}
            onSelect={(value) => setSelectedProperties({ ...selectedProperties, mouth: value })}
          />
          <NeckSelect
            selectedNeck={selectedProperties.neck}
            onSelect={(value) => setSelectedProperties({ ...selectedProperties, neck: value })}
          />
          <NoseSelect
            selectedNose={selectedProperties.nose}
            onSelect={(value) => setSelectedProperties({ ...selectedProperties, nose: value })}
          />
        </form>
        <Alpaca selectedProperties={selectedProperties} />
      </div>
      <div className="buttons">
        <button className="btn btn-primary" type="button" onClick={randomAlpaca}>
          <i className="bi bi-shuffle"></i> Random
        </button>
        <button className="btn btn-primary" type="button" onClick={downloadAlpaca}>
          <i className="bi bi-download"></i> Download
        </button>
      </div>
    </Layout>
  );
}
