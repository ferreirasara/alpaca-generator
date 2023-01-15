import { MOUTH_NAMES } from "../utils/assetsNames"

type MouthSelectProps = {
  selectedMouth: string
  onSelect: (value: string) => void
}
export const MouthSelect = ({ selectedMouth, onSelect }: MouthSelectProps) => {
  return <div className="row m-2">
    <div className="col-auto">
      <label htmlFor="mouth" className="form-label">Mouth:</label>
    </div>
    <div className="col">
      <select id="mouth" className="form-select" onChange={(e) => onSelect(e.currentTarget.value)}>
        {MOUTH_NAMES?.map(cur => <option
          selected={selectedMouth === cur} value={cur}>{cur}</option>)}
      </select>
    </div>
  </div>
}