import { useState } from "react"
import { Button } from "./Button"
import { DynamicTaskPopover } from "./DynamicTaskPopover/DynamicTaskPopover"
import SvgIcon from "./SvgIcon"

export function TaskSideBtnActions({ btnPopoverDataList, task, onUpdateTask }) {
  const [popover, setPopover] = useState(null)

  function onClose() {
    setPopover(false)
  }
  function onClick(ev, popoverType) {
    ev.preventDefault()
    // Close Current popover
    if (popover?.type === popoverType) {
      setPopover(null)
    } // Open Correspond popover
    else {
      const currentPopover = btnPopoverDataList.find(
        (item) => item.type === popoverType
      )

      setPopover(() => currentPopover)
    }
  }
  return (
    <div className="task-side-btn-actions">
      {btnPopoverDataList.map((item) => {
        return (
          <Button
            key={item.type}
            variant="contained"
            onClick={(ev) => {
              onClick(ev, item.type)
            }}
          >
            <SvgIcon iconName={item.iconName} />
            <span>{item.title}</span>
          </Button>
        )
      })}
      {popover && (
        <DynamicTaskPopover
          type={popover.type}
          title={popover.title}
          task={task}
          onClose={onClose}
          onUpdateTask={onUpdateTask}
        />
      )}
    </div>
  )
}
