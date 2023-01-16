import { capitalize } from "../utils/utils"

type SelectPropertyProps = {
  label: string
  onSelect: (value: string) => void
  options: string[]
  selectedOption: string
}
export const SelectProperty = ({ label, onSelect, options, selectedOption }: SelectPropertyProps) => {
  return <div className="form-item">
    <label className="form-label" htmlFor="select" >{label}:</label>
    <select className="form-select" id="select" onChange={(e) => onSelect(e.currentTarget.value)}>
      {options?.map(cur => <option
        selected={selectedOption === cur} value={cur}
      >
        {capitalize(cur)}
      </option>)}
    </select>
  </div >
}