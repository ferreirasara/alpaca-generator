import { EAR_NAMES } from "../utils/assetsNames"

type EarSelectProps = {
  selectedEar: string
  onSelect: (value: string) => void
}
export const EarSelect = ({ selectedEar, onSelect }: EarSelectProps) => {
  return <div className="row m-2">
    <div className="col-auto">
      <label htmlFor="ear" className="form-label">Ear:</label>
    </div>
    <div className="col">
      <select id="ear" className="form-select" onChange={(e) => onSelect(e.currentTarget.value)}>
        {EAR_NAMES?.map(cur => <option
          selected={selectedEar === cur} value={cur}>{cur}</option>)}
      </select>
    </div>
  </div>
}