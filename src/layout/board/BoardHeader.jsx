import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import SvgIcon from "../../cmps/SvgIcon"
import { NotificationBell } from "../../cmps/NotificationBell"
import { BoardSearchInput } from "../../cmps/BoardSearchInput"
import { AddBoardButton } from "../../cmps/AddBoardButton"
import { SelectStarredBoardsButton } from "../../cmps/SelectStarredBoardsButton"
import { ProfileImg } from "../../cmps/ProfileImg"

export function BoardHeader() {
  const user = useSelector((storeState) => storeState.userModule.user)
  const params = useParams()

  return (
    <header className="board-header">
      <div className="flex">
        <div className="buttons-list">
          <Link to={"/board"}>
            <SvgIcon iconName={"logo"} size={"lg"} />
          </Link>
          <SelectStarredBoardsButton />
          <AddBoardButton variant={!params.boardId ? "primary" : undefined} title={"Create"} />
        </div>
      </div>
      <BoardSearchInput />
      <div className="pref">
        <NotificationBell />
        <ProfileImg member={user} />
      </div>
    </header>
  )
}
