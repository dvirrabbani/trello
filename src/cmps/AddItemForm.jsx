import { useState } from "react"
import SvgIcon from "./SvgIcon"

export function AddItemForm({ onAddItem, setDisplayAddItem, type }) {
  const [inputVal, setInputVal] = useState("")

  function handleChange({ target }) {
    let { value, type, name } = target
    setInputVal(value)
  }

  const placeholder =
    type === "task" ? "Enter a title for this card..." : "Enter list title..."

  return (
    <div className="add-item-form">
      <form className={`${type == "group" ? "group-preview" : ""}`}>
        <div className={`flex ${type == "task" ? "task-preview" : ""}`}>
          <textarea
            name="title"
            spellCheck="false"
            value={inputVal}
            onChange={handleChange}
            placeholder={placeholder}
            onKeyDown={(e) => {
              if (e.key === "Enter") onAddItem(e, inputVal)
            }}
            autoFocus
          ></textarea>
        </div>
        <div className="add-item-actions flex">
          <button
            className="button variant-primary"
            onClick={(e) => onAddItem(e, inputVal)}
          >
            {`Add ${type == "task" ? "card" : "list"}`}
          </button>
          <button
            className="button variant-text shape-regular"
            onClick={() => setDisplayAddItem(false)}
          >
            <SvgIcon iconName="close" />
          </button>
        </div>
      </form>
    </div>
  )
}
