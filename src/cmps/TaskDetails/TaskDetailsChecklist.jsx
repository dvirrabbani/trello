import { Button } from "../Button"
import SvgIcon from "../SvgIcon"

export function TaskDetailsChecklist({ checklists, onRemoveChecklist }) {
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
                    </li>
                  )
                })
              ) : (
                <li className="task-details-checklist-item">No items</li>
              )}
            </ul>
          </div>
        )
      })}
    </section>
  )
}
