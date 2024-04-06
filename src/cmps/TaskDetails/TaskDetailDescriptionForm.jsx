import { Button } from "../Button"

export function TaskDetailDescriptionForm({
  description,
  handleChange,
  onUpdateTaskDescription,
  setIsFormOpen,
}) {
  function onSaveDescription(ev) {
    ev.preventDefault()
    onUpdateTaskDescription(description)
    setIsFormOpen(() => false)
  }

  return (
    <form className="task-detail-description-form">
      <input
        name="description"
        onChange={handleChange}
        value={description || ""}
      />

      <div className="actions">
        <Button variant="primary" onClick={onSaveDescription}>
          Save
        </Button>
        <Button onClick={() => setIsFormOpen(() => false)}>Cancel</Button>
      </div>
    </form>
  )
}
