import { useState } from "react"
import { updateCurrentBoard } from "../../store/board.actions"
import { utilService } from "../../services/util.service"
import SvgIcon from "../SvgIcon"
import { AddItemForm } from "../AddItemForm"
import { GroupActions } from "./GroupActions"
import { TaskList } from "./tasks/TaskList"
import { Popover } from "../Popover"
import { activityService } from "../../services/acitivity.service"
import { boardService } from "../../services/board.service"

export function GroupPreview({ group, deleteGroup }) {
  const [groupToEdit, setGroupToEdit] = useState(group)
  const [displayAddItem, setDisplayAddItem] = useState(false)

  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const isPopoverOpen = Boolean(anchorEl)

  function handleChange({ target }) {
    let { value, type, name } = target
    setGroupToEdit((prevGroup) => ({ ...prevGroup, [name]: value }))
  }

  function onFocusOut() {
    updateCurrentBoard(group.id, null, {
      key: "title",
      value: groupToEdit.title,
    })
  }

  function onAddTask(inputVal) {
    const task = boardService.createNewTask()
    task.title = inputVal
    const tasks = [...group.tasks, task]
    updateCurrentBoard(
      group.id,
      null,
      {
        key: "tasks",
        value: tasks,
      },
      {
        type: activityService.activityTypes.addCard,
      }
    )
    setDisplayAddItem(false)
  }

  function onDeleteGroup(groupId) {
    deleteGroup(groupId)
  }

  return (
    <div className="group-preview">
      <div className="group-header flex justify-between">
        <textarea
          value={groupToEdit.title}
          onChange={handleChange}
          className="group-title full"
          spellCheck="false"
          name="title"
          onBlur={onFocusOut}
          onFocus={(e) => e.currentTarget.select()}
        >
          {groupToEdit.title}
        </textarea>
        <button className="button group-edit-btn" onClick={handleClick}>
          <SvgIcon iconName="more" className="svg-icon" />
        </button>
        <Popover
          id={isPopoverOpen ? "groupActions" : undefined}
          open={isPopoverOpen}
          anchorEl={anchorEl}
          onClose={handleClose}
          title="List actions"
        >
          <GroupActions groupId={group.id} onDeleteGroup={onDeleteGroup} />
        </Popover>
      </div>
      <TaskList group={group} />
      <div className="group-footer flex justify-between">
        {displayAddItem ? (
          <AddItemForm
            onAddItem={onAddTask}
            setDisplayAddItem={setDisplayAddItem}
            type="task"
          />
        ) : (
          <>
            <button
              className="button add-task-btn"
              onClick={() => setDisplayAddItem(true)}
            >
              <SvgIcon iconName="plus" />
              <span>Add a card</span>
            </button>
            <button className="button icon-btn">
              <SvgIcon iconName="taskTemplate" />
            </button>
          </>
        )}
      </div>
    </div>
  )
}
