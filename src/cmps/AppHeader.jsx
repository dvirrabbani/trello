import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import SvgIcon from "./SvgIcon"
import { NotificationBell } from "./NotificationBell"
import { BoardSearchInput } from "./BoardSearchInput"
import { AddBoardButton } from "./AddBoardButton"

export function AppHeader() {
  const user = useSelector((storeState) => storeState.userModule.user)

  return (
    <header className="app-header">
      <div className="flex">
        <Link to={"/workspace"}>
          <SvgIcon iconName={"logo"} size={"lg"} />
        </Link>
        <AddBoardButton />
      </div>
      <BoardSearchInput />
      <div className="pref">
        <NotificationBell />
        <SvgIcon iconName={"profile"} size={"md"} />
      </div>
    </header>
  )
}
