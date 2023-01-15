import { NECK_NAMES } from "../utils/assetsNames"

type NeckSelectProps = {
  selectedNeck: string
  onSelect: (value: string) => void
}
export const NeckSelect = ({ selectedNeck, onSelect }: NeckSelectProps) => {
  return <div className="row m-2">
    <div className="col-auto">
      <label htmlFor="neck" className="form-label">Neck:</label>
    </div>
    <div className="col">
      <select id="neck" className="form-select" onChange={(e) => onSelect(e.currentTarget.value)}>
        {NECK_NAMES?.map(cur => <option
          selected={selectedNeck === cur} value={cur}>{cur}</option>)}
      </select>
    </div>
  </div>
}