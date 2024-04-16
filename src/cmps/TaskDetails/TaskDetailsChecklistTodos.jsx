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
  const [isTodoFormOpen, setIsTodoFormOpen] = useState(false)
  const [fields, , handleChange] = useForm({
    title: "",
  })
  const progressValue = todos.length
    ? todos.filter((todo) => todo.isDone).length
    : 0
  const progressMax = todos.length || 0

  const progressPercentage = (progressValue / progressMax || 0) * 100
  return (
    <div className="task-details-checklist-sub-items">
      <ul className="clean-list">
        <div className="checklist-progress-container">
          <div className="checklist-progress-percentage">
            {progressPercentage.toFixed()}%
          </div>
          <div className="progress-bar">
            <div
              className="progress-bar-complete"
              style={{
                width: `${progressPercentage}%`,
                transition: "width 0.3s ease-in-out",
              }}
            ></div>
          </div>
        </div>
        {/* Checklist sub items */}
        {todos?.map((todo) => {
          return (
            <li
              className="task-details-checklist-item flex justify-between"
              key={todo.id}
            >
              <div className="preview">
                <input
                  type="checkbox"
                  checked={todo.isDone}
                  onChange={() =>
                    onUpdateCheckListTodo(checklistsId, todo.id, {
                      isDone: !todo.isDone,
                    })
                  }
                />
                <span
                  className={`${
                    todo.isDone ? "text-decoration-line-through" : ""
                  }`}
                >
                  {todo.title}
                </span>
              </div>
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
