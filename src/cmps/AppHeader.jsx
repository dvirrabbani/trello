import { useSelector } from "react-redux"
import { Link, matchRoutes, useLocation } from "react-router-dom"
import SvgIcon from "./SvgIcon"
import { NotificationBell } from "./NotificationBell"
import { BoardSearchInput } from "./BoardSearchInput"
import { AddBoardButton } from "./AddBoardButton"
import { SelectStarredBoardsButton } from "./SelectStarredBoardsButton"

export function AppHeader() {
  const user = useSelector((storeState) => storeState.userModule.user)
  // hide component on specific route
  const location = useLocation()
  const hideRoutes = [{ path: "/login" }]
  if (matchRoutes(hideRoutes, location)) {
    return null
  }

  return (
    <header className="app-header">
      <div className="flex">
        <div className="buttons-list">
          <Link to={"/workspace"}>
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
