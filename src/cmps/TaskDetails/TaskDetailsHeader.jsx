import { Link } from "react-router-dom"
import SvgIcon from "../SvgIcon"

export function TaskDetailsHeader({ params, task }) {
  return (
    <div className="task-details-header">
      <div className="task-header">
        <div className="task-cover">{/*TODO*/}</div>
        <div className="task-title">
          <SvgIcon iconName={"taskWindow"} />
          <h2>{task.title}</h2>
        </div>
        <div className="task-sub-title">{/*TODO*/}</div>
      </div>
      <Link to={`/board/${params.boardId}`}>
        <SvgIcon iconName={"close"} />
      </Link>
    </div>
  )
}
