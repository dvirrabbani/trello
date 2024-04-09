import { useForm } from "../../customHooks/useForm"
import { addTaskCheckList } from "../../store/board.actions"
import { Button } from "../Button"

export function TaskPopoverCheckList({ task, onUpdateTask }) {
  const [fields, , handleChange] = useForm({
    title: "",
  })

  function onAddCheckList() {
    addTaskCheckList(fields.title, task, onUpdateTask)
  }

  return (
    <div className="task-popover-check-list" style={{ display: "grid" }}>
      <div className="form-group">
        <label htmlFor="task-checklist-title" className="title">
          Title
        </label>
        <input
          name="title"
          id="task-checklist-title"
          type="text"
          value={fields.title || ""}
          onChange={handleChange}
        />
      </div>
      <Button variant="primary" onClick={onAddCheckList}>
        Add
      </Button>
    </div>
  )
}
