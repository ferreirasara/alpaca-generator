import { EYE_NAMES } from "../utils/assetsNames"

type EyeSelectProps = {
  selectedEye: string
  onSelect: (value: string) => void
}
export const EyeSelect = ({ selectedEye, onSelect }: EyeSelectProps) => {
  return <div className="row m-2">
    <div className="col-auto">
      <label htmlFor="eye" className="form-label">Eye:</label>
    </div>
    <div className="col">
      <select id="eye" className="form-select" onChange={(e) => onSelect(e.currentTarget.value)}>
        {EYE_NAMES?.map(cur => <option
          selected={selectedEye === cur} value={cur}>{cur}</option>)}
      </select>
    </div>
  </div>
}