import { Button } from "../Button"
import SvgIcon from "../SvgIcon"

export function TaskDetailsChecklist({
  checklists,
  onRemoveChecklist,
  onAddCheckListTodo,
  onRemoveCheckListTodo,
}) {
  return (
    <section className="task-details-checklist">
      {checklists.map((checklist) => {
        return (
          <div className="task-details-checklist" key={checklist.id}>
            <div className="task-details-checklist-header flex align-center">
              <SvgIcon iconName={"checkbox"} />
              {checklist.title}
              <Button
                variant="contained"
                onClick={() => onRemoveChecklist(checklist.id)}
              >
                Delete
              </Button>
            </div>
            <ul>
              {checklist.todos.length ? (
                checklist.todos.map((todo) => {
                  return (
                    <li className="task-details-checklist-item" key={todo.id}>
                      {todo.title}
                      <Button
                        variant="contained"
                        onClick={() =>
                          onRemoveCheckListTodo(checklist.id, todo.id)
                        }
                      >
                        Delete
                      </Button>
                    </li>
                  )
                })
              ) : (
                <li className="task-details-checklist-item">No items</li>
              )}
              <Button
                variant="contained"
                onClick={() =>
                  onAddCheckListTodo(checklist.id, { title: "demo" })
                }
              >
                Add
              </Button>
            </ul>
          </div>
        )
      })}
    </section>
  )
}
