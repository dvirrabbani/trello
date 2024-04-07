import { useState } from "react"
import { useForm } from "../../customHooks/useForm"
import { TaskDetailTodoForm } from "./TaskDetailTodoForm"
import { Button } from "../Button"

export function TaskDetailsChecklistTodos({
  checklistsId,
  todos,
  onAddCheckListTodo,
  onRemoveCheckListTodo,
  onUpdateCheckListTodo,
}) {
  const [isTodoFormOpen, setIsTodoFormOpen] = useState(Boolean(todos?.length))
  const [fields, , handleChange] = useForm({
    title: "",
  })
  return (
    <div className="task-details-checklist-sub-items">
      <ul>
        {/* Checklist sub items */}
        {todos?.map((todo) => {
          return (
            <li className="task-details-checklist-item" key={todo.id}>
              <input
                type="checkbox"
                checked={todo.isDone}
                onChange={() =>
                  onUpdateCheckListTodo(checklistsId, todo.id, {
                    isDone: !todo.isDone,
                  })
                }
              />
              {todo.title}
              <Button
                variant="contained"
                onClick={() => onRemoveCheckListTodo(checklistsId, todo.id)}
              >
                Delete
              </Button>
            </li>
          )
        })}

        {/* Show Task Todo From  */}
        {isTodoFormOpen && (
          <TaskDetailTodoForm
            fields={fields}
            checklistId={checklistsId}
            title={fields.title}
            handleChange={handleChange}
            setIsFormOpen={setIsTodoFormOpen}
            onAddCheckListTodo={onAddCheckListTodo}
          />
        )}
        {/* Add Todo Item */}
        {!isTodoFormOpen && (
          <Button
            variant="contained"
            onClick={() => setIsTodoFormOpen(() => true)}
          >
            Add Item
          </Button>
        )}
      </ul>
    </div>
  )
}