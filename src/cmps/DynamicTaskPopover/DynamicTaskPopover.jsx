import { TaskAttachmentPopover } from "./TaskAttachmentPopover"
import { TaskCoverPopover } from "./TaskCoverPopover"
import { TaskDatesPopover } from "./TaskDatesPopover"
import { TaskPopoverCheckList } from "./TaskPopoverCheckList"
import { TaskPopoverDuplicateTask } from "./TaskPopoverDuplicateTask"
import { TaskPopoverLabel } from "./TaskPopoverLabel/TaskPopoverLabel"
import { TaskPopoverMembers } from "./TaskPopoverMembers"

export function DynamicTaskPopover(props) {
  function getPopoverContentType() {
    switch (props.type) {
      case "Members":
        return <TaskPopoverMembers {...props} />
      case "Labels":
        return <TaskPopoverLabel {...props} />
      case "CheckList":
        return <TaskPopoverCheckList {...props} />
      case "Dates":
        return <TaskDatesPopover {...props} />
      case "Cover":
        return <TaskCoverPopover {...props} />
      case "Attachments":
        return <TaskAttachmentPopover {...props} />
      case "Duplicate":
        return <TaskPopoverDuplicateTask {...props} />
      default:
        return
    }
  }

  return getPopoverContentType()
}
