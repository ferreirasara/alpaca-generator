import { LEG_NAMES } from "../utils/assetsNames"

type LegSelectProps = {
  selectedLeg: string
  onSelect: (value: string) => void
}
export const LegSelect = ({ selectedLeg, onSelect }: LegSelectProps) => {
  return <div className="form-item">
    <label className="form-label" htmlFor="leg" >Leg:</label>
    <select className="form-select" id="leg" onChange={(e) => onSelect(e.currentTarget.value)}>
      {LEG_NAMES?.map(cur => <option
        selected={selectedLeg === cur} value={cur}>{cur}</option>)}
    </select>
  </div >
}