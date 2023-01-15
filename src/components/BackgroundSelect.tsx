import { BACKGROUND_NAMES } from "../utils/assetsNames"

type BackgroundSelectProps = {
  selectedBackground: string
  onSelect: (value: string) => void
}
export const BackgroundSelect = ({ selectedBackground, onSelect }: BackgroundSelectProps) => {
  return <div className="row m-2">
    <div className="col-auto">
      <label htmlFor="background" className="form-label">Background:</label>
    </div>
    <div className="col">
      <select id="background" className="form-select" onChange={(e) => onSelect(e.currentTarget.value)}>
        {BACKGROUND_NAMES?.map(cur => <option
          selected={selectedBackground === cur} value={cur}>{cur}</option>)}
      </select>
    </div>
  </div>
}