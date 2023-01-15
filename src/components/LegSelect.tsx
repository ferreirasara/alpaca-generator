import { LEG_NAMES } from "../utils/assetsNames"

type LegSelectProps = {
  selectedLeg: string
  onSelect: (value: string) => void
}
export const LegSelect = ({ selectedLeg, onSelect }: LegSelectProps) => {
  return <div className="row m-2">
    <div className="col-auto">
      <label htmlFor="leg" className="form-label">Leg:</label>
    </div>
    <div className="col">
      <select id="leg" className="form-select" onChange={(e) => onSelect(e.currentTarget.value)}>
        {LEG_NAMES?.map(cur => <option
          selected={selectedLeg === cur} value={cur}>{cur}</option>)}
      </select>
    </div>
  </div>
}