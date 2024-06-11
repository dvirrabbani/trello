import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { TaskPreview } from "../Group/Task/TaskPreview"
import { updateCurrentBoard } from "../../store/board.actions"
import { TaskSideBtnActions } from "../TaskSideBtnActions"
import SvgIcon from "../SvgIcon"
import { ButtonDynamicTaskPopover } from "../ButtonDynamicTaskPopover"

export function TaskQuickEdit({ groupId, task, boundaries, closeQuickEdit }) {
  const [titleToEdit, setTitleToEdit] = useState(task.title)
  const navigate = useNavigate()

  const style = {
    top: boundaries.y - 48,
    left: boundaries.x,
  }

  const btnPopoverDataList = [
    {
      iconName: "label",
      type: "Labels",
      title: "Labels",
      popoverTitle: "Labels",
      popoverId: "popover-labels-id",
    },
    {
      iconName: "profile",
      type: "Members",
      title: "Change Members",
      popoverTitle: "Members",
      popoverId: "popover-members-id",
    },
    {
      iconName: "cover",
      type: "Cover",
      title: "Change Cover",
      popoverTitle: "Cover",
      popoverId: "popover-cover-id",
    },
    {
      iconName: "clock",
      type: "Dates",
      title: "Edit Dates",
      popoverTitle: "Dates",
      popoverId: "popover-dates-id",
    },
  ]

  function onSaveTitleTask() {
    if (titleToEdit === "") setTitleToEdit(task.title)
    if (titleToEdit === task.title || titleToEdit === "") return
    updateCurrentBoard(groupId, task.id, {
      key: "title",
      value: titleToEdit,
    })
    closeQuickEdit()
  }

  async function onUpdateTask({ key, value }, activity) {
    updateCurrentBoard(
      groupId,
      task.id,
      {
        key,
        value,
      },
      activity
    )
  }

  function onOpenTask() {
    closeQuickEdit()
    navigate(`${groupId}/${task.id}`)
  }

  function onArchiveTask() {
    onUpdateTask({ key: "archivedAt", value: Date.now() })
    closeQuickEdit()
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
        <ButtonDynamicTaskPopover
          iconName={"duplicate"}
          title={"Copy"}
          variant={"contained"}
          popoverId="popover-cover-id"
          popoverTitle={"Copy card"}
          type={"Duplicate"}
          task={task}
          groupId={groupId}
        />
        <button className="button" onClick={onArchiveTask}>
          <SvgIcon iconName="archive" />
          Archive
        </button>
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
