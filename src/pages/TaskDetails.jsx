import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { boardService } from "../services/board.service"
import SvgIcon from "../cmps/SvgIcon"
import { Button } from "../cmps/Button"
import { useForm } from "../customHooks/useForm"
import { updateBoard } from "../store/board.actions"
import { useSelector } from "react-redux"

export function TaskDetails() {
  const ref = useRef()
  const params = useParams()
  const board = useSelector((storeState) => storeState.boardModule.board)
  const { boardId, groupId, taskId } = params
  const [task, setTask] = useState(null)
  const [fields, setFields, handleChange] = useForm({
    description: "",
  })

  useEffect(() => {
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

  // TODO - replace with update function
  async function onAddDescription() {
    // const { description } = fields
    await updateBoard(board, groupId, taskId, {
      key: "description",
      value: "test",
    })
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
          <section className="main-header">
            <div className="main-header-card">{/*TODO*/}</div>
            <div className="main-header-card">{/*TODO*/}</div>
            <div className="main-header-card">{/*TODO*/}</div>
          </section>
          {/* Task CheckList */}
          <section className="task-checklist-container">{/*TODO*/}</section>
          {/* Task Description */}
          <section className="task-description-container">
            <h3 className="task-description-title flex">
              <SvgIcon iconName="description" /> Description
            </h3>
            {!task.description && (
              <Button>Add a more details description... </Button>
            )}
            {/* TODO replace with text area */}
            <input
              name="description"
              onChange={handleChange}
              value={fields.value}
            />
            <button onClick={onAddDescription}>Save</button>
            {task.description && (
              <pre className="task-description">{task.description}</pre>
            )}
          </section>
          {/* Task Attachments */}
          <section className="task-attachments-container">{/*TODO*/}</section>
          {/* Task Activity */}
          <section className="task-activity-container">{/*TODO*/}</section>
        </div>
        {/* Task Sidebar */}
        <section className="task-sidebar-container">{/*TODO*/}</section>
      </div>
    </dialog>
  )
}
