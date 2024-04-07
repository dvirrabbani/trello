import { useState } from "react"
import { TaskPreview } from "./groups/tasks/TaskPreview"
import { Modal } from "./Modal"
import { updateCurrentBoard } from "../store/board.actions"

export function TaskQuickEdit({ groupId, task, boundaries, setTaskQuickEdit }) {
  const [titleToEdit, setTitleToEdit] = useState(task.title)

  console.log("boundaries", boundaries)
  console.log("task", task)
  const style = {
    top: boundaries.y,
    left: boundaries.x,
  }

  function onSaveTitleTask() {
    updateCurrentBoard(groupId, task.id, {
      key: "title",
      value: titleToEdit,
    })

    setTaskQuickEdit(null)
  }

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="task-quick-edit"
      style={style}
    >
      <TaskPreview
        groupId={groupId}
        task={task}
        titleToEdit={titleToEdit}
        setTitleToEdit={setTitleToEdit}
        isQuickEditParent
      />
      <button onClick={onSaveTitleTask}>Save</button>
    </div>
  )
}
