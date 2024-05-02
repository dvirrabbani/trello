import { Link } from "react-router-dom"
import SvgIcon from "../SvgIcon"
import { ButtonDynamicTaskPopover } from "../ButtonDynamicTaskPopover"

export function TaskDetailsHeader({ params, task, onUpdateTask }) {
  const editableAttrs = {
    suppressContentEditableWarning: true,
    contentEditable: true,
    onBlur: onSaveTaskTitle,
    onKeyDown: onKeyPressed,
  }

  function onSaveTaskTitle(ev) {
    const titleToSave = ev.target.innerText.toString().trim()

    ev.target.blur()
    onUpdateTask({ key: "title", value: titleToSave })
  }

  function onKeyPressed(ev) {
    if (ev.key === "Enter") {
      onSaveTaskTitle(ev)
    }
  }

  return (
    <header className="task-details-header">
      {(task?.style?.bgImg || task?.style?.bgColor) && (
        <div
          className={`task-cover ${
            task.style?.bgImg ? "task-cover-img" : "task-cover-color"
          }`}
          style={{
            backgroundColor: task.style?.bgColor || "",
            backgroundImage: task.style?.bgImg
              ? `url(${task.style.bgImg})`
              : "",
          }}
        >
          <menu>
            <ButtonDynamicTaskPopover
              title={"Cover"}
              iconName={"cover"}
              onUpdateTask={onUpdateTask}
              type={"Cover"}
              popoverTitle={"Cover"}
              popoverId="popover-cover-id"
            />
          </menu>
        </div>
      )}
      <div className="task-header">
        <SvgIcon iconName={"taskWindow"} />

        <h2 className="task-title" {...editableAttrs}>
          {task.title}
        </h2>
      </div>
      <Link
        className="close-button button shape-circle"
        to={`/board/${params.boardId}`}
      >
        <SvgIcon size={"md"} iconName={"close"} />
      </Link>
    </header>
  )
}
