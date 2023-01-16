import { NECK_NAMES } from "../utils/assetsNames"

type NeckSelectProps = {
  selectedNeck: string
  onSelect: (value: string) => void
}
export const NeckSelect = ({ selectedNeck, onSelect }: NeckSelectProps) => {
  return <div className="form-item">
    <label className="form-label" htmlFor="neck" >Neck:</label>
    <select className="form-select" id="neck" onChange={(e) => onSelect(e.currentTarget.value)}>
      {NECK_NAMES?.map(cur => <option
        selected={selectedNeck === cur} value={cur}>{cur}</option>)}
    </select>
  </div >
}