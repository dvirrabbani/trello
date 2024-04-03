import { useEffect, useRef } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"

export function TaskDetails() {
  const ref = useRef()
  const params = useParams()

  useEffect(() => {
    ref.current?.showModal()
  }, [])

  return (
    <dialog ref={ref} className="task-details">
      <div className="task-header">
        <Link to={`/board/${params.boardId}`}>x</Link>
        <div className="task-cover">{/*TODO*/}</div>
        <div className="task-title">{/*TODO*/}</div>
        <div className="task-sub-title">{/*TODO*/}</div>
      </div>
      <div className="main">
        <div className="main-header">
          <div className="main-header-card">{/*TODO*/}</div>
          <div className="main-header-card">{/*TODO*/}</div>
          <div className="main-header-card">{/*TODO*/}</div>
        </div>
        <div className="task-detail-list">{/*TODO*/}</div>
        <div className="task-checklist">{/*TODO*/}</div>
        <div className="task-description">{/*TODO*/}</div>
        <div className="task-attachments">{/*TODO*/}</div>
        <div className="task-activity">{/*TODO*/}</div>
      </div>
      <div className="sidebar-container">{/*TODO*/}</div>
    </dialog>
  )
}
