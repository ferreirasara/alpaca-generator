import { NOSE_NAMES } from "../utils/assetsNames"

type NoseSelectProps = {
  selectedNose: string
  onSelect: (value: string) => void
}
export const NoseSelect = ({ selectedNose, onSelect }: NoseSelectProps) => {
  return <div className="form-item">
    <label className="form-label" htmlFor="nose" >Nose:</label>
    <select className="form-select" id="nose" onChange={(e) => onSelect(e.currentTarget.value)}>
      {NOSE_NAMES?.map(cur => <option
        selected={selectedNose === cur} value={cur}>{cur}</option>)}
    </select>
  </div >
}