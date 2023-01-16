import { EYE_NAMES } from "../utils/assetsNames"

type EyeSelectProps = {
  selectedEye: string
  onSelect: (value: string) => void
}
export const EyeSelect = ({ selectedEye, onSelect }: EyeSelectProps) => {
  return <div className="form-item">
    <label className="form-label" htmlFor="eye" >Eye:</label>
    <select className="form-select" id="eye" onChange={(e) => onSelect(e.currentTarget.value)}>
      {EYE_NAMES?.map(cur => <option
        selected={selectedEye === cur} value={cur}>{cur}</option>)}
    </select>
  </div >
}