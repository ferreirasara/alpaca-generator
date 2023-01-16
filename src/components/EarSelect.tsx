import { EAR_NAMES } from "../utils/assetsNames"

type EarSelectProps = {
  selectedEar: string
  onSelect: (value: string) => void
}
export const EarSelect = ({ selectedEar, onSelect }: EarSelectProps) => {
  return <div className="form-item">
    <label className="form-label" htmlFor="ear" >Ear:</label>
    <select className="form-select" id="ear" onChange={(e) => onSelect(e.currentTarget.value)}>
      {EAR_NAMES?.map(cur => <option
        selected={selectedEar === cur} value={cur}>{cur}</option>)}
    </select>
  </div >
}