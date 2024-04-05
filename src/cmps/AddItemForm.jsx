import { useState } from "react"

export function AddItemForm({ onAddItem, setDisplayAddItem }) {
  const [inputVal, setInputVal] = useState("")

  function handleChange({ target }) {
    let { value, type, name } = target
    setInputVal(value)
  }
  const style = {
    height: "32px",
  }
  return (
    <form>
      <textarea
        style={style}
        name="title"
        spellCheck="false"
        value={inputVal}
        onChange={handleChange}
        autoFocus
      ></textarea>
      <div className="add-item-actions">
        <button onClick={() => onAddItem(inputVal)}>Add</button>
        <button onClick={() => setDisplayAddItem(false)}>X</button>
      </div>
    </form>
  )
}
