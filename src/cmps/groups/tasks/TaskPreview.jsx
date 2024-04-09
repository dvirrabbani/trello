import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import SvgIcon from "../../SvgIcon"
import { eventBus } from "../../../services/event-bus.service"
import { utilService } from "../../../services/util.service"

export function TaskPreview({
  groupId,
  task,
  titleToEdit,
  setTitleToEdit,
  isQuickEditParent,
}) {
  const navigate = useNavigate()

  function coverStyle(isFull, background) {
    const isUrl =
      background.startsWith("http://") || background.startsWith("https://")
    let coverStyle = {}

    switch (true) {
      case isFull && isUrl:
        coverStyle = { height: "150px" }
        break
      case !isFull && isUrl:
        coverStyle = { height: "200px", backgroundImage: `url(${background})` }
        break
      case !isUrl:
        coverStyle = { height: "36px", backgroundColor: background }
    }
    return coverStyle
  }

  function cardStyle(background) {
    const isUrl =
      background.startsWith("http://") || background.startsWith("https://")
    return isUrl
      ? { backgroundImage: `url(${background})` }
      : { backgroundColor: background }
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

  return (
    <div
      className="task-preview"
      style={
        task.style?.background && task?.style?.isFull
          ? cardStyle(task.style.background)
          : {}
      }
      onClick={isQuickEditParent ? null : onTaskClick}
    >
      <button className="task-edit" onClick={onQuickEditTask}>
        <SvgIcon iconName="edit" />
      </button>
      {task.style?.background && (
        <div
          className="task-preview-cover"
          style={coverStyle(task.style.isFull, task.style.background)}
        ></div>
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
          >
            {titleToEdit}
          </textarea>
        ) : (
          <div className="task-title">{task.title}</div>
        )}

        <div className="task-preview-footer flex justify-between">
          <div className="task-actions-badges flex">
            {task.dueDate && <DueDateBadge dueDate={task.dueDate} />}
            {task.description && (
              <div className="action-badge">
                <SvgIcon iconName="description" />
              </div>
            )}
            {task.checklists && (
              <ChecklistsBadge checklists={task.checklists} />
            )}
            {task.attachments && (
              <div className="action-badge">
                <SvgIcon iconName="attachment" />
                <span>{task.attachments.length}</span>
              </div>
            )}
          </div>
          {task.memberIds && <TaskMembers memberIds={task.memberIds} />}
        </div>
      </div>
    </div>
  )
}

function DueDateBadge({ dueDate }) {
  const dueDateObj = new Date(dueDate)
  let dueDateStr = dueDateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })
  const currentDate = new Date()
  const oneYearAgo = new Date(
    currentDate.setFullYear(currentDate.getFullYear() - 1)
  )

  if (dueDateObj < oneYearAgo) {
    dueDateStr = dueDateObj.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const { status, style } = utilService.calculateDueDateStatus(dueDate)
  return (
    <div className="action-badge" style={style}>
      <SvgIcon iconName="clock" />
      <span>{dueDateStr}</span>
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

  const allTasksDone = totalTodos === totalDoneTodos
  const badgeClassName = allTasksDone ? "complete" : ""

  return (
    <div className={`action-badge ${badgeClassName}`}>
      <SvgIcon iconName="checkbox" />
      <span>{totalDoneTodos}</span>/<span>{totalTodos}</span>
    </div>
  )
}

function TaskMembers({ memberIds }) {
  const board = useSelector((storeState) => storeState.boardModule.board)
  const boardMembers = board.members
  return (
    <div className="task-members">
      {memberIds.map((memberId) => (
        <TaskMember
          key={memberId}
          boardMembers={boardMembers}
          memberId={memberId}
        />
      ))}
    </div>
  )
}

function TaskMember({ boardMembers, memberId }) {
  const memberImg = boardMembers.find(
    (member) => member._id === memberId
  ).imgUrl
  const style = {
    backgroundImage: `url(${memberImg})`,
  }
  return <div className="task-member" style={style}></div>
}

import { useState } from "react"

function TaskLabels({ labelIds }) {
  const board = useSelector((storeState) => storeState.boardModule.board)
  const boardLabels = board.labels
  const [labelsExpand, setLabelsExpand] = useState(true)
  const className = labelsExpand ? "expand" : "collapsed"

  return (
    <div className="task-labels">
      {labelIds.map((labelId) => {
        const label = boardLabels.find((label) => label.id == labelId)
        return (
          <TaskLabel
            key={label.id}
            color={label.color}
            title={label.title}
            setLabelsExpand={setLabelsExpand}
            className={className}
          />
        )
      })}
    </div>
  )
}

function TaskLabel({ color, title, setLabelsExpand, className }) {
  function toggleLabel(e) {
    e.stopPropagation()
    setLabelsExpand((prevLabelsExpand) => !prevLabelsExpand)
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
