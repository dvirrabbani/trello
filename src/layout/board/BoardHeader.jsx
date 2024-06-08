import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import SvgIcon from "../../cmps/SvgIcon"
import { NotificationBell } from "../../cmps/NotificationBell"
import { BoardSearchInput } from "../../cmps/BoardSearchInput"
import { AddBoardButton } from "../../cmps/AddBoardButton"
import { SelectStarredBoardsButton } from "../../cmps/SelectStarredBoardsButton"
import { ProfileImg } from "../../cmps/ProfileImg"
import { useEffect, useState } from "react"
import {
  SOCKET_EVENT_NOTIFICATION,
  socketService,
} from "../../services/socket.service"
import { tr } from "date-fns/locale"

export function BoardHeader() {
  const user = useSelector((storeState) => storeState.userModule.user)
  const params = useParams()
  const [notification, setNotification] = useState(false)

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
          <Link to={"/board"}>
            <SvgIcon iconName={"logo"} size={"lg"} />
          </Link>
          <SelectStarredBoardsButton />
          <AddBoardButton
            variant={!params.boardId ? "primary" : undefined}
            title={"Create"}
          />
        </div>
      </div>
      <BoardSearchInput />
      <div className="pref">
        <NotificationBell
          notification={notification}
          setNotification={setNotification}
        />
        <ProfileImg member={user} />
      </div>
    </header>
  )
}
