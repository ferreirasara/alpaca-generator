import { ACCESSORIE_NAMES } from "../utils/assetsNames"

type AccessorieSelectProps = {
  selectedAccessorie: string
  onSelect: (value: string) => void
}
export const AccessorieSelect = ({ selectedAccessorie, onSelect }: AccessorieSelectProps) => {
  return <div className="form-item">
    <label className="form-label" htmlFor="accessorie">Accessorie:</label>
    <select className="form-select" id="accessorie" onChange={(e) => onSelect(e.currentTarget.value)}>
      {ACCESSORIE_NAMES?.map(cur => <option
        selected={selectedAccessorie === cur} value={cur}>{cur}</option>)}
    </select>
  </div >
}