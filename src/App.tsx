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
import { ACCESSORIE_LINKS, BACKGROUND_LINKS, EAR_LINKS, EYE_LINKS, HAIR_LINKS, LEG_LINKS, MOUTH_LINKS, NECK_LINKS, NOSE_LINKS } from "./utils/assetsLinks";
import { ACCESSORIE_NAMES, BACKGROUND_NAMES, EAR_NAMES, EYE_NAMES, HAIR_NAMES, LEG_NAMES, MOUTH_NAMES, NECK_NAMES, NOSE_NAMES } from "./utils/assetsNames";
import { getRandomElement } from "./utils/utils";
import './app.css';

export const App = () => {
  const [selectedAccessorie, setSelectedAccessorie] = useState<string>(getRandomElement(ACCESSORIE_NAMES));
  const [selectedBackground, setSelectedBackground] = useState<string>(getRandomElement(BACKGROUND_NAMES));
  const [selectedEar, setSelectedEar] = useState<string>(getRandomElement(EAR_NAMES));
  const [selectedEye, setSelectedEye] = useState<string>(getRandomElement(EYE_NAMES));
  const [selectedHair, setSelectedHair] = useState<string>(getRandomElement(HAIR_NAMES));
  const [selectedLeg, setSelectedLeg] = useState<string>(getRandomElement(LEG_NAMES));
  const [selectedMouth, setSelectedMouth] = useState<string>(getRandomElement(MOUTH_NAMES));
  const [selectedNeck, setSelectedNeck] = useState<string>(getRandomElement(NECK_NAMES));
  const [selectedNose, setSelectedNose] = useState<string>(getRandomElement(NOSE_NAMES));

  const randomAlpaca = () => {
    setSelectedAccessorie(getRandomElement(ACCESSORIE_NAMES));
    setSelectedBackground(getRandomElement(BACKGROUND_NAMES));
    setSelectedEar(getRandomElement(EAR_NAMES));
    setSelectedEye(getRandomElement(EYE_NAMES));
    setSelectedHair(getRandomElement(HAIR_NAMES));
    setSelectedLeg(getRandomElement(LEG_NAMES));
    setSelectedMouth(getRandomElement(MOUTH_NAMES));
    setSelectedNeck(getRandomElement(NECK_NAMES));
    setSelectedNose(getRandomElement(NOSE_NAMES));
  }

  return (
    <Layout>
      <h1>ALPACA GENERATOR</h1>
      <div className="content">
        <form>
          <AccessorieSelect selectedAccessorie={selectedAccessorie} onSelect={(value) => setSelectedAccessorie(value)} />
          <BackgroundSelect selectedBackground={selectedBackground} onSelect={(value) => setSelectedBackground(value)} />
          <EarSelect selectedEar={selectedEar} onSelect={(value) => setSelectedEar(value)} />
          <EyeSelect selectedEye={selectedEye} onSelect={(value) => setSelectedEye(value)} />
          <HairSelect selectedHair={selectedHair} onSelect={(value) => setSelectedHair(value)} />
          <LegSelect selectedLeg={selectedLeg} onSelect={(value) => setSelectedLeg(value)} />
          <MouthSelect selectedMouth={selectedMouth} onSelect={(value) => setSelectedMouth(value)} />
          <NeckSelect selectedNeck={selectedNeck} onSelect={(value) => setSelectedNeck(value)} />
          <NoseSelect selectedNose={selectedNose} onSelect={(value) => setSelectedNose(value)} />
        </form>
        <Alpaca
          accessorieImgLink={ACCESSORIE_LINKS?.[selectedAccessorie]}
          backgroundImgLink={BACKGROUND_LINKS?.[selectedBackground]}
          earImgLink={EAR_LINKS?.[selectedEar]}
          eyeImgLink={EYE_LINKS?.[selectedEye]}
          hairImgLink={HAIR_LINKS?.[selectedHair]}
          legImgLink={LEG_LINKS?.[selectedLeg]}
          mouthImgLink={MOUTH_LINKS?.[selectedMouth]}
          neckImgLink={NECK_LINKS?.[selectedNeck]}
          noseImgLink={NOSE_LINKS?.[selectedNose]}
        />
      </div>
      <div className="buttons">
        <button className="btn btn-primary" type="button" onClick={randomAlpaca}>
          <i className="bi bi-shuffle"></i> Random
        </button>
        <button className="btn btn-primary" type="button">
          <i className="bi bi-download"></i> Download
        </button>
      </div>
    </Layout>
  );
}
