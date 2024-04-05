import { Link } from "react-router-dom"
import SvgIcon from "./SvgIcon"

export function TaskList({ group }) {
  return (
    <ol className="clean-list flex column task-list">
      {group.tasks.map((task) => {
        return (
          <li key={task.id}>
            <Link to={`${group.id}/${task.id}`}>
              <TaskPreview task={task} />
            </Link>
          </li>
        )
      })}
    </ol>
  )
}

function TaskPreview({ task }) {
  return (
    <div className="task-preview">
      <div className="task-title">{task.title}</div>
      <div className="task-actions-badges">
        {task.description && <SvgIcon iconName="description" />}
        {task.checklists && <ChecklistsBadge checklists={task.checklists} />}
      </div>
    </div>
  )
}

function ChecklistsBadge({ checklists }) {
  const totalTodos = checklists.reduce((accumulator, checklist) => {
    return accumulator + checklist.todos.length
  }, 0)

  const totalDoneTodos = checklists.reduce((accumulator, checklist) => {
    return accumulator + checklist.todos.filter((todo) => todo.isDone).length
  }, 0)

  return (
    <div className="action-badge">
      <SvgIcon iconName="checkbox" />
      <span>{totalDoneTodos}</span>/<span>{totalTodos}</span>
    </div>
  )
}
