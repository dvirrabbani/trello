import { useState } from "react"
import { useSelector } from "react-redux"
import { logout } from "../store/user.actions"
import { Popover } from "@mui/material"
import { Button } from "./Button"
import { ProfileImg } from "./ProfileImg"

export function ProfilePrefButton() {
  const user = useSelector((storeState) => storeState.userModule.user)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (ev) => {
    setAnchorEl(ev.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  async function onLogout() {
    logout()
  }

  const open = Boolean(anchorEl)
  const id = open ? "profile-pref-popover-id" : undefined

  return (
    <div className="profile-pref-button">
      <Button shape="circle" onClick={handleClick}>
        <ProfileImg member={user} />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        transitionDuration={0}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className="content">
          <h2>Account</h2>
          <div className="account-profile">
            <ProfileImg member={user} size={"xl"} />
            <div className="user-details flex column">
              <div className="user-name">{user.fullName}</div>
              <div className="user-email">{user.email}</div>
            </div>
          </div>
          <div className="divider"></div>
          <Button onClick={onLogout}>Logout</Button>
        </div>
      </Popover>
    </div>
  )
}
