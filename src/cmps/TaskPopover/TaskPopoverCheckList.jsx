import { useForm } from "../../customHooks/useForm"
import { Button } from "../Button"

export function TaskPopoverCheckList({ onAddToCheckLists }) {
  const [fields, , handleChange] = useForm({
    title: "",
  })

  function onAddCheckList() {
    onAddToCheckLists(fields.title)
  }

  return (
    <div className="task-popover-check-list" style={{ display: "grid" }}>
      <label htmlFor="task-checklist-title">Title</label>
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
