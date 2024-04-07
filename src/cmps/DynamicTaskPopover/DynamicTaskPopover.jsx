import { Button } from "../Button"
import SvgIcon from "../SvgIcon"
import { TaskPopoverCheckList } from "./TaskPopoverCheckList"
import { TaskPopoverLabel } from "./TaskPopoverLabel"
import { TaskPopoverMembers } from "./TaskPopoverMembers"

export function DynamicTaskPopover(props) {
  const { type, title, onClose } = props

  function getPopoverContentType() {
    switch (type) {
      case "Members":
        return <TaskPopoverMembers {...props} />
      case "Labels":
        return <TaskPopoverLabel {...props} />
      case "CheckList":
        return <TaskPopoverCheckList {...props} />
      default:
        return
    }
  }

  return (
    <div className="dynamic-task-popover">
      <div className="popover-header flex align-center justify-between">
        <div className="popover-title">{title}</div>
        <div className="popover-close" onClick={onClose}>
          <Button>
            <SvgIcon iconName={"close"} />
          </Button>
        </div>
      </div>
      <div className="popover-content">{getPopoverContentType()}</div>
    </div>
  )
}
