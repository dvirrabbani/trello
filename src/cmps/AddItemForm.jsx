import { forwardRef, useEffect, useState } from "react"
import SvgIcon from "./SvgIcon"
import { ClickAwayListener } from "@mui/material"

export const AddItemForm = forwardRef(
  ({ onAddItem, setDisplayAddItem, type }, ref) => {
    const [inputVal, setInputVal] = useState("")

    function handleChange({ target }) {
      let { value, type, name } = target
      setInputVal(value)
    }

    function handleClickAway() {
      setDisplayAddItem(false)
      setInputVal("")
    }

    const placeholder =
      type === "task" ? "Enter a title for this card..." : "Enter list title..."

    return (
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className="add-item-form" ref={ref}>
          <form className={`${type == "group" ? "group-preview" : ""}`}>
            <div className={`flex ${type == "task" ? "task-preview" : ""}`}>
              <textarea
                name="title"
                spellCheck="false"
                value={inputVal}
                onChange={handleChange}
                placeholder={placeholder}
                onKeyDown={(e) => {
                  if (e.key === "Enter") onAddItem(e, inputVal, setInputVal)
                }}
                autoFocus
              ></textarea>
            </div>
            <div className="add-item-actions flex">
              <button
                className="button variant-primary"
                onClick={(e) => onAddItem(e, inputVal)}
                type="submit"
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
      </ClickAwayListener>
    )
  }
)

//  const AddItemForm = forwardRef((props, ref) => {
//   // const { onAddItem, setDisplayAddItem, type } = props;
//   // const [inputVal, setInputVal] = useState("")
// console.log('props:', props);
// console.log('ref:', ref);
//   // rest of your code
// });
AddItemForm.displayName = "AddItemForm"
