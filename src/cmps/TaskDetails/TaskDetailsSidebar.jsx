import { useState } from "react"
import { Button } from "../Button"
import SvgIcon from "../SvgIcon"
import { TaskPopover } from "./TaskPopover/TaskPopover"

export function TaskDetailsSidebar({
  task,
  labels,
  members,
  onUpdateMembers,
  onUpdateTaskLabel,
}) {
  const [popover, setPopover] = useState(null)

  const btnPopoverDataList = [
    {
      iconName: "profile",
      title: "Members",
      popover: {
        title: "Members",
        type: "Members",
        props: {
          members,
          onUpdateMembers,
          setPopover,
        },
      },
    },
    {
      iconName: "label",
      title: "Labels",
      popover: {
        title: "Labels",
        type: "Labels",
        props: {
          labels,
          onUpdateTaskLabel,
          setPopover,
        },
      },
    },
  ]

  function onClick(ev, popoverType) {
    ev.preventDefault()
    // Close Current popover
    if (popover?.type === popoverType) {
      setPopover(null)
    } // Open Correspond popover
    else {
      const currentPopover =
        btnPopoverDataList.find((item) => item.popover.type === popoverType)
          .popover || null

      setPopover(() => currentPopover)
    }
  }
  return (
    <section className="task-details-sidebar">
      <h4>Add to card</h4>
      {btnPopoverDataList.map((item) => {
        return (
          <Button
            key={item.popover.type}
            variant="contained"
            onClick={(ev) => {
              onClick(ev, item.popover.type)
            }}
          >
            <SvgIcon iconName={item.iconName} />
            <span>{item.title}</span>
          </Button>
        )
      })}
      {popover && <TaskPopover popover={popover} setPopover={setPopover} />}
    </section>
  )
}
