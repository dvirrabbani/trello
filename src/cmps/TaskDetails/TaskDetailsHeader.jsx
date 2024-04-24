import { Link } from "react-router-dom"
import SvgIcon from "../SvgIcon"

export function TaskDetailsHeader({ params, task }) {
  return (
    <div className="task-details-header">
      {task?.style && (
        <div
          className="task-cover"
          style={{
            backgroundColor: task.style?.bgColor || "",
            backgroundImage: task.style?.bgImg
              ? `url(${task.style.bgImg})`
              : "",
          }}
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
        {!task?.style?.bgColor && (
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
