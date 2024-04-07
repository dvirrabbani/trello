import { useState } from "react"
import { Button } from "../Button"
import SvgIcon from "../SvgIcon"
import { DynamicTaskPopover } from "../DynamicTaskPopover/DynamicTaskPopover"

export function TaskDetailsSidebar({ task, onUpdateTask }) {
  const [popover, setPopover] = useState(null)

  const btnPopoverDataList = [
    {
      iconName: "profile",
      type: "Members",
      title: "Members",
    },
    {
      iconName: "label",
      type: "Labels",
      title: "Labels",
    },
    {
      iconName: "checkbox",
      type: "CheckList",
      title: "CheckList",
    },
    {
      iconName: "clock",
      type: "Dates",
      title: "Dates",
    },
  ]

  function onClose(params) {
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
    <section className="task-details-sidebar">
      <h4>Add to card</h4>
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
    </section>
  )
}
