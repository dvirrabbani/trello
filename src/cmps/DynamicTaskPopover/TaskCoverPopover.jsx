import { useState } from "react"
import { COVER_COLORS_lIST } from "../../const/label"
import { LabelButton } from "../LabelButton"
import { Button } from "../Button"

export function TaskCoverPopover({ task, onUpdateTask }) {
  const [cover, setCover] = useState(null)

  return (
    <div className="task-cover-popover">
      {/* Remove Color */}
      <Button className={"remove-cover-btn"} variant="contained">
        Remove cover
      </Button>
      {/* Update Cover Color */}
      <ul className="clean-list colors-palette-grid">
        {COVER_COLORS_lIST.map((color) => {
          return (
            <LabelButton
              color={color}
              onClick={() =>
                onUpdateTask({
                  key: "style",
                  value: { ...task.style, background: color },
                })
              }
            />
          )
        })}
      </ul>
    </div>
  )
}
