import { Link } from "react-router-dom"
import SvgIcon from "../SvgIcon"

export function TaskDetailsHeader({ params, task }) {
  return (
    <div className="task-details-header flex justify-between">
      <div className="task-header">
        <div className="task-cover">{/*TODO*/}</div>
        <div className="task-title flex">
          <SvgIcon iconName={"taskWindow"} />
          <h2>{task.title}</h2>
        </div>
        <div className="task-sub-title">{/*TODO*/}</div>
      </div>
      <Link to={`/board/${params.boardId}`}>x</Link>
    </div>
  )
}
