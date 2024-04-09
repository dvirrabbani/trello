import { LABELS_LIST } from "../../../const/label"
import { useForm } from "../../../customHooks/useForm"
import { Button } from "../../Button"
import SvgIcon from "../../SvgIcon"

export function TaskPopoverLabelEdit({
  label,
  updateLabel,
  setUpdateLabel,
  setSelectedLabel,
  onClose,
  onUpdateLabel,
  onRemoveLabel,
  onAddLabel,
  mode = "edit",
}) {
  const [fields, , handleChange] = useForm({
    title: mode == "edit" ? label.title : "",
  })

  return (
    <div className="task-popover-label-edit">
      <div className="edit-header flex align-center justify-between">
        <div className="navigate-back" style={{ transform: "rotate(90deg)" }}>
          <Button onClick={() => setSelectedLabel(null)}>
            <SvgIcon iconName={"arrow"} />
          </Button>
        </div>
        <div className="title">
          {mode === "edit" ? "Edit Label" : "Create Label"}
        </div>
        <div className="close" onClick={onClose}>
          <Button>
            <SvgIcon iconName={"close"} />
          </Button>
        </div>
      </div>
      <div className="edit-label-preview">
        <div
          className="label"
          style={{
            backgroundColor: updateLabel?.color || label.color,
          }}
        ></div>
      </div>
      <div className="edit-label-main">
        <h3 className="h4">Title</h3>
        <input
          name="title"
          value={fields.title}
          onChange={handleChange}
          type="text"
        />
        <h3 className="h4">Select a color</h3>
        <ul className="clean-list colors-palette-grid">
          {/* Label Color Grid */}
          {LABELS_LIST.map((label) => {
            return (
              <div
                key={label.id}
                className="label"
                style={{ backgroundColor: label.color, cursor: "pointer" }}
                onClick={() => setUpdateLabel(label)}
              ></div>
            )
          })}
        </ul>
      </div>
      {/* Label Actions  */}
      {mode === "edit" ? (
        <div className="actions">
          <Button
            variant="contained"
            onClick={() =>
              onUpdateLabel({
                ...label,
                title: fields.title,
              })
            }
          >
            Save
          </Button>
          <Button onClick={() => onRemoveLabel(label.id)} variant="contained">
            Delete
          </Button>
        </div>
      ) : (
        <div className="actions">
          <Button
            variant="primary"
            onClick={() =>
              onAddLabel({
                ...label,
                ...updateLabel,
                title: fields.title,
              })
            }
          >
            Add
          </Button>
        </div>
      )}
    </div>
  )
}
