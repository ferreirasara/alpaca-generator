import { NOSE_NAMES } from "../utils/assetsNames"

type NoseSelectProps = {
  selectedNose: string
  onSelect: (value: string) => void
}
export const NoseSelect = ({ selectedNose, onSelect }: NoseSelectProps) => {
  return <div className="row m-2">
    <div className="col-auto">
      <label htmlFor="nose" className="form-label">Nose:</label>
    </div>
    <div className="col">
      <select id="nose" className="form-select" onChange={(e) => onSelect(e.currentTarget.value)}>
        {NOSE_NAMES?.map(cur => <option
          selected={selectedNose === cur} value={cur}>{cur}</option>)}
      </select>
    </div>
  </div>
}