import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { boardService } from "../services/board.service"
import SvgIcon from "../cmps/SvgIcon"

export function TaskDetails() {
  const ref = useRef()
  const params = useParams()
  const [task, setTask] = useState(null)

  useEffect(() => {
    const { boardId, groupId, taskId } = params
    loadTask(boardId, groupId, taskId)
    ref.current?.showModal()

    return () => {
      setTask(null)
    }
  }, [params.taskId])

  async function loadTask(boardId, groupId, taskId) {
    const board = await boardService.getById(boardId)
    const group = board.groups?.find((g) => g.id === groupId)
    const task = group.tasks?.find((t) => t.id === taskId)
    setTask(() => task)
  }

  if (!task) {
    return (
      <dialog ref={ref} className="task-details">
        loading...
      </dialog>
    )
  }

  return (
    <dialog ref={ref} className="task-details">
      <div className="task-header-container flex justify-between">
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
      <div className="task-main-container">
        <div className="main">
          <div className="main-header">
            <div className="main-header-card">{/*TODO*/}</div>
            <div className="main-header-card">{/*TODO*/}</div>
            <div className="main-header-card">{/*TODO*/}</div>
          </div>
          {/* Task CheckList */}
          <div className="task-checklist-container">{/*TODO*/}</div>
          {/* Task Description */}
          <div className="task-description-container">
            <h3 className="task-description-title flex">
              <SvgIcon iconName="description" /> Description
            </h3>
            {task.description && (
              <div className="task-description">{task.description}</div>
            )}
          </div>
          {/* Task Attachments */}
          <div className="task-attachments-container">{/*TODO*/}</div>
          {/* Task Activity */}
          <div className="task-activity-container">{/*TODO*/}</div>
        </div>
        {/* Task Sidebar */}
        <div className="task-sidebar-container">{/*TODO*/}</div>
      </div>
    </dialog>
  )
}
