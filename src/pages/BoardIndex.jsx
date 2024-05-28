import { useSelector } from "react-redux"
import { BoardList } from "../cmps/BoardList.jsx"
import SvgIcon from "../cmps/SvgIcon.jsx"
import { AddBoardButton } from "../cmps/AddBoardButton.jsx"

export function BoardIndex() {
  const boards = useSelector((storeState) => storeState.boardModule.boards)

  return (
    <div className="board-index">
      <div className="board-list-header">
        <SvgIcon iconName={"profile"} size={"md"} />
        <span>Starred Boards</span>
      </div>
      <BoardList
        key={"starred"}
        boards={boards.filter((board) => board.isStarred)}
      />
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
  )
}
