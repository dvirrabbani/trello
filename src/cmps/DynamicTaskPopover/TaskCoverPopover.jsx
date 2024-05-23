import { COVER_COLORS_lIST } from "../../const/label"
import { LabelButton } from "../LabelButton"
import { Button } from "../Button"

export function TaskCoverPopover({ task, onUpdateTask }) {
  const { bgColor = "", isCoverFull = false } = task.style

  function onChangeCoverSize(coverSizeToUpdate) {
    if (coverSizeToUpdate === isCoverFull) {
      return
    }

    onUpdateTask({
      key: "style",
      value: { ...task.style, isCoverFull: coverSizeToUpdate },
    })
  }

  return (
    <div className="task-cover-popover">
      {/* Cover Size Edit */}
      <section className="cover-size-edit">
        <h4 className="label">Size</h4>
        <ul className="cover-list clean-list">
          <li
            className={`cover size-normal ${!isCoverFull ? "active" : ""}`}
            onClick={() => onChangeCoverSize(false)}
          >
            <div
              className="cover-background"
              style={{ backgroundColor: bgColor }}
            ></div>
            <div className="skeleton-card">
              {/* TODO change skeleton background color by cover color */}
              <div className="skeleton skeleton-line"></div>
              <div className="skeleton skeleton-line skeleton-line-2"></div>
              <div className="skeleton-card-row">
                <div className="skeleton skeleton-btn"></div>
                <div className="skeleton skeleton-btn"></div>
              </div>
              <div className="skeleton-circle"></div>
            </div>
          </li>
          <li
            className={`cover size-full ${isCoverFull ? "active" : ""}`}
            style={{ backgroundColor: bgColor }}
            onClick={() => onChangeCoverSize(true)}
          >
            <div className="skeleton-card">
              {/* TODO change skeleton background color by cover color */}
              <div className="skeleton skeleton-line"></div>
              <div className="skeleton skeleton-line skeleton-line-2"></div>
            </div>
          </li>
        </ul>
      </section>
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
