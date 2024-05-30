import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { BoardList } from "../cmps/BoardList.jsx"
import SvgIcon from "../cmps/SvgIcon.jsx"
import { AddBoardButton } from "../cmps/AddBoardButton.jsx"

export function BoardIndex() {
  const userRecentBoards = useSelector(
    (storeState) => storeState.userModule.user.recentBoards
  )
  const [recentBoards, setRecentBoards] = useState([])
  const boards = useSelector((storeState) => storeState.boardModule.boards)
  const [starredBoard, setStarredBoard] = useState([])

  useEffect(() => {
    updateStarredBoards()
    loadRecentBoards()
    document.body.dataset.theme = "dark"
  }, [boards])

  function updateStarredBoards() {
    boards && setStarredBoard(boards.filter((board) => board.isStarred))
  }

  function loadRecentBoards() {
    const recentBoards = []
    const sortedViewBoards = [...userRecentBoards]
      .sort((a, b) => b.date - a.date)
      .slice(0, 4)

    sortedViewBoards.forEach((sortedViewBoard) => {
      const recentBoard = boards.find(
        (board) => board._id === sortedViewBoard.id
      )
      if (recentBoard) {
        recentBoards.push(recentBoard)
      }
    })

    setRecentBoards(recentBoards)
  }

  return (
    <div className="board-index">
      <div className="container">
        <nav className="board-index-nav">
          <ul className="clean-list">
            <li>
              <NavLink to={"/board"}>
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
              <BoardList key={"starred"} boards={starredBoard} />
            </>
          )}
          {recentBoards.length > 0 && (
            <>
              <div className="board-list-header">
                <SvgIcon iconName={"clock"} size={"md"} />
                <span>Recently viewed</span>
              </div>
              <BoardList key={"Recently"} boards={recentBoards} />
            </>
          )}
          <div className="board-list-header all-boards">
            <SvgIcon iconName={"profile"} size={"md"} />
            <span>Your Boards</span>
          </div>
          <BoardList key={"all-boards"} boards={boards}>
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
