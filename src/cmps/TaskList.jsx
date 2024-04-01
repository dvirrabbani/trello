import { Link } from "react-router-dom"

export function TaskList({ group }) {
  return (
    <ol className="clean-list">
      {group.tasks.map((task) => {
        return (
          <li key={task.id}>
            <Link to={`${group.id}/${task.id}`}>{task.title}</Link>
          </li>
        )
      })}
    </ol>
  )
}
