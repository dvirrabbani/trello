import MuiPopover from "@mui/material/Popover"
import { Button } from "./Button"
import SvgIcon from "./SvgIcon"

export function Popover({
  id,
  open,
  anchorEl,
  onClose,
  anchorOrigin = {
    vertical: "bottom",
    horizontal: "left",
  },
  children,
  title,
}) {
  return (
    <MuiPopover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
      className={"popover"}
    >
      <header className="popover-header flex align-center justify-between">
        <div className="popover-title">{title}</div>
        <div className="popover-close" onClick={onClose}>
          <Button>
            <SvgIcon iconName={"close"} />
          </Button>
        </div>
      </header>
      <main className="popover-content">{children}</main>
    </MuiPopover>
  )
}
