import { COVER_COLORS_lIST } from "../../const/label"
import { LabelButton } from "../LabelButton"
import { Button } from "../Button"

export function TaskCoverPopover({ task, onUpdateTask }) {
  return (
    <div className="task-cover-popover">
      {/* Remove Color */}
      <Button
        className={"remove-cover-btn"}
        variant="contained"
        onClick={() => {
          onUpdateTask({
            key: "style",
            value: {},
          })
        }}
      >
        Remove cover
      </Button>
      {/* Update Cover Color */}
      <ul className="clean-list colors-palette-grid">
        {COVER_COLORS_lIST.map((color) => {
          return (
            <LabelButton
              key={color}
              color={color}
              onClick={() =>
                onUpdateTask({
                  key: "style",
                  value: { bgColor: color },
                })
              }
            />
          )
        })}
      </ul>
    </div>
  )
}
