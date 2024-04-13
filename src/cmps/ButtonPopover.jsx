import { useState } from "react"
import { Popover } from "./Popover"
import { Button } from "./Button"
import SvgIcon from "./SvgIcon"

export function ButtonPopover({
  iconName,
  title,
  popoverId,
  popoverTitle,
  children,
  style,
  variant,
  shape,
  disabled,
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
    <article className="btn-popover">
      <Button
        variant={variant}
        shape={shape}
        disabled={disabled}
        onClick={handleClick}
        style={style}
      >
        <SvgIcon iconName={iconName} />
        <span>{title}</span>
      </Button>
      <Popover
        id={isPopoverOpen ? popoverId : undefined}
        open={isPopoverOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        title={popoverTitle}
      >
        {children}
      </Popover>
    </article>
  )
}
