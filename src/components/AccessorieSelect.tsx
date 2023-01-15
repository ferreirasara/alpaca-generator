import { ACCESSORIE_NAMES } from "../utils/assetsNames"

type AccessorieSelectProps = {
  selectedAccessorie: string
  onSelect: (value: string) => void
}
export const AccessorieSelect = ({ selectedAccessorie, onSelect }: AccessorieSelectProps) => {
  return <div className="row m-2">
    <div className="col-auto">
      <label htmlFor="accessorie" className="form-label">Accessorie:</label>
    </div>
    <div className="col">
      <select id="accessorie" className="form-select" onChange={(e) => onSelect(e.currentTarget.value)}>
        {ACCESSORIE_NAMES?.map(cur => <option
          selected={selectedAccessorie === cur} value={cur}>{cur}</option>)}
      </select>
    </div>
  </div>
}