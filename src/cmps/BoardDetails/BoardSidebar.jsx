import SvgIcon from "../SvgIcon"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { updateBoard } from "../../store/board.actions"
import { BoardNavLink } from "../BoardNavLink"
import { AddBoardButton } from "../AddBoardButton"
import { Button } from "../Button"
import { boardService } from "../../services/board.service"

export function BoardSidebar() {
  const [sidebarCollapse, setSidebarCollapse] = useState(false)
  const boards = useSelector((storeState) => storeState.boardModule.boards)
  const user = useSelector((storeState) => storeState.userModule.user)
  const userFirstLetter = user.fullName.charAt(0).toUpperCase()

  useEffect(() => {
    const isMobileViewport = window.matchMedia("(max-width: 768px)").matches

    setSidebarCollapse(isMobileViewport)
  }, [])

  async function onToggleBoardStarred(miniBoard) {
    const board = await boardService.getById(miniBoard._id)

    updateBoard(board, {
      key: "isStarred",
      value: !board.isStarred,
    })
  }

  return (
    <div className={`sidebar-wrapper ${sidebarCollapse ? "collapse" : ""}`}>
      <div
        className="collapse-sidebar"
        onClick={() => setSidebarCollapse(false)}
      >
        <Button className="dynamic-button shape-circle">
          <SvgIcon iconName="arrow" />
        </Button>
      </div>
      <nav className="board-sidebar">
        <header className="board-sidebar-header flex align-center justify-between">
          <div className="user-workspace flex align-center">
            <div className="user-thumbnail flex align-center justify-center">
              <span className="user-thumbnail-letter">{userFirstLetter}</span>
            </div>
            <div className="user-info">
              <div className="user-fullname">{user.fullName}</div>
              <div className="plan-type">Free</div>
            </div>
          </div>
          <Button
            className="dynamic-button"
            onClick={() => setSidebarCollapse(true)}
          >
            <SvgIcon iconName="arrow" />
          </Button>
        </header>
        <ul className="board-sidebar-list clean-list flex column">
          <div className="board-sidebar-list-header">
            <span className="title">Your boards</span>
            <AddBoardButton iconName="plus" />
          </div>
          {boards
            ?.sort((a, b) =>
              a.isStarred === b.isStarred ? 0 : a.isStarred ? -1 : 1
            )
            .map((board) => (
              <li className="board-sidebar-item" key={board._id}>
                <BoardNavLink board={board} />
                <span
                  className={`action ${board.isStarred ? "star-fill" : "star"}`}
                  onClick={() => onToggleBoardStarred(board)}
                >
                  <SvgIcon iconName={board.isStarred ? "starFill" : "star"} />
                </span>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  )
}
