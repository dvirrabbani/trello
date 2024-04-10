import { useSelector } from "react-redux"
import SvgIcon from "./SvgIcon"
import { useState } from "react"
import { Button } from "./Button"
import Popover from "@mui/material/Popover"
import { ActivitiesPopover } from "./ActivitiesPopover"

export function NotificationBell() {
  const board = useSelector((storeState) => storeState.boardModule.board)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const isPopoverOpen = Boolean(anchorEl)
  const popoverId = open ? "activities-popover-id" : undefined

  return (
    <div className="notification-bell">
      <Button shape="circle" onClick={handleClick}>
        <SvgIcon iconName={"notification"} size={"md"} />
      </Button>
      {/* Board activities popover */}
      <Popover
        id={popoverId}
        open={isPopoverOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <div className="content">
          {board?.activities.length > 0 && (
            <ActivitiesPopover activities={board?.activities} />
          )}
        </div>
      </Popover>
    </div>
  )
}
