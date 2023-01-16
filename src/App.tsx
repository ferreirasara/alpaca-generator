import { useState } from "react";
import { Alpaca } from "./components/Alpaca";
import { Layout } from "./components/Layout";
import { ACCESSORIE_NAMES, BACKGROUND_NAMES, EAR_NAMES, EYE_NAMES, HAIR_NAMES, LEG_NAMES, MOUTH_NAMES, NECK_NAMES, NOSE_NAMES } from "./utils/assetsNames";
import { getRandomElement } from "./utils/utils";
import './app.css';
import { SelectProperty } from "./components/SelectProperty";

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

const generateRandomAlpaca = () => ({
  accessorie: getRandomElement(ACCESSORIE_NAMES),
  background: getRandomElement(BACKGROUND_NAMES),
  ear: getRandomElement(EAR_NAMES),
  eye: getRandomElement(EYE_NAMES),
  hair: getRandomElement(HAIR_NAMES),
  leg: getRandomElement(LEG_NAMES),
  mouth: getRandomElement(MOUTH_NAMES),
  neck: getRandomElement(NECK_NAMES),
  nose: NOSE_NAMES[0],
})

export const App = () => {
  const [selectedProperties, setSelectedProperties] = useState<SelectedProperties>(generateRandomAlpaca());

  const randomAlpaca = async () => setSelectedProperties(generateRandomAlpaca())

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
          <SelectProperty
            label="Accessorie"
            onSelect={(value) => setSelectedProperties({ ...selectedProperties, accessorie: value })}
            options={ACCESSORIE_NAMES}
            selectedOption={selectedProperties.accessorie}
          />
          <SelectProperty
            label="Background"
            selectedOption={selectedProperties.background}
            onSelect={(value) => setSelectedProperties({ ...selectedProperties, background: value })}
            options={BACKGROUND_NAMES}
          />
          <SelectProperty
            label="Ear"
            selectedOption={selectedProperties.ear}
            onSelect={(value) => setSelectedProperties({ ...selectedProperties, ear: value })}
            options={EAR_NAMES}
          />
          <SelectProperty
            label="Eye"
            selectedOption={selectedProperties.eye}
            onSelect={(value) => setSelectedProperties({ ...selectedProperties, eye: value })}
            options={EYE_NAMES}
          />
          <SelectProperty
            label="hair"
            selectedOption={selectedProperties.hair}
            onSelect={(value) => setSelectedProperties({ ...selectedProperties, hair: value })}
            options={HAIR_NAMES}
          />
          <SelectProperty
            label="Leg"
            selectedOption={selectedProperties.leg}
            onSelect={(value) => setSelectedProperties({ ...selectedProperties, leg: value })}
            options={LEG_NAMES}
          />
          <SelectProperty
            label="Mouth"
            selectedOption={selectedProperties.mouth}
            onSelect={(value) => setSelectedProperties({ ...selectedProperties, mouth: value })}
            options={MOUTH_NAMES}
          />
          <SelectProperty
            label="Neck"
            selectedOption={selectedProperties.neck}
            onSelect={(value) => setSelectedProperties({ ...selectedProperties, neck: value })}
            options={NECK_NAMES}
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
