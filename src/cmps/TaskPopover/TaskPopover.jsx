import { Button } from "../Button"
import SvgIcon from "../SvgIcon"
import { TaskPopoverCheckList } from "./TaskPopoverCheckList"
import { TaskPopoverLabel } from "./TaskPopoverLabel"
import { TaskPopoverMembers } from "./TaskPopoverMembers"

export function TaskPopover(props) {
  function getPopoverContentType() {
    switch (props.popover?.type) {
      case "Members":
        return <TaskPopoverMembers {...props.popover.props} />
      case "Labels":
        return <TaskPopoverLabel {...props.popover.props} />
      case "CheckList":
        return <TaskPopoverCheckList {...props.popover.props} />
      default:
        return
    }
  }

  return (
    <div className="task-popover">
      <div className="popover-header flex align-center justify-between">
        <div className="popover-title">{props.popover.title}</div>
        <div className="popover-close" onClick={() => props.setPopover(null)}>
          <Button>
            <SvgIcon iconName={"close"} />
          </Button>
        </div>
      </div>
      <div className="popover-content">{getPopoverContentType(props)}</div>
    </div>
  )
}
