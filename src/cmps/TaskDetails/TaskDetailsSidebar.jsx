import { useState } from "react"
import { Button } from "../Button"
import SvgIcon from "../SvgIcon"
// import { TaskPopover } from "../TaskPopover/TaskPopover"
import { DynamicTaskPopover } from "../DynamicTaskPopover/DynamicTaskPopover"

export function TaskDetailsSidebar({
  task,
  labels,
  onUpdateTask,
  members,
  onUpdateMembers,
}) {
  const [popover, setPopover] = useState(null)
  const [popoverType, setPopoverType] = useState()

  const btnPopoverDataList = [
    {
      iconName: "profile",
      title: "Members",
      popover: {
        type: "Members",
        title: "Members",
        props: {
          members,
          onUpdateMembers,
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
        },
      },
    },
    {
      iconName: "checkbox",
      title: "CheckList",
      popover: {
        title: "Add to CheckList",
        type: "CheckList",
        props: {
          checklists: task.checklists,
        },
      },
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
        (item) => item.popover.type === popoverType
      )

      setPopover(() => currentPopover)
      // setPopoverType(popoverType)
    }
  }
  return (
    <section className="task-details-sidebar">
      <h4>Add to card</h4>
      {btnPopoverDataList.map((item) => {
        return (
          <Button
            key={item.popover.iconName}
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
      {popover && (
        <DynamicTaskPopover
          type={popover.popover.type}
          title={popover.title}
          task={task}
          onClose={onClose}
          onUpdateTask={onUpdateTask}
        />
      )}
    </section>
  )
}
