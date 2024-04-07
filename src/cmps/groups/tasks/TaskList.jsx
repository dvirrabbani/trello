import { Link } from "react-router-dom"
import { TaskPreview } from "./TaskPreview"

export function TaskList({ group }) {
  return (
    <ol className="clean-list flex column task-list">
      {group.tasks.map((task) => {
        return (
          <li key={task.id}>
            <TaskPreview groupId={group.id} task={task} />
          </li>
        )
      })}
    </ol>
  )
}
