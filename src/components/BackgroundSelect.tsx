import { BACKGROUND_NAMES } from "../utils/assetsNames"

type BackgroundSelectProps = {
  selectedBackground: string
  onSelect: (value: string) => void
}
export const BackgroundSelect = ({ selectedBackground, onSelect }: BackgroundSelectProps) => {
  return <div className="form-item">
    <label className="form-label" htmlFor="background" >Background:</label>
    <select className="form-select" id="background" onChange={(e) => onSelect(e.currentTarget.value)}>
      {BACKGROUND_NAMES?.map(cur => <option
        selected={selectedBackground === cur} value={cur}>{cur}</option>)}
    </select>
  </div >
}