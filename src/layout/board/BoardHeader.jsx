import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import SvgIcon from "../../cmps/SvgIcon"
import { NotificationBell } from "../../cmps/NotificationBell"
import { BoardSearchInput } from "../../cmps/BoardSearchInput"
import { AddBoardButton } from "../../cmps/AddBoardButton"
import { SelectStarredBoardsButton } from "../../cmps/SelectStarredBoardsButton"

export function BoardHeader() {
  const user = useSelector((storeState) => storeState.userModule.user)

  return (
    <header className="board-header">
      <div className="flex">
        <div className="buttons-list">
          <Link to={"/board"}>
            <SvgIcon iconName={"logo"} size={"lg"} />
          </Link>
          <SelectStarredBoardsButton />
          <AddBoardButton variant={"primary"} title={"Create"} />
        </div>
      </div>
      <BoardSearchInput />
      <div className="pref">
        <NotificationBell />
        <SvgIcon iconName={"profile"} size={"md"} />
      </div>
    </header>
  )
}
