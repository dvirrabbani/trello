import { Button } from "../Button"

export function TaskDetailTodoForm({
  checklistId,
  title,
  handleChange,
  setIsFormOpen,
  onAddCheckListTodo,
}) {
  function onSaveTodo(ev) {
    ev.preventDefault()
    onAddCheckListTodo(checklistId, { title })
    setIsFormOpen(() => false)
  }

  return (
    <form className="task-detail-todo-form">
      <input name="title" onChange={handleChange} value={title || ""} />

      <div className="actions">
        <Button variant="primary" onClick={onSaveTodo}>
          Save
        </Button>
        <Button onClick={() => setIsFormOpen(() => false)}>Cancel</Button>
      </div>
    </form>
  )
}