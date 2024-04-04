import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router"
import { useForm } from "../customHooks/useForm"
import { updateCurrentBoard } from "../store/board.actions"
import { useSelector } from "react-redux"
import { TaskDetailsHeader } from "../cmps/TaskDetails/TaskDetailsHeader"
import { TaskDetailsMain } from "../cmps/TaskDetails/TaskDetailsMain"
import { TaskDetailsSidebar } from "../cmps/TaskDetails/TaskDetailsSidebar"

export function TaskDetails() {
  const dialogRef = useRef()
  const params = useParams()
  const { groupId, taskId } = params
  const board = useSelector((storeState) => storeState.boardModule.board)
  const [task, setTask] = useState(null)
  const [fields, setFields, handleChange] = useForm({
    description: "",
  })

  useEffect(() => {
    toggleDialog()
    loadTask()

    return () => {
      setTask(null)
    }
  }, [params.taskId])

  function toggleDialog() {
    if (!dialogRef.current) {
      return
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal()
  }

  async function loadTask() {
    const group = board.groups?.find((g) => g.id === groupId)
    const task = group.tasks?.find((t) => t.id === taskId)
    setTask(() => task)
    setFields(() => ({ ...task }))
  }

  async function onUpdateTask({ key, value }) {
    updateCurrentBoard(groupId, taskId, {
      key,
      value,
    })
  }

  function onUpdateMembers(member) {
    let membersToEdit = []
    if (task?.memberIds) {
      membersToEdit = task?.memberIds?.find((mIdx) => mIdx === member._id)
        ? task.memberIds.filter((mIdx) => mIdx !== member._id)
        : [...task.memberIds, member._id]
    } else {
      membersToEdit = [member]
    }
    updateCurrentBoard(groupId, taskId, {
      key: "memberIds",
      value: [...membersToEdit],
    })
  }

  if (!task) {
    return (
      <dialog ref={dialogRef} className="task-details">
        loading
      </dialog>
    )
  }

  return (
    <dialog ref={dialogRef} className="task-details">
      <TaskDetailsHeader params={params} task={task} />
      <TaskDetailsMain
        onUpdateMembers={onUpdateMembers}
        params={params}
        task={task}
        fields={fields}
        handleChange={handleChange}
        members={board.members}
        onUpdateTask={onUpdateTask}
      />
      <TaskDetailsSidebar />
    </dialog>
  )
}
