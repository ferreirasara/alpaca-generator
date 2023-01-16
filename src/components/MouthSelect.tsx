import { MOUTH_NAMES } from "../utils/assetsNames"

type MouthSelectProps = {
  selectedMouth: string
  onSelect: (value: string) => void
}
export const MouthSelect = ({ selectedMouth, onSelect }: MouthSelectProps) => {
  return <div className="form-item">
    <label className="form-label" htmlFor="mouth" >Mouth:</label>
    <select className="form-select" id="mouth" onChange={(e) => onSelect(e.currentTarget.value)}>
      {MOUTH_NAMES?.map(cur => <option
        selected={selectedMouth === cur} value={cur}>{cur}</option>)}
    </select>
  </div >
}