import { useState } from "react"
import { TaskPreview } from "./groups/tasks/TaskPreview"
import { updateCurrentBoard } from "../store/board.actions"
import { TaskDetailsSidebar } from "./TaskDetails/TaskSideBtnActions"

export function TaskQuickEdit({ groupId, task, boundaries, setTaskQuickEdit }) {
  const [titleToEdit, setTitleToEdit] = useState(task.title)
  //TODO - Check X position
  // console.log("boundaries", boundaries)
  // console.log("task", task)
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

  async function onUpdateTask({ key, value }) {
    updateCurrentBoard(groupId, task.id, {
      key,
      value,
    })
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
      <div className="task-quick-edit-menu">
        <TaskDetailsSidebar task={task} onUpdateTask={onUpdateTask} />
      </div>
      <button onClick={onSaveTitleTask}>Save</button>
    </div>
  )
}
