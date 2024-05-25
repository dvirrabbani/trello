import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { TaskPreview } from "../Group/Task/TaskPreview"
import { updateCurrentBoard } from "../../store/board.actions"
import { TaskSideBtnActions } from "../TaskSideBtnActions"
import SvgIcon from "../SvgIcon"

export function TaskQuickEdit({ groupId, task, boundaries, setTaskQuickEdit }) {
  const [titleToEdit, setTitleToEdit] = useState(task.title)
  const navigate = useNavigate()
  //TODO - Check X position
  // console.log("boundaries", boundaries)
  // console.log("task", task)
  const style = {
    top: boundaries.y,
    left: boundaries.x,
  }

  const btnPopoverDataList = [
    {
      iconName: "profile",
      type: "Members",
      title: "Members",
      popoverTitle: "Members",
      popoverId: "popover-members-id",
    },
    {
      iconName: "label",
      type: "Labels",
      title: "Labels",
      popoverTitle: "Members",
      popoverId: "popover-labels-id",
    },
    {
      iconName: "clock",
      type: "Dates",
      title: "Dates",
      popoverTitle: "Members",
      popoverId: "popover-dates-id",
    },
  ]

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

  function onOpenTask() {
    setTaskQuickEdit(null)
    navigate(`${groupId}/${task.id}`)
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
        <button className="button" onClick={onOpenTask}>
          <SvgIcon iconName="task" />
          Open card
        </button>
        <TaskSideBtnActions
          btnPopoverDataList={btnPopoverDataList}
          task={task}
          onUpdateTask={onUpdateTask}
        />
      </div>
      <button
        className="save-btn button variant-primary"
        onClick={onSaveTitleTask}
      >
        Save
      </button>
    </div>
  )
}
