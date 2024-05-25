import SvgIcon from "../SvgIcon"
import { updateBoard } from "../../store/board.actions"
import { BoardNavLink } from "../BoardNavLink"
import { useSelector } from "react-redux"
import { AddBoardButton } from "../AddBoardButton"

export function BoardSidebar() {
  const boards = useSelector((storeState) => storeState.boardModule.boards)

  function onToggleBoardStarred(ev, board) {
    ev.preventDefault()
    updateBoard(board, {
      key: "isStarred",
      value: !board.isStarred,
    })
  }
  return (
    <nav className="board-sidebar">
      <ul className="board-sidebar-list clean-list flex column">
        <div className="board-sidebar-list-header">
          <span className="title">Your boards</span>
          <AddBoardButton iconName={"plus"} />
        </div>
        {boards?.map((board) => {
          return (
            <li className="board-sidebar-item" key={board._id}>
              <BoardNavLink board={board} />
              <SvgIcon
                onClick={(ev) => onToggleBoardStarred(ev, board)}
                iconName={board.isStarred ? "starFill" : "star"}
              />
            </li>
          )
        })}
      </ul>
    </nav>
  )
}