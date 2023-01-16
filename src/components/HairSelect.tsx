import { HAIR_NAMES } from "../utils/assetsNames"

type HairSelectProps = {
  selectedHair: string
  onSelect: (value: string) => void
}
export const HairSelect = ({ selectedHair, onSelect }: HairSelectProps) => {
  return <div className="form-item">
    <label className="form-label" htmlFor="hair" >Hair:</label>
    <select className="form-select" id="hair" onChange={(e) => onSelect(e.currentTarget.value)}>
      {HAIR_NAMES?.map(cur => <option
        selected={selectedHair === cur} value={cur}>{cur}</option>)}
    </select>
  </div >
}