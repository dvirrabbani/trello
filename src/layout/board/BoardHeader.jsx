import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import SvgIcon from "../../cmps/SvgIcon"
import { NotificationBell } from "../../cmps/NotificationBell"
import { BoardSearchInput } from "../../cmps/BoardSearchInput"
import { AddBoardButton } from "../../cmps/AddBoardButton"
import { SelectStarredBoardsButton } from "../../cmps/SelectStarredBoardsButton"
import { useEffect, useState } from "react"
import {
  SOCKET_EVENT_NOTIFICATION,
  socketService,
} from "../../services/socket.service"
import { ProfilePrefButton } from "../../cmps/ProfilePrefButton"
import useViewportWidth from "../../customHooks/useViewportWidth"
import { Button } from "../../cmps/Button"

export function BoardHeader() {
  const user = useSelector((storeState) => storeState.userModule.user)
  const params = useParams()
  const [notification, setNotification] = useState(false)
  const viewportWidth = useViewportWidth()
  const isMobileViewportWidth = viewportWidth < 768

  useEffect(() => {
    if (params.boardId) {
      socketService.on(SOCKET_EVENT_NOTIFICATION, (notification) => {
        setNotification(true)
      })
    }
    return () => {
      if (params.boardId) {
        socketService.off(SOCKET_EVENT_NOTIFICATION)
      }
    }
  }, [params.boardId])

  return (
    <header className="board-header">
      <div className="flex">
        <div className="buttons-list">
          <Link to={"/board"} className="logo-btn">
            <div className="logo"></div>
          </Link>
          {!isMobileViewportWidth && <SelectStarredBoardsButton />}

          <AddBoardButton
            variant={!params.boardId ? "primary" : undefined}
            title={!isMobileViewportWidth ? "Create" : ""}
            iconName={isMobileViewportWidth ? "plus" : ""}
          />
        </div>
      </div>

      <div className="pref">
        {!isMobileViewportWidth ? (
          <BoardSearchInput />
        ) : (
          <Button
            variant="link"
            shape="circle"
            className={"board-header-search-button"}
          >
            <SvgIcon iconName={"search"} size={"sm"} />
          </Button>
        )}
        <NotificationBell
          notification={notification}
          setNotification={setNotification}
        />
        <ProfilePrefButton member={user} />
      </div>
    </header>
  )
}
