import { useSelector } from "react-redux"
import SvgIcon from "./SvgIcon"
import { useState } from "react"
import { Button } from "./Button"
import Popover from "@mui/material/Popover"
import { Activity } from "./TaskDetails/Activity"
import { backgrounds } from "polished"

export function NotificationBell({ notification, setNotification }) {
  const activities = useSelector(
    (storeState) => storeState.boardModule?.board?.activities
  )
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    setNotification(false)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const isPopoverOpen = Boolean(anchorEl)
  const popoverId = open ? "activities-popover-id" : undefined

  return (
    <div className="notification-bell">
      <Button shape="circle" onClick={handleClick} className={"dynamic-button"}>
        {notification && <div className="notification"></div>}
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
        transitionDuration={0}
      >
        <div className="content">
          <ul className="activities-popover clean-list">
            {activities?.map((activity) => {
              return (
                <Activity
                  key={activity.id}
                  activity={activity}
                  profileSize={"lg"}
                />
              )
            })}
          </ul>
        </div>
      </Popover>
    </div>
  )
}
