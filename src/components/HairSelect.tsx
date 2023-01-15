import { HAIR_NAMES } from "../utils/assetsNames"

type HairSelectProps = {
  selectedHair: string
  onSelect: (value: string) => void
}
export const HairSelect = ({ selectedHair, onSelect }: HairSelectProps) => {
  return <div className="row m-2">
    <div className="col-auto">
      <label htmlFor="hair" className="form-label">Hair:</label>
    </div>
    <div className="col">
      <select id="hair" className="form-select" onChange={(e) => onSelect(e.currentTarget.value)}>
        {HAIR_NAMES?.map(cur => <option
          selected={selectedHair === cur} value={cur}>{cur}</option>)}
      </select>
    </div>
  </div>
}