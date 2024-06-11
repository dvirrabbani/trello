import { useRef, useState } from "react"
import { updateCurrentBoard } from "../../store/board.actions"
import SvgIcon from "../SvgIcon"
import { AddItemForm } from "../AddItemForm"
import { GroupActions } from "./GroupActions"
import { TaskList } from "./Task/TaskList"
import { Popover } from "../Popover"
import { activityService } from "../../services/acitivity.service"
// import { boardService } from "../../../services/board.service.local"
import { boardService } from "../../services/board.service"

export function GroupPreview({ group, deleteGroup }) {
  const [groupToEdit, setGroupToEdit] = useState(group)
  const [displayAddItem, setDisplayAddItem] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const groupTitleH3 = useRef(null)
  const groupTitleTextarea = useRef(null)
  const isPopoverOpen = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  function handleChange({ target }) {
    let { value, type, name } = target
    setGroupToEdit((prevGroup) => ({ ...prevGroup, [name]: value }))
  }

  function onFocusOut(e) {
    groupTitleH3.current.classList.remove("hide")
    groupTitleTextarea.current.classList.add("hide")
    if (groupToEdit.title === group.title || groupToEdit === "") return
    updateCurrentBoard(group.id, null, {
      key: "title",
      value: groupToEdit.title,
    })
  }

  function handleMouseUp(e) {
    groupTitleH3.current.classList.add("hide")
    groupTitleTextarea.current.classList.remove("hide")
    groupTitleTextarea.current.focus()
  }

  function onAddTask(e, inputVal) {
    e.preventDefault()
    if (!inputVal || inputVal == "") return
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

  function onToggleCollapse() {
    setIsCollapsed((prev) => !prev)
  }

  if (isCollapsed) {
    return (
      <div className="group-preview collapse" onClick={onToggleCollapse}>
        <button className="button icon-btn">
          <SvgIcon iconName="expand" size={"md"} className="svg-icon" />
        </button>
        <h3 className="group-title">{groupToEdit.title}</h3>
        <div className="tasks-count">{group.tasks.length}</div>
      </div>
    )
  } else {
    return (
      <div className="group-preview">
        <div className="group-header flex justify-between">
          <div className="group-title-container">
            <h3
              className="group-title"
              onMouseUp={handleMouseUp}
              ref={groupTitleH3}
            >
              {group.title}
            </h3>
            <textarea
              value={groupToEdit.title}
              onChange={handleChange}
              className="group-title hide"
              spellCheck="false"
              name="title"
              onBlur={onFocusOut}
              onFocus={(e) => e.currentTarget.select()}
              ref={groupTitleTextarea}
            >
              {groupToEdit.title}
            </textarea>
          </div>
          <button className="button icon-btn" onClick={onToggleCollapse}>
            <SvgIcon iconName="collapse" size={"md"} className="svg-icon" />
          </button>
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
}
