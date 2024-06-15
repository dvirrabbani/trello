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
      <input
        name="title"
        className="input-text"
        onChange={handleChange}
        value={title || ""}
        autoFocus
      />

      <div className="actions">
        <Button variant="primary" onClick={onSaveTodo}>
          Add
        </Button>
        <Button onClick={() => setIsFormOpen(() => false)}>Cancel</Button>
      </div>
    </form>
  )
}
