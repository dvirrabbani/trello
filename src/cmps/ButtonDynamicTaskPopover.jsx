import { useState } from "react"
import { Popover } from "./Popover"
import { Button } from "./Button"
import SvgIcon from "./SvgIcon"
import { DynamicTaskPopover } from "./DynamicTaskPopover/DynamicTaskPopover"

export function ButtonDynamicTaskPopover({
  iconName,
  title,
  type,
  popoverId,
  popoverTitle,
  style,
  variant,
  shape,
  disabled,
  task,
  onUpdateTask,
  groupId,
}) {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const isPopoverOpen = Boolean(anchorEl)

  return (
    <article className="button-popover-task-dynamic">
      <Button
        variant={variant}
        shape={shape}
        disabled={disabled}
        onClick={handleClick}
        style={style}
      >
        <SvgIcon iconName={iconName} />
        {title && <span>{title}</span>}
      </Button>
      <Popover
        id={isPopoverOpen ? popoverId : undefined}
        open={isPopoverOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        title={popoverTitle}
      >
        <DynamicTaskPopover
          type={type}
          task={task}
          onUpdateTask={onUpdateTask}
          groupId={groupId}
          onClose={handleClose}
        />
      </Popover>
    </article>
  )
}
