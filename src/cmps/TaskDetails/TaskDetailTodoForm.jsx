import { Button } from "../Button"

export function TaskDetailTodoForm({
  checklistId,
  title,
  handleChange,
  setIsFormOpen,
  onAddCheckListTodo,
  setFields,
}) {
  function onSaveTodo(ev) {
    ev.preventDefault()
    onAddCheckListTodo(checklistId, { title })
    setFields({ title: "" })
  }

  return (
    <form className="task-detail-todo-form">
      <input
        name="title"
        className="input-text"
        onChange={handleChange}
        value={title || ""}
        autoFocus
        onKeyDown={(ev) => {
          if (ev.key === "Enter") onSaveTodo(ev)
        }}
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
