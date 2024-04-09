import { Link } from "react-router-dom"
import SvgIcon from "../SvgIcon"

export function TaskDetailsHeader({ params, task }) {
  return (
    <div className="task-details-header">
      {task?.style?.background && (
        <div
          className="task-cover"
          style={{ background: task.style.background }}
        >
          <Link
            className="close-button button shape-circle "
            to={`/board/${params.boardId}`}
          >
            <SvgIcon size={"md"} iconName={"close"} />
          </Link>
        </div>
      )}
      <div className="task-header">
        <SvgIcon iconName={"taskWindow"} />
        <div className="task-title">
          <h2>{task.title}</h2>
          <div className="task-sub-title">{/*TODO*/}</div>
        </div>
        {!task?.style?.background && (
          <Link
            className="close-button button shape-circle "
            to={`/board/${params.boardId}`}
          >
            <SvgIcon size={"md"} iconName={"close"} />
          </Link>
        )}
      </div>
    </div>
  )
}
