import { useSelector } from "react-redux"
import { json, useNavigate } from "react-router-dom"
import { eventBus } from "../../../services/event-bus.service"
import { utilService } from "../../../services/util.service"
import {
  toggleLabels,
  updateCurrentBoard,
  updateTaskMembers,
} from "../../../store/board.actions"
import SvgIcon from "../../SvgIcon"
import { useEffect, useState } from "react"
import { ProfileImg } from "../../ProfileImg"
import { uiService } from "../../../services/ui.service"
import dayjs from "dayjs"

export function TaskPreview({
  groupId,
  task,
  titleToEdit,
  setTitleToEdit,
  isQuickEditParent,
}) {
  const navigate = useNavigate()
  const [imgDimension, setImgDimension] = useState({})
  const isCoverFull = task.style?.isCoverFull

  useEffect(() => {
    if (task.style?.bgImg) {
      utilService
        .getImageMetaData(task.style.bgImg)
        .then((imgDimension) => setImgDimension(imgDimension))
    }
  }, [])

  function onDropMember(groupId, task, e) {
    const member = JSON.parse(e.dataTransfer.getData("member"))
    const members = task.members || []

    if (!member) return
    if (members.some((member) => member.id === member)) return

    updateTaskMembers(member, task.members, task.title, onUpdateTask)
  }

  function onQuickEditTask(e) {
    e.stopPropagation()
    const taskInfo = {
      groupId,
      task,
      boundaries: e.currentTarget.parentElement.getBoundingClientRect(),
    }
    eventBus.emit("quickEditTask", taskInfo)
  }

  function onTaskClick() {
    navigate(`${groupId}/${task.id}`)
  }

  function handleChange({ target }) {
    let { value, type, name } = target
    setTitleToEdit(value)
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

  function fullCoverStyle() {
    const { bgColor, bgImg } = task.style
    let style = {
      backgroundColor: bgColor,
    }

    if (bgImg) {
      style.backgroundImage = `url(${bgImg})`
      style.backgroundSize = "cover"
      style.backgroundPosition = "center"
      style.height = 256 / imgDimension.aspectRatio || 0
    }
    return style
  }

  function taskClasses() {
    let classes = "task-preview"

    if (isCoverFull && !isQuickEditParent) {
      classes += " full-cover"

      if (task.style?.bgImg) {
        classes += " full-cover-img"
      }
    }

    return classes
  }

  return (
    <div
      style={isCoverFull && !isQuickEditParent ? fullCoverStyle() : {}}
      className={taskClasses()}
      onClick={isQuickEditParent ? null : onTaskClick}
      onDrop={(e) => onDropMember(groupId, task, e)}
      onDragOver={(e) => e.preventDefault()}
    >
      <button
        className="button shape-circle task-edit-btn"
        onClick={onQuickEditTask}
      >
        <SvgIcon iconName="edit" />
      </button>
      {task.style && (!isCoverFull || isQuickEditParent) && (
        <SemiCover style={task.style} />
      )}
      <div className="task-preview-main">
        {task.labelIds && <TaskLabels labelIds={task.labelIds} />}
        {isQuickEditParent ? (
          <textarea
            name="title"
            spellCheck="false"
            value={titleToEdit}
            onChange={handleChange}
            autoFocus
            disabled={!isQuickEditParent}
            onFocus={(e) => e.currentTarget.select()}
          >
            {titleToEdit}
          </textarea>
        ) : (
          <div className="task-title">{task.title}</div>
        )}

        <div className="task-preview-footer">
          <div className="task-actions-badges flex">
            {task.dueDate && (
              <DueDateBadge
                dueDate={task.dueDate}
                onUpdateTask={onUpdateTask}
              />
            )}
            {task.description && (
              <div className="action-badge">
                <SvgIcon iconName="description" />
              </div>
            )}
            {task.attachments?.length > 0 && (
              <div className="action-badge">
                <SvgIcon iconName="attachment" />
                <span>{task.attachments.length}</span>
              </div>
            )}
            {task.checklists?.length > 0 && (
              <ChecklistsBadge checklists={task.checklists} />
            )}
          </div>
          {task.members.length > 0 && <TaskMembers members={task.members} />}
        </div>
      </div>
    </div>
  )
}

function DueDateBadge({ dueDate, onUpdateTask }) {
  const { date, isCompleted } = dueDate

  const formatDueDate = (date) => {
    const currentYear = dayjs().year()
    const dateYear = dayjs(date).year()

    if (dateYear < currentYear) {
      return dayjs(date).format("MMM D, YYYY")
    } else {
      return dayjs(date).format("MMM D")
    }
  }

  const { className } = uiService.getDueDateStatusAndClassName(
    date,
    isCompleted
  )

  function onClickDueDate(e) {
    e.stopPropagation()
    onUpdateTask({ key: "dueDate", value: { date, isCompleted: !isCompleted } })
  }

  return (
    <div
      className={`action-badge dueDate-badge ${className}`}
      onClick={onClickDueDate}
    >
      <span className="dueDate-icon-container">
        <span className="icon-clock">
          <SvgIcon iconName="clock" />
        </span>
        <span className="icon-checkbox">
          <SvgIcon iconName={isCompleted ? "checkbox" : "unChecked"} />
        </span>
      </span>
      <span>{formatDueDate(date)}</span>
    </div>
  )
}

function ChecklistsBadge({ checklists }) {
  const totalTodos = checklists.reduce((accumulator, checklist) => {
    return accumulator + checklist.todos.length
  }, 0)

  const totalDoneTodos = checklists.reduce((accumulator, checklist) => {
    return accumulator + checklist.todos.filter((todo) => todo.isDone).length
  }, 0)

  const allTasksDone = totalTodos === totalDoneTodos && totalTodos !== 0
  const badgeClassName = allTasksDone ? "complete" : ""

  return (
    <div className={`action-badge checklist ${badgeClassName}`}>
      <SvgIcon iconName="checkbox" />
      <span className="todo-done">{totalDoneTodos}</span>/
      <span className="todo-total">{totalTodos}</span>
    </div>
  )
}

function TaskMembers({ members }) {
  return (
    <div className="task-members">
      {members.map((member) => (
        <div key={member.id} className="task-member">
          <ProfileImg member={member} />
        </div>
      ))}
    </div>
  )
}

function TaskLabels({ labelIds }) {
  const board = useSelector((storeState) => storeState.boardModule.board)
  const boardLabels = board.labels

  return (
    <div className="task-labels">
      {labelIds.map((labelId) => {
        const label = boardLabels.find((label) => label.id == labelId)

        if (!label) {
          return null
        }

        return (
          <TaskLabel key={label.id} color={label.bgColor} title={label.title} />
        )
      })}
    </div>
  )
}

function TaskLabel({ color, title }) {
  const labelsExpand = useSelector(
    (storeState) => storeState.boardModule.labelsExpand
  )
  const className = labelsExpand ? "expand" : "collapsed"

  function toggleLabel(e) {
    e.stopPropagation()
    toggleLabels()
  }

  return (
    <span
      style={{ background: color }}
      className={`${className} task-label`}
      onClick={toggleLabel}
    >
      {title}
    </span>
  )
}

function SemiCover({ style }) {
  const { bgColor, bgImg } = style
  return (
    <div className="semi-cover flex" style={{ backgroundColor: bgColor }}>
      {bgImg && <img src={bgImg} width={300} alt="" />}
    </div>
  )
}
