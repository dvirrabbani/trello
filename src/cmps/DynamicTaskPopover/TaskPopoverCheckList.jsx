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
      <label htmlFor="task-checklist-title h4">Title</label>
      <input
        name="title"
        id="task-checklist-title"
        type="text"
        value={fields.title || ""}
        onChange={handleChange}
      />
      <Button onClick={onAddCheckList}>Add</Button>
    </div>
  )
}
