import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { BoardList } from "../cmps/BoardList.jsx"
import SvgIcon from "../cmps/SvgIcon.jsx"
import { AddBoardButton } from "../cmps/AddBoardButton.jsx"

export function BoardIndex() {
  const user = useSelector((storeState) => storeState.userModule.user)
  const boards = useSelector((storeState) => storeState.boardModule.boards)
  const [starredBoard, setStarredBoard] = useState([])

  useEffect(() => {
    updateStarredBoards()
    document.title = "Boards"
    document.body.dataset.theme = "dark"
  }, [boards])

  function updateStarredBoards() {
    boards && setStarredBoard(boards.filter((board) => board.isStarred))
  }

  return (
    <div className="board-index">
      <div className="container">
        <nav className="board-index-nav">
          <ul className="clean-list">
            <li>
              <NavLink to={"/board"} className={"logo-btn"}>
                <SvgIcon iconName={"logo"} />
                <span>Boards</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                <SvgIcon iconName={"templates"} />
                <span>Templates</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                <SvgIcon iconName={"monitor"} />
                <span>Home</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="board-list-container">
          {starredBoard.length > 0 && (
            <>
              <div className="board-list-header">
                <SvgIcon iconName={"star"} size={"md"} />
                <span>Starred Boards</span>
              </div>
              <BoardList
                type={"starred"}
                key={"starred"}
                boards={starredBoard}
              />
            </>
          )}
          {user?.recentBoards?.length > 0 && (
            <>
              <div className="board-list-header">
                <SvgIcon iconName={"clock"} size={"md"} />
                <span>Recently viewed</span>
              </div>
              <BoardList
                type={"Recently"}
                key={"Recently"}
                boards={user?.recentBoards}
              />
            </>
          )}
          <div className="board-list-header all-boards">
            <SvgIcon iconName={"profile"} size={"md"} />
            <span>Your Boards</span>
          </div>
          <BoardList type={"all-boards"} key={"all-boards"} boards={boards}>
            <AddBoardButton
              title={"Create new board"}
              variant={"contained"}
              className={"board-item"}
            />
          </BoardList>
        </div>
      </div>
    </div>
  )
}
