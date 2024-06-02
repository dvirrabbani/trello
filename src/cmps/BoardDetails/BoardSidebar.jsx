import SvgIcon from "../SvgIcon"
import { useState } from "react"
import { useSelector } from "react-redux"
import { updateBoard } from "../../store/board.actions"
import { BoardNavLink } from "../BoardNavLink"
import { AddBoardButton } from "../AddBoardButton"
import { Button } from "../Button"
import { motion, AnimatePresence } from "framer-motion"
import { Transition } from "react-transition-group"

export function BoardSidebar() {
  const [sidebarCollapse, setSidebarCollapse] = useState(false)
  const boards = useSelector((storeState) => storeState.boardModule.boards)
  const user = useSelector((storeState) => storeState.userModule.user)
  const userFirstLetter = user.fullName.charAt(0).toUpperCase()

  function onToggleBoardStarred(ev, board) {
    ev.preventDefault()
    updateBoard(board, {
      key: "isStarred",
      value: !board.isStarred,
    })
  }

  return (
    <>
      <div className="collapse-sidebar">
        <Button
          className="dynamic-button shape-circle"
          onClick={() => setSidebarCollapse(false)}
        >
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
          {boards?.map((board) => (
            <li className="board-sidebar-item" key={board._id}>
              <BoardNavLink board={board} />
              <SvgIcon
                onClick={(ev) => onToggleBoardStarred(ev, board)}
                iconName={board.isStarred ? "starFill" : "star"}
              />
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
